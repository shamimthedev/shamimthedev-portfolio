import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import avatar1 from "@/assets/images/memoji-avatar-1.png"

const testimonials = [
    {
        name: "Rasheduzzaman Rashed",
        position: "Owner, Amyra Enterprise",
        text: "আমার expectation থেকেও বেশি পেয়েছি। এখন মানুষ আমাকে professional business মনে করে।",
        avatar: avatar1,
    },
];

export const TestimonialsSection = () => {
    return (
        <>
            <section className='py-16 lg:py-24'>
                <div className="container">
                    <SectionHeader eyebrow="Client Feedback"
                        title="Words from a Real Client"
                        description="Feedback from a production client I worked with end to end." />
                    <div className="mt-12 flex justify-center">
                        <Card className="p-6 max-w-xl md:p-8">
                            <div className="flex items-center gap-4">
                                <div className="size-14 bg-gray-700 rounded-full inline-flex items-center justify-center shrink-0">
                                    <Image src={testimonials[0].avatar} alt={testimonials[0].name} />
                                </div>
                                <div>
                                    <div className="font-semibold">{testimonials[0].name}</div>
                                    <div className="text-sm text-white/40">{testimonials[0].position}</div>
                                </div>
                            </div>
                            <p className="mt-4 md:mt-6 text-sm md:text-base">
                                {testimonials[0].text}
                            </p>
                            <p className="mt-3 text-xs text-white/40">
                                Project: amyra.com.bd · Ongoing maintenance
                            </p>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
};
