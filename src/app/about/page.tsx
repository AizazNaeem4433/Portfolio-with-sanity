"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  message: string;
};

const About: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch (error) {
      console.error("Email send error:", error);
    }
  };

  return (
    <main>
      <section className="bg-[#f7f9fc] text-[#0d1117] py-12 px-5 font-sans animate-fade-in">
        <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-xl font-medium uppercase tracking-wider mb-2 bg-gradient-to-r from-black to-royalblue bg-clip-text text-transparent animate-slide-up">
  INTRODUCTION
</h2>
<h1 className="text-4xl font-bold mb-5 bg-gradient-to-r from-black to-royalblue bg-clip-text text-transparent animate-slide-up">
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

      {/* Two-column contact section */}
      <section className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-10 px-10 py-16 bg-[#f7f9fc] animate-fade-in">
        {/* Left Message with gradient heading */}
        <div className="flex-1 flex flex-col justify-center animate-slide-up">
          <h4 className="text-2xl font-bold mb-5 bg-gradient-to-r from-gray-500 to-blue-700 text-transparent bg-clip-text">
            Let's contact to start an Awesome journey.
          </h4>
          <p className="text-[#555]">
            Feel free to reach out via this form. I'll get back to you as soon as possible!
          </p>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form w-full max-w-md animate-slide-up"
        >
          <h2 className="title">Contact Me</h2>

          <label>
            <input
              className="input"
              {...register("firstName", { required: true })}
              placeholder=" "
              required
            />
            <span>First Name</span>
            {errors.firstName && (
              <span className="text-red-500">This field is required</span>
            )}
          </label>

          <label>
            <input
              className="input"
              {...register("lastName", { required: true })}
              placeholder=" "
              required
            />
            <span>Last Name</span>
            {errors.lastName && (
              <span className="text-red-500">This field is required</span>
            )}
          </label>

          <label>
            <input
              className="input"
              type="tel"
              {...register("phoneNumber", {
                required: true,
                pattern: /^[0-9]{10,14}$/,
              })}
              placeholder=" "
              required
            />
            <span>Phone Number</span>
            {errors.phoneNumber && (
              <span className="text-red-500">
                Please enter a valid phone number
              </span>
            )}
          </label>

          <label>
            <input
              className="input"
              type="email"
              {...register("email", { required: true })}
              placeholder=" "
              required
            />
            <span>Email</span>
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </label>

          <label>
            <textarea
              className="input"
              {...register("message", { required: true })}
              placeholder=" "
              rows={4}
              required
            />
            <span>Message</span>
            {errors.message && (
              <span className="text-red-500">This field is required</span>
            )}
          </label>

          <button className="submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitted && (
            <p className="message text-green-500 text-sm mt-3">
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </section>
    </main>
  );
};

export default About;
