import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import '../StaticReactComponent/CSS/Course.css'
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';



function ViewCourse() {
    const [user, setUser] = useState([])

    useEffect(() => {
        loadUser();
    }, [])

    const [chapter, setChapter] = useState([])

    // const [subTopic,setSubTopic]=useState([]);


    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 10; // Number of items to display per page
    const offset = currentPage * itemsPerPage;

    const displayedUsers = user.slice(offset, offset + itemsPerPage)


    let navigate = useNavigate();


    const loadUser = async () => {
        const result = await axios.get(`http://localhost:9096/course`)
        setUser(result.data)
    }

    const loadChapter = async (e) => {

        const result = await axios.get(`http://localhost:9096/course/${e.target.id}`)
        setChapter(result.data)
    }

    // const loadShubTopic = async (e) => {     
    //     const result = await axios.get(`https://ninjassite-production.up.railway.app/tag/${e.target.id}`)
    //     setSubTopic(result.data)
    // }

    //  console.log("Your chapter data ",subTopic)
    const deleteData = async (e) => {
        let id = e.target.id;
        await axios.delete(`http://localhost:9096/deleteCourse/${id}`);
        window.location.href = '/viewCourse'
    }

    const UpdateData = (id) => {
        navigate(`/editPage/${id}`)
    }

    // const handleSelectChange = (event) => {
    //     // Prevent changing the selected value
    //     event.preventDefault();
    //   };
    console.log(user)
    return (

        <div>
            <div className='container-fluied' style={{ height: '100vh' }}>
                <div> <i title='Go back' onClick={() => navigate(-1)} class="fa-solid fa-arrow-left p-3"></i></div>
                <div className='d-flex justify-content-center'>
                    <strong className='p-3'>All Course</strong>
                </div>

                <table className="table p-3 container">
                    <thead>
                        <tr>
                            <th className='bg-success shadow' scope="col">S.no</th>
                            <th className='bg-success shadow' scope="col">Title</th>
                            <th className='bg-success shadow' scope="col">DeadLine</th>
                            <th className='bg-success shadow' scope="col">Score</th>
                            <th className='bg-success shadow' scope="col">name</th>
                            <th className='bg-success shadow' scope="col">Operation</th>

                        </tr>
                    </thead>
                    <tbody>
                        {user && user.length > 0 ? (
                            displayedUsers.map((data) => (
                                <tr key={data.id} style={{ border: 'green' }}>
                                    <th scope="row">{data.id}</th>
                                    <td>

                                        <select className='custom-select' onClick={(e) => loadChapter(e)} name="catogery" required class="form-select border-0 border-end-0 "
                                            id={data.name} aria-label="Floating label select example">
                                            <option selected>{data.title}</option>
                                            {
                                                chapter.map((cpt) => (
                                                    <option value="">{cpt.content}</option>
                                                ))
                                            }
                                        </select>
                                    </td>
                                    <td>{data.deadline}</td>
                                    <td>{data.score}</td>
                                    <td>{data.name}</td>
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

export default ViewCourse