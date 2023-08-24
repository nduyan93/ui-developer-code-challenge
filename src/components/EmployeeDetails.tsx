import PopularitySlider from "./PopularitySlider";

export default function EmployeeDetails({ employee, onUpdatePopularity }) {
  const handlePopularityChange = (event) => {
    const newPopularity = Number(event.target.value);

    onUpdatePopularity(employee.name, newPopularity);
  };

  return employee ? (
    <div className="lg:flex flex-row p-3 pt-4 lg:px-6 lg:pb-6 xl:px-20 xl:pb-20">
      <div className="lg:w-1/4 flex justify-center">
        <img className="w-[150px] h-[150px] mt-2 border border-gray-500 rounded"
          src={`/images/Profile pics/${employee.image}`} alt={employee.name} />
      </div>
      <div className="lg:w-3/4 ml-4 xl:ml-0">
        <h2 className="flex justify-center lg:justify-start font-semi text-[36px] font-normal">{employee.name}</h2>
        <PopularitySlider
          popularity={employee.popularity}
          onChange={handlePopularityChange}
        />
        <div className="bg-[#1b1d24] p-6 rounded">
          <h3 className="text-xl lg:text-[28px] font-normal mb-1">Biography</h3>
          <p className="lg:text-[18px] font-light">{employee.biography}</p>
        </div>
      </div>
    </div>
  ) : null;
}
