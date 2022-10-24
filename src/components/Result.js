import React, { useState, useEffect } from 'react'
import './Result.css'


function Result() {
    const [data, setData] = useState([]);

    useEffect(() => {

        const loadData = async () => {
            const res = await JSON.parse(localStorage.getItem("pollData"));
            setData(res);
        }

        loadData();

    }, [])

    let ans = data.map(ele => {
        if (ele?.point) {
            return ele;
        } else {
            const temp = { ...ele, point: 0 };
            return temp;

        }
    })

    ans = ans.sort((a, b) => b.point - a.point)


    return (
        <div className='tables'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Rank</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Point</th>
                    </tr>
                    <hr/>
                </thead>
                <tbody>
                    {
                        ans.map((data, index) => {

                            return (
                                <>
                                <tr key={index}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{data.dishName}</td>
                                    <td>{data.point}</td>
                                </tr>
                                <hr/>
                                </>
                            )

                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Result