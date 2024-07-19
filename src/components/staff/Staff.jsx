import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./staff.css";

const Staff = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await fetch(
          "https://hp-api.herokuapp.com/api/characters/staff"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        const filteredStaff = data.filter(
          (staffMember) => staffMember.image !== ""
        );

        setStaff(filteredStaff);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStaff();
  }, []);

  return (
    <div className="staff-section">
      <h2 className="mt-5 mb-5 d-flex justify-content-center ">
        Hogwarts Staff
      </h2>

      <div className="container my-5 text-center">
        <div className="row justify-content-center">
          {staff.map((staffMember) => (
            <div key={staffMember.id} className="col-md-3 col-6 mb-4">
              <Card className="card text-center card justify-content-center mx-auto">
                <Card.Img
                  variant="top"
                  src={staffMember.image}
                  className="card-image mx-auto pt-3"
                />
                <Card.Body className="">
                  <Card.Title className="card-staff-name fs-3">
                    {staffMember.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
