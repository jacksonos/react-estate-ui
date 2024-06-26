import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Buscar resultados para <b>Perú</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Localización</label>
          <input type="text" id="city" placeholder="citylocation" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">Any</option>
            <option value="apartament">Apartamento</option>
            <option value="house">Casa</option>
            <option value="condo">Condominio</option>
            <option value="land">Terreno</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Precio mín</label>
          <input type="number" id="minPrice" name="minPrice" placeholder="any" />
        </div>
        <div className="item">
          <label htmlFor="city">Localización</label>
          <input type="text" id="city" placeholder="citylocation" />
        </div>
        <div className="item">
          <label htmlFor="city">Localización</label>
          <input type="text" id="city" placeholder="citylocation" />
        </div>
        <button>
          <img src="./search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
