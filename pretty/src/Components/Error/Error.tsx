import React from 'react';
import styles from './Error.module.scss';

interface ErrorProps {
  message?: string;
}

const Error = ({ message = "Page not found" }: ErrorProps) => (
  <h2 className={styles.error}>{message}</h2>
);

export default Error;
