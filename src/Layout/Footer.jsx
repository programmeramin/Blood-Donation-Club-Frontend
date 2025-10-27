import React from 'react'
import { Mail, Phone, MapPin, HeartHandshake, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <>
        <footer className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Brand + Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold leading-tight">BBDC — Blood Donation Club</h3>
                <p className="text-sm text-white/90">Giving life, one donation at a time.</p>
              </div>
            </div>

            <p className="text-sm text-white/90 max-w-sm">
              আমরা রক্ত দানকে সহজ, নিরাপদ এবং সম্মানজনক করে তুলতে কাজ করি। রক্তদাতাদের নিবন্ধন, ব্যাঙ্কিং সেবা, এবং জরুরি রেসপন্স টিম চালু। তোমার অংশগ্রহণই কারো জীবন বাঁচাতে পারে।
            </p>

            <div className="flex gap-3 mt-2">
              <a href="#donate" className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">Donate Now</a>
              <a href="/join" className="inline-block bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm">Join Us</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/events" className="hover:underline">Events & Drives</a></li>
              <li><a href="/volunteer" className="hover:underline">Volunteer</a></li>
              <li><a href="/resources" className="hover:underline">Donor Guide</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <div className="flex items-start gap-3 mb-3 text-sm text-white/90">
              <div className="p-2 bg-white/10 rounded-lg"><MapPin className="w-4 h-4" /></div>
              <div>
                <div className="font-medium">BBDC Office</div>
                <div className="text-xs">Dhaka, Bangladesh</div>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-3 text-sm text-white/90">
              <div className="p-2 bg-white/10 rounded-lg"><Phone className="w-4 h-4" /></div>
              <div>
                <div className="font-medium">+880 1794-861241</div>
                <div className="text-xs">Mon - Fri, 9am - 6pm</div>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 text-sm text-white/90">
              <div className="p-2 bg-white/10 rounded-lg"><Mail className="w-4 h-4" /></div>
              <div>
                <div className="font-medium">info@bbdc.org.bd</div>
                <div className="text-xs">We reply within 24 hours</div>
              </div>
            </div>

            <div className="flex gap-3 mt-2">
              <a href="https://facebook.com" aria-label="Facebook" className="p-2 bg-white/10 rounded-lg hover:bg-white/20"><Facebook className="w-4 h-4" /></a>
              <a href="https://instagram.com" aria-label="Instagram" className="p-2 bg-white/10 rounded-lg hover:bg-white/20"><Instagram className="w-4 h-4" /></a>
              <a href="https://twitter.com" aria-label="Twitter" className="p-2 bg-white/10 rounded-lg hover:bg-white/20"><Twitter className="w-4 h-4" /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 bg-white/10 rounded-lg hover:bg-white/20"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/80">© {new Date().getFullYear()} BBDC — Blood Donation Club. All rights reserved.</p>

          <div className="text-sm text-white/80">Made with ❤️ by <a href="https://github.com/" className="underline">BBDC Dev Team</a></div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
