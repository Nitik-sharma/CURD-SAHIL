import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const [data,setData]=useState([])

    useEffect(() => {
        // Fetch the data for show data 
        const fetchApi = async () => {
            const res = await axios.get("http://localhost:2020/Products");
            
            console.log(res.data)
            setData(res.data)
        } 
        
        fetchApi()
    }, [])

    const handleDelete =async (id) => {
        const result = confirm("You want to delete it ")
        
        // usig thee delete request we delete the data by passing a particular id dynamicaly 
        
        if (result) {
            await axios.delete(`http://localhost:2020/Products/${id}`);

            alert("You delete it sucessfuly")

        } else {
            alert("You not  delete it");
        }

        window.location.reload()
    }
    
  return (
    <div>
      <h1>ALL Products</h1>
      <button>
        <Link to={"/"}>Create</Link>
      </button>

      <table border={"1px"}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
              <tbody>
                  {/* Render all the data and destructre the data  */}
          {data.map((item) => {
            const { id, email, body } = item;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{email}</td>
                <td>{body}</td>
                {/* Make a three action button for read update and delete  */}
                <td style={{ display: "flex",gap:"2px", padding:"2px" }}>
                        <button>
                            {/*Give them id beecause it select in api endpoint with a particualr id which we want to update delete and read data   */}
                    <Link to={`/update/${id}`}>Update</Link>
                  </button>
                  <button>
                    <Link to={`/read/${id}`}>Read</Link>
                  </button>
{/* we pass id in function which we use when we onclick on button with that i can acceess the particular id and delelte that row  */}
                  <button onClick={()=>handleDelete(id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home