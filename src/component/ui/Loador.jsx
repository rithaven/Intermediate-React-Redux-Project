import { RotatingTriangles } from "react-loader-spinner";


const Loador = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <RotatingTriangles
      height="80"
      width="80"
      color="#3B82F6"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
  )
}

export default Loador