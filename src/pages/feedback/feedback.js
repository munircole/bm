import React, { useState } from 'react'
import { send } from 'emailjs-com';
import { useStateContext } from '../../context/state';



import './feedback.css'

export default function Feedback() {

    const {  notify } = useStateContext();

    const [toSend, setToSend ] = useState({
        from_name: '',
        from_email: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        notify('Submitting Feedback .....');

        e.preventDefault();
        send(
            'service_u8mty5j',
            'template_vkdplhr',
            toSend,
            'Cdi0Js6FThaoFRZGu'
        )
            .then((response) => { 
              console.log('SUCCESS!', response.status, response.text);
              notify('Sent!');

            })
            .catch((err) => {
              console.log('FAILED...', err);
              notify('Form Not Sent!');

           });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
   

    return (

        <div className="container">
            <h1 className="text-center" id="header-text"> Give Us Feedback </h1>
            <h3 className="text-center">We Would Love To Hear From You!</h3>
            <p className="text-center">Please feel free to give us suggestion or feedback on your experience on our site, this would help us improve on our product and features . </p>

            <div className="contactForm">
                <div className="col-lg-6 col-sm-12">
                <form  onSubmit={onSubmit}>
                 <div className="row">
                    <div className="form-group  col-sm-12">
                         <input  name="from_name" required id="name" type="text" className="form-control" placeholder="Your Name..."  value={toSend.from_name}  onChange={handleChange} />
                    </div>

                    <div className="form-group  col-sm-12">
                         <input  name="from_email" required id="email" type="email" className="form-control" placeholder="Email..."  value={toSend.from_email}  onChange={handleChange}  />
                    </div>

                    <div className="form-group col-sm-12">
                        <textarea  name="message" required id="feedback" type="feedback" className="form-control" placeholder="feedback..." value={toSend.message}  onChange={handleChange}  ></textarea>
                    </div>

                    <div className="button-div">
                        <button type="submit" className="button">Send</button>

                    </div>

                </div>

                </form>
                </div>
            </div>

        </div >
        )
    
}

