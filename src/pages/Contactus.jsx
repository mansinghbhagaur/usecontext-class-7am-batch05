import { useParams, useNavigate } from "react-router-dom";

const Contactus = () => {
     const {id} = useParams();
     const navigate = useNavigate();
  console.log(id, "id");
    return (
        <>
        <h1>Contact us</h1>
        <h1>id: {id}</h1>
        <button onClick={()=> navigate("/")}>Click redirect route</button>
        </>
    )
}


export default Contactus;