import { Input, SingleDropdownInput, SplitButtonGroup, ToggleSwitch } from '@/app/components';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as SC from './MentoringPayment.style';
import { MentoringPaymentProps } from './MentoringPayment.type';

const currencies = ['₽', '$', '¥'];
const periods = ['Час', 'День', 'Неделя', 'Месяц'];

export const MentoringPayment: FC<MentoringPaymentProps> = ({ control }) => {
  const [paid, setPaid] = useState(false);
  const [checked, setChecked] = useState(false);
  const { t } = useTranslation();

  const payButtonClick = (e: string) => {
    e === 'Платно' ? setPaid(true) : setPaid(false);
  };

  const payOptions = [t('mentoring.free'), t('mentoring.withFee')];

  return (
    <SC.Container>
      <SplitButtonGroup nameButton={payOptions} activeButton={payOptions[0]} onClickButton={payButtonClick} />
      {paid ? (
        <>
          <SC.PaymentConditions>
            <SC.MoneyContainer>
              <Input
                name={'payment.price'}
                control={control}
                helperText='Цена'
                defaultValue={1200}
                type={'number'}
                placeholder='Введите стоимость'
              />
              <SingleDropdownInput
                name='payment.currency'
                control={control}
                defaultValue={currencies[0]}
                list={currencies}
              />
            </SC.MoneyContainer>
            <SingleDropdownInput
              name='payment.period'
              control={control}
              helperText={'Оплата за'}
              defaultValue={periods[0]}
              list={periods}
            />
          </SC.PaymentConditions>
          <ToggleSwitch
            name='payment.first_free'
            control={control}
            checked={checked}
            label='Бесплатная первая встреча'
            onClickSwitch={() => setChecked(!checked)}
          ></ToggleSwitch>
        </>
      ) : null}
    </SC.Container>
  );
};
