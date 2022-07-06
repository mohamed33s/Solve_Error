import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import CardData from "./CardData";
function Cards() {
  const [memeImage, setMemeImahe] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImahe(url);
  };

  return (
    <div>
      <Card className="cardStyle" style={{ width: "18rem" }}>
        <Card.Img className="cardImg" variant="top" src={memeImage} />
        <Card.Body>
         
          <Button className="buttonImg" variant="dark" onClick={myRandomEmg}>
            Get a new image
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
