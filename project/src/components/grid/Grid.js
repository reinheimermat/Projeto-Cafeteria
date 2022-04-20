import React from "react";

import styles from './Grid.module.css';

const Grid = () => {
    return (
        <section className={styles.main}>
            <article className={styles.content}>
                <h1>Alguns Sabores</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
            </article>  
            <article className={styles.grid}>
                <div id={styles.div_01}>
                    grid01
                </div>
                <div id={styles.div_02}>
                    grid02
                </div>
                <div id={styles.div_03}> 
                    grid03
                </div>
                <div id={styles.div_04}>
                    grid04
                </div>
                <div id={styles.div_05}>
                    grid05
                </div>
                <div id={styles.div_06}>
                    grid06
                </div>
                <div id={styles.div_07}>
                    grid07
                </div>
                <div id={styles.div_08}>
                    grid08
                </div>
                <div id={styles.div_09}>
                    grid09
                </div>
            </article>
        </section>
    )
}

export default Grid;