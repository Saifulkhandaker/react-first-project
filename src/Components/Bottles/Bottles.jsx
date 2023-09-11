import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import Cart from "../Carts/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <div>
      <h2 className="text-3xl mt-10 text-center">
        Bottles Available: {bottles.length}
      </h2>
      <br />
      <Cart cart={cart}></Cart>
      <div className="w-3/4 lg:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
