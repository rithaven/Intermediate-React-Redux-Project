import { ColorRing } from "react-loader-spinner";


const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <ColorRing
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

export default Loader