import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toChange = ["A Web Developer", "An App Developer", "A Robotics Developer", "A Full Stack Developer"];
    const [text, setText] = useState("A");
    const [delta, setDelta] = useState(100 + Math.random()*50);
    const period = 2000;

    useEffect(() => {
        let time = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(time) }
    }, [text])

    const tick = () => {
        let i = loopNum % toChange.length;
        let fullText = toChange[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "A") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100 + Math.random()*50);
        } else if (isDeleting && updatedText === fullText.substring(0, fullText.length-1)) {
            setDelta(500);
        } else if (isDeleting && updatedText === fullText.substring(0, fullText.length-2)) {
            setDelta(50);
        }
    }

    const el = document.getElementById("home");

    if (el) {
        el.addEventListener("mousemove", (e) => {
            el.style.backgroundPositionX = -e.offsetX/100 + "px";
            el.style.backgroundPositionY = -e.offsetY/100 + "px";
        });
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to Ronak's World</span>
                                    <h1>{"Hi, I'm Ronak Patel"}<span className="wrap"><br/>{text}</span></h1>
                                    <p>Hey there! I'm a developer who absolutely loves to code. It's been my thing for quite a while now, and I'm always excited to learn more.
                                    Collaboration is my jam—I thrive in team settings, but I can also rock it solo and get things done efficiently. 
                                    Let's connect and see how we can create something awesome together!</p>
                                    <button onClick={() => console.log("connect")}>Let's Connect <ArrowRightCircle size={25}/></button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="headerimg" src={headerImg} alt="Header Image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}