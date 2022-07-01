import React, { useState } from "react";
import { Description } from "../Description/Description";
import './Card.css'

export const Card = ({ name, abv, image_url, tagline, description, food_pairing }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [show, setShow] = useState(true);

  return (
    <div className="card">
       <>
        {show ? 
        <div className="standart-card">
          <p className="card__name">name: {name}</p>
          <img className="card__img" src={image_url} alt='beer' />
          <p className="card__abv">abv: {abv}</p>
          <button
          className="button concave"
          onClick={() => {
            setModalOpen(true);
            setShow(true)
          }}
        >
          Show more
        </button>
        </div> : null}
       
        {modalOpen && 
        <Description 
          setOpenModal={setModalOpen} 
          setShow={setShow}
          name={name}
          abv={abv}
          image_url={image_url}
          tagline={tagline}
          description={description}
          food_pairing={food_pairing}
        />}
      </>
    </div>
  )
}