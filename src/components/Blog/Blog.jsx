import PropTypes from 'prop-types';
import { MdOutlineBookmarkAdded } from "react-icons/md";

const Blog = ({blog , handleAddToBookmark}) => {
    const {title , cover , author , author_img , reading_time , posted_date , hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-4 rounded-2xl' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex mt-3'>
                    <img className=' w-16 lg:w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className='lg:text-2xl font-semibold'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='mt-2 flex'>
                    <span>{reading_time}min read</span>
                   <div>
                   <button onClick={() => handleAddToBookmark(blog)} className='ml-1 text-xl'><MdOutlineBookmarkAdded></MdOutlineBookmarkAdded></button>
                   </div>
                </div>
            </div>
            <h1 className='text-3xl lg:text-4xl font-semibold mt-5'>{title}</h1>
            <p className='mt-3'>
                {
                    hashtags.map((hash  , idx)=><span key={idx}> <a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;
