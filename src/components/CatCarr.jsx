import React from 'react'
import Carrito from "./Carrito"
import Catalogo from "./Catalogo"
import audi from '../assets/audi.jpg'
import camara from '../assets/camara.jpg'
import micros from '../assets/micros.jpg'
import tele from '../assets/tele.jpg'
import {useState} from 'react'


export default function CatCarr() {

    const [products, setProducts] = useState([
      { nombre: "Camera", descripcion: " Camara profesional", src: camara, cantidad: 4, id: 1354 },
      { nombre: "Microfono", descripcion: " Microfono profesional", src: micros, cantidad: 4, id: 1355 },
      { nombre: "Audifonos", descripcion: " Audifonos profesionales", src: audi, cantidad: 4, id: 1356 },
      { nombre: "Television", descripcion: "Televisión alta definición", src: tele, cantidad: 4, id: 1357 },
    ])
    
    const[productsCarr, setProductsCarr] = useState([])
  
    const agregar = (id) =>{
        const productsCopy = [...products]
        const producto = productsCopy.find((p) => (p.id == id))
        const productsCarrCopy = [...productsCarr, producto]

        setProductsCarr(productsCarrCopy)
    }

    const eliminar = (id) =>{}


    return (
    <div>
        <Carrito products={products} onClick={agregar}></Carrito>
        <Catalogo products={productsCarr}></Catalogo>
    </div>
  )
}

