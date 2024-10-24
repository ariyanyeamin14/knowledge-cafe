
import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";


const Blog = ({blog, handleBookmarks}) => {

    const {cover, title, author_img, author, posted_date, reading_time, has_tag} = blog

    return (
        <div className='mb-20'>
            <img className='md:h-96 w-full bg-cover' src={cover} alt="" />
            <div className='flex justify-between items-center my-4'>
                <div className='flex items-center gap-6'>
                <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                <div>
                    <h4>{author}</h4>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div className='flex items-center gap-4'>
                    <h4>{reading_time} min read</h4>
                    <button onClick={ ()=> handleBookmarks()}>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className='text-3xl font-bold mb-4'>{title}</h2>
            {has_tag.map( (hash, idx)=> <span key={idx}> <a href=""> #{hash} </a> </span>)}
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired
}

export default Blog;