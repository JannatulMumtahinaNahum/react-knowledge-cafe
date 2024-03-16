import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks , readingTime}) => {
    return (
        
        <div className="md:w-1/3 bg-slate-100 rounded-lg lg:mt-5 pb-5">
             <div className=''>
               <h3 className="text-2xl font-bold bg-violet-300 m-4 p-8 rounded-2xl">Reading Time: {readingTime}</h3>
            </div>
          
           <h2 className="p-4 text-2xl font-semibold">Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark , idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
         
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;