export const Has = () => {
  return (
    <div className="has-[input:checked]:bg-sky-500 py-6 has-[input:checked]:text-gray-700">
      {/* <label htmlFor="Accept" className="inline-flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox" />
        <span className="has-[input:checked]:text-gray-700">
          Accept Terms and Conditions
        </span>
      </label> */}
      <div className="group hover:bg-gray-200 p-4">
        <h4>Spencer Sharp</h4>
        <svg className="hidden  group-has-[a]:bg-amber-500" />
        <a href="...">planeteria.tech</a>
        <p>Product Designer at</p>
      </div>
    </div>
  );
};

export default Has;
