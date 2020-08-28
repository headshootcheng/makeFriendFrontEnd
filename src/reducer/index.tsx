import { combineReducers } from "redux";

interface action {
  type: string;
  content: string;
}

const roomInfo = (state = "", actions: action) => {
  switch (actions.type) {
    case "SET_ROOM_INFO": {
      return actions.content;
    }
    default:
      return state;
  }
};
const RoomApp = combineReducers({ roomInfo });

export default RoomApp;
