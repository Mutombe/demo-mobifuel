import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Phone,
  WhatsappLogo,
  CheckCircle,
  ShieldCheck,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import HeroCarousel from '../components/HeroCarousel';
import { HERO_MAP } from '../components/heroes/HeroDispatcher';
import ServiceCards from '../components/sections/ServiceCards';
import StatsSection from '../components/sections/StatsSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import ProjectGrid from '../components/sections/ProjectGrid';
import siteData, { designTokens } from '../data/siteData';

/* ── Why Choose Us (inline — not yet a variant component) ── */
function WhyChooseUsSection() {
  const { whyChooseUs } = siteData;
  return (
    <section className="section-padding bg-navy-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal direction="right">
            <div>
              <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-wider mb-4">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                {whyChooseUs.titleParts.map((part, i) =>
                  part.highlight ? (
                    <span key={i} className="text-gold-400">{part.text}</span>
                  ) : (
                    <React.Fragment key={i}>{part.text}</React.Fragment>
                  )
                )}
              </h2>
              <div className="space-y-6">
                {whyChooseUs.points.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 bg-gold-500/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={18} weight="fill" className="text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
          <SectionReveal direction="left">
            <div className="relative">
              <img src={whyChooseUs.image} alt={whyChooseUs.imageAlt} className="rounded-2xl w-full object-cover aspect-[4/5]" />
              <div className="absolute -bottom-6 -left-6 bg-gold-500 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="text-3xl font-bold">{whyChooseUs.experienceYears}</div>
                <div className="text-sm font-medium text-white/80">{whyChooseUs.experienceLabel}</div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

/* ── CTA Section (inline) ── */
function HomeCTA() {
  const { business, homeCta } = siteData;
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={homeCta.backgroundImage} alt={homeCta.backgroundAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/85" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {homeCta.titleParts.map((part, i) =>
              part.highlight ? (
                <span key={i} className="text-gold-400">{part.text}</span>
              ) : (
                <React.Fragment key={i}>{part.text}</React.Fragment>
              )
            )}
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">{homeCta.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base">
              <Phone size={20} />
              {homeCta.ctaPrimary}
            </Link>
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:-translate-y-0.5"
            >
              <WhatsappLogo size={20} weight="fill" />
              Chat on WhatsApp
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ── Default Carousel Hero (inline for backward compat) ── */
function CarouselHero() {
  const { business, hero } = siteData;

  // Split title into words for stagger animation
  const titleWords = hero.titleParts.flatMap((part) => {
    const words = part.text.split(/(\s+)/);
    return words
      .filter((w) => w.trim().length > 0)
      .map((word) => ({
        text: word + ' ',
        highlight: part.highlight || false,
      }));
  });

  return (
    <HeroCarousel
      images={hero.backgroundImages}
      backgroundImage={hero.backgroundImage}
      backgroundAlt={hero.backgroundAlt}
      overlay="left"
      className="min-h-screen flex items-center"
    >
      <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-gold-500/10 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 border border-gold-500/5 rounded-full hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="max-w-3xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            <span className="text-gold-400 text-sm font-medium">{hero.badge}</span>
          </motion.div>

          {/* Heading with word-by-word stagger */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-7">
            <span className="inline-flex flex-wrap gap-x-[0.2em]">
              {titleWords.map((word, i) => (
                <span key={i} className="overflow-hidden inline-block">
                  <motion.span
                    className={`inline-block ${
                      word.highlight
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600'
                        : ''
                    }`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4 + i * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word.text}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 + titleWords.length * 0.15 + 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/65 leading-relaxed mb-10 max-w-xl"
          >
            {hero.subtitle}
          </motion.p>

          {/* CTAs -- upgraded sizing */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 + titleWords.length * 0.15 + 0.35 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 bg-gold-500 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-bold transition-all duration-300 hover:bg-gold-600 hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              {hero.ctaPrimary}
              <ArrowRight size={20} weight="bold" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-bold backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              {hero.ctaSecondary}
            </Link>
          </motion.div>

          {/* Trust bar -- enhanced glass card with avatars */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 + titleWords.length * 0.15 + 0.5 }}
            className="inline-flex items-center gap-4 text-white/60 text-sm"
          >
            
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  weight="fill"
                  className={i < business.ratingRounded ? 'text-gold-400' : 'text-gold-400/40'}
                />
              ))}
              <span className="text-white/70 text-sm ml-1.5 font-medium">
                {business.rating}/5
              </span>
              <span className="text-white/50 text-sm">
                ({business.reviewCount} reviews)
              </span>
            </div>
            <div className="hidden sm:block h-8 w-px bg-white/15" />
            <div className="hidden sm:flex items-center gap-2">
              <ShieldCheck size={18} weight="fill" className="text-emerald-400" />
              <span className="text-white/70 text-sm font-medium">{hero.trustBadge}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </HeroCarousel>
  );
}

/* ── Section Map — dispatches sections by key ── */
const SECTION_MAP = {
  hero: function HeroSection() {
    const style = designTokens?.heroStyle || 'carousel';
    const HeroComponent = HERO_MAP[style];
    if (HeroComponent) return <HeroComponent />;
    return <CarouselHero />;
  },
  stats: StatsSection,
  services: ServiceCards,
  projects: ProjectGrid,
  whyChooseUs: WhyChooseUsSection,
  testimonials: TestimonialSection,
  cta: HomeCTA,
};

function Home() {
  const order = designTokens?.homeSectionOrder || [
    'hero', 'stats', 'services', 'projects', 'whyChooseUs', 'testimonials', 'cta'
  ];

  return (
    <PageTransition>
      {order.map((key) => {
        const Section = SECTION_MAP[key];
        return Section ? <Section key={key} /> : null;
      })}
    </PageTransition>
  );
}

export default Home;
