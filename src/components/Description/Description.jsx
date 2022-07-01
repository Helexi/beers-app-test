import { useState } from "react"
import "./Description.css"

export const Description = ({ setOpenModal, setShow, name, abv, image_url, tagline, description, food_pairing }) => {
  const [showDesc, setShowDesc] = useState(true);
  const [showFoodPairing, setShowFoodPairing] = useState(true);

  const descriplion50 = description.substr(0, 47)
  const food_pairing50 = description.substr(0, 47)

  return (
    <div className="description">
      <button className="description-button-delete"
        onClick={() => {
          setOpenModal(false);
          setShow(true)
        }}
      >
        X
      </button>
      <img className="card__img" src={image_url} alt={name} />
      <p><span className="description__span">name: </span>{name}</p>
      <p><span className="description__span">abv: </span>{abv}</p>
      <p><span className="description__span">tagline: </span>{tagline}</p>
      <div>
        <span className="description__span">description: </span>
        {showDesc ? <p>{description.length < 50 ? description : descriplion50}</p> : description}
        {showDesc ? <span className="coma" onClick={(e) => setShowDesc(false)}>...</span> : null}
      </div>
      <div>
        <span className="description__span">food pairing: </span>
        {showFoodPairing ? <p>{food_pairing.length < 50 ? food_pairing : food_pairing50}</p> : food_pairing}
        {showFoodPairing ? <span className="coma" onClick={(e) => setShowFoodPairing(false)}>...</span> : null}
      </div>
    </div>
  )
}