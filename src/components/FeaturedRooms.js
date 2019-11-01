import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getRooms } from "../data/actions/roomActions";
import Title from "./Title";
import Room from "./Room";

const FeaturedRooms = props => {
  const [state, setState] = useState({ rooms: [], loading: true });

  useEffect(() => {
    props.getRooms();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    let featured = props.rooms.filter(item => item.featured === true);
    setState({ rooms: featured, loading: false });
  }, [props.rooms]);

  return (
    <React.Fragment>
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {state.rooms.map((room, i) => {
            return <Room key={i} room={room} />;
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

const mapStatesToProps = state => {
  return { rooms: state.rooms };
};

export default connect(
  mapStatesToProps,
  { getRooms }
)(FeaturedRooms);
