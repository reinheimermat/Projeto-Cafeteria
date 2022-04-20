import React from "react";

import styles from './Index.module.css';

import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsTelephoneFill } from 'react-icons/bs'
import { SiGooglemaps } from 'react-icons/si';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
    return (
        <footer className={styles}>
            <div className={styles.main_content}>
                <div className="left box">
                    <h2>Sobre Nós</h2>
                    <div className={styles.content}>
                        <p>hfhfhfhfhfhfhfhfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
                    </div>
                    <div className={styles.social}>
                        <a href="#"><BsFacebook size={20} color="#3b5998"/></a>
                        <a href="#"><BsTwitter size={20} color="#00acee"/></a>
                        <a href="#"><BsInstagram size={20} color="#8a3ab9"/></a>
                        <a href="#"><BsYoutube size={20} color="#c4302b"/></a>
                    </div>
                </div>
                <div className={styles.center_box}>
                    <h2>Endereço</h2>
                    <div className={styles.content}>
                        <div className={styles.place}>
                            <span><SiGooglemaps size={20}/></span>
                            <span className={styles.text}>AV Henrique Bier, Campina</span>
                        </div> {/* /content */}
                         
                        <div className={styles.phone}>
                            <span><BsTelephoneFill size={20}/></span>
                            <span className={styles.text}>+55 51 9970-0087</span>
                        </div> {/* /phone */}

                        <div className={styles.email}>
                            <span><GrMail size={20}/></span>
                            <span className={styles.text}>vintagecoffee@gmail.com</span>
                        </div> {/* /email */}
                    </div>  
                </div>

                <div className={styles.rigth_box}>
                    <h2>Contato</h2>
                    <div className={styles.content}>
                        <form action="#">
                            <div className={styles.email}>
                                <label></label>
                                <input type={styles.email} required></input>
                            </div>
                        </form>
                    </div>  
                </div>
            </div> {/* /main_content */}
        </footer>
    );
};

export default Footer;