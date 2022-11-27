
import Layout from "../../components/Layout"
import styles from "../../styles/Items.module.scss"
import {useState} from 'react'

export async function getServerSideProps({params}){
    const response = await fetch(`https://dummyjson.com/products/${params.id}`)
    const item = await response.json()

    return {
        props: {item},
    }
}

export default function Item ({item}){
    const [tab, setTab] = useState(0)
    
    return(
        <Layout>
            <div id={item.id} className={styles.card}>
                <div className={styles.card_components}>
                    <div className={styles.card_main_img}>
                        <img src={item.images[tab]} width='450' height='350' alt=""/>
                    </div>
                    <div className={styles.card_img_container}>
                        {item.images.map((el, index) => {
                            return <img src={el} key={index} width="80" height="60" alt="" onClick={() => setTab(index)}/>
                        })}
                    </div>
                </div>

                <div className={styles.card_components}>
                    <h3 className={styles.card_title}>{item.title}</h3>
                    <div>Price - {item.price} $</div>
                    <h4>Description </h4>
                    <p>{item.description}</p>
                </div>
            </div>
        </Layout>
    )
}