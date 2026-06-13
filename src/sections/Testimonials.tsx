import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import avatar1 from "@/assets/projects/client-rashed.webp"
import avatar2 from "@/assets/projects/client-aminul.webp"

const testimonials = [
    {
        name: "Rasheduzzaman Rashed",
        position: "Owner, Amyra Enterprise",
        text: "আমার প্রত্যাশার থেকেও বেশি পেয়েছি। এখন মানুষ আমাকে প্রফেশনাল বিজনেস মনে করে।",
        avatar: avatar1,
        project: "amyra.com.bd · Ongoing maintenance",
    },
    {
        name: "Aminul Islam Bulbul",
        position: "Co-founder, Biddaloy",
        text: "শামীম ভাইয়া শুধু ওয়েব ডেভেলপমেন্ট না, বিজনেস নিয়েও খুব ভালো বুঝেন। আমাদের প্রজেক্টে উনার টেকনিক্যাল স্কিল, বিজনেস আন্ডারস্ট্যান্ডিং এবং গাইডেন্স অনেক হেল্পফুল ছিল।",
        avatar: avatar2,
        project: "biddaloy.com.bd · Full-stack platform",
    },
];
 
export const TestimonialsSection = () => {
    return (
        <section className="py-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="Client Feedback"
                    title="Words from Real Clients"
                    description="Feedback from production clients I worked with end to end."
                />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="p-6 md:p-8">
                            <div className="flex items-center gap-4">
                                <div className="size-14 bg-gray-700 rounded-full overflow-hidden inline-flex items-center justify-center shrink-0">
                                    <Image src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="font-semibold">{testimonial.name}</div>
                                    <div className="text-sm text-white/40">{testimonial.position}</div>
                                </div>
                            </div>
                            <p className="mt-4 md:mt-6 text-sm md:text-base">
                                {testimonial.text}
                            </p>
                            <p className="mt-3 text-xs text-white/40">
                                Project: {testimonial.project}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};