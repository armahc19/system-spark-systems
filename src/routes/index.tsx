import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  Globe,
  Target,
  Zap,
  CheckCircle2,
  Rocket,
  Gauge,
  ShieldCheck,
  Sparkles,
  Mail,
  Send,
} from "lucide-react";
import logo from "@/assets/scriptgad-logo.png";

const WHATSAPP_URL = "https://wa.me/your-number";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScriptGad — Websites, Facebook Ads & Lead Systems" },
      {
        name: "description",
        content:
          "ScriptGad builds websites, runs Facebook ads, and creates automation systems that turn your business into a customer-generating machine.",
      },
      { property: "og:title", content: "ScriptGad — Customer-Generating Systems" },
      {
        property: "og:description",
        content:
          "Websites, Facebook ads, and lead automation built for real business growth.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      {
      rel: "icon",
      type: "image/png",
      href: logo,
    },
    ],
  }),
  component: Landing,
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="ScriptGad" className="h-9 w-9 object-contain" />
          <span className="font-display font-bold text-lg">
            Script<span className="text-primary">Gad</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#why" className="hover:text-foreground transition">Why Us</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition shadow-glow-sm"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Performance digital agency
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05]">
            Turn Your Business Into a{" "}
            <span className="text-primary text-glow">Customer-Generating Machine</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            We build websites, run Facebook ads, and create automation systems
            that help you consistently get and convert customers online.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-95 transition shadow-glow"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 font-semibold text-foreground hover:bg-primary/10 transition"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Results-driven</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Fast execution</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Built to scale</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full" />
          <img
            src={logo}
            alt="ScriptGad logo"
            className="relative mx-auto max-w-md w-full drop-shadow-[0_0_40px_oklch(0.82_0.27_145/0.45)]"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase">About ScriptGad</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold">
          A digital agency built for <span className="text-primary">real growth</span>.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          ScriptGad builds practical digital systems that help businesses grow
          through real customers — not theory, not vanity marketing. We focus on
          execution, conversion, and revenue.
        </p>
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Rocket, label: "Growth" },
            { icon: Gauge, label: "Execution" },
            { icon: ShieldCheck, label: "Results" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-2xl border border-border bg-card p-6 flex items-center justify-center gap-3">
              <Icon className="h-5 w-5 text-primary" />
              <span className="font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      goal: "Turn visitors into customers",
      points: ["Business websites", "Landing pages for ads", "High-converting sales pages"],
    },
    {
      icon: Target,
      title: "Facebook Ads & Lead Generation",
      goal: "Bring in real paying customers",
      points: ["Set up & manage ad campaigns", "Generate consistent leads", "Funnels that convert traffic"],
    },
    {
      icon: Zap,
      title: "Lead Systems & Automations",
      goal: "Automate follow-ups & boost conversion",
      points: ["WhatsApp automation", "Email follow-up sequences", "Lead capture & simple CRM workflows"],
    },
  ];
  return (
    <section id="services" className="py-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">Our Services</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Systems that bring in <span className="text-primary">paying customers</span>.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-6 group-hover:shadow-glow-sm transition">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-6 border-t border-border text-sm">
                <span className="text-primary font-semibold">Goal:</span>{" "}
                <span className="text-foreground">{s.goal}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { title: "Real business results", desc: "We optimize for revenue, not vanity metrics." },
    { title: "Fast execution", desc: "Launch in days, not months. We move quickly." },
    { title: "Built for growth", desc: "Systems designed to scale as you scale." },
    { title: "Practical solutions", desc: "Tailored for small and growing businesses." },
  ];
  return (
    <section id="why" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">Why ScriptGad</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            We build revenue systems, not <span className="text-primary">just websites</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Most agencies sell deliverables. We sell outcomes — websites that
            convert, ads that scale, and automations that close the loop.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-border bg-card p-6">
              <CheckCircle2 className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-bold">{i.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 border-t border-border bg-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Ready to <span className="text-primary text-glow">Grow Your Business?</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Let's build your website, ads, and automation system to start bringing
          in real customers.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 font-semibold shadow-glow hover:opacity-95 transition"
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 font-semibold hover:bg-primary/10 transition"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">Contact</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Let's talk about your project.</h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Tell us about your business and what you want to achieve. We'll get
            back with a clear plan.
          </p>
          <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <p className="font-semibold">Prefer fast response?</p>
            <p className="text-sm text-muted-foreground mt-1">
              Message us directly on WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition shadow-glow-sm"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-2xl border border-border bg-card p-8 space-y-5"
        >
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              required
              className="mt-2 w-full rounded-lg bg-background border border-input px-4 py-3 outline-none focus:border-primary transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              required
              className="mt-2 w-full rounded-lg bg-background border border-input px-4 py-3 outline-none focus:border-primary transition"
              placeholder="you@business.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Project details</label>
            <textarea
              required
              rows={5}
              className="mt-2 w-full rounded-lg bg-background border border-input px-4 py-3 outline-none focus:border-primary transition resize-none"
              placeholder="Tell us about your business and goals..."
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary text-primary-foreground px-6 py-3 font-semibold shadow-glow hover:opacity-95 transition"
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Message sent
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send message
              </>
            )}
          </button>
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            <Mail className="h-3.5 w-3.5" /> We typically reply within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="ScriptGad" className="h-8 w-8 object-contain" />
          <span className="font-display font-bold">
            Script<span className="text-primary">Gad</span>
          </span>
          <span className="text-muted-foreground text-sm ml-2">· Systems Architect</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ScriptGad. Design · Build · Scale.
        </p>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Why />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
