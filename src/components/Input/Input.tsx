import { ChangeEvent, InputHTMLAttributes, useState } from 'react';

import EyeClose from '@static/images/eye-slash.svg';
import EyeOpen from '@static/images/eye.svg';
import classNames from 'classnames';

import styles from './Input.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, type, onChange, ...props }: Props) => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const typeToUse = isEyeOpen && type === 'password' ? 'text' : type;

  const handleEyeClick = () => setIsEyeOpen((prevState) => !prevState);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);

    if (!e.target.value && isEyeOpen) {
      setIsEyeOpen(false);
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        {...props}
        type={typeToUse}
        className={classNames(
          styles.inputWrapper__input,
          {
            [styles['inputWrapper__input--password']]: type === 'password',
          },
          className,
        )}
        onChange={handlePasswordChange}
      />

      {type === 'password' && (
        <button className={styles.inputWrapper__iconWrapper} onClick={handleEyeClick}>
          {isEyeOpen ? <EyeClose /> : <EyeOpen />}
        </button>
      )}
    </div>
  );
};
