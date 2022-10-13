import { Col, Container, Row, Table, Figure, Button, Spinner, Stack } from "react-bootstrap";
import { useContext } from "react";
import { DataContext } from "../../context";
import { handleUpdateDataCart, handleRemoveDataCart, handleEmptyDataCart } from "../../services";
import { Link } from "react-router-dom";

const Feature = () => {
    const { cart, loading, setCart } = useContext(DataContext);

    const onUpdateDataCart = async (id, quantity) => {
        const response = await handleUpdateDataCart(id, quantity);

        if (response) {
            setCart(response);
        }
    };

    const onRemoveDataCart = async (id) => {
        const response = await handleRemoveDataCart(id);

        if (response) {
            setCart(response);
        }
    };

    const onEmptyDataCart = async () => {
        const response = await handleEmptyDataCart();

        setCart(response);
    };

    return (
        <Container className="mt-5 pt-5">
            <Row>
                <Col>
                    {loading ? (
                        <Table responsive>
                            <thead>
                                <tr className="text-center">
                                    <th>PRODUCT</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY </th>
                                    <th>TOTAL</th>
                                    <th>REMOVE</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cart.line_items.map((item) => {
                                    return (
                                        <tr className="text-center" key={item.id}>
                                            <td>
                                                <Figure>
                                                    <Figure.Image width={100} height={50} src={item?.image?.url} />
                                                </Figure>
                                            </td>
                                            <td className="fw-bold">${item?.price?.raw}.00</td>
                                            <td className="pt-0">
                                                <div className="d-flex justify-content-center align-items-center fw-bold">
                                                    <Button
                                                        className="bg-transparent text-dark border-0"
                                                        onClick={() => onUpdateDataCart(item.id, item.quantity - 1)}
                                                    >
                                                        -
                                                    </Button>
                                                    <span className="me-2 ms-2">{item?.quantity}</span>
                                                    <Button
                                                        className="bg-transparent text-dark border-0"
                                                        onClick={() => onUpdateDataCart(item.id, item.quantity + 1)}
                                                    >
                                                        +
                                                    </Button>
                                                </div>
                                            </td>
                                            <td className="fw-bold">${item?.line_total?.raw}.00</td>
                                            <td className="fw-bold">
                                                <i
                                                    className="fa-solid fa-trash btn pt-0 text-danger"
                                                    onClick={() => onRemoveDataCart(item.id)}
                                                ></i>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    ) : (
                        <div className="text-center">
                            <Spinner animation="border" role="status"></Spinner>
                        </div>
                    )}
                </Col>

                <Stack direction="horizontal" gap={3} className="mt-3">
                    <Button className="bg-danger border boder-0" onClick={onEmptyDataCart}>
                        EMPTY CART
                    </Button>
                    <Button className="bg-primary border boder-0">
                        <Link to="payment" className="nav-link">
                            CHECK OUT
                        </Link>
                    </Button>
                    <div className="fw-bold fs-5 ms-auto ">Subtotal : {cart?.subtotal?.formatted_with_symbol}</div>
                </Stack>
            </Row>
        </Container>
    );
};

export default Feature;
