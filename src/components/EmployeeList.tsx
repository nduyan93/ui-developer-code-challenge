export default function EmployeeList({ employees, onEmployeeSelect, selectedEmployee }) {

  const calculateFontSizeAndLineHeight = (popularity) => {
    const minFontSize = 36 - (6/7 * 36);
    const minLineHeight = 56 - (6/7 * 56);

    const fontSize = Math.ceil(((popularity - 1) * (36 - minFontSize) / 6) + minFontSize);
    const lineHeight = Math.ceil(((popularity - 1) * (56 - minLineHeight) / 6) + minLineHeight);

    return { fontSize , lineHeight };
  }

  return (
    <div className="py-3">
      {employees.map((employee) => {
        const { fontSize, lineHeight } = calculateFontSizeAndLineHeight(employee.popularity);
        
        return (
          <p
            className={`text-center
              ${employee.name == selectedEmployee?.name ? "text-[#3cd2fc] bg-[#404147]" : ""} 
              ${selectedEmployee?.colleagues.find(item => item === employee.name) ? "text-[#3cd2fc]" : ""}   
            `}
            key={employee.name}
            style={{ fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px` }}
            onClick={() => onEmployeeSelect(employee)}
          >
            {employee.name}
          </p>
        )
      })}
    </div>
  );
}
