"use client";

import { useState } from "react";
import { useTarjetas } from '@/lib/hooks/useTarjetas';
import { useRouter } from 'next/navigation';

const AumentoPage = ({ params }) => {
    const [tarjetas, updateTarjetas] = useTarjetas();
    const [nuevoLimite, setNuevoLimite] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const tarjeta = tarjetas.find((t) => t.id === params.id);

    if (!tarjeta) {
        return router.push('/404');
    }

    const handleAumento = (e) => {
        e.preventDefault();

        const limiteAumento = parseFloat(nuevoLimite);
        if (isNaN(limiteAumento) || limiteAumento <= tarjeta.limite) {
            setMessage('El nuevo límite debe ser mayor al actual.');
            return;
        }

        tarjeta.limite = limiteAumento;

        updateTarjetas([...tarjetas]);
        setMessage(`Aumento de límite aprobado. Nuevo límite: $${tarjeta.limite}`);
        setNuevoLimite('');
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Solicitar Aumento de Límite</h1>
            <p className="mb-4">Límite actual: ${tarjeta.limite}</p>
            <form onSubmit={handleAumento} className="space-y-4">
                <label className="block">
                    Nuevo límite:
                    <input
                        type="number"
                        value={nuevoLimite}
                        onChange={(e) => setNuevoLimite(e.target.value)}
                        className="border p-2 mt-2 block w-full"
                    />
                </label>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Solicitar aumento
                </button>
            </form>
            {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
    );
};

export default AumentoPage;
