import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            {
                blogs.map( blog => 
                <Blog 
                    blog={blog} 
                    key={blog.id}
                    handleBookmarks={handleBookmarks}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog> )
            }
        </div>
    );
};
Blogs.propTypes = {
    handleBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blogs;