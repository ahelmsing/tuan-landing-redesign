import alienImg from './assets/alien.png'

export default function TuanLandingPage() {
  const featuredProducts = [
    {
      title: 'Flower',
      description:
        'Premium strains with clean presentation, strong shelf appeal, and a little cosmic personality.',
    },
    {
      title: 'Edibles',
      description:
        'Playful, polished, and easy to browse with a system that feels modern instead of chaotic.',
    },
    {
      title: 'Concentrates',
      description:
        'For the more experienced explorer, framed with clarity, trust, and lab-minded confidence.',
    },
  ]

  const highlights = [
    'Southern California cannabis brand with a distinctive voice',
    'Spacey, groovy energy without sacrificing readability',
    'Cleaner hierarchy, stronger trust, better first impression',
  ]

  return (
    <div className="min-h-screen bg-black text-white selection:bg-lime-300 selection:text-black">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(217,70,239,0.42),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.30),transparent_34%),radial-gradient(circle_at_60%_80%,rgba(59,130,246,0.22),transparent_38%)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(217,70,239,0.20),transparent_28%),radial-gradient(circle_at_30%_75%,rgba(59,130,246,0.18),transparent_34%)] blur-3xl opacity-80" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-black uppercase tracking-tight text-red-500">
              TUAN
            </div>
            <div className="hidden h-6 w-px bg-white/20 md:block" />
            <div className="hidden text-sm uppercase tracking-[0.3em] text-white/50 md:block">
              Embrace the Extraordinary
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#products" className="transition hover:text-lime-300">
              Products
            </a>
            <a href="#story" className="transition hover:text-lime-300">
              Story
            </a>
            <a href="#experience" className="transition hover:text-lime-300">
              Experience
            </a>
            <a
              href="#shop"
              className="rounded-full border border-white/15 bg-white px-5 py-2 text-black transition hover:bg-lime-300"
            >
              Shop Now
            </a>
          </nav>
        </header>

        <main className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-10">
          <section className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-lime-300/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-lime-300">
                Premium cannabis for curious minds
              </div>

              <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.85] tracking-tight md:text-7xl lg:text-[5.5rem]">
                Groovy vibes.
                <span className="block text-white/70">Clean execution.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/72 md:text-xl">
                A sharper first impression for TUAN. Still weird. Still fun. Just
                organized with stronger hierarchy, better spacing, and a premium
                feel that actually supports the brand.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  id="shop"
                  href="#products"
                  className="rounded-full bg-lime-300 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:scale-[1.02]"
                >
                  Explore Products
                </a>
                <a
                  href="#story"
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:border-white/35 hover:bg-white/10"
                >
                  Why This Works
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/72 backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-red-500/20 blur-3xl" />
              <div className="absolute -right-4 bottom-8 h-36 w-36 rounded-full bg-lime-300/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-5 shadow-2xl shadow-black/50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(62,255,191,0.07),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.10),transparent_26%)]" />

                <div className="relative rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,#0f0f10_0%,#050505_100%)] p-6 md:p-8">
                  <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/45">
                    <span>Featured visual</span>
                    <span>Landing concept</span>
                  </div>

                  <div className="relative mx-auto max-w-sm">
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-lime-300/10 blur-3xl" />
                    <img
                      src={alienImg}
                      alt="Tuan Alien"
                      className="relative z-10 w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                    />
                  </div>

                  <div className="mt-3 text-center text-4xl font-black uppercase tracking-tight text-red-500 md:text-5xl">
                    TUAN
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <section id="products" className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(217,70,239,0.28),transparent_42%),radial-gradient(circle_at_20%_80%,rgba(124,58,237,0.22),transparent_48%)] opacity-90" />

        <div className="relative z-10 mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 text-xs uppercase tracking-[0.35em] text-lime-300">
              Featured categories
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
              A cleaner product story
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/65">
            The current site throws everything at the visitor. This version uses
            clear cards, tight copy, and enough breathing room to let the brand
            feel intentional.
          </p>
        </div>

        <div className="relative z-10 grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <article
              key={product.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-lime-300/40 hover:bg-white/[0.06]"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black text-lg font-black text-lime-300">
                {product.title.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight">
                {product.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/68">
                {product.description}
              </p>
              <div className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-white/50 transition group-hover:text-lime-300">
                View category
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.35em] text-red-400">
              Brand direction
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
              Keep the weird. Lose the mess.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/70">
            <p>
              TUAN already has a voice. The problem is not the personality. The
              problem is the presentation. Right now the site feels loud, crowded,
              and dated.
            </p>
            <p>
              This concept keeps the alien imagery, the cosmic tone, and the groovy
              edge, but wraps it in a layout that feels sharper, cleaner, and more
              trustworthy.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.22),transparent_45%),radial-gradient(circle_at_30%_80%,rgba(168,85,247,0.24),transparent_50%)] opacity-90" />

        <div className="relative z-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <div className="text-xs uppercase tracking-[0.35em] text-lime-300">
              01
            </div>
            <h3 className="mt-4 text-2xl font-bold uppercase tracking-tight">
              Stronger hierarchy
            </h3>
            <p className="mt-4 leading-7 text-white/68">
              One clear headline. One supporting message. One primary action.
              Visitors know where to look immediately.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <div className="text-xs uppercase tracking-[0.35em] text-red-400">
              02
            </div>
            <h3 className="mt-4 text-2xl font-bold uppercase tracking-tight">
              Better brand trust
            </h3>
            <p className="mt-4 leading-7 text-white/68">
              Cleaner spacing and more controlled typography make the brand feel
              premium without stripping out the fun.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <div className="text-xs uppercase tracking-[0.35em] text-white/50">
              03
            </div>
            <h3 className="mt-4 text-2xl font-bold uppercase tracking-tight">
              Built to expand
            </h3>
            <p className="mt-4 leading-7 text-white/68">
              This system can grow into product pages, store locator sections,
              promos, and event content without collapsing into clutter.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}