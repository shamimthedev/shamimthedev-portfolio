'use client'

import { Card } from "@/components/Card"
import SectionHeader from "@/components/SectionHeader"
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import mapImage from '@/assets/images/dhaka-map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TypecriptIcon from "@/assets/icons/typescript.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextJsIcon from "@/assets/icons/nextjs.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { CardHeader } from '@/components/CardHeader'
import { ToolboxItems } from "@/components/ToolboxItems";
import { useRef } from "react";

const toolboxItems = [
    { title: 'JavaScript', iconType: JavascriptIcon },
    { title: 'TypeScript', iconType: TypecriptIcon },
    { title: 'HTML5', iconType: HtmlIcon },
    { title: 'CSS3', iconType: CssIcon },
    { title: 'React', iconType: ReactIcon },
    { title: 'Next.Js', iconType: NextJsIcon },
    { title: 'Github', iconType: GithubIcon },
]

const hobbies = [
    { title: 'Painting', emoji: '🎨', left: '5%', top: '5%' },
    { title: 'Photography', emoji: '📷', left: '50%', top: '5%' },
    { title: 'Hiking', emoji: '🥾', left: '35%', top: '40%' },
    { title: 'Gaming', emoji: '🎮', left: '10%', top: '35%' },
    { title: 'Music', emoji: '🎵', left: '70%', top: '45%' },
    { title: 'Fitness', emoji: '🏋️', left: '5%', top: '65%' },
    { title: 'Reading', emoji: '📖', left: '45%', top: '70%' },
]

export const AboutSection = () => {
    const constraintRef = useRef<HTMLDivElement>(null);

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        const tag = e.currentTarget;
        const container = constraintRef.current;
        if (!container) return;

        // Capture pointer so we get events even outside the element
        tag.setPointerCapture(e.pointerId);

        const containerRect = container.getBoundingClientRect();
        const tagRect = tag.getBoundingClientRect();

        // Offset from pointer to top-left corner of the tag
        const offsetX = e.clientX - tagRect.left;
        const offsetY = e.clientY - tagRect.top;

        // Switch from % to px so dragging works predictably
        const startLeft = tagRect.left - containerRect.left;
        const startTop = tagRect.top - containerRect.top;
        tag.style.left = `${startLeft}px`;
        tag.style.top = `${startTop}px`;

        tag.style.cursor = 'grabbing';
        tag.style.zIndex = '20';

        const onPointerMove = (moveEvent: PointerEvent) => {
            const newLeft = moveEvent.clientX - containerRect.left - offsetX;
            const newTop = moveEvent.clientY - containerRect.top - offsetY;

            // Clamp so the tag stays inside the container
            const maxLeft = containerRect.width - tagRect.width;
            const maxTop = containerRect.height - tagRect.height;

            tag.style.left = `${Math.max(0, Math.min(newLeft, maxLeft))}px`;
            tag.style.top = `${Math.max(0, Math.min(newTop, maxTop))}px`;
        };

        const onPointerUp = () => {
            tag.style.cursor = 'grab';
            tag.style.zIndex = '10';
            tag.removeEventListener('pointermove', onPointerMove);
            tag.removeEventListener('pointerup', onPointerUp);
        };

        tag.addEventListener('pointermove', onPointerMove);
        tag.addEventListener('pointerup', onPointerUp);
    };

    return (
        <section id="about" className='py-20 lg:py-28'>
            <div className='container'>
                <SectionHeader
                    eyebrow="About"
                    title="Developer, Builder, Problem Solver"
                    description="I design and build fast, usable web experiences with a strong focus on real business outcomes."
                />
                <div className="mt-20 flex flex-col gap-8">
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
                        <Card className="h-80 md:col-span-2 lg:col-span-1">
                            <CardHeader
                                title="Learning Mindset"
                                description="Continuously learning through books, docs, and real-world problem solving."
                            />
                            <div className='w-40 mx-auto mt-2 md:mt-0'>
                                <Image src={bookImage} alt='Book Cover' />
                            </div>
                        </Card>
                        <Card className="h-80 md:col-span-3 lg:col-span-2">
                            <CardHeader
                                title='My Toolbox'
                                description="Technologies I use daily to build scalable, production-ready interfaces."
                                className=''
                            />
                            <ToolboxItems items={toolboxItems} itemsWrapperClassName='move-left' />
                            <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName='move-right' />
                        </Card>
                    </div>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
                        <Card className='h-80 p-0 flex flex-col md:col-span-3 lg:col-span-2'>
                            <CardHeader
                                title='Beyond Work'
                                description='Explore my interests and hobbies beyond the digital realm.'
                                className='px-6 py-6'
                            />
                            {/* Drag container — position:relative is the anchor */}
                            <div className='relative flex-1 overflow-hidden' ref={constraintRef}>
                                {hobbies.map((hobby) => (
                                    <div
                                        key={hobby.title}
                                        onPointerDown={handlePointerDown}
                                        className="inline-flex items-center gap-2 px-6 bg-linear-to-r from-emerald-300/90 to-sky-400/90 rounded-full py-1.5 absolute z-10 cursor-grab select-none touch-none"
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top,
                                        }}
                                    >
                                        <span className="font-medium text-gray-950">{hobby.title}</span>
                                        <span>{hobby.emoji}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Card className='h-80 p-0 relative md:col-span-2 lg:col-span-1'>
                            <Image src={mapImage} alt='map' className='h-full w-full object-cover object-top-left' />
                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[""] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30'>
                                <div className="absolute inset-0 rounded-full -z-20 animate-ping [animation-duration:2s] bg-linear-to-r from-emerald-300 to-sky-400"></div>
                                <div className="absolute inset-0 rounded-full -z-10 bg-linear-to-r from-emerald-300 to-sky-400"></div>
                                <Image src={smileMemoji} alt='Smiling memoji' className='size-20' />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}