import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/${id}`);
    setUser(result.data);
    console.log(result.data)
  };
  
  return (
    <div className="container">
      <div className="row">
        {
          console.log(user)
        }
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>name:</b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>price:</b>
                  {user.price}
                </li>
                <li className="list-group-item">
                  <b>Image:</b>
                  <img src={user.image} />
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}