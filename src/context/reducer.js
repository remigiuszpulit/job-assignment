export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "login":
      return {
        bio: action.payload.bio,
        email: action.payload.email,
        image: action.payload.image,
        token: action.payload.token,
        username: action.payload.username,
      };
    case "logout":
      return {
        bio: "",
        email: "",
        image: "",
        token: "",
        username: "",
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
