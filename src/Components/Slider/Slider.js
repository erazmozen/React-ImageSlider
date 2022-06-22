import React, {useState} from 'react'       // Importujemo React i useState funkciju
import './Slider.css'                       // .. CSS koji smo vec dobili
import BtnSlider from './BtnSlider'         // .. BtnSlider komponentu
import dataSlider from './dataSlider'       // .. dataSlider podatke

// Kreiramo Slider komponentu
export default function Slider() {
    
    // Deklarisemo STATE za slider
    const [slideIndex, setSlideIndex] = useState(1)

    // Funkcije za navigaciju
    // Logika je prosta, ako je slideIndex striktno drugaciji od duzine naseg dataSlider
    // objekta, onda cemo slideIndexu dodati 1, a ako je jednoako duzini bice 1, tacnije]\
    // vraticemo ga na pocetak
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    // Slicna stvar i za back, samo obrnuto
    const privSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    // Proveravamo slide index
    console.log(slideIndex)

    // Ovo nam je sudo variable, prati kliknuti index za mali navbar tako sto 
    // se prilikom klika index iz novokreirane matrice prvo uveca za 1 (kako
    // bismo dovili isti start index koji ima slider), a zatim update state.
    const moveDot = index => {
        setSlideIndex(index)
    }


    
    // Return komponente, ovde renderujemo elemente
  return (
    <div className='container-slider'>
        {/*
        - Ovde koristimo .map funkciju Reacta kako bismo renderovali pojedinacne
        elemente. 
        - Prvi argument funkcije je objekat koji sadrzi podatke dok a drugi nam
        sluzi za proveravanje indexa te matrice podataka
        - Dodajemo id iz matrice podataka
        - {} nam sluzi da unutar JSX-a ubacimo JS, a preko ${} mozemo da
        koristimo i promenljive koje smo gore deklaisali. U ovom slucaju
        proveravamo da li je STATE isti kao index + 1, ako jeste dodeljujemo div-u
        active-anim, ako ne, onda ostaje kako je bilo.
        - Sve ovo kako bismo prikazali prvu sliku, i sakrili je posle kada pozelimo novu.
        - index se update za 1 u img src kako bismo automatski prikazali drugu sliku
        */}

        {dataSlider.map((obj, index) => { 
            return (
                <div
                    
                key={obj.id} 
                    
                className={slideIndex === index + 1 ? "slide active-anim" : "slide"} >
                    <img
                    src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                    />
                </div>
            )

        })}

        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={privSlide} direction={"priv"} />
        
        <div className="container-dots">
            {Array.from({length: 5}).map((item, index) => (
                <div
                className={slideIndex === index + 1 ? "dot active" : "dot" }
                onClick={() => moveDot(index + 1)} 
                >
                {/* anonimus function () => koristimo kako funkcija ne bi bila pokrenuta na
                ucitavanju vec samo kada kliknemo */}
                </div>
            ))}
        </div>
    </div>
  )

}
