import Logo from '../assets/logo.png';
import SearchInput from '../components/SearchInput';
import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';
import { languages } from '../Utility/Constant';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    
  const onsearch = () => {
      navigate(`/${searchquery}/${1}`);
    }

  return (
    <div className="flex flex-col h-[100vh] ">
      <HomeHeader />
      <main className="flex justify-center grow ">
        <div className="flex flex-col items-center w-full px-5 mt-4">
          <img
            src={Logo}
            alt="logo image"
            className="mb-8 w-[172px] md:w-[272px] "
          />
          <SearchInput />
          <div className="flex mt-8 gap-2 text-[#3c4043] ">
            <button onClick={onsearch} className="text-sm bg-[#f8f9fa] h-9 px-4 rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-s1 ">
              Google Search
            </button>
            <button className="text-sm bg-[#f8f9fa] h-9 px-4 rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-s1 ">
              I'm Feeling Lucky
            </button>
          </div>

          <div className="invisible md:visible lg:visible flex justify-between text-sm mt-6">
            <div className="text-[#4D5156] ">Google offered in: </div>{' '}
            {languages.map((elem, i) => (
              <span
                key={i}
                className="text-sm px-1 text-[#1a0dab] cursor-pointer hover:underline "
              >
                {' '}
                {elem}{' '}
              </span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
 export default Home;