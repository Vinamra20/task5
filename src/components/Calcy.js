import React, { useState } from "react";

const Calcy = () => {
  const [age, setage] = useState("");
  const [year, setyear] = useState(0);
  const calculate = () => {
    let dob = age.split("-");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    if (mm > dob[1]) {
      console.log(1);
      setyear(yyyy - dob[0]);
    }
    if (mm === dob[1] && dd >= dob[2]) {
      console.log(1);
      setyear(yyyy - dob[0]);
    }
    if (mm < dob[1]) {
      console.log(2);
      setyear(yyyy - dob[0] - 1);
    }
  };
  return (
    <>
      <div>
        <h1>Age Calculator</h1>
        <div>
          <form>
            <label>Enter your age</label>
            <input
              type="date"
              value={age}
              name="age"
              onChange={(e) => {
                setage(e.target.value);
              }}
            ></input>
          </form>
          <button type="submit" onClick={calculate}>
            Submit
          </button>
        </div>
        <div>
          <h1>Your age is {year}</h1>
        </div>
      </div>
    </>
  );
};

export default Calcy;
