import PropTypes from 'prop-types';

import './card.css';

export const Card = ({ character }) => {
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
          <a href="#">Details</a>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
    character: PropTypes.object.isRequired
}