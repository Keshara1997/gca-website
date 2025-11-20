const primaryCtas = [
  { label: 'Become a Member', href: '/apply', style: 'bg-white text-slate-900 shadow-xl shadow-indigo-500/30' },
  { label: 'Explore Programs', href: '/services', style: 'bg-white/10 text-white border border-white/30 backdrop-blur' },
  { label: 'Join Global Network', href: '/network', style: 'text-white hover:text-indigo-100' }
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/70 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-50 mix-blend-screen">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.3),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(129,140,248,0.2),transparent_35%)]" />
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')] opacity-10 mix-blend-color-dodge" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-200">Global Counsellor Association</p>
        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
          Empowering Counsellors. Transforming Lives. Connecting the World.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
          The Global Counsellor Association (GCA) champions excellence, ethics, and innovation in counselling and mental
          health. We celebrate cultural diversity, amplify global best practices, and bring change-makers together.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {primaryCtas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              className={`px-6 py-3 rounded-full font-semibold transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl ${cta.style}`}
            >
              {cta.label}
            </a>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3 text-left">
          {[
            { value: '7', label: 'Continents represented' },
            { value: '120+', label: 'Member institutions' },
            { value: '15k+', label: 'Practitioners empowered' }
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <p className="text-4xl font-bold">{item.value}</p>
              <p className="mt-2 text-sm text-slate-200">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
