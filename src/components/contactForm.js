import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0rj40qc', 'template_ysw6sno', form.current, 'UQA8JW6gi1p3KVYWM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

     return (
         <section className="bg-light">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-10 mx-auto text-dark mb-4">
                    
                         <form id="contact-form" onSubmit={sendEmail} className="mb-5">
                             <div>
                                 <input
                                     className="form-control"
                                     placeholder="Name"
                                     type="text"
                                     name="user_name"
                                 />
                             </div>
                             <div>
                                 <input
                                     className="form-control"
                                     placeholder="Email"
                                     type="email"
                                     name="user_email"
                                 />
                             </div>
                             <div>
                                 <textarea
                                     className="form-control"
                                     placeholder="Message"
                                     name="message"
                                     rows="5"
                                 />
                             </div>
                             <div className="text-center">
                                 <button type="submit" className="btn btn-primary btn-xl js-scroll-trigger" value="Send">Submit</button>
                             </div>
                         </form>
                         <h4>
                             Email:  <a href="mailto:Dennis.AH.Littlefield@gmail.com"> Dennis.AH.Littlefield@gmail.com</a>
                         </h4>
                     </div>
                 </div>
             </div>
         </section>
     );
 }
export default ContactUs



