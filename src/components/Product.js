import React from 'react';
import {Card,Button} from "react-bootstrap"

const Product = ({car, handleMessage}) => {
    console.log(car)
  return (
    <div>
      <Card style={{ width: '18rem', margin:"20px" }} >
  <Card.Img style={{height:"200px"}} variant="top" src={car.imgSrc}/>
  <Card.Body>
    <Card.Title> {car.name} </Card.Title>
    <Card.Text>
     <strong> Car Price :</strong> {car.price}
    </Card.Text>
    <Button variant="primary" onClick={()=>handleMessage(car.name,car.price)}>Buy</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Product