import { useRef, useState } from "react";
import "./App.css";
import Mapcomment from "./Component.jsx/Mapcomment";

function App() {
  const commentRef = useRef("");
  const [comment, setComment] = useState([]);
  // const [active, setActive] = useState(false);
  const [filtervalue, setFilterValue] = useState("");

  function handle() {
    setComment([
      ...comment,
      { name: commentRef.current.value, time: new Date().getTime() },
    ]);
  }

  function filterbytime(name) {
    setFilterValue(name);
  }
  console.log(filtervalue);
  return (
    <div className="App">
      <div className="container">
        <img
          src="https://static.businessinsider.com/image/5484d9d1eab8ea3017b17e29/image.jpg"
          alt=""
          width="400px"
        />
        <div className="container_flex">
          <label htmlFor="">comment</label>
          <input type="text" ref={commentRef} />
          <button className="button-4" onClick={handle}>
            click
          </button>
        </div>
        <div className="list">
          <label htmlFor="">filter:</label>
          <select
            // className="button-4"
            onChange={(e) => {
              filterbytime(e.target.value);
            }}
          >
            <option value="new">new</option>
            <option value="old">old</option>
          </select>
          <Mapcomment data={comment} filtervalue={filtervalue} />
        </div>
      </div>
    </div>
  );
}

export default App;
