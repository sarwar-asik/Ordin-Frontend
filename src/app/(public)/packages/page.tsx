import React from 'react'

export default function PackagesPage() {
    return (
        <div className=''> <section className="flex items-center font-poppins darkbg-gray-700 relative min-h-screen">
            <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0 md:px-6">
                <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-5xl darktext-gray-300">Choice Cheap Package
                </h2>
                <p className="text-lg font-medium text-gray-500 mb-7 md:text-xl darktext-gray-400">
                    We providing best package combo for you</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-3 -mx-">
                    <div className="w-full px-3 ">
                        <div
                            className="relative flex flex-col items-center px-8 py-8 shadow-md lg:rounded-3xl bg-gradient-to-b from-yellow-100 via-blue-200 to-yellow-100 darkfrom-gray-800 darkvia-gray-800 darkto-gray-800">
                            <h2
                                className="mb-4 text-xl font-semibold text-gray-700 border-b-2 border-pink-500 darkborder-gray-400 lg:text-2xl darktext-gray-400">
                                Basic
                            </h2>
                            <div className="mb-4">
                                <span
                                    className="relative text-3xl font-bold text-primary darktext-gray-300 -top-20 right-1">$</span>
                                <span className="font-bold text-primary text-9xl darktext-gray-300">10</span>
                            </div>
                            <p className="mb-4 text-lg font-medium text-gray-700 md:text-xl darktext-gray-400">
                                Home Category
                            </p>
                            <ul className="mb-4 lg:self-center">
                                <li className="flex items-center mb-3 font-medium text-gray-700 darktext-gray-400">
                                    <div className="mr-2 text-green-700 darktext-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-check-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                    </div>
                                    <span>Home </span>
                                </li>
                                <li className="flex items-center mb-3 font-medium text-gray-700 darktext-gray-400">
                                    <div className="mr-2 text-green-700 darktext-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-check-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                    </div>
                                    <span>4 rooms design</span>
                                </li>
                                <li className="flex items-center mb-3 font-medium text-gray-700 darktext-gray-400">
                                    <div className="mr-2 text-gray-700 darktext-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-check-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                    </div>
                                    <span>Manage disc space</span>
                                </li>
                                <li className="flex items-center font-medium text-gray-700 darktext-gray-400">
                                    <div className="mr-2 text-green-700 darktext-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-check-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                    </div>
                                    <span>Unlimited Service</span>
                                </li>
                            </ul>
                            <div className="mt-4 ">
                                <div
                                    className="absolute bottom-0 right-0 w-ful px-3 py-4 text-sm text-center text-gray-100 bg-primary lg:w-32 rounded-tl-3xl cursor-pointer rounded-br-3xl darkbg-gray-900 darkhover:bg-gray-700 hover:bg-green-700  hover:text-gray-100">
                                    Get More</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-3 ">
                        <div
                            className="relative flex flex-col items-center px-8 py-8 shadow-md lg:rounded-3xl bg-gradient-to-b from-pink-100 via-gray-300 to-pink-100 darkfrom-gray-800 darkvia-gray-800 darkto-gray-800">
                            <h2
                                className="mb-4 text-xl font-semibold text-gray-700 border-b-2 border-pink-500 lg:text-2xl darkborder-gray-400 darktext-gray-400">
                                Premium
                            </h2>
                            <div className="mb-4">
                                <span
                                    className="relative text-3xl font-bold text-primary darktext-gray-300 -top-20 right-1">$</span>
                                <span className="font-bold text-primary text-9xl darktext-gray-300">20</span>
                            </div>
                            <p className="mb-4 text-lg font-medium text-gray-700 md:text-xl darktext-gray-400">
                                Best Office Combo
                            </p>
                            <ul className="mb-4 lg:self-center">
                                <li className="flex items-center mb-3 font-medium text-gray-700 darktext-gray-400">
                                    <div className="mr-2 text-green-700 darktext-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-check-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                    </div>
                                    <span>fast organized </span>
                                </li>
                                <li className="flex items-center mb-3 font-medium text-gray-700 darktext-gray-400">
                                    <div className="mr-2 text-green-700 darktext-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-check-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                    </div>
                                    <span>4 office rooms</span>
                                </li>
                                <li className="flex items-center mb-3 font-medium text-gray-700 darktext-gray-400">
                                    <div className="mr-2 text-gray-700 darktext-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-check-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                    </div>
                                    <span>Office cooking</span>
                                </li>
                                <li className="flex items-center font-medium text-gray-700 darktext-gray-400">
                                    <div className="mr-2 text-green-700 darktext-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-check-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                    </div>
                                    <span>Employee Rest room </span>
                                </li>
                            </ul>
                            <div className="mt-4 ">
                                <div
                                    className="absolute bottom-0 right-0 w-ful px-3 py-4 text-sm text-center text-gray-100 bg-primary lg:w-32 rounded-tl-3xl cursor-pointer rounded-br-3xl darkbg-gray-900 darkhover:bg-gray-700 hover:bg-green-700  hover:text-gray-100">
                                    Get More</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-3 ">
                        <div
                            className="relative flex flex-col items-center px-8 py-8 shadow-md lg:rounded-3xl bg-gradient-to-b from-green-100 via-blue-100 to-green-100 darkfrom-gray-800 darkvia-gray-800 darkto-gray-800">
                            <h2
                                className="mb-4 text-xl font-semibold text-gray-700 border-b-2 border-pink-500 lg:text-2xl darktext-gray-400 darkborder-gray-400">
                                Ultimate
                            </h2>
                            <div className="mb-4">
                                <span
                                    className="relative text-3xl font-bold text-primary darktext-gray-300 -top-20 right-1">$</span>
                                <span className="font-bold text-primary text-9xl darktext-gray-300">30</span>
                            </div>
                            <p className="mb-4 text-lg font-medium text-gray-700 md:text-xl darktext-gray-400">
                                Choice ultimate for your capacity
                            </p>
                            <ul className="mb-4 lg:self-center">
                                <li className="flex items-center mb-3 font-medium text-gray-700 darktext-gray-400">
                                    <div className="mr-2 text-green-700 darktext-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-check-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                    </div>
                                    <span>Slim space used </span>
                                </li>
                                <li className="flex items-center mb-3 font-medium text-gray-700 darktext-gray-400">
                                    <div className="mr-2 text-green-700 darktext-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-check-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                    </div>
                                    <span>Online Payment</span>
                                </li>
                                <li className="flex items-center mb-3 font-medium text-gray-700 darktext-gray-400">
                                    <div className="mr-2 text-gray-700 darktext-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-check-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                    </div>
                                    <span>4 Power Design</span>
                                </li>
                                <li className="flex items-center font-medium text-gray-700 darktext-gray-400">
                                    <div className="mr-2 text-green-700 darktext-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-check-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                    </div>
                                    <span>Unlimited Firestrone</span>
                                </li>
                            </ul>
                            <div className="mt-4 ">
                                <div
                                    className="absolute bottom-0 right-0 w-ful px-3 py-4 text-sm text-center text-gray-100 bg-primary lg:w-32 rounded-tl-3xl cursor-pointer rounded-br-3xl darkbg-gray-900 darkhover:bg-gray-700 hover:bg-green-700  hover:text-gray-100">
                                    Get More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section></div>
    )
}
