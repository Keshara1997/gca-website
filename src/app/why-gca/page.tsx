const objectives = [
    {
        title: "Promoting Expert Counseling Services in Society",
        description:
            "GCA raises awareness about the importance of professional counseling services and their role in mental health. By championing ethical, evidence-based practices, we work to ensure every community can access high-quality support.",
    },
    {
        title: "Enhancing Members’ Knowledge and Skills",
        description:
            "Through training sessions, workshops, webinars, and seminars, GCA equips members with the latest developments in counseling theories, methodologies, and technologies.",
    },
    {
        title: "Encouraging International Participation",
        description:
            "We connect members to global conferences, workshops, and training programs so counselors can expand their networks, share knowledge, and adopt best practices across cultures.",
    },
    {
        title: "Providing Professional Guidance and Mentorship",
        description:
            "GCA mentors guide new and aspiring counselors with practical insights, hands-on advice, and real-world wisdom, helping them build rewarding careers.",
    },
    {
        title: "Advocating for Legal Protection and Rights",
        description:
            "We collaborate with policymakers and legal experts to establish frameworks that safeguard counselors’ rights, promote ethical standards, and strengthen the profession’s credibility.",
    },
    {
        title: "Offering Resources for Psychosocial Development Programs",
        description:
            "GCA supports the creation and implementation of psychosocial development programs by providing research, tools, and resources to counselors serving diverse communities.",
    },
    {
        title: "Supporting Counseling and Treatment Centers",
        description:
            "We assist in establishing and maintaining counseling and treatment centers, ensuring they meet the highest professional standards and adapt to varied client needs.",
    },
    {
        title: "Facilitating Job Referrals and Welfare Support",
        description:
            "Understanding employment challenges, GCA provides job referrals, career counseling, and welfare programs that give counselors financial stability and meaningful opportunities.",
    },
    {
        title: "Fostering Collaboration with External Stakeholders",
        description:
            "We build partnerships with professional bodies, academic institutions, and industry stakeholders to promote interdisciplinary approaches and strengthen the global counseling community.",
    },
]

export default function WhyGCA() {
    return (
        <div className="pt-28 pb-20 bg-gray-50">
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-gca-500 mb-4">Global Counselor Association</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Advancing Counseling & Psychotherapy Worldwide
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        The Global Counselor Association (GCA) is committed to professional excellence, collaboration, and
                        societal well-being. We create a supportive environment where counselors enhance their skills, amplify their
                        impact, and contribute to a healthier world.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            GCA fosters professional growth by connecting counselors globally, sharing knowledge generously,
                            and advocating boldly. We believe that empowered counselors transform lives and communities, and we
                            exist to ensure they have everything they need to do so.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-gca-100 text-gca-600 flex items-center justify-center font-semibold">
                                24/7
                            </span>
                            <p className="text-gray-600">Global community access and peer-to-peer collaboration</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-gca-100 text-gca-600 flex items-center justify-center font-semibold">
                                100+
                            </span>
                            <p className="text-gray-600">Training sessions, webinars, and workshops each year</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-gca-100 text-gca-600 flex items-center justify-center font-semibold">
                                60+
                            </span>
                            <p className="text-gray-600">Countries represented across our growing membership</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-semibold mb-4">Objectives</h2>
                        <p className="text-gray-600">
                            These priorities guide how we support counselors, amplify their work, and uplift the societies they serve.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {objectives.map((objective, index) => (
                            <article
                                key={objective.title}
                                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="text-gca-500 font-semibold text-sm uppercase tracking-wide mb-3">
                                    Objective {index + 1}
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">{objective.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{objective.description}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-20 bg-white border border-gray-100 rounded-3xl p-10 shadow-sm text-center">
                    <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
                    <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                        The Global Counselor Association is a vital platform for professional growth, collaboration, and advocacy. By
                        centering the needs of counselors and the communities they serve, we are working toward a more resilient and
                        mentally healthy world.
                    </p>
                    <a
                        href="/apply"
                        className="inline-block px-10 py-4 rounded-full bg-gca-500 text-white text-lg font-semibold hover:bg-gca-600 transition"
                    >
                        Join the Movement
                    </a>
                </div>
            </section>
        </div>
    )
}


