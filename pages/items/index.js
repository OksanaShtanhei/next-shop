import Layout from "../../components/Layout"
import styles from "../../styles/Items.module.scss"
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import ItemModel from "../../components/ItemModel"

const Items = ({items}) => {
  const [skip, setSkip] = useState(6)
  const router = useRouter()
  const {query} = router

  useEffect(() => {
    if(query.skip) {
      let num = Number(query.skip) > 6 ? query.skip : 6
      setSkip(Number(num))
    }
    console.log(query)
  }, [query])

  const handlePaginate = (skipNum) => {
    let s = skipNum > 6 ? skipNum : 6
    router.replace(`?skip=${s}`)
  }

    return (
        <>
            <Layout>
              <ul className={styles.list}>
                {items !== null && items.map(el => 
                    <li key={el.id}>
                      <ItemModel item={el}/>
                    </li>
                  )}
              </ul>
              <div className={styles.buttons}>
                <button  onClick={() => handlePaginate(skip - 6)} id="prev">Prev</button>
                <button  onClick={() => handlePaginate(skip + 6)} id="next">Next</button>
              </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context){
  const {query} = context
 
  const response = await fetch(`https://dummyjson.com/products/?skip=${query.skip > 6 ? query.skip : 6}&limit=6`)
  const data  = await response.json()

  return {
    props: {
      items: data.products ?? null,
      revalidate: 1
    },
  }
}

export default Items