import { PasswordStrength } from '../types/PasswordStrength';

export function getPasswordStrength(password: string, minLength: number = 8): PasswordStrength {
  const passwordLength = password.length;

  if (passwordLength === 0) {
    return PasswordStrength.NONE;
  }

  if (passwordLength < minLength) {
    return PasswordStrength.SHORT;
  }

  const hasLetters = /[a-zA-Z]/.test(password);
  const hasDigits = /\d/.test(password);
  const hasSpecialCharacters = /[^a-zA-Z\d]/.test(password);

  if (hasLetters && hasDigits && hasSpecialCharacters) {
    return PasswordStrength.STRONG;
  }

  if (
    (hasLetters && hasDigits) ||
    (hasLetters && hasSpecialCharacters) ||
    (hasDigits && hasSpecialCharacters)
  ) {
    return PasswordStrength.MEDIUM;
  }

  return PasswordStrength.EASY;
}