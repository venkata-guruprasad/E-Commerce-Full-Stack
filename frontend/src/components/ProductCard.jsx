import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './styles/product.css';

export default function ProductCard({ product }) {
    const { add } = useCart();
    const [showPopup, setShowPopup] = useState(false);

    const handleAdd = () => {
        add(product);
        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
        }, 2000); // 2 sec lo auto close
    };

    return (
        <>
            <div className="card">
                <img src={product.image} alt={product.name} className="card-img" />
                <div className="card-body">
                    <h3>{product.name}</h3>
                    <p className="desc">{product.description}</p>
                    <div className="bottom">
                        <strong>₹{product.price}</strong>
                        <button onClick={handleAdd} className="add-btn">Add</button>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="popup">
                    ✅ {product.name} added to cart
                </div>
            )}
        </>
    );
}
