import React from "react";

import styles from './Index.module.css';

import logo from '../../assets/images/Logo.png';

import { BsFacebook, BsInstagram, BsTelephoneFill, BsWhatsapp } from  'react-icons/bs';

import { MdLocationOn, MdMail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer>
            <section className={styles.container}>

                <article className={styles.div_page}>
                    <a href="#"><img src={logo} alt="logo"></img></a>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                
                    <i><BsFacebook color="#BDDDE8" size={20}/></i>
                    <i><BsInstagram color="#BDDDE8" size={20}/></i>
                    <i><BsWhatsapp color="#BDDDE8"size={20}/></i>
                </article>

                <article className={styles.div_social}>
                    <h3>Endereço</h3>
                    <hr/>
                    <div id={styles.location}>
                        <i><MdLocationOn size={25} className={styles.ico}/></i>
                        <p>São Leopoldo - RS</p>
                    </div>

                    <div id={styles.phone}>
                        <i><BsTelephoneFill size={20} className={styles.ico}/></i>
                        <p>+55 51 912345678</p>
                    </div>

                    <div id={styles.email}>
                        <i><MdMail size={20} className={styles.ico}/></i>
                        <a href="#">vintagecoffee@gmail.com</a>
                    </div>
                </article>

                <article className={styles.div_contact}>
                    <h2>Fale Conosco!</h2>

                    <form>
                        <label>Email:</label>
                        <input type="email" name="" id=""/>
                        
                        <label>Mensagem</label>
                        <textarea cols={30} rows={10}></textarea>
                    </form>

                    <button>Enviar</button>
                </article>
            </section>
        </footer>
    );
};

export default Footer;