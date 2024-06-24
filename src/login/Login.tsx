import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/background.jpg';
const Login: React.FC = () => {
    return (
        <div 
            className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-70 rounded-lg shadow-md  border-solid">
                <form className="space-y-6">
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center">
                    No account? <Link to="/register" className="text-blue-500 underline hover:text-blue-700">Create an account here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
