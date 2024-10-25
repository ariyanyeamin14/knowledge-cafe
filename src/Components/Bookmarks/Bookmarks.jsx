import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className=" md:w-1/3 space-y-5 ">
            <div className='bg-stone-100 rounded-xl p-6 border border-blue-500'>
                <h2 className='text-2xl text-blue-500 font-bold'>Spent time on read: {readingTime} min</h2>
            </div>
            <div className='bg-stone-100 rounded-xl p-6'>
                <h2 className='text-2xl font-bold mb-4'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map( (bookmark, idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark> )
                }
            </div>
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired

};

export default Bookmarks;