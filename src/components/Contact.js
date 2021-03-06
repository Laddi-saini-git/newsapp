import React, { useState } from "react";
import { Chart } from 'react-charts'
import { motion } from "framer-motion"
import { useRef } from "react";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // State Submit , Error
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const [color, setColor] = useState("black");
  const colorchange = () => {
    setColor("red");
  };

  // Handle fields
  const handlename = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  const handleemail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handlephone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };
  const handlemessage = (e) => {
    setMessage(e.target.value);
    setSubmitted(false);
  };

  // handle form subbmission
  const handlesubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || message === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div className="sucess" style={{ display: submitted ? "" : "none" }}>
        <h5>{name} successfully registered !</h5>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? "" : "none" }}>
        <p className="my-4">Please enter all the fields</p>
      </div>
    );
  };


  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
  const constraintsRef = useRef(null);

  const myName = useRef(null);

  const usingRef = (e) => {
    e.preventDefault();
    const getName = myName.current.value;
    // myName.current.focus();
    myName.current.value='WebLab';
    // myName.current.style.color='blue';
    // console.log(getName);
  }

  return (
    <>
      <div className="container my-4">
        <h1 className="text-center">Contact Us</h1>
        <div className="col-md-4 my-5 offset-md-4">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                value={name}
                onChange={handlename}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleemail}
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={phone}
                onChange={handlephone}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                value={message}
                id="message"
                onChange={handlemessage}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handlesubmit}
            >
              Submit
            </button>
          </form>
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>
        </div>
        <motion.div className="container" ref={constraintsRef}>
          <motion.h3 className="item" drag dragConstraints={constraintsRef} style={{ color: color }}>My color is {color}</motion.h3>
        </motion.div>
        
        <button style={{padding: '0.5em' }} onClick={() => colorchange()}>I can change color</button> <br/> <br/>
        <div style={{width: '100%', height: '300px' }}>
          <Chart data={data} axes={axes} />
        </div>

        <form action="" onSubmit={usingRef}>
          <input type="text" ref={myName}/>
          <button>Submit</button>
        </form>
        

      </div>
    </>
  );
};

export default Contact;
