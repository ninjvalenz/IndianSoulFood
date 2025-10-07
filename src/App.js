import React, { useState } from 'react';
import { Phone, MapPin, Calendar, Star, Menu, X, ChefHat, Users, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const IndianSoulFood = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for navbar transparency
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroImages = [
    {
      id: 1,
      title: "Authentic Indian Cuisine",
      subtitle: "Delivered to Your Door"
    },
    {
      id: 2,
      title: "Catering Services",
      subtitle: "Perfect for Your Events"
    },
    {
      id: 3,
      title: "Traditional Flavors",
      subtitle: "Made with Love & Passion"
    }
  ];

  // Auto-advance carousel
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const menuItems = [
    {
      id: 1,
      name: "Butter Chicken",
      category: "Main Course",
      description: "Tender chicken in creamy tomato sauce with aromatic spices",
      price: "$16.99",
      spiceLevel: "Medium",
      vegetarian: false
    },
    {
      id: 2,
      name: "Paneer Tikka Masala",
      category: "Main Course",
      description: "Grilled cottage cheese in rich, spiced tomato gravy",
      price: "$14.99",
      spiceLevel: "Medium",
      vegetarian: true
    },
    {
      id: 3,
      name: "Biryani",
      category: "Rice Dishes",
      description: "Fragrant basmati rice layered with spiced meat or vegetables",
      price: "$15.99",
      spiceLevel: "Mild",
      vegetarian: false
    },
    {
      id: 4,
      name: "Samosa (3 pcs)",
      category: "Appetizers",
      description: "Crispy pastry filled with spiced potatoes and peas",
      price: "$6.99",
      spiceLevel: "Mild",
      vegetarian: true
    },
    {
      id: 5,
      name: "Tandoori Chicken",
      category: "Main Course",
      description: "Yogurt-marinated chicken cooked in traditional clay oven",
      price: "$17.99",
      spiceLevel: "Medium",
      vegetarian: false
    },
    {
      id: 6,
      name: "Dal Makhani",
      category: "Main Course",
      description: "Black lentils slow-cooked with butter and cream",
      price: "$12.99",
      spiceLevel: "Mild",
      vegetarian: true
    },
    {
      id: 7,
      name: "Naan Bread",
      category: "Breads",
      description: "Fresh-baked flatbread from the tandoor oven",
      price: "$3.99",
      spiceLevel: "None",
      vegetarian: true
    },
    {
      id: 8,
      name: "Palak Paneer",
      category: "Main Course",
      description: "Cottage cheese cubes in creamy spinach curry",
      price: "$13.99",
      spiceLevel: "Mild",
      vegetarian: true
    },
    {
      id: 9,
      name: "Chicken Tikka",
      category: "Appetizers",
      description: "Marinated chicken pieces grilled to perfection",
      price: "$9.99",
      spiceLevel: "Medium",
      vegetarian: false
    },
    {
      id: 10,
      name: "Gulab Jamun",
      category: "Desserts",
      description: "Sweet milk dumplings soaked in rose-flavored syrup",
      price: "$5.99",
      spiceLevel: "None",
      vegetarian: true
    },
    {
      id: 11,
      name: "Lamb Rogan Josh",
      category: "Main Course",
      description: "Tender lamb in aromatic Kashmiri curry sauce",
      price: "$18.99",
      spiceLevel: "Hot",
      vegetarian: false
    },
    {
      id: 12,
      name: "Chana Masala",
      category: "Main Course",
      description: "Chickpeas simmered in tangy tomato-onion gravy",
      price: "$11.99",
      spiceLevel: "Medium",
      vegetarian: true
    }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      date: "June 6, 2023",
      rating: 5,
      text: "The butter chicken is absolutely divine! Indian Soul Food catered our office party and everyone was blown away. Authentic flavors that transport you straight to India."
    },
    {
      name: "James Chen",
      date: "August 14, 2023",
      rating: 5,
      text: "Best Indian food delivery in LA! The biryani is perfectly spiced and the portions are generous. Been ordering weekly since they opened."
    },
    {
      name: "Priya Patel",
      date: "November 22, 2023",
      rating: 5,
      text: "As someone from India, I'm very particular about authentic flavors. Indian Soul Food nails it every time. The paneer tikka masala tastes just like home!"
    },
    {
      name: "Michael Rodriguez",
      date: "February 18, 2024",
      rating: 5,
      text: "They catered our wedding reception and it was phenomenal! Guests are still talking about the food. Professional service and incredible taste."
    },
    {
      name: "Emily Thompson",
      date: "June 9, 2024",
      rating: 5,
      text: "The tandoori chicken is my go-to! Always fresh, perfectly cooked, and delivered hot. Customer service is also top-notch."
    },
    {
      name: "David Kim",
      date: "October 3, 2024",
      rating: 5,
      text: "Hosted a corporate event with their catering service. The variety and quality of food impressed all 50 guests. Highly recommend for any event!"
    },
    {
      name: "Rachel Foster",
      date: "January 27, 2025",
      rating: 5,
      text: "Discovered Indian Soul Food through a friend's recommendation and I'm hooked! The lamb rogan josh is incredible. Perfect spice level and tender meat every time."
    },
    {
      name: "Antonio Gomez",
      date: "April 12, 2025",
      rating: 5,
      text: "Amazing experience from start to finish! Called to place my order and the staff was so helpful with recommendations. The samosas were crispy perfection!"
    },
    {
      name: "Tyler Brooks",
      date: "April 30, 2025",
      rating: 5,
      text: "Called them to cater my girlfriend's birthday celebration and they made it so special! The food was the highlight of the party. Everyone kept asking where we got the catering from. Thank you for making her day memorable!"
    },
    {
      name: "Lisa Wang",
      date: "July 5, 2025",
      rating: 5,
      text: "They catered our company's annual summer party and absolutely crushed it! 100+ employees and everyone loved the variety. Will definitely use them again!"
    },
    {
      name: "Marcus Johnson",
      date: "September 28, 2025",
      rating: 5,
      text: "I'm not usually big on Indian food, but Indian Soul Food changed my mind completely. The dal makhani is comfort food at its finest. Delivery is always prompt too!"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ChefHat className={`transition-colors ${isScrolled ? 'text-orange-600' : 'text-white'}`} size={32} />
              <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Indian Soul Food</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-300'}`}>Home</button>
              <button onClick={() => scrollToSection('menu')} className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-300'}`}>Menu</button>
              <button onClick={() => scrollToSection('about')} className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-300'}`}>Our Story</button>
              <button onClick={() => scrollToSection('testimonials')} className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-300'}`}>Reviews</button>
              <a href="tel:+18315214619" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">Order Now</a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} /> : <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700">Home</button>
              <button onClick={() => scrollToSection('menu')} className="block w-full text-left py-2 text-gray-700">Menu</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">Our Story</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-gray-700">Reviews</button>
              <a href="tel:+18315214619" className="block w-full text-center bg-orange-600 text-white px-4 py-2 rounded-lg mt-2">Order Now</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Carousel */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 opacity-80"></div>
              
              {/* Placeholder for background image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="text-center text-gray-600">
                  <ChefHat size={100} className="mx-auto mb-4 opacity-30" />
                  <p className="text-xl opacity-50">Hero Image {image.id} Placeholder</p>
                  <p className="text-sm opacity-30 mt-2">Upload your restaurant/food photo here</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows - Hidden */}
        <button
          onClick={prevSlide}
          className="hidden absolute left-4 md:left-8 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="hidden absolute right-4 md:right-8 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl leading-tight">
            {heroImages[currentSlide].title}
            <br />
            <span className="text-orange-400">{heroImages[currentSlide].subtitle}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto drop-shadow-lg">
            Experience the rich flavors and aromatic spices of traditional Indian cooking. 
            Perfect for delivery, catering, and special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('menu')} 
              className="bg-green-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:bg-green-600 transition transform hover:scale-105 shadow-2xl"
            >
              VIEW MENU
            </button>
            <a 
              href="tel:+18315214619" 
              className="bg-transparent border-3 border-white text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:bg-white hover:text-gray-900 transition transform hover:scale-105 shadow-2xl"
            >
              CALL TO ORDER
            </a>
          </div>
          <div className="mt-8 md:mt-12 flex items-center justify-center text-gray-300">
            <MapPin size={20} className="mr-2 text-orange-400" />
            <span className="text-base md:text-lg">North Harvard, Los Angeles, CA</span>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Menu</h2>
            <p className="text-xl text-gray-600">Discover authentic flavors crafted with love and tradition</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedDish(item)}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <ChefHat size={60} className="mx-auto text-gray-300 mb-2" />
                    <p className="text-gray-400 text-sm">Food Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <span className="text-orange-600 font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-sm text-orange-600 mb-2">{item.category}</p>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className={`px-3 py-1 rounded-full ${item.vegetarian ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {item.vegetarian ? '🌱 Vegetarian' : '🍖 Non-Veg'}
                    </span>
                    <span className="text-gray-500">🌶️ {item.spiceLevel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedDish(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button onClick={() => setSelectedDish(null)} className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition">
                <X size={24} />
              </button>
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 h-64 flex items-center justify-center">
                <div className="text-center">
                  <ChefHat size={80} className="mx-auto text-gray-300 mb-2" />
                  <p className="text-gray-400">Food Image Placeholder</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedDish.name}</h2>
                  <p className="text-orange-600 font-semibold">{selectedDish.category}</p>
                </div>
                <span className="text-3xl font-bold text-orange-600">{selectedDish.price}</span>
              </div>
              <p className="text-gray-700 text-lg mb-6">{selectedDish.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Spice Level</p>
                  <p className="font-semibold text-gray-900">🌶️ {selectedDish.spiceLevel}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Dietary</p>
                  <p className="font-semibold text-gray-900">{selectedDish.vegetarian ? '🌱 Vegetarian' : '🍖 Non-Vegetarian'}</p>
                </div>
              </div>
              <a href="tel:+18315214619" className="block w-full bg-orange-600 text-white text-center px-6 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition">
                <Phone className="inline mr-2" size={20} />
                Call to Order
              </a>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Indian Soul Food was born from a passion for authentic Indian cuisine and a desire to share the rich culinary heritage of India with the Los Angeles community. Since opening our doors in 2023, we've been committed to bringing traditional flavors and time-honored recipes to your table.
                </p>
                <p>
                  Our kitchen is led by experienced chefs who grew up in India, learning recipes passed down through generations. Every dish we prepare uses traditional cooking methods, fresh ingredients, and authentic spices imported directly from India.
                </p>
                <p>
                  We specialize in delivery service, making it easy for you to enjoy restaurant-quality Indian food in the comfort of your home. We also offer catering for events of all sizes, from intimate family gatherings to large corporate functions, bringing the warmth and flavor of Indian hospitality to your special occasions.
                </p>
                <p className="font-semibold text-orange-600">
                  Our mission is simple: to serve food that touches the soul and brings people together, one meal at a time.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Users className="text-orange-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Catering Services</h3>
                <p className="text-gray-600 mb-4">
                  Planning an event? Let us handle the food! We cater weddings, corporate events, birthday parties, and more. Customizable menus to suit your needs and guest count.
                </p>
                <a href="tel:+18315214619" className="text-orange-600 font-semibold hover:text-orange-700">
                  Call for Catering Inquiry →
                </a>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Calendar className="text-orange-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Food Events</h3>
                <p className="text-gray-600 mb-4">
                  Experience authentic Indian cooking at our special food events. From cooking demonstrations to tasting sessions, we bring the culture and cuisine together.
                </p>
                <a href="tel:+18315214619" className="text-orange-600 font-semibold hover:text-orange-700">
                  Inquire About Events →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Loved by food enthusiasts across Los Angeles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-orange-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat size={32} className="text-orange-500" />
                <span className="text-2xl font-bold">Indian Soul Food</span>
              </div>
              <p className="text-gray-400">
                Authentic Indian cuisine delivered to your door. Catering and events available.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone size={18} className="mr-2 text-orange-500" />
                  <a href="tel:+18315214619" className="hover:text-white transition">+1 (831) 521-4619</a>
                </p>
                <p className="flex items-center">
                  <MapPin size={18} className="mr-2 text-orange-500" />
                  North Harvard, Los Angeles, CA
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Sunday</p>
                <p className="font-semibold text-white">11:00 AM - 10:00 PM</p>
                <p className="text-sm mt-4">Call us for delivery, catering, or event inquiries</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Indian Soul Food. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndianSoulFood;