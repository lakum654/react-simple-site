import React from "react"
import Slider from "./Slider";
import Card from "./Card";

const Home = () => {

    let services = [
        {
            title:'Sample 1',
            desc:"Some quick example text to build on the card title and make up the bulk of the card Information",
            image:'1.jpg'
        },
        {
            title:'Sample 2',
            desc:"Some quick example text to build on the card title and make up the bulk of the card Information",
            image:'2.jpg'
        },
        {
            title:'Sample 3',
            desc:"Some quick example text to build on the card title and make up the bulk of the card Information",
            image:'3.jpg'
        },
        {
            title:'Sample 4',
            desc:"Some quick example text to build on the card title and make up the bulk of the card Information",
            image:'4.jpg'
        },
        {
            title:'Sample 5',
            desc:"Some quick example text to build on the card title and make up the bulk of the card Information",
            image:'5.jpg'
        },
        {
            title:'Sample 6',
            desc:"Some quick example text to build on the card title and make up the bulk of the card Information",
            image:'6.jpg'
        },
];
    return (
        <>
        <Slider></Slider>

        <div className="py-9 font-semibold  text-3xl text-center uppercase opacity-75">
            <h1>Services</h1>        
            <hr className="w-20 mx-auto font-semibold border-1 border-solid border-sky-900 mt-2"></hr>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
        
        {
            services.map((service) => <Card title={service.title} desc={service.desc} image={service.image}/>)
        }
        </div>
        </>
    );
}

export default Home;
