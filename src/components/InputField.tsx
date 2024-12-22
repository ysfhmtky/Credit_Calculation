import React from 'react';

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  value: string | number;
  onChange: (value: string) => void;
  min?: string;
  step?: string;
}

export function InputField({ 
  label, 
  id, 
  type, 
  value, 
  onChange,
  min,
  step 
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label 
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        step={step}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}