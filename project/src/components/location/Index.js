import React from "react";

import styles from './Index.module.css'

const Location = () => {
    return (
        <section className={styles.container}>
            <article className={styles.content}>
                <h1>Lojas e pontos de delivery</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel elit scelerisque, interdum mauris cursus, semper sem. In enim arcu, bibendum nec sem non, euismod bibendum urna. 
                </p>

                <ul>
                    <li>São Leopoldo - RS</li>
                    <li>Porto Alegre - RS</li>
                    <li>Portão - RS</li>
                    <li>São Paulo - SP</li>
                    <li>Minas Gerais - MG</li>
                </ul>
            </article>
            <article className={styles.maps}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.4770079163823!2d-51.17324638485315!3d-29.734905123908618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951942b04531a799%3A0xf3011445d8e7cc9f!2sAv.%20Henrique%20Bier%2C%202645%20-%20Campina%2C%20S%C3%A3o%20Leopoldo%20-%20RS%2C%2093135-000!5e0!3m2!1spt-BR!2sbr!4v1650456428107!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </article>
        </section>
    );
}

export default Location;