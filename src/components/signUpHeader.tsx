import styles from '../pages/sign-up-page/signUp.module.css';
import { mainHeaderIcons, name } from 'consts';

export const SignUpHeader = () => {
  const words = name.split(' ');

  const initials = words.map(word => word[0]).join('');

  return (
    <>
      <div className={styles.flex}>
        <div className={styles.circle}>{initials}</div>
        <div>
          <div className={`${styles.name} ${styles.textColor}`}>{name}</div>
          <div className={styles.flex}>
            {mainHeaderIcons.map(item => (
              <div
                className={`${styles.flex} ${styles.iconsMargin}`}
                key={item.id}
              >
                <img src={item.image} alt='main-icon' />
                <a className={styles.link} href={item.link}>
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.line} />
    </>
  );
};
