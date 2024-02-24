import Image from 'next/image'
import React from 'react'

export default function PackagesPage() {
    return (
        <div className=''>
            <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full">
                        <p className="text-base leading-4 text-gray-600">Choose your plan</p>
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
                            Our pricing plan
                        </h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-600">
                            We’re working on a suit of tools to make managing complex systems easier, for everyone for free. we can’t wait to hear what you think
                        </p>
                        <div className="w-56">
                            <div className="bg-gray-100 shadow rounded-full flex items-center mt-10">
                                <button className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-black focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1" id="monthly">
                                    Monthly
                                </button>
                                <button className="bg-black focus:ring-2 focus:ring-offset-2 focus:ring-black focus:outline-none text-base leading-none text-white rounded-full py-4 px-6" id="annually">
                                    Annually
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <Image fill src="https://i.ibb.co/0n6DSS3/bgimg.png" className=""
                            style={{ "position": "absolute", "marginTop": "6rem", "marginLeft": "-3rem", "width": "100%" }} alt="background circle images" />
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-gray-800">Basic</h2>
                                <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">Home</p>
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Full access to all features and no credit card required</p>
                        </div>
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                            <div className="w-2.5  h-auto bg-black rounded-tl-md rounded-bl-md" />
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold leading-6 text-gray-800">Premium</h2>
                                    <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                                        Office
                                        {/* <span className="font-normal text-base">/mo</span> */}
                                    </p>
                                </div>
                                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Unlimited products features and dedicated support channels</p>
                            </div>
                        </div>
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-gray-800">Unlimited</h2>
                                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                                    {/* <span className="font-normal text-base">/mo</span> */}
                                </p>
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Unlimited products features and dedicated support channels</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="flex items-center font-poppins darkbg-gray-700 relative ">
                <div className="justify-center flex-1 max-w-6x px-4 py-4 mx-auto lg:py-0 md:px-6">
                    <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-5xl darktext-gray-300">Choice Cheap Package
                    </h2>
                    <p className="text-lg font-medium text-gray-500 mb-7 md:text-xl darktext-gray-400">
                        We providing best package combo for you</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-3 -mx-">
                        <div className="w-full px-3 py-3 ">
                            <div
                                className="relative flex flex-col items-center px-8 py-8 shadow-md lg:rounded-3xl bg-gradient-to-b from-yellow-100 via-blue-200 to-yellow-100 darkfrom-gray-800 darkvia-gray-800 darkto-gray-800">
                                <h2
                                    className="mb-4 text-xl font-semibold text-gray-700 border-b-2 border-pink-500 darkborder-gray-400 lg:text-2xl darktext-gray-400">
                                    Basic
                                </h2>
                                <div className="mb-4">
                                    <span
                                        className="relative text-3xl font-bold text-black darktext-gray-300 -top-20 right-1">$</span>
                                    <span className="font-bold text-black text-9xl darktext-gray-300">10</span>
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
                                        className="absolute bottom-0 right-0 w-ful px-3 py-4 text-sm text-center text-gray-100 bg-black lg:w-32 rounded-tl-3xl cursor-pointer rounded-br-3xl darkbg-gray-900 darkhover:bg-gray-700 hover:bg-green-700  hover:text-gray-100">
                                        Pay Now</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-3 py-3 ">
                            <div
                                className="relative flex flex-col items-center px-8 py-8 shadow-md lg:rounded-3xl bg-gradient-to-b from-pink-100 via-gray-300 to-pink-100 darkfrom-gray-800 darkvia-gray-800 darkto-gray-800">
                                <h2
                                    className="mb-4 text-xl font-semibold text-gray-700 border-b-2 border-pink-500 lg:text-2xl darkborder-gray-400 darktext-gray-400">
                                    Premium
                                </h2>
                                <div className="mb-4">
                                    <span
                                        className="relative text-3xl font-bold text-black darktext-gray-300 -top-20 right-1">$</span>
                                    <span className="font-bold text-black text-9xl darktext-gray-300">20</span>
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
                                        className="absolute bottom-0 right-0 w-ful px-3 py-4 text-sm text-center text-gray-100 bg-black lg:w-32 rounded-tl-3xl cursor-pointer rounded-br-3xl darkbg-gray-900 darkhover:bg-gray-700 hover:bg-green-700  hover:text-gray-100">
                                        Pay Now</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-3 py-3 ">
                            <div
                                className="relative flex flex-col items-center px-8 py-8 shadow-md lg:rounded-3xl bg-gradient-to-b from-green-100 via-blue-100 to-green-100 darkfrom-gray-800 darkvia-gray-800 darkto-gray-800">
                                <h2
                                    className="mb-4 text-xl font-semibold text-gray-700 border-b-2 border-pink-500 lg:text-2xl darktext-gray-400 darkborder-gray-400">
                                    Unlimited
                                </h2>
                                <div className="mb-4">
                                    <span
                                        className="relative text-3xl font-bold text-black darktext-gray-300 -top-20 right-1">$</span>
                                    <span className="font-bold text-black text-9xl darktext-gray-300">30</span>
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
                                        className="absolute bottom-0 right-0 w-ful px-3 py-4 text-sm text-center text-gray-100 bg-black lg:w-32 rounded-tl-3xl cursor-pointer rounded-br-3xl darkbg-gray-900 darkhover:bg-gray-700 hover:bg-green-700  hover:text-gray-100">
                                        Pay Now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}
