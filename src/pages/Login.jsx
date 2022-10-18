import { useForm } from "react-hook-form";
import { useState } from "react";
import useApi from "api/useApi";

export default function Login() {
  const [error, setError] = useState(false);
  const { login } = useApi();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>

              <ul className="error-messages">
                {error && <li>Login failed</li>}
                {errors.email && <li>Please provide a valid email adress</li>}
                {errors.password && <li>Please provide a password</li>}
              </ul>

              <form onSubmit={handleSubmit(data => login(data, setError))}>
                <fieldset className="form-group">
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
                    })}
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    {...register("password", { required: true })}
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                  />
                </fieldset>

                <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
