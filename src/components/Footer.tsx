import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl mb-4 inline-block">
                Perfectland
              </div>
              <p className="text-blue-100 mb-4">
                Your trusted partner for premium condominium rentals in Bangkok's most prestigious districts.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-blue-100">
                <li><Link to="/properties?location=Sukhumvit" className="hover:text-white transition-colors">Sukhumvit</Link></li>
                <li><Link to="/properties?location=Ekkamai" className="hover:text-white transition-colors">Ekkamai</Link></li>
                <li><Link to="/properties?location=Asoke" className="hover:text-white transition-colors">Asoke</Link></li>
                <li><Link to="/properties?location=Promphong" className="hover:text-white transition-colors">Promphong</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-blue-100">
                <li><Link to="/properties" className="hover:text-white transition-colors">All Properties</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3 text-blue-100">
                <div className="flex items-start space-x-3">
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <span>0894301155</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail size={16} className="mt-1 flex-shrink-0" />
                  <span>Sales@perfectland.co.th</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>123 Sukhumvit Road, Watthana, Bangkok 10110, Thailand</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 Perfectland Property Agent Co., Ltd. All rights reserved.
            </p>
            <p className="text-blue-200 text-sm mt-2 md:mt-0">
              Real Estate License No. 1234567
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
