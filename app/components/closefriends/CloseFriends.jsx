import "./closefriends.css";
import Image from 'next/image';

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
      <Image className="sidebarFriendImg" src={require(`../../${user.profilePicture}`)} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}