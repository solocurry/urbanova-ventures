"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const CustomNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show/hide navbar and contact bar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // Add background when scrolled
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const isActive = (path: string) => pathname === path

  return (
    <>
      {/* Top Contact Bar - Tan background with dark navy bubbles - Hide on scroll down */}
      <div
        className={`bg-urbanova-tan py-2 px-4 text-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="bg-slate-800 px-4 py-1 rounded-full">
            <a href="tel:+12164527381" className="text-white hover:text-gray-200 transition-colors font-medium">
              (216) 452-7381
            </a>
          </div>
          <div className="bg-slate-800 px-4 py-1 rounded-full">
            <span className="text-white font-medium">Urbanova Ventures</span>
          </div>
          <div className="bg-slate-800 px-4 py-1 rounded-full">
            <a
              href="mailto:isaiahharrisw@gmail.com"
              className="text-white hover:text-gray-200 transition-colors font-medium"
            >
              isaiahharrisw@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Black background - Hide on scroll down */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isVisible ? "top-8 translate-y-0" : "top-0 -translate-y-full"
        } bg-black`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo - New black background logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-16 w-32">
                <Image src="/urbanova-logo-black-bg.png" alt="Urbanova Ventures Logo" fill className="object-contain" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`font-medium transition-colors ${
                  isActive("/") ? "text-urbanova-tan" : "text-white hover:text-urbanova-tan"
                }`}
              >
                Home
              </Link>
              <Link
                href="/buyers"
                className={`font-medium transition-colors ${
                  isActive("/buyers") ? "text-urbanova-tan" : "text-white hover:text-urbanova-tan"
                }`}
              >
                Investment Opportunities
              </Link>
              <Link
                href="/success-stories"
                className={`font-medium transition-colors ${
                  isActive("/success-stories") ? "text-urbanova-tan" : "text-white hover:text-urbanova-tan"
                }`}
              >
                From Stress to Sold
              </Link>
              <Link
                href="/sell-your-house"
                className={`font-medium transition-colors ${
                  isActive("/sell-your-house") ? "text-urbanova-tan" : "text-white hover:text-urbanova-tan"
                }`}
              >
                Sell Your House
              </Link>
              <Link
                href="/about"
                className={`font-medium transition-colors ${
                  isActive("/about") ? "text-urbanova-tan" : "text-white hover:text-urbanova-tan"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`font-medium transition-colors ${
                  isActive("/contact") ? "text-urbanova-tan" : "text-white hover:text-urbanova-tan"
                }`}
              >
                Contact
              </Link>
              <Link href="/contact">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">Get In Touch</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-white hover:text-urbanova-tan"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className={`font-medium transition-colors ${
                    isActive("/") ? "text-urbanova-tan" : "text-white hover:text-urbanova-tan"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/buyers"
                  className={`font-medium transition-colors ${
                    isActive("/buyers") ? "text-urbanova-tan" : "text-white hover:text-urbanova-tan"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Investment Opportunities
                </Link>
                <Link
                  href="/success-stories"
                  className={`font-medium transition-colors ${
                    isActive("/success-stories") ? "text-urbanova-tan" : "text-white hover:text-urbanova-tan"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  From Stress to Sold
                </Link>
                <Link
                  href="/sell-your-house"
                  className={`font-medium transition-colors ${
                    isActive("/sell-your-house") ? "text-urbanova-tan" : "text-white hover:text-urbanova-tan"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Sell Your House
                </Link>
                <Link
                  href="/about"
                  className={`font-medium transition-colors ${
                    isActive("/about") ? "text-urbanova-tan" : "text-white hover:text-urbanova-tan"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className={`font-medium transition-colors ${
                    isActive("/contact") ? "text-urbanova-tan" : "text-white hover:text-urbanova-tan"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full">Get In Touch</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default CustomNavbar
