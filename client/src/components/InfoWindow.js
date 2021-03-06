import "./InfoWindow.css";
import { Button, Container } from 'react-bootstrap';
import axios from "axios";

const InfoWindow = (props) => {
  async function handleClick() {
    await axios.post(`http://localhost:8080/api/register?eventId=${props.markerId}`).then(res => {
      console.log(res);
      props.setTrigger(false)
    });
  }

  return (
    <div className="infoWindow">
      <Container>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
        <div style={{ marginTop: 30, marginBottom: 30, padding: 10 }}>
          <h3 className="name">{props.name}</h3>
          <hr></hr>
          <div className="info">
            <div>Category: {props.category}</div>
            <div>Address: {props.address}</div>
            <div>Date/Time: 05/07/22</div>
          </div>

        </div>
        <Button className="info-button" onClick={handleClick}>Sign Up</Button>
      </Container>
    </div>
  )
}

export default InfoWindow;