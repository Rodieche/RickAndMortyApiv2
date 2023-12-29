import PropTypes from 'prop-types';

import './card.css';

export const Card = ({ character }) => {
  return (
    <div className="card">
        <h3>{ character.id }</h3>
        <i className="fa-regular fa-heart"></i>
        <div className="image">
        <img src={ character.image } />
            <img src={ character.image } className="blur" />
        </div>
        <div className="text">
            <h2>{ character.name }</h2>
            <div className="p-4">
        <div className="mb-4">
          <p className="text-sm font-semibold">
            <span className="text-gray-600">Status:</span> {character.status}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold">
            <span className="text-gray-600">Species:</span> {character.species}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold">
            <span className="text-gray-600">Location:</span> {character.location.name}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">
            <span className="text-gray-600">Origin:</span> {character.origin.name}
          </p>
        </div>
      </div>
        </div>
    </div>
  )
}

Card.propTypes = {
    character: PropTypes.object.isRequired
}