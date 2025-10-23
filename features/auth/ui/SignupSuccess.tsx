'use client';

import Link from 'next/link';

export function SignupSuccess() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-50 dark:from-[#191414] dark:to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-[#191414] rounded-2xl shadow-2xl p-8 text-center">
        {/* 성공 아이콘 */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-[#1DB954] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* 성공 메시지 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#191414] dark:text-white mb-2">회원가입 완료!</h1>
          <p className="text-gray-600 dark:text-gray-400">
            환영합니다! 계정이 성공적으로 생성되었습니다.
          </p>
        </div>

        {/* 액션 버튼들 */}
        <div className="space-y-3">
          <Link
            href="/login"
            className="w-full bg-[#1DB954] hover:bg-[#1ED760] text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg block"
          >
            로그인하기
          </Link>

          <Link
            href="/"
            className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 py-3 rounded-lg font-semibold transition-all duration-200 block"
          >
            홈으로 돌아가기
          </Link>
        </div>

        {/* 추가 정보 */}
        <div className="mt-8 pt-6 border-t dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            문제가 있으시면 고객지원팀에 문의해 주세요.
          </p>
        </div>
      </div>
    </div>
  );
}
