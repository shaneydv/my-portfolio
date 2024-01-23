import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 mb-8">
          As a seasoned Full Stack Java Developer, I am passionate about
          unraveling the intricacies of technology and crafting innovative
          solutions. My journey began with the enchantment of computer games,
          sparking a lifelong curiosity to understand the magic behind their
          creation. This passion evolved into a robust skill set that spans
          Java, Spring Boot, Spring MVC, REST API, Microservices, Kafka, React,
          TypeScript, HTML, CSS, JavaScript, Python, Jenkins, and AWS Cloud.
          Holding a B.Tech degree in Computer Science, I graduated with 9.3
          CGPA, showcasing a strong academic foundation complemented by
          real-world experiences.
        </p>

        <p className="text-xl mb-8">
          In my professional endeavors, I've left an indelible mark as a
          Software Engineer Intern at PeopleHum Technologies, where I played a
          pivotal role in implementing critical HR software functionalities and
          led the backend development of timesheet integration. I've further
          demonstrated my capabilities as a Web Developer Intern at The Sparks
          Foundation, crafting dynamic banking websites with prowess in HTML,
          CSS, and JavaScript. I excel at tackling complicated problems using my
          analytical and logical thinking. My passion lies in keeping up-to-date
          with the latest technologies, and I have in-depth knowledge of
          fundamental subjects such as Data Structures and Algorithms, Database
          Management Systems, and Operating Systems.
        </p>
      </div>
    </div>
  );
};

export default About;
