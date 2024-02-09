import React from 'react';
import styles from './not-active-label.module.css';

export interface ActiveLabelProps {
  children: React.ReactNode;
}

export default function NotActiveLabel({ children }: ActiveLabelProps) {
  return <span className={styles.label}>children</span>;
}
