import styles from './page.module.css'
import Weather from './weather/Weather'
import Nav from './components/Nav';

export default function Home() {
  return (
    <main className={styles.main}>
        <Nav/>
          <Weather/>
    </main>
  )
}
