import React from 'react'
import Carrito from "./Carrito"
import Catalogo from "./Catalogo"
import AgregarItem from './agregarItem'
import audi from '../assets/audi.jpg'
import camara from '../assets/camara.jpg'
import micros from '../assets/micros.jpg'
import tele from '../assets/tele.jpg'
import { useState } from 'react'


export default function CatCarr() {
  const [products, setProducts] = useState([
    { nombre: "Camera", descripcion: " Camara profesional", src: camara, cantidad: 4, id: 1354 },
    { nombre: "Microfono", descripcion: " Microfono profesional", src: micros, cantidad: 4, id: 1355 },
    { nombre: "Audifonos", descripcion: " Audifonos profesionales", src: audi, cantidad: 4, id: 1356 },
    { nombre: "Television", descripcion: "Televisión alta definición", src: tele, cantidad: 4, id: 1357 },
  ]);

  const [productsCarr, setProductsCarr] = useState([]);

  const agregar = (id) => {
    /*Si el producto esta en catalogo o es menor o igual a 0 se queda asi */
    const productoCatalogo = products.find((p) => p.id === id);
    if (!productoCatalogo || productoCatalogo.cantidad <= 0) return;

    const nuevoCatalogo = products.map((p) =>
      p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
    );

    const existeEnCarrito = productsCarr.find((p) => p.id === id);
    let nuevoCarrito;
    if (existeEnCarrito) {
      nuevoCarrito = productsCarr.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      );
    } else {
      nuevoCarrito = [...productsCarr, { ...productoCatalogo, cantidad: 1 }];
    }

    setProducts(nuevoCatalogo);
    setProductsCarr(nuevoCarrito);
  };

  const eliminar = (id) => {
    /*Busca si el producto esta en el catalogo si no no hace nada*/
    const productoCarrito = productsCarr.find((p) => p.id === id);
    if (!productoCarrito) return;

    /*Cuando recorrey ecnuentra el articulo suma la cantidad del carrito a la cantidad del catalogo para que regrese al catalogo */
    const nuevoCatalogo = products.map((p) =>
      p.id === id ? { ...p, cantidad: p.cantidad + productoCarrito.cantidad} : p
    );


    const nuevoCarrito = productsCarr.filter((p) => p.id !== id);
    

    setProducts(nuevoCatalogo);
    setProductsCarr(nuevoCarrito);
  };

  return (
    <div>
      <AgregarItem></AgregarItem>
      <Catalogo products={products} onClick={agregar} />
      <Carrito products={productsCarr} onClick={eliminar} />
      
    </div>
  );
}
