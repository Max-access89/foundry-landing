import React from "react";
import { InputText } from "primereact/inputtext";

interface InputFieldProps {
  id: string;
  label: string;
  value: any;
  onChange: (value: string) => void;
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  onChange,
  className = "",
  inputProps,
}) => {
  return (
    <div className={`input-field ${className}`}>
      <span className="input-field__float-label">
        <InputText
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...inputProps}
          className={`input-field__input ${inputProps?.className || ""}`}
        />
        <label htmlFor={id} className="input-field__label">
          {label}
        </label>
      </span>
    </div>
  );
};

export default InputField;
