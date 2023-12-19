'use client';

import Header from '@/app/header';
import Hero from '@/app/hero';
import JoinedCompanies from '@/app/joinedCompanies';
import WhyIncentive from '@/app/whyIncentive';
import HowItWorks from '@/app/howItWorks';
import Footer from '@/app/footer';
import Pricing from '@/app/pricing';
import Activities from "@/app/activities";
import Dashboard from "@/app/dashboard";
import Testimonials from "@/app/testimonials";
import SandwichMenu from "@/app/sandwichMenu/SandwichMenu";
import {useState} from "react";

export default function Home() {
  const [ isSandwichMenuOpen, setIsSandwichMenuOpen] = useState(false);

  const handleSandwichMenuToggle = () => {
    setIsSandwichMenuOpen(!isSandwichMenuOpen);
  }

  const onMenuItemClick = () => {
    setIsSandwichMenuOpen(false);
  }

  return (
    <>
      <SandwichMenu open={isSandwichMenuOpen} onMenuItemClick={onMenuItemClick} />
      <Header isSandwichMenuOpen={isSandwichMenuOpen} onSandwichMenuToggle={handleSandwichMenuToggle} />
      <Hero />

      <main>
        <JoinedCompanies />
        <WhyIncentive />
        <HowItWorks />
        <Activities />
        <Dashboard />
        <Testimonials />
        <Pricing />
      </main>

      <Footer />
    </>
  )
}
