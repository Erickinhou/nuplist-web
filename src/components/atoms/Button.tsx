import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'inherit';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  textAlign?: 'center' | 'left' | 'right';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  onClick,
  className,
  textAlign = 'left',
  ...props
}: ButtonProps) {
  const baseStyles = " cursor-pointer font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "text-white bg-rose-600 hover:bg-rose-700 focus:ring-rose-500",
    secondary: "text-rose-600 bg-rose-50 hover:bg-rose-100 focus:ring-rose-500",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-rose-500",
    icon: "bg-white hover:bg-gray-200 text-gray-600 focus:ring-rose-500"
  };

  const sizeStyles = {
    sm: "w-12 py-1.5 px-3 text-sm",
    md: "w-24 py-2 px-4 text-base",
    lg: "w-40 py-3 px-6 text-base",
    inherit: "py-2 px-4 text-base"
  };

  const textAlignStyles = {
    center: "text-center",
    left: "text-left",
    right: "text-right"
  };

  const iconStyles = variant === 'icon' ?
    {
      sm: "w-6 h-6 p-1",
      md: "w-8 h-8 p-1.5",
      lg: "w-10 h-10 p-2",
      inherit: "p-1"
    } : {};

  const widthStyles = fullWidth ? "w-full" : "";

  const buttonStyles = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${variant === 'icon' ? iconStyles[size] : sizeStyles[size]} 
    ${widthStyles}
    ${className || ''}
  `.trim();

  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      type="button"
      {...props}
    >
      {icon && variant === 'icon' ? icon : (
        <div className={`${textAlignStyles[textAlign]}`}>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </div >
      )}
    </button>
  );
}