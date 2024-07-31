import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../component/AdminLayout';

function SignIn() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '', custom_error: '' });
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear specific field error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputs.username || !inputs.password) {
      setErrors({
        username: !inputs.username ? 'Username is required.' : '',
        password: !inputs.password ? 'Password is required.' : '',
        custom_error: ''
      });
      return;
    }

    setLoading(true);

    try {
      // Simulate login process with API call
      // Replace with actual API call
      // const response = await LoginApi(inputs.username, inputs.password);
      // Handle response and store user data if login successful
      // Example: storeUserData(response.data);

      // For demo, navigate to a success page
      navigate('/dashboard');
    } catch (error) {
      setLoading(false);
      setErrors({ ...errors, custom_error: 'Failed to login. Please check your credentials.' });
    }
  };

  return (
    <AdminLayout>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          {/* <h1 className="text-3xl font-bold text-gray-800 mb-2">SignIn</h1> */}
          <img src="/images/admin.png" alt="Login Image" className="mx-auto w-24 h-24 p-2 object-cover rounded-full border-2 border-blue-700"/>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              id="username"
              name="username"
              value={inputs.username}
              onChange={handleInput}
              className={`w-full rounded-lg py-3 px-4 bg-gray-100 border ${errors.username ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              autoComplete="off"
              placeholder="Username"
            />
            {errors.username && <span className="block text-sm text-red-500 mt-1">{errors.username}</span>}
          </div>

          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={inputs.password}
              onChange={handleInput}
              className={`w-full rounded-lg py-3 px-4 bg-gray-100 border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              autoComplete="off"
              placeholder="Password"
            />
            {errors.password && <span className="block text-sm text-red-500 mt-1">{errors.password}</span>}
            {errors.custom_error && <span className="block text-sm text-red-500 mt-1">{errors.custom_error}</span>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className={`bg-blue-600 text-white font-semibold rounded-lg py-3 px-6 mt-2 w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <a href="#" className="text-blue-600 hover:underline text-sm">Forgot Password?</a>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
}

export default SignIn;
