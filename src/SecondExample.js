import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { ShowData } from "./actions";

const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    checkbtn: state.checkbtn,
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Show: () => {
      dispatch(ShowData());
    },
  };
};

const SecondExample = ({ Show, isloading, checkbtn, todos }) => {
  // const [todos, setTodos] = useState([]);
  // const [isloading, setIsloading] = useState(false);
  // const [checkbtn, setCheckbtn] = useState(false);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setIsloading(true);
  //       setTodos(res);
  //     });
  // }, [checkbtn]);

  // const ShowData = () => {
  //   setCheckbtn(true);
  // };

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
  //     console.log(res.data);
  //     setIsloading(true);
  //     setTodos(res.data);
  //   });
  // }, []);

  return (
    <div>
      {checkbtn !== true ? (
        <button onClick={() => Show()}>Click to show data</button>
      ) : (
        <div>
          {isloading !== true ? (
            <span>Loading...</span>
          ) : (
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>id</th>
                  <th>title</th>
                  <th>completed</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => (
                  <tr key={todo.id}>
                    <th>{todo.id}</th>
                    <td>{todo.title}</td>
                    <td>{String(todo.completed)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondExample);
