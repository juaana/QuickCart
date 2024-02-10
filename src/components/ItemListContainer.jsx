import { useEffect, useState } from "react";
import arrayProductos from "./json/data.json"
import { useParams } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
const ItemListContainer = () => {
    const[productos, setProductos] = useState([]);
    const {categoria} = useParams();

    console.log(categoria);
    useEffect(()=>{
        const promesa = new Promise((resolve)=> {
            resolve(categoria ? arrayProductos.filter(item => item.category === categoria) : arrayProductos);
        })
        promesa.then(data => {
            setProductos(data)
        })

    },[categoria])
    return (
       <ItemDetailContainer/>
    )
}
export default ItemListContainer;