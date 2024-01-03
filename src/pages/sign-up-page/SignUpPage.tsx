import { createUser } from '../../redux/user/userAction';
import styles from './signUp.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/form/Button';
import { SignUpInputs } from 'components/form/SignUpInputs';
import { SignUpHeader } from 'components/signUpHeader';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { useQueryParams } from 'hooks/useQueryParams';
import MainLayout from 'layouts/main-layout/MainLayout';
import { UserFull } from 'models/IUser';
import { useForm } from 'react-hook-form';
import { signUpSchema } from 'validation';

interface SignUpFormData {
  tel: string;
  email: string;
}

const SignUpPage = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading, error } = useAppSelector(state => state.user);

  const { navigateWithParams } = useQueryParams();

  const { handleSubmit, control, reset } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
    mode: 'all',
    defaultValues: {
      tel: user?.tel || '',
      email: user?.email || '',
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    dispatch(createUser(data as UserFull));

    if (!isLoading) {
      navigateWithParams('/onboarding', 'step', '1');
      reset();
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <MainLayout>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'>
        <div className={styles.main}>
          <SignUpHeader />

          <div className={styles.form}>
            <SignUpInputs control={control} />

            <div className={styles.buttonStart}>
              <Button
                title={isLoading ? 'Загрузка...' : 'Начать'}
                id='button-start'
                type='submit'
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
      </form>
    </MainLayout>
  );
};

export default SignUpPage;
