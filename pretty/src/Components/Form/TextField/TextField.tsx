import React from 'react';
import styles from './TextField.module.scss';

interface TextFieldProps {
  label: string;
  caption?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}

const TextField = ({ label, caption, name, value, onChange, isDisabled }: TextFieldProps) => (
  <label className={styles.textField}>
    <span className={styles.label}>
      {label}{caption && <span className={styles.caption}>{caption}</span>}
    </span>
    <input
      className={styles.input}
      name={name}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      type="text"
    />
  </label>
);

export default TextField;
