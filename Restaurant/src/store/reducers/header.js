import * as actionTypes from "../actions";

const initialState = {
  menuTablesLabel: "Tables",
  linkParams: { pathname: "tables" }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MENU_TABLES: {
      if (state.menuTablesLabel === "Tables") {
        return {
          ...state,
          menuTablesLabel: "Menu",
          linkParams: { pathname: "order" }
        };
      } else {
        return {
          ...state,
          menuTablesLabel: "Tables",
          linkParams: { pathname: "tables" }
        };
      }
    }
    default:
      return state;
  }
};

export default reducer;
