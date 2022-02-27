import { createContext, useReducer } from "react";

export const StoreContext = createContext();

export const SET_LAT_LONG = "SET_LAT_LONG";
export const SET_COFFEE_STORES = "SET_COFFEE_STORES";

const storeReducer = (state, action) => {
  if (action.type === SET_LAT_LONG) {
    return {
      ...state,
      latLong: action.payload.latLong,
    };
  }
  if (action.type === SET_COFFEE_STORES) {
    return {
      ...state,
      coffeeStores: action.payload.coffeeStores,
    };
  }
  return state;
};

const StoreProvider = ({ children }) => {
  const initialState = {
    latLong: "",
    coffeeStores: [],
  };
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
