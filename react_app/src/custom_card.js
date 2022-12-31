import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import './custom_card.css'

function CustomCard(props) {
  return (
    <div className="videos">
      <Card className='video'>
        <Card.Img 
          className='thumbnail'
          variant="bottom"
          src={props.data.images[0]}
        />
        <Card.Body>
          <Card.Title>
            <strong>{props.data.title}</strong>
          </Card.Title>
          <Card.Text>
          {props.data.description}
          </Card.Text>
          <Button
            variant="primary"
            href="www.google.com"
            rel={"noopener noreferrer"}
          >
            Order Now
          </Button>
        </Card.Body>
      </Card>
      
    </div>
  );
}

export default CustomCard;
