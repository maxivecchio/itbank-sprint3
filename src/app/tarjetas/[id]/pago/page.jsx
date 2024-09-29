"use client";

import {useEffect, useState} from "react";
import {useTarjetas} from '@/lib/hooks/useTarjetas';
import {notFound, useRouter} from 'next/navigation';
import {Skeleton} from "@/components/ui/skeleton";

const PagoPage = ({params}) => {
    const [tarjetas, updateTarjetas ] = useTarjetas();
    const [monto, setMonto] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const [tarjeta, setTarjeta] = useState(null);

    useEffect(() => {
        if (tarjetas.length > 0) {
            const tarjetaFound = tarjetas.find(tarjetaSearch => tarjetaSearch.id === params.id);
            console.log({tarjetas, tarjetaFound});
            if (!tarjetaFound) {
                return notFound()
            }
            setTarjeta(tarjetaFound);
        }
    }, [tarjetas, params.id, router]);

    const handlePago = (e) => {
        e.preventDefault();

        const montoPago = parseFloat(monto);
        if (isNaN(montoPago) || montoPago <= 0) {
            setMessage('El monto ingresado no es válido');
            return;
        }

        tarjeta.deuda -= montoPago;

        updateTarjetas([...tarjetas]);
        setMessage(`Pago de $${montoPago} realizado con éxito. Deuda actual: $${tarjeta.deuda}`);
        setMonto('');
    };

    return (
        <div className="container mx-auto p-6">
            {
                tarjeta ?
                    <>
                        <h1 className="text-3xl font-bold mb-4">Realizar Pago</h1>
                        <p className="mb-4">Deuda actual: ${tarjeta.deuda}</p>
                        <form onSubmit={handlePago} className="space-y-4">
                            <label className="block">
                                Monto a pagar:
                                <input
                                    type="number"
                                    value={monto}
                                    onChange={(e) => setMonto(e.target.value)}
                                    className="border p-2 mt-2 block w-full"
                                />
                            </label>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                                Pagar
                            </button>
                        </form>
                        {message && <p className="mt-4 text-green-500">{message}</p>}
                    </>
                    :
                    <>
                        <Skeleton className={"h-12 w-40 mb-4"}/>
                        <Skeleton className={"h-6 w-24 mb-2"}/>
                        <Skeleton className={"h-6 w-32 mb-2"}/>
                        <div className={"flex gap-2"}>
                            <Skeleton className={"h-6 w-28"}/>
                            <Skeleton className={"h-6 w-56"}/>
                        </div>
                    </>
            }
        </div>
    );
};

export default PagoPage;
