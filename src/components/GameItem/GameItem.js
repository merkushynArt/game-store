import React from 'react';
import GameBuy from '../game-buy/GameBuy';
import GameCover from '../game-cover/GameCover';
import GameGenre from '../GameGenre/GameGenre';

import './game-item.css';

const GameItem = ({game}) => {
   return (
      <div className='game-item'>
         <GameCover image={game.image}/>
         <div className="game-item__details">
            <span className='game-item__title'>{game.title}</span>
            <div className="game-item__genre">
               {
                  game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)
               }
            </div>
            <div className="game-item__buy">
               <GameBuy game={game}/>
            </div>
         </div>
      </div>
   )
}

export default GameItem