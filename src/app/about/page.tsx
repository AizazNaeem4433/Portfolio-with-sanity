import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-[#f7f9fc] text-[#0d1117] py-12 px-5 font-sans animate-fade-in">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-xl font-medium uppercase tracking-wider mb-2 text-[#0d1117] animate-slide-up">
          INTRODUCTION
        </h2>
        <h1 className="text-4xl font-bold mb-5 text-[#0d1117] animate-slide-up">
          Overview.
        </h1>
        <p className="text-base leading-6 mb-2 animate-slide-up">
          Welcome to the world of Aizaz, where technology and creativity converge to create extraordinary digital experiences. With a relentless passion for software engineering and a deep expertise in full-stack development, I specialize in transforming innovative ideas into reality. My skill set spans from dynamic frontend interfaces using React and Next.js to robust backend solutions with Node.js and PostgreSQL.
        </p>
        <p className="text-base leading-6 mb-2 animate-slide-up">
          Beyond coding, I am dedicated to continuous learning and collaboration, ensuring that every project I touch is not only efficient and scalable but also groundbreaking. Join me on a journey to push the boundaries of web development and discover what we can achieve together.
        </p>
      </div>
    </section>
  );
};

export default About;
