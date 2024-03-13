import cart  from "../assets/shopping-cart.png";

export const CartWidget = () => {
    return (
    <div id="cart-widget">
        <img src={cart} alt="Carro" />
        <span>14</span>
    </div>
    );
};
