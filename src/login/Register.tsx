import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/background.jpg';

const Register: React.FC = () => {
    
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            ></div>
            <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-70 rounded-lg shadow-md relative z-10">
                <h2 className="text-2xl font-bold text-center">Create an account</h2>
                <form className="space-y-6">
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
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
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
                        Register
                    </button>
                </form>
                <p className="text-center">
                    Already have an account? <Link to="/" className="text-blue-500 underline hover:text-blue-700">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
