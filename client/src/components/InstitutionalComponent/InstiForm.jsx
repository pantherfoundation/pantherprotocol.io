import {useState} from 'react'
import FormWrapper from './Styles/InstiFormStyles'
import {Card } from 'antd'
import axios from 'axios';
import API_URL from '../../config';
import { Spin } from 'antd';
import styled from 'styled-components'


const LeftGrad = styled.div`

position:absolute;
height:60%;
width:65%;
opacity:0.35;
background:radial-gradient(circle at center, rgba(34, 36, 80, 1) 0, rgba(34, 36, 80, 0.5) 50%, rgba(34, 36, 80, 0)100%);
filter:blur(100px);
bottom:0%;
z-index:1;
overflow:hidden;
left:-30%;

// position:absolute;
// left:-10%;
// top:-40%;
// z-index:1;
// transform: translate3d(0, 0, -100px);



// img{
//     width:100%;
//     height:100%;
// }


@media screen and (min-width: 768px)and (max-width: 1050px) {
  top:5%;
  height:120%;
  left:-10%;
  opacity:0.3;
}

@media screen and (min-width: 451px)and (max-width: 767px) {
  top:0%;
  height:150%;
  left:-10%;
  opacity:0.3;

}

@media screen and (max-width: 451px) {
  top:5%;
  height:150%;
  left:-10%;
  opacity:0.3;

}

`


const RightGrad = styled.div`

position:absolute;
height:60%;
width:60%;
opacity:0.35;
background:radial-gradient(circle at center, rgba(34, 36, 80, 1) 0, rgba(34, 36, 80, 0.5) 50%, rgba(34, 36, 80, 0)100%);
filter:blur(100px);
bottom:30%;
right:-35%;
z-index:1;
overflow:hidden;




img{
    width:100%;
    height:100%;
}

@media screen and (min-width: 768px)and (max-width: 1050px) {
  top:-20%;
  height:80%;
  right:-15%;
  opacity:0.3;

}

@media screen and (min-width: 451px)and (max-width: 767px) {
  top:-50%;
  height:80%;
  right:-15%;
  opacity:0.3;

}

@media screen and (max-width: 451px) {
  top:-30%;
  height:80%;
  right:-15%;
  opacity:0.3;

}

`



const InstiForm = () => {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSuccess, setFormSuccess] = useState(null);
  const [validText, setValidText] = useState("l");
  const [loader, setLoader] = useState(false);

  const isValidBusinessEmail = (email) => {
    const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const emailDomain = email.split('@')[1];
    return emailDomain && !commonDomains.includes(emailDomain);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!name || !businessName || !email || !message) {
      setValidText("All fields are mandatory.");
      setFormSuccess(false);
      return;
    }

    if (!isValidBusinessEmail(email)) {
      setValidText("Please use a business email address.");
      setFormSuccess(false);
      return;
    }

    setLoader(true);

    const userData = {
      user_name: name,
      business_name: businessName,
      user_email: email,
      user_message: message
    };

    const submitForm = async () => {
      try {
        const res = await axios.post(`${API_URL}/institutional-form`, userData);
        if (res.status === 200) {
          setFormSuccess(true);
          setValidText("Thank you for contacting us!");
          setName("");
          setBusinessName("");
          setEmail("");
          setMessage("");
        } else {
          setFormSuccess(false);
          setValidText("Some error occurred, please try again.");
        }
      } catch (e) {
        setFormSuccess(false);
        setValidText("Some error occurred, please try again.");
      } finally {
        setLoader(false);
        setTimeout(() => {
          setFormSuccess(null);
          setValidText("l");
        }, 4000);
      }
    };
    submitForm();
  };

  return (
    <div className='relative'>
      <RightGrad></RightGrad>
      <FormWrapper>
        <div className='container'>
          <Card className='form-container'>
            <h3>Contact Us</h3>
            <p>Complete the form below to reach our support team.</p>

            {loader
              ? <Spin />
              : formSuccess === true
                ? <h6 style={{ color: "#7AD8CD" }}>{validText}</h6>
                : formSuccess === false
                  ? <h6 style={{ color: "red" }}>{validText}</h6>
                  : <h6 style={{ color: "transparent", opacity: "0" }}>{validText}</h6>
            }

            <form onSubmit={handleSubmit} className='form-section'>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                name='user_name'
                required
                type='text'
                placeholder='Name'
              />
              <input
                onChange={(e) => setBusinessName(e.target.value)}
                value={businessName}
                name="business_name"
                required
                type='text'
                placeholder='Business Name'
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="user_email"
                required
                type='email'
                placeholder='Business Email'
              />
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name="user_message"
                required
                rows="5"
                placeholder='Message'
              />

              <div className='glow-effects'>
                <button disabled={loader} type='submit'>Get in Touch</button>
              </div>
            </form>
          </Card>
        </div>
      </FormWrapper>
      <LeftGrad></LeftGrad>
    </div>
  );
};

export default InstiForm;