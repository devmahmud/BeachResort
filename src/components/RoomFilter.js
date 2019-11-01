import React, { useState, useEffect } from "react";
import Title from "./Title";

function RoomFilter(props) {
  const [state, setState] = useState({
    types: [],
    guests: [],
    prices: [],
    sizes: [],
    type: "all",
    price: 0,
    capacity: 1,
    breakfast: false,
    pets: false,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0
  });

  useEffect(() => {
    const getRoomData = (rooms, d_type) => {
      const data = rooms.map(item => {
        return item[d_type];
      });
      const uinque_data = [...new Set(data)];
      return uinque_data;
    };
    const types = getRoomData(props.rooms, "type");
    const guests = getRoomData(props.rooms, "capacity");
    const prices = getRoomData(props.rooms, "price");
    const sizes = getRoomData(props.rooms, "size");
    const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
    const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;
    const minSize = sizes.length > 0 ? Math.min(...sizes) : 0;
    const maxSize = sizes.length > 0 ? Math.max(...sizes) : 0;

    setState({
      ...state,
      types: types,
      guests: guests,
      minPrice: minPrice,
      maxPrice: maxPrice,
      minSize: minSize,
      maxSize: maxSize,
      price: maxPrice
    });
    //eslint-disable-next-line
  }, [props.rooms]);

  useEffect(() => {
    props.onChange(state);
    //eslint-disable-next-line
  }, [state]);

  const handleChange = e => {
    if (e.target.type === "checkbox") {
      setState({ ...state, [e.target.name]: e.target.checked });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            className="form-control"
            onChange={handleChange}
          >
            <option value="all">All Types</option>
            {state.types.map((type, i) => {
              return (
                <option key={i} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        {/* end select type */}
        {/* select capacity */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            className="form-control"
            onChange={handleChange}
          >
            {state.guests.sort().map((guest, i) => {
              return (
                <option key={i} value={guest}>
                  {guest}
                </option>
              );
            })}
          </select>
        </div>
        {/* end select type */}

        {/*room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${state.price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={state.minPrice}
            max={state.maxPrice}
            className="form-control"
            value={state.price}
            onChange={handleChange}
          />
        </div>
        {/*end of room price */}
        {/*room size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={state.minSize}
              className="size-input"
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={state.maxSize}
              className="size-input"
              onChange={handleChange}
            />
          </div>
        </div>
        {/*end of room size */}

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={state.breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={state.pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
}
export default RoomFilter;
