import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode'; // Import jwtDecode as a named import
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCartItems = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                setError('User not authenticated');
                setLoading(false);
                return;
            }

            const decoded = jwtDecode(token);
            const userId = decoded.user.id;

            try {
                const response = await fetch(`http://localhost:5000/api/getcart/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const json = await response.json();
                if (json.success) {
                    setCartItems(json.items);
                } else {
                    setError('Failed to fetch cart items');
                }
            } catch (err) {
                setError('Failed to fetch cart items');
            } finally {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    const handleRemoveItem = async (itemId) => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            setError('User not authenticated');
            return;
        }

        const decoded = jwtDecode(token);
        const userId = decoded.user.id;

        try {
            const response = await fetch('http://localhost:5000/api/removecartitem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, itemId })
            });

            const json = await response.json();
            if (json.success) {
                setCartItems(json.items);
            } else {
                setError('Failed to remove item from cart');
            }
        } catch (err) {
            setError('Failed to remove item from cart');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        <Container>
            <h1 className="my-4">Your Cart</h1>
            {cartItems.length > 0 ? (
                <Row>
                    {cartItems.map((item, index) => (
                        <Col key={index} md={6} lg={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={item.img} alt={item.name} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        <strong>Price:</strong> ${item.price}<br />
                                        <strong>Quantity:</strong> {item.quantity}<br />
                                        <strong>Option:</strong> {item.option}
                                    </Card.Text>
                                    <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>Remove</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <Alert variant="info">Your cart is empty</Alert>
            )}
            <div className="mt-4">
                <Link to="/" className="btn btn-primary">Continue Shopping</Link>
                {cartItems.length > 0 && <Button variant="success" className="ms-2">Proceed to Checkout</Button>}
            </div>
        </Container>
    );
}