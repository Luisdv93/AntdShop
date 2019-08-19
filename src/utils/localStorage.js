export const loadState = () => {
  const cartState = localStorage.getItem("cartState");
  return JSON.parse(cartState);
};

export const saveState = state => {
  const cartState = JSON.stringify(state);
  localStorage.setItem("cartState", cartState);
};
