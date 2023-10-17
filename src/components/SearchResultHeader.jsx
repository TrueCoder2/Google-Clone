import SearchInput from './SearchInput';
import ProfileIcon from './ProfileIcon';
import Logo from '../assets/logo.png';
import { AiFillSetting } from 'react-icons/ai';
import { menu } from '../Utility/Constant';
import { useState, useContext, useEffect } from 'react';
import { Context } from '../Utility/ContextAPI';
import { Link } from 'react-router-dom';

const SearchResultHeader = () => {
  const [selectedOption, setSelectedOption] = useState('All');
  const { setImageSearch } = useContext(Context);

  useEffect(() => {
    return () => setImageSearch(false);
  }, []);

  const handleClick = (opt) => {
    let isOptImage = opt.name === 'Images';
    setImageSearch(isOptImage ? true : false);
    setSelectedOption(opt.name);
  };

  return (
    <div className="flex flex-col items-center sticky top-0 bg-white md:block p-4 pb-0  md:pt-7 border-b border-[#ebebeb] ">
      <div className="flex justify-center items-center w-full">
        <div className="flex items-center grow">
          <Link to="/">
            <img
              className="w-[92px] mr-10 md:block hidden"
              src={Logo}
              alt="logo image"
            />
          </Link>
          <SearchInput from="searchResult" />
        </div>

       <span className='hidden md:visible md:block'> <AiFillSetting size={24} color="#5f6368" /> </span>
        <div className="hidden md:block ml-3 ">
          <ProfileIcon />
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 ml-36 mb-2">
        <div className="flex">
          {menu.map((elemm, i) => (
            <span
              key={i}
              className={`flex items-center p-2 mr-2 cursor-pointer text-[#5f6368] hover:bg-gray-100 border border-gray-300 rounded-full
         ${selectedOption === elemm.name ? 'text-[#1a73e8] bg-blue-100' : ''}`}
              onClick={() => handleClick(elemm)}
            >
              {' '}
              <span className="text-[#202124] "> {elemm.name} </span>{' '}
            </span>
          ))}
        </div>
        <div className="invisible md:visible flex text-sm text-[#70757a] cursor-pointer">
          All fillter ▼ <span className="border-l px-2 ml-2">Tools</span>
          <span className="ml-8">SafeSearch ▼ </span>
        </div>
      </div>
    </div>
  );
};
export default SearchResultHeader;

