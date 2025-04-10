import { myProjects, mySkills } from "../constants"


const About = () => {
  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-2 xl:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            {/* Base Infor */}
            <div className="col-span-1 xl:row-span-3">
              <div className="grid-container">
                <img src="/assets/avatar.jpg" alt="avatar" className="w-full sm:h-[276px] h-fit object-cover rounded-lg"/>
                <div className="">
                  <p className="grid-headtext">Hi, I'm Nguyen Thanh Phuc</p>
                  <p className="grid-subtext">I am a fourth-year Software Engineering student at Saigon University in Vietnam. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js and I'm always eager to learn more. </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="col-span-1 xl:row-span-3">
              <div className="grid-container">
                <h1 className="grid-headtext">My Tech Stack</h1>
                <div className="flex h-full flex-col justify-between gap-3"> 
                  <div className="flex justify-center items-center flex-wrap gap-5">
                    <div className="flex flex-wrap justify-center items-center gap-5 w-full max-w-4xl">
                        {mySkills.map((skill, index) => (
                            <div key={index} className="tech-logo">
                              <img src={skill.path} alt={skill.id} className="w-full h-auto" />
                            </div>
                        ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between mb-1 gap-5">
                    <div className="flex justify-between">
                      <h1 className="grid-headtext">Frontend</h1>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-purple-600 h-2.5 rounded-full w-[75%]"></div>
                    </div>
                    <div className="flex justify-between">
                      <h1 className="grid-headtext">Backend</h1>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full w-[60%]"></div>
                    </div>
                </div>
    
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default About