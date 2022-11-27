import Link from 'next/link'
import styles from '../styles/ItemModel.module.scss'

const ItemModel = ({item}) => (
    <div >
        <Link href={`/items/${item.id}`}>
        <div className={styles.card}>
            <div className={styles.container}>
                <img src={item.thumbnail} alt="" height="200" width="300"/>
                <h4><b>{item.title}</b></h4>
                <p>{item.price} $</p>
            </div>
        </div>
        </Link>
    </div>
)

export default ItemModel


