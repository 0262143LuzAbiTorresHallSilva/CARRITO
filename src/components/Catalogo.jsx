import React from 'react'

export default function Catalogo() {


    const products = [ //Arreglo de productos
        { nombre: "camera", cantidad: 4, id: 1234 },
        { nombre: "lente", cantidad: 2, id: 1236 },
        { nombre: "micro", cantidad: 1, id: 1254 },
    ]

    return (
        <>
            <div className=' flex flex-wrap justify-center align-baseline'>
                {products.map((product /*mi id*/) => (
                    <div key={product.id} className=' flex justify-center shadow-gray-600  border-gray-500 width'> 
                        <p>{product.nombre}</p> 
                    </div>

                ))} </div>


        </>
    )
}
