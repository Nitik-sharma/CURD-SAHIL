import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Read() {

    const [data, setData] = useState({})

    const { id } = useParams()
    // using useParam we find the end point which we assign with give them id on button
    
    useEffect(() => {

        const fetchApi = async () => {

            // wee pass this id to the api and get particular data
            const res = await axios.get(`http://localhost:2020/Products/${id}`);

            setData(res.data)
            
        }

        

        fetchApi()
        
    }, [])
    
    console.log(data)
  return (
    <div>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3px",
          background: "white",
          padding: "10px",
          width: "300px",
          height: "150px",
              }}
              
              
      >
        <input
          type="text"
          name=""
          id=""
          style={{
            padding: "10px",
            width: "90%",
                  }}
                  defaultValue={data.id}
        />
        <input
          type="text"
          name=""
          id=""
          style={{
            padding: "10px",
            width: "90%",
                  }}
                  defaultValue={data.email}
        />
        <input
          type="text"
          name=""
          id=""
          style={{
            padding: "10px",
            width: "90%",
                  }}
                  defaultValue={data.body}
        />
      </form>
    </div>
  );
}

export default Read