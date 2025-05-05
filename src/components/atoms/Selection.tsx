import React from 'react'
import SelectArrowIcon from './icons/SelectArrowIcon';

type SelectionProps = {
  label: string;
  options: React.OptionHTMLAttributes<HTMLOptionElement>[];
  onSelect: (value: string) => void;
  selectedValue: string;
}

const Selection = ({ label, options, onSelect, selectedValue }: SelectionProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={label} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <select
          name={label}
          id={label}
          className="w-full appearance-none px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 sm:text-sm transition-colors duration-150 pr-10"
          onChange={(e) => onSelect(e.target.value)}
          value={selectedValue}
        >
          {options.map((option) => (
            <option key={option.value?.toString()} value={option.value}>{option.label}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <SelectArrowIcon className="h-4 w-4 text-rose-400" />
        </div>
      </div>
    </div>
  )
}

export default Selection