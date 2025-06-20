import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Home, 
  Search, 
  FileText, 
  Truck, 
  Headphones, 
  Settings,
  MapPin,
  Star,
  Clock,
  Shield,
  Globe,
  Users
} from 'lucide-react'

interface Company {
  services: string[]
  serviceAreas: Array<{
    name: string
    description: string
    highlights: string[]
  }>
}

const ServicesPage = () => {
  const [company, setCompany] = useState<Company | null>(null)

  useEffect(() => {
    fetch('/data/company.json')
      .then(response => response.json())
      .then(data => setCompany(data.company))
      .catch(error => console.error('Error fetching company data:', error))
  }, [])

  const serviceDetails = [
    {
      icon: <Home size={32} />,
      title: "Condominium Rental Services",
      description: "Access to premium condominiums in Bangkok's most prestigious districts with verified listings and competitive pricing.",
      features: [
        "Extensive portfolio of premium properties",
        "Verified property listings with detailed information",
        "Competitive rental rates and transparent pricing",
        "Access to exclusive off-market properties"
      ]
    },
    {
      icon: <Search size={32} />,
      title: "Property Viewing Arrangements",
      description: "Personalized property tours scheduled at your convenience with detailed property inspections and area guidance.",
      features: [
        "Flexible viewing schedules including weekends",
        "Detailed property inspections and assessments",
        "Neighborhood tours and local area information",
        "Virtual viewing options for remote clients"
      ]
    },
    {
      icon: <FileText size={32} />,
      title: "Lease Negotiation & Documentation",
      description: "Professional handling of all lease negotiations and legal documentation to ensure fair terms and smooth transactions.",
      features: [
        "Expert lease term negotiations",
        "Legal document review and preparation",
        "Contract translation services (Thai/English/Japanese)",
        "Security deposit and payment facilitation"
      ]
    },
    {
      icon: <Truck size={32} />,
      title: "Move-in Assistance & Support",
      description: "Comprehensive support during your move-in process including utility setup and local area orientation.",
      features: [
        "Utility connection assistance (electricity, water, internet)",
        "Local area orientation and essential services guide",
        "Furniture and appliance sourcing recommendations",
        "Initial settling-in support and guidance"
      ]
    },
    {
      icon: <Headphones size={32} />,
      title: "Ongoing Tenant Support",
      description: "Continuous support throughout your tenancy with maintenance coordination and issue resolution.",
      features: [
        "24/7 emergency contact support",
        "Maintenance request coordination",
        "Landlord-tenant communication facilitation",
        "Lease renewal assistance and guidance"
      ]
    },
    {
      icon: <Settings size={32} />,
      title: "Property Management Consulting",
      description: "Professional advice for property owners looking to optimize their rental investments and tenant relationships.",
      features: [
        "Property valuation and market analysis",
        "Tenant screening and selection services",
        "Rental rate optimization recommendations",
        "Property maintenance and improvement advice"
      ]
    }
  ]

  const whyChooseOurServices = [
    {
      icon: <Globe size={24} />,
      title: "Multilingual Support",
      description: "Our team provides services in Thai, English, and Japanese to serve international clients effectively."
    },
    {
      icon: <Shield size={24} />,
      title: "Licensed & Professional",
      description: "Fully licensed real estate agency with professional standards and ethical business practices."
    },
    {
      icon: <Clock size={24} />,
      title: "Efficient Process",
      description: "Streamlined processes and quick response times to minimize delays and maximize convenience."
    },
    {
      icon: <Users size={24} />,
      title: "International Experience",
      description: "Specialized expertise in serving international clients, particularly Japanese expatriates."
    },
    {
      icon: <Star size={24} />,
      title: "Premium Focus",
      description: "Exclusive focus on premium properties in Bangkok's most prestigious and convenient locations."
    },
    {
      icon: <MapPin size={24} />,
      title: "Local Expertise",
      description: "Deep knowledge of Bangkok's property market, neighborhoods, and local regulations."
    }
  ]

  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive condominium rental services designed for international clients in Bangkok
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Property Rental Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial property search to ongoing support, we provide end-to-end services 
              to make your Bangkok rental experience seamless and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600">
              What makes our property rental services exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseOurServices.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              Premium locations where we provide our expert services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {company.serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-blue-600 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-gray-900">{area.name}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{area.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Area Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {area.highlights.map((highlight, idx) => (
                        <div key={idx} className="text-sm text-gray-600 flex items-center">
                          <Star size={12} className="text-blue-600 mr-2" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={`/properties?location=${area.name}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Properties in {area.name}
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to find your perfect Bangkok home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Initial Consultation", description: "Discuss your requirements, budget, and preferences" },
              { step: "2", title: "Property Selection", description: "We curate a list of suitable properties matching your criteria" },
              { step: "3", title: "Viewing & Decision", description: "Schedule viewings and help you make an informed decision" },
              { step: "4", title: "Move-in Support", description: "Handle documentation, move-in, and ongoing support" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our experienced team help you find the ideal condominium in Bangkok's premium locations. 
              Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Us Today
              </Link>
              <Link
                to="/properties"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
