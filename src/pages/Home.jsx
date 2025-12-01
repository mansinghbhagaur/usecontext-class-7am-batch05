import { useParams } from "react-router-dom";
import { useEffect } from "react";

// fetch/ axois

const Home = () => {
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'GET',
        })
        .then((res)=> res.json())
        .then((result) => console.log("data: ",result) ).catch((err)=> console.log(err, "error"));
    }, []);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "content-type": "application/json",

            },
            data: {
                "title": "hello",
                "body": "hello everyone"
            }
        }).then(res => console.log(res, "data res"));
    }, []);

    const homename = useParams();
    return (
        <>
        <h1>Home</h1>
        </>
    )
}


export default Home;