function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center relative">
            {/* Video de fondo */}
            <video
                src="https://www.pexels.com/es-es/download/video/8769000/"
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            />

            {/* Overlay oscuro para mejor contraste */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-0"></div>

            {/* Caja del login */}
            <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-amber-400 relative z-10">
                <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white flex justify-center">
                        Sign in to our platform
                    </h5>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@company.com"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                      "
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                        dark:text-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 
                                   focus:ring-4 focus:outline-none focus:ring-blue-300 
                                   font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                   dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                        Login to your account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
