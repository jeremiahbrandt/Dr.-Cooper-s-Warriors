import "./InfoWindow.css";
import {Button, Container} from 'react-bootstrap';

const InfoWindow = (props) => {
    return (
    <div className="infoWindow">
    <Container>
    <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
    <div style={{marginTop: 30, marginBottom: 30, padding: 10}}>
      <h3>Look at Nick's Kayak</h3>
      <div>Category: Leisure</div>
      <div>Address: Nick's House</div>
      <div>Date/Time: 05/07/22</div>
    </div>
      <Button>Sign Up</Button>
    </Container>
    </div>
    )
}

export default InfoWindow;