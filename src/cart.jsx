function Cart(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props;
    return ( 
        <div className="cart indigo white-text" onClick={handleBasketShow}>
            <i className="material-icons">shopping_basket</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    );
}
export {Cart};