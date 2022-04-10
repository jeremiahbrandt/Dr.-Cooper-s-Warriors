import './Marker.css';
import { useState } from 'react';
import InfoWindow from './InfoWindow'
const Marker = (props) => {
    const { color, name } = props;
    const [show, setShow] = useState(false);
    return (
     <>
      <div className="pin bounce"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
        onClick={() => setShow(!show)}
      />
      <div className='pulse' />
      {show ? <InfoWindow address={props.address} category={props.category} name={props.name} setTrigger={() => setShow(false)} /> : ""}
      </>
    );
  };

  export default Marker;