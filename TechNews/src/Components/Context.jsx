import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";
import axios from "axios";
const AppContext = createContext();
// -------------------------------------------------

const API = import.meta.env.VITE_SOME_KEY;

const initialState = {
  isLoading: true,
  query: "html",
  nbPages: 0,
  page: 0,
  hits: [],
};

// -------------------------------------------------
const AppProvider = ({ children }) => {
  const TechNews = async (url) => {
    try {
      dispatch({ type: "Loading" });
      const res = await axios.get(url);
      dispatch({
        type: "Data",
        payload: {
          hits: res.data.hits,
          page: res.data.page,
          nbPages: res.data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // -------------------------------------------------

  const [state, dispatch] = useReducer(reducer, initialState);

  // ----------------------------------------------------------------

  // this is delete method to delete card in card list

  const DeletePost = (PostId) => {
    dispatch({ type: "Delete", payload: PostId });
  };

  // ----------------------------------------------------------------

  // this is search method to get new post particular news list

  const InputValue = (input) => {
    dispatch({ type: "queryValue", payload: input });
  };

  // ----------------------------------------------------------------

  // this is next and prev page method to get more new post

  const MorePage = (input) => {
    dispatch({ type: "MorePage", payload: input + state.page });
  };

  // ----------------------------------------------------------------

  useEffect(() => {
    TechNews(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  // ----------------------------------------------------------------

  // this is useContext provider to provider a value any components

  return (
    <AppContext.Provider value={{ ...state, DeletePost, InputValue, MorePage }}>
      {children}
    </AppContext.Provider>
  );
};

// ----------------------------------------------------------------

// this is a custom hook to provide a flexibility
const useGlobal = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobal };
