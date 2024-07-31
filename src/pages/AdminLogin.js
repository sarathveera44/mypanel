import { useState } from "react";
import { LoginApi } from "../../route/Api";
import { storeUserData } from "../../route/Storage";
import { isAuthenticated } from "../../route/Auth";
import { useNavigate, Navigate } from "react-router-dom";
// import ProtectedRoute from '../../route/ProtectedRoute';

function AdminLogin() {
  const initialStateErrors = {
    username: { required: false },
    password: { required: false },
    custom_error: null,
  };
  const [errors, setErrors] = useState(initialStateErrors);

  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(inputs);
    event.preventDefault();
    let errors = initialStateErrors;
    let hasError = false;

    if (inputs.username === "") {
      errors.username.required = true;
      hasError = true;
    }
    if (inputs.password === "") {
      errors.password.required = true;
      hasError = true;
    }

    if (!hasError) {
      setLoading(true);
      //sending login api request
      LoginApi(inputs)
        .then((response) => {
          storeUserData(response.data.accessToken);
          localStorage.setItem("roles", response.data.roles[0]);
          console.log(response);
          //  navigate('/admin/dashboard');
        })
        .catch((err) => {
          if ((err.code = "ERR_BAD_REQUEST")) {
            setErrors({ ...errors, custom_error: "Invalid Credentials." });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
    setErrors({ ...errors });
  };

  if (isAuthenticated()) {
    //redirect user to dashboard
    return <Navigate to="/admin/dashboard" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-200">
      <div className="w-full max-w-sm">
        <div className="shadow-lg rounded-lg bg-fixwhite">
          <div className="border-fixblue border-2 w-full rounded-t-lg"></div>
          <div className="flex flex-col items-center justify-center my-4">
            <img src="/images/admin.png" alt="logo" className="max-h-20 max-w-20"/>
            <h3 className="font-bold  text-fixblue text-center font-serif">
              ADMIN
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="px-6 py-4">
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:border-blue-800 focus:ring focus:ring-blue-200 focus:outline-none"
                  name="username"
                  placeholder="Username"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  onChange={handleInput}
                  required
                />
                {errors.username.required ? (
                  <span className="text-danger">Username is required.</span>
                ) : null}

                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-800 focus:ring focus:ring-blue-200 focus:outline-none"
                  name="password"
                  placeholder="Password"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={handleInput}
                  required
                />
                {errors.password.required ? (
                  <span className="text-danger">Password is required.</span>
                ) : null}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <button
                  type="submit"
                  className="bg-fixblue text-white font-bold py-2 px-4 rounded-md"
                >
                  Login
                </button>
                <button
                  type="reset"
                  className="bg-fixred text-white font-bold py-2 px-4 rounded-md"
                >
                  Reset
                </button>
              </div>

              <span className="text-danger">
                {errors.custom_error ? <p>{errors.custom_error}</p> : null}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
