import { Map } from "immutable";

const initState = new Map({
  name: "L'oeil du bouquetin"
});

const handlers = {};

export default (state = initState, action) => {
  if (typeof handlers[action.type] === "function")
    return handlers[action.type](state, action);
  return state;
};
