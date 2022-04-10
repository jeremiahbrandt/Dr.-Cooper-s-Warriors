import { ListGroup, Row, Col, Image, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import GroupPage from "../GroupPage/GroupPage";
import "./GroupLinks.css";


export default function GroupListItem(props) {
    function handleClick() {
        props.onClick(props.item.group_id)
    }

    function getColor() {
        if (props.variant === "primary") {
            return "#bee0ec"
        }

        else {
            return "#e9f5f9"
        }

    }

    function getBadgeBackgroundColor() {
        const category = props.item.category.name
        if (category === "Physical") {
            return "success"
        } else if (category === "Leisure") {
            return "dark"
        } else if (category === "Arts and Crafts") {
            return "primary"
        } else if (category === "Games") {
            return "danger"
        } else if (category === "Nature") {
            return "warning"
        }
    }

    return (
        <ListGroup.Item
            action onClick={handleClick}
            style={{ backgroundColor: getColor(), color: 'black', textAlign: 'left' }}
        >
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <h3 className="d-flex align-items-center">
                                <span className="groupLink" >{props.item.group_name}</span>
                                <Badge pill bg={getBadgeBackgroundColor()} style={{ fontSize: '11px', marginLeft: '10px' }}>{props.item.category.name}</Badge>
                            </h3>
                        </Row>
                        <Row>
                            <p>{props.item.group_description}</p>
                        </Row>
                    </Col>
                    <Col xs={3} className="d-flex align-items-center">
                        <Image style={{ width: '140px' }} src={props.item.imageUrl} />
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    )
}