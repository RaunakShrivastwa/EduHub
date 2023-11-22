import React, { useState } from 'react'
import LineChartComponent from '../LineChart/LineChartComponent'
import PieChartComponent from '../PieChart/PieChartComponent'
import SidebarComponent from '../SideBar/SidebarComponent'
import SummaryComponent from '../Summary/SummaryComponent'
import NotificationComponent from '../NotificationPage/NotificationComponent'
import { useParams, Link } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useEffect } from 'react'


function Dashboard() {
    const { id } = useParams()
    const [student, setStudent] = useState([]);
    console.log("profile user ", id)
    useEffect(() => {
        loadUser();
    }, [])
    const loadUser = async () => {
        await axios(`http://localhost:9096/getStudent/${id}`).then(result => {
            setStudent(result.data);
        })
    }
    console.log();
    return (
        <>
            <body id="page-top">

                {/* <!-- Page Wrapper --> */}
                <div id="wrapper" >

                    {/* <!-- Sidebar --> */}
                    <SidebarComponent />
                    {/* <!-- End of Sidebar --> */}

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" class="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content">

                            {/* <!-- Topbar --> */}
                            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                                {/* <!-- Sidebar Toggle (Topbar) --> */}
                                <button id="sidebarToggleTop" class="btn btn-Link d-md-none rounded-circle mr-3">
                                    <i class="fa fa-bars"></i>
                                </button>

                                {/* <!-- Topbar Search --> */}
                                <form
                                    class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                            aria-label="Search" aria-describedby="basic-addon2" />
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                {/* <!-- Topbar Navbar --> */}
                                <ul class="navbar-nav ml-auto">

                                    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                                    <li class="nav-item dropdown no-arrow d-sm-none">
                                        <Link class="nav-Link dropdown-toggle" to="#" id="searchDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-search fa-fw"></i>
                                        </Link>
                                        {/* <!-- Dropdown - Messages --> */}
                                        <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                            aria-labelledby="searchDropdown">
                                            <form class="form-inline mr-auto w-100 navbar-search">
                                                <div class="input-group">
                                                    <input type="text" class="form-control bg-light border-0 small"
                                                        placeholder="Search for..." aria-label="Search"
                                                        aria-describedby="basic-addon2" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-primary" type="button">
                                                            <i class="fas fa-search fa-sm"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>

                                    {/* <!-- Nav Item - Notification --> */}
                                    <NotificationComponent />

                                    {/* <!-- Nav Item - User Information --> */}
                                    <li class="nav-item dropdown no-arrow">
                                        <Link class="nav-Link dropdown-toggle" to="#" id="userDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="mr-2 d-none d-lg-inline text-gray-600 small">{student.fname}</span>
                                            <img class="img-profile rounded-circle" alt='abc.jpg' width='30px'
                                                src={`data:image/png/jpg/jpeg;base64,${student.image}`} />
                                        </Link>

                                        {/* for the login notification */}
                                        <div class="toast-container position-fixed bottom-0 end-0 p-3">
                                            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                                <div class="toast-header">
                                                    <img width="20px" src="https://cdn-icons-png.flaticon.com/128/263/263417.png" class="rounded me-2"
                                                        alt="..." />
                                                    <strong class="me-auto text-white">Favorite Meal</strong>
                                                    <small class="text-white">Now</small>
                                                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                                </div>
                                                <div class="toast-body text-center">
                                                    <i class="fa-solid fa-check"></i>&nbsp;Meal Added Successfully
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Dropdown - User Information --> */}
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                            aria-labelledby="userDropdown">
                                            <Link class="dropdown-item" to="#">
                                                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Profile
                                            </Link>
                                            <Link class="dropdown-item" to="#">
                                                <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Settings
                                            </Link>
                                            <Link class="dropdown-item" to="http://localhost:9096/home">
                                                <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Studen Page
                                            </Link>
                                            <div class="dropdown-divider"></div>
                                            <Link class="dropdown-item" to="https://ninjassite-production.up.railway.app/loginPage" data-toggle="modal" data-target="#logoutModal">
                                                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Logout
                                            </Link>
                                        </div>
                                    </li>

                                </ul>

                            </nav>
                            {/* <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div class="container-fluid">

                                {/* <!-- Page Heading --> */}
                                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                                    <Link to="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                        class="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
                                </div>

                                {/* <!-- Content Row --> */}
                                <SummaryComponent />
                                {/* <!-- Content Row --> */}

                                <div class="row">

                                    {/* <!-- Area Chart --> */}
                                    <div class="col-xl-8 col-lg-7">
                                        <div class="card shadow mb-4">
                                            {/* <!-- Card Header - Dropdown --> */}
                                            <div
                                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                            </div>
                                            {/* <!-- Card Body --> */}
                                            <div class="card-body">
                                                <div class="chart-area">
                                                    <LineChartComponent />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Pie Chart --> */}
                                    <div class="col-xl-4 col-lg-5">
                                        <div class="card shadow mb-4">
                                            {/* <!-- Card Header - Dropdown --> */}
                                            <div
                                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                            </div>
                                            {/* <!-- Card Body --> */}
                                            <div class="card-body">
                                                <div class="chart-pie pt-4 pb-2">
                                                    <PieChartComponent />
                                                </div>
                                                <div class="mt-4 text-center small">
                                                    <span class="mr-2">
                                                        <i class="fas fa-circle text-primary"></i> Direct
                                                    </span>
                                                    <span class="mr-2">
                                                        <i class="fas fa-circle text-success"></i> Social
                                                    </span>
                                                    <span class="mr-2">
                                                        <i class="fas fa-circle text-info"></i> Referral
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Content Row --> */}
                                <div class="row">

                                    {/* <!-- Content Column --> */}
                                    <div class="col-lg-6 mb-4">

                                        {/* <!-- Project Card Example --> */}
                                        <div class="card shadow mb-4">
                                            <div class="card-header py-3">
                                                <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                                            </div>
                                            <div class="card-body">
                                                <h4 class="small font-weight-bold">Server Migration <span
                                                    class="float-right">20%</span></h4>
                                                <div class="progress mb-4">
                                                    <div class="progress-bar bg-danger a2" role="progressbar"></div>
                                                </div>
                                                <h4 class="small font-weight-bold">Sales Tracking <span
                                                    class="float-right">40%</span></h4>
                                                <div class="progress mb-4">
                                                    <div class="progress-bar bg-warning a3" role="progressbar" ></div>
                                                </div>
                                                <h4 class="small font-weight-bold">Customer Database <span
                                                    class="float-right">60%</span></h4>
                                                <div class="progress mb-4">
                                                    <div class="progress-bar a4" role="progressbar"></div>
                                                </div>
                                                <h4 class="small font-weight-bold">Payout Details <span
                                                    class="float-right">80%</span></h4>
                                                <div class="progress mb-4">
                                                    <div class="progress-bar bg-info a5" role="progressbar"></div>
                                                </div>
                                                <h4 class="small font-weight-bold">Account Setup <span
                                                    class="float-right">Complete!</span></h4>
                                                <div class="progress">
                                                    <div class="progress-bar bg-success a6" role="progressbar"></div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>


                                </div>

                            </div>
                            {/* <!-- /.container-fluid --> */}

                        </div>
                        {/* <!-- End of Main Content --> */}

                    </div>
                    {/* <!-- End of Content Wrapper --> */}

                </div>
                {/* <!-- End of Page Wrapper --> */}

                {/* <!-- Scroll to Top Button--> */}
                <Link class="scroll-to-top rounded" to="#page-top">
                    <i class="fas fa-angle-up"></i>
                </Link>

                {/* <!-- Logout Modal--> */}
                <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div class="modal-footer">
                                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <Link class="btn btn-primary" to="login.html">Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </body>
        </>
    )
}

export default Dashboard