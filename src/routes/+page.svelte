<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Birdy</title>
  <link rel="icon" href="https://getbirdy.co/static/logo/icon.png" type="image/png" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preload" href="/themes/fonts/Nunito/Nunito-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous" /> 
  <link rel="preload" href="/themes/fonts/Nunito/Nunito-BoldItalic.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
  <link rel="preload" href="/themes/fonts/Nunito/Nunito-Bold.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
  <link rel="preload" href="/themes/fonts/Nunito/Nunito-Italic.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
  <link rel="preload" href="/themes/fonts/Nunito/Nunito-Light.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
  <link rel="preload" href="/themes/fonts/Nunito/Nunito-LightItalic.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
  <link rel="preload" href="/themes/fonts/Nunito/Nunito-ExtraBold.ttf" as="font" type="font/ttf" crossorigin="anonymous" />   
  <link rel="preload" href="/themes/fonts/Nunito/Nunito-ExtraBoldItalic.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
  <link rel="preload" href="/themes/fonts/Nunito/Nunito-ExtraLight.ttf" as="font" type="font/ttf" crossorigin="anonymous" />  
  <link rel="preload" href="/themes/fonts/Nunito/Nunito-ExtraLightItalic.ttf" as="font" type="font/ttf" crossorigin="anonymous" />  
  <link rel="preload" href="/themes/fonts/Nunito/Nunito-SemiBold.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
  <link rel="preload" href="/themes/fonts/Nunito/Nunito-SemiBoldItalic.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
  <!-- Add Font Awesome for social media icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />


  
  <style>
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-Regular.ttf') format('truetype');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-Bold.ttf') format('truetype');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-BoldItalic.ttf') format('truetype');
      font-weight: 700;
      font-style: italic;
    }
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-Italic.ttf') format('truetype');
      font-weight: 400;
      font-style: italic;
    }
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
    }
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-LightItalic.ttf') format('truetype');
      font-weight: 300;
      font-style: italic;
    }
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-ExtraBold.ttf') format('truetype');
      font-weight: 800;
      font-style: normal;
    }
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-ExtraBoldItalic.ttf') format('truetype');
      font-weight: 800;
      font-style: italic;
    }
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-ExtraLight.ttf') format('truetype');
      font-weight: 200;
      font-style: normal;
    }
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-ExtraLightItalic.ttf') format('truetype');
      font-weight: 200;
      font-style: italic;
    }
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-SemiBold.ttf') format('truetype');
      font-weight: 600;
      font-style: normal;
    }
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-SemiBoldItalic.ttf') format('truetype');
      font-weight: 600;
      font-style: italic;
    }
    html, body {
      font-family: 'Nunito', sans-serif;
      line-height: 1.6;
    }
   
  </style>
