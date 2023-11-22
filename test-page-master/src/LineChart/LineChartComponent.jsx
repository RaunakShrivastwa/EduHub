import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function LineChartComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    //  for the gett All Products
    const loadUser = async () => {
        const result = await axios.get("http://localhost:9096/getPay");
        setData(result.data);
    }

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="key" stroke="black" />
                    <YAxis stroke="black" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="amount" stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>

        </>
    )
}

export default LineChartComponent