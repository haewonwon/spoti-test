'use client';

import { Input } from '@/shared/ui';
import { useSignup } from '@/features/auth/model';

export function SignupForm() {
  const { handleSubmit, registerOptions, errors } = useSignup();

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-50 dark:from-[#191414] dark:to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-[#191414] rounded-2xl shadow-2xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#191414] dark:text-white mb-2">회원가입</h1>
          <p className="text-gray-600 dark:text-gray-400">환영합니다! 계정을 생성해주세요</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 닉네임 */}
          <Input
            id="nickname"
            label="닉네임"
            placeholder="한글, 영어, 숫자 2자 이상"
            error={errors.nickname?.message}
            {...registerOptions.nickname}
          />

          {/* 전화번호 */}
          <Input
            id="phone"
            type="tel"
            label="전화번호"
            placeholder="010-0000-0000"
            error={errors.phone?.message}
            {...registerOptions.phone}
          />

          {/* 이메일 */}
          <Input
            id="email"
            type="email"
            label="이메일 (아이디)"
            placeholder="your@email.com"
            error={errors.email?.message}
            {...registerOptions.email}
          />

          {/* 비밀번호 */}
          <Input
            id="password"
            type="password"
            label="비밀번호"
            placeholder="영어, 숫자, 특수문자 8자 이상"
            error={errors.password?.message}
            {...registerOptions.password}
          />

          {/* 비밀번호 확인 */}
          <Input
            id="passwordConfirm"
            type="password"
            label="비밀번호 확인"
            placeholder="비밀번호 재입력"
            error={errors.passwordConfirm?.message}
            {...registerOptions.passwordConfirm}
          />

          {/* 약관 동의 */}
          <div className="space-y-3 pt-4 border-t dark:border-gray-700">
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-[#1DB954] rounded focus:ring-[#1DB954]"
                  {...registerOptions.agreeTerms}
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-red-500">*</span> 이용약관에 동의합니다
                  <a
                    href="#"
                    className="text-[#1DB954] hover:underline ml-1"
                    onClick={(e) => e.preventDefault()}
                  >
                    [보기]
                  </a>
                </span>
              </label>
              {errors.agreeTerms && (
                <p className="mt-1 ml-7 text-sm text-red-500">{errors.agreeTerms.message}</p>
              )}
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-[#1DB954] rounded focus:ring-[#1DB954]"
                  {...registerOptions.agreePrivacy}
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-red-500">*</span> 개인정보처리방침에 동의합니다
                  <a
                    href="#"
                    className="text-[#1DB954] hover:underline ml-1"
                    onClick={(e) => e.preventDefault()}
                  >
                    [보기]
                  </a>
                </span>
              </label>
              {errors.agreePrivacy && (
                <p className="mt-1 ml-7 text-sm text-red-500">{errors.agreePrivacy.message}</p>
              )}
            </div>
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            className="w-full bg-[#1DB954] hover:bg-[#1ED760] text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            회원가입
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          이미 계정이 있으신가요?{' '}
          <a href="#" className="text-[#1DB954] hover:underline font-semibold">
            로그인
          </a>
        </p>
      </div>
    </div>
  );
}
