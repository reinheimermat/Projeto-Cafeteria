import React from "react";

import styles from './Gallery.module.css'

export const Gallery = () => {
    return (
        <section className={styles.container_gallery}>
            <h1>Gallery</h1>
            
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
        
            <article className={styles.grid}>
                <div>
                    <img src="" alt="img01"></img>
                </div>
                <div>
                    <img src="" alt="img02"></img>
                </div>
                <div>
                    <img src="" alt="img03"></img>
                </div>
                <div>
                    <img src="" alt="img04"></img>
                </div>
                <div>
                    <img src="" alt="img05"></img>
                </div>
                <div>
                    <img src="" alt="img06"></img>
                </div>
                <div>
                    <img src="" alt="img07"></img>
                </div>
                <div>
                    <img src="" alt="img08"></img>
                </div>
                <div>
                    <img src="" alt="img09"></img>
                </div>
            </article>
        </section>
    );
};