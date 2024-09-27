"use client"

import React, {createContext, useState, useContext, useEffect} from "react";
import Cookies from "js-cookie";
import {toast} from "sonner";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch("/api/session");
            if (res.ok) {
                const userData = await res.json();
                setUser(userData.user);
            }
        };

        fetchUser();
    }, []);


    const login = async (username, password) => {
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password}),
            });

            if (res.ok) {
                const userData = await res.json();
                toast.success("Sesión iniciada correctamente.");
                setUser(userData.user);
                Cookies.set("user", JSON.stringify(userData.user), {expires: 7});
                return true;
            } else {
                const errorData = await res.json();
                toast.error(errorData.message || "Usuario o contraseña incorrectos");
                return false;
            }
        } catch (err) {
            toast.error("Ocurrió un error inesperado. Por favor, intenta de nuevo.");
            return false;
        }
    };

    const logout = async () => {
        try {
            const res = await fetch('/api/logout', {
                method: 'POST',
            });

            setUser(null);
            router.push('/login');
            toast.success("Sesión cerrada correctamente.");
            return true;
        } catch (err) {
            toast.error("Ocurrió un error inesperado. Por favor, intenta de nuevo.");
            return false;
        }
    };

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
