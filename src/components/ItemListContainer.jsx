import { useEffect, useState } from "react";
import arrayProductos from "./json/data.json"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
const ItemListContainer = () => {
    const[items, setItems] = useState([]);
    const {categoria} = useParams();

    console.log(categoria);
    useEffect(()=>{
        const promesa = new Promise((resolve)=> {
            resolve(categoria ? arrayProductos.filter(item => item.category === categoria) : arrayProductos);
        })
        promesa.then(data => {
            setItems(data)
        })

    },[categoria])
    return (
       <ItemList items={items}/>
    )
}
export default ItemListContainer;