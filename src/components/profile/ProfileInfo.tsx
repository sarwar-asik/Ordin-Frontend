
import React from 'react'
import "./profile.css";
import Image from 'next/image';

export default function ProfileInfo({ profileData }: { profileData: any }) {

    return (
        <div>   <div className="w-full p-6  mx-auto">
            <div className="flex flex-wrap -mx-3 ">
                <div className="w-full max-w-full px-3 xl:w-4/12">

                    <div
                        className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                        <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                            <h3 className="mb-0 text-lg text-gray-700">Platform Settings</h3>
                        </div>
                        <div className="flex-auto p-4">
                            <h6 className="font-bold leading-tight uppercase text-xs text-slate-500">Account</h6>
                            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 block pl-0">
                                        <input id="follow"
                                            className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                            type="checkbox " checked />
                                        <label
                                            className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"
                                        >Email me when someone follows me</label>
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 text-inherit">
                                    <div className="min-h-6 mb-0.5 block pl-0">
                                        <input id="answer"
                                            className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                            type="checkbox" />
                                        <label
                                            className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"
                                        >Email me when someone answers on my post</label>
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-b-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 block pl-0">
                                        <input id="mention"
                                            className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                            type="checkbox" checked />
                                        <label
                                            className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"
                                        >Email me when someone mentions me</label>
                                    </div>
                                </li>
                            </ul>
                            <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">Application</h6>
                            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 block pl-0">
                                        <input id="launches Services"
                                            className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                            type="checkbox" />
                                        <label
                                            className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"
                                        >New launches and Services</label>
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 text-inherit">
                                    <div className="min-h-6 mb-0.5 block pl-0">
                                        <input id="product updates"
                                            className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                            type="checkbox" checked />
                                        <label
                                            className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"
                                        >Monthly product updates</label>
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 pb-0 bg-white border-0 rounded-b-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 block pl-0">
                                        <input id="subscribe"
                                            className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                            type="checkbox" />
                                        <label
                                            className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"
                                        >Subscribe to newsletter</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12">
                    <div
                        className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                        <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                            <div className="flex flex-wrap -mx-3">
                                <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                                    <h3 className="mb-0 text-lg text-gray-700">Profile Information</h3>
                                </div>
                                <div className="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
                                    <a href="javascript:;" data-target="tooltip_trigger" data-placement="top">
                                        <i className="leading-normal fas fa-user-edit text-sm text-slate-400"></i>
                                    </a>
                                    <div data-target="tooltip" className="hidden px-2 py-1 text-center text-white bg-black rounded-lg text-sm"
                                        role="tooltip">
                                        Edit Profile
                                        <div
                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                            data-popper-arrow></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto p-4">
                            <p className="leading-normal text-sm">Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
                                If two equally difficult paths, choose the one more painful in the short term (pain avoidance is
                                creating an illusion of equality).</p>
                            <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
                            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                <li
                                    className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
                                    <strong className="text-slate-700">Full Name:</strong> &nbsp; Alec M. Thompson
                                </li>
                                <li
                                    className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                                    <strong className="text-slate-700">Mobile:</strong> &nbsp; (44) 123 1234 123
                                </li>
                                <li
                                    className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                                    <strong className="text-slate-700">Email:</strong> &nbsp; alecthompson@mail.com
                                </li>
                                <li
                                    className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                                    <strong className="text-slate-700">Location:</strong> &nbsp; USA
                                </li>
                                <li className="relative block px-4 py-2 pb-0 pl-0 bg-white border-0 border-t-0 rounded-b-lg text-inherit">
                                    <strong className="leading-normal text-sm text-slate-700">Social:</strong> &nbsp;
                                    <a className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center text-blue-800 align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none"
                                        href="javascript:;">
                                        <i className="fab fa-facebook fa-lg"></i>
                                    </a>
                                    <a className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none text-sky-600"
                                        href="javascript:;">
                                        <i className="fab fa-twitter fa-lg"></i>
                                    </a>
                                    <a className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none text-sky-900"
                                        href="javascript:;">
                                        <i className="fab fa-instagram fa-lg"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12">
                    <div
                        className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                        <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                            <h3 className="mb-0 text-lg text-gray-700">Conversations</h3>
                        </div>
                        <div className="flex-auto p-4">
                            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                <li className="relative flex items-center px-0 py-2 mb-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div
                                        className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                                        <Image height={50} width={50} src="https://i.ibb.co/KqdRK2M/Ellipse-34.png" alt="kal"
                                            className="w-full shadow-soft-2xl rounded-xl" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h6 className="mb-0 leading-normal text-sm">Sophie B.</h6>
                                        <p className="mb-0 leading-tight text-xs">Hi! I need more information..</p>
                                    </div>
                                    <a className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                                        href="javascript:;">Reply</a>
                                </li>
                                <li className="relative flex items-center px-0 py-2 mb-2 bg-white border-0 border-t-0 text-inherit">
                                    <div
                                        className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                                        <Image height={50} width={50} src="https://i.ibb.co/KqdRK2M/Ellipse-34.png" alt="kal" className="w-full shadow-soft-2xl rounded-xl" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h6 className="mb-0 leading-normal text-sm">Anne Marie</h6>
                                        <p className="mb-0 leading-tight text-xs">Awesome work, can you..</p>
                                    </div>
                                    <a className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                                        href="javascript:;">Reply</a>
                                </li>
                                <li className="relative flex items-center px-0 py-2 mb-2 bg-white border-0 border-t-0 text-inherit">
                                    <div
                                        className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                                        <Image height={50} width={50} src="https://i.ibb.co/KqdRK2M/Ellipse-34.png" alt="kal" className="w-full shadow-soft-2xl rounded-xl" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h6 className="mb-0 leading-normal text-sm">Ivanna</h6>
                                        <p className="mb-0 leading-tight text-xs">About files I can..</p>
                                    </div>
                                    <a className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                                        href="javascript:;">Reply</a>
                                </li>
                                <li className="relative flex items-center px-0 py-2 mb-2 bg-white border-0 border-t-0 text-inherit">
                                    <div
                                        className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                                        <Image height={50} width={50} src="https://i.ibb.co/KqdRK2M/Ellipse-34.png" alt="kal" className="w-full shadow-soft-2xl rounded-xl" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h6 className="mb-0 leading-normal text-sm">Peterson</h6>
                                        <p className="mb-0 leading-tight text-xs">Have a great afternoon..</p>
                                    </div>
                                    <a className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                                        href="javascript:;">Reply</a>
                                </li>
                                <li className="relative flex items-center px-0 py-2 bg-white border-0 border-t-0 rounded-b-lg text-inherit">
                                    <div
                                        className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                                        <Image height={50} width={50} src="https://i.ibb.co/KqdRK2M/Ellipse-34.png" alt="kal" className="w-full shadow-soft-2xl rounded-xl" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h6 className="mb-0 leading-normal text-sm">Nick Daniel</h6>
                                        <p className="mb-0 leading-tight text-xs">Hi! I need more information..</p>
                                    </div>
                                    <a className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                                        href="javascript:;">Reply</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-none w-full max-w-full px-3 mt-6">
                    <div
                        className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                        <div className="p-4 pb-0 mb-0 bg-white rounded-t-2xl">
                            <h6 className="mb-1 text-lg text-gray-700">Services</h6>
                            <h1 className="leading-normal text-xl">Architects design houses</h1>
                        </div>
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                                    <div
                                        className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                        <div className="relative">
                                            <a className="block shadow-xl rounded-2xl">
                                                <Image height={200} width={300} src="https://i.ibb.co/tpzgBSh/chairs-put-table-room-with-patterned-carpet.jpg" alt="img-blur-shadow"
                                                    className="w-full shadow-soft-2xl rounded-2xl h-[20rem]" />
                                            </a>
                                        </div>
                                        <div className="flex-auto px-1 pt-6">
                                            <h3
                                                className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                                                Service #2</h3>
                                            <a href="javascript:;">
                                                <h5>Modern</h5>
                                            </a>
                                            <p className="mb-6 leading-normal text-sm">As Uber works through a huge amount of internal management
                                                turmoil.</p>
                                            <div className="flex items-center justify-between">
                                                <button type="button"
                                                    className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View
                                                    Service</button>
                                                <div className="mt-2">
                                                    <a href="javascript:;"
                                                        className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                        data-target="tooltip_trigger" data-placement="bottom">
                                                        <Image height={40} width={50} className="w-full rounded-circle" alt="Image placeholder" src="https://i.ibb.co/KqdRK2M/Ellipse-34.pngteam-1.jpg" />
                                                    </a>
                                                    <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                        role="tooltip">
                                                        Elena Morison
                                                        <div
                                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                            data-popper-arrow></div>
                                                    </div>
                                                    <a href="javascript:;"
                                                        className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                        data-target="tooltip_trigger" data-placement="bottom">
                                                        <Image height={40} width={50} className="w-full rounded-circle" alt="Image placeholder" src="https://i.ibb.co/KqdRK2M/Ellipse-34.pngteam-2.jpg" />
                                                    </a>
                                                    <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                        role="tooltip">
                                                        Ryan Milly
                                                        <div
                                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                            data-popper-arrow></div>
                                                    </div>
                                                    <a href="javascript:;"
                                                        className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                        data-target="tooltip_trigger" data-placement="bottom">
                                                        <Image height={40} width={50} className="w-full rounded-circle" alt="Image placeholder" src="https://i.ibb.co/KqdRK2M/Ellipse-34.png" />
                                                    </a>
                                                    <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                        role="tooltip">
                                                        Nick Daniel
                                                        <div
                                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                            data-popper-arrow></div>
                                                    </div>
                                                    <a href="javascript:;"
                                                        className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                        data-target="tooltip_trigger" data-placement="bottom">
                                                        <Image height={40} width={50} className="w-full rounded-circle" alt="Image placeholder" src="https://i.ibb.co/KqdRK2M/Ellipse-34.png" />
                                                    </a>
                                                    <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                        role="tooltip">
                                                        Peterson
                                                        <div
                                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                            data-popper-arrow></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                                    <div
                                        className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                        <div className="relative">
                                            <a className="block shadow-xl rounded-2xl">
                                                <Image height={200} width={300} src="https://i.ibb.co/qJpDwZ8/beautiful-shot-modern-style-open-space-office-interior.jpg" alt="img-blur-shadow"
                                                    className="w-full shadow-soft-2xl rounded-xl h-[20rem]" />
                                            </a>
                                        </div>
                                        <div className="flex-auto px-1 pt-6">
                                            <h3
                                                className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                                                Service #1</h3>
                                            <a href="javascript:;">
                                                <h5>Scandinavian</h5>
                                            </a>
                                            <p className="mb-6 leading-normal text-sm">Music is something that every person has his or her own
                                                specific opinion about.</p>
                                            <div className="flex items-center justify-between">
                                                <button type="button"
                                                    className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View
                                                    Service</button>
                                                <div className="mt-2">
                                                    <a href="javascript:;"
                                                        className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                        data-target="tooltip_trigger" data-placement="bottom">
                                                        <Image height={40} width={50} className="w-full rounded-circle" alt="Image placeholder" src="https://i.ibb.co/KqdRK2M/Ellipse-34.png" />
                                                    </a>
                                                    <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                        role="tooltip">
                                                        Nick Daniel
                                                        <div
                                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                            data-popper-arrow></div>
                                                    </div>
                                                    <a href="javascript:;"
                                                        className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                        data-target="tooltip_trigger" data-placement="bottom">
                                                        <Image height={40} width={50} className="w-full rounded-circle" alt="Image placeholder" src="https://i.ibb.co/KqdRK2M/Ellipse-34.png" />
                                                    </a>
                                                    <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                        role="tooltip">
                                                        Peterson
                                                        <div
                                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                            data-popper-arrow></div>
                                                    </div>
                                                    <a href="javascript:;"
                                                        className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                        data-target="tooltip_trigger" data-placement="bottom">
                                                        <Image height={40} width={50} className="w-full rounded-circle" alt="Image placeholder" src="https://i.ibb.co/KqdRK2M/Ellipse-34.png" />
                                                    </a>
                                                    <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                        role="tooltip">
                                                        Elena Morison
                                                        <div
                                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                            data-popper-arrow></div>
                                                    </div>
                                                    <a href="javascript:;"
                                                        className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                        data-target="tooltip_trigger" data-placement="bottom">
                                                        <Image height={40} width={50} className="w-full rounded-circle" alt="Image placeholder" src="https://i.ibb.co/KqdRK2M/Ellipse-34.png" />
                                                    </a>
                                                    <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                        role="tooltip">
                                                        Ryan Milly
                                                        <div
                                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                            data-popper-arrow></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                                    <div
                                        className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                        <div className="relative">
                                            <a className="block shadow-xl rounded-2xl">
                                                <Image height={200} width={300} src="https://i.ibb.co/y4jcKDz/interior-4.jpg" alt="img-blur-shadow"
                                                    className="w-full shadow-soft-2xl rounded-2xl h-[20rem]" />
                                            </a>
                                        </div>
                                        <div className="flex-auto px-1 pt-6">
                                            <h3
                                                className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">

                                                #3</h3>
                                            <a href="javascript:;">
                                                <h5>Minimalist</h5>
                                            </a>
                                            <p className="mb-6 leading-normal text-sm">Different people have different taste, and various types of
                                                music.</p>
                                            <div className="flex items-center justify-between">
                                                <button type="button"
                                                    className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View
                                                    Service</button>
                                                <div className="mt-2">
                                                    <a href="javascript:;"
                                                        className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                        data-target="tooltip_trigger" data-placement="bottom">
                                                        <Image height={40} width={50} className="w-full rounded-circle" alt="Image placeholder" src="https://i.ibb.co/KqdRK2M/Ellipse-34.pngteam-4.jpg" />
                                                    </a>
                                                    <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                        role="tooltip">
                                                        Peterson
                                                        <div
                                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                            data-popper-arrow></div>
                                                    </div>
                                                    <a href="javascript:;"
                                                        className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                        data-target="tooltip_trigger" data-placement="bottom">
                                                        <Image height={40} width={50} className="w-full rounded-circle" alt="Image placeholder" src="https://i.ibb.co/KqdRK2M/Ellipse-34.png" />
                                                    </a>
                                                    <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                        role="tooltip">
                                                        Nick Daniel
                                                        <div
                                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                            data-popper-arrow></div>
                                                    </div>
                                                    <a href="javascript:;"
                                                        className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                        data-target="tooltip_trigger" data-placement="bottom">
                                                        <Image height={40} width={50} className="w-full rounded-circle" alt="Image placeholder" src="https://i.ibb.co/KqdRK2M/Ellipse-34.pngteam-2.jpg" />
                                                    </a>
                                                    <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                        role="tooltip">
                                                        Ryan Milly
                                                        <div
                                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                            data-popper-arrow></div>
                                                    </div>
                                                    <a href="javascript:;"
                                                        className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                        data-target="tooltip_trigger" data-placement="bottom">
                                                        <Image height={40} width={50} className="w-full rounded-circle" alt="Image placeholder" src="https://i.ibb.co/KqdRK2M/Ellipse-34.pngteam-1.jpg" />
                                                    </a>
                                                    <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                        role="tooltip">
                                                        Elena Morison
                                                        <div
                                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                            data-popper-arrow></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                                    <div
                                        className="relative flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none rounded-2xl border-slate-100 bg-clip-border">
                                        <div className="flex flex-col justify-center flex-auto p-6 text-center">
                                            <a href="javascript:;">
                                                <i className="mb-4 fa fa-plus text-slate-400"></i>
                                                <h5 className="text-slate-400">New Service</h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="pt-4">
                <div className="w-full px-6 mx-auto">
                    <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                        <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                            <div className="leading-normal text-center text-sm text-slate-500 lg:text-left">
                                ©
                                <script>
                                    {new Date().getFullYear() + ","}
                                </script>
                                made with <i className="fa fa-heart"></i> by
                                <a href="https://www.creative-tim.com" className="font-semibold text-slate-700" target="_blank">Creative
                                    Tim</a>
                                for a better web.
                            </div>
                        </div>
                        <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                            <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com"
                                        className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                                        target="_blank">Creative Tim</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com/presentation"
                                        className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                                        target="_blank">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://creative-tim.com/blog"
                                        className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                                        target="_blank">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com/license"
                                        className="block px-4 pt-0 pb-1 pr-0 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                                        target="_blank">License</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div></div>
    )
}
