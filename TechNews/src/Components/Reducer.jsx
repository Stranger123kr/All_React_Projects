const reducer = (state, action) => {
  switch (action.type) {
    case "Loading":
      return { ...state, isLoading: true };

    case "Data":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        page: action.payload.page,
        nbPages: action.payload.nbPages,
      };

    // -------------------------------------------------------------------------

    case "Delete":
      return {
        ...state,
        hits: state.hits.filter((post) => post.objectID !== action.payload),
      };
    // -------------------------------------------------------------------------

    case "queryValue":
      return { ...state, query: action.payload };

    // -------------------------------------------------------------------------

    case "MorePage":
      if (action.payload >= state.nbPages) {
        action.payload = 0;
      }

      return { ...state, page: action.payload };

    // -------------------------------------------------------------------------
    default:
      return state;
  }
};

export default reducer;