</head>
<body class="bg-blue-50 text-black">
  <!-- Navbar -->
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0">
          <a href="/" class="text-2xl font-extrabold text-blue-900 tracking-tight">Birdy</a>
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="text-blue-900 hover:text-blue-600 font-semibold text-lg">Home</a>
          <a href="#features" class="text-blue-900 hover:text-blue-600 font-semibold text-lg">Features</a>
          <a href="#faq" class="text-blue-900 hover:text-blue-600 font-semibold text-lg">FAQ</a>
          <a href="#contact" class="text-blue-900 hover:text-blue-600 font-semibold text-lg">Contact</a>
        </div>
        <div class="md:hidden">
          <button id="menu-toggle" class="text-blue-900 focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div id="mobile-menu" class="hidden md:hidden bg-white shadow-md">
      <div class="px-4 pt-2 pb-3 space-y-1">
        <a href="#home" class="block text-blue-900 hover:text-blue-600 font-semibold text-lg">Home</a>
        <a href="#features" class="block text-blue-900 hover:text-blue-600 font-semibold text-lg">Features</a>
        <a href="#faq" class="block text-blue-900 hover:text-blue-600 font-semibold text-lg">FAQ</a>
        <a href="#contact" class="block text-blue-900 hover:text-blue-600 font-semibold text-lg">Contact</a>
      </div>
    </div>
  </nav>
  <!-- Hero Section -->
  <section id="home" class="py-12 sm:py-20 bg-gradient-to-r from-blue-100 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 text-center md:text-left">
          <h1 class="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight leading-tight"> Birdy Connect   </h1>
          <p class="text-xl sm:text-2xl font-light text-black mb-6 leading-relaxed">   Join a trusted network of private drivers and riders — and keep more in your pocket.
          </p>
          <a href="#features" class="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition font-semibold text-lg shadow-md">Learn More</a>
        </div>
        <div class="md:w-1/2 mt-8 md:mt-0">
           <img src="../img/girl4.png" alt="Hero Image" class="rounded-xl shadow-2xl w-full">
        </div> 
      </div>
    </div>
  </section>
  <!-- Plans Section -->
  <section class="py-12 sm:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center"></div>
      <div class="max-w-4xl mx-auto">
        <div id="features" class="flex flex-col sm:flex-row justify-center gap-8">
          <div class="text-left w-full sm:w-1/2 relative sm:pr-12 pl-6 sm:pl-0 sm:border-r sm:border-gray-300">
            <p class="text-sm text-gray-500 uppercase mb-6 font-semibold"> Best Value</p>
            <h3 class="text-3xl font-bold text-blue-900 mb-2">Benefits For Riders </h3>
            <p class="text-4xl font-extrabold text-blue-700 mb-6"> No Fee</p>
            <div class="pl-2 sm:pl-0">
              <ul class="text-left mb-4 space-y-2 font-light text-lg max-w-md">
                <div style="display: flex; align-items: flex-start;">
                  <span style="margin-right: 8px;">•</span>
                  <span> <b>Get the same ride, for Up to 10–15%  
                    <a href="/clients" class="text-blue-600 font-semibold hover:bg-blue-100 hover:text-blue-800 transition duration-300 rounded px-1 no-underline">Less</a>  
                  </b><br/>We generally cost less than big-name apps, and we’ll price match if needed.</span>
                </div>  
                <div style="display: flex; align-items: flex-start;">
                  <span style="margin-right: 8px;">•</span>
                  <span>Traditional apps often underpay drivers, forcing them to work long hours — which can lead to tired, less focused drivers. With Birdy, you pay the full amount directly to the driver.</span>
                </div> 
                <div style="display: flex; align-items: flex-start;">
                  <span style="margin-right: 8px;">•</span>
                  <span>Build your personal list of trusted drivers for reliable, on-time rides. </span>
                </div> 
                <div style="display: flex; align-items: flex-start;">
                  <span style="margin-right: 8px;">•</span>
                  <span>The app shows you which drivers your friends have trusted and liked — making it easier to choose safe, reliable rides</span>
                </div>
                <div style="display: flex; align-items: flex-start;">
                  <span style="margin-right: 8px;">•</span>
                  <span>No more safety worries—even at night - Enjoy exceptional, personalized service.</span>
                </div>
                <div style="display: flex; align-items: flex-start;">
                  <span style="margin-right: 8px;">•</span>
                  <span>The system automatically pings your preferred driver; if unavailable, book another trusted pro with one tap.</span>
                </div>
                <div style="display: flex; align-items: flex-start;">
                  <span style="margin-right: 8px;">•</span>
                  <span>I need more convincing <a href="/clients" class="text-blue-600 font-semibold hover:bg-blue-100 hover:text-blue-800 transition duration-300 rounded px-1 no-underline">why</a> - I should choose this over other options?</span>
                </div>  
              </ul>
            </div>
            <a href="/get-handle" class="inline-block bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition font-semibold text-lg shadow-md">Join the list</a>
          </div>
          <div class="text-left w-full sm:w-1/2 sm:pl-12 pl-6">
            <p class="text-sm text-purple-600 uppercase mb-6 font-semibold">Promotional Offer </p>
            <h3 class="text-3xl font-bold text-blue-900 mb-2">Benefits For Drivers</h3>
            <p class="text-4xl font-extrabold text-purple-700 mb-6">$5.00/mo</p>
            <ul class="text-left mb-4 space-y-2 font-light text-lg max-w-md">
              <div style="display: flex; align-items: flex-start;">
                <span style="margin-right: 8px;">•</span>
                <span>Grow your private client list easily</span>
              </div>
              <div style="display: flex; align-items: flex-start;">
                <span style="margin-right: 8px;">•</span>
                <span> Build trust with a <a href="/profile" class="text-blue-600 font-semibold hover:bg-blue-100 hover:text-blue-800 transition duration-300 rounded px-1 no-underline">professional profile</a>, that showcases who you are, while easily managing bookings through the app.</span>
              </div>
              <div style="display: flex; align-items: flex-start;">
                <span style="margin-right: 8px;">•</span>
                <span>Make it easy for customers to book you—no more back-and-forth texts—letting them see your location, availability & request rides instantly.</span>
              </div>
              <div style="display: flex; align-items: flex-start;">
                <span style="margin-right: 8px;">•</span>
                <span>Share your story to create deeper connections that turn clients into loyal private customers</span>
              </div>
              <div style="display: flex; align-items: flex-start;">
                <span style="margin-right: 8px;">•</span>
                <span>Go offline anytime — your regulars can book others without issues.</span>
              </div>
              <div style="display: flex; align-items: flex-start;">
                <span style="margin-right: 8px;">•</span>
                <span>Only $5/month, or $3/month if you refer others. ( Build your rider base before any fees apply. ) </span>
              </div>
            </ul>
            <a href="/Drivers" class="inline-block bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition font-semibold text-lg shadow-md">Tell me more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Phone Preview Section -->
  <section class="py-12 sm:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div id="features" class="flex flex-col sm:flex-row justify-center gap-8">
        <div class="w-full max-w-screen-xl mx-auto px-4">
          <div class="relative overflow-hidden">
            <div id="carousel" class="flex transition-transform duration-500 ease-in-out">
              <div class="flex-none w-1/3 px-2">
                <img src="./static/screenshots/nearby.png" alt="iPhone Screenshot 1" class="w-full h-auto object-cover rounded-lg">
              </div>
              <div class="flex-none w-1/3 px-2">
                <img src="./static/screenshots/near2.png" alt="iPhone Screenshot 1" class="w-full h-auto object-cover rounded-lg">
              </div>
            </div>
            <button id="prevBtn" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button id="nextBtn" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
 


  <!-- Contact Form Section -->
  <section id="contact" class="py-12 sm:py-20 bg-gradient-to-r from-blue-100 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-8 text-center">Stay in Touch with Birdy</h2>
      <p class="text-lg sm:text-xl text-gray-600 mb-8 text-center max-w-2xl mx-auto">Join the Birdy vibe—connect with us!</p>
      <div class="hidden md:block bg-white p-8 rounded-xl shadow-2xl">
        <form id="userInfoForm" class="flex flex-row gap-4">
          <div class="flex-1">
            <label for="name" class="block text-gray-600 font-semibold mb-2">Name <span class="text-red-500">*</span></label>
            <input type="text" id="name" required class="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 hover:border-purple-300" placeholder="Your Name">
          </div>
          <div class="flex-1">
            <label for="email" class="block text-gray-600 font-semibold mb-2">Email <span class="text-red-500">*</span></label>
            <input type="email" id="email" required class="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 hover:border-purple-300" placeholder="your@email.com">
          </div>
          <div class="flex-1">
            <label for="phone" class="block text-gray-600 font-semibold mb-2">Phone</label>
            <input type="tel" id="phone" class="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 hover:border-purple-300" placeholder="Your Phone Number" maxlength="12">
          </div>
          <div class="flex-1">
            <label for="comment" class="block text-gray-600 font-semibold mb-2">Comment (Optional)</label>
            <input type="text" id="comment" class="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 hover:border-purple-300" placeholder="Your Thoughts">
          </div>
          <div class="flex items-end">
            <button type="submit" class="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">Submit</button>
          </div>
        </form>
      </div>
      <div class="md:hidden text-center">
        <button id="toggle-form" class="bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">Join the Flock!</button>
        <form id="mobileUserInfoForm" class="hidden flex-col gap-4 mt-4">
          <div class="bg-white p-6 rounded-xl shadow-2xl">
            <div class="flex flex-col gap-4">
              <div>
                <label for="mobile-name" class="block text-gray-600 font-semibold mb-2">Name <span class="text-red-500">*</span></label>
                <input type="text" id="mobile-name" required class="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 hover:border-purple-300" placeholder="Your Name">
              </div>
              <div>
                <label for="mobile-email" class="block text-gray-600 font-semibold mb-2">Email <span class="text-red-500">*</span></label>
                <input type="email" id="mobile-email" required class="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 hover:border-purple-300" placeholder="your@email.com">
              </div>
              <div>
                <label for="mobile-phone" class="block text-gray-600 font-semibold mb-2">Phone</label>
                <input type="tel" id="mobile-phone" class="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 hover:border-purple-300" placeholder="Your Phone Number" maxlength="12">
              </div>
              <div>
                <label for="mobile-comment" class="block text-gray-600 font-semibold mb-2">Comment (Optional)</label>
                <input type="text" id="mobile-comment" class="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 hover:border-purple-300" placeholder="Your Thoughts">
              </div>
              <button type="submit" class="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <script>
      document.getElementById('phone').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 3 && value.length <= 6) {
          value = value.slice(0, 3) + '-' + value.slice(3);
        } else if (value.length > 6) {
          value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
        }
        e.target.value = value;
      });
      document.getElementById('mobile-phone').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 3 && value.length <= 6) {
          value = value.slice(0, 3) + '-' + value.slice(3);
        } else if (value.length > 6) {
          value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
        }
        e.target.value = value;
      });
      document.getElementById('toggle-form').addEventListener('click', function(e) {
        e.preventDefault();
        const form = document.getElementById('mobileUserInfoForm');
        form.classList.toggle('hidden');
        this.textContent = form.classList.contains('hidden') ? 'Join the Flock!' : 'Hide Form';
        this.classList.toggle('bg-blue-600');
        this.classList.toggle('bg-blue-800');
      });
      document.getElementById('userInfoForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('Desktop form submitted');
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const comment = document.getElementById('comment').value;
        try {
          const res = await fetch('https://xmkvtmgtwb.execute-api.us-east-1.amazonaws.com/dev/save-rider', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, comment }),
          });
          const data = await res.json();
          alert(data.message);
        } catch (error) {
          console.error('Error:', error);
          alert('Something went wrong. Please try again.');
        }
      });
      document.getElementById('mobileUserInfoForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('Mobile form submitted');
        const name = document.getElementById('mobile-name').value;
        const email = document.getElementById('mobile-email').value;
        const phone = document.getElementById('mobile-phone').value;
        const comment = document.getElementById('mobile-comment').value;
        try {
          const res = await fetch('https://xmkvtmgtwb.execute-api.us-east-1.amazonaws.com/dev/save-rider', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, comment }),
          });
          const data = await res.json();
          alert(data.message);
        } catch (error) {
          console.error('Error:', error);
          alert('Something went wrong. Please try again.');
        }
      });
    </script>
  </section>
  <!-- Footer -->
  <footer id="contact" class="bg-blue-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-2xl font-bold mb-4">Birdy</h3>
          <p class="font-light text-lg"> Your trusted birdy, just one tap away.</p>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2 font-light text-lg">
            <li><a href="#home" class="hover:text-blue-300">Home</a></li>
            <li><a href="#features" class="hover:text-blue-300">Features</a></li>
            <li><a href="#faq" class="hover:text-blue-300">FAQ</a></li>
            <li><a href="#contact" class="hover:text-blue-300">Contact</a></li>
            <li><a href="/privacy" class="hover:text-blue-300">Privacy</a></li>
            <li><a href="/Drivers" class="hover:text-blue-300">Drivers</a></li>
            <li><a href="/Riders" class="hover:text-blue-300">Riders</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-4">Contact Us</h3>
          <p class="font-light text-lg">Email: support@Birdy.com</p>
          <p class="font-light text-lg">Phone: (123) 456-7890</p>
          <p class="font-light text-lg"></p>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-4">Follow Us</h3>
          <div class="flex space-x-4 mb-4">
            <a href="https://www.tiktok.com/@birdyapp" target="_blank" class="text-white hover:text-blue-300 transition">
              <i class="fab fa-tiktok text-2xl"></i>
            </a>
            <a href="https://x.com/birdyapp" target="_blank" class="text-white hover:text-blue-300 transition">
              <i class="fab fa-x-twitter text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/birdyapp" target="_blank" class="text-white hover:text-blue-300 transition">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://www.facebook.com/birdyapp" target="_blank" class="text-white hover:text-blue-300 transition">
              <i class="fab fa-facebook-f text-2xl"></i>
            </a>
          </div>
          <button id="share-button" class="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center">
            <i class="fas fa-share-alt mr-2"></i> Share Birdy
          </button>
        </div>
      </div>
      <div class="mt-8 text-center">
        <p class="font-light text-lg"> This platform is intended for users who already know or have met each other through other means. By using this platform, you acknowledge that all users exchange digital business cards voluntarily. Any ride arrangements, communications, or payments happen independently and outside of our platform. We do not encourage or facilitate business between individuals who have not previously met or done business together.</p>
        <br>
        <p class="font-light text-lg">© 2025 Birdy. All rights reserved.</p>
      </div>
    </div>
  </footer>
  <!-- JavaScript for Mobile Menu Toggle -->
  <script>
    document.getElementById('menu-toggle').addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    });
  </script>
  <!-- JavaScript for Carousel -->
  <script>
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    const totalItems = carousel.children.length;
    const itemsToShow = 3;
    function updateCarousel() {
      const offset = -currentIndex * (100 / itemsToShow);
      carousel.style.transform = `translateX(${offset}%)`;
    }
    prevBtn.addEventListener('click', () => {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateCarousel();
    });
    nextBtn.addEventListener('click', () => {
      currentIndex = Math.min(currentIndex + 1, totalItems - itemsToShow);
      updateCarousel();
    });
  </script>
  <!-- JavaScript for Social Sharing -->
  <script>
    document.getElementById('share-button').addEventListener('click', async () => {
      const shareData = {
        title: 'Birdy - Your Trusted Ride',
        text: 'Join Birdy and connect directly with trusted drivers for safe, affordable rides!',
        url: 'https://birdyt.com' // Replace with your actual domain
      };
      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          // Fallback: Copy URL to clipboard
          navigator.clipboard.writeText(shareData.url).then(() => {
            alert('Link copied to clipboard! Share it with your friends.');
          }).catch(() => {
            alert('Failed to copy link. Please copy this URL: ' + shareData.url);
          });
        }
      } catch (err) {
        console.error('Share failed:', err);
        // Fallback for errors
        navigator.clipboard.writeText(shareData.url).then(() => {
          alert('Link copied to clipboard! Share it with your friends.');
        }).catch(() => {
          alert('Failed to copy link. Please copy this URL: ' + shareData.url);
        });
      }
    });
  </script>
  
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-241T25PVG8"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-241T25PVG8');
  </script>
</body>
</html>