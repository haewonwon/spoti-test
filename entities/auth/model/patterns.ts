export const AUTH_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/,
  NICKNAME: /^[가-힣a-zA-Z0-9]{2,}$/,
  PASSWORD: /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]{8,}$/,
} as const;
