import { ListGroup } from "react-bootstrap";

export default function ListItem(props) {
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

    return (
        <ListGroup.Item
            action onClick={handleClick}
            style={{ backgroundColor: getColor(), color: 'black' }}
        >
            {props.item}
        </ListGroup.Item>
    )
}