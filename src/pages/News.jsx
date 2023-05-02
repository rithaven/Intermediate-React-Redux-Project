import { useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loador from "../component/ui/Loador";
import {
  useGetAllNewsQuery,
  useGetAllTrendingNewsQuery,
} from "../features/NewsApiSlice";
import Footer from "../component/layout/Footer";


const News = () => {
  const { title } = useParams();
  const { category, publisher } = useSelector((state) => state.news);
  const { data: response, isLoading } = useGetAllNewsQuery({
    category,
    publisher,
  });
  const { data: trendingResponse, isLoading: trendingIsLoading } =
  useGetAllTrendingNewsQuery(category);
const articles = response?.articles;
const data = Array.isArray(articles) && [
  ...articles,
  ...trendingResponse?.articles,
];
const article =
  !isLoading &&
  !trendingIsLoading &&
  data.find((item) => item.title === title);

  return (
    <div>
    <div className="max-w-5xl mx-auto ">
      {isLoading ? (
        <Loador />
      ) : (
        <div>
          {article ? (
            <div>
              <div className="fixed top-0 w-full h-12 bg-white">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-2xl font-bold text-blue-500"
                >
                  <BsArrowLeft />
                  <span>Home</span>
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center my-16">
                <img
                  className="object-cover w-full max-h-[600px]"
                  src={
                    article.urlToImage ||
                    "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                  alt=""
                />

                <div className="max-w-3xl px-4 py-16 bg-white shadow-3xl">
                  <h1
                    dangerouslySetInnerHTML={{ __html: title }}
                    className="max-w-3xl mx-auto text-4xl italic font-semibold text-center"
                  ></h1>
                  <p className="italic font-medium font-roboto">
                    Writen by {article.author}
                  </p>
                  <p className="italic font-roboto">
                    Published on{" "}
                    {new Date(article.publishedAt).toLocaleString()}
                  </p>
                  <p className="my-4 text-lg first-letter:text-5xl first-letter:font-bold first-letter:border-blue-500 first-letter:ring-2 first-letter:px-1 first-letter:mx-1">
                    {article.description?.replace(/\.* \[.*\]/g, "") +
                      article.content?.replace(/\.* \[.*\]/g, "")}
                  </p>
                  <Link
                    to={article.url}
                    className="p-2 mt-32 text-center text-white bg-blue-500 rounded-xl"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-screen gap-4">
              <h1 className="text-3xl font-medium ">Article not found</h1>
              <Link
                to="/"
                className="flex items-center justify-center text-2xl text-blue-500 cursor-pointer"
              >
                <BsArrowLeft />
                <span>Return Home</span>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
    <Footer />
  </div>
  )
}

export default News