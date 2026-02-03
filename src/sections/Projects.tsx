import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import ArrowUpRightDownIcon from '@/assets/icons/arrow-up-right.svg'
import CheckboxIcon from '@/assets/icons/check-circle.svg'
import { projects } from "@/data/projects";

export const ProjectsSection = () => {
  return (
    <section id='projects' className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader 
          eyebrow="Real-world Results" 
          title="Featured Projects" 
          description="See how I transformed concepts into engaging digital experiences." 
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {projects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="p-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  {project.category && (
                    <div className="inline-block bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-bold tracking-widest text-xs uppercase mb-2">
                      {project.category}
                    </div>
                  )}

                  {project.tech && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.map((item, index) => (
                        <span
                          key={index}
                          className="bg-white/5 border border-white/10 text-white/70 px-2 py-0.5 rounded-full text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  <h3 className="font-serif text-2xl md:text-3xl mt-2">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-white/5 mt-3 md:mt-4" />
                  
                  <ul className="flex flex-col gap-2.5 mt-3 md:mt-4">
                    {project.highlights.map((highlight, index) => (
                      <li
                        className="flex gap-2 text-sm text-white/50"
                        key={index}
                      >
                        <CheckboxIcon className='size-5 flex-shrink-0' />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row mt-6 gap-3 relative z-10">
                    <a 
                      href={project.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-white bg-white text-gray-900 px-5 h-11 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 cursor-pointer"
                      aria-label="Live Site"
                    >
                      <span className="font-semibold w-max">Live Site</span>
                      <ArrowUpRightDownIcon className='size-5' />
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};