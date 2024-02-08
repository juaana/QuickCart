import { useEffect, useState } from "react";
import arrayProductos from "./json/data.json"
const ItemListContainer = () => {
    const[productos, setProductos] = useState([]);
    useEffect(()=>{
        const promesa = new Promise((resolve)=> {
            resolve(arrayProductos);
        })
        promesa.then(data => {
            setProductos(data)
        })

    },[])
    return (
        <div className="container">
            <div className="row">
                {productos.map(item => (
                    <div className="card text-center border-0" >
                         <img src={item.image} className="card-img-top" alt={item.name}/>
                         <div className="card-body">
                            <h5 className="card-title"> {item.name}</h5>
                            <p className="card-text">{item.description}</p>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ItemListContainer;