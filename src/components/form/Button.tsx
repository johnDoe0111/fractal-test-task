import styles from './button.module.css'
import { FC } from 'react'

interface Props {
  title: string
  id: string
  type: 'button' | 'submit'
}

const Button: FC<Props> = ({ title, id, type }) => {
  return (
    <button className={styles.button} type={type}>{title}</button>
  )
}

export default Button