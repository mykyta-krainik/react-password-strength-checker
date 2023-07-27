import { capitalizeWord } from '@utils/helpers/capitalizeWord';
import { PasswordStrength } from '@utils/types/PasswordStrength';
import classNames from 'classnames';

import styles from './StrengthLine.module.scss';

interface Props {
  strength: PasswordStrength;
  minLength?: number;
}

export const StrengthLine = ({ strength, minLength = 8 }: Props) => {
  return (
    <div className={styles.strengthInfo}>
      <div
        className={classNames(styles.strengthInfo__meter, {
          [styles['strengthInfo__meter--short']]: strength === PasswordStrength.SHORT,
          [styles['strengthInfo__meter--easy']]: strength === PasswordStrength.EASY,
          [styles['strengthInfo__meter--medium']]: strength === PasswordStrength.MEDIUM,
          [styles['strengthInfo__meter--strong']]: strength === PasswordStrength.STRONG,
        })}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {strength !== PasswordStrength.NONE && (
        <p className={styles.strengthInfo__description}>
          {strength === PasswordStrength.SHORT ? (
            <>
              Password is <span className={styles.strengthInfo__text}>too short</span>. It should be{' '}
              <span className={styles.strengthInfo__text}>at least {minLength} characters</span>{' '}
              long
            </>
          ) : (
            <>
              <span className={styles.strengthInfo__text}>Password strength:</span>{' '}
              {capitalizeWord(strength)}
            </>
          )}
        </p>
      )}
    </div>
  );
};
