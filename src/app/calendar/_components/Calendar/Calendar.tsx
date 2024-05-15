'use client';

import { useEffect, useMemo, useState } from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer, DateLocalizer, Event, Formats } from 'react-big-calendar';
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop';
import { format } from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { enUS } from 'date-fns/locale/en-US';
import { ru } from 'date-fns/locale/ru';
import { useTranslation } from 'react-i18next';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { initEvents } from './events';
import CalendarToolbar from './CalendarToolbar';
import EventInfoModal from '../EventInfoModal/EventInfoModal';
export interface IEventInfo extends Event {
  id: number;
  desc?: string;
}
interface ISlotInfo {
  start: Date;
  end: Date;
}

const locales = {
  'en-US': enUS,
  ru: ru,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const initialEventFormState = {
  description: '',
};

const lang = {
  'en-US': undefined,
  ru: {
    today: 'Сегодня',
    next: '>',
    previous: '<',
    month: 'Месяц',
    week: 'Неделя',
    day: 'День',
    allDay: 'Весь день',
    noEventsInRange: 'Событий нет',
    date: 'Дата',
    time: 'Время',
    event: 'Событие',
    showMore: (count: number) => `показать все(${count}+)`,
  },
};

const generateId = () => Math.floor(Math.random() * 10000) + 1;

export default function Calendar() {
  const { i18n } = useTranslation();
  // Получение текущего языка
  const currentLanguage = i18n.language;

  const [events, setEvents] = useState<IEventInfo[]>(initEvents);
  const [openSlot, setOpenSlot] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<IEventInfo | null>(null);
  const [eventInfoModal, setEventInfoModal] = useState(false);
  const [eventFormData, setEventFormData] = useState(initialEventFormState);
  const [showMoreEvents, setShowMoreEvents] = useState<IEventInfo[]>([]);
  const [locale, setLocale] = useState<'en-US' | 'ru'>('en-US');

  useEffect(() => {
    if (currentLanguage === 'en') {
      setLocale('en-US');
    } else {
      setLocale('ru');
    }
  }, [currentLanguage]);

  const { defaultDate, messages } = useMemo(
    () => ({
      defaultDate: new Date(),
      messages: lang[locale],
    }),
    [locale],
  );

  const DnDCalendar = withDragAndDrop(BigCalendar);

  const onEventDrop: withDragAndDropProps['onEventDrop'] = (data) => {
    window.alert(data);
  };

  const handleSelectEvent = (event: IEventInfo) => {
    setCurrentEvent(event);
    setEventInfoModal(true);
  };

  const handleSelectSlot = ({ start, end }: ISlotInfo) => {
    setOpenSlot(true);
    const title = window.prompt('New Event name');
    if (title) {
      setEvents((prev) => [
        ...prev,
        {
          id: generateId(),
          title,
          start,
          end,
        },
      ]);
    }
  };

  const handleClose = () => {
    setEventFormData(initialEventFormState);
    setOpenSlot(false);
  };

  const onDeleteEvent = () => {
    if (currentEvent) {
      setEvents(() => [...events].filter((event) => event.id !== currentEvent.id!));
    }
    setEventInfoModal(false);
  };

  return (
    <>
      {currentEvent ? (
        <EventInfoModal
          open={eventInfoModal}
          handleClose={() => setEventInfoModal(false)}
          onDeleteEvent={onDeleteEvent}
          currentEvent={currentEvent}
        />
      ) : (
        <></>
      )}
      <DnDCalendar
        defaultView={'month'}
        defaultDate={defaultDate}
        views={['month']}
        events={events}
        localizer={localizer}
        culture={locale}
        components={{
          toolbar: () => CalendarToolbar({ locale, defaultDate }),
        }}
        messages={messages}
        onEventDrop={onEventDrop}
        draggableAccessor={(event) => true}
        resizable={false}
        selectable={true}
        step={15} // number of minutes per timeslot
        onSelectSlot={handleSelectSlot}
        onSelectEvent={(event) => handleSelectEvent(event as IEventInfo)}
        onShowMore={(events) => setShowMoreEvents(events as IEventInfo[])}
        popup={true} // Show truncated events in an overlay when you click the "+x more" link.
        formats={
          {
            dayFormat: (date: Date, culture, localizer: DateLocalizer) => localizer.format(date, 'EE', culture),
            dayHeaderFormat: (date: Date, culture, localizer: DateLocalizer) =>
              localizer.format(date, 'EE MMM do', culture),
            weekdayFormat: (date, culture, localizer: DateLocalizer) => localizer.format(date, 'eeeeee', culture),
          } as Formats
        }
        style={{
          height: '100%',
          minHeight: 900,
          width: '100%',
          minWidth: 1100,
          backgroundColor: 'rgba(255, 255, 255, 0.96)',
          borderRadius: 10,
        }}
      />
    </>
  );
}
