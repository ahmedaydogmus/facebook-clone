import './online.css';
import Image from 'next/image';

const Online = ({user}) => {
  return (
    <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
      <Image className='rightbarProfileImg' src={require(`../../${user.profilePicture}`)} alt='person3' />
      <span className="rightbarOnline"></span>
    </div>
    <span className='rightbarUsername'>{user.username}</span>
  </li>
  )
}

export default Online