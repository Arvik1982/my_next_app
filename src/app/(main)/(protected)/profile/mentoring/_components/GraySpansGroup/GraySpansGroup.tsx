import * as SC from './GraySpansGroup.style';
import { FC } from 'react';
import { GraySpansGroup } from './GraySpansGroup.type';
import { GraySpan } from './GraySpan/GraySpan';
import { Controller } from 'react-hook-form';

const GraySpansGroup: FC<GraySpansGroup> = ({ list, control, name }) => {
  return (
    <SC.GreyWrapper>
      <Controller
        name={name}
        control={control}
        defaultValue={new Set<string>()}
        render={({ field: { value, onChange }, fieldState: {} }) => {
          return (
            <>
              {list.map((el) => (
                <GraySpan
                  key={el}
                  control={control}
                  value={value}
                  onChange={onChange}
                  active={value.has(el)}
                  text={el}
                />
              ))}
            </>
          );
        }}
      ></Controller>
    </SC.GreyWrapper>
  );
};

export default GraySpansGroup;
