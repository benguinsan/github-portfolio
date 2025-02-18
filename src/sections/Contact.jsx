import { useRef } from "react"


const Contact = () => {
  return (
    <section className="c-space my-20" id="contact">
        <div className="relative min-h-screen flex items-center justify-center flex-col">

        <div className="contact-container">
          <h3 className="head-text">Contact Me</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form className="mt-12 flex flex-col space-y-7">
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

            <button className="field-btn" type="submit">
                Send messenge
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact