"use client";
import ContactForm from "./ContactForm";
const services = [
  {
    number: "01",
    title: "Anxiety & Panic Therapy",
    description:
      "Work through constant worry, panic, overthinking, and tension with supportive, evidence-based care.",
  },
  {
    number: "02",
    title: "Trauma Therapy",
    description:
      "Explore past experiences at a pace that prioritizes safety, stabilization, and emotional regulation.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    description:
      "Create healthier boundaries, ease internal pressure, and find more sustainable ways to live and work.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#253b35]">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[#e4e4d9] bg-[#faf8f4]/95 px-6 py-5 backdrop-blur md:px-16">
        <a href="#" className="text-2xl font-semibold tracking-tight">
          maya<span className="text-[#a46f50]">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#services" className="hover:text-[#a46f50]">Services</a>
          <a href="#approach" className="hover:text-[#a46f50]">My approach</a>
          <a href="#about" className="hover:text-[#a46f50]">About</a>
          <a href="#office" className="hover:text-[#a46f50]">Office</a>
        </nav>

        <a
          href="mailto:hello@example.com"
          className="rounded-full bg-[#344f43] px-5 py-3 text-sm text-white transition hover:bg-[#263d33]"
        >
          Get in touch
        </a>
      </header>

      <section className="grid items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-16 md:py-24">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[#a46f50]">
            Therapy for adults · Santa Monica, California
          </p>

          <h1 className="max-w-xl text-4xl font-medium leading-tight md:text-6xl">
            A space to feel heard, understood, and more like yourself.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#65716a]">
            Support for anxiety, panic, trauma, stress, and burnout.
            Together, we can work toward feeling more grounded, confident,
            and connected to yourself.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#344f43] px-7 py-4 text-white transition hover:bg-[#263d33]"
            >
              Schedule a consultation
            </a>

            <a
              href="#approach"
              className="rounded-full border border-[#c8cec4] px-7 py-4 transition hover:bg-white"
            >
              Explore my approach
            </a>
          </div>

          <p className="mt-5 text-sm leading-6 text-[#65716a]">
            In-person therapy in Santa Monica and secure telehealth for
            clients located in California.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <img
            src="/office1.jpeg"
            alt="A comfortable therapy office with natural light"
            className="h-[360px] w-full rounded-[45%_45%_12px_12px] object-cover md:h-[500px]"
          />

          <div className="absolute -bottom-5 left-3 max-w-xs rounded-2xl bg-white p-5 shadow-lg md:-left-8">
            <p className="text-sm leading-6 text-[#65716a]">
              You don't have to figure everything out on your own.
            </p>
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="scroll-mt-24 bg-[#e9eee6] px-6 py-16 text-center md:px-16 md:py-20"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-[#a46f50]">
          A warm, collaborative approach
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-medium leading-snug md:text-4xl">
          Therapy that meets you where you are.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl leading-8 text-[#65716a]">
          Sessions are structured enough to feel supportive while leaving
          room for reflection and depth. I integrate cognitive-behavioral
          therapy (CBT), EMDR, mindfulness-based practices, and
          body-oriented techniques to support both emotional and
          physiological well-being.
        </p>
      </section>

      <section
        id="services"
        className="scroll-mt-24 px-6 py-20 md:px-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[#a46f50]">
            How I can help
          </p>

          <h2 className="mt-4 text-3xl font-medium md:text-4xl">
            Support for what you're carrying.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[#65716a]">
            You may be managing everything on the outside while feeling
            exhausted or overwhelmed inside. Therapy can give you space
            to slow down and understand what you need.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-[#e4e4d9] bg-white p-7 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm text-[#a46f50]">{service.number}</p>

                <h3 className="mt-5 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-[#65716a]">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-block text-sm font-semibold underline underline-offset-4"
                >
                  Get support
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 grid gap-10 bg-[#f0e8de] px-6 py-16 md:grid-cols-2 md:items-center md:px-16 md:py-24"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#a46f50]">
            A little about me
          </p>

          <h2 className="mt-4 text-3xl font-medium md:text-4xl">
            Meet Dr. Maya Reynolds, PsyD
          </h2>

          <p className="mt-5 leading-8 text-[#59665e]">
            I'm a licensed clinical psychologist based in Santa Monica,
            California. I work with adults navigating anxiety, panic,
            trauma, burnout, perfectionism, and the pressure to keep
            pushing through.
          </p>

          <p className="mt-4 leading-8 text-[#59665e]">
            My approach is warm, collaborative, and grounded. Trauma
            work is paced carefully, with an emphasis on safety,
            stabilization, and helping you feel more regulated in
            daily life.
          </p>

          <p className="mt-4 leading-8 text-[#59665e]">
            My goal is to support meaningful change, build resilience,
            and help you develop a stronger relationship with yourself.
          </p>
        </div>

        <div className="rounded-2xl bg-white/80 p-6 md:p-8">
          <img
            src="/Dr.%20Maya%20Reynolds.png"
            alt="Dr. Maya Reynolds, PsyD"
            className="mx-auto mb-6 h-72 w-full rounded-xl object-contain object-top md:h-96"
          />

          <p className="text-sm uppercase tracking-[0.2em] text-[#a46f50]">
            My approach
          </p>

          <blockquote className="mt-4 text-xl leading-relaxed">
            "I believe therapy works best when clients feel respected,
            understood, and actively involved in the process."
          </blockquote>

          <p className="mt-4 text-sm text-[#65716a]">
            Dr. Maya Reynolds, PsyD
          </p>
        </div>
      </section>

      <section
        id="office"
        className="scroll-mt-24 px-6 py-20 md:px-16 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="grid gap-4">
            <img
              src="/office1.jpeg"
              alt="Therapy office with tall windows and comfortable seating"
              className="h-64 w-full rounded-2xl object-cover md:h-80"
            />

            <img
              src="/office2.jpeg"
              alt="Welcoming therapy office with seating and bookshelves"
              className="h-56 w-full rounded-2xl object-cover md:h-64"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#a46f50]">
              Our office
            </p>

            <h2 className="mt-4 text-3xl font-medium md:text-4xl">
              A calmer space to begin.
            </h2>

            <p className="mt-5 leading-8 text-[#65716a]">
              My office is a quiet, private space designed to feel calm
              and grounding, with natural light and a comfortable,
              uncluttered environment.
            </p>

            <p className="mt-5 font-semibold">
              Dr. Maya Reynolds, PsyD
            </p>

            <p className="mt-2 leading-7 text-[#65716a]">
              123th Street 45 W, Santa Monica, CA 90401
            </p>

            <p className="mt-3 leading-7 text-[#65716a]">
              In-person sessions in Santa Monica and secure telehealth
              sessions for clients located in California.
            </p>
          </div>
        </div>
        </section>
        <ContactForm />
        

      <footer className="flex flex-col gap-3 px-6 py-8 text-sm text-[#65716a] md:flex-row md:justify-between md:px-16">
        <p>© 2026 Dr. Maya Reynolds, PsyD</p>
        <p>Santa Monica, California · Telehealth across California</p>
      </footer>
    </main>
  );
}
