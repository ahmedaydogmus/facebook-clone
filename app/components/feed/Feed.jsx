import Post from '../post/Post.jsx';
import Share from '../share/Share.jsx';
import './feed.css';
import {Posts} from '../../dummyData.js';


const Feed = () => {
  return (
    <div className='flex-[5.5]'>
      <div className="p-[20px]">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post}/>
          ))}

      </div>
    </div>
  )
}

export default Feed