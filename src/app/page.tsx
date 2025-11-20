import Hero from '../components/ui/Hero'

const introPillars = [
  'Counsellors & Psychotherapists',
  'Mental Health Educators',
  'Wellness Advocates',
  'Researchers & Innovators'
]

const whyCards = [
  {
    title: 'Global Recognition',
    description: 'Membership open to qualified individuals worldwide with a globally recognised credential.',
    icon: '🌍'
  },
  {
    title: 'Professional Development',
    description: 'Access international training, webinars, workshops, and certifications with mentors worldwide.',
    icon: '📚'
  },
  {
    title: 'Ethical Standards',
    description: 'Evidence-based practice guidance with high ethical standards that protect both clients and practitioners.',
    icon: '🛡️'
  },
  {
    title: 'International Opportunities',
    description: 'Join conferences, research collaborations, and cross-border initiatives that shape global policy.',
    icon: '✈️'
  }
]

const joinProfiles = [
  'Professional Counsellors',
  'Psychotherapists & Clinical Psychologists',
  'School Counsellors',
  'Social Workers & Life Coaches',
  'Students of Counselling & Psychology',
  'Wellness Practitioners & Educators'
]

const services = [
  ['Mentorship & Career Guidance', 'One-on-one mentoring, case discussions, and personalised growth plans.'],
  ['Job Referrals & Employment Support', 'Global vacancies, references, and mobility advisory.'],
  ['Counselling Centre Support', 'Operational frameworks, supervision models, and ethical audits.'],
  ['Psychosocial Development Programs', 'Community initiatives, trauma support, and youth empowerment labs.'],
  ['Professional Training', 'Workshops, webinars, and international certifications.'],
  ['Legal & Ethical Support', 'Licensing, dispute mediation, and practice governance.'],
  ['Global Networking', 'Virtual forums, international committees, and cross-border clusters.'],
  ['Research & Publications', 'Guidance, editorial support, and conference participation.'],
  ['Institutional Advisory', 'Curriculum development, staff training, and strategic partnerships.'],
  ['Counsellor Wellness', 'Stress management, peer support, and burnout prevention.']
]

const membershipCategories = [
  'Student',
  'Associate',
  'Professional',
  'Senior Professional',
  'Fellow (FGCA)',
  'Corporate',
  'Affiliation',
  'Honorary'
]

const membershipBenefits = [
  'Digital certificate & global ID',
  'Access to webinars & workshops',
  'Job referrals & mentorship',
  'Committee participation & awards'
]

const partnershipTypes = [
  ['Academic', 'Curriculum support, joint certifications, and faculty exchanges.'],
  ['Healthcare', 'Clinical training, ethical protocols, and trauma support.'],
  ['Corporate', 'Employee wellness programs and leadership resilience labs.'],
  ['Government', 'Policy advisory, national counselling standards, and accreditation support.'],
  ['NGO', 'Community counselling, youth initiatives, and psychosocial response teams.']
]

const advocacyPillars = [
  'Counsellor Rights Protection',
  'Ethical Standards & Code of Conduct',
  'Licensing & Practice Guidance',
  'Dispute & Mediation Support',
  'Global Recognition Advocacy',
  'Policy Development & Lobbying',
  'Data Protection & Confidentiality',
  'Emergency & Crisis Response'
]

