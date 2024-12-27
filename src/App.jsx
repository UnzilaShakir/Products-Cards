import React from 'react'
import { Card } from './Components/Card/Card';
import styles from './App.module.css';
import Data from './data';
const App = () => {
  return (
   <>
      <h1>Products Cards</h1>
      <div className={styles.mainDiv}>
        {
          Data.map((e,i)=>(
            <Card key={i} image={e.image}
            title={e.title}
            id={e.id}
            description={e.description}
            price={e.price}
            category={e.category}
            rating={e.rating.count}
            count={e.rating.rate} />
          ))
        }

      </div>
   </>
  )
}

export default App;
