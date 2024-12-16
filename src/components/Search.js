import { useState } from 'react';

function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const handleSearch = () => {
        if (!query.trim()) {
            setError("Please enter a valid search query.");
            return;
        }
        setError("");

        
        fetch(`https://localhost:44300/api/Employees/search?query=${query}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length === 0) {
                    setError("No employees found.");
                } else {
                    setResults(data);
                }
            })
            .catch((err) => {
                console.error("Error fetching search results:", err);
                setError("Something went wrong. Please try again.");
            });
    };

    return (
        <div className='container mx-auto text-center' style={{ padding: '20px' }}>
            <h2 className='Title my-5'>Search Employees</h2>
            <div className='d-flex justify-content-center'>
                <input
                    type="text"
                    placeholder="Enter search query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ padding: '10px', marginRight: '10px'}}
                    className='form-control'
                />
                <button onClick={handleSearch} style={{ padding: '10px 20px' }} className='btn btn-outline-primary'>
                    Search
                </button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div style={{ marginTop: '20px' }}>
                {results.length > 0 && (
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '50px' }}>
                        <thead>
                            <tr>
                                <th style={{ padding: '10px', border: '1px solid #ddd' , backgroundColor:'#156494'}}>First Name</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' , backgroundColor:'#156494'}}>Last Name</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' , backgroundColor:'#156494'}}>Gender</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' , backgroundColor:'#156494'}}>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((employee) => (
                                <tr key={employee.ID}>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{employee.FirstName}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{employee.LastName}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{employee.Gender}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{employee.Salary} $</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default SearchPage;