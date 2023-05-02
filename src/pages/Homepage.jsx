import { useSelector, useDispatch } from "react-redux";
import { useGetAllNewsQuery } from "../features/NewsApiSlice";
import { setPublisher } from "../features/NewsSlice";
import Wrapper from "../component/ui/Wrapper";
import Nav from "../component/layout/Nav";
import Loader from "../component/ui/Loader";
import NewsCard from "../component/ui/NewsCard";
import { Link } from "react-router-dom";
import { NEWSCATEGORIES} from "../assets/data";
import { changeCategory } from "../features/NewsSlice";
import Footer from "../component/layout/Footer";
import NewsPublisher from "../component/ui/NewsPublisher";


const Homepage = () => {
  const { category, publisher, filter } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const {
    data: response,
    isLoading,
    isFetching,
  } = useGetAllNewsQuery({ category, publisher });
  !isLoading && !response.totalResults && dispatch(setPublisher(""));
  const data = !isLoading ? response.articles : [];
  const viewData = publisher ? data : data.slice(0, 9);
  return (
    <div className="bg-[#F7F7F7]">
      <Nav />
      <Wrapper styles="relative">
        <div className="flex flex-col justify-end py-16 mt-20 lg:flex-row">
          <div className="gap-3 mr-auto max-w-7xl">
            {isLoading || isFetching ? (
              <Loader />
            ) : (
              <div className="grid overflow-y-scroll lg:grid-cols-3 md:grid-cols-4 gap-y-8 scrollbar-hide">
                {viewData
                  .filter((item) =>
                    item.title.toLowerCase().includes(filter.toLowerCase())
                  )
                  .map((item, index) => (
                    <NewsCard
                      key={index}
                      url={item.url}
                      image={item.urlToImage}
                      title={item.title}
                      publisher={item.source.name}
                    />
                  ))}
              </div>
            )}
          </div>
          <div className="w-full">
            <h2 className="font-bold">CATEGORIES</h2>
            <div className="grid grid-cols-4 gap-4 px-8 my-4 border-t border-black border-primary md:grid-cols-4 lg:grid-cols-4">
              {NEWSCATEGORIES.map((categoryObject) => (
                <div
                  className={`text-base font-medium    rounded-3xl p-2 
            `}
                  key={categoryObject.id}
                >
                  <Link className="p-1 bg-[#0a3738] text-[#F6AC7A] hover:text-[] rounded-full"
                    to="/"
                    onClick={() =>
                      dispatch(changeCategory(categoryObject.value))
                    }
                  >
                    {categoryObject.name}
                  </Link>
                </div>
              ))}
            </div>
            <h2 className="font-bold">PUBLISHERS</h2>
            <NewsPublisher />
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Homepage;
