import React from 'react';
import CommonSection from '../components/UI/common-section/CommonSection.js';
import Helmet from '../components/Helmet/Helmet.js';
import '../styles/cart-page.css';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { cartActions } from '../store/shopping-cart/cartSlice';
import { Link } from 'react-router-dom';


const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    return (
        <Helmet title='Cart'>
            <CommonSection title='Your Cart' />
            <section>
                <Container>
                    <Row>
                        <Col lg='12' >
                            {
                                cartItems.length === 0 ? <h5 className="text-center mt-5 mb-5">
                                    Your cart is empty</h5> : ( <table className="table table-bordered mt-5 mb-5">
                                <thead>
                                    <tr>
                                        <th className="text-center">Image</th>
                                        <th className="text-center">Product Title</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Quantity</th>
                                        <th className="text-center">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    cartItems.map((item) => (
                                    <Tr item={item} key={item.id} />
                                    )
                                )}    
                                </tbody>
                            </table>
                            )}

                            <div>
                                <h6>Subtotal: <span className="cart_subtotal">${totalAmount}</span></h6>
                                <p>Taxes and shipping will calculate at checkout</p>
                                <div className="cart_page-btn">
                                    <button className="addTOCart_btn me-3"><Link to='/foods' >Continue Shopping</Link></button>
                                    <button className="addTOCart_btn"><Link to='/checkout'>Proceed to checkout</Link></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

const Tr = props =>{
    const { id, image01, title, price, quantity } = props.item;
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }
    return <tr>
        <td className="text-center cart_img-box">
            <img src={image01} alt=""  />
        </td>
        <td className="text-center">{title}</td>
        <td className="text-center">${price}</td>
        <td className="text-center">{quantity}px</td>
        <td className="text-center cart_item-del">
            <i className="ri-delete-bin-line" onClick={deleteItem}></i>
        </td>
    </tr>
}

export default Cart
