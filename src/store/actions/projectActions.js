const createProject = project => {
  return (dispatch, getState) => {
    //make async calls to database
    dispatch({ type: "CREATE_PROJECT", project });
  };
};

export default createProject;
