import React from 'react';
import './Contact.css'
import useTitle from '../../hooks/useTitle';

const Contact = () => {
    useTitle('Contact')
    return (
        <div className='pt-24 pb-12 text-gray-400 '>
            <div className='text-center'>
                <h2 className='lg:text-4xl font-bold text-2xl pb-5 '>Feel Free To <span className='text p-text '>Message</span></h2>
                <p className='lg:text-2xl text-xl lg:pb-6'>Do you have any question or query? Please message me
                    I will try to answer you. Thank you!</p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full py-16 rounded-md sm:px-4 xl:col-span-3 ">

                    <form action="https://formsubmit.co/e1cf56c3589647066652e2f545ac25c8" method="POST" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
                        <div data-aos="fade-right" >
                            <label for="name" className="text-sm"><span className="label-text text-gray-400 text-xl mb-4">Your name</span></label>
                            <input name="name" id="name" type="text" placeholder="Your name" className="bg-gray-300 w-full rounded- text-gray-900 focus:ring focus:ring-emerald-600 border-emerald-500 py-2 pl-4 mt-2 mb-4" required />
                        </div>

                        <div data-aos="fade-left">
                            <label for="email" className="text-sm ">
                                <span className="label-text text-gray-400 text-xl">Email address</span></label>
                            <input name="email" id="email" type="email" placeholder="Email address" className="bg-gray-300 w-full rounded- text-gray-900 focus:ring focus:ring-emerald-600 border-emerald-500 py-2 pl-4 mt-2 mb-4" required />
                        </div>

                        <div data-aos="fade-right">
                            <label for="message" className="text-sm ">
                                <span className="label-text text-gray-400 text-xl">Message</span></label>
                            <textarea name='message' id="message" placeholder="message" className="bg-gray-300 w-full rounded- text-gray-900 focus:ring focus:ring-emerald-600 border-emerald-500 py-2 pl-4 mt-2 mb-6" required />
                        </div>

                        <input data-aos="fade-left" type="submit" value="submit"
                            className="w-full py-2  font-semibold contactShadow"></input>
                    </form>
                </div>

                <img data-aos="flip-right" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif" alt="" className="object-cover w-full rounded-md xl:col-span-2 dark:bg-gray-500 pt-12 px-6" />
            </div>

        </div>
    );
};

export default Contact;