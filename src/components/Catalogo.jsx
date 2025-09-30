import React from 'react'
export default function Catalogo({ products, onClick }) {

    return (
        <div className='flex flex-wrap justify-center'>
            {products.map((product) => (
                <div key={product.id} className='border rounded-2xl w-4/12 flex flex-col items-center bg-gray-light border-gray-soft text-black m-2 p-4'>
                    <div>
                        <h1 className='text-black'>{product.nombre}</h1>
                        <p className='text-gray-500'>{product.descripcion}</p>
                        <p className='text-gray-500'>{product.cantidad}</p>
                    </div>
                    <div>
                        <img src={product.src} alt="imagen" className='w-50 h-50 p-2'></img>
                    </div>
                    <button onClick={()=> onClick(product.id)}className="flex bg-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-400 hover:scale-105 transition-all duration-300 ease-in-out transform">
                        Agregar
                    </button>

                </div>
            ))}
        </div>


    )
}