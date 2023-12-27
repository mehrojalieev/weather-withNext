import styles from './page.module.css'
import Weather from './weather/Weather'
import Nav from './components/Nav';
import StoreProvider from './StoreProvider';

export default function Home() {
  return (
    <main className={styles.main}>
        <Nav/>
          <Weather/>
          <StoreProvider/>
    </main>
  )
}
