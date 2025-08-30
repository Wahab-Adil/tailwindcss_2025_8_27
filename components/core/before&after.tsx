const BeforeAndafter = () => {
  return (
    <div className="flex flex-row justify-center align-center gap-2">
      <div className="flex items-center space-x-5">
        <span className="relative before:relative before:left-0 before:content-['📞'] before:text-2xl">
          Phone Number
        </span>
        <span className="relative after:relative after:right-0 after:content-['✔️'] after:text-2xl">
          verified
        </span>
      </div>
    </div>
  );
};

export default BeforeAndafter;
