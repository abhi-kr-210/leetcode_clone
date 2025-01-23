import React, { useState } from 'react';
import "../styles/DashboardStyle.css";
import Header from './Header';
import data from "../Data.json";
import { useNavigate } from 'react-router-dom';
function Dashboard() {
    const [value, setValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;

    // Filter data based on search input
    const filteredData = data.filter((d) =>
        d.title.toLowerCase().includes(value.toLowerCase())
    );
    const navigate = useNavigate(); // Initialize navigate
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = filteredData.slice(firstIndex, lastIndex);  
    const npage = Math.ceil(filteredData.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function changeCPage(id) {
        setCurrentPage(id);
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <section className='dashboard_container'>
            <Header />
            <div className='location_input_container'>
                <input
                    type="text"
                    value={value}
                    placeholder='Search Your Questions'
                    onChange={(e) => {
                        setValue(e.target.value);
                        setCurrentPage(1); // Reset to the first page when searching
                    }}
                />
            </div>
            <div className='data_table'>
                <table className='table'>
                    <thead className='tableheader' style={{ color: "rgb(228 237 213)", fontWeight: "400", fontSize: "1.1rem" }}>
                        <tr>
                            <th style={{ padding: "10px", backgroundColor: "rgb(18 36 40)" ,color: "rgb(228 237 213)"}}>ID</th>
                            <th style={{ padding: "10px", backgroundColor: "rgb(18 36 40)" ,color: "rgb(228 237 213)"}}>NAME</th>
                            <th style={{ padding: "10px", backgroundColor: "rgb(18 36 40)" ,color: "rgb(228 237 213)"}}>DIFFICULTY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((d, i) => (
                           
                                  
                            <tr key={i} className="table_rows" style={{ backgroundColor: "#01456e" }}>
                                <td style={{ padding: "16px", backgroundColor: "rgb(42, 66, 83)", color: "white" }}>{d.id}</td>
                                <td
                                style={{ padding: "16px", backgroundColor: "rgb(42, 66, 83)", color: "white", cursor: "pointer" }}
                                onClick={() => navigate('/question-details', { state: { question: d } })}
                            >
                                {d.title}
                            </td>
                                <td style={{ padding: "16px", backgroundColor: "rgb(42, 66, 83)", color: "white" }}>{d.difficulty}</td>
                            </tr>
                            
                            
                        ))}
                    </tbody>
                </table>
                <div className='d-flex justify-content-center align-items-center'>
                    <nav>
                        <ul className="pagination">
                            <li className="page-item">
                                <a href="#" className="page-link" onClick={prePage}>Prev</a>
                            </li>
                            {numbers.map((n, i) => (
                                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                    <a href="#" className="page-link" onClick={() => changeCPage(n)}>{n}</a>
                                </li>
                            ))}
                            <li className="page-item">
                                <a href="#" className="page-link" onClick={nextPage}>Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
