import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="flex justify-center py-5">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <Link to="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img className="rounded" src={require(`../service/${props.image}`)} alt="Image" />
                    </Link>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {props.desc}
                        </p>
                        <button type="button" className=" inline-block px-6 py-2.5 bg-sky-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-skye-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Card;