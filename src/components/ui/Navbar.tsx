"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`fixed w-full z-50 transition ${scrolled ? 'bg-white/90 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/"><span className="font-bold text-lg">GCA</span></Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about">About</Link>
          <Link href="/apply">Apply</Link>
          <Link href="/services">Services</Link>
        </div>
        <div className="md:hidden">☰</div>
      </div>
    </nav>
  )
}
