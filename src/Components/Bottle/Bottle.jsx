
const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, seller, price } = bottle;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="bottle" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title ">{name}</h2>
        <h3 className="text-2xl font-bold">Price: ${price}</h3>
        <p className="text-xl font-medium">Seller: {seller}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(bottle)}
            className="btn btn-primary"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bottle;
