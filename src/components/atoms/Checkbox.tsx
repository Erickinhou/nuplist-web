import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  className?: string;
}

const Checkbox = ({ label, checked, onChange, id, className }: CheckboxProps) => {
  return (
    <label className={"inline-flex items-center gap-2 cursor-pointer " + (className || "")} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="accent-rose-600 w-4 h-4 rounded border-gray-300 focus:ring-rose-500 focus:ring-2 transition-colors"
      />
      <span className="text-sm text-gray-700 select-none">{label}</span>
    </label>
  );
};

export default Checkbox;
