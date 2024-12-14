const ChildComponent = (props: any) => {
    console.log(props);
    return (
      <div className="flex flex-col items-center justify-center mt-28">
        <h1 className="text-5xl border border-gray-300 bg-blue-100 text-blue-900 font-semibold w-[600px] text-center rounded-md shadow-lg">
          Name: {props.name}
        </h1>
        <h1 className="text-5xl border border-gray-300 bg-blue-400 text-black-900 font-semibold w-[600px] text-center mt-8 rounded-md shadow-lg">
          Favorite Color: {props.color}
        </h1>
        <h1 className="text-5xl border border-gray-300 bg-yellow-100 text-yellow-900 font-semibold w-[600px] text-center mt-8 rounded-md shadow-lg">
          Favorite Dish: {props.dish}
        </h1>
      </div>
    );
  };
  
  export default ChildComponent;
  