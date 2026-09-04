'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'about', number: '01', label: 'About' },
  { id: 'skills', number: '02', label: 'Skills' },
  { id: 'projects', number: '03', label: 'Projects' },
  { id: 'education', number: '04', label: 'Education' },
  { id: 'experience', number: '05', label: 'Experience' },
  { id: 'contact', number: '06', label: 'Contact' },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const marker = window.scrollY + Math.min(220, window.innerHeight * 0.35);
      let current = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= marker) current = section.id;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sections.at(-1)?.id ?? current;
      }

      setActiveSection(current);
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className="site-nav" aria-label="Page sections">
      {sections.map((section) => (
        <a
          className={activeSection === section.id ? 'active' : undefined}
          href={`#${section.id}`}
          aria-current={activeSection === section.id ? 'location' : undefined}
          key={section.id}
        >
          <span>{section.number}</span> {section.label}
        </a>
      ))}
    </nav>
  );
}
