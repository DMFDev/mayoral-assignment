import {useState}  from "react";
import styles from './Buscador.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const Buscador = ({datos, setDatosDinamicos}) => {

    const onChange = (e) =>{
        //console.log(e.target.value)
        let value: string = e.target.value;
        buscador(value);
    }

    const buscador = (value) => {
        // console.log(datos)
        // console.log(datosDinamicos)
        var nombreProductos = datos.filter((item) => {
            if (item.name.toString().toLowerCase().includes(value.toLowerCase())){
                return item;
            }
        });
        setDatosDinamicos(nombreProductos);
    }

    return (
        <div className={styles.contentBuscador}>
            <div>
                <span><FontAwesomeIcon icon={faMagnifyingGlass}/></span>
                <input type="text" placeholder="Buscar" onChange={e => onChange(e)}/>
            </div>
        </div>
    );
}

export default Buscador;