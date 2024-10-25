
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-white p-5 rounded-xl mb-5'>
            <h3 className='text-lg font-semibold'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object.isRequired
};

export default Bookmark;