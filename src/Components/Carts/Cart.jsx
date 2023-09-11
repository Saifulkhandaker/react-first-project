const Cart = ({cart}) => {
    return (
        <div>
            <h4 className="text-2xl font-medium mt-5 mb-5 text-center">
        Cart: {cart.length}
      </h4>
      <div>
        {
            cart.map(bottle  => <img className="w-24" src={bottle.img}></img>)
        }
      </div>
            
        </div>
    );
};

export default Cart;