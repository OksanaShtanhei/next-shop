import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Navbar.module.scss'

const Navbar = ({}) => {
    return (
        <>
            <Head>
                <title>Shop</title>
            </Head>
            <div className={styles.nav}>
                <div>
                    <Image src='/icon.png' width='60' height='60' alt ='webdev'/>
                </div>
                <div>
                    <Link href="/">
                        <a>Main</a>
                    </Link>
                    <Link href="/items">
                        <a>Items</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Navbar