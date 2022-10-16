import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
    return (
        <Carousel className="mt-5">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://preview.colorlib.com/theme/cozastore/images/xslide-01.jpg.pagespeed.ic.XotvXKn0Mi.webp"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Shop Fashion</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://preview.colorlib.com/theme/cozastore/images/xslide-02.jpg.pagespeed.ic.__MQeyG5T4.webp"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Shop Fashion</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://preview.colorlib.com/theme/cozastore/images/xslide-03.jpg.pagespeed.ic.tP-L47NU9M.webp"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Shop Fashion</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
