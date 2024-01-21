import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {

  
  const [name , setName] = useState<string>();
  const [email , setEmail] = useState<string>();
  const [messsage , setMessage] = useState<string>();


    const form = useRef<HTMLFormElement>(null);
  
    const sendEmail = (e : any) => {
      e.preventDefault();



      if(name && email && messsage){
        
        if(form.current){
          emailjs.sendForm('service_w4xnwtr', 'template_1o4ngnr', form.current, 'abV8NRXIZ8eRj_2YR')
          .then((result) => {
            
            if(result.text === 'OK'){
              Swal.fire({
                title: "Your message have sent !",
                text: "I will reply you as soon as",
                icon: "success"
              });
            }
          }, (error) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
          });
        }


      } 
      else{
        Swal.fire("Please fill the informations !");
        
      }


    };

    console.log(form.current);
        


  return (
    <section className='contactPage'>

      <div className="formContainer">

        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" onChange={(e)=>setName(e.target.value)}/>
          <label>Email</label>
          <input type="email" name="user_email"  onChange={(e)=>setEmail(e.target.value)}/>
          <label>Message</label>
          <textarea name="message"  onChange={(e)=>setMessage(e.target.value)}/>
          <button className='btn' type="submit"> Send </button>
        </form>

      </div>

    </section>
  )
}

export default Contact