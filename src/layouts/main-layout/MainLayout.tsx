import styles from "./main-layout.module.css";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return <main className={styles.layout}>{children}</main>;
};

export default MainLayout;
