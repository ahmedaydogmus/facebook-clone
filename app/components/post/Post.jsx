'use client'
import './post.css';
import {MoreVert} from '@mui/icons-material';
import Image from 'next/image';
import {Users} from '../../dummyData.js';
import {useState} from 'react';

const Post = ({post}) => {

    const [ like, setLike ] = useState(post.like);
    const [ isLiked, setIsLiked ] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1 );
        setIsLiked(!isLiked);
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Image className='postProfileImg' src={require(`../../${Users.filter(u => u.id == post.userId)[0].profilePicture}`)} alt="profile" />
                    <span className='postUsername'>{Users.filter(u => u.id == post.userId)[0].username}</span>
                    <span className='postDate'>{post.date} </span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className='postText'>{post.desc}</span>
                <Image className='postImg' src={require(`../../${post.photo}`)} alt="post1" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <Image className='likeIcon' src={require('../../assets/like.png')} alt='like' onClick={likeHandler} />
                    <Image className='likeIcon' src={require('../../assets/heart.png')} alt='heart' onClick={likeHandler} />
                    <span className="postLikeCounter">{like} peope liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post