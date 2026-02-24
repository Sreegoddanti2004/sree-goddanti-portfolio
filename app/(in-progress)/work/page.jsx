import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work | Sree Goddanti',
  description:
    'Media professional with experience in television production, digital marketing, podcast production, and film direction.',
};

export default function Work() {
  return (
    <Transition>
      <div className="min-h-screen bg-secondary-foreground p-8 text-background md:p-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-12 text-4xl font-bold md:text-6xl">Work Experience</h1>
          
          {/* Work Experience Section */}
          <div className="space-y-12">
            {/* Gemini Television */}
            <div className="border-l-4 border-primary pl-6">
              <h2 className="mb-2 text-2xl font-semibold">INTERN – GEMINI TELEVISION</h2>
              <div className="mb-4 text-muted-foreground">
                <p className="font-medium">Location: Hyderabad, India</p>
                <p className="font-medium">Duration: 01/04/2021 – 31/05/2021</p>
              </div>
              <p className="mb-4 leading-relaxed">
                I worked as an intern for Gemini Television, a satellite network. I worked as assistant director and was in charge of auditioning participants for &quot;Evaru Meelo Koteeswarulu,&quot; the Telugu version of &quot;Who Wants to Be a Millionaire.&quot; During my internship, I had the opportunity to witness the audition process of a reality game show. This gave me a better understanding of the technicalities and logistics of content creation.
              </p>
              <p className="text-sm text-muted-foreground">Internship Letter: GeminiTVInternship</p>
            </div>

            {/* Zee Telugu */}
            <div className="border-l-4 border-primary pl-6">
              <h2 className="mb-2 text-2xl font-semibold">DIGITAL MARKETING INTERN – ZEE TELUGU</h2>
              <div className="mb-4 text-muted-foreground">
                <p className="font-medium">Location: Hyderabad, India</p>
                <p className="font-medium">Duration: 28/03/2021 – 28/05/2021</p>
              </div>
              <p className="mb-4 leading-relaxed">
                With increased content consumption in the digital age, understanding and analysing data to conceptualize a digital campaign to attract a viewer&apos;s attention. Zee is a television channel in Hyderabad that curates material for its local audience, including fiction and non-fiction shows. During this internship, I worked to create digital marketing campaigns for Zee Telugu&apos;s Instagram and Facebook accounts. And create engagement by coming up with ideas for posts, reels and stories for their socials.
              </p>
              <p className="text-sm text-muted-foreground">Internship Letter: Zee Letter</p>
            </div>

            {/* You Know What I Mean Podcast */}
            <div className="border-l-4 border-primary pl-6">
              <h2 className="mb-2 text-2xl font-semibold">Episode Producer – &quot;You Know What I Mean&quot; (Powered by Just Girling)</h2>
              <p className="mb-4 leading-relaxed">
                Episode producer for an all girls Telugu podcast called &quot;You know what I mean&quot; powered by Just girling. I lead the end to end creative and production process. Right from ideating relevant and engaging topics to structuring the episodes. Work closely with the hosts to refine their narratives and guide conversations in order to maintain the tone of the show. I also oversee the execution during recording to ensure alignment with the vision.
              </p>
            </div>

            {/* Kubera */}
            <div className="border-l-4 border-primary pl-6">
              <h2 className="mb-2 text-2xl font-semibold">Kubera – Associate Director</h2>
              <div className="mb-4 space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-medium">Initial Role: Intern</h3>
                  <p className="mb-2 leading-relaxed">Began journey on this project as an intern.</p>
                </div>
                
                <div>
                  <h3 className="mb-2 text-lg font-medium">Costume Department</h3>
                  <p className="mb-2 leading-relaxed">
                    Worked in the department of costumes. Worked across multiple departments which helped me understand the overall filmmaking workflow. Over time transitioned to an assistant director working in the costume department. Handling costumes, coordinating looks, continuity and other on-set requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="mb-2 text-lg font-medium">Post Production & Growth</h3>
                  <p className="leading-relaxed">
                    Later contributed to multiple post production aspects of the project, which led to the role as an Associate Director.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies and Interests Section */}
          <div className="mt-16">
            <h2 className="mb-8 text-3xl font-bold">Hobbies and Interests</h2>
            <div className="space-y-12">
              {/* Film Club */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="mb-2 text-2xl font-semibold">Film Club</h3>
                <p className="mb-4 leading-relaxed">
                  Member of school film club, which included weekly screenings of hand-picked films followed by discussions on philosophical issues such as epistemology, memory, personal identity, gender, ethics, politics, and religion. Self-awareness, the consequences of identification with thoughts and feelings, the constraints of human knowledge, and the nature and boundaries of moral judgment were frequently debated.
                </p>
                <a 
                  href="https://urlzs.com/y1HHg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Certification: https://urlzs.com/y1HHg
                </a>
              </div>

              {/* Writing */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="mb-2 text-2xl font-semibold">Writing</h3>
                <p className="mb-4 leading-relaxed">
                  Cinema has always been a very influential type of entertainment and has always played a major role in life. Every movie has given something to take home as a lesson. Whether television, film, or any other media, it is a powerful tool. As a woman, there is disappointment by the lack of accurate representation of gender in films and on television, particularly in the region.
                </p>
                <p className="mb-4 leading-relaxed">
                  The blog &quot;chalaname chitramu&quot; is a platform discussing how specific films and scenes influence the audience to think in certain ways or believe in certain things. It is a space to talk about stories that defy tropes and break stereotypes. It mostly focuses on highlighting scenes with inaccurate portrayals that are sexist in nature, although it also respects work that opposes these situations.
                </p>
                <a 
                  href="https://www.instagram.com/chalaname_chithramu_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Instagram Account: https://www.instagram.com/chalaname_chithramu_/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
