import { footerLeftLinks , footerRightLinks } from '../Utility/Constant';

const Footer = () => {
 

  return (
    <footer className="bg-[#f2f2f2]   w-full">
      <div className="flex py-4 px-4 md:px-7 border-b border-[#dadce0]">
        <span className="text-[#70757a] text-base leading-none">India</span>
      </div>

      <div className="flex justify-between flex-col py-3 md:py-0 md:px-4 md:flex-row">
      <div className="flex justify-center ">
        {footerLeftLinks.map((e,i) => <span key={i} className="p-2.5 md:p-3.5 text-xs md:text-base text-[#70757a] leading-none cursor-pointer hover:underline"> {e} </span>)}
      </div>

      <div className="flex justify-center border-b border-[#dadce0]">
        {footerRightLinks.map((e,i) => <span key={i} className="p-2.5 md:p-3.5 text-xs md:text-base text-[#70757a] leading-none cursor-pointer hover:underline"> {e} </span>)}
      </div>
      </div>

      <div>
        <h1 className='text-center ml-[-15px] pb text-slate-900 font-normal'>From ❤ of Abhishek bhatt</h1>
      </div>
    </footer>
  );
};
export default Footer;




