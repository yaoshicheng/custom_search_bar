import React, { ReactNode } from 'react';

type FieldItemSelectOption = {
  [value: string]: string | Function;
};

type Formats = {
  [value: string]: any;
};

type SearchConditionItem = {
  name: string; // label名称
  code: string;
  selectOptions?: Array<FieldItemSelectOption>; // 默认空数组
  required?: boolean;
  value: any;
  type?:
    | undefined
    | 'text'
    | 'select'
    | 'multipleSelect'
    | 'provincePicker'
    | 'cityPicker'
    | 'areaPicker'
    | 'streetPicker'
    | 'dateRangePicker'
    | 'timeRangePicker'
    | 'timePicker'
    | 'datePicker'
    | 'number'
    | 'numberRange'
    | 'email'
    | 'monthPicker'
    | 'monthRangePicker'
    | 'yearPicker'
    | 'yearRangePicker'
    | 'weekPicker'
    | 'weekRangePicker'
    | 'quarterPicker'
    | 'quarterRangePicker';
  onDelete?: Function;
  [otherProp: string]: any;
};

type SearchConditionResultProps = {
  extra?: ReactNode; //ReactComponent,
  onDelete?: Function;
  onClean?: Function;
  selectedFieldValues: Array<SearchConditionItem>;
  formats?: Formats;
};

export type { SearchConditionResultProps, SearchConditionItem };
