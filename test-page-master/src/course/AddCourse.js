import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddCourse() {
  let navigate = useNavigate();
  const [course, setCourse] = useState({
    title: '',
    deadline: '',
    score: '',
    name: ''
  });

  const { title, deadline, score, name } = course;
  const onInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });

  }

  const onsubmitData = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9096/course", course);
    const data = {
      title: '',
      deadline: '',
      score: '',
      name: ''
    }
    setCourse(data);
    navigate('/addCourse')
  }

  return (

    <>
      <div className='container-fluied bg-dark'>
        <div> <i title='Go back' onClick={() => navigate(-1)} class="fa-solid fa-arrow-left p-3 text-danger"></i></div>
        <div className='text-center'>
          <div className='d-flex justify-content-md-around align-items-md-center main'>

            <form className=' shadow mt-4  list' onSubmit={(e) => onsubmitData(e)}>
              <h3 className='text-white head p-2'><i class="fa fa-plus m-md-2"></i>ADD COURSE</h3>
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

    </>
  )
}

export default AddCourse