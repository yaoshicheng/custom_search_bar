# UX search
---
title: 自定义搜索项展示栏
---

## 代码演示

### 常规显示

<code src="./demos/single.tsx" background="#f5f5f5" height="500px" title="基础用法" />

### required 属性

<code src="./demos/single_required.tsx" background="#f5f5f5" height="500px" title="基础用法 required" />

### formats 属性

<code src="./demos/single_formats.tsx" background="#f5f5f5" height="500px" title="基础用法 formats" />

### extra 属性

<code src="./demos/single_extra.tsx" background="#f5f5f5" height="500px" title="基础用法 extra" />

## API

### Search Condition Bar

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| selectedFieldValues | 已选项列表 | `Array<SearchConditionItem>` | `-` |
| onDelete | delete 回调事件 | `(code: string) => {}` | `-` |
| onClean | Clean 回调事件 | `() => {}` | `-` |
| showSearchConditionBar | 是否显示已选搜索条件栏 | `boolean` | `false` |
| extra | 额外显示组件 | `React.Component` | `-` |
| formats | 自定义搜索栏已选项显示方式，在 showSearchConditionBar 为 true 时生效 | `{[value: string]: any}` | `-` |

### SearchConditionItem

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标签名称 | `string` | `-` |
| code | 标签字段名称 | `string` | `-` |
| value | 标签值 | `string` | `-` |
| type | 字段支持的类型 | `见type支持类型` | `text` |
| selectOptions | 选择框选项，仅在 type 为 select 或 multipleSelect 生效 | `Array<FieldItemSelectOption>` | `-` |

### type 支持类型

'text' | 'select' | 'multipleSelect' | 'provincePicker'| 'cityPicker' | 'areaPicker' | 'streetPicker' | 'dateRangePicker' | 'timeRangePicker' | 'timePicker' | 'datePicker' | 'number' | 'numberRange' | 'email' | 'monthPicker' | 'monthRangePicker' | 'yearPicker' | 'yearRangePicker' | 'weekPicker' | 'weekRangePicker' | 'quarterPicker' | 'quarterRangePicker'
