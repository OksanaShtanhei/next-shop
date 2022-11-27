import Layout from '../components/Layout'
import styles from "../styles/Main.module.scss"

export default function Home() {
  return (
    <div>
      <Layout keywords={"shop"}>
        <div className={styles.main}>
          <h1>Main page</h1>
        </div>
      </Layout>
    </div>
  )
}



