import { Container } from "react-bootstrap";
import { Form,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../custom.css';
import { useRef } from "react";
const Contact = () => {


  const name = useRef(null);
  const email = useRef(null);
  const subject = useRef(null);
  const message = useRef(null);


  const submitHandler = (event) => {
      event.preventDefault();
      //alert(email?.current?.value);

      alert(event.target[0].value);
  }
    return (
      <>

        <div className="py-9 font-semibold  text-3xl text-center uppercase opacity-75">
            <h1>Contact Us</h1>        
            <hr className="w-20 mx-auto font-semibold border-1 border-solid border-sky-900 mt-2"></hr>
        </div>

        <div className="container bg-white shadow-md rounded-lg mx-auto mb-3">
          <form onSubmit={submitHandler}>
            <div className="row">

              <div className="col-md-6 py-3">
                <div className="form-group">
                  <label className="font-normal">First Name :</label><br />
                  <input type='text' className="form-control mt-1" placeholder="John" ref={name}></input>
                </div>
              </div>

              <div className="col-md-6 py-3">
                <div className="form-group">
                  <label className="font-normal">E-mail :</label><br />
                  <input type='text' className="form-control mt-1" placeholder="Doe" ref={email}></input>
                </div>
              </div>

              <div className="col-md-12 py-3">
                <div className="form-group">
                  <label className="font-normal">Subject :</label> <br />
                  <input type='text' className="form-control mt-1" placeholder="Hello Sir...." ref={subject}></input>
                </div>
              </div>

              <div className="col-md-12 py-3">
                <div className="form-group">
                  <label className="font-normal">Message :</label> <br />
                  <textarea className="form-control mt-1" placeholder="Message" ref={message}></textarea>
                </div>
              </div>

              <div className="col-md-12 py-3">
                <div className="form-group">
                  <input type="submit" value="Send" className="h-10 w-32 bg-sky-900 font-serif text-white hover:bg-sky-700 " />
                </div>
              </div>

            </div>
          </form>
        </div>
          
      </>
    );
  }; 
  
  export default Contact; 