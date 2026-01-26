import axios from "axios";
import React, { useEffect, useState } from "react";

const Viewlaptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [laptop, setlaptop] = useState({
    name: "",
    brand: "",
    processor: "",
    ram: "",
    storage: "",
    price: "",
    image: "",
    discription: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/laptops`)
      .then((res) => {
        setLaptops(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const deleteLaptop = (lid) => {
    axios
      .delete(`http://localhost:5000/laptops/${lid}`)
      .then(() => {
        alert("laptop deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getOneRecord = (lid) => {
    axios
      .get(`http://localhost:5000/laptops/${lid}`)
      .then((res) => setlaptop(res.data))
      .catch((err) => console.log("err"));
  };

  const changeData =(e)=>{
    const { name ,value} = e.target
    setlaptop({...laptop, [name]:value})
  }

  const {name,
    brand,
    processor,
    ram,
    storage,
    price,
    image,
    discription} = laptop
   
  const submitHandler = (e) =>{
      e.preventDefault()
      axios.put(`http://localhost:5000/laptops/${laptop.id}`,laptop)
      .then(()=>{alert('laptop updated')})
      .catch((err)=>{console.log(err);
      })
  }

  return (
    <section className="container p-5">
      <h1 className="text-center">Laptops</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Laptop Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Storage</th>
            <th>Processor</th>
            <th>Ram</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {laptops.map((laptop, index) => {
            return (
              <tr>
                <td>{laptop.name}</td>
                <td>{laptop.brand}</td>
                <td>{laptop.price}</td>
                <td>{laptop.storage}</td>
                <td>{laptop.processor}</td>
                <td>{laptop.ram}</td>
                <td >
                  <button className="btn btn-success mx-2"
                    onClick={() => getOneRecord(laptop.id)}
                    data-bs-target="#update"
                    data-bs-toggle="modal"
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger mx-2" onClick={() => deleteLaptop(laptop.id)}>
                    delete
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
            <div className="modal-header mx-auto">
              <h5 className="modal-title "> Update Laptop</h5>
            </div>
            <div className="modal-body">
                 <form onSubmit={submitHandler}>
                  <input type='text' value={name} onChange={changeData} name='name'  placeholder='Laptop Name' className='form-control mb-3'/>
                  <input type='text' value={brand} onChange={changeData} name='brand' placeholder='Brand'  className='form-control mb-3'/>
                  <input type='text' value={processor} onChange={changeData} name='processor' placeholder='Processor'  className='form-control mb-3'/>
                  <input type='text' value={ram} name='ram' onChange={changeData} placeholder='Ram'  className='form-control mb-3'/>
                  <input type='text' value={storage} name='storage' onChange={changeData} placeholder='Storage'   className='form-control mb-3'/>
                  <input type='text' value={price} name='price' placeholder='Price' onChange={changeData}  className='form-control mb-3'/>
                  <input type='text' value={image} name='image' placeholder='Image' onChange={changeData}  className='form-control mb-3'/>

                  <textarea value={discription} rows={5} cols={30} className='form-control mb-3' onChange={changeData} placeholder='Laptop Description' name='discription'></textarea>

                  <input type='submit' className='form-control btn btn-success my-3'/>
               </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Viewlaptops;
