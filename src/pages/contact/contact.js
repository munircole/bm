import React, {  useState }  from 'react'
import { send } from 'emailjs-com';
import { useStateContext } from '../../context/state';



import './contact.css'

export default function Contact()  {

      
    const {  notify } = useStateContext();

    const [toSend, setToSend ] = useState({
        from_name: '',
        from_email: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        notify('Submitting .....');

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
            <h1 className="text-center" id="header-text"> Mail Us </h1>
            <h3 className="text-center">We Would Love To Hear From You!</h3>
            <p className="text-center">If you have any questions, please call us or fill in the form below and we will get back to you very soon. </p>

            <div className="contactForm">
                <div className="col-lg-6 col-sm-12">
                <form   onSubmit={onSubmit}>
                 <div className="row">
                    <div className="form-group  col-sm-12">
                         <input  name="from_name" required id="name" type="text" className="form-control" placeholder="Your Name..." value={toSend.from_name}  onChange={handleChange} />
                    </div>

                    <div className="form-group  col-sm-12">
                         <input  name="from_email" required id="email" type="email" className="form-control" placeholder="Email..."   value={toSend.from_email} onChange={handleChange}/>
                    </div>

                    <div className="form-group col-sm-12">
                        <textarea  name="message" required id="message" type="message" className="form-control" placeholder="Message..." value={toSend.message} onChange={handleChange}></textarea >
                    </div>

                    <div className="button-div">
                        <button type="submit" className="button">Send Message</button>

                    </div>

                </div>

                </form>
                </div>
            </div>

        </div >
        );
    
}

