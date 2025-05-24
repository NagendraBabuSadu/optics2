'use client'
import * as React from "react";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBot: React.FunctionComponent = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showMessage && (
        <div className="bg-green-900 text-white p-2 rounded-lg shadow-md text-sm animate-fade-in">
          Hi there, WhatsApp me!
        </div>
      )}

      <a
        href="https://wa.me/918919776375?text=Hi%20there%2C%20I'm%20interested!"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300 flex items-center justify-center"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default WhatsAppBot;
