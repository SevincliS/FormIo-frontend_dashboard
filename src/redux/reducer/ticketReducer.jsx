const INITIAL_STATE = {};

const ticketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_Ticket":
      return action.ticket;
    default:
      return state;
  }
};
export default ticketReducer;
