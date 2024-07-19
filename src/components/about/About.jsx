import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./about.css";

const About = () => {
  const [students, setStudents] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(
          "https://hp-api.herokuapp.com/api/characters/students"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        const filteredStudents = data.filter((student) => student.image !== "");

        setStudents(filteredStudents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleHouseCardClick = (house) => {
    setSelectedHouse(house);
  };

  const filteredStudents = selectedHouse
    ? students.filter(
        (student) => student.house.toLowerCase() === selectedHouse
      )
    : students;

  return (
    <div className="about-section justify-content-center text-center">
      <h2 className="mt-5 mb-5 d-flex justify-content-center text-center">
        Hogwarts House
      </h2>
      <img
        className="witch-hat"
        onClick={() => setSelectedHouse(null)}
        src="/images/witch-hat.png"
      />

      <div className="container my-5">
        <div className="row">
          <div
            className="col-3 mb-4 d-flex justify-content-center"
            onClick={() => handleHouseCardClick("gryffindor")}
          >
            <div>
              <img
                className="card-houses"
                src="/images/gryffindor-card.png"
                alt="Gryffindor"
              />
            </div>
          </div>
          <div
            className="col-3  mb-4 d-flex justify-content-center"
            onClick={() => handleHouseCardClick("ravenclaw")}
          >
            <div>
              <img
                className="card-houses"
                src="/images/ravenclaw-card.png"
                alt="Ravenclaw"
              />
            </div>
          </div>
          <div
            className="col-3  mb-4 d-flex justify-content-center"
            onClick={() => handleHouseCardClick("slytherin")}
          >
            <div>
              <img
                className="card-houses"
                src="/images/slytherin-card.png"
                alt="Slytherin"
              />
            </div>
          </div>
          <div
            className="col-3 mb-4 d-flex justify-content-center"
            onClick={() => handleHouseCardClick("hufflepuff")}
          >
            <div>
              <img
                className="card-houses"
                src="/images/hufflepuff-card.png"
                alt="Hufflepuff"
              />
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-5 mb-5 d-flex justify-content-center ">
        Hogwarts Students
      </h2>

      <div className="container my-5 text-center">
        <div className="row justify-content-center">
          {filteredStudents.map((student) => (
            <div key={student.id} className="col-md-3 col-6 mb-4">
              <Card className="card text-center card justify-content-center mx-auto">
                <Card.Img
                  variant="top"
                  src={student.image}
                  className="card-image mx-auto pt-3"
                />
                <Card.Body>
                  <Card.Title className="card-student-name fs-3">
                    {student.name}
                  </Card.Title>
                  <Card.Text className="card-student-house fs-6">
                    House: {student.house}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
