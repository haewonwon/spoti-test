import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { SignupFormData, AUTH_PATTERNS } from '@/entities/auth/model';

export const useSignup = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      nickname: '',
      phone: '',
      email: '',
      password: '',
      passwordConfirm: '',
      agreeTerms: false,
      agreePrivacy: false,
    },
  });

  const password = watch('password');

  // TODO: 실제 API 호출로 회원가입 처리
  // const onSubmit = async (data: SignupFormData) => {
  //   try {
  //     const response = await signupApi(data);
  //     if (response.success) {
  //       router.push('/signup/success');
  //     } else {
  //       // 에러 처리
  //     }
  //   } catch (error) {
  //     // 에러 처리
  //   }
  // };

  const onSubmit = (data: SignupFormData) => {
    console.log('회원가입 데이터:', data);

    // 성공 시 성공 페이지로 리다이렉트
    router.push('/signup/success');
  };

  const registerOptions = {
    nickname: register('nickname', {
      required: '닉네임을 입력해 주세요.',
      pattern: {
        value: AUTH_PATTERNS.NICKNAME,
        message: '닉네임은 한글, 영어, 숫자만 사용 가능하며 2자 이상이어야 합니다',
      },
    }),
    phone: register('phone', {
      required: '전화번호를 입력해 주세요.',
      pattern: {
        value: AUTH_PATTERNS.PHONE,
        message: '올바른 전화번호 형식이 아닙니다.',
      },
    }),
    email: register('email', {
      required: '이메일을 입력해 주세요.',
      pattern: {
        value: AUTH_PATTERNS.EMAIL,
        message: '올바른 이메일 형식이 아닙니다.',
      },
    }),
    password: register('password', {
      required: '비밀번호를 입력해 주세요.',
      pattern: {
        value: AUTH_PATTERNS.PASSWORD,
        message: '비밀번호는 영어, 숫자, 특수문자만 사용 가능하며 8자 이상이어야 합니다.',
      },
    }),
    passwordConfirm: register('passwordConfirm', {
      required: '비밀번호 확인을 입력해 주세요.',
      validate: (value) => value === password || '비밀번호가 일치하지 않습니다.',
    }),
    agreeTerms: register('agreeTerms', {
      required: '이용약관에 동의해 주세요.',
    }),
    agreePrivacy: register('agreePrivacy', {
      required: '개인정보처리방침에 동의해 주세요.',
    }),
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    registerOptions,
    errors,
  };
};
