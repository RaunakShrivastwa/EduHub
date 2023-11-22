import axios from 'axios';
import React, { useState } from 'react'
import { Await, useNavigate } from 'react-router-dom';

function AddChapter() {
  let navigate = useNavigate();
  const [Chapter, setChapter] = useState([]);

  const { courseName, content, name, information, deadline, contentType } = Chapter;
  const onInputChange = (e) => {
    setChapter({ ...Chapter, [e.target.name]: e.target.value });

  }

  const onsubmitData = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9096/chapter", Chapter);
    const data = {
      courseName: '',
      content: '',
      name: '',
      information: '',
      deadline: '',
      contentType: ''
    }
    setChapter(data);
    navigate('/addChapter')
  }

  return (

    <>
      <div className='container-fluied bg-dark'>
        <div> <i title='Go back' onClick={() => navigate(-1)} class="fa-solid fa-arrow-left p-3 text-danger"></i></div>
        <div className='text-center'>
          <div className='d-flex justify-content-md-around align-items-md-center main'>

            <form className=' shadow mt-4  list' onSubmit={(e) => onsubmitData(e)}>
              <h3 className='text-white head p-2'><i class="fa fa-plus m-md-2"></i>ADD Chapter</h3>
              <div className='p-4 align-item-center bg-dark'>

                {/* for the CourseName */}
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label text-white">* Course Name</label>
                  <input type="text" name='courseName' required className="form-control" id="userName" value={courseName} onChange={(e) => onInputChange(e)}
                  />
                </div>

                {/* Chapter Content */}
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label text-white">Content- Heading</label>
                  <input type="text" name="content" required className="form-control" id="exampleInputPassword1" value={content} onChange={(e) => onInputChange(e)}

                  />
                </div>

                {/* Chapter Name */}
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label text-white">Optional</label>
                  <input type="text" name="name" required className="form-control" id="exampleInputPassword1" value={name} onChange={(e) => onInputChange(e)}
                  />
                </div>

                {/* Chapter Information */}
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label text-white">Chapter Information</label>
                  <input type="text" name="information" required className="form-control" id="exampleInputPassword1" value={information} onChange={(e) => onInputChange(e)}
                  />
                </div>

                {/* Chapter DeadLine */}
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label text-white">Chapter DeadLine</label>
                  <input type="date" name="deadline" required className="form-control" id="exampleInputPassword1" value={deadline} onChange={(e) => onInputChange(e)}
                  />
                </div>

                {/* Chapter ContentType */}
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label text-white">ShubTopic Nmae</label>
                  <input type="text" name="contentType" required className="form-control" id="exampleInputPassword1" value={contentType} onChange={(e) => onInputChange(e)}
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

export default AddChapter