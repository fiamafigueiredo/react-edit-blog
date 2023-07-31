import blogFetch from "../axios/config";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Post.module.css";

const Post = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});

    const getPost = async () => {
        try {
            const response = await blogFetch.get(`/posts/${id}`);
            const data = response.data
            setPost(data);
            
        } catch (error) {
            console.log (error)
        }
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div className={styles.container}>
            {!post.title ? 
                <p>Carregando...</p>:
                <div className= {styles.post}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            }
        </div>
    )
}

export default Post