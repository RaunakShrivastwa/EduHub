import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

function PieChartComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    //  for the gett All Products
    const loadUser = async () => {
        const result = await axios.get("http://localhost:9096/getIncome");
        setData(result.data);
    }

    const COLORS = ['#0088FE', '#00C49F', '#36B9CC'];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart >
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="amount"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS?.length]} />
                    ))}
                </Pie>

            </PieChart>
        </ResponsiveContainer>
    )
}

export default PieChartComponent