import './profile.css';
import Topbar from '@/app/components/topbar/Topbar';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Feed from '@/app/components/feed/Feed';
import Rightbar from '@/app/components/rightbar/Rightbar';
import Image from 'next/image';

const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="profile  ">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <Image className='profileCoverImg' src={require('../../assets/post/3.jpeg')} alt='post3' />
              <Image className='profileUserImg' src={require('../../assets/person/7.jpeg')} alt='person7' />
            </div>
            <div className="profileInfo">
              <h4 className='profileInfoName'>Ahmed Burak Aydoğmuş</h4>
              <span className='profileInfoDesc'>Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile