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
                  <Accordion/>
              </div>
        </div>

    );
};

export default Projects;