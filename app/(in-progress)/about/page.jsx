import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About | Sree Goddanti',
  description:
    'Media professional and content creator with experience in television, digital marketing, and film production.',
};

export default function About() {
  return (
    <Transition>
      <div className="min-h-screen bg-secondary-foreground p-8 text-background md:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8 text-4xl font-bold md:text-6xl">About Me</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="mb-8 text-lg leading-relaxed md:text-xl">
I’m an Assistant Director who enjoys the quiet work that holds a film together. 
I like being where ideas take shape between planning and the chaos of set life. 
From prep to shoot days, I focus on clarity and keeping things moving smoothly. Curious by nature and drawn to stories, 
I’m learning with every project I’m part of.
            </p>

            <h2 className="mt-12 mb-6 text-2xl font-bold md:text-3xl">Education</h2>
            
            <div className="mb-12 space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold">University of Amsterdam</h3>
                <p className="text-muted-foreground">Media and Culture</p>
                <p className="text-sm text-muted-foreground">01/09/2022 – 10/03/2023</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold">Sahyadri School – Krishnamurti Foundation India</h3>
                <p className="text-muted-foreground">Indian School Certificate (ISC) - Class 11 & 12</p>
                <p className="text-sm text-muted-foreground">31/05/2020 – Present</p>
                <p className="text-sm">Tiwai Hill, Tal: Rajgurunagar (Khed), Pune, India</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold">Vidyaranya High School</h3>
                <p className="text-muted-foreground">Indian Certificate of Secondary Education (ICSE) - Nursery to 10th Grade</p>
                <p className="text-sm text-muted-foreground">13/06/2007 – 26/03/2020</p>
                <p className="text-sm">Green Gates Apartment, 5-9-20, NH 44, Opposite Secretariat, Saifabad, Khairtabad, Hyderabad, India</p>
              </div>
            </div>

            <h2 className="mt-12 mb-6 text-2xl font-bold md:text-3xl">Why Films?</h2>
            <p className="text-lg leading-relaxed">
Cinema has been a part of my life for as long as I can remember. Growing up surrounded by films, I learnt very early on that it means more to me than just entertainment.

Every film I watch leaves me with something to carry forward, shaping how I see the world. Playing even a small role to create something that has the magic to change the way people think and feel is what truly drives me.

That’s why I see cinema as the most powerful form of story telling. It’s personal, transformative and impactful.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  );
}
