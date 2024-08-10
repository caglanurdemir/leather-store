import React from 'react';

const Navbar: React.FC = () => {
	return (
		<nav className="bg-white shadow">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<button
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							{/* Icon for menu */}
							<svg
								className="block h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
							<svg
								className="hidden h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex-shrink-0">
							<img
								className="block lg:hidden h-8 w-auto"
								src="/img/logo.svg"
								alt="Logo"
							/>
							<img
								className="hidden lg:block h-8 w-auto"
								src="/img/logo.svg"
								alt="Logo"
							/>
						</div>
						<div className="hidden sm:block sm:ml-6">
							<div className="flex space-x-4">
								<a
									href="#"
									className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
								>
									Home
								</a>
								<a
									href="#"
									className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
								>
									Products
								</a>
								<a
									href="#"
									className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
								>
									Admin
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
