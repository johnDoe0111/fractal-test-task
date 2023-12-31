import Plus from '../../assets/icons/Plus.png';
import styles from './button.module.css';
import { useQueryParams } from 'hooks/useQueryParams';
import { FC, useEffect, useState } from 'react';

interface Props {
  title?: string;
  id?: string;
  type: 'button' | 'submit';
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setActive?: (arg: boolean) => void;
  disabled?: boolean;
}

const Button: FC<Props> = ({
  title,
  type,
  handleClick,
  setActive,
  disabled,
}) => {
  const [step, setStep] = useState<number | null>(null);

  const { getQuery } = useQueryParams();

  useEffect(() => {
    setStep(() => parseInt(getQuery('step') || '0', 10));
  }, [getQuery]);

  const { navigateWithParams } = useQueryParams();

  const handleStep = () => {
    if (step === 1) {
      navigateWithParams('/', '', '');
    } else if (step === 2) {
      navigateWithParams('/onboarding', 'step', '1');
    } else if (step === 3) {
      navigateWithParams('/onboarding', 'step', '2');
    }
  };

  const buttonConfigs: Record<string, { onClick: () => void }> = {
    Назад: { onClick: () => handleStep() },
    Отправить: { onClick: () => setActive && setActive(true) },
    Закрыть: { onClick: () => setActive && setActive(false) },
  };

  const config = title ? buttonConfigs[title] : undefined;

  if (!title) {
    return (
      <button className={styles.addButton} onClick={handleClick} type={type}>
        <img src={Plus} alt='add-button' />
      </button>
    );
  }

  return (
    <button
      className={title === 'Назад' ? styles.backButton : styles.button}
      onClick={config?.onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
