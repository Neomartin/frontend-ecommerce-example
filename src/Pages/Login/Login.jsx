import { useForm } from 'react-hook-form';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Login.css';
import { useUser } from '../../context/UserContext';

// const URL = import.meta.env.VITE_API_URL;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useUser();



  return (
    <section className="login">
      <div className="login-container">

        <form className="admin-form" onSubmit={handleSubmit(login)}>

          <SectionTitle title="Login" subtitle="Welcome back!" />
          <h2 className="form-title">
            <span>Login</span> to your account
          </h2>


          <div className="input-group">
            <label htmlFor="">Email</label>
            <input type="email" {...register("email", {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })} placeholder="Enter your email" />
            {errors.email && <p className="input-error">{errors.email.message}</p>}
          </div>



          <div className="input-group">
            <label htmlFor="">Password</label>
            <input  type="password"
            {...register("password", {
              required: 'Password is required',
              minLength: {
                value: 4,
                message: 'Password must be at least 4 characters long',
              },
              maxLength: {
                value: 20,
                message: 'Password must not exceed 20 characters',
              }})}
                    placeholder="Enter your password" />
            {errors.password && <p className="input-error">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="button button--md"
          >
            Sing In
          </button>
        </form>
      </div>
    </section>
  );
}
