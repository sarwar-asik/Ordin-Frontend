"use client";

import { Select } from "antd";
import React from "react";

export type selectOptions = {
  label: string;
  value: string;
};
type SelectFieldsProps = {
  name: string;
  value?: string | string[] | undefined;
  size?: `large` | "small";
  placeholder?: string;
  label?: string;
  options: selectOptions[];
  defaultValue?: "string";
  handleChange?: (el: string) => void;
};

const FormSelectField = ({
  name,
  size,
  value,
  placeholder,
  label,
  options,
  defaultValue,
  handleChange,
}: SelectFieldsProps) => {
  return (
    
      <Select
        // onChange={onChange}
        // onChange={handleChange ? handleChange : onChange}
        options={options}
        value={value}
        size={size}
        style={{ width: "100%" }}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />

  );
};

export default FormSelectField;
