import projectImg1 from "../assets/img/projectImg1.png"
import projectImg2 from "../assets/img/projectImg2.png"
import projectImg3 from "../assets/img/projectImg3.png"
import projectImg4 from "../assets/img/projectImg4.png"
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
    const projects = [
        {
            title: "Timekeeper",
            type: "App",
            description: "IOS App To Digitalize Gliding Logkeeping Duties",
            imgUrl: projectImg1,
        },
        {
            title: "Scouting App",
            type: "App",
            description: "React App Created To Collect Data About FRC Teams",
            imgUrl: projectImg2,
        },
        {
            title: "Portfolio Website",
            type: "Web",
            description: "Portfolio Website Created With React JS and CSS",
            imgUrl: projectImg3,
        },
        {
            title: "Automated Weather Station",
            type: "Engineering",
            description: "Automated Weather Station For Remote Aerodromes",
            imgUrl: projectImg4,
        }
    ];

    var eventKeys = [];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>The tangible realities</p>
                        <Tab.Container id="projects" defaultActiveKey={projects[0].type}>
                            <Nav variant="pills" className="mb-5 justify-content-center aligh-items-center" id="pills">
                                {
                                    projects.map((project, index) => {
                                        if (!(eventKeys.includes(project.type))) {
                                            eventKeys.push(project.type);
                                            return (
                                                <Nav.Item>
                                                    <Nav.Link className={project.type} eventKey={project.type}>{project.type}</Nav.Link>
                                                </Nav.Item>
                                            );
                                        }
                                    })
                                }
                            </Nav>
                            <Tab.Content>
                                {
                                    eventKeys.map((type, index) =>{
                                        return (
                                            <Tab.Pane eventKey={type}>
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            if (project.type === type) {
                                                                return (
                                                                <ProjectCard key={index} {...project}/>
                                                                );
                                                            }
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        )
                                    })
                                }
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}