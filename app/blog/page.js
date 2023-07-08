import Image from 'next/image'
import styles from './page.module.css'
import ContentSection from '../components/content-section'

export default function Home() {
  return (
    <main className={styles.main}>
        <ContentSection >
          <p>Blog</p>
        </ContentSection>
    </main>
  )
}
