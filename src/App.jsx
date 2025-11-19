// import { useContext, useReducer } from "react";
// import { Store } from "./context/store";

// const App =()=>{
//   const data = useContext(Store)
//   console.log(data);

//   const theme = {
//     light: {
//       background: "white", color: "black", width: "100%", height: "100vh"
//     },
//     dark: {
//       background: "grey", color: "white", width: "100%", height: "100vh"
//     }
//   }
//   return (
//     <div style={{background: theme[data.ThemeMode].background, color: theme[data.ThemeMode].color, width: "100%", height: "100vh"}}>
//       <h1>hello everyone aur kaise ho</h1>
//       <button onClick={()=> data.setThemeMode(data.ThemeMode === "light" ? "dark" : "light")}>{data?.ThemeMode}</button>
//     </div>
//   )
// }

// export default App;

// const [cureent, setCureent] = useState(initialvalue)

// const [state, dispatch] = useReducer(reducerFunction, initialState)


// useReducer 

import { useReducer } from "react";
import { reducer } from "./reducer/counterReducer";
const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
    <h1>App Component</h1>
    <h1>counter value {state}</h1>
    <button onClick={()=> dispatch({type: "INCREMENT", data: {name : "man", age: 0} })}>INcrement</button>
    <button onClick={()=> dispatch({type: "DECREMENT"})}>decrement</button>
    <button onClick={()=> dispatch({type: "RESET"})}>Reset</button>
    </>
  )
}

export default App;