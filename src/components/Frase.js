

import styles from './Frase.module.css';

function Frase(){
    return(
        <div className={styles.fraseContainer} >
            <p className={styles.fraseContent}>Componente frase, olá tenha um bom dia!! </p>
        </div>
    )
}
export default Frase;