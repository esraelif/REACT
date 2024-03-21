import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import { products } from "../../helper/data"

const ProductCard = ({ id, price, image, title }) => {
  const [favoriteState, setFavoriteState] = useState({});

  const handleClick = (id) => {
    setFavoriteState(item => ({
      ...item,
      [id]: !item[id] // Tıklanınca durumu tersine çevir
    }));
  };


  return (
    <Card className="rounded-2 m-auto card" role="button" key={id}>
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>{price}</Card.Title>
        <MdFavorite
          size={30}
          onClick={() => handleClick(id)}
          style={{ color: favoriteState[id] ? 'red' : 'inherit' }} // 
        />
      </Card.Header>
      <Card.Img variant="top" src={image} className="player-logo" />
      <Card.Footer className="card__over">
        <Card.Title>{title}</Card.Title>
      </Card.Footer>
    </Card>



  );
};

export default ProductCard;
