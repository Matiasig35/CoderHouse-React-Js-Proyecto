import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({product}) => (
    
    <Card style={{ width: '18rem' }} class="d-grid">
    <Card.Img variant="top" src={product.image} />
    <Card.Body class="text-center">
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>{product.categoryId}</Card.Text>
      <Card.Text>${product.price}</Card.Text>
      <Link to={`/item/${product.id}`}>
        <Button variant="primary">COMPRAR</Button>
      </Link>
    </Card.Body>
  </Card>
  
);
