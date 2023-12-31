import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './card.css';

export const Card = ({ character, onlyCard = false }) => {
  return (
    <div className='card'>
      <div className="face font">
        <img src={ character.image } />
        <h3 className='text-center font-bold m-2 text-white'>{ character.name }</h3>
      </div>
      <div className="face back">
        <h3>{ character.name }</h3>
        <p>
          <b>Specie: </b>{ character.species }
          <br />
          <b>Status: </b>{ character.status }
          <br />
          <b>Origin: </b>{ character.origin?.name }
        </p>
        <div className="link">
          {
            onlyCard? null : (
                <Link to={`/characters/${character.id}`}>
                  Details
                </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
    character: PropTypes.object.isRequired,
    onlyCard: PropTypes.bool
}