import React from 'react';
import { Checkbox } from 'tdesign-mobile-react/checkbox';

export default function () {
  return (
    <>
      <Checkbox label="多选" align="right" />
      <Checkbox label="多选" align="right" checked />
      <Checkbox label="多选" align="right" checked />
      <Checkbox label="多选多选多选多选多选多选多选多选多选多选多选多选多选多选多选多选多选多选多选" align="right" maxLabelRow={1} />
    </>
  );
}
