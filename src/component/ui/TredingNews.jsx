
import { IoPersonCircle } from "react-icons/io5";
import { Link } from "react-router-dom";


const TredingNews = ({ image, title, publisher, author }) => {
  return (
    <div className="grid h-40 grid-cols-3 gap-3 px-2 py-4 mx-2 my-4 duration-300 ease-in-out border border-gray-200 rounded-lg hover:shadow-3xl">
      <Link className="" to={`/detail/${encodeURIComponent(title)}`}>
        <img
          className="object-cover h-full"
          src={
            image ||
            "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt=""
        />
      </Link>
      <div className="flex flex-col col-span-2">
        {author && (
          <Link
            to={`/${encodeURIComponent(publisher)}`}
            className="flex items-center gap-2"
          >
            <IoPersonCircle />
            <span className="text-xs hover:text-blue-500">{author}</span>
          </Link>
        )}
        <Link to={`/detail/${encodeURIComponent(title)}`}>
          <h1
            dangerouslySetInnerHTML={{ __html: title}}
            className="text-xl font-medium hover:text-blue-500">
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default TredingNews