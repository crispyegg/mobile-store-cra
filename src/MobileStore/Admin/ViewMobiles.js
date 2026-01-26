import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewMobile = () => {
  const [mobiles, setMobiles] = useState([]);
  const [mobile, setMobile] = useState({
    name: "",
    brand: "",
    path: "",
    price: "",
    storage: "",
    color: "",
    is5G: "",
    description: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:5000/mobiles`)
      .then((res) => {
        setMobiles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const deleteMobile = (mid) => {
    axios
      .delete(`https://696d32f5f4a79b315180bef2.mockapi.io/mobiles/${mid}`)
      .then(() => {
        alert("Mobile Delelted");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getOneRecord = (mid) => {
    axios
      .get(`https://696d32f5f4a79b315180bef2.mockapi.io/mobiles/${mid}`)
      .then((res) => setMobile(res.data))
      .catch((err) => console.log(err));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`https://696d32f5f4a79b315180bef2.mockapi.io/mobiles/${mobile.id}`, mobile)
      .then(() => {
        alert("MObile is updated");
      })
      .catch((err) => console.log(err));
  };
  const changeData = (e) => {
    const { name, value } = e.target;
    setMobile({ ...mobile, [name]: name === "is5G" ? value === "true": value });
  };
  const { name, brand, price, path, color, is5G, storage, description } = mobile;
  return (
    <section className=" container">
      <h1 className="text-center">Mobiles</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Mobile Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Storage</th>
            <th>Color</th>
            <th>is5G</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mobiles.map((mobile, index) => {
            return (
              <tr key={index}>
                <td> {mobile.name}</td>
                <td> {mobile.price}</td>
                <td> {mobile.brand}</td>
                <td> {mobile.storage}</td>
                <td> {mobile.color}</td>
                <td> {mobile.is5G ? "yes" : "no"}</td>
                <td>
                  <button
                    onClick={() => getOneRecord(mobile.id)}
                    data-bs-target="#update"
                    data-bs-toggle="modal"
                    className="btn btn-primary me-3"
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    onClick={() => deleteMobile(mobile.id)}
                    className="btn btn-danger"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="modal fade" id="update">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Update Mobile</h5>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <input
                  type="text"
                  value={name}
                  onChange={changeData}
                  name="name"
                  placeholder="Mobile Name"
                  className="form-control mb-3"
                />
                <input
                  type="text"
                  value={brand}
                  onChange={changeData}
                  name="brand"
                  placeholder="Mobile Brand"
                  className="form-control mb-3"
                />
                <input
                  type="text"
                  value={path}
                  onChange={changeData}
                  name="path"
                  placeholder="Mobile Image"
                  className="form-control mb-3"
                />
                <input
                  type="number"
                  value={price}
                  onChange={changeData}
                  name="price"
                  placeholder="Mobile Price"
                  className="form-control mb-3"
                />
                <input
                  type="text"
                  value={storage}
                  onChange={changeData}
                  name="storage"
                  placeholder="Mobile Storage"
                  className="form-control mb-3"
                />
                <input
                  type="text"
                  value={color}
                  onChange={changeData}
                  name="color"
                  placeholder="Mobile color"
                  className="form-control mb-3"
                />
                <label>is5G ?</label>

                <div className="form-check">
                  <input  type="radio" name="is5G" checked={is5G}  onChange={changeData}  value='true' className="form-check-input" />
                    <label className="form-check-label">
                    True
                    </label>
                </div>

                <div className="form-check">
                  <input  type="radio" name="is5G"    checked={is5G === false} onChange={changeData}  value='false' className="form-check-input"  />
                   <label className="form-check-label">
                    False
                    </label>
                </div>
                <textarea
                  rows={5}
                  cols={30}
                  value={description}
                  onChange={changeData}
                  className="form-control my-3"
                  name="description"
                  placeholder="Mobile Description"
                ></textarea>
                <input type="submit" className="form-control btn btn-primary" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewMobile;
