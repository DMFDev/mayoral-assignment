import styles from './Grid.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';


const Grid = ({setStateGrid}) =>{

    const changeGrid = (e:Number) =>{
        console.log(e);
        setStateGrid(e);
    }

    return (
        <div className={styles.changeGrid} >
            <FontAwesomeIcon icon={faMinus} onClick={(e) => changeGrid(2)}/>
            <span></span>
            <FontAwesomeIcon icon={faPlus} onClick={(e) => changeGrid(1)}/>
        </div>
    );

}

export default Grid;
