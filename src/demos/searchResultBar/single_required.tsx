import React, { useState } from 'react';
import { Button } from 'antd';
import SearchConditionResultBar from '../../components/searchConditionBar/index';
import { SearchConditionItem } from '../../components/searchConditionBar/types';

export default () => {
  const initValues = [
    {
      name: '文本框', // label名称
      code: 'test1',
      required: true,
      value: 'test1',
      type: 'text',
    },
    {
      name: '文本框2', // label名称
      code: 'test2',
      required: true,
      value: 'test1',
      type: 'text',
    },
    {
      name: '文本框3', // label名称
      code: 'test3',
      required: true,
      value: 'test1',
      type: 'text',
    },
    {
      name: '单选栏', // label名称
      code: 'test4',
      required: false,
      value: 'apple',
      type: 'select',
      selectOptions: [
        { label: '苹果', value: 'apple' },
        { label: '橘子', value: 'orange' },
      ],
    },
    {
      name: '多选栏', // label名称
      code: 'test5',
      required: false,
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
    onClean: handleClean,
    onDelete: handleDelete,
  };

  return <SearchConditionResultBar {...props} />;
};
