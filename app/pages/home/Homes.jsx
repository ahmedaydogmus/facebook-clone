import Topbar from '@/app/components/topbar/Topbar';
import './homes.css';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Feed from '@/app/components/feed/Feed';
import Rightbar from '@/app/components/rightbar/Rightbar';

const Home = () => {
  return ( 
        <div>
          <Topbar />
          <div className="flex w-full  ">
            <Sidebar />
            <Feed />
            <Rightbar />
          </div>
        </div>
  )
}

export default Home