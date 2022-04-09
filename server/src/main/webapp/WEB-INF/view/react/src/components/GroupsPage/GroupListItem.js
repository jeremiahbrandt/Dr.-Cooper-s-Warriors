import { ListGroup, Row, Col, Image, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import GroupPage from "../GroupPage/GroupPage";

export default function GroupListItem(props) {
    function handleClick() {
        props.onClick(props.item)
    }

    function getColor() {
        if (props.variant === "primary") {
            return "#bee0ec"
        } else {
            return "#e9f5f9"
        }
    }

    function getBadgeBackgroundColor() {
        if (props.item.category === "Physical") {
            return "primary"
        } else if (props.item.category === "Leisure") {
            return "secondary"
        } else if (props.item.category === "Arts and Crafts") {
            return "success"
        } else if (props.item.category === "Games") {
            return "danger"
        } else if (props.item.category === "Nature") {
            return "warning"
        }
    }

    return (
        <ListGroup.Item
            action onClick={handleClick}
            style={{ backgroundColor: getColor(), color: 'black', textAlign: 'left' }}
        >
            <Container onclick="location.href='google.com'">
                <Row>
                    <Col>
                        <Row>
                            <h3 className="d-flex align-items-center"><Link group={props.item} to="/GroupPage">{props.item.name}</Link><Badge pill bg={getBadgeBackgroundColor()} style={{ fontSize: '11px', marginLeft: '10px' }}>{props.item.category}</Badge></h3>
                        </Row>
                        <Row>
                            <p>{props.item.description}</p>
                        </Row>
                    </Col>
                    <Col xs={3} className="d-flex align-items-center">
                        <Image style={{width: '140px' }} src={props.item.imageUrl} />
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    )
}