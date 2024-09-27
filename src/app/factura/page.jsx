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
    <div style={{ padding: '20px' }}>
      <h1>Pagar Facturas de Servicios</h1>
      <form onSubmit={manejarPago}>
        <div>
          <label htmlFor="nombreServicio">Nombre del Servicio:</label>
          <input
            type="text"
            id="nombreServicio"
            value={nombreServicio}
            onChange={(e) => setNombreServicio(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="monto">Monto a Pagar:</label>
          <input
            type="number"
            id="monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            required
          />
        </div>
        <button type="submit">Pagar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default PagarFacturas;