import { useSelector } from "react-redux";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useGetAllTrendingNewsQuery } from "../../features/NewsApiSlice";
import Loador from "../ui/Loador";
import TredingNews from "../ui/TredingNews";

const NewsSection = () => {
  const { category, filter } = useSelector((state) => state.news);
  const {
    data: response,
    isLoading,
    isFetching,
  } = useGetAllTrendingNewsQuery(category);
  const data = response?.articles;
  const viewNews = !isLoading ? data.slice(0, 8) : [];
  return (
    <div>
      {viewNews.length ? (
        <div className="bg-[#EDEDED] max-w-[416px]">
          <div className="flex items-center justify-between px-6">
            <h1 className="px-2 py-4 text-xl font-semibold">WEEKLY News</h1>
            <HiOutlineAdjustmentsHorizontal />
          </div>
          <div className="h-full overflow-y-scroll scrollbar-hide">
            {isLoading || isFetching ? (
              <Loador />
            ) : (
              viewNews
                .filter((item) =>
                  item.title.toLowerCase().includes(filter.toLowerCase())
                )
                .map((item, index) => (
                  <TredingNews
                    key={index}
                    url={item.url}
                    image={item.urlToImage}
                    title={item.title}
                    publisher={item.source.name}
                    author={item.author}
                  />
                ))
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NewsSection;
