
import { useEffect, useState } from 'react'
import { useContext } from 'react';
import { cartContext } from '../App';
import './Viewcart.css'

const Viewcart = () => {
    const{cart,setCart} = useContext(cartContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0))
    }, [cart])

  

    const deleteCartItem = (id) => {
        const updatedCart = cart.filter((item) => {
             if (item.id === id) {
                 return false;
            } else {
                return true;
            }
        });
        setCart(updatedCart);
    };


    return (
        <>
            <h1 className='cart-heading'>Cart Products</h1>
            <div className='cart-container'>
                {
                    cart.map((product) => (
                        <div className='cart-product' key={product.id}>
                            <div className='img'>
                                <img src={product.pic} alt="image" />
                            </div>
                            <div className='cart-product-details'>
                                <h3>{product.name}</h3>
                                <p>Price Rs: {product.amt}</p>
                                <div>
                                    
                                    <button onClick={() => deleteCartItem(product.id)} className='delete-btn'>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 className='cart-amount'>Total Amount Rs: {total}</h2>
        </>
    )
}

export default Viewcart
