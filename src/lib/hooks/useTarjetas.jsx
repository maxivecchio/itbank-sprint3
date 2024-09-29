"use client";
import { useEffect, useState } from 'react';

const defaultTarjetas = [
    { id: '1', nombre: 'Tarjeta Visa', limite: 20000, deuda: 5000 },
    { id: '2', nombre: 'Tarjeta MasterCard', limite: 15000, deuda: 3000 },
    { id: '3', nombre: 'Tarjeta American Express', limite: 30000, deuda: 10000 },
];

export function useTarjetas() {
    const [tarjetas, setTarjetas] = useState([]);

    useEffect(() => {
        const storedTarjetas = localStorage.getItem('creditCards');
        if (storedTarjetas) {
            setTarjetas(JSON.parse(storedTarjetas));
        } else {
            localStorage.setItem('creditCards', JSON.stringify(defaultTarjetas));
            setTarjetas(defaultTarjetas);
        }
    }, []);

    const updateTarjetas = (newTarjetas) => {
        localStorage.setItem('creditCards', JSON.stringify(newTarjetas));
        setTarjetas(newTarjetas);
    };

    return [tarjetas, updateTarjetas];
}
