import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact | Sree Goddanti',
  description:
    'Get in touch with Sree Goddanti - Media professional and content creator based in Hyderabad, India.',
};

export default function Contact() {
  return (
    <Transition>
      <div className="min-h-screen bg-secondary-foreground p-8 text-background md:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-12 text-4xl font-bold md:text-6xl">Contact</h1>
          
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-medium">Email</h3>
                  <a 
                    href="mailto:sreegoddanti05@gmail.com"
                    className="text-primary hover:underline"
                  >
                    sreegoddanti05@gmail.com
                  </a>
                </div>
                
                <div>
                  <h3 className="mb-2 text-lg font-medium">Phone</h3>
                  <a 
                    href="tel:+919246367104"
                    className="text-primary hover:underline"
                  >
                    +91 92463 67104
                  </a>
                </div>
                
                <div>
                  <h3 className="mb-2 text-lg font-medium">Location</h3>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-primary pl-6">
              <h2 className="mb-4 text-2xl font-semibold">Connect</h2>
              <div className="space-y-4">
                <div>
                  <a 
                    href="https://www.instagram.com/chalaname_chithramu_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Instagram: @chalaname_chithramu_
                  </a>
                </div>
                
                <div>
                  <a 
                    href="https://www.linkedin.com/in/sree-goddanti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    LinkedIn: Sree Goddanti
                  </a>
                </div>
                
                <div>
                  <a 
                    href="https://urlzs.com/y1HHg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Film Club Certification
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
