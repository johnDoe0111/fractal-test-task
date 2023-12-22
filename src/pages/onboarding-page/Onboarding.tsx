import styles from "./onboarding.module.css"
import { progressBarData } from "constants"
import MainLayout from "layouts/MainLayout"

const Onboarding = () => {
  const currentUrl = new URL(window.location.href)
  const stepParam = currentUrl.searchParams.get("step")
  console.log('Значение параметра "step":', stepParam)

  return (
    <MainLayout>
      <section className={styles.onboarding}>
        <div className={styles.progressBar}>
          {progressBarData.map((item: any) => (
            <div className={`${styles.step} ${styles.active}`}>
              <div className={styles.circle}>1</div>
              <div className={styles.label}>{item.step}</div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  )
}

export default Onboarding
