import { useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../component/ui/Loader";
import { useGetAllNewsQuery } from "../features/NewsApiSlice";
import Footer from "../component/layout/Footer";

const AboutNews = () => {
  const { title } = useParams();
  const { category, publisher } = useSelector((state) => state.news);
  const { data: response, isLoading } = useGetAllNewsQuery({
    category,
    publisher,
  });

  const articles = response?.articles;
  const data = Array.isArray(articles) && articles;
  const article = !isLoading && data.find((item) => item.title === title);

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
                    src={article.urlToImage}
                    alt=""
                  />

                  <div className="max-w-3xl px-4 py-16 bg-white shadow-3xl">
                    <h1
                      dangerouslySetInnerHTML={{ __html: title }}
                      className="max-w-3xl mx-auto text-4xl italic font-semibold text-center"
                    ></h1>
                    <p className="font-medium font-roboto">
                      Author:{" "}
                      <span className="italic font-bold">{article.author}</span>
                    </p>
                    <p className="font-roboto">
                      Published:
                      <span className="italic font-bold ">
                        {" "}
                        {new Date(article.publishedAt).toLocaleString()}
                      </span>
                    </p>
                    <p className="my-4 text-lg">
                      {article.description}
                      <div class="">
                        <label class="relative inline-block w-full h-40 ">
                          <input
                            type="checkbox"
                            class="peer opacity-0 w-0 h-0"
                          />
                        <p className="pt-5 font-bold "> <span className="text-3xl text-[#F6AC7A]">Read more</span> <span className="mt-4 text-4xl">  &rarr; </span> </p> 
                          <span
                            class="absolute p-4 pr-5 text-white cursor-pointer top-0 mt-4   rounded-lg duration-300 before:content-['']
                             before:absolute before:w-10 before:h-4  before:shadow-blue-900 before:top-1 before:left-1 before:rounded-b-xl
                            before:duration-300 peer-checked:before:translate-x-[690px]
                           peer-checked:bg-[#F6AC7A]"
                          >
                       <p className="w-24 mb-8 font-bold border border-white rounded-lg "> <span className="">  &larr; </span> Back</p> 

                            This page is supposed to display the full text of
                            the article, however, the news API we are using for
                            this exercise project does not deliver the full text
                            of the article. That’s why you are only seeing an
                            article summary.
                            <br /><br />
                            <Link
                              to={article.url}
                              className="p-1 pl-8 text-center text-white border border-white rounded-xl"
                            >
                              Go to Article
                            </Link>
                          </span>
                        </label>
                      </div>
                    </p>
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
