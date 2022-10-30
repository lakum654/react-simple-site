import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


/**
const Question = () => {
    const [question, setQuestion] = useState([]);
    const [pageNo,setPage] = useState(1);
    const [remaine,setRemaine] = useState('');
    let getQuestion = async () => {
        let response = await axios.get('https://api.stackexchange.com/2.3/search?pagesize=20&page='+pageNo+'&order=desc&site=stackoverflow&key=78rjZg2x1Zo7pSqooZLrcg((&sort=relevance&intitle=php&filter=!0Wd8xO50c2XK_lm6WB1xWz1QU');
        setQuestion(response.data.items)
        setRemaine(response.data.quota_remaining);
        console.log(response.data.items);
    }

    useEffect(() => {
        getQuestion();
    }, [pageNo]);
    return (
        <>

<div className="py-9 font-semibold text-3xl text-center uppercase opacity-75">
            <h1>Questions ?</h1>        
            <hr className="w-20 mx-auto font-semibold border-1 border-solid border-sky-900 mt-2"></hr>
        </div>

        <div className="mx-2 bg-slate-100">
            {
                question.map((result,index) => {

                    return (
                        <div className="accordion" id="accordionExample" key={index}>
                        <div className="accordion-item bg-white border border-gray-20" key={index}>
                            <h2 className="accordion-header mb-0" id="headingOne">
                                <button className="relative flex items-center w-full py-4 px-5 font-serif font-thin
                            text-base text-left bg-white  rounded-none transition focus:animate-pulse focus:text-sky-900" type="button" data-bs-toggle="collapse" key={index}
                                    data-bs-target={`#call-${result.question_id}`} aria-expanded="true" aria-controls={`call-${result.question_id}`}>
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>  <p className="indent-2">{result.title} </p>
                                        <div className="anwercount absolute right-2 font-semibold">{result.answer_count} Answers</div>
                                </button>
                            </h2>

                            <div id={`call-${result.question_id}`} className={`accordion-collapse collapse ${index === 0 && 'show'}`} aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body py-4 px-5">
                                    {
                                        result.tags.map((tag) => (
                                            <span className="bg-slate-200 p-2 mx-5 border rounded-md odd:bg-slate-300">{tag}</span>
                                        ))
                                    }
                                    <Link to={`/answer/${result.question_id}`} className="bg-slate-300 p-3 mx-5 rounded-md text-sky-900 font-semibold"><i className="fa fa-eye"></i> View</Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    );
                })
            }

            <div className="py-5">     
                    <div className="flex justify-around">
                        <button type="button" className={`inline-block px-6 py-2.5 bg-sky-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out mx-auto ${pageNo <= 1 && 'hidden'} `} onClick={() => setPage((p) => p - 1)}>Previous</button>
                        <button type="button" className="inline-block px-6 py-2.5 bg-sky-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out mx-auto" onClick={() => setPage((p) => p + 1)}>Next</button>
                    </div>
            </div>
            </div>
        </>
    );
};
*/



const Question = () => {
    
    const [questions,setQuestion] = useState([]);
    const [IsLoading,setLoading] = useState(false);
    const [pageNo,setPage] = useState(1);
    const [links,setLink] = useState([]);
    const [error,setError] = useState(0);
    // const getData = () => {
    //     setLoading(true);
    //     setError("");
    //     fetch('http://localhost/ivlo/api/questions')
    //     .then(response => {
    //         if(response.ok) {
    //             return response.json();
    //         } else {
    //             setLoading(true)
    //             setError("Sorry, Something went to wrong.....");
    //         }
    //     }).then(data => {
    //         setLoading(false);
    //         setQuestion(data)
    //     })
    // }

    const getData = () => {
        setLoading(true);
        axios.get(`http://localhost/ivlo/api/questions?page=${pageNo}`)
        .then(response => {
            setQuestion(response.data.data)
            setLink(response.data.links);
            setLoading(false);
            console.log(response.data.links);
            //alert(response.data.links.lastIndexOf('Next &raquo;'))
           // alert(response.data.current_page);
        })
        .catch(error => {
            setError("Sorry, something went wrong....");
            setLoading(false);
        })

    }

    console.log(questions);
    useEffect(() => {
        getData();
    },[pageNo])

    if(error) {
        return <div>{error}</div>
    }

    return (
        <>
        <div className="py-9 font-semibold text-3xl text-center uppercase opacity-75">
            <h1>   {IsLoading == true ? 'Loading....' : 'Questions ?'}  </h1>        
            <hr className="w-20 mx-auto font-semibold border-1 border-solid border-sky-900 mt-2"></hr>
        </div>

            <div className="p-4 overflow-hidden">
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 font-serif">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">SrNo</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Tags</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">

                                        {
                                            questions.map((result, index) => {
                                                return (
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {index + 1}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {result.title}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            Tag
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <Link to={`/answer/${result.id}`} className="text-sky-900 hover:text-sky-600"> View</Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
            <div className="py-4 grid justify-center">
            <nav aria-label="Page navigation">
                        <ul class="inline-flex space-x-2">
                            {/* <li><button class="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                            </li> */}
                            
                            {
                            links.map((link,index) => {                   
                                if(link.label === '&laquo; Previous') {
                                     return <li><button class="w-20 h-10 text-white transition-colors duration-150 bg-sky-900 border border-r-0 border-indigo-600 rounded-full focus:shadow-outline font-sans text-sm" onClick={() => setPage((p) => index+1)}><div dangerouslySetInnerHTML={{ __html: link.label }}></div></button></li>
                                } else if(link.label === 'Next &raquo;') {
                                    return <li><button class="w-20 h-10 text-white transition-colors duration-150 bg-sky-900 border border-r-0 border-indigo-600 rounded-full focus:shadow-outline font-sans text-sm" onClick={() => setPage((p) => index+1)}><div dangerouslySetInnerHTML={{ __html: link.label }}></div></button></li>
                                }else {
                                    return <li><button class="w-10 h-10 text-white transition-colors duration-150 bg-sky-900 border border-r-0 border-indigo-600 rounded-full focus:shadow-outline font-sans text-sm" onClick={() => setPage((p) => index+1)}><div dangerouslySetInnerHTML={{ __html: link.label }}></div></button></li>
                                }
                                
                                    
                                    
                                

                            })
                        }
                            
                            
                           
                        </ul>
            </nav>
            </div>
        </>
    )
}
export default Question;
