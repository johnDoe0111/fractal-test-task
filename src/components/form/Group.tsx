import { group } from "../../constants"
import styles from "./group.module.css"
import { FC } from "react"
import { Control, useController } from "react-hook-form"

interface Props {
  title: string
  type: string
  
}

export const Group: FC<Props> = ({ title, type }) => {

  return (
    <div className={styles.groupWrapper}>
      <p className={styles.groupTitle}>{title}</p>
      {group.map((item) => (
        <div key={item.id} className={styles.group}>
          <input type={type}/>
          <p>{item.id}</p>
        </div>
      ))}
    </div>
  )
}
