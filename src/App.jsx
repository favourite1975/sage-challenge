import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CartProvider>
      <>
        {/* Renders all children i.e all other routes */}
        <Outlet />
      </>
    </CartProvider>
  );
}
