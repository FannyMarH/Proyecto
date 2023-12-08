import React from 'react'
import CarouselComponent from '../../newCarousel/CarouselComponet'
import ListaPeliculas from '../ListaPeliculas/ListaPeliculas'

export default function HomeSon() {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <CarouselComponent/>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <div className="col">
            <ListaPeliculas genero="home" />
            </div>
        </div>
    </div>
    </>
  )
}