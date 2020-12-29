export const ShowData = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch({ type: "SHOW", payload: res });
      });
  };
};
