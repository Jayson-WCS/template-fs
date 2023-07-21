import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const notifySuccess = () => {
    toast.success(`Thank's for reaching out !`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notifyError = (errorMessage) => {
    toast.error(errorMessage, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !message) {
      notifyError("Please fill in all the required fields.");
      return;
    }

    const data = {
      username,
      email,
      message,
    };
    try {
      const response = await axios.post('http://localhost:3309/create', data);
      console.log(response.data);
      setUsername('');
      setEmail('');
      setMessage('');
      notifySuccess();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div id="contact" data-theme="forest" className="hero min-h-screen bg-base-200">
        <div data-theme="lemonade" className="hero-content flex-col lg:flex-row-reverse rounded p-9">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-md bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-xl">Username</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Username"
                    className="input input-bordered w-full max-w-xl"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-xl">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-xl">Message</span>
                  </label>
                  <textarea
                    required
                    className="textarea textarea-bordered h-24"
                    placeholder="Any suggestions are welcome to improve my work."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button data-theme="cmyk" type="submit" className="btn bg-green-600 hover:bg-green-500 text-black font-bold text-2xl">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Get in touch !</h1>
            <p className="py-6">
              Your opinion counts, so don&apos;t hesitate to send it to me.<br/>I&apos;m available to answer your questions and to work with you if necessary.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
