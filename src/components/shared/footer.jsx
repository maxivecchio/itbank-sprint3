import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = () => {
    setShowToast(true);
    setIsModalOpen(false);
    setUserMessage("");
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer); 
    }
  }, [showToast]);

  return (
    <>
      <footer className="p-4 text-center border-t">
        <p>
          &copy; {new Date().getFullYear()} Banco Rossum. Todos los derechos
          reservados
        </p>
        <Button
          className="mt-4 w-full"
          variant="link"
          onClick={() => setIsModalOpen(true)}
        >
          ¿Necesita ayuda?
        </Button>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-lg font-bold">¿Cuál es el problema?</h2>
            <textarea className="w-full mt-4 p-2 border rounded" rows="5" placeholder="Escriba su problema aquí..." 
              value={userMessage} 
              onChange={(e) => setUserMessage(e.target.value)}></textarea>
            <div className="flex justify-end mt-4">
              <Button
                variant="outline"
                className="mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancelar
              </Button>
              <Button onClick={handleSubmit}>Enviar</Button>
            </div>
          </div>
        </div>
      )}

      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-800 text-white p-4 rounded-lg shadow-lg">
          Recibimos tu mensaje. Te contactaremos pronto.
        </div>
      )}  
  
    </>
  );
};

export default Footer;
