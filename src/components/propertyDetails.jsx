import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import data from "../data/data.json";
import Navbar from "./Navbar";

const PropertyDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Find the property with the matching ID
  const property = data.properties.find(
    (property) => property.id === parseInt(id)
  );

  // If the property is not found, display a message or handle the error
  if (!property) {
    return <div>Property not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(property);
    setIsAddedToCart(true);
  };

  return (
    <div className="bg-[#222]">
      <div>
        <Navbar />
      </div>

      <div className="w-full flex justify-center items-center mt-8">
        <img src={property.propertyImg} alt="" className="w-[80%] h-[60vh]" />
      </div>

      <div className="mt-10 px-40 capitalize text-white ">
        <div className="text-[2.5rem] font-medium text-white">
          About the house
        </div>

        <p className=" font-normal text-gray-200">
          Address: {property.address}
        </p>
        <p className="w-[60%] py-4 text-xl text-orange-100">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          non dolore incidunt ipsum laboriosam quibusdam a, officia facere
          accusamus, nobis iure tempora debitis nostrum rem. Architecto quia
          quae quas impedit, nobis vel cum eveniet debitis necessitatibus ad
          quibusdam a qui, totam consectetur?
        </p>
        <p className="">Room: {property.room}</p>
        <p>Price: {property.price}</p>

        <button onClick={handleAddToCart}>Add to Cart</button>

        {isAddedToCart && (
          <div className="modal">
            <div className="modal-content">
              <p>Item added to cart!</p>
              <button onClick={() => setIsAddedToCart(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
