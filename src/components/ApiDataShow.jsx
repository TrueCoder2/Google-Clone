const ApiDataShow = ({data}) => {

    function createMarkup(notagvalue) {
return {__html: notagvalue};
    }

    return (
      <div flex flex-col  max-w-2xl mt-4>
        <div className="py-4">
        <div
          className="group cursor-pointer "
          onClick={() => window.open(data.link)}
        >
          <div className="truncate text-sm text-[#202124] ">
            {data.formattedUrl}
          </div>
          <div className="pt-1 md:text-xl text-sm text-[#1a0dab] group-hover:underline">
            {data.title}
          </div>
        </div>
        <div className="pt-1 text-sm text-[#4d5156] leading-6 w-[380px] md:w-[600px] " dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}/>
        </div>
      </div>
    );
  };
  
  export default ApiDataShow;