const model = {
  chair: 0,
  table: 0,
};

export default function (state = model, action) {
  const newState = { ...state };
  switch (action.type) {
    case "CHANGE_QUANTITY":
      newState[action.value.product] += action.value.quantity;
      return newState;
    case "CHECKOUT":
      Object.keys(action.cart).forEach((key, i) => {
        newState[key] -= action.cart[key];
      });

      return newState;
    default:
      return newState;
  }
}
