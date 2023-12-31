import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

export default function BlogDetail () {
    let params = useParams();
    let url = `http://localhost:3001/Blogs/${params.id}`;
    let {data : blog, loading, error} = useFetch(url);
    let navigate = useNavigate();

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    }, [error, navigate]);
    return (
        <div>
            {loading && <div>loading</div>}
            {error && <div>{error}</div>}
            {blog &&
            <>
                <h2>{blog.title}</h2>
                <p>Posted By - {blog.author}</p>
                <p>{blog.body}</p>
            </>}
        </div>
    )
}