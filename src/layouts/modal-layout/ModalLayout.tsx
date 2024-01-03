import styles from './modalLayout.module.css';
import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
  setActive: (arg: boolean) => void;
}

export const ModalLayout: FC<Props> = ({ children, setActive }) => {
  return (
    <div className={styles.modalLayout} onClick={() => setActive(false)}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
};
