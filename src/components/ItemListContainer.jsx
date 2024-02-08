import { useEffect, useState } from "react";
import arrayProductos from "./json/data.json"
import { useParams } from "react-router-dom";
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