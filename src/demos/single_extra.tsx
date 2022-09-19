import React, { useState } from 'react';
import { Button } from 'antd';
import SearchConditionResultBar from '../index';
import { SearchConditionItem } from '../types';

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

  const extra = (
    <>
      <Button type={'primary'} style={{ margin: '0 8px' }}>
        新增
      </Button>

      <Button type={'default'} style={{ margin: '0 8px' }}>
        导入
      </Button>
      <Button type={'default'}>导出</Button>
    </>
  );

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
    extra,
    onClean: handleClean,
    onDelete: handleDelete,
  };

  return <SearchConditionResultBar {...props} />;
};
