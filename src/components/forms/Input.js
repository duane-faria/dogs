import React from 'react';
import styles from './Input.module.css';

export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
}) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        className={styles.input}
        onChange={(e) => onChange(e)}
        onBlur={() => onBlur()}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
