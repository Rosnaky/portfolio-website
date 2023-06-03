import { Col } from "react-bootstrap";

export const ProjectCard = ({title, type, description, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <h5>{type}</h5>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}