const Wrapper = ({ children, style }) => {
  return <div className={` mx-auto max-w-[1440px] ${style}`}>{children}</div>;
};

export default Wrapper;