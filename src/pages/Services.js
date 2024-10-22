import React from 'react';

const Services = () => {
    return (
        <div className="bg-white">
            <header>
                <h1 className="text-2xl font-bold">خدمات</h1>
            </header>
            <div>
                <h4>زمینه‌های فعالیت</h4>
                <div className="grid grid-cols-3">
                    <div>
                        <img src="/assets/images/services/consultingg.png" alt="مشاوره" className="w-60"/>
                        <div>
                            <span>مشاوره در حوزه فناوری اطلاعات</span>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/images/services/cooperation.png" alt="همکاری" className="w-60"/>
                        <div>
                            <span>همکاری با شرکت‌های دانش بنیان</span>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/images/services/data-center.webp" alt="دیتاسنتر" className="w-60"/>
                        <div>
                            <span>مرکز داده</span>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;