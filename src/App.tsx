import { StrengthChecker } from '@components/StrengthChecker';

import styles from './App.module.scss';

function App() {
  return (
    <section className={styles.main}>
      <h1 className={styles.main__heading}>React password strength checker</h1>

      <StrengthChecker className={styles.main__strengthChecker} />
    </section>
  );
}

export default App;
