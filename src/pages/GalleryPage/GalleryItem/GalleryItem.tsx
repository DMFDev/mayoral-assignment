import styles from './GalleryItem.module.scss';

const GalleryItem = (props) => {

    // console.log(props.datosDinamicos)

    // console.log("Desde Gallery Item -> ", props.stateGrid)

    const changeGrid = (stateGrid: Number) =>{
        let bootstrap: string = 'col-4 col-md-4 col-lg-3';
        if (stateGrid === 0){
            bootstrap = 'col-6 col-md-4 col-lg-3';
        }else if (stateGrid === 1){
            // Añadimos una columna
            bootstrap = 'col-4 col-md-4 col-lg-3';
        }else if (stateGrid === 2){
            // Quitamos una columna
            bootstrap = 'col-6 col-md-6 col-lg-4';
        }
        return bootstrap;
    }

    return (
        <>
            {
                // Renderizamos normal
                props.stateOrdenar == 0 ?
                    props.datosDinamicos.length > 0 ?
                        props.datosDinamicos.map((item, index) => 
                            <div className={changeGrid(props.stateGrid)} key={index}>
                                <div className={styles.GalleryItem}>
                                    <div>
                                        <img src={item.img}/>
                                        <p>{item.name}</p>
                                        <p>{item.price} $</p>
                                        <button>Añadir</button>
                                    </div>
                                </div>
                            </div>
                        )
                    :
                        <div className={styles.GalleryNoItem}>
                            <p>No se han encontrado coincidencias :(</p>
                        </div>
                // Renderizamos si ha cmabiado el estado del orden Ascendente
                : props.stateOrdenar == 1 ?
                    props.datosDinamicos.length > 0 ?
                        props.datosDinamicos.map((item, index) => 
                            <div className={changeGrid(props.stateGrid)} key={index}>
                                <div className={styles.GalleryItem}>
                                    <div>
                                        <img src={item.img}/>
                                        <p>{item.name}</p>
                                        <p>{item.price} $</p>
                                        <button>Añadir</button>
                                    </div>
                                </div>
                            </div>
                        )
                    :
                        <div className={styles.GalleryNoItem}>
                            <p>No se han encontrado coincidencias :(</p>
                        </div>
                // Renderizamos si ha cambiado el orden descendente
                :   props.stateOrdenar == 2 ?
                        props.datosDinamicos.length > 0 ?
                            props.datosDinamicos.map((item, index) => 
                                <div className={changeGrid(props.stateGrid)} key={index}>
                                    <div className={styles.GalleryItem}>
                                        <div>
                                            <img src={item.img}/>
                                            <p>{item.name}</p>
                                            <p>{item.price} $</p>
                                            <button>Añadir</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        :
                            <div className={styles.GalleryNoItem}>
                                <p>No se han encontrado coincidencias :(</p>
                            </div>
                :   
                    props.datosDinamicos.length > 0 ?
                        props.datosDinamicos.map((item, index) => 
                            <div className={changeGrid(props.stateGrid)} key={index}>
                                <div className={styles.GalleryItem}>
                                    <div>
                                        <img src={item.img}/>
                                        <p>{item.name}</p>
                                        <p>{item.price} $</p>
                                        <button>Añadir</button>
                                    </div>
                                </div>
                            </div>
                        )
                    :
                        <div className={styles.GalleryNoItem}>
                            <p>No se han encontrado coincidencias :(</p>
                        </div>
            }
        </>
    );

}

export default GalleryItem;