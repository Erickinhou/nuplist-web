import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  value: string | number | readonly string[] | undefined;
  type?: React.HTMLInputTypeAttribute;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, placeholder, value, type = "text", handleChange }: InputProps) {
  return (
    <div className="mb-3">
      <label htmlFor={label} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={label}
        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
