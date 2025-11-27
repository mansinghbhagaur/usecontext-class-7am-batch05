import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { Erro404 } from "./pages/Erro404";
import { Layout } from "./layout/Layout";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact?/:id" element={<Contactus />} />
        <Route path="*" element={<Erro404 />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="contact-us?/:id" element={<Contactus />} />
        </Route>
        <Route path="*" element={<Erro404/>} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;

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

// // useReducer

// import { useReducer } from "react";
// import { reducer } from "./reducer/counterReducer";
// import { useFetch } from "./customhook/useFetch";

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, 0);
//   const {data, loading} = useFetch("https://jsonplaceholder.typicode.com/users");

//   console.log("fetch data", data);
//   if(loading) {
//     return "Loading Components..."
//   }

//   return (
//     <>
//     <h1>App Component</h1>
//     <h1>counter value {state}</h1>
//     <button onClick={()=> dispatch({type: "INCREMENT", data: {name : "man", age: 0} })}>INcrement</button>
//     <button onClick={()=> dispatch({type: "DECREMENT"})}>decrement</button>
//     <button onClick={()=> dispatch({type: "RESET"})}>Reset</button>
//     <h1>show fetch data</h1>
//     <ul>
//       {
//         // loading ?  "Loading data..." :
//         data?.map((item, i)=>(
//           <>
//           <li key={i}>Id: {item.id} userId: {item.userId} Name: {item.title} completed: {item.completed === true ? "completed" : "Incompleted"}</li>
//           {/* <li key={i}>{item.title}</li> */}
//           </>
//         ))
//       }
//     </ul>
//     {loading && "Loading fetch data..."}
//     </>
//   )
// }

// export default App;
