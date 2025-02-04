// import React, { useState } from 'react'
// import Footerbee from './Footerbee'
// import Navbar from './Navbar'
// import './Contact.css'
// import emailjs from '@emailjs/browser'
// const Contact = () => {
//   const [formData, setformData]=useState({
//     Name: '',
//     Email: '',
//     Message: '',
//   });
//   const [status, setStatus]= useState('');

//   const handleChange = (e) => {
//     setformData({...formData, [e.target.name]: e.target.value});
//   };

//   const formSubmit = async(e) =>{
//     e.preventDefault();
//     const service_id ='service_4vpbuwu'
//     const template_id ='template_84d5v7h'
//     const publickey = 'OltGCgwvsPButKeVD'

//     try{
//       await emailjs.send(service_id, template_id, formData, publickey);
//       setStatus('Message sent successfully');
//       setformData({Name: '', Email: '', Message: '',});
//     }catch (error){
//       setStatus('Failed to send message,please try again.');
//       console.error('emailJS Error', error);
//     }
    
//   }
//   return (
//     <div>
//       <Navbar/>
//       <div className="reach-out">
//         <div className="reachout-box">
//           <div className="reachoutdetails">
//             <h1>Contact Us</h1>
//             <p>For any issues, questions, or assistance, our dedicated customer support team is here to help.</p>
//           <form onSubmit={formSubmit}>
//             <input type="text" onChange={handleChange} name='Name' value={formData.Name} placeholder='Name' required/>
//             <input type="text" onChange={handleChange} name='Email' value={formData.Email} placeholder='Email' required/>
//             <input type="text" onChange={handleChange} name='Message' value={formData.Message} placeholder='Message'required/>
//             <button  className='l1'><h2>submit</h2></button>
//           </form>
//           </div>
//           {
//             status &&(
//               <p className='styling'>
//                 {status}
//               </p>
//             )
//           }
//         </div>
//       </div>
//       <Footerbee/>
//     </div>
//   )
// }

// export default Contact


import React, { useState } from 'react';
import Footerbee from './Footerbee';
import Navbar from './Navbar';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log({
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });

    try {
      await emailjs.send(service_id, template_id, formData, publicKey);
      setStatus('Message sent successfully');
      setFormData({ Name: '', Email: '', Message: '' });
    } catch (error) {
      setStatus('Failed to send message, please try again.');
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="reach-out">
        <div className="reachout-box">
          <div className="reachoutdetails">
            <h1>Contact Us</h1>
            <p>For any issues, questions, or assistance, our dedicated customer support team is here to help.</p>
            <form onSubmit={formSubmit}>
              <input
                type="text"
                onChange={handleChange}
                name="Name"
                value={formData.Name}
                placeholder="Name"
                required
              />
              <input
                type="text"
                onChange={handleChange}
                name="Email"
                value={formData.Email}
                placeholder="Email"
                required
              />
              <input
                type="text"
                onChange={handleChange}
                name="Message"
                value={formData.Message}
                placeholder="Message"
                required
              />
              <button className="l1">
                <h2>Submit</h2>
              </button>
            </form>
          </div>
          {status && <p className="styling">{status}</p>}
        </div>
      </div>
      <Footerbee />
    </div>
  );
};

export default Contact;