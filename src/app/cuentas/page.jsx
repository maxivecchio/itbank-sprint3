import React from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'

const Cuentas = () => {
  return (
    <main className="container mx-auto p-4 bg-gray-100 rounded-lg">
      <div className="dashboard max-w-[900px] mx-auto ml-0 text-left">
        <div>
          <h1 className="text-2xl font-bold mb-6">Mis Cuentas</h1>
        </div>

        <div className="accounts-section max-w-lg mx-auto p-4 ml-0">
          <div className="account-card bg-white rounded-lg shadow-md mb-5 p-5">
            <h2 className="text-lg font-semibold">Cuenta Corriente</h2>
            <div className="saldotransacciones mb-4">
              <p className="my-1">Saldo: $1,250</p>
              <p className="my-1">Última transacción: $-50.00</p>
            </div>
            <Link className={buttonVariants()} href="/transferencias">
               Ver Detalles de Transacciones
            </Link>
          </div>

          <div className="account-card bg-white rounded-lg shadow-md mb-5 p-5">
            <h2 className="text-lg font-semibold">Cuenta de Ahorros</h2>
            <p className="my-1">Saldo: $5,789</p>
            <p className="my-1">Última transacción: $+200.00</p>
            <Link className={buttonVariants()} href="/transferencias">
               Ver Detalles de Transacciones
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cuentas