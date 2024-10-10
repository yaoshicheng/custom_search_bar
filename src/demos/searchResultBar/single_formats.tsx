import React, { useState } from 'react';
import { Button } from 'antd';
import SearchConditionResultBar from '../../components/searchConditionBar/index';
import { SearchConditionItem } from '../../components/searchConditionBar/types';

export default () => {
  const initValues = [
    {
      name: '文本框', // label名称
      code: 'test1',
      value: 'test1',
      type: 'text',
    },
    {
      name: '单选栏', // label名称
      code: 'test2',
      value: 'apple',
      type: 'select',
      selectOptions: [
        { label: '苹果', value: 'apple' },
        { label: '橘子', value: 'orange' },
      ],
    },
    {
      name: '多选栏', // label名称
      code: 'test2',
      value: ['apple', 'orange'],
      type: 'multipleSelect',
      selectOptions: [
        { label: '苹果', value: 'apple' },
        { label: '橘子', value: 'orange' },
      ],
    },
  ];
  // @ts-ignore
  const [value, setValue] = useState<SearchConditionItem[]>(initValues);

  const handleClean = () => {
    const filterValue = value.filter((_value) => _value.required);
    setValue(filterValue);
  };

  const handleDelete = (code: string) => {
    const findIndex = value.findIndex((_value) => _value.code === code);
    const copyData = value.map((_value) => _value);
    if (findIndex > -1 && copyData[findIndex]?.required !== true) {
      copyData.splice(findIndex, 1);
    }
    setValue(copyData);
  };

  const props = {
    showSearchConditionBar: true,
    selectedFieldValues: value,
    formats: {
      datePicker: 'YYYY/MM/DD',
      dateRangePicker: 'YYYY/MM/DD',
      timePicker: 'hh:mm:ss',
      multipleSelect: (
        value: Array<string | number>,
        selectOptions: Array<{ label: string; value: any }>,
      ) => {
        const tmpArr = [];
        if (!selectOptions) {
          return value?.join(',');
        }
        for (let _value of value) {
          const find = selectOptions.find((option) => _value === option.value);
          if (find) {
            tmpArr.push(find?.label);
          } else {
            tmpArr.push(_value);
          }
        }
        return tmpArr?.join(',');
      },
      text: (value: string) => {
        return `${value}~~`;
      },
    },
    onClean: handleClean,
    onDelete: handleDelete,
  };

  return <SearchConditionResultBar {...props} />;
};
