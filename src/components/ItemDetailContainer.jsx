import { useEffect, useState } from "react";
import arrayProductos from "./json/data.json"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer =()=>{
    const[item, setItem] = useState([]);
    useEffect(()=>{
        const promesa = new Promise(resolve => {
            let producto = arrayProductos.find(item => item.id === 1);
            resolve(producto);
        })
        promesa.then(data => {
            setItem(data)
        })

    },[])

    return(
        <ItemDetail item={item}/>
    )
}
export default ItemDetailContainer;
