import * as React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Card, CardContent } from "@mui/material";

const WhatsAppBot: React.FunctionComponent = () => {
  return (
    <Card className="contactCard">
      <CardContent
        component="a"
        href="https://wa.me/918919776375?text=Hi%20there%2C%20I'm%20interested!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 text-black bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full shadow-lg z-50 flex items-center gap-2 transition-all duration-300"
        style={{ justifyContent: "center" }}
      >
        <FaWhatsapp size={20} />
        <span className="font-bold text-sm ">WhatsApp Us</span>
      </CardContent>
    </Card>
  );
};

export default WhatsAppBot;
