export function isVideoFile(fileName: string) {
  const videoExtensions = ['ogm', 'wmv', 'mpg', 'webm', 'ogv', 'mov', 'asx', 'mpeg', 'mp4', 'm4v', 'avi'];

  const lastDotIndex = fileName.lastIndexOf('.');

  if (lastDotIndex !== -1 && lastDotIndex < fileName.length - 1) {
    const extension = fileName.slice(lastDotIndex + 1).toLowerCase();
    if (videoExtensions.includes(extension)) {
      return true;
    }
  }
  return false;
}

export function translateGradeIntoEng(value: string) {
  switch (value) {
    case 'Стажер (Intern)':
      return 'Intern';
    case 'Младший (Junior)':
      return 'Junior';
    case 'Средний (Middle)':
      return 'Middle';
    case 'Старший (Senior)':
      return 'Senior';
    case 'Ведущий (Lead)':
      return 'Lead';
    default:
      return '';
  }
}

export function translateGradeIntoRus(value: string) {
  switch (value) {
    case 'Intern':
      return 'Стажер (Intern)';
    case 'Junior':
      return 'Младший (Junior)';
    case 'Middle':
      return 'Средний (Middle)';
    case 'Senior':
      return 'Старший (Senior)';
    case 'Lead':
      return 'Ведущий (Lead)';
    default:
      return '';
  }
}

export function translateStatusIntoEng(value: string) {
  switch (value) {
    case 'Ищу работу':
      return 'Actively searching';
    case 'Не ищу работу':
      return 'No searching';
    case 'Рассматриваю предложения':
      return 'Considering offers';
    default:
      return '';
  }
}

export function translateStatusIntoRus(value: string) {
  switch (value) {
    case 'Actively searching':
      return 'Ищу работу';
    case 'No searching':
      return 'Не ищу работу';
    case 'Considering offers':
      return 'Рассматриваю предложения';
    default:
      return '';
  }
}

export function formatDateTime(value = '') {
  const date = new Date(value);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}.${month}.${year}, ${hours}:${minutes}`;
}

export function formatDate(value = '') {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const date = new Date(value);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
