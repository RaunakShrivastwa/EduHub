import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

function EditCourse() {

  const { id } = useParams();
  let navigate = useNavigate();
  const [course, setCourse] = useState({
    title: '',
    deadline: '',
    name: '',
    score: ''
  });

  useEffect(() => {
    (async () => {
      const result = await axios.get(`http://localhost:9096/getSingle/${id}`)
      setCourse(result.data);
    })()
  }, [id]);
  const { title, deadline, name, score } = course;



  const onsubmitData = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:9096/updateCourse/${id}`, course);
    navigate("/viewCourse");
  }

  const onInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  }
  return (

    <div className='container-fluied bg-dark'>
      <div> <i title='Go back' onClick={() => navigate(-1)} class="fa-solid fa-arrow-left p-3 text-danger"></i></div>
      <div className='text-center'>
        <div className='d-flex justify-content-md-around align-items-md-center main'>

          <form className=' shadow mt-4  list' onSubmit={(e) => onsubmitData(e)}>
            <h3 className='text-white head bg-primary p-2'><i class="fa fa-refresh m-md-2"></i>UPDATE COURSE</h3>
            <div className='p-4 align-item-center bg-dark'>

              {/* for the Title */}
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-white">Course Title</label>
                <input type="text" name='title' className="form-control" id="userName" value={title} onChange={(e) => onInputChange(e)}
                />
              </div>

              {/* Course Deadline */}
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-white">Course DeadLine</label>
                <input type="date" name="deadline" className="form-control" id="exampleInputPassword1" value={deadline} onChange={(e) => onInputChange(e)}

                />
              </div>

              {/* Course Score */}
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-white">Course Score</label>
                <input type="text" name="score" className="form-control" id="exampleInputPassword1" value={score} onChange={(e) => onInputChange(e)}
                />
              </div>

              {/* Course Name */}
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-white">Course Name</label>
                <input type="text" name="name" className="form-control" id="exampleInputPassword1" value={name} onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <button className='btn btn-danger'>Save</button> &nbsp;
                <button type="reset" className="btn btn-primary">Reset</button>
              </div>
            </div>
          </form>


        </div>
      </div>
    </div>
  )
}

export default EditCourse