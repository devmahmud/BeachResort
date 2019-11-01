import React from "react";
import Room from "./Room";

function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched to your search parameter</h3>
      </div>
    );
  }
  return (
    <section className="roomsList">
      <div className="roomslist-center">
        {rooms &&
          rooms.map((item, i) => {
            return <Room key={i} room={item} />;
          })}
      </div>
    </section>
  );
}
export default RoomList;
