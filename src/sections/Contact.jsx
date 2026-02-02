import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Validate environment variables
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error('Email service is not configured. Please check environment variables.');
      return;
    }

    setLoading(true);

    // sendForm nhận: serviceId, templateId, form element hoặc formData, publicKey
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        toast.success('Thank you! Your message has been sent successfully.');
        // Reset form sau khi gửi thành công
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        toast.error('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <section className="c-space my-20" id="contact">
        <div className="relative min-h-screen flex items-center justify-center flex-col">

        <div className="contact-container">
          <h3 className="head-text">Contact Me</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={form} onSubmit={sendEmail} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                required
                className="field-input"
                placeholder="name"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                required
                className="field-input"
                placeholder="example@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                required
                rows={5}
                className="field-input"
                placeholder="messenge..."
              />
            </label>

            <button 
              className="field-btn" 
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact