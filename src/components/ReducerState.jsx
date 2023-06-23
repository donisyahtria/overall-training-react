import { useReducer, useState, useEffect, useRef } from "react";

const initialState = {
  counter: 0,
  name: "",
};

const actions = {
  INCREMENT: "increment",
  SET_NAME: "set_name",
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actions.SET_NAME:
      return { ...state, name: action.payload };

    default:
      return state;
  }
};

const ReducerState = () => {
  // const [state, dispatch] = useReducer(counterReducer, initialState);
  // const { counter, name } = state;

  /*(kedua)*/
  const [counter, setCounter] = useState(0);
  // const [name, setName] = useState("");

  // console.log("render");

  const inputRef = useRef(null);

  /*(kedua)*/
  useEffect(() => {
    // if (counter == 2) {
    //   console.log("its two");
    //   setCounter(0);
    // }
    console.log(inputRef.current);
  }, [inputRef.current]);

  const updateRef = () => {
    inputRef.current = "string";
  };

  const debounceRef = useRef(null);

  const onChange = (e) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      console.log(e.target.value);
    }, 800);
  }; //untuk delay memperingan fetching api

  return (
    <div>
      <h1>Reducer State</h1>
      {/* <input ref={inputRef} /> */}
      <p>{counter}</p>
      <p>{name}</p>
      <button
        onClick={() => {
          /*(kedua)*/
          // setCounter(counter + 1);
          updateRef();
          // setName("Budi");
          // dispatch({ type: actions.INCREMENT });
          // dispatch({ type: actions.SET_NAME, payload: "Doni" });
        }}
      >
        Add Counter
      </button>
      <button onClick={() => console.log(inputRef.current)}>show ref</button>
      <input onChange={onChange} />
    </div>
  );
};

export default ReducerState;
