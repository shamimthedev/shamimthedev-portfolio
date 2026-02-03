import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import avatar1 from "@/assets/images/memoji-avatar-1.png"
import avatar2 from "@/assets/images/memoji-avatar-2.png"
import avatar3 from "@/assets/images/memoji-avatar-3.png"
import avatar4 from "@/assets/images/memoji-avatar-4.png"
import avatar5 from "@/assets/images/memoji-avatar-5.png"

const testimonials = [
  {
    name: "Elham Khan",
    position: "Marketing Manager @NestMart",
    text: "Shamim was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: avatar1,
  },
  {
    name: "Habiba Amir",
    position: "Head of Design @eMoogli",
    text: "Working with Shamim was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: avatar2,
  },
  {
    name: "Jahidul Bashar",
    position: "CEO @HouseDecor",
    text: "Shamim's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: avatar3,
  },
  {
    name: "Shaidul Islam",
    position: "Product Manager @NestMart",
    text: "Shamim is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: avatar4,
  },
  {
    name: "Hamim Biswas",
    position: "Director of IT @eMoogli",
    text: "Shamim's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: avatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <>
      <section className='py-16 lg:py-24'>
        <div className="container">
          <SectionHeader eyebrow="Happy Clients" title="What Clients Say about Me" description="See what my clients have to say about my work." />
          <div className="mt-12 lg:mt-20 flex overflow-x-clip mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
            <div className="flex gap-8 pr-8 flex-none move-left [animation-duration:90s] hover:[animation-play-state:paused]">
              {[...new Array(2)].fill(0).map((_, index) => (
                <Fragment key={index}>
                  {testimonials.map((testimonial) => (
                    <Card key={testimonial.name} className="p-6 max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300">
                      <div className="flex items-center gap-4">
                        <div className="size-14 bg-gray-700 rounded-full inline-flex items-center justify-center shrink-0">
                          <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-white/40">{testimonial.position}</div>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                    </Card>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
