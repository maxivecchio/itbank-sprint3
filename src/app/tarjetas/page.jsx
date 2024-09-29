"use client"

import { useTarjetas } from '@/lib/hooks/useTarjetas';
import Link from 'next/link';

const TarjetasPage = () => {
    const [tarjetas] = useTarjetas();

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Lista de Tarjetas de Crédito</h1>
            <ul className="space-y-4">
                {tarjetas.map((tarjeta) => (
                    <li key={tarjeta.id} className="border p-4 rounded-md shadow-lg">
                        <h2 className="text-xl font-semibold">{tarjeta.nombre}</h2>
                        <p>Límite: ${tarjeta.limite}</p>
                        <p>Deuda: ${tarjeta.deuda}</p>
                        <Link href={`/tarjetas/${tarjeta.id}`}>
                           Ver detalles
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TarjetasPage;
