import React, { useState, useEffect } from "react";

const initialState = {
    loading: true,
    data: {
        results: [{
            question: "How is this project funded?",
            context: "How",
            answer: "Blah blah"
        }]
    },
    error: null
};

export default function FAQ() {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [results,setResults] = useState(initialState.data.results);

    useEffect(() => {
        if (loading) {
            // Use local initial state if no data is available
            setResults(initialState.data.results);
            setLoading(false);
        }
    }, [loading]);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
      <div
          className={'matrix'}>
            <h1> Ask a question </h1>
            <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" />
            {
                results.map((result, index) => {
                    return (
                        <div key={index}>
                            <p>{result.question}</p>
                            <p>{result.answer}</p>
                        </div>
                    )
                })
            }
            <div className="button" onClick={() => setFilteredResults(results.filter(result => result.question.toLowerCase().includes(searchTerm.toLowerCase())))}>Search</div>
            <div className="button" onClick={() => setFilteredResults(results)}>Show all</div>
          </div>
    );
  }
  