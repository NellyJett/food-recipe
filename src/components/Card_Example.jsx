import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"
import "./Outer.css"
import Preparation_time from './Preparation_time';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Nutritions from './Nutritions';

const Card_Example = ()=>{
    return(
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="../images/image-omelette.jpeg" />
            <Card.Body>
                <Card.Title>Simple Omelette Recipe</Card.Title>
                <Card.Text>
                An easy  and quick dish. perfect for any meal. Thisclassic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats
                </Card.Text>
                
            </Card.Body>
            <Preparation_time />
            <Ingredients />
            <Instructions />
            <Nutritions />
        </Card>
    )
};
export default Card_Example