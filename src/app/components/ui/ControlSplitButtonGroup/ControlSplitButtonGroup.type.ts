import { Control, FieldValues, Path, PathValue } from 'react-hook-form';

export interface ControlSplitBtnProps<T extends FieldValues, U extends Path<T>> {
  name: U;
  control: Control<T>;
  list: string[];
  defaultValue?: PathValue<T, U>;
}
