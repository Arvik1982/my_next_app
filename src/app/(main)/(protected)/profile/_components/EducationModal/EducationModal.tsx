import * as SC from './EducationModal.style';
import { Dispatch, FC, SetStateAction } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Modal } from '@mui/material';
import { Input, SingleDropdownInput, TabButtons } from '@/app/components';
import FileUploader from '../FileUploader/FileUploader';
import { useTranslation } from 'react-i18next';
import { WorkEndDateInput } from '../../experience/_components/Inputs/WorkEndDateInput/WorkEndDateInput';

const educationTypes = ['Среднее начальное', 'Среднее профессиональное', 'Высшее'];
const countries = ['Россия', 'Америка', 'Китай'];
const cities = ['1', '2', '3'];

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const EducationModal: FC<Props> = ({ open, setOpen }) => {
  const { t } = useTranslation();
  const SUBMIT = t('education.submit');
  const CANCEL = t('education.cancel');
  const ICON_SIZE = 24;
  const {
    control,
    formState: { isValid },
    handleSubmit,
    watch,
  } = useForm();

  const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

  const handleClose = () => setOpen(false);

  const onSubmit: SubmitHandler<FieldValues> = () => {};

  const handleTabButtons = (value: string) => {
    if (value === CANCEL) {
      handleClose();
    }
    if (value === SUBMIT) {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <SC.Container>
        <SC.CloseIcon src={'/images/exit.svg'} onClick={handleClose} alt='close' width={ICON_SIZE} height={ICON_SIZE} />
        <SC.StyledForm>
          <SC.Title>{t('education.placeStudy')}</SC.Title>
          <SingleDropdownInput
            helperText={t('education.type')}
            placeholder={t('education.selectType')}
            name='type'
            list={educationTypes}
            control={control}
          />
          <Input
            helperText={t('education.placeName')}
            placeholder={t('education.enterPlaceName')}
            name='institution-name'
            control={control}
            isRequired
            type={'text'}
          />
          <SC.Stack>
            <SingleDropdownInput
              helperText={t('education.country')}
              placeholder={t('education.selectCountry')}
              name='place'
              list={cities}
              control={control}
              isRequired
            />
            <SingleDropdownInput
              helperText={t('education.city')}
              placeholder={t('education.selectCity')}
              name='city'
              list={cities}
              control={control}
              isRequired
            />
          </SC.Stack>
          <Input
            name='faculty'
            helperText={t('education.faculty')}
            placeholder={t('education.enterPosition')}
            type='text'
            control={control}
            isRequired
          />
          <SC.Stack>
            <SC.DatesWrap>
              <SingleDropdownInput
                helperText={t('education.studyBegin')}
                placeholder={t('education.month')}
                name='start-month'
                list={months}
                control={control}
                isRequired
              />
              <SingleDropdownInput
                name='study-start-year'
                placeholder={t('education.year')}
                list={cities}
                control={control}
                isRequired
              />
            </SC.DatesWrap>
            <WorkEndDateInput control={control} watch={watch} />
          </SC.Stack>
          <SC.Subtitle>{t('education.diploms')}</SC.Subtitle>
          {isValid && (
            <FileUploader title={t('education.loadDiplom')} name='certificate' control={control} watch={watch} />
          )}
          <TabButtons
            nameButton={[SUBMIT, CANCEL]}
            activeButton={SUBMIT}
            onClickButton={handleTabButtons}
            isDisabled={!isValid}
          />
        </SC.StyledForm>
      </SC.Container>
    </Modal>
  );
};

export default EducationModal;
