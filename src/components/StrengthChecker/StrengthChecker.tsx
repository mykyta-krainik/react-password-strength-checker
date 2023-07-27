import { ChangeEvent, useState } from 'react';

import { getPasswordStrength } from '@utils/helpers/getPasswordStrength';
import { PasswordStrength } from '@utils/types/PasswordStrength';
import classNames from 'classnames';

import { Input } from '@components/Input';
import { Rules } from '@components/Rules';
import { StrengthLine } from '@components/StrengthLine';

import styles from './StrengthChecker.module.scss';

interface Props {
  className?: string;
}

export const StrengthChecker = ({ className }: Props) => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState<PasswordStrength>(PasswordStrength.NONE);

  const minPasswordLength = 8;

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    const passwordStrength = getPasswordStrength(e.target.value, minPasswordLength);

    setStrength(passwordStrength);
  };

  return (
    <div className={classNames(styles.strengthChecker, className)}>
      <Rules />

      <section className={styles.strengthChecker__inputWrapper}>
        <Input
          type="password"
          placeholder="Enter the password"
          value={password}
          onChange={handlePasswordChange}
          className={classNames(styles.strengthChecker__input, {
            [styles['strengthChecker__input--red']]:
              strength === PasswordStrength.SHORT || strength === PasswordStrength.EASY,
            [styles['strengthChecker__input--yellow']]: strength === PasswordStrength.MEDIUM,
            [styles['strengthChecker__input--green']]: strength === PasswordStrength.STRONG,
          })}
        />

        <StrengthLine strength={strength} minLength={minPasswordLength} />
      </section>
    </div>
  );
};
