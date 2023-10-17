import SearchResultHeader from '../components/SearchResultHeader';
import { fetchApi } from '../Utility/Api';
import Footer from '../components/Footer';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../Utility/ContextAPI';
import ApiDataShow from './ApiDataShow';
import ApiImageShow from './ApiImageShow';
import Pagination from './Pagination';
// $
const SearchResult = () => {
  const [apiresult, setApiResult] = useState();
  const { startIndex, query } = useParams();
  const { imageSearch } = useContext(Context);

  useEffect(() => {
    fetchSearchResults();
  }, [startIndex, query, imageSearch]);

  const fetchSearchResults = () => {
    let payload = { q: query, start: startIndex };
    if (imageSearch) {
      payload.searchType = "image";
    }

    fetchApi(payload).then((res) => {
      console.log(res);
      setApiResult(res);
    });
  };

  if (!apiresult) return;
  const { queries, searchInformation, items } = apiresult;

  return (
    <div className="flex flex-col min-h-[100vh] ">
      <SearchResultHeader />
      <main className="grow md:ml-16 p-4 pb-0 md:pr-5 md:pl-20 ">
      <div className="flex  mb-3 text-sm text-gray-500">
          {`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime} seconds)`}
        </div>

      
        {!imageSearch ? ( <> {items.map((elem, i) => <ApiDataShow key={i} data={elem} /> )} </> ) : (
  <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5">
    {items.map((elem, i) => <ApiImageShow key={i} data={elem} />)}
  </div>
)}

<Pagination queries={queries} />

      </main>
      <Footer />
    </div>
  );
};

export default SearchResult;


// {!imageSearch ? ( <> {items.map((elem, i) => <ApiDataShow key={i} data={elem} /> )} </> ) : (
//   <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3">
//     {items.map((elem, i) => <ApiImageShow key={i} data={elem} />)}
//   </div>
// )}