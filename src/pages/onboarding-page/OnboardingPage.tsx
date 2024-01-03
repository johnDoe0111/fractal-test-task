import styles from './onboarding.module.css';
import { ProgressBar } from 'components/progress-bar/ProgressBar';
import FirstStep from 'components/steps/FirstStep';
import SecondStep from 'components/steps/SecondStep';
import ThirdStep from 'components/steps/ThirdStep';
import { useQueryParams } from 'hooks/useQueryParams';
import MainLayout from 'layouts/main-layout/MainLayout';
import { JSX } from 'react';

const steps: Record<string, JSX.Element> = {
  1: <FirstStep />,
  2: <SecondStep />,
  3: <ThirdStep />,
};

const OnboardingPage = () => {
  const { getQuery } = useQueryParams();

  const step: string = getQuery('step') || '1';

  return (
    <MainLayout>
      <section className={styles.onboarding}>
        <ProgressBar step={+step} />
        {steps[step as string]}
      </section>
    </MainLayout>
  );
};

export default OnboardingPage;
