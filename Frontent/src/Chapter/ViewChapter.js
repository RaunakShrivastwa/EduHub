import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import '../StaticReactComponent/CSS/Course.css'
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';



function ViewsubTopic() {
  const [user, setUser] = useState([])

  useEffect(() => {
    loadUser();
  }, [])

  const [subTopic, setsubTopic] = useState([])
  const [inputValue, setInputValue] = useState('');

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10; // Number of items to display per page
  const offset = currentPage * itemsPerPage;

  const displayedUsers = user.slice(offset, offset + itemsPerPage)


  let navigate = useNavigate();


  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9096/chapter`)
    setUser(result.data)
  }

  const loadShubTopic = async (e) => {
    const result = await axios.get(`http://localhost:9096/tag/${e.target.id}`)
    setsubTopic(result.data)
  }
  const deleteData = async (e) => {
    let id = e.target.id;
    await axios.delete(`http://localhost:9096/delete/${id}`);
    window.location.href = '/viewCourse'
  }

  const UpdateData = (id) => {
    navigate(`/editPage/${id}`)
  }

  const handleSelectChange = (event) => {
    // Prevent changing the selected value
    event.preventDefault();
  };
  // Function to update inputValue state
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to update filteredData state
  const handleFilter = () => {
    const filteredResults = user.filter(item =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setUser(filteredResults);
  };
  return (

    <div>
      <div className='container-fluied' style={{ height: '100vh' }}>
        <div> <i title='Go back' onClick={() => navigate(-1)} class="fa-solid fa-arrow-left p-3"></i></div>
        <div className='d-flex justify-content-center'>
          <strong className='p-3'>All Chapter</strong>

          <input
            className='border'
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter filter text"
          />
        </div>
        <table className="table p-3 container">
          <thead>
            <tr>
              <th className='bg-success shadow' scope="col">S.no</th>
              <th className='bg-success shadow' scope="col">CourseName</th>
              <th className='bg-success shadow' scope="col">Content/Heading</th>
              <th className='bg-success shadow' scope="col">Info</th>
              <th className='bg-success shadow' scope="col">DeadLine</th>
              <th className='bg-success shadow' scope="col">ShubTopic</th>
              <th className='bg-success shadow' scope="col">Operation</th>

            </tr>
          </thead>
          <tbody>
            {user && user.length > 0 ? (
              displayedUsers.map((data) => (
                <tr key={data.id} style={{ border: 'green' }}>
                  <th scope="row">{data.id}</th>
                  <td>{data.content}</td>
                  <td>{data.courseName}</td>
                  <td>{data.name}</td>
                  <td>{data.deadline}</td>
                  <td>

                    <select className='custom-select' onClick={(e) => loadShubTopic(e)} name="catogery" required class="form-select border-0 border-end-0 "
                      id={data.contentType} aria-label="Floating label select example">
                      <option selected>{data.contentType}</option>
                      {
                        subTopic.map((cpt) => (
                          <option value="">{cpt.subTopic}</option>
                        ))
                      }
                    </select>
                  </td>

                  <td>
                    <div className='d-flex justify-content-between'>
                      <i title='Click to Delete Course' id={data.id} class="Delete fa-solid fa-trash delete" onClick={(e) => deleteData(e)}></i>
                      <i title='Click to edit Course text-primary' class=" edit fa-regular fa-pen-to-square" onClick={() => UpdateData(data.id)}></i>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={'←'}
          nextLabel={'→'}
          pageCount={Math.ceil(user.length / itemsPerPage)}
          onPageChange={(selectedPage) => setCurrentPage(selectedPage.selected)}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />




      </div>
    </div>
  )
}

export default ViewsubTopic