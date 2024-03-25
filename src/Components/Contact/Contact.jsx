import React from "react";
import "./Contact.css";
import Message from '../../assets/msg-icon.png'
import Mail_icon from '../../assets/mail-icon.png'
import Phone_icon from '../../assets/phone-icon.png'
import Location_icon from '../../assets/location-icon.png'
import White_arrow from '../../assets/white-arrow.png'
 
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "24a6ed2d-b64d-4381-b4f0-c30e6bcc8467");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      
    }
  };



  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={Message}/> </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          esse distinctio? Labore, aliquid ducimus. Reiciendis tenetur eum,
          facilis omnis fugit ex placeat, impedit repudiandae, praesentium
          quidem facere quo voluptas ullam.
        </p>
        <ul>
            <li><img src={Mail_icon} alt="" /> Contact@gmail</li>
            <li><img src={Phone_icon} alt="" /> +92 332 8877565</li>
            <li><img src={Location_icon} alt="" /> House no: 123, Street 658 London </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder="Enter your name..." required/>
            <label htmlFor="">Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number..." required/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="6" placeholder="Enter your message..." required></textarea>
            <button type="submit" className="btn dark-btn">Submit now <img src={White_arrow} /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
