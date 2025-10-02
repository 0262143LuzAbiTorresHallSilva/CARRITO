export default function Carrito({ products, onClick }) {
  return (
    <div className='flex justify-center items-center fixed bottom-0 bg-blue-500 w-full'>
      {products.map((product) =>
        <div key={product.id} className='flex justify-between items-center border border-gray-500 w-2/12 m-2 p-2'>
          <p className='text-white'>{product.nombre} (x{product.cantidad})</p>
          <button
            onClick={() => onClick(product.id)}
            className="w-5 h-5 flex justify-center items-center bg-white border-2 border-gray-400 rounded-full text-gray-600 font-bold text-xl hover:bg-gray-200 transition duration-300 ease-in-out focus:outline-none"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}
