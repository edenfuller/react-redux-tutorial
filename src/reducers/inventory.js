const model = {
  chair: 3,
  table: 2,
};

export default function (state = model, action) {
  const newState = { ...state };
  switch (action.type) {
    case "CHECKOUT":
      Object.keys(action.cart).forEach((key, i) => {
        newState[key] -= action.cart[key];
      });
      return newState;
    default:
      return newState;
  }
}
