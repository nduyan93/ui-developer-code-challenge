"use client"

import { useEffect, useState } from "react";
import EmployeeDetails from "@/components/EmployeeDetails";
import EmployeeList from "@/components/EmployeeList";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handlePopularityUpdate = (name, newPopularity) => {
    const updatedEmployees = employees.map(employee =>
      employee.name === name ? { ...employee, popularity: newPopularity } : employee
    );

    setEmployees(updatedEmployees);

    if (selectedEmployee && selectedEmployee.name === name) {
      setSelectedEmployee({ ...selectedEmployee, popularity: newPopularity });
    }
  };

  useEffect(() => {
    fetch("/EmployeeData.json")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data.employees);
        if (data.employees.length > 0) {
          setSelectedEmployee(data.employees[0]);
        }
      });
  }, []);

  return (
    <>
      <div className="bg-[#2e2e36] overflow-auto">
        <div className="h-[300px] bg-[center_33.33%] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("/images/Header image/Godfather header.jpg")` }}>
          <div className="lg:w-96 bg-slate-950 bg-opacity-50">
            <div className="flex justify-center items-center h-[300px]">
              <img className="w-[170px]" src={`/logo/the-godfather.svg`} />
            </div>
          </div>
        </div >
        <div className="flex flex-col lg:flex-row">
          <div className="absolute z-0 top-60 flex flex-row h-[calc(100vh-240px)] w-full bg-[#25252d] bg-opacity-80 blur-lg">
          </div>
          <div className="lg:min-w-[384px] lg:min-h-[calc(100vh-300px)] z-10 items-center bg-[#25252d]">
            <EmployeeList employees={employees} onEmployeeSelect={setSelectedEmployee} selectedEmployee={selectedEmployee} />
          </div>
          <div className="lg:mt-[-72px] z-10" >
            {selectedEmployee && (
              <EmployeeDetails employee={selectedEmployee} onUpdatePopularity={handlePopularityUpdate} />
            )}
          </div>
        </div >
      </div>
    </>
  )
}
