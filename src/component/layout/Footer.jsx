import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../features/NewsSlice";
import { NEWSCATEGORIES, LINKS } from "../../assets/data";
import { RiNewspaperLine } from "react-icons/ri";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <div className='bg-[#0a3738] text-white text-center'>
       <div className='flex items-center gap-2 p-10 text-2xl font-bold'>
        <RiNewspaperLine size='50'color="#F6AC7A"/>
      <h1 className='text-3xl font-bold text-[#F6AC7A]'>News</h1> 
       </div>
       <div>
       <div className="flex flex-col justify-center">
          <ul className="grid items-center justify-between w-full grid-cols-3 gap-4 px-8 my-4 md:grid-cols-4 lg:grid-cols-8">
            {NEWSCATEGORIES.map((categoryObject) => (
              <li
                className={`text-base font-medium hover:text-[#F6AC7A] cursor-pointer 
            `}
                key={categoryObject.id}
              >
                <Link
                  to="/"
                  onClick={() => dispatch(changeCategory(categoryObject.value))}
                >
                  {categoryObject.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-12 px-8 py-4 my-4 cursor-pointer md:flex-row md:items-center">
            {LINKS.map((item, index) => (
              <li className="hover:text-[#F6AC7A] hover:underline  " key={index}>
                <Link className="" to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="px-8">
            Copyright The News <span>&#169;</span> 2023
          </p>
        </div>
       </div>
       
    </div>
  )
}

export default Footer