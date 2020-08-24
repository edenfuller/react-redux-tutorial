const model = {
  chair: 3,
  table: 2,
};

export default function (state = model, action) {
  const newState = { ...state };
  switch (action.type) {
    case "CHECKOUT":
      newState.chair -= action.cart.chair;
      newState.table -= action.cart.table;
      return newState;
    default:
      return newState;
  }
}
