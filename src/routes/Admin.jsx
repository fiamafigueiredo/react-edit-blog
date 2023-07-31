import blogFetch from "../axios/config";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Admin.module.css";

const Admin = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const response = await blogFetch.get("/posts");

            const data = response.data;
            setPosts(data);

        } catch (error) {
            console.log(error);
        }
    };

    const deletePost = async (id) => {
        await blogFetch.delete(`/posts/${id}`);

        const filteredPosts = posts.filter((post) => post.id !== id)
        setPosts(filteredPosts);
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div className={styles.admin}>
            <h1>Gerenciar Post</h1>
            {posts.length === 0 ? (<p>Carregando...</p>) :
                (
                    posts.map((post) => (
                        <div className={styles.post} key={post.id}>
                            <h2>{post.title}</h2>
                            <div className={styles.actions}>
                                <Link className={styles.btn} to={`/posts/edit/${post.id}`}>Editar</Link>
                                <button className={styles.btn} onClick={() => deletePost(post.id)}>Excluir</button>
                            </div>
                        </div>
                    ))
                )}
        </div>
    )
}

export default Admin