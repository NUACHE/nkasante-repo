"use client";
import { ProjectsList } from "@/db";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Projects() {
  const topProjects = ProjectsList.slice(0, 5);
  return (
    <section className="w-full">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl lg:text-3xl text-left font-bold text-primary-light dark:text-primary-dark"
      >
        Projects
      </motion.h1>
      <section className="grid grid-cols-1 gap-16 my-5">
        {topProjects.map((item) => {
          return (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              key={item.id}
              className="col-span-1 w-full"
            >
              <section className="bg-[#ffffff] dark:bg-[#121212] md:h-[550px] lg:h-[650px] rounded-xl border-[5px] md:border-[10px] dark:border-[#404040] p-5">
                <section>
                  <section className="flex flex-col md:flex-row md:justify-between md:items-center h-[10%]">
                    <section>
                      <h3 className="text-xl xl:text-2xl text-primary-light dark:text-primary-dark">
                        {item.title}
                      </h3>
                      <p>{item.about}</p>
                    </section>
                    <a
                      target="_blank"
                      href={`https://${item.link}`}
                      className="text-[#777777] hover:text-primary-light dark:hover:text-primary-dark ease duration-500 flex items-center gap-2"
                    >
                      {item.link}
                      <BsArrowRight />
                    </a>
                  </section>
                  <section className="flex gap-5 flex-wrap">
                    {item.stack.map((stack) => {
                      return (
                        <div
                          key={stack.id}
                          className="text-xl lg:text-2xl hover:text-primary-light dark:hover:text-primary-dark ease duration-500 mt-3"
                        >
                          <stack.icon />
                        </div>
                      );
                    })}
                  </section>
                </section>
                <Image
                  src={item.img}
                  alt={item.title}
                  className="rounded-3xl w-full h-[90%] object-cover"
                />
              </section>
            </motion.section>
          );
        })}
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-left font-bold text-primary-light dark:text-primary-dark flex items-center gap-2"
      >
        <Link href={`/projects`}>
          <motion.h1>View More</motion.h1>
        </Link>
        <BsArrowRight />
      </motion.section>
    </section>
  );
}

export default Projects;
