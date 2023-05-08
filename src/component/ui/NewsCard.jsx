import { Link } from "react-router-dom";


const NewsCard = ({ image, title, publisher }) => {
  return (
    <div className="py-4 border border-gray-200 rounded-lg mx-2 hover:shadow-3xl duration-300 ease-in-out gap-3 flex flex-col justify-between h-[450px] px-2">
      <Link className="flex-1 " to={`/about/${encodeURIComponent(title)}`}>
        <img
          className="object-cover w-full h-64 mx-auto"
          src={
            image 
          }
          alt="News"
        />
      </Link>
      <Link to={`/about/${encodeURIComponent(title)}`}>
        <h1
          className="text-2xl font-medium hover:text-[#F6AC7A]"
        >{title.slice(0, 100)}</h1>
      </Link>
      <Link
        to={`/about/${encodeURIComponent(publisher)}`}
        className="text-xs hover:text-[#F6AC7A]"
      >
        Published by {publisher}
      </Link>
    </div>
  )
}

export default NewsCard