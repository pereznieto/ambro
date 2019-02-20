import React from 'react';
import styles from './TextArea.module.scss';

interface TextAreaProps {
  label: string;
  caption?: string;
  name: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isDisabled?: boolean;
}

const TextArea = ({ label, caption, name, value, onChange, isDisabled }: TextAreaProps) => (
  <div className={styles.container}>
    <label className={styles.textArea}>
      <span className={styles.label}>
        {label}{caption && <span className={styles.caption}>{caption}</span>}
      </span>
      <textarea
        className={styles.input}
        name={name}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
      />
    </label>
  </div>
);

export default TextArea;
