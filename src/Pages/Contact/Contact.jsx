import { useForm } from 'react-hook-form';
import './Contact.css';
import '../Admin/Admin.css';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  return (
    <>
      <SectionTitle title="Contact" subtitle="Get in touch with us" />
      <section className="contact-section">
        <div className="contact-form">
          <form
            className="admin-form"
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <h2 className="form-title">
              <span>Start</span> a conversation with us, we are here to help you
            </h2>

            <div className="input-group">
              <label htmlFor="">Fullname</label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  maxLength: { value: 20, message: 'Max length is 20' },
                  minLength: { value: 3, message: 'Min length is 3' },
                })}
              />
              {errors.name && (
                <span className="input-error">{errors.name?.message}</span>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  maxLength: { value: 20, message: 'Max length is 20' },
                  minLength: { value: 3, message: 'Min length is 3' },
                })}
              />
              {errors.email && (
                <span className="input-error">{errors.email?.message}</span>
              )}
            </div>
            <div className="input-group">
              <label htmlFor="">Email</label>
              <textarea
                placeholder="Enter your message"
                rows={5}
                {...register('message', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  maxLength: { value: 400, message: 'Max length is 400' },
                  minLength: { value: 30, message: 'Min length is 30' },
                })}
              ></textarea>
              {errors.message && (
                <span className="input-error">{errors.message?.message}</span>
              )}
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className="button button--md"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d410.37702253338904!2d-68.3387182642524!3d-34.629031401033494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1741825993481!5m2!1ses!2sar"
            width="100%"
            height="100%"
            className="contact-map__iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
