import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import GiftCards from './GiftCards';
import './App.css';

function App() {

  const [giftCards] = useState(GiftCards);
  return (
    <Container className="p-5">
    <h2>Currencies</h2>
    <div className="box">
      {giftCards.map((item) => (
        <Card className="currency" style={{ width: '18rem' }} key={item.id}>
        <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <div className="box">
    {item.currencies.map((arrayItem, index)  => 
      <p className="m-3 p-2 currencyType" key={index}>{arrayItem}</p>
    )}
    </div>
  </Card.Body>
        </Card>
      ))}
        </div>
    </Container>
  );
}

export default App;
