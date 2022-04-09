import "./InfoWindow.css";
import {Button, Container} from 'react-bootstrap';

const InfoWindow = (props) => {
    return (
    <div className="infoWindow">
    <Container>
    <div style={{marginTop: 5, marginBottom: 30}}>
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