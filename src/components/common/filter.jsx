const filter = [
  {
    name: "All",
  },
];

export const Filter = () => {
  return (
    <div className="w-full h-[50px] border-b border-white">
      {filter.map((filter, index) => (
        <div key={index}>
          <h2 className="text-white size-[14px] px-[20px] py-[12px] border-[2px] border-white text-center">{filter.name}</h2>
        </div>
      ))}
    </div>
  );  
};
