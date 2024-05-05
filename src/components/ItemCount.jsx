import { useState } from "react";
import Button from 'react-bootstrap/Button';

export const ItemCount = ({ onAdd, stock }) => {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if(quantity > 1) setQuantity((prev) => prev - 1);
    };

    const handleIncrease = () => {
        if(stock > quantity) setQuantity((prev) => prev + 1);
    };

    const handleAdd = () => {
        onAdd(quantity);
        setQuantity(1)
    };

    return (
        <div className="d-flex">
            <Button type="button" class="btn btn-outline-danger" onClick={handleDecrease}>-</Button>
            <input type="number" value={quantity} readOnly />
            <Button type="button" class="btn btn-outline-success" onClick={handleIncrease}>+</Button>
            <Button type="button" class="btn btn-success" onClick={handleAdd}>Agregar al carrito</Button>
        </div>
    );
}