// PageUrl Reducer
const pageUrlDefaultState = "/"

export const pageUrlReducer = (state = pageUrlDefaultState, action) => {
  switch (action.type) {
    case "SET_PAGE_URL":
      return action.url;
        
    default:
      return state;
    }
};