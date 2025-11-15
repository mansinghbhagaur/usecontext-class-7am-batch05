import { useContext, useReducer } from "react";
import { Store } from "./context/store";

const App =()=>{
  const data = useContext(Store)
  console.log(data);
  return (
    <>
      <h1>hello everyone aur kaise ho</h1>
      <button onClick={()=> data.setThemeMode(data.ThemeMode === "light" ? "dark" : "light")}>{data?.ThemeMode}</button>
    </>
  )
}

export default App;

// const [cureent, setCureent] = useState(initialvalue)

// const [state, dispatch] = useReducer(reducerFunction, initialState)