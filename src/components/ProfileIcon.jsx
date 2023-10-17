import { TbGridDots } from 'react-icons/tb';
import Profile from "../assets/link.jpeg"

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className="flex justify-center items-center cursor-pointer rounded-full hover:bg-black/[0.09] h-10 w-10 ">
        <TbGridDots size={24} color="#5f6363" />
      </span>
      <span className="w-10 h-10 rounded-full cursor-pointer hover:bg-black/[0.15] flex items-center justify-center">
        <img
          src={Profile}
          alt="Profile-img"
          className="rounded-full hover:bg-black/[0.09] h-8 w-8"
        />
      </span>
    </div>
  );
};

export default ProfileIcon;
