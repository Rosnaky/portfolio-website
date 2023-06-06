import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel/lib/Carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h5>
                                Skills
                            </h5>
                            <p>
                            The catalysts for manifesting digital dreams into tangible realities
                            </p>
                            <Carousel className="skillsSlider" responsive={responsive} infinite={true}>
                                <div className="item">
                                    <img src={meter1} alt="skill"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="skill"/>
                                    <h5>Robotics Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="skill"/>
                                    <h5>IOS and Android Apps</h5>
                                </div>
                            </Carousel> 
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}