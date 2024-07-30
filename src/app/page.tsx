import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Benefit } from "@/components/Benefits";
import { CareSection } from "@/components/CareSection";
import { SecureSections } from "@/components/SecureSection";
import { Testimonial } from "@/components/Testimonial";
import { PlansSection } from "@/components/PlansSection";
import { GetStartedSection } from "@/components/GetStartedSection";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lokotre Landing Page</title>
        <meta name="description" content="Simple landing page for demo purposes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Lokotre Landing Page" />
        <meta property="og:description" content="Simple landing page for demo purposes" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.yourwebsite.com/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Hero />
        <Benefit />
        <CareSection />
        <SecureSections />
      </Container>
      <Testimonial />
      <PlansSection />
      <GetStartedSection />
    </>
  );
}
