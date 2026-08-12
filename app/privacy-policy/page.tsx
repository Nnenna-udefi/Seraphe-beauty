import React from "react";
import Link from "next/link";
import { Mail, ArrowRight, FileText } from "lucide-react";
import { PH2 } from "@/components/ui/heading";

export const metadata = {
  title: "Privacy Policy | Seraphé Beauty",
  description:
    "Learn how Seraphé Beauty collects, uses, and protects your personal information.",
};

const sections = [
  { id: "scope", title: "1. Scope of This Policy" },
  { id: "collection", title: "2. Information We Collect" },
  { id: "usage", title: "3. How We Use Your Information" },
  { id: "marketplace", title: "4. Marketplace Services" },
  { id: "educational", title: "5. Educational Content" },
  { id: "marketing", title: "6. Marketing Communications" },
  { id: "cookies", title: "7. Cookies & Tracking" },
  { id: "ugc", title: "8. User-Generated Content" },
  { id: "sharing", title: "9. How We Share Information" },
  { id: "security", title: "10. Data Protection & Security" },
  { id: "retention", title: "11. Data Retention" },
  { id: "rights", title: "12. Your Privacy Rights" },
  { id: "children", title: "13. Children's Privacy" },
  { id: "third-party", title: "14. Third-Party Websites" },
  { id: "international", title: "15. International Visitors" },
  { id: "compliance", title: "16. Compliance with Data Laws" },
  { id: "changes", title: "17. Changes to This Policy" },
  { id: "contact", title: "18. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#faf9f9] text-black py-12 md:py-20">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="bg-white border border-stone-200/80 rounded-3xl p-8 md:p-12 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-2  text-yellowText text-xs font-semibold uppercase tracking-wider">
            {/* <ShieldCheck className="w-4 h-4 text-yellowText" /> */}
            <span>Transparency & Safety</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Privacy Policy & Data Protection Notice
          </h1>
          <div className="flex items-center gap-4 text-xs md:text-sm text-darkText pt-2 border-t border-secondaryText/10">
            <p>
              <strong>Effective Date:</strong> August 4, 2026
            </p>
            <span>•</span>
            <p>Seraphé Beauty & Lifestyle</p>
          </div>
          <p className="text-foreground text-base md:text-lg leading-relaxed pt-4 font-light max-w-4xl">
            At Seraphé Beauty, we believe that trust is just as important as
            beauty. We are committed to protecting your privacy and handling
            your personal information responsibly, transparently, and securely.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sticky Table of Contents Sidebar */}
        <aside className="lg:col-span-4 sticky top-24 hidden lg:block">
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-2xs space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="flex items-center gap-2 border-b border-secondaryText/10 pb-3 font-bold">
              <FileText className="w-4 h-4 text-mustard" />
              <span>Navigation</span>
            </div>
            <nav className="space-y-1.5 text-xs text-foreground">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block py-1 px-2 rounded-lg hover:bg-stone-50 hover:text-amber-800 transition-colors line-clamp-1"
                >
                  {sec.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Legal Policy Text */}
        <main className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl border border-stone-200/80 shadow-2xs space-y-10">
          <section id="scope" className="space-y-3">
            <PH2>1. Scope of This Policy</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              This Privacy Policy applies to all visitors and users who interact
              with Seraphé through our official website, marketplace, blog
              articles, newsletter subscriptions, contact forms, product
              inquiries, promotional campaigns, giveaways, surveys, and
              applicable social media pages.
            </p>
          </section>

          <section id="collection" className="space-y-4">
            <PH2>2. Information We Collect</PH2>
            <div className="space-y-3 text-foreground text-sm md:text-base leading-relaxed">
              <p className="font-semibold text-stone-800">
                Information You Provide:
              </p>
              <p>
                You may voluntarily provide your full name, email address, phone
                number, delivery address, billing information, purchase history,
                and custom message contents when creating accounts, subscribing
                to news, or making marketplace orders.
              </p>
              <p className="font-semibold text-stone-800 pt-2">
                Information Collected Automatically:
              </p>
              <p>
                When accessing our platform, we automatically record device
                details, IP address, browser type, operating system, pages
                visited, time spent, referral sources, and cookie metrics to
                optimize overall user experience.
              </p>
            </div>
          </section>

          <section id="usage" className="space-y-3">
            <PH2>3. How We Use Your Information</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              We process data to operate our website, provide educational
              content, fulfill marketplace orders, arrange product deliveries,
              address customer support requests, deliver relevant marketing
              communications, detect platform fraud, and comply with legal
              obligations.
            </p>
          </section>

          <section id="marketplace" className="space-y-3">
            <PH2>4. Marketplace Services</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              When making purchases through our curated marketplace, payment
              transactions are handled exclusively by verified third-party
              payment gateways.{" "}
              <strong className="text-stone-800">
                We never store complete debit or credit card details on our
                servers.
              </strong>
            </p>
          </section>

          <section id="educational" className="space-y-3">
            <PH2>5. Educational Content Disclaimer</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              Articles, skincare tips, and fashion insights published on Seraphé
              are intended purely for educational purposes and do not constitute
              formal medical or dermatological advice. Always consult a
              qualified healthcare provider for specific medical conditions.
            </p>
          </section>

          <section id="marketing" className="space-y-3">
            <PH2>6. Marketing Communications</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              With your consent, we send newsletters, product launches, and
              promotional campaigns. You may opt out anytime using the
              &quot;Unsubscribe&quot; link present in every email footer.
            </p>
          </section>

          <section id="cookies" className="space-y-3">
            <PH2>7. Cookies & Tracking</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              We utilize cookies to remember your platform preferences, monitor
              traffic patterns, and customize recommendations. You can disable
              cookies inside your browser settings, though some interactive
              features may experience reduced functionality.
            </p>
          </section>

          <section id="ugc" className="space-y-3">
            <PH2>8. User-Generated Content</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              Comments, reviews, and testimonials posted publicly on our site
              are visible to other visitors. Please refrain from posting
              sensitive personal data in public discussion sections.
            </p>
          </section>

          <section id="sharing" className="space-y-3">
            <PH2>9. How We Share Information</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              <strong className="text-stone-800">
                We do not sell your personal data.
              </strong>{" "}
              Information is shared strictly with necessary service partners
              such as logistics carriers, payment gateways, hosting
              infrastructure, and analytics providers under binding data
              protection terms.
            </p>
          </section>

          <section id="security" className="space-y-3">
            <PH2>10. Data Protection & Security</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              We enforce administrative, technical, and physical protocols to
              prevent unauthorized access, accidental loss, alteration, or
              disclosure of user records.
            </p>
          </section>

          <section id="retention" className="space-y-3">
            <PH2>11. Data Retention</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              Records are retained only as long as necessary to provide
              services, fulfill order warranties, comply with tax/legal demands,
              and resolve operational disputes before being securely destroyed
              or anonymized.
            </p>
          </section>

          <section id="rights" className="space-y-3">
            <PH2>12. Your Privacy Rights</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              Depending on jurisdiction, you maintain rights to access, correct,
              export, or request deletion of your stored personal information.
              Contact our privacy team to exercise these options.
            </p>
          </section>

          <section id="children" className="space-y-3">
            <PH2>13. Children&apos;s Privacy</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              Seraphé is intended for general audiences and does not knowingly
              harvest personal information from children under 13.
            </p>
          </section>

          <section id="third-party" className="space-y-3">
            <PH2>14. Third-Party Websites</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              Our site contains external links. Seraphé holds no responsibility
              over privacy practices or materials published on external domains.
            </p>
          </section>

          <section id="international" className="space-y-3">
            <PH2>15. International Visitors</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              If accessing Seraphé outside Nigeria, your records may be
              processed in Nigeria or partner countries under applicable
              compliance standard frameworks.
            </p>
          </section>

          <section id="compliance" className="space-y-3">
            <PH2>16. Compliance with Data Laws</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              We strictly adhere to relevant Nigerian data protection
              legislation (NDPA) along with international privacy governance
              standard principles.
            </p>
          </section>

          <section id="changes" className="space-y-3">
            <PH2>17. Changes to This Policy</PH2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              Revisions to this policy will be published here with an updated
              &quot;Effective Date.&quot; Continued platform usage implies
              agreement with revised terms.
            </p>
          </section>

          <section
            id="contact"
            className="space-y-4 bg-mustard/10 p-6 rounded-2xl border border-primaryBg"
          >
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Mail className="w-5 h-5 text-mustard" />
              18. Contact Us
            </h2>
            <p className="text-foreground text-sm md:text-base leading-relaxed">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or your data, please reach out to our team:
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-primaryBg hover:bg-stone-800 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </section>

          <div className="pt-6 text-center border-t border-secondaryText/10 text-xs text-stone-400">
            <p>Your Trust Matters. Thank you for choosing Seraphé Beauty.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
