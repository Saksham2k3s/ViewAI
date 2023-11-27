import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=20');
const json = response.data;

        setData(json.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="container py-4">
          <h1 className="text-center">
            VIEWAI ASSIGNMENT BY SAKSHAM SHRIVASTAVA
          </h1>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Country</th>
                <th scope="col">postcode</th>
                <th scope="col">Street Number</th>
                <th scope="col">Name</th>
                <th scope="col">Latitude</th>
                <th scope="col">Longitude</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, idx) => (
                <tr key={idx}>
                  <td>{user.location.city}</td>
                  <td>{user.location.state}</td>
                  <td>{user.location.country}</td>
                  <td>{user.location.postcode}</td>
                  <td>{user.location.street.number}</td>
                  <td>{user.location.street.name}</td>
                  <td>{user.location.coordinates.latitude}</td>
                  <td>{user.location.coordinates.longitude}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
