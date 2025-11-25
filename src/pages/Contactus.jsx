import { useParams } from "react-router-dom";

const Contactus = () => {
     const {id} = useParams();
  console.log(id, "id");
    return (
        <>
        <h1>Contact us</h1>
        </>
    )
}


export default Contactus;