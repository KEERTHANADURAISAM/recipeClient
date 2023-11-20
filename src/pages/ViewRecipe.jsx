import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import '../styles/ViewRecipeOnly.css'

const ViewRecipe = () => {
  return (
    <Container>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://buffer.com/library/content/images/2023/10/free-images.jpg" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>   
  </Container>
  )
}

export default ViewRecipe