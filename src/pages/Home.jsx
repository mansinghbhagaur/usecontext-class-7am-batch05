import { useParams } from "react-router-dom";

const Home = () => {
    const homename = useParams();
    return (
        <>
        <h1>Home</h1>
        </>
    )
}


export default Home;