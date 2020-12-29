import Immutable from "immutable";

const initialState = Immutable.fromJS({
  data: {
    isloading: false,
    todos: [],
    checkbtn: false,
  },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW": {
      return state.set("checkbtn", true);

      // ...state.data,
      // todos: action.payload,
      // checkbtn: true,
      // isloading: true,
    }
    default: {
      return state;
    }
  }
};
export default reducer;
