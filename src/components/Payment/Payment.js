import { useState, useContext, useEffect } from "react";
import { Card, Container, Button, Row, Col, Form, InputGroup, ButtonToolbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { getDataShippingCountries, getDataSubdivisions, getDataShippingOptions } from "../../services";
import { DataContext } from "../../context";

const Payment = () => {
    const [validated, setValidated] = useState(false);

    const { register, handleSubmit } = useForm();

    const { checkoutToken, setShippingData } = useContext(DataContext);

    const [shippingCountries, setShippingCountries] = useState([]);

    const [shippingCountry, setShippingCountry] = useState("");

    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);

    const [shippingSubdivision, setShippingSubdivision] = useState("");

    const [shippingOptions, setShippingOptions] = useState([]);

    const [shippingOption, setShippingOption] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const handleDataShippingCountries = async () => {
            const response = await getDataShippingCountries(checkoutToken.id);

            if (response) {
                setShippingCountries(response);
                setShippingCountry(Object.keys(response)[0]);
            }
        };

        handleDataShippingCountries();
    }, []);

    useEffect(() => {
        if (shippingCountry) {
            const handleDataSubdivisions = async () => {
                const response = await getDataSubdivisions(shippingCountry);

                if (response) {
                    setShippingSubdivisions(response);
                    setShippingSubdivision(Object.keys(response)[0]);
                }
            };

            handleDataSubdivisions();
        }
    }, [shippingCountry]);

    useEffect(() => {
        if (shippingSubdivision) {
            const handleDataShippingOptions = async () => {
                const response = await getDataShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);

                if (response) {
                    setShippingOptions(response);
                    setShippingOption(response[0].id);
                }
            };

            handleDataShippingOptions();
        }
    }, [shippingSubdivision]);

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));

    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));

    const options = shippingOptions.map((item) => ({
        id: item.id,
        label: `${item.description} - (${item.price.formatted_with_symbol})`,
    }));

    const onSubmit = (data) => {
        const datas = { ...data, shippingCountry, shippingSubdivision, shippingOption };

        setValidated(true);

        if (
            datas.address &&
            datas.city &&
            datas.email &&
            datas.firstName &&
            datas.lastName &&
            datas.phoneNumber !== ""
        ) {
            setShippingData(datas);

            navigate("/checkout", { replace: true });
        }
    };

    return (
        <Container className="mt-5 pt-5 d-flex justify-content-center align-items-center">
            <Card className="w-75 p-4 shadow rounded">
                <Card.Title className="text-center fw-bold mb-4">Shipping Address</Card.Title>
                <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control required type="text" placeholder="First Name" {...register("firstName")} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control required type="text" placeholder="Last Name" {...register("lastName")} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustomUsername" className="mt-4">
                            <Form.Label>Address</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder="Address"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    {...register("address")}
                                />
                                <Form.Control.Feedback type="invalid">Please choose a Address.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustomUsername" className="mt-4">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    {...register("email")}
                                />
                                <Form.Control.Feedback type="invalid">Please choose a Email.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Row className="mb-4">
                        <Form.Group as={Col} md="6" controlId="validationCustom03" className="mt-2 mb-2">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required {...register("city")} />
                            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom05" className="mt-2">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Phone Number"
                                required
                                {...register("phoneNumber")}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Phone Number.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-4">
                        <Form.Group as={Col} md="6" controlId="formGridState" className="mb-4">
                            <Form.Label>Shipping Country</Form.Label>
                            <Form.Select defaultValue="Choose..." onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                    <option value={country.id} key={country.id}>
                                        {country.label}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="formGridState" className="mb-4">
                            <Form.Label>Shipping Subdivision</Form.Label>
                            <Form.Select
                                defaultValue="Choose..."
                                onChange={(e) => setShippingSubdivision(e.target.value)}
                            >
                                {subdivisions.map((subdivision) => (
                                    <option value={subdivision.id} key={subdivision.id}>
                                        {subdivision.label}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="formGridState">
                            <Form.Label>Shipping Options</Form.Label>
                            <Form.Select
                                defaultValue={shippingOption}
                                onChange={(e) => setShippingOption(e.target.value)}
                            >
                                {options.map((option) => (
                                    <option key={option.id} value={option.id}>
                                        {option.label}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-4">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <ButtonToolbar className="justify-content-between">
                        <Button onClick={() => navigate("/feature", { replace: true })}>Back To Cart</Button>

                        <Button type="submit">Next</Button>
                    </ButtonToolbar>
                </Form>
            </Card>
        </Container>
    );
};

export default Payment;
