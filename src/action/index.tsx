export const setRoomInfo = (input: string) => {
  console.log(input);
  return {
    type: "SET_ROOM_INFO",
    content: input,
  };
};
