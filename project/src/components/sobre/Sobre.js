import React from 'react';

import styles from './Sobre.module.css'
import Btn from '../btn/Btn';
import Btn_transparent from '../btn_transparent';

const Sobre = () => {
    return (
        <section className={styles.container_sobre}>
            <article className={styles.div_01}>
                <h1>Sobre Nós</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet tempus lectus sit amet aliquam. Nullam tristique mattis elit sit amet ullamcorper. Duis at dui a odio imperdiet volutpat. Quisque elementum volutpat nulla, vel ultricies metus lobortis nec. Suspendisse id auctor enim, et congue ipsum. Duis risus sapien, suscipit eu mollis non, maximus nec risus. Integer id purus dui. Phasellus sit amet scelerisque eros. Suspendisse ac ante in diam feugiat fringilla at vel ligula. </p>
            
                <p>Curabitur sollicitudin, enim sit amet maximus blandit, nisl leo tincidunt odio, ac feugiat sem ante vitae ante. Vestibulum in massa elementum, sagittis libero vehicula, porta ex. Ut vel faucibus leo. Duis nec massa volutpat, ullamcorper erat sed, rutrum nisl. Duis tincidunt urna non iaculis rhoncus. Cras tincidunt sit amet diam ac pharetra.</p>
            
                <Btn_transparent/>
            </article>

            {/* Article das imagens */}
            <article className={styles.div_02}>
                <img src='https://images.pexels.com/photos/333523/pexels-photo-333523.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </article>
        </section>
    );
};

export default Sobre;