import { dotData } from "../../constants"
import styles from "./progressBar.module.css"
import classNames from "classnames"
import React, { FC } from "react"

interface Props {
  step: number | null
}

export const ProgressBar: FC<Props> = ({ step }) => {
  const cx = classNames.bind(styles)

  return (
    <div className={styles.progressBar}>
      {dotData.map((item) => (
        <React.Fragment key={item.step}>
          <div
            className={cx(styles.dot, {
              [styles.purpleBg]:
                step === item.step ||
                step === item.step + 1 ||
                step === item.step + 2,
            })}
          >
            {step === item.step && <img src={item.activeImg} alt="dot-img" />}
            {step === item.step + 1 || step === item.step + 2 ? (
              <img src={item.completedImg} alt="dot-img" />
            ) : null}
          </div>
          {item.step < 3 && (
            <div
              className={cx(styles.line, {
                [styles.purpleBg]: step === item.step + 1 || step === item.step + 2,
              })}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
