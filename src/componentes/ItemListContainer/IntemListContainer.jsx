import React from "react";  
import Titulo from "../Title/title";
import ItemCount from "../ItemCount/ItemCount.jsx";

export const ItemListConteiner = (props) =>{
    return(
        <>
            <Titulo greeting={props.texto}/>
            <ItemCount/>
        </>
    );

}

export default ItemListConteiner;
