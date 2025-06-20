import { useEffect, useState } from 'react'
import { Star, Users, Award, MapPin, Phone, Mail } from 'lucide-react'

interface Company {
  name: string
  business: string
  established: string
  license: string
  contact: {
    email: string
    phone: string
    address: string
    website: string
  }
  serviceAreas: Array<{
    name: string
    description: string
    highlights: string[]
  }>
  targetMarkets: string[]
  services: string[]
  whyChooseUs: string[]
}

const AboutPage = () => {
  const [company, setCompany] = useState<Company | null>(null)

  useEffect(() => {
    fetch('/data/company.json')
      .then(response => response.json())
      .then(data => setCompany(data.company))
      .catch(error => console.error('Error fetching company data:', error))
  }, [])

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Perfectland Property Agent</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner for premium condominium rentals in Bangkok since {company.established}
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Excellence in Bangkok Property Rentals
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {company.business}. We specialize in connecting international clients with premium 
                residential properties in Bangkok's most prestigious districts.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Since our establishment in {company.established}, we have built a reputation for 
                exceptional service, deep market knowledge, and unwavering commitment to our clients' 
                satisfaction. Our team understands the unique needs of international renters, 
                particularly Japanese professionals, and we provide personalized service in multiple languages.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">4</div>
                  <div className="text-sm text-gray-600">Premium Areas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">6+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-100 rounded-lg p-8">
                <div className="bg-blue-600 text-white px-4 py-3 rounded-lg font-bold text-2xl mb-4 inline-block">
                  Perfectland
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="text-blue-600" size={24} />
                    <span className="text-gray-700">Licensed Real Estate Agent</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-blue-600" size={24} />
                    <span className="text-gray-700">Multilingual Support Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="text-blue-600" size={24} />
                    <span className="text-gray-700">Premium Property Portfolio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Perfectland Property Agent?
            </h2>
            <p className="text-xl text-gray-600">
              What sets us apart in Bangkok's competitive property rental market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {company.whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Star className="text-blue-600" size={24} />
                </div>
                <p className="text-gray-700">{reason}</p>
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
              Premium locations across Bangkok's most sought-after districts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {company.serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-blue-600 mr-2" size={24} />
                    <h3 className="text-xl font-semibold text-gray-900">{area.name}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{area.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {area.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized services for diverse international communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.targetMarkets.map((market, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue-600" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{market}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900">Company Name</div>
                    <div className="text-gray-700">{company.name}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Established</div>
                    <div className="text-gray-700">{company.established}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">License Number</div>
                    <div className="text-gray-700">{company.license}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Business Focus</div>
                    <div className="text-gray-700">{company.business}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="text-blue-600 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-700">{company.contact.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="text-blue-600 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-700">{company.contact.email}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-blue-600 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-700">{company.contact.address}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
