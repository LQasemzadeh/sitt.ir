import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="bg-white py-8 flex justify-center items-center w-[100%] h-[100vh]">
            <div className="max-w-md w-full mx-auto p-6 bg-primary bg-opacity-40 rounded-lg shadow-md">
                <h2 className="text-3xl text-center text-secondary font-bold mb-6">ارتباط با ما</h2>
                <form action="">
                    <div className="mb-4">
                        <label className="block text-secondary text-sm font-semibold mb-2" htmlFor="">نام و نام خانوادگی</label>
                        <input className="w-full px-3 py-2 border rounded-lg shadow-md"
                               required
                               type="text" placeholder="نام و نام خانوادگی"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-secondary text-sm font-semibold mb-2" htmlFor="">ایمیل</label>
                        <input className="w-full px-3 py-2 border rounded-lg shadow-md"
                               required
                            type="email" placeholder="sln@example.com"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-secondary text-sm font-semibold mb-2" htmlFor="">پیام شما</label>
                        <textarea rows='4' className="w-full px-3 py-2 border rounded-lg shadow-md"
                               required
                            type="text" placeholder="پیام ..."/>
                    </div>
                    <div className="flex justify-center">
                        <button className="btn w-full shadow-lg" type="submit">ارسال پیام</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;