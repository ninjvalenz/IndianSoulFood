import React, { useState } from 'react';
import { Phone, MapPin, Calendar, Star, Menu, X, ChefHat, Users, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const IndianSoulFood = () => {
  // Load Google Fonts
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);
  
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
      name: "Roei C.",
      date: "June 6, 2023",
      rating: 5,
      text: "The butter chicken is absolutely divine! Indian Soul Food catered our office party and everyone was blown away. Authentic flavors that transport you straight to India."
    },
    {
      name: "Berna L.",
      date: "August 14, 2023",
      rating: 5,
      text: "Best Indian food delivery in LA! The biryani is perfectly spiced and the portions are generous. Been ordering weekly since they opened."
    },
    {
      name: "Pankaj B.",
      date: "November 22, 2023",
      rating: 5,
      text: "As someone from India, I'm very particular about authentic flavors. Indian Soul Food nails it every time. The paneer tikka masala tastes just like home!"
    },
    {
      name: "Lisa B.",
      date: "February 18, 2024",
      rating: 5,
      text: "They catered our wedding reception and it was phenomenal! Guests are still talking about the food. Professional service and incredible taste."
    },
    {
      name: "Michael N.",
      date: "June 9, 2024",
      rating: 5,
      text: "The tandoori chicken is my go-to! Always fresh, perfectly cooked, and delivered hot. Customer service is also top-notch."
    },
    {
      name: "Akie P.",
      date: "October 3, 2024",
      rating: 5,
      text: "Hosted a corporate event with their catering service. The variety and quality of food impressed all 50 guests. Highly recommend for any event!"
    },
    {
      name: "Ian S.",
      date: "January 27, 2025",
      rating: 5,
      text: "Discovered Indian Soul Food through a friend's recommendation and I'm hooked! The lamb rogan josh is incredible. Perfect spice level and tender meat every time."
    },
    {
      name: "Kiara D.",
      date: "April 12, 2025",
      rating: 5,
      text: "Amazing experience from start to finish! Called to place my order and the staff was so helpful with recommendations. The samosas were crispy perfection!"
    },
    {
      name: "NJ",
      date: "April 30, 2025",
      rating: 5,
      text: "I wanted to surprise my date for her birthday, but it was all last-minute — so I decided to order Indian food at home. Best decision ever! The food arrived right on time, everything was warm, flavorful, and beautifully packed. The butter chicken and biryani were a huge hit — she absolutely loved it! It turned a simple home setup into a really special night. Totally saving this spot for future surprises!"
    },
    {
      name: "Ciana D.",
      date: "July 5, 2025",
      rating: 5,
      text: "They catered our company's annual summer party and absolutely crushed it! 100+ employees and everyone loved the variety. Will definitely use them again!"
    },
    {
      name: "Amhet P.",
      date: "September 28, 2025",
      rating: 4,
      text: "I'm not usually big on Indian food, but Indian Soul Food changed my mind completely. The dal makhani is comfort food at its finest. Delivery is always prompt too!"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-xl transition-all duration-300 ${isScrolled ? 'bg-gradient-to-br from-amber-100 to-amber-200 shadow-lg' : ''}`}>
                <ChefHat className={`transition-colors duration-300 ${isScrolled ? 'text-amber-900' : 'text-white drop-shadow-lg'}`} size={36} />
              </div>
              <span className={`text-2xl font-bold transition-all duration-300 ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-2xl'}`} style={{ fontFamily: 'Playfair Display, serif' }}>
                Indian Soul Food
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('home')} className={`transition-all duration-300 font-medium relative group ${isScrolled ? 'text-gray-700 hover:text-amber-900' : 'text-white hover:text-amber-200'}`}>
                Home
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full`}></span>
              </button>
              <button onClick={() => scrollToSection('menu')} className={`transition-all duration-300 font-medium relative group ${isScrolled ? 'text-gray-700 hover:text-amber-900' : 'text-white hover:text-amber-200'}`}>
                Menu
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full`}></span>
              </button>
              <button onClick={() => scrollToSection('about')} className={`transition-all duration-300 font-medium relative group ${isScrolled ? 'text-gray-700 hover:text-amber-900' : 'text-white hover:text-amber-200'}`}>
                Our Story
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full`}></span>
              </button>
              <button onClick={() => scrollToSection('testimonials')} className={`transition-all duration-300 font-medium relative group ${isScrolled ? 'text-gray-700 hover:text-amber-900' : 'text-white hover:text-amber-200'}`}>
                Reviews
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full`}></span>
              </button>
              <a href="tel:+18315214619" className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-6 py-3 rounded-xl hover:from-amber-800 hover:to-amber-900 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                Order Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
              {isMenuOpen ? <X size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-amber-200 shadow-2xl">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-amber-50 rounded-lg transition-all duration-300">Home</button>
              <button onClick={() => scrollToSection('menu')} className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-amber-50 rounded-lg transition-all duration-300">Menu</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-amber-50 rounded-lg transition-all duration-300">Our Story</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-amber-50 rounded-lg transition-all duration-300">Reviews</button>
              <a href="tel:+18315214619" className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-3 rounded-xl mt-2 font-semibold shadow-lg">Order Now</a>
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
              {/* Background gradient overlay with texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-amber-950/50 to-stone-900/60 z-10"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.05),transparent_50%)] z-10"></div>
              
              {/* Background image or placeholder */}
              {index === 0 ? (
                <img 
                  src="/biryani_herobanner.jpg" 
                  alt="Indian Soul Food - Authentic Biryani"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : index === 1 ? (
                <img 
                  src="/catering_herobanner.jpg" 
                  alt="Indian Soul Food - Catering Services"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <img 
                  src="/spices_herobanner.jpg" 
                  alt="Indian Soul Food - Traditional Spices"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl leading-tight animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
            {heroImages[currentSlide].title}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">{heroImages[currentSlide].subtitle}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 md:mb-12 max-w-3xl mx-auto drop-shadow-lg font-light">
            Experience the rich flavors and aromatic spices of traditional Indian cooking. 
            Perfect for delivery, catering, and special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('menu')} 
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50"
            >
              VIEW MENU
            </button>
            <a 
              href="tel:+18315214619" 
              className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              CALL TO ORDER
            </a>
          </div>
          <div className="mt-8 md:mt-12 flex items-center justify-center text-gray-200">
            <MapPin size={20} className="mr-2 text-amber-400" />
            <span className="text-base md:text-lg">North Harvard, Los Angeles, CA</span>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-12 h-3 shadow-lg' 
                  : 'bg-white/50 w-3 h-3 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-gradient-to-b from-stone-50 to-white relative">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(217,119,6,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600"></div>
                <Sparkles className="text-amber-600" size={24} />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Our Menu</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">Discover authentic flavors crafted with love and tradition</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedDish(item)}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-amber-100"
              >
                <div className="relative bg-gradient-to-br from-amber-50 to-stone-100 h-56 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-center relative z-10">
                    <ChefHat size={70} className="mx-auto text-amber-700/40 mb-2 transform group-hover:scale-110 transition-transform duration-500" />
                    <p className="text-gray-500 text-sm font-medium">Food Image</p>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-amber-50/30">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-900 transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>{item.name}</h3>
                    <span className="text-amber-800 font-bold text-lg px-3 py-1 bg-amber-100 rounded-lg">{item.price}</span>
                  </div>
                  <p className="text-sm text-amber-700 mb-3 font-semibold uppercase tracking-wide">{item.category}</p>
                  <p className="text-gray-600 mb-4 font-light leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center text-sm pt-4 border-t border-amber-100">
                    <span className={`px-3 py-1.5 rounded-full font-medium ${item.vegetarian ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                      {item.vegetarian ? '🌱 Vegetarian' : '🍖 Non-Veg'}
                    </span>
                    <span className="text-gray-600 font-medium">🌶️ {item.spiceLevel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedDish(null)}>
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-scale-in border-2 border-amber-200" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button onClick={() => setSelectedDish(null)} className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 text-gray-700 hover:text-gray-900 hover:scale-110">
                <X size={24} />
              </button>
              <div className="bg-gradient-to-br from-amber-100 to-stone-200 h-72 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.1),transparent_70%)]"></div>
                <div className="text-center relative z-10">
                  <ChefHat size={100} className="mx-auto text-amber-700/50 mb-2" />
                  <p className="text-gray-500 font-medium">Food Image Placeholder</p>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{selectedDish.name}</h2>
                  <p className="text-amber-700 font-semibold text-lg uppercase tracking-wide">{selectedDish.category}</p>
                </div>
                <span className="text-4xl font-bold text-amber-800 px-4 py-2 bg-amber-100 rounded-xl">{selectedDish.price}</span>
              </div>
              <p className="text-gray-700 text-lg mb-8 font-light leading-relaxed">{selectedDish.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-stone-50 to-amber-50 p-5 rounded-xl border border-amber-200 shadow-sm">
                  <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">Spice Level</p>
                  <p className="font-bold text-gray-900 text-lg">🌶️ {selectedDish.spiceLevel}</p>
                </div>
                <div className="bg-gradient-to-br from-stone-50 to-amber-50 p-5 rounded-xl border border-amber-200 shadow-sm">
                  <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wide">Dietary</p>
                  <p className="font-bold text-gray-900 text-lg">{selectedDish.vegetarian ? '🌱 Vegetarian' : '🍖 Non-Veg'}</p>
                </div>
              </div>
              <a href="tel:+18315214619" className="block w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white text-center px-6 py-5 rounded-xl text-lg font-bold hover:from-amber-800 hover:to-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Phone className="inline mr-2" size={22} />
                Call to Order
              </a>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600"></div>
                  <Sparkles className="text-amber-600" size={20} />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600"></div>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Our Story</h2>
              <div className="space-y-5 text-gray-700 text-lg font-light leading-relaxed">
                <p>
                  Indian Soul Food was born from a passion for authentic Indian cuisine and a desire to share the rich culinary heritage of India with the Los Angeles community. Since opening our doors in 2023, we've been committed to bringing traditional flavors and time-honored recipes to your table.
                </p>
                <p>
                  Our kitchen is led by experienced chefs who grew up in India, learning recipes passed down through generations. Every dish we prepare uses traditional cooking methods, fresh ingredients, and authentic spices imported directly from India.
                </p>
                <p>
                  We specialize in delivery service, making it easy for you to enjoy restaurant-quality Indian food in the comfort of your home. We also offer catering for events of all sizes, from intimate family gatherings to large corporate functions, bringing the warmth and flavor of Indian hospitality to your special occasions.
                </p>
                <p className="font-semibold text-amber-900 text-xl italic border-l-4 border-amber-600 pl-4">
                  Our mission is simple: to serve food that touches the soul and brings people together, one meal at a time.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="group bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-md">
                  <Phone className="text-amber-900" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Delivery Service</h3>
                <p className="text-gray-700 mb-5 font-light leading-relaxed">
                  Craving authentic Indian food? We deliver fresh, hot meals right to your doorstep. Order now and enjoy restaurant-quality cuisine in the comfort of your home.
                </p>
                <a href="tel:+18315214619" className="text-amber-800 font-semibold hover:text-amber-900 inline-flex items-center group/link">
                  Call to Order Delivery
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
              <div className="group bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-md">
                  <Users className="text-amber-900" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Catering Services</h3>
                <p className="text-gray-700 mb-5 font-light leading-relaxed">
                  Planning an event? Let us handle the food! We cater weddings, corporate events, birthday parties, and more. Customizable menus to suit your needs and guest count.
                </p>
                <a href="tel:+18315214619" className="text-amber-800 font-semibold hover:text-amber-900 inline-flex items-center group/link">
                  Call for Catering Inquiry 
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
              <div className="group bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-md">
                  <Calendar className="text-amber-900" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Food Events</h3>
                <p className="text-gray-700 mb-5 font-light leading-relaxed">
                  Experience authentic Indian cooking at our special food events. From cooking demonstrations to tasting sessions, we bring the culture and cuisine together.
                </p>
                <a href="tel:+18315214619" className="text-amber-800 font-semibold hover:text-amber-900 inline-flex items-center group/link">
                  Inquire About Events 
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-stone-50 to-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(217,119,6,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600"></div>
                <Sparkles className="text-amber-600" size={24} />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>What Our Customers Say</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">Loved by food enthusiasts across Los Angeles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-500 fill-current transform group-hover:scale-110 transition-transform duration-300" size={22} style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic font-light leading-relaxed text-lg">"{testimonial.text}"</p>
                <div className="border-t-2 border-amber-200 pt-5">
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 font-light mt-1">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-gradient-to-br from-gray-900 to-stone-900 text-white py-16 border-t-4 border-amber-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,119,6,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-3 rounded-xl shadow-lg">
                  <ChefHat size={32} className="text-white" />
                </div>
                <span className="text-2xl font-bold text-amber-400" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Indian Soul Food
                </span>
              </div>
              <p className="text-gray-400 font-light leading-relaxed">
                Authentic Indian cuisine delivered to your door. Catering and events available.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-amber-400" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Us</h3>
              <div className="space-y-4 text-gray-400 font-light">
                <div className="flex items-center group">
                  <div className="bg-amber-900/50 p-2 rounded-lg mr-3 group-hover:bg-amber-800/50 transition-colors duration-300">
                    <Phone size={18} className="text-amber-400" />
                  </div>
                  <a href="tel:+18315214619" className="hover:text-amber-400 transition-colors duration-300">+1 (831) 521-4619</a>
                </div>
                <div className="flex items-center group">
                  <div className="bg-amber-900/50 p-2 rounded-lg mr-3 group-hover:bg-amber-800/50 transition-colors duration-300">
                    <MapPin size={18} className="text-amber-400" />
                  </div>
                  <span>North Harvard, Los Angeles, CA</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-amber-400" style={{ fontFamily: 'Playfair Display, serif' }}>Hours</h3>
              <div className="space-y-3 text-gray-400 font-light">
                <div>Monday - Sunday</div>
                <div className="font-semibold text-white text-lg">11:00 AM - 10:00 PM</div>
                <div className="text-sm mt-4 leading-relaxed">Call us for delivery, catering, or event inquiries</div>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-900/50 mt-12 pt-8 text-center text-gray-400 font-light">
            <div>&copy; 2024 Indian Soul Food. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndianSoulFood;