import { useEffect , useState } from "react";
import {useParams , useNavigate} from "react-router-dom";
import { pagination } from '../Utility/Constant';
import {FiChevronRight , FiChevronLeft} from "react-icons/fi"
import PageinationLogo from "../assets/pagination.png"

const Pagination = ({queries}) => {
    const {query} = useParams();
    const [page , setPage] = useState(pagination[0].startIndex);
    const navigate = useNavigate();

    useEffect(() => {
        setPage(pagination[0].startIndex);
    }, [query]);

    const handlePageClick = (startIndex) => {
        setPage(startIndex);
        navigate(`/${query}/${startIndex}`);
    };

    return (
        <div className="flex flex-col items-center py-14 max-w-2xl ">
          <div className="relative text-[#4285f4] ">
          {queries.previousPage && (
           <div className="absolute left-[-30px] md:left-[-40px] top-[10px] " onClick={() => handlePageClick(queries.previousPage[0].startIndex)}>
            <FiChevronLeft size={20} className="cursor-pointer" />
            <div className="absolute cursor-pointer left-[-5px] top-[30px] hidden md:block ">
               Prev
            </div>
           </div>
          ) }
         <img className="w-64 md:w-80" src={PageinationLogo} />
         {queries.nextPage && (
           <div className="absolute right-[-30px] md:right-[-40px] top-[10px] " onClick={() => handlePageClick(queries.nextPage[0].startIndex)}>
            <FiChevronRight size={20} className="cursor-pointer" />
            <span className="absolute cursor-pointer left-[-5px] top-[30px] hidden md:block ">
               Next
            </span>
           </div>
          ) }
        </div>
        <div className="flex gap-3 text-[#4285f4] text-sm">
                {pagination.map((elem) => (
                    <span
                        key={elem.page}
                        onClick={() => handlePageClick(elem.startIndex)}
                        className={`cursor-pointer ${
                            page === elem.startIndex ? "text-black" : ""
                        }`}
                    >
                        {elem.page}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Pagination;