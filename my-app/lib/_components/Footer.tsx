"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, ExternalLink, Heart, Coffee } from "lucide-react"
import { Typography } from "@/components/ui/Typography"

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())
  const [randomQuote, setRandomQuote] = useState("")

  const devQuotes = [
    "Le code est comme l'humour. Quand on doit l'expliquer, c'est mauvais.",
    "Il y a deux façons d'écrire du code sans bug. Seule la troisième fonctionne.",
    "Un bon développeur est celui qui regarde des deux côtés avant de traverser une rue à sens unique.",
    "Le débogage, c'est comme être un détective dans un film policier où vous êtes aussi le meurtrier.",
    "La programmation n'est pas à propos des solutions, mais à propos de la résolution de problèmes.",
  ]

  useEffect(() => {
    setYear(new Date().getFullYear())
    setRandomQuote(devQuotes[Math.floor(Math.random() * devQuotes.length)])
  }, [])

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -left-4 top-10 text-xs font-mono text-blue-500 whitespace-pre">
          {`
function createAmazingWebsite() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind'];
  const passion = 100;
  const coffee = Infinity;
  
  return skills.reduce((website, skill) => {
    return website + skill + passion + coffee;
  }, 'https://');
}
          `}
        </div>
        <div className="absolute right-4 bottom-20 text-xs font-mono text-green-500 whitespace-pre">
          {`
// Life motto
while (alive) {
  eat();
  sleep();
  code();
  repeat();
}
          `}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo et info */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-3">
                <span className="font-mono">&lt;</span>LD
                <span className="font-mono">/&gt;</span>
              </div>
              <Typography variant="body" className="text-gray-400 mb-4 text-center md:text-left">
                Développeur passionné, créant des expériences web innovantes et intuitives.
              </Typography>
              <div className="flex space-x-4 mb-6">
                <SocialLink href="https://github.com" icon={<Github size={18} />} label="GitHub" />
                <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
                <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
                <SocialLink href="mailto:lucdalland@gmail.com" icon={<Mail size={18} />} label="Email" />
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="lg:col-span-1">
            <Typography variant="h3" className="text-white font-semibold mb-4 text-center md:text-left">
              Liens Rapides
            </Typography>
            <ul className="space-y-2 text-center md:text-left">
              <FooterLink href="/" label="Accueil" />
              <FooterLink href="#Mesprojets" label="Projets" />
              <FooterLink href="#Mescompetences" label="Compétences" />
              <FooterLink href="#Service" label="Blog" />
              <FooterLink href="#contact" label="Contact" />
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <Typography variant="h3" className="text-white font-semibold mb-4 text-center md:text-left">
              Services
            </Typography>
            <ul className="space-y-2 text-center md:text-left">
              <FooterLink href="/services/web-development" label="Développement Web" />
              <FooterLink href="/services/mobile-apps" label="Applications Mobiles" />
              <FooterLink href="/services/consulting" label="Consulting" />
            </ul>
          </div>

          {/* Citation */}
          <div className="lg:col-span-1">
            <Typography variant="h3" className="text-white font-semibold mb-4 text-center md:text-left">
              Citation du Jour
            </Typography>
            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700">
              <blockquote className="italic text-gray-300 text-center md:text-left">"{randomQuote}"</blockquote>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Copyright et signature */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            © {year} Luc Dalland NKODIA DE MATSIKA. Tous droits réservés.
          </div>
          <div className="flex items-center space-x-1 text-center">
            <span>Conçu avec</span>
            <Heart size={14} className="text-red-500 mx-1" />
            <span>et</span>
            <Coffee size={14} className="text-yellow-600 mx-1" />
            <span>à Brazzaville</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Composant pour les liens du footer
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center group"
      >
        <span className="group-hover:underline">{label}</span>
        <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </li>
  )
}

// Composant pour les liens sociaux
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
    >
      {icon}
    </Link>
  )
}
