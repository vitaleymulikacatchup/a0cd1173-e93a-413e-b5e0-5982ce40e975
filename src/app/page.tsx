"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BarChart3, Bot, Brain, Code, DollarSign, HelpCircle, MessageSquare, Network, Package, Rocket, Shield, Sparkles, Star, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Ai-SDK"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Build Intelligent Chatbots with AI-SDK"
          description="The most comprehensive SDK for integrating advanced AI chatbot capabilities into your applications. Deploy faster, scale easier, and deliver exceptional conversational experiences."
          tag="AI-Powered"
          tagIcon={Bot}
          buttons={[
            {
              text: "Start Building",
              href: "contact"
            },
            {
              text: "View Docs",
              href: "https://docs.ai-sdk.com"
            }
          ]}
          videoSrc="https://images.pexels.com/photos/16629368/pexels-photo-16629368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          videoAriaLabel="AI chatbot demonstration video"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose Ai-SDK"
          description="Empower your applications with cutting-edge AI conversation technology. Our platform combines the latest language models with intuitive APIs for seamless integration."
          tag="Platform"
          tagIcon={Zap}
          bulletPoints={[
            {
              title: "Multi-Model Support",
              description: "Integrate with GPT, Claude, Gemini, and more through a single unified API",
              icon: Network
            },
            {
              title: "Real-time Processing",
              description: "Lightning-fast response times with streaming capabilities for instant conversations",
              icon: Zap
            },
            {
              title: "Enterprise Ready",
              description: "Built for scale with advanced security, monitoring, and compliance features",
              icon: Shield
            }
          ]}
          imageSrc="https://images.pexels.com/photos/18068747/pexels-photo-18068747.png?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="AI models and neural networks visualization"
          imagePosition="right"
          buttons={[
            {
              text: "Explore Features",
              href: "feature"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Powerful Features"
          description="Everything you need to build, deploy, and scale intelligent conversational AI applications"
          tag="Features"
          tagIcon={Sparkles}
          features={[
            {
              title: "Multi-Provider API",
              description: "Switch between OpenAI, Anthropic, Google, and other providers seamlessly with one unified interface",
              icon: Network,
              button: {
                text: "Learn More",
                href: "https://docs.ai-sdk.com/api"
              }
            },
            {
              title: "Smart Context Management",
              description: "Automatically manage conversation context, memory, and thread continuity across sessions",
              icon: Brain,
              button: {
                text: "View Demo",
                href: "https://demo.ai-sdk.com/context"
              }
            },
            {
              title: "Real-time Analytics",
              description: "Monitor performance, track usage patterns, and optimize your AI conversations with detailed insights",
              icon: BarChart3,
              button: {
                text: "See Dashboard",
                href: "https://dashboard.ai-sdk.com"
              }
            },
            {
              title: "Custom Function Calling",
              description: "Enable your AI to interact with external APIs and databases through secure function calls",
              icon: Code,
              button: {
                text: "Explore Functions",
                href: "https://docs.ai-sdk.com/functions"
              }
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="SDK Solutions"
          description="Choose the perfect AI chatbot solution for your project needs"
          tag="Products"
          tagIcon={Package}
          products={[
            {
              id: "basic",
              name: "Basic Chatbot SDK",
              price: "Free",
              imageSrc: "https://images.pexels.com/photos/1111371/pexels-photo-1111371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Basic chatbot interface",
              onProductClick: "() => console.log('Basic SDK clicked')"
            },
            {
              id: "advanced",
              name: "Advanced AI Platform",
              price: "$99/mo",
              imageSrc: "https://images.pexels.com/photos/16474955/pexels-photo-16474955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Advanced AI chatbot interface",
              onProductClick: "() => console.log('Advanced SDK clicked')"
            },
            {
              id: "enterprise",
              name: "Enterprise Suite",
              price: "Custom",
              imageSrc: "https://images.pexels.com/photos/8867220/pexels-photo-8867220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Enterprise AI solution",
              onProductClick: "() => console.log('Enterprise SDK clicked')"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Start free and scale as you grow. No hidden fees, no surprises."
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              badge: "Perfect for Testing",
              badgeIcon: Sparkles,
              price: "Free",
              subtitle: "Ideal for developers getting started",
              features: [
                "1,000 API calls per month",
                "Basic chatbot templates",
                "Community support",
                "Standard response times"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$99/month",
              subtitle: "For growing applications and teams",
              features: [
                "100,000 API calls per month",
                "Advanced AI models access",
                "Real-time analytics",
                "Priority email support",
                "Custom function calling"
              ]
            },
            {
              id: "enterprise",
              badge: "Maximum Power",
              badgeIcon: Zap,
              price: "Custom",
              subtitle: "For large-scale deployments",
              features: [
                "Unlimited API calls",
                "Dedicated AI infrastructure",
                "24/7 phone support",
                "Custom model fine-tuning",
                "Enterprise security features"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="What Developers Say"
          description="Trusted by thousands of developers and companies worldwide"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              handle: "@sarahbuilds",
              testimonial: "Ai-SDK transformed our customer support. Integration took just hours, not weeks. The multi-provider support is a game-changer for our enterprise clients.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Chen"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              handle: "@mikecodes",
              testimonial: "Finally, an AI SDK that doesn't lock you into one provider. The analytics dashboard gives us insights we never had before. Highly recommended!",
              imageSrc: "https://images.pexels.com/photos/7414280/pexels-photo-7414280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Rodriguez"
            },
            {
              id: "3",
              name: "Emma Thompson",
              handle: "@emma_dev",
              testimonial: "The context management is incredible. Our chatbots now maintain conversation flow across sessions seamlessly. Customer satisfaction is up 40%.",
              imageSrc: "https://images.pexels.com/photos/7606019/pexels-photo-7606019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma Thompson"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davidbuilds",
              testimonial: "From prototype to production in days, not months. The function calling feature lets our AI interact with our entire tech stack. Absolutely brilliant.",
              imageSrc: "https://images.pexels.com/photos/7414011/pexels-photo-7414011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies building the future of AI conversations"
          tag="Partners"
          tagIcon={Users}
          logos={[
            "https://images.pexels.com/photos/16629368/pexels-photo-16629368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/16629436/pexels-photo-16629436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/16629368/pexels-photo-16629368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9195165/pexels-photo-9195165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/30608594/pexels-photo-30608594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/16629368/pexels-photo-16629368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={50}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about Ai-SDK and our AI chatbot platform"
          tag="Support"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What AI models does Ai-SDK support?",
              content: "Ai-SDK supports all major AI providers including OpenAI (GPT-3.5, GPT-4), Anthropic (Claude), Google (Gemini), and many others. You can switch between providers seamlessly through our unified API."
            },
            {
              id: "2",
              title: "How quickly can I integrate Ai-SDK?",
              content: "Most developers can integrate basic chatbot functionality in under an hour. Our comprehensive documentation, code samples, and SDKs for popular frameworks make integration straightforward."
            },
            {
              id: "3",
              title: "Do you offer custom model training?",
              content: "Yes! Our Enterprise plan includes custom model fine-tuning services. We can help you train models on your specific data for enhanced performance in your domain."
            },
            {
              id: "4",
              title: "What about data security and privacy?",
              content: "Security is our top priority. We offer SOC 2 compliance, end-to-end encryption, and enterprise-grade security features. Your data never leaves your control without explicit permission."
            },
            {
              id: "5",
              title: "Can I use Ai-SDK for commercial projects?",
              content: "Absolutely! Ai-SDK is designed for commercial use. Our pricing scales with your usage, from free tier for testing to enterprise solutions for large deployments."
            },
            {
              id: "6",
              title: "What kind of support do you provide?",
              content: "We offer multiple support tiers: community support for free users, priority email for paid plans, and 24/7 phone support for enterprise customers. Our documentation and tutorials are comprehensive."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Rocket}
          title="Ready to Build Intelligent Chatbots?"
          description="Join thousands of developers already using Ai-SDK to create amazing AI-powered conversations. Start your free trial today."
          inputPlaceholder="Enter your email to get started"
          buttonText="Start Free Trial"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. No credit card required for the free tier."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Features",
                  href: "feature"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Documentation",
                  href: "https://docs.ai-sdk.com"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Support",
                  href: "https://support.ai-sdk.com"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "API Reference",
                  href: "https://api.ai-sdk.com"
                },
                {
                  label: "Tutorials",
                  href: "https://learn.ai-sdk.com"
                },
                {
                  label: "Community",
                  href: "https://community.ai-sdk.com"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Ai-SDK"
        />
      </div>
    </ThemeProvider>
  );
}