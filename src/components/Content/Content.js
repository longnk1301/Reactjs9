import { useEffect, useState, useContext, memo } from "react";
import { Container, Row, Col, Card, Button, InputGroup, Form, Spinner } from "react-bootstrap";

import { getData } from "../../services";
import { commerce } from "../../lib/commerce";
import { DataContext } from "../../context";

const Content = memo(() => {
    const [products, setProducts] = useState([]);

    const [query, setQuery] = useState("");

    const { setCart, loading } = useContext(DataContext);

    useEffect(() => {
        const handleDataProducts = async () => {
            const response = await getData();

            if (response) {
                setProducts(response);
            } else {
                setProducts([]);
            }
        };

        handleDataProducts();
    }, []);

    const onAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        if (item) {
            setCart(item);
        }
    };

    return (
        <Container className="mt-5 pt-5">
            <InputGroup className="mb-3">
                <label htmlFor="search" className="btn btn-secondary">
                    Search
                </label>
                <Form.Control id="search" onChange={(event) => setQuery(event.target.value)} />
            </InputGroup>

            {loading ? (
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {products
                        .filter((item) => {
                            return item.name.toLowerCase().includes(query);
                        })
                        .map((product) => {
                            return (
                                <Col key={product.id}>
                                    <Card className="shadow">
                                        <Card.Img variant="top" src={product.image.url} />
                                        <Card.Body className="text-center">
                                            <Card.Text className="fw-bold">{product.name}</Card.Text>
                                            <Card.Text className="fw-bold">{product.price.raw}$</Card.Text>

                                            <Button onClick={() => onAddToCart(product.id, 1)}>Add To Cart</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                </Row>
            ) : (
                <div className="text-center">
                    <Spinner animation="border" role="status"></Spinner>
                </div>
            )}
        </Container>
    );
});

export default Content;
