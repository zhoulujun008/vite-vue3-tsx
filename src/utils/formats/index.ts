import { getCategories } from './categories';
import { ValueFormatCategory, UnitCustom } from './valueFormats';

export function labelFormatter(value: any, unitStr?: string, isPercent = false) {
  if (isPercent) {
    return `${value}%`;
  }
  let unit: UnitCustom = {
    choice: [],
    custom: '',
  };
  if (typeof unitStr === 'string') {
    if (unitStr) {
      unit.choice = ['custom'];
      unit.custom = unitStr;
    } else {
      unit.choice = ['Misc', 'short'];
      unit.custom = '';
    }
  } else {
    if (unitStr) {
      unit = unitStr;
    } else {
      unit.choice = ['Misc', 'short'];
      unit.custom = '';
    }
  }
  const categories: ValueFormatCategory[] = getCategories();
  const category = categories.find(item => item.id === unit.choice[0]);
  if (!category) {
    return `${value} ${unitStr}`;
  }
  if (category.id === 'custom') {
    return `${value}${unit.custom || ''}`;
  }
  const formatter = category.formats.find(item => item.id === unit.choice[1]);
  if (!formatter) {
    return `${value}${unit.custom || ''}`;
  }
  if (formatter.fn instanceof Function) {
    return `${formatter.fn(value).prefix || ''}${formatter.fn(value).text}${formatter.fn(value).suffix || ''}`;
  }
  return `${value}${formatter.fn}`;
}


