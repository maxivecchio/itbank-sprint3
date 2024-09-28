"use client"

// pages/pagar.js
import { useState } from 'react';
const PagarFacturas = () => {
  const [nombreServicio, setNombreServicio] = useState('');
  const [monto, setMonto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarPago = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el pago
    setMensaje(`Pago de ${monto} para ${nombreServicio} procesado.`);
    setNombreServicio('');
    setMonto('');
  };

  return (
    <div className= "bg-white shadow-lg rounded-sm text-black"style={{ padding: '15px', width:'400px', margin:'0px'}}>
      <h1>Pagar Facturas de Servicios </h1>
      <form onSubmit={manejarPago}>
        <div style={{margin:'10px'}}>
          <label htmlFor="nombreServicio">Nombre del Servicio:</label>
          <input
          className=' rounded-sm border-2 border-cyan-950'
            type="text"
            id="nombreServicio"
            value={nombreServicio}
            onChange={(e) => setNombreServicio(e.target.value)}
            required
          />
        </div>
        <div style={{margin:'10px'}}>
          <label htmlFor="monto">Monto a Pagar:</label>
          <input
          className=' rounded-sm border-2 border-cyan-950'
            type="number"
            id="monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            required
          />
        </div>
        <button className="bg-primary text-white hover:bg-sky-900  rounded-sm"type="submit">Pagar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default PagarFacturas;