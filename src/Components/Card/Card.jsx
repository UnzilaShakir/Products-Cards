import React from 'react';
import Data from '../../data';
import styles from './Card.module.css'

export const Card = ({ id, title, description, price, image,category, rating }) => {
    return (
        <>
                <div className={styles.card}>
                <img src={image} alt="" className={styles.image} />
                <p>{id}</p>
                <h2 className={styles.title}>{category}</h2>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>
                    <strong>Price: </strong>{price}
                </p>
                <p className={styles.price}>
                    <strong>Rating: </strong> <br />
                    Rate:{rating} <br />
                    Count:{rating}
                    </p>
                <p><button className={styles.button}>Add to Cart</button></p>
            </div>
        </>


    )
}
