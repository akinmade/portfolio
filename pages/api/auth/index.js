import styles from '../styles/Home.module.css';
import { useSession, signIn, signOut } from 'next-auth/client';
import 'bootstrap/dist/css/bootstrap.css'
export * from './footer'

export default function Home() {
  const [session] = useSession();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>This is the welcome page.</h1>
        <h2>You're currently {session ? 'logged in.' : 'logged out.'}</h2>
        {session ? (
          <button onClick={signOut}>Log out.</button>
        ) : (
          <button onClick={signIn}>Log in.</button>
        )}
      </main>
    </div>
  );
}

