import { Button, ButtonToolbar, Card, Container, Stack } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../../../context";
import { commerce } from "../../../lib/commerce";

const Checkout = () => {
    const { checkoutToken, shippingData, setCart } = useContext(DataContext);

    const [productList, setProductList] = useState();

    const [order, setOrder] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const handleCheckoutData = async () => {
            if (checkoutToken) {
                const response = await checkoutToken;

                setProductList(response);
            }
        };

        handleCheckoutData();
    }, [checkoutToken]);

    const stripePromise = loadStripe(
        "pk_test_51Lt8VYGZKgjc8xrtVk2cJz92hTI1Dl8whJ4LmeB3wywzxRu8xXxKpcfqyPH0flykRDF4Gjw7tYwo06kt7wXY1KZ000C3TcqXBm"
    );

    const handleCaptureCheckout = async (checkoutId, newOrder) => {
        const response = await commerce.checkout
            .capture(checkoutId, newOrder)
            .then((response) => response)
            .catch((error) => console.log(error));

        refreshCart();

        setOrder(response);
    };

    const refreshCart = async () => {
        const response = await commerce.cart.refresh();

        setCart(response);
    };

    const handleSubmit = async (e, elements, stripe) => {
        e.preventDefault();

        if (!elements || !stripe) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: "card", card: cardElement });

        if (error) {
            console.log(error);
        } else {
            const orderData = {
                line_items: checkoutToken.line_items,
                customer: {
                    fistname: shippingData.fistName,
                    lastname: shippingData.lastName,
                    email: shippingData.email,
                },
                shipping: {
                    name: "primary",
                    street: shippingData.address,
                    town_city: shippingData.city,
                    county_state: shippingData.shippingSubdivison,
                    country: shippingData.shippingCountry,
                },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment: {
                    gateway: "stripe",
                    stripe: {
                        payment_method_id: paymentMethod.id,
                    },
                },
            };

            handleCaptureCheckout(checkoutToken.id, orderData);
        }
    };

    return (
        <Container className="mt-5 pt-5 d-flex justify-content-center align-items-center">
            {productList && productList.line_items && (
                <Card className="w-75 p-4 shadow rounded">
                    <Card.Title className="text-center fw-bold mb-5">Checkout</Card.Title>
                    <Card.Subtitle className="mb-5">Order Summary</Card.Subtitle>
                    {productList.line_items.map((item) => (
                        <Stack key={item.id} direction="horizontal" className="mb-5">
                            <div className="d-flex flex-column">
                                <span>{item.name}</span>
                                <span>Quantity: {item.quantity}</span>
                            </div>
                            <div className="ms-auto">{item.line_total.formatted_with_symbol}</div>
                        </Stack>
                    ))}
                    <Stack direction="horizontal" className="fw-bold">
                        <div>Total</div>
                        <div className="ms-auto">{productList.subtotal.formatted_with_symbol}</div>
                    </Stack>

                    <Card.Title className="mt-5 mb-5">Payment Method</Card.Title>

                    <Elements stripe={stripePromise}>
                        <ElementsConsumer>
                            {({ elements, stripe }) => (
                                <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                                    <CardElement />

                                    <ButtonToolbar className="justify-content-between mt-5">
                                        <Button
                                            variant="outline-dark"
                                            onClick={() => navigate("/payment", { replace: true })}
                                        >
                                            BACK
                                        </Button>
                                        <Button disabled={!stripe} type="submit">
                                            PAY {productList.subtotal.formatted_with_symbol}
                                        </Button>
                                    </ButtonToolbar>
                                </form>
                            )}
                        </ElementsConsumer>
                    </Elements>
                </Card>
            )}
        </Container>
    );
};

export default Checkout;
