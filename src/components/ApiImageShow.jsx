const ApiImageShow = ({data}) => {
    return (
      <div className="flex flex-col group py-3 cursor-pointer" onClick={() => window.open(data.image.contextLink)}>
      <div className="rounded-xl overflow-hidden bg-black/[0.3] h-28 md:h-28 lg:h-40 group-hover:shadow-s1">
         <img className="w-full h-full object-fit bg-white" src={data.link} />
      </div>
      <div className="text-sm text-gray-500 pt-2">
                {data.displayLink}
            </div>
            <div className="text-sm font-medium text-[#3c4043] truncate pt-1 group-hover:underline">
                {data.title}
            </div>
      </div>
    );
};

export default ApiImageShow;

{/*   */}