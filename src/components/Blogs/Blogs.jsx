import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs , setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-2/3 py-4 mx-4 lg:mx-9">
            <h2 className="text-4xl">Blogs: {blogs.length}</h2>
        </div>
    );
};

export default Blogs;