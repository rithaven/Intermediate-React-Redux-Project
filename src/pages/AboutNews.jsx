import { useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../component/ui/Loader";
import {
  useGetAllNewsQuery,
} from "../features/NewsApiSlice";
import Footer from "../component/layout/Footer";

const AboutNews = () => {
  const { title } = useParams();
  const { category, publisher } = useSelector((state) => state.news);
  const { data: response, isLoading } = useGetAllNewsQuery({
    category,
    publisher,
  });

    
  const articles = response?.articles;
  const data = Array.isArray(articles)&& articles
  const article =
    !isLoading &&
    data.find((item) => item.title === title);

  return (
    <div>
      <div className="max-w-5xl mx-auto ">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            {article ? (
              <div>
                <div className="fixed top-0 w-full h-12 bg-white">
                  <Link
                    to="/"
                    className="flex items-center gap-2 text-2xl font-bold text-[#F6AC7A]"
                  >
                    <BsArrowLeft />
                    <span>Home Page</span>
                  </Link>
                </div>
                <div className="flex flex-col items-center justify-center my-16">
                  <img
                    className="object-cover w-full max-h-[600px]"
                    src={
                      article.urlToImage 
                    }
                    alt=""
                  />

                  <div className="max-w-3xl px-4 py-16 bg-white shadow-3xl">
                    <h1
                      dangerouslySetInnerHTML={{ __html: title }}
                      className="max-w-3xl mx-auto text-4xl italic font-semibold text-center"
                    ></h1>
                    <p className="font-medium font-roboto">
                     Author: <span className="italic font-bold" >{article.author}</span>  
                    </p>
                    <p className="font-roboto">
                      Published: 
                     <span className="italic font-bold "> {new Date(article.publishedAt).toLocaleString()}</span> 
                    </p>
                    <p className="my-4 text-lg">
                      {article.description}
                    </p>
                    <Link
                      to={article.url}
                      className="p-2 mt-32 text-center text-white bg-[#F6AC7A] rounded-xl"
                    >
                      More
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-screen gap-4">
                
                <Link
                  to="/"
                  className="flex items-center justify-center text-2xl text-[#0a3738] cursor-pointer"
                >
                  <BsArrowLeft />
                  <span className="text-[#F6AC7A]">Return Home</span>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AboutNews;
