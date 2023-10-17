import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import Mic from '../assets/mic.svg';
import Lens from '../assets/image.svg';

const SearchInput = () => {
  const { query } = useParams();
  const [searchquery, setSearchquery] = useState(query || '');
  const navigate = useNavigate();

  const searchqueryhandler = (event) => {
    if (event.key === 'Enter' && searchquery.length > 0) {
      navigate(`/${searchquery}/${1}`);
    }
  };
  return (
    <div
      id="SearchBox"
      className=" flex items-center justify-center gap-3 px-4 w-full md:w-[580px] h-[45px] border border-[#dfe1e5] rounded-3xl hover:bg-white hover:border-0  hover:shadow-s1 focus-within:border-0 focus-within:shadow-s1"
    >
      <AiOutlineSearch size={18} color="#9aa0a6" />

      <input
        type="text"
        value={searchquery}
        autoFocus
        className="outline-none grow text-black/[0.80] font-normal text-zinc-900 "
        onChange={(e) => setSearchquery(e.target.value)}
        onKeyUp={searchqueryhandler}
      />

      <div className="flex items-center gap-3">
        {searchquery && (
          <IoMdClose
            color="#70757a"
            size={24}
            className="cursor-pointer"
            onClick={() => setSearchquery('')}
          />
        )}
        <img src={Mic} alt="Mic icon" className="w-6 h-6 cursor-pointer" />
        <img src={Lens} alt="Lens incon" className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
    
  );
};
export default SearchInput;
