import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function NotificationComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    //  for the gett All Products
    const loadUser = async () => {
        const result = await axios.get("http://localhost:9096/getNotification");
        setData(result.data);
    }

    console.log(data);
    return (
        <>
            <li class="nav-item dropdown no-arrow mx-1">
                <Link class="nav-Link dropdown-toggle" to="#" id="alertsDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-bell fa-fw"></i>
                    {/* <!-- Counter - Alerts --> */}
                    <span class="badge badge-danger badge-counter">{data.length}+</span>
                </Link>
                {/* <!-- Notifications--> */}
                <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in noti "
                    aria-labelledby="alertsDropdown">
                    <h6 class="dropdown-header">
                        Notification
                    </h6>
                    <ul style={{ listStyle: 'none', padding: '0px' }} className='mess'>
                        {
                            data.map((temp) => (
                                <li>
                                    <Link class="dropdown-item d-flex align-items-center" to="#">
                                        <div class="mr-3">
                                            <div class="icon-circle bg-success">
                                                <i class="fas fa-donate text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="small text-gray-500">{temp.date}</div>
                                            {temp.message}
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }



                    </ul>
                </div>
            </li>

            <div class="topbar-divider d-none d-sm-block"></div>
        </>
    )
}

export default NotificationComponent