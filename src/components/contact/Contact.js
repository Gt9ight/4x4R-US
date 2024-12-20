// ContactForm.js
import React, { useState } from 'react';
import './contact.css'
import success from './success.jpg'

const ContactForm = () => {
  const [result, setResult] = React.useState("");
  const [selectedValue, setSelectedValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    document.querySelector('.submit-btn').classList.add('loading');
    const formData = new FormData(event.target);

    formData.append("access_key", "9cf04c75-7bac-4652-9754-0effc77d6aaa");
    formData.append("Service Selected", selectedValue);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    document.querySelector('.submit-btn').classList.remove('loading');

    if (data.success) {
      setIsSubmitted(true);
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setIsSubmitted(false)
        setResult("");
        setSelectedValue('');
      }, 10000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div className="contact-form-container">

      {!isSubmitted ? (

      <form onSubmit={onSubmit} className="contact-form">
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your Full Name" name="Name" required/>
        <input type="email" placeholder="Your Email" name="Email" required/>
        <input type="tel" placeholder="Your Phone Number" name="Phone" required/>
        <h3>Tell us about your vehicle.</h3>
        <input type="text" placeholder="Make" name="Make" required/>
        <input type="text" placeholder="Model" name="Model" required/>
        <input type="text" placeholder="Year" name="Year" required/>

        <h3>What can we do for you?</h3>
    <select className='form-option' value={selectedValue} onChange={handleChange}>
      <option value="">Please select desired service</option>
      <option value="Suspension">Suspension</option>
      <option value="Bumper">Bumper, Fenders, Etc.</option>
      <option value="Drivetrain">Drivetrain</option>
      <option value="Tires, Wheels, balance, Etc.">Tires, Wheels, Balance, Etc.</option>
    </select>
    
    <textarea name="message" placeholder="Your Message" required></textarea>

    <button className='submit-btn' type="submit">
  {result === "" ? "Submit Form" : result}
</button>

</form>
        ) : (
          <div className="success-message">
            <p>Form Submitted Successfully</p>
            <img src={success} alt="Success" className="success-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
