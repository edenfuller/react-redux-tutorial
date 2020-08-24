const model = {
  chair: 0,
  table: 0,
};

export default function (state = model, action) {
  const newState = { ...state };
  switch (action.type) {
    case "ADD_PRODUCT":
      newState[action.product] += 1;
      return newState;
    case "REMOVE_PRODUCT":
      if (newState[action.product] > 0) newState[action.product] += 1;
      return newState;
    default:
      return newState;
  }
}
