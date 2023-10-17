import ProfileIcon from './ProfileIcon';

const HomeHeader = () => {
  return (
    <header className="px-5 h-16 gap-4 flex items-center justify-between md:justify-end">
      <div className="flex gap-4">
        <span className="text-[14px] text-black/[0.80] font-medium line-height cursor-pointer hover:underline">
          Gmail
        </span>
        <span className="text-[14px] text-black/[0.80] font-medium line-height cursor-pointer hover:underline">
          Images
        </span>
      </div>
      <ProfileIcon />
    </header>
  );
};

export default HomeHeader;
