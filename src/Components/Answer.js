import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";


const Answer = () => {
    const [answers,setAnswer] = useState([]);
    const [IsLoading,setLoading] = useState(false);
    const [error,setError] = useState(0);
    const {questioId} = useParams();


    const getData = () => {
        setLoading(true);
        axios.get(`http://localhost/ivlo/api/answer/${questioId}`)
        .then(response => {
            setAnswer(response.data)
            setLoading(false);
        })
        .catch(error => {
            setError("Sorry, something went wrong....");
            setLoading(false);
        })

    }


    useEffect(() => {
        getData();
    },[]);

    if(error) {
        return <div>{error}</div>
    }
    return (
        <>
        <div className="py-9 font-semibold text-3xl text-center uppercase opacity-75">
            <h1>   {IsLoading == true ? 'Loading....' : 'Question Answer '}</h1>        
            <hr className="w-20 mx-auto font-semibold border-1 border-solid border-sky-900 mt-2"></hr>
        </div>
        
        {
            answers.map((result) => {
                return (
                    <div className="flex ring-1 font-serif mx-2 mb-2 bg-slate-50">
                    <div className="mx-2 first-letter:font-extrabold"><div dangerouslySetInnerHTML={{ __html: result.body }} /></div>
                    </div> 
                )
            })
        }
        </>
    )
}


export default Answer;


