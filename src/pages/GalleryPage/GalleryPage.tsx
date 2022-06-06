// import { NextPage } from "next";
import { useState, useEffect } from "react";
import Grid from "shared/Grid/Grid";
import Datos from "../../../datos/datos.json"
import Buscador from "../../shared/Buscador/Buscador";
import Ordenar from "../../shared/Ordenar/Ordenar";
import GalleryItem from './GalleryItem/GalleryItem';
import styles from './GalleryPage.module.scss'


const GalleryPage = () =>{
    const [datos, setDatos] = useState(Datos);
    const [datosDinamicos, setDatosDinamicos] = useState(Datos);
    const [stateGrid, setStateGrid] = useState(0);
    const [stateOrdenar, setStateOrdenar] = useState(0);

    // console.log("Desde GalleryPage -> ", stateGrid);
    // console.log("Componente Ordenar", stateOrdenar);

    return (
        <div className="container">
            <div className={styles.contentGridAndSearch}>
                <Grid setStateGrid={setStateGrid}/>
                <Ordenar datosDinamicos={datosDinamicos} setDatosDinamicos={setDatosDinamicos} setStateOrdenar={setStateOrdenar}/>
                <Buscador datos={datos} setDatosDinamicos={setDatosDinamicos}/>
            </div>
                <div className={styles.contentGallery}>
                    <div className="row">
                        <GalleryItem datosDinamicos={datosDinamicos} stateGrid={stateGrid} stateOrdenar={stateOrdenar}/>
                    </div>
                </div>
        </div>
    );
};

export default GalleryPage;