import React from 'react';
import Button from '../Button/Button';
import './game-buy.css';

const GameBuy = ({game}) => {
   return (
      <div className='game-buy'>
         <span className='game-buy__price'>{game.price} грн</span>
         <Button 
         type="primary"
            onClick={() => null}
         >
            В корзину
         </Button>
      </div>
   )
}

export default GameBuy