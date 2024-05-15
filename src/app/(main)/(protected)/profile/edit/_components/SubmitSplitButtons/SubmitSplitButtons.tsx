import { useTranslation } from 'react-i18next';
import * as SC from './SubmitSplitButtons.style';

export const SubmitSplitButtons = () => {
  const { t } = useTranslation();

  return (
    <SC.AbsoluteContainer>
      <SC.BtnContainer id='profileSubmitBtns'>
        <SC.ButtonSubmit disableRipple type={'submit'}>
          <span>{t('edit.buttonSave')}</span>
        </SC.ButtonSubmit>
        <SC.ButtonClear disableRipple type={'reset'}>
          <span>{t('edit.buttonClear')}</span>
        </SC.ButtonClear>
      </SC.BtnContainer>
    </SC.AbsoluteContainer>
  );
};
