import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destructure data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        'service_tvxidfp',
        'template_pbaid7y',
        templateParams,
        'dd1HBh3uXqtAOQDvN'
      );

      // Display success alert
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className="fContactForm">
        <Header />
        <div className='fform-content'>
      <h1 className="fh1text">Contact Our Team</h1>
      <div className="fcontainer">
        <div className="frow">
          <div className="fcol-12 text-center">
            <div className="fcontactForm">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className="frow fformRow">
                  <div className="fcol-6">
                    <input
                      type="text"
                      name="name"
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name',
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less',
                        },
                      })}
                      className="fform-control fformInput"
                      placeholder="Name"
                    ></input>
                    {errors.name && (
                      <span className="ferrorMessage">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="fcol-6">
                    <input
                      type="email"
                      name="email"
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
                      })}
                      className="fform-control fformInput"
                      placeholder="Email address"
                    ></input>
                    {errors.email && (
                      <span className="ferrorMessage">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className="frow fformRow">
                  <div className="fcol">
                    <input
                      type="text"
                      name="subject"
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a subject',
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters',
                        },
                      })}
                      className="fform-control fformInput"
                      placeholder="Subject"
                    ></input>
                    {errors.subject && (
                      <span className="ferrorMessage">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className="frow fformRow">
                  <div className="fcol">
                    <textarea
                      rows={3}
                      name="message"
                      {...register('message', {
                        required: true,
                      })}
                      className="fform-control fformInput"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <span className="ferrorMessage">
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>

                <button
                  className="fsubmit-btn fbtn fbtn-primary"
                  disabled={disabled}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {alertInfo.display && (
        <div
          className={`falert falert-${alertInfo.type} falert-dismissible fmt-5`}
          role="alert"
        >
          {alertInfo.message}
          <button
            type="button"
            className="fbtn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            }
          ></button>
        </div>
      )}
      </div>
      <Footer />
    </div>
  );
}

export default ContactForm;
