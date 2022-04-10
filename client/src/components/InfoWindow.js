import "./InfoWindow.css";
import {Button, Container} from 'react-bootstrap';

const InfoWindow = (props) => {
  // console.log(props)
    return (
    <div className="infoWindow">
    <Container>
    <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
    <div style={{marginTop: 30, marginBottom: 30, padding: 10}}>
      <h3 className="name">Look at Nick's Kayak</h3>
      <hr></hr>
      <div className="info">
        <div>Category: {props.imageURL}</div>
        <div>Address: {props.address}</div>
        <div>Date/Time: 05/07/22</div>
      </div>
      
    </div>
      <Button className="info-button">Sign Up</Button>
    </Container>
    </div>
    )
}

export default InfoWindow;