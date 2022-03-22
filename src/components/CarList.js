import React from 'react'
import { Button } from 'react-bootstrap';
import Product from './Product'

const CarList = ({products,testProp,testCallBack}) => {
    console.log(products,testProp);
    const name ="Test Call Back Function"

    const handleMessage = (name,price) =>alert(`You need to pay ${price} to buy ${name}`)

  return (
      <div>  
    <div style={{display:'flex',margin:'20px', border:"3px solid black",justifyContent:"space-around" }}>
       {products.map((product, i)=>
       <Product key={i} car={product} handleMessage={handleMessage} />
       )}
    
    </div> 
    <Button style={{marginLeft:"800px"}} variant="danger" onClick={()=>testCallBack(name)} >Test Call Back</Button>
    </div>
  )
}

export default CarList