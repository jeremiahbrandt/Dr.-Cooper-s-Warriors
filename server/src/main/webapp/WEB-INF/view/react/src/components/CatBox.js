import {Container, Row, Col} from 'react-bootstrap';
import './CatBox.css'

function CatBox(){

    return(
        <Container>
        <Row>
            <form>
                <label className='catLabel'>
                    Physical:
                    <input className='catInput' type="checkbox" id='physical' value='physical' />
                </label>
                <label className='catLabel'>
                    Leisure:
                    <input className='catInput' type="checkbox" id='leisure' value='leisure' />
                </label>
                <label className='catLabel'>
                    Arts and Crafts:
                    <input className='catInput' type="checkbox" id='art' value='art' />
                </label>
                <label className='catLabel'>
                    Games:
                    <input  className='catInput' type="checkbox" id='games' value='games' />
                </label>
                <label className='catLabel'>
                    Nature:
                    <input  className='catInput' type="checkbox" id='nature' value='nature' />
                </label>
            </form>
        </Row>
        </Container>
    )

}
export default CatBox;