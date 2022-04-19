import React from 'react';
import Btn from '../btn/Btn';

import styles from './Cover.module.css'


const Cover = () => {
    return (
        <div className={styles.container_cover}>
            <article>
                <h1>Vintage Cooffe</h1>
                <p>A sua cafeteria preferida. Encontre os melhores sabores por aqui :)</p>
                <Btn/>
            </article>
        </div>
    );
}

export default Cover;