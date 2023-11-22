import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

function SidebarComponent() {
    const [styles,setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    const changeStyle =()=> {
        if(styles == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle = "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled";
        }else {
            setStyle = "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion";
        }
    }
    return (
        <>
            <ul className={styles} id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <img className='prop' src="https://scontent.fpat3-1.fna.fbcdn.net/v/t39.30808-6/288313501_734102424400486_2834910633717808723_n.jpg?stp=c0.59.720.720a_dst-jpg_s851x315&_nc_cat=105&ccb=1-7&_nc_sid=c21ed2&_nc_ohc=6W3s4mejFAMAX_iLE2D&_nc_ht=scontent.fpat3-1.fna&oh=00_AfDQhfxxeIeCcblSSmdEaOhJqqK-yFa4wEKvBZc1CQL1Aw&oe=64DFF60E" alt="" />
                    </div>
                    <div class=""><strong>Founder:- </strong> Shubham Shri.<sup>🤖</sup></div>
                </Link>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li class="nav-item active">
                    <Link class="nav-link" to="index.html">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div class="sidebar-heading">
                    Interface
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li class="nav-item">
                    <Link class="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Student</span>
                    </Link>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Student Operation :</h6>
                            <Link class="collapse-item" to="#">Add Student</Link>
                            <Link class="collapse-item" to="#">Admission Report</Link>
                            <Link class="collapse-item" to="#">Enquire Report</Link>
                        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li class="nav-item">
                    <Link class="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i class="fas fa-fw fa-wrench"></i>
                        <span>Teacher</span>
                    </Link>
                    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Teacher Operation :</h6>
                            <Link class="collapse-item" to="#">Add Teacher</Link>
                            <Link class="collapse-item" to="#">Add TA</Link>
                            <Link class="collapse-item" to="#">Teacher Report</Link>
                            <Link class="collapse-item" to="#">Other</Link>
                        </div>
                    </div>
                </li>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div class="sidebar-heading">
                    More Operation
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li class="nav-item">
                    <Link class="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i class="fas fa-fw fa-folder"></i>
                        <span>Amount</span>
                    </Link>
                    <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Money Related:</h6>
                            <Link class="collapse-item" to="#">Income</Link>
                            <Link class="collapse-item" to="#">Expencise</Link>
                        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Charts --> */}
                <li class="nav-item">
                    <Link class="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseBatch"
                        aria-expanded="true" aria-controls="collapseBatch">
                        <i class="fas fa-fw fa-folder"></i>
                        <span>Batches</span>
                    </Link>

                    <div id="collapseBatch" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Batch Related:</h6>
                            <Link class="collapse-item" to="#">Add Batches</Link>
                            <Link class="collapse-item" to="#">Upcoming Batches</Link>
                        </div>
                    </div>
                </li>

                {/* for the chapter */}

                <li class="nav-item">
                    <Link class="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseChapter"
                        aria-expanded="true" aria-controls="collapseCourse">
                        <i class="fas fa-fw fa-folder"></i>
                        <span>Chapter</span>
                    </Link>

                    <div id="collapseChapter" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Chapter Related:</h6>
                            <Link class="collapse-item" to="/addChapter">Add Chapter</Link>
                            <Link class="collapse-item" to="/viewChapter">View Chapter</Link>                           
                        </div>
                    </div>
                </li>


                {/* for the course */}
                <li class="nav-item">
                    <Link class="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseCourse"
                        aria-expanded="true" aria-controls="collapseCourse">
                        <i class="fas fa-fw fa-folder"></i>
                        <span>Course</span>
                    </Link>

                    <div id="collapseCourse" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Course Related:</h6>
                            <Link class="collapse-item" to="/addCourse">Add Course</Link>
                            <Link class="collapse-item" to="/viewCourse">View Course</Link>                           
                        </div>
                    </div>
                </li>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider d-none d-md-block" />

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

            </ul>
        </>
    )
}

export default SidebarComponent