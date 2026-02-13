import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

function Update() {
    const [data, setData] = useState({
        id: "",
        email: "",
        body:""
    });
    
     const navigate = useNavigate();
     const { id } = useParams();
     // using useParam we find the end point which we assign with give them id on button

     useEffect(() => {
       const fetchApi = async () => {
         // wee pass this id to the api and get particular data
         const res = await axios.get(`http://localhost:2020/Products/${id}`);

         setData(res.data);
       };

       fetchApi();
     }, []);
    
    const handleSubmit = () => {
        axios.put(`http://localhost:2020/Products/${id}`, data);

        navigate("/")
        

    }
  return (
    <div>
      Update
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3px",
          background: "white",
          padding: "10px",
          width: "300px",
          height: "170px",
              }}
              onSubmit={handleSubmit}
      >
        <input
          type="text"
          name=""
          id=""
          style={{
            padding: "10px",
            width: "90%",
          }}
          value={data.id}
          onChange={(e) => setData({ ...data, id: e.target.value })}
        />
        <input
          type="text"
          name=""
          id=""
          style={{
            padding: "10px",
            width: "90%",
          }}
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="text"
          name=""
          id=""
          style={{
            padding: "10px",
            width: "90%",
          }}
          value={data.body}
          onChange={(e) => setData({ ...data, body: e.target.value })}
              />
              <button type='submit' style={{width:"90%",padding:"10px"}}>Submit</button>
      </form>
    </div>
  );
}

export default Update