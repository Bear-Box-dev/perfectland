import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, Bed, Bath, Square, Star, ArrowRight } from 'lucide-react'

interface Property {
  id: string
  name: string
  location: string
  address: string
  price: number
  currency: string
  size: number
  bedrooms: number
  bathrooms: number
  mainImage: string
  featured: boolean
  available: boolean
  description: string
  amenities: string[]
}

const HomePage = () => {
  const [properties, setProperties] = useState<Property[]>([])
  const [searchLocation, setSearchLocation] = useState('')
  const [priceRange, setPriceRange] = useState('')

  useEffect(() => {
    fetch('/data/properties.json')
      .then(response => response.json())
      .then(data => setProperties(data.properties))
      .catch(error => console.error('Error fetching properties:', error))
  }, [])

  const featuredProperties = properties.filter(property => property.featured && property.available)
  const locations = ['All Areas', 'Sukhumvit', 'Ekkamai', 'Asoke', 'Promphong']
  const priceRanges = ['Any Price', '30,000 - 40,000', '40,000 - 50,000', '50,000 - 60,000', '60,000+']

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchLocation && searchLocation !== 'All Areas') {
      params.append('location', searchLocation)
    }
    if (priceRange && priceRange !== 'Any Price') {
      params.append('price', priceRange)
    }
    
    window.location.href = `/properties?${params.toString()}`
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect Home in Bangkok
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Premium condominium rentals in Sukhumvit, Ekkamai, Asoke & Promphong
            </p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 text-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range (THB)</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {priceRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={handleSearch}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Search size={20} />
                    <span>Search Properties</span>
                  </button>
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
              Your trusted partner for premium Bangkok condominium rentals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Locations</h3>
              <p className="text-gray-600">
                Specialized expertise in Bangkok's most prestigious districts including Sukhumvit, Ekkamai, Asoke, and Promphong.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">International Focus</h3>
              <p className="text-gray-600">
                Multilingual support and specialized services for international clients, especially Japanese expatriates.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Service</h3>
              <p className="text-gray-600">
                From property viewing to move-in assistance and ongoing support, we handle every aspect of your rental journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Properties
              </h2>
              <p className="text-xl text-gray-600">
                Handpicked premium condominiums in Bangkok's best locations
              </p>
            </div>
            <Link
              to="/properties"
              className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <span>View All Properties</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.slice(0, 6).map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={property.mainImage}
                    alt={property.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {property.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {property.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-600 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Bed size={16} className="mr-1" />
                        <span className="text-sm">{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath size={16} className="mr-1" />
                        <span className="text-sm">{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Square size={16} className="mr-1" />
                        <span className="text-sm">{property.size}m²</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">
                        ฿{property.price.toLocaleString()}
                      </span>
                      <span className="text-gray-600 text-sm">/month</span>
                    </div>
                    <Link
                      to={`/property/${property.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 md:hidden">
            <Link
              to="/properties"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              <span>View All Properties</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              Premium locations across Bangkok's most sought-after districts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Sukhumvit', desc: 'International district with luxury shopping and dining', properties: properties.filter(p => p.location === 'Sukhumvit').length },
              { name: 'Ekkamai', desc: 'Trendy area popular with young professionals', properties: properties.filter(p => p.location === 'Ekkamai').length },
              { name: 'Asoke', desc: 'Central business district with excellent connectivity', properties: properties.filter(p => p.location === 'Asoke').length },
              { name: 'Promphong', desc: 'Upscale residential area with tranquil atmosphere', properties: properties.filter(p => p.location === 'Promphong').length }
            ].map((area) => (
              <Link
                key={area.name}
                to={`/properties?location=${area.name}`}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.name}</h3>
                <p className="text-gray-600 mb-4">{area.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">{area.properties} Properties</span>
                  <ArrowRight size={16} className="text-blue-600" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
