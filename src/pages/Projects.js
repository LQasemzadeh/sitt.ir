import React from 'react';
import Accordion from "@/pages/Accordion";

const Projects = () => {
    return (

        <div className="bg-white lg:px-32 px-5 py-16">
              <header className="mb-4">
                  <h1 className="text-3xl font-semibold text-center lg:text-right">
                      پروژه‌ها
                  </h1>
              </header>
              <div className="p-4 bg-gray-200 rounded-lg">
                  <Accordion title="پنل پیامک" answer="شرکت برج الکترونیک شیراز سرویس‌های پیام‌دهی تحت وب با واسط کاربری ساده و کارآمد برای سازمان‌ها ارائه می‌دهد." />
                  <Accordion title="برج IT شیراز" answer="برج آی تی با افزایش ارتفاع به ۱۱ طبقه با هدف میزبانی از تمام سایتهای کشور اقدام به استقرار مرکز داده یا دیتاسنتر در طبقه دهم کرده است." />
                  <Accordion title="دیتا سنتر" answer="شرکت برج الکترونیک شیراز، در جنوب کشور به عنوان یکی از 5 مرکز داده مورد تایید در سطح کشور می باشد." />
                  <Accordion title="سالن اجتماعات هوشمند" answer="شرکت برج الکترونیک شیراز، برخوردار از یکی از نوین ترین سالن های هوشمند اجتماعات در حنوب کشور است." />
              </div>
        </div>

    );
};

export default Projects;