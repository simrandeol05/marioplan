const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "help me find apple", content: "blah blah blah" },
    { id: "3", title: "help me find yoshi", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
    default:
      console.log("none");
  }
  return state;
};

export default projectReducer;
