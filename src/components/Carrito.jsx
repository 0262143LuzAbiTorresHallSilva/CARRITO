import React from 'react'
export default function Carrito({products}) {



  return (
    <div className='flex justify-center items-center fixed bottom-0 bg-blue-500 w-full'>
      {products.map((product) =>
        <div key={product.nombre} className='flex justify-center border border-gray-500 w-2/12'>
          <p>{product.nombre}</p>
          <button className="w-5 h-5 flex flex-right bg-white border-2 border-gray-400 rounded-full text-gray-600 font-bold text-xl hover:bg-gray-200 transition duration-300 ease-in-out focus:outline-none">
            X
          </button>
        </div>
      )}

    </div>
  )
}