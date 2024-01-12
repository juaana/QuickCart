import B from "../assets/bag.svg"

const CartWidget = () => {
    return(
            <button type="button" className="btn position-relative">
                <img src={B} alt="Bag" width={24} />
                <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-success">
                    1
                </span>
            </button>   
    )
}
export default CartWidget;