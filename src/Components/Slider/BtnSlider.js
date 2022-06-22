import React from 'react'
import './Slider.css'
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";


// Deklarisemo BtnSlider komponentu i ubacujemo njene PROPS
export default function BtnSlider({direction, moveSlide}) {


  // Odavde trigerujemo funkcije koje smo deklarisali u Slider komponenti, 
  // za klase dinamiski ubacujemo odgovarajuce u odnosu na to da li je
  // next ili prev. Na kraju na isti nacin odredjuemo klase za strelice i 
  // njihovu orjentaciju.

  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <img
        src={direction === "next" ? rightArrow : leftArrow}
        />
    </button>
  )
}
