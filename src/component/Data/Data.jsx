import React from 'react'

const Data = ({ ShowData, isloading, checkbtn, todos }) => {
    return (
        <div>
          {checkbtn !== true ? (
            <button onClick={()=>ShowData()}>Click to show data</button>
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
}

export default Data