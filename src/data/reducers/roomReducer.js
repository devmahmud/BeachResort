import { GET_ROOMS } from "../actionTypes";

// Client.getEntries().then(respone => console.log(respone.items));

const roomReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROOMS:
      const rooms = getFormatted(action.payload);
      return rooms;
    default:
      return state;
  }
};

const getFormatted = data => {
  let tempItems = data.map(item => {
    let id = item.sys.id;
    let images = item.fields.images.map(image => image.fields.file.url);
    let room = { ...item.fields, images, id };
    return room;
  });
  return tempItems;
};

export default roomReducer;
