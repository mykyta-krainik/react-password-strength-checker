import styles from './Rules.module.scss';

export const Rules = () => {
  return (
    <figure className={styles.rulesWrapper}>
      <caption className={styles.rulesWrapper__caption}>
        The password checker works the following way:
      </caption>

      <ul className={styles.rulesWrapper__rules}>
        <li>The minimum password length is 8 characters</li>
        <li>Only letters/digits/symbols - the password is easy</li>
        <li>
          Combination of letters-symbols/letters-digits/digits-symbols - the password is medium
        </li>
        <li>Has letters, symbols and numbers - the password is strong</li>
      </ul>
    </figure>
  );
};
