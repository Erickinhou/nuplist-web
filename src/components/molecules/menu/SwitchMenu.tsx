import React from 'react'


export type Option<T> = {
  value: T;
  icon: React.ReactNode;
  description: string;
}


type SwitchMenuProps<T> = {
  options: Option<T>[];
  selectedOption: Option<T>["value"];
  onChange: (option: Option<T>) => void;
}

const SwitchMenu = <T extends string>({ options, selectedOption, onChange }: SwitchMenuProps<T>) => {
  const baseStyles = `p-5 cursor-pointer rounded-md`;

  const switchStyles = (value: T) => `
  ${baseStyles} 
  ${selectedOption === value ? 'bg-rose-100' : 'bg-white'} 
`.trim();

  return (
    <div className='mb-4'>
      <div className='flex gap-2'>
        {options.map((option) => (
          <div className={switchStyles(option.value)} key={option.value} onClick={() => onChange(option)}>
            <div className='flex justify-between mb-4'>
              <span className='text-lg text-rose-600'>
                {option.value}
              </span>
              <div className='text-rose-600'>
                {option.icon}
              </div>
            </div>
            <span className='text-sm text-gray-500'>
              {`${option.description}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SwitchMenu