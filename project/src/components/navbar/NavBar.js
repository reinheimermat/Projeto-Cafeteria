import React from 'react';

import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.nav_bar}>
            <a href='#' title='Cafeteria'>
                <div className={styles.logotipo}>
                    <p>Vintage Coffee</p>
                </div>
            </a>

            <div className={styles.menu}>
                <a>Home</a>
                <a>Produtos</a>
                <a>Franquias</a>
                <a>Contato</a>
            </div>

            {/* dropdown */}
            <div className={styles.drop_menu}>
                <button className={styles.drop_button}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Conteúdo Do Menu */}
                <div className={styles.drop_content}>
                    <a><p>Home</p></a>
                    <a>Produtos</a>
                    <a>Franquias</a>
                    <a>Contato</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;