import type React from "react"
import Link from "next/link"
import { Facebook } from "lucide-react"
import Script from "next/script"

const Footer: React.FC = () => {
  return (
    <footer className="relative">
      {/* Background Property Image - Full coverage like landing page */}
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: "url('/beautiful-renovated-house.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay to maintain readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10"></div>

      <div className="relative z-20 text-white">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid gap-6 md:grid-cols-4">
            {/* Company Info */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold mb-3 text-white">Urbanova Ventures</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Creating win-win solutions for property owners and investors in the Cleveland area.
              </p>
              <div className="flex items-center space-x-3 mb-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61578520107147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 px-3 py-2 rounded-lg hover:bg-urbanova-tan hover:text-black transition-colors border border-gray-700 flex items-center space-x-2"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="text-sm font-medium">Follow Us</span>
                </a>
              </div>

              {/* Facebook Page Plugin Embed - profile picture only */}
              <div id="fb-root"></div>
              <Script
                async
                defer
                crossOrigin="anonymous"
                src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v23.0"
                strategy="afterInteractive"
              />
              <div
                className="fb-page"
                data-href="https://www.facebook.com/profile.php?id=61578520107147"
                data-tabs=""
                data-width="100"
                data-height="130"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="true"
                data-show-facepile="true"
              />
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold mb-3 text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link href="/" className="hover:text-urbanova-tan transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/buyers" className="hover:text-urbanova-tan transition-colors">
                    Investment Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="hover:text-urbanova-tan transition-colors">
                    From Stress to Sold
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-urbanova-tan transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-urbanova-tan transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-base font-semibold mb-3 text-white">Our Services</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link href="/sell-your-house" className="hover:text-urbanova-tan transition-colors">
                    Sell Your House Fast
                  </Link>
                </li>
                <li>
                  <Link href="/sell-your-house/foreclosure" className="hover:text-urbanova-tan transition-colors">
                    Foreclosure Help
                  </Link>
                </li>
                <li>
                  <Link href="/sell-your-house/inherited" className="hover:text-urbanova-tan transition-colors">
                    Inherited Properties
                  </Link>
                </li>
                <li>
                  <Link href="/sell-your-house/relocation" className="hover:text-urbanova-tan transition-colors">
                    Relocation Sales
                  </Link>
                </li>
                <li>
                  <Link href="/sell-your-house/repairs" className="hover:text-urbanova-tan transition-colors">
                    Houses Needing Repairs
                  </Link>
                </li>
                <li>
                  <Link href="/sell-your-house/divorce" className="hover:text-urbanova-tan transition-colors">
                    Divorce Property Sales
                  </Link>
                </li>
                <li>
                  <Link href="/sell-your-house/bad-tenants" className="hover:text-urbanova-tan transition-colors">
                    Problem Tenant Properties
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-base font-semibold mb-3 text-white">Contact Us</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="text-white font-medium">Cleveland, OH</li>
                <li>
                  <a href="tel:+12164527381" className="hover:text-urbanova-tan transition-colors font-medium">
                    (216) 452-7381
                  </a>
                </li>
                <li>
                  <a href="mailto:isaiahharrisw@gmail.com" className="hover:text-urbanova-tan transition-colors">
                    isaiahharrisw@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-6 border-gray-600" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-2 md:mb-0">
              <p className="text-gray-400">© 2024 Urbanova Ventures. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-urbanova-tan transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-urbanova-tan transition-colors">
                  Terms of Service
                </Link>
                <span className="text-gray-400">Disclaimer</span>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Serving Cleveland, Akron & Northeast Ohio</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
