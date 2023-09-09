import Image from 'next/image';
import {Search,Person,Chat,Notifications} from '@mui/icons-material';

const Topbar = () => {

  return (
    <div className='h-[50px] z-10 w-full bg-[#1877f2] flex items-center sticky top-0'>
        <div className="flex-[3]">
          <span className='text-[24px] ml-[20px] font-bold text-[#fff] cursor-pointer '>
            Ahmedsocial
          </span>
        </div>
        <div className="flex-[5]">
          <div className="w-full h-[30px] bg-[#fff] rounded-[30px] flex items-center">
            <Search className='text-[20px] mr-[5px] ml-[10px]' />
            <input placeholder=
            'Search for friend post or video' 
             className="border-0 outline-0 w-[70%] focus:border-0 focus:outline-0" />
          </div>
        </div>
        <div className="flex-[4] flex items-center justify-around text-[#fff]">
          <div className="topbarLinks">
            <span className="mr-[10px] text-[14px] cursor-pointer">
              Homepage
            </span>
            <span className="ml-[10px] text-[14px] cursor-pointer">
              Timeline
            </span>
          </div>
          <div className="flex">
            <div className="mr-[15px] cursor-pointer relative">
              <Person />
              <span className="absolute w-[15px] h-[15px] bg-red-600 rounded-[50%] text-[#fff] top-[-5px] right-[-5px] flex justify-center items-center text-[12px]">
                1
              </span>
            </div>
            <div className="mr-[15px] cursor-pointer relative">
              <Chat />
              <span className="absolute w-[15px] h-[15px] bg-red-600 rounded-[50%] text-[#fff] top-[-5px] right-[-5px] flex justify-center items-center text-[12px]">
                3
              </span>
            </div>
            <div className="mr-[15px] cursor-pointer relative">
              <Notifications />
              <span className="absolute w-[15px] h-[15px] bg-red-600 rounded-[50%] text-[#fff] top-[-5px] right-[-5px] flex justify-center items-center text-[12px]">
                2 
              </span>
            </div>
          </div>
          <Image className='w-[32px] h-[32px] rounded-[50%] object-cover cursor-pointer' src={require('../../assets/person/1.jpeg')} alt="person4" />
        </div>
    </div>
    
  )
}

export default Topbar