const applicationSteps = [
  'Personal Information',
  'Upload Credentials',
  'Select Membership Category',
  'Secure Payment',
  'Review & Submit',
  'Approval & Digital Certificate'
]

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Hero />

      <main className="space-y-24 pb-24">
        <section className="max-w-6xl mx-auto px-6 pt-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-sm font-semibold text-indigo-600">Global Counsellors, United for Impact</p>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
                We unite counsellors, psychotherapists, psychologists, educators, and advocates dedicated to holistic
                well-being worldwide.
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                GCA empowers professionals with cross-continental knowledge exchange, trauma-informed frameworks, and
                compassionate leadership so communities can access ethical and culturally responsive care.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {introPillars.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-indigo-200 via-emerald-100 to-transparent blur-3xl opacity-70" />
              <div className="relative rounded-3xl border border-indigo-100 bg-white/80 backdrop-blur p-6 shadow-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Connections</p>
                <h3 className="mt-3 text-2xl font-semibold">Illustrated global network</h3>
                <p className="mt-4 text-slate-600">
                  Visualise counsellors collaborating across continents through live cohorts, research labs, and regional
                  chapters supported by GCA.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  {['Africa', 'Asia', 'Europe', 'Americas', 'Oceania', 'Middle East'].map((region) => (
                    <div key={region} className="rounded-2xl bg-slate-100 py-4 text-sm font-semibold text-slate-700">
                      {region}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6" id="services">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-600">Why Choose GCA</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Trusted, ethical, and globally connected</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-100/60 transition hover:-translate-y-1 hover:border-indigo-100"
              >
                <span className="text-3xl">{card.icon}</span>
                <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6" id="membership">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-white via-indigo-50 to-slate-50 p-10 shadow-xl">
            <div className="text-center">
              <p className="text-sm font-semibold text-indigo-600">Who Can Join</p>
              <h2 className="mt-3 text-3xl font-semibold">Belong to a dynamic, diverse community</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {joinProfiles.map((profile) => (
                <div key={profile} className="rounded-2xl border border-white/0 bg-white/70 p-6 backdrop-blur">
                  <p className="text-lg font-semibold text-slate-800">{profile}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6" id="partnerships">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-600">Our Services</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Support designed for modern practice</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map(([title, description]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6" id="legal">
          <div className="rounded-[2.5rem] bg-slate-900 p-10 text-white">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-indigo-200">Our Global Impact</p>
                <h2 className="mt-3 text-3xl font-semibold">Evidence of collective change</h2>
                <p className="mt-4 text-slate-300">
                  GCA has championed counselling recognition across every continent, empowered thousands of practitioners,
                  and uplifted communities through psychosocial programs.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  ['7', 'Continents with recognition'],
                  ['180+', 'Member institutions'],
                  ['15k+', 'Practitioners empowered']
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-white/15 bg-white/5 p-6 text-center">
                    <p className="text-3xl font-bold">{value}</p>
                    <p className="mt-2 text-sm text-slate-200">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-600">Join Us Today</p>
            <h2 className="mt-3 text-3xl font-semibold">Membership built for every career stage</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">Categories</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                {membershipCategories.map((category) => (
                  <li key={category} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">Benefits</p>
              <ul className="mt-4 space-y-4 text-slate-700">
                {membershipBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <span className="text-indigo-600">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/apply"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:-translate-y-1"
              >
                Become a GCA Member
              </a>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">Membership Journey</p>
              <div className="mt-6 space-y-6">
                {['Apply', 'Review', 'Approval'].map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <span className="mt-1 h-8 w-8 rounded-full bg-indigo-50 text-center font-semibold leading-8 text-indigo-600">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{step}</p>
                      <p className="text-sm text-slate-500">
                        {index === 0 && 'Submit your credentials and goals'}
                        {index === 1 && 'GCA review & personalised guidance'}
                        {index === 2 && 'Receive credentials & onboarding'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-600">Global Partnerships</p>
            <h2 className="mt-3 text-3xl font-semibold">Building worldwide alliances for mental health</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {partnershipTypes.map(([title, description]) => (
              <div key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-slate-600">{description}</p>
              </div>
            ))}
            <div className="rounded-3xl border border-dashed border-indigo-200 bg-indigo-50/50 p-6 text-center">
              <p className="text-lg font-semibold text-indigo-700">Interactive Map</p>
              <p className="mt-2 text-sm text-indigo-600">Showcase live partner nodes across continents.</p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-600">Legal Protection & Advocacy</p>
            <h2 className="mt-3 text-3xl font-semibold">Safeguarding counsellors and communities</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {advocacyPillars.map((pillar) => (
              <div key={pillar} className="rounded-2xl border border-slate-100 bg-white p-5 text-sm font-semibold text-slate-700 shadow-sm">
                {pillar}
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
              <p className="text-sm font-semibold text-indigo-600">Apply Now</p>
              <h2 className="mt-3 text-3xl font-semibold">Modern, guided membership application</h2>
              <p className="mt-4 text-slate-600">
                Submit your credentials through a step-by-step wizard with drag-and-drop uploads, secure payments, and a
                digital ID issued instantly upon approval.
              </p>
              <div className="mt-8 flex flex-col gap-6">
                {applicationSteps.map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-white font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold">{step}</p>
                      <p className="text-sm text-slate-500">Part of the guided workflow with status tracking.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-indigo-600 to-slate-900 p-8 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">Global HQ</p>
              <h3 className="mt-4 text-2xl font-semibold">Contact & Support</h3>
              <ul className="mt-6 space-y-4 text-slate-100">
                <li>
                  <p className="text-sm uppercase text-indigo-200">Email</p>
                  <p className="text-lg font-medium">info@gca-global.org</p>
                </li>
                <li>
                  <p className="text-sm uppercase text-indigo-200">WhatsApp</p>
                  <p className="text-lg font-medium">+xx xxx xxx xxxx</p>
                </li>
                <li>
                  <p className="text-sm uppercase text-indigo-200">Office Hours</p>
                  <p className="text-lg font-medium">Mon–Fri, 9:00–18:00 GMT</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-2xl font-semibold text-indigo-600">GCA</p>
            <p className="mt-3 text-sm text-slate-500">
              Empowering counsellors with global recognition, ethical leadership, and supportive networks.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#services">Services</a></li>
              <li><a href="#membership">Membership</a></li>
              <li><a href="#partnerships">Partnerships</a></li>
              <li><a href="#legal">Legal</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Stay Connected</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-600">
              {['Facebook', 'Instagram', 'LinkedIn', 'YouTube', 'TikTok'].map((social) => (
                <a
                  key={social}
                  className="rounded-full border border-slate-200 px-3 py-1 hover:border-indigo-200 hover:text-indigo-600"
                  href="#"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Newsletter</p>
            <p className="mt-2 text-sm text-slate-500">Insights, research briefs, and upcoming programs.</p>
            <form className="mt-4 space-y-2">
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-2 focus:border-indigo-400 focus:outline-none" placeholder="Email address" />
              <button type="submit" className="w-full rounded-2xl bg-slate-900 px-4 py-2 text-white">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Global Counsellor Association. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
