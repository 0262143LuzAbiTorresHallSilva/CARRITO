import React, { useState } from 'react';

export default function AgregarItem() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-center mt-6">
      <div className="relative bg-blue-600 text-white px-6 py-3 rounded shadow w-96">
        <p className="text-center">Agregar equipo</p>

        <button
          onClick={() => setVisible(!visible)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:bg-blue-700 px-2 py-1 rounded transition"
        >
          {visible ? "⬆️" : "⬇️"} </button>
      </div>
    </div>
    <div className='flex'>
        {visible&&}

    </div>
  );
}
