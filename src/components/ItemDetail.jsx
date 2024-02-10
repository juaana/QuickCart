const ItemDetail =({item})=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2 ">
                    <img src={item.image} alt={item.name} className="img-fluid"/>
                </div>
                <div className="col-md-4">
                    <h1>    {item.name}</h1>
                    <p>{item.description}</p>
                    <p><b>$ {item.price}</b></p>
                </div>
            </div>
            
        </div>
    )
}
export default ItemDetail;