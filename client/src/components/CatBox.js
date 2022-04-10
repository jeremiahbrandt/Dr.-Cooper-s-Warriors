import { Container, Row } from 'react-bootstrap';
import './CatBox.css'

function CatBox(props) {
    const { filters, toggleFilter, checked } = props
    function handleClick(e) {
        toggleFilter(e.target.value)
    }

    return (
        <Container>
            <Row>
                <form>
                    {filters.map((filter, index) => (
                        <label className='catLabel' key={`cat-${index}`}>
                            {filter.name}
                            <input className='catInput' type="checkbox" id='physical' value={filter.cat_id} onChange={handleClick} checked={!filter.checked} />
                        </label>
                    ))}
                </form>
            </Row>
        </Container>
    )

}
export default CatBox;