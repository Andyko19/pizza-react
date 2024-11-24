const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72 m-4">
      <img src={img} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h5 className="text-xl font-bold">{name}</h5>
        <p className="text-gray-700 mt-2">
          Ingredientes: {ingredients.join(", ")}
        </p>
        <p className="text-green-600 font-semibold mt-2">
          Precio: ${price.toLocaleString()}
        </p>
        <div className="mt-4 flex justify-between">
          <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
            Ver más
          </button>
          <button className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
