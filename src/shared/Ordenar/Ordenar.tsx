import styles from './Ordenar.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowDown19 } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp91 } from '@fortawesome/free-solid-svg-icons';

const Ordenar = ({datosDinamicos, setDatosDinamicos, setStateOrdenar}) =>{
    
    const changeOrder = (e: Number) => {
        console.log(e)
        let value: Number = e;

        orderPrice(value);
    }

    const orderPrice = (value) => {
        // Ascendente
        if (value == 2) {
            datosDinamicos.sort( (a, b) => {
                if (a.price > b.price) {
                    return -1;
                }

                if (a.price < b.price){
                    return 1;
                }
                return 0;
            });
            console.log("Ascendente -> " , datosDinamicos);
            setStateOrdenar(1);
        // Descendente    
        }else if (value == 1){
            datosDinamicos.sort((a, b) => {
                if (a.price > b.price) {
                    return 1;
                }

                if (a.price < b.price){
                    return -1;
                }
                return 0;
            });
            console.log("Descendente -> " , datosDinamicos);
            setStateOrdenar(2);
        }

        console.log("Final -> " , datosDinamicos);
        setDatosDinamicos(datosDinamicos);
        // setStateOrdenar(1);
    }

    return(
        <div className={styles.orderPrice}>
            <FontAwesomeIcon icon={faArrowDown19} onClick={(e) => changeOrder(1)}/>
            <span></span>
            <FontAwesomeIcon icon={faArrowUp91} onClick={(e) => changeOrder(2)}/>
        </div>
    );

}


export default Ordenar;