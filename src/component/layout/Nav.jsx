import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterNews } from "../../features/NewsSlice";
import { AiOutlineSearch } from "react-icons/ai";
import NewsPublisher from "../ui/NewsPublisher";
import { RiNewspaperLine } from "react-icons/ri";

const Nav = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.news);
  const { showPublishers } = useSelector((state) => state.news);
  

  useEffect(() => {
    document.body.style.overflow = showPublishers ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [showPublishers]);
  return (
    <div className="m-auto max-w-[1440px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 p-4">
          <RiNewspaperLine color="#F6AC7A" size="50"></RiNewspaperLine>
          <h1 className="text-3xl font-bold text-[#F6AC7A]">News</h1>
        </div>
        
        <div className="flex items-center justify-between gap-4">
          <div className="max-w-[1440px] mx-auto">
            {showPublishers && (
              <div className="absolute inset-0 -z-30">
                <NewsPublisher />
              </div>
            )}
            <div className="flex items-center justify-between gap-12">
              <div className="flex items-center justify-between border-b border-[#F6AC7A]  ">
                <input
                  onChange={(event) => dispatch(filterNews(event.target.value))}
                  value={filter}
                  type="text"
                  placeholder="Search for an article"
                  className="py-3 bg-transparent focus:outline-none"
                />
                <AiOutlineSearch size='50' className="text-gray-200 " />
              </div>
              <ul className="hidden md:block">
                <li className="bg-[#F6AC7A]  px-4 py-2 flex rounded-full">
                  <button className="text-[#0a3738]">Contact us</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-30">
            <NewsPublisher />
          </div>
    </div>
  );
};

export default Nav;
