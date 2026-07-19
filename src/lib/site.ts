// Image imports

import type { StaticImageData } from 'next/image';
import vanillaCakeImage from '@/assets/vanilla_cake.jpeg';
import butterscotchCakeImage from '@/assets/butterscotch_cake.jpeg';
import blackforestCakeImage from '@/assets/blackforest_cake.jpeg';
import chochochipsCakeImage from '@/assets/chocochips_cake.jpeg';
import chocolateCakeImage from '@/assets/chocolate_cake.jpeg';
import chocolateDoughnutImage from '@/assets/chocolate_doughnut.jpeg';
import chocomarbleCakeImage from '@/assets/chocomarble_cake.jpeg';
import redvelvetCakeImage from '@/assets/redvelvet_cake.jpeg';
import alooTikkiBurgerImage from '@/assets/alootikki.jpeg';
import blueberryCakeImage from '@/assets/blueberry_cake.jpeg';
import butterscotchPastryImage from '@/assets/butterscotch_pastry.jpeg';
import cheesePaneerSurpriseBurgerImage from '@/assets/cheese_paneer_surprise.jpeg';
import cheeseSurpriseBurgerImage from '@/assets/cheese_surprise.jpeg';
import chilliPaneerDryImage from '@/assets/chilli_paneer.jpeg';
import chilliPotatoImage from '@/assets/chilli_potato.jpeg';
import chocolatePastryImage from '@/assets/chocolate_pastry.jpeg';
import cornPowerPizzaImage from '@/assets/corn_power.jpeg';
import frenchFriesImage from '@/assets/french_fries.jpeg';
import honeyChilliPotatoImage from '@/assets/honey_chilli_potato.jpeg';
import italianClassicPizzaImage from '@/assets/italian_classic.jpeg';
import margrettaPizzaImage from '@/assets/margretta.jpeg';
import onionCrunchPizzaImage from '@/assets/onion_crunch.jpeg';
import paneerFunBurgerImage from '@/assets/paneer_fun.jpeg';
import paneerHakkaNoodlesImage from '@/assets/paneer_hakka.jpeg';
import paneerMasalaPizzaImage from '@/assets/paneer_masala.jpeg';
import paneerMomosImage from '@/assets/paneer_momos.jpeg';
import paneerNoodlesImage from '@/assets/paneer_noodles.jpeg';
import paneerPunchBurgerImage from '@/assets/paneer_punch.jpeg';
import paneerSchezwanImages from '@/assets/paneer_schezwan.jpeg';
import paneerSingaporeNoodlesImage from '@/assets/paneer_singapore_noodles.jpeg';
import periPeriFriesImage from '@/assets/peri_peri.jpeg';
import pineappleCakeImage from '@/assets/pineapple_cake.jpeg';
import pineapplePastryImage from '@/assets/pineapple_pastry.jpeg';
import redVelvetPastryImage from '@/assets/redvelvet_pastry.jpeg';
import springRollImage from '@/assets/spring_roll.jpeg';
import strawberryCakeImage from '@/assets/strawberry_cake.jpeg';
import trufflePastryImage from '@/assets/truffle_pastry.jpeg';
import truffleCakeImage from '@/assets/truffle_cake.jpeg';
import vegChilliGarlicNoodlesImage from '@/assets/veg_chilli_garlic.jpeg';
import vegDelightPizzaImage from '@/assets/veg_delight.jpeg';
import vegHakkaNoodlesImage from '@/assets/veg_hakka.jpeg';
import vegKickBurgerImage from '@/assets/veg_kick.jpeg';
import vegManchurianImage from '@/assets/veg_manchu.jpeg';
import vegMomosImage from '@/assets/veg_momos.jpeg';
import vegNoodlesImage from '@/assets/veg_noodles.jpeg';
import vegPowerPizzaImage from '@/assets/veg_power.jpeg';
import vegSchezwanNoodlesImage from '@/assets/veg_schezwan.jpeg';
import vegSingaporeNoodlesImage from '@/assets/veg_singapore_noodles.jpeg';

export type MenuVariant = {
  label: string;
  price: string;
};

export type MenuItem = {
  name: string;
  category: string;
  price: string;
  tags: string[];
  // Optional: add a local path such as '/images/vanilla-cake.jpg' or an approved remote URL.
  imageUrl?: string | StaticImageData;
  // Optional: each choice gets its own price, for example 1 Pound / 2 Pound.
  variants?: MenuVariant[];
};

export const site = {
  name: 'Bakers Hut',
  tagline: 'Neighborhood bakery in Jharoda Kalan for eggless cakes, breads, and savory bites.',
  description:
    'Bakers Hut is a bakery and cake shop in New Delhi at 342, New Vision Colony, C-Block, Naveen Palace, Jharoda Kalan, New Delhi, Delhi 110072.',
  phone: '+91 9818579132',
  whatsapp: '919818579132',
  address: '342, New Vision Colony, C-Block, Naveen Palace, Jharoda Kalan, New Delhi, Delhi, 110072',
  mapDirectionsUrl: 'https://maps.app.goo.gl/HBEE9hSZPrBUnK6K6',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.991211421745!2d76.9658242!3d28.6300255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0f13038898bd%3A0x6fac295ee5de299f!2sBakers%20Hut%20-%20Bakery%20and%20Cake%20Shop!5e0!3m2!1sen!2sin!4v1784183283139!5m2!1sen!2sin',
  zomatoLink: 'https://www.zomato.com/ncr/bakers-hut-najafgarh-new-delhi',
  instagram: 'https://www.instagram.com/bakershut72/',
  // Replace these URLs with files from /public whenever your bakery photos are ready.
  images: {
    storefront:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85',
    cake:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    pastry:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
    savory:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80',
  },
  hours: [
    { day: 'Mon - Sun', time: '10:00 AM - 10:00 PM' },
  ],
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit', href: '#visit' },
  ],
  heroHighlights: [
    {
      title: '100% eggless cakes',
      detail: 'Celebration cakes, photo cakes, and custom messages made for birthdays and events.',
    },
    {
      title: 'Fast Food',
      detail: 'Pizzas, burgers, sandwiches, and a lot more waiting to spice up your tastebuds.',
    },
    {
      title: 'Quick order support',
      detail: 'Call, WhatsApp, Zomato, or map directions - all stay one tap away.',
    },
  ],
  about: {
    intro:
      'Bakers Hut is built like a real neighborhood bakery: warm counter service, dependable baking, and a menu that balances celebration orders with everyday snacks.',
    story:
      'The shop serves families who need a birthday cake, office folks picking up snacks on the way home, and regulars who want fresh bread without a long wait.',
    focus:
      'The website is designed to feel like the storefront itself - practical, clear, and friendly - while still looking polished on mobile and desktop.',
    features: ['Eggless options', 'Custom cakes', 'Fresh bread', 'Savories and snacks'],
  },
  featuredProducts: [
    {
      name: 'Signature Celebration Cake',
      category: 'Cakes',
      price: 'From ₹999',
      description: 'Eggless celebration cakes with message cards, simple decoration, and same-day planning support.',
    },
    {
      name: 'Fresh Bread Basket',
      category: 'Bread',
      price: 'From ₹60',
      description: 'Daily bread selection for breakfast, tea-time, and family dinners.',
    },
    {
      name: 'Savory Snack Mix',
      category: 'Snacks',
      price: 'From ₹70',
      description: 'Puffs, sandwiches, pizzas, and burger-style savory bites for quick pickup.',
    },
  ],
  menuCategories: [
    'All',
    'Cakes',
    'Pastries',
    'Pizzas',
    'Burgers and Sandwiches',
    'Momos',
    'Noodles',
    'Rice',
    'Snacks',
    'Dessert'
  ],
  menuItems: [
    {
      name: 'Vanilla Cake',
      category: 'Cakes',
      imageUrl: vanillaCakeImage,
      price: '₹270',
      tags: ['Eggless'],
      variants: [
        { label: '1 Pound', price: '₹270' },
        { label: '2 Pound', price: '₹520' },
      ],
    },
    {
      name: 'Pineapple Cake',
      category: 'Cakes',
      price: '₹300',
      tags: ['Eggless'],
    },
    {
      name: 'Butter Scotch Cake',
      category: 'Cakes',
      price: '₹320',
      tags: ['Eggless'],
      imageUrl: butterscotchCakeImage,
    },
    {
      name: 'Strawberry Cake',
      category: 'Cakes',
      price: '₹320',
      tags: ['Eggless'],
    },
    {
      name: 'Blueberry Cake',
      category: 'Cakes',
      price: '₹320',
      tags: ['Eggless'],
    },
    {
      name: 'Black Forest Cake',
      category: 'Cakes',
      price: '₹330',
      tags: ['Eggless'],
      imageUrl: blackforestCakeImage,
    },
    {
      name: 'Chocolate Cake',
      category: 'Cakes',
      price: '₹350',
      tags: ['Eggless'],
      imageUrl: chocolateCakeImage,
    },
    {
      name: 'Chocochips Cake',
      category: 'Cakes',
      price: '₹380',
      tags: ['Eggless'],
      imageUrl: chochochipsCakeImage,
    },
    {
      name: 'Choco Marble Cake',
      category: 'Cakes',
      price: '₹420',
      tags: ['Special', 'Eggless'],
      imageUrl: chocomarbleCakeImage,
    },
    {
      name: 'Red Velvet Cake',
      category: 'Cakes',
      price: '₹420',
      tags: ['Special', 'Eggless'],
      imageUrl: redvelvetCakeImage,
    },
    {
      name: 'Truffle Cake',
      category: 'Cakes',
      price: '₹420',
      tags: ['Special', 'Eggless'],
    },
    {
      name: 'Pineapple Pastry',
      category: 'Pastries',
      price: '₹30',
      tags: ['Eggless'],
    },
    {
      name: 'Butterscotch Pastry',
      category: 'Pastries',
      price: '₹30',
      tags: ['Eggless'],
    },
    {
      name: 'Chocolate Pastry',
      category: 'Pastries',
      price: '₹40',
      tags: ['Eggless'],
    },
    {
      name: 'Red Velvet Pastry',
      category: 'Pastries',
      price: '₹50',
      tags: ['Eggless'],  
    },
    {
      name: 'Truffle Pastry',
      category: 'Pastries',
      price: '₹60',
      tags: ['Eggless'],  
    },
    {
      name: 'Margretta',
      category: 'Pizzas',
      price: '₹140',
      tags: [],
      variants: [
        { label: 'Small', price: '₹70' },
        { label: 'Medium', price: '₹140' },
      ],
    },
    {
      name: 'Onion Crunch',
      category: 'Pizzas',
      price: '₹160',
      tags: [],
      variants: [
        { label: 'Small', price: '₹80' },
        { label: 'Medium', price: '₹160' },
      ],
    },    
    {
      name: 'Corn Power',
      category: 'Pizzas',
      price: '₹160',
      tags: [],
      variants: [
        { label: 'Small', price: '₹80' },
        { label: 'Medium', price: '₹160' },
      ],
    },    
    {
      name: 'Veg. Power',
      category: 'Pizzas',
      price: '₹180',
      tags: [],
      variants: [
        { label: 'Small', price: '₹90' },
        { label: 'Medium', price: '₹180' },
      ],
    },    
    {
      name: 'Paneer Masala',
      category: 'Pizzas',
      price: '₹200',
      tags: [],
      variants: [
        { label: 'Small', price: '₹100' },
        { label: 'Medium', price: '₹200' },
      ],
    },
    {
      name: 'Veg. Delight',
      category: 'Pizzas',
      price: '₹210',
      tags: [],
      variants: [
        { label: 'Small', price: '₹110' },
        { label: 'Medium', price: '₹210' },
      ],
    },
    {
      name: 'Italian Classic',
      category: 'Pizzas',
      price: '₹220',
      tags: [],
      variants: [
        { label: 'Small', price: '₹110' },
        { label: 'Medium', price: '₹220' },
      ],
    },    
    {
      name: 'Classic Aloo Tikki',
      category: 'Burgers and Sandwiches',
      price: '₹40',
      tags: [],
    },
    {
      name: 'Cheese Surprise',
      category: 'Burgers and Sandwiches',
      price: '₹50',
      tags: [],
    },        
    {
      name: 'Paneer Fun',
      category: 'Burgers and Sandwiches',
      price: '₹60',
      tags: [],
    },    
    {
      name: 'Cheese Paneer Surprise',
      category: 'Burgers and Sandwiches',
      price: '₹70',
      tags: [],
    },    
    {
      name: 'Classic Veg.',
      category: 'Burgers and Sandwiches',
      price: '₹30',
      tags: [],
    },    
    {
      name: 'Paneer Punch',
      category: 'Burgers and Sandwiches',
      price: '₹60',
      tags: [],
    },    
    {
      name: 'Veg. Kick',
      category: 'Burgers and Sandwiches',
      price: '₹80',
      tags: [],
    },    
    {
      name: 'Veg Momos Steam',
      category: 'Momos',
      price: '₹80',
      tags: ['6 pieces (Half)', '12 pieces (Full)'],
      variants: [
        { label: 'Half', price: '₹50' },
        { label: 'Full', price: '₹80' },
      ],
    },    
    {
      name: 'Veg Butter Momos Steam',
      category: 'Momos',
      price: '₹90',
      tags: ['6 pieces (Half)', '12 pieces (Full)'],
      variants: [
        { label: 'Half', price: '₹60' },
        { label: 'Full', price: '₹90' },
      ],
    },        
    {
      name: 'Paneer Momos Steam',
      category: 'Momos',
      price: '₹90',
      tags: ['6 pieces (Half)', '12 pieces (Full)'],
      variants: [
        { label: 'Half', price: '₹60' },
        { label: 'Full', price: '₹90' },
      ],
    },        
    {
      name: 'Veg Momos Fried',
      category: 'Momos',
      price: '₹90',
      tags: ['6 pieces (Half)', '12 pieces (Full)'],
      variants: [
        { label: 'Half', price: '₹60' },
        { label: 'Full', price: '₹90' },
      ],
    },        
    {
      name: 'Paneer Momos Fried',
      category: 'Momos',
      price: '₹100',
      tags: ['6 pieces (Half)', '12 pieces (Full)'],
      variants: [
        { label: 'Half', price: '₹70' },
        { label: 'Full', price: '₹100' },
      ],
    },        
    {
      name: 'Veg Momos Kurkure',
      category: 'Momos',
      price: '₹120',
      tags: ['6 pieces (Half)', '12 pieces (Full)'],
      variants: [
        { label: 'Half', price: '₹70' },
        { label: 'Full', price: '₹120' },
      ],
    }, 
    {
      name: 'Paneer Momos Kurkure',
      category: 'Momos',
      price: '₹130',
      tags: ['6 pieces (Half)', '12 pieces (Full)'],
      variants: [
        { label: 'Half', price: '₹80' },
        { label: 'Full', price: '₹130' },
      ],
    },           
    {
      name: 'Veg Momos Gravy',
      category: 'Momos',
      price: '₹130',
      tags: ['6 pieces (Half)', '12 pieces (Full)'],
      variants: [
        { label: 'Half', price: '₹80' },
        { label: 'Full', price: '₹130' },
      ],
    },           
    {
      name: 'Paneer Momos Gravy',
      category: 'Momos',
      price: '₹150',
      tags: ['6 pieces (Half)', '12 pieces (Full)'],
      variants: [
        { label: 'Half', price: '₹90' },
        { label: 'Full', price: '₹150' },
      ],
    },         
    {
      name: 'Veg Noodles',
      category: 'Noodles',
      price: '₹90',
      tags: [],
      variants: [
        { label: 'Half', price: '₹60' },
        { label: 'Full', price: '₹90' },
      ],
    },        
    {
      name: 'Paneer Noodles',
      category: 'Noodles',
      price: '₹120',
      tags: [],
      variants: [
        { label: 'Half', price: '₹80' },
        { label: 'Full', price: '₹120' },
      ],
    },           
    {
      name: 'Singapuri Noodles Veg',
      category: 'Noodles',
      price: '₹110',
      tags: [],
      variants: [
        { label: 'Half', price: '₹70' },
        { label: 'Full', price: '₹110' },
      ],
    },           
    {
      name: 'Singapuri Noodles Paneer',
      category: 'Noodles',
      price: '₹120',
      tags: [],
      variants: [
        { label: 'Half', price: '₹80' },
        { label: 'Full', price: '₹120' },
      ],
    },           
    {
      name: 'Hakka Noodles Veg',
      category: 'Noodles',
      price: '₹120',
      tags: [],
      variants: [
        { label: 'Half', price: '₹80' },
        { label: 'Full', price: '₹120' },
      ],
    },            
    {
      name: 'Hakka Noodles Paneer',
      category: 'Noodles',
      price: '₹130',
      tags: [],
      variants: [
        { label: 'Half', price: '₹90' },
        { label: 'Full', price: '₹130' },
      ],
    },               
    {
      name: 'Schezwan Noodles Veg',
      category: 'Noodles',
      price: '₹120',
      tags: [],
      variants: [
        { label: 'Half', price: '₹80' },
        { label: 'Full', price: '₹120' },
      ],
    },           
    {
      name: 'Schezwan Noodles Paneer',
      category: 'Noodles',
      price: '₹130',
      tags: [],
      variants: [
        { label: 'Half', price: '₹90' },
        { label: 'Full', price: '₹130' },
      ],
    },            
    {
      name: 'Chilli Garlic Noodles Veg',
      category: 'Noodles',
      price: '₹120',
      tags: [],
      variants: [
        { label: 'Half', price: '₹90' },
        { label: 'Full', price: '₹120' },
      ],
    },            
    {
      name: 'Veg Fried Rice',
      category: 'Rice',
      price: '₹100',
      tags: [],
      variants: [
        { label: 'Half', price: '₹60' },
        { label: 'Full', price: '₹100' },
      ],
    },             
    {
      name: 'Paneer Fried Rice',
      category: 'Rice',
      price: '₹120',
      tags: [],
      variants: [
        { label: 'Half', price: '₹80' },
        { label: 'Full', price: '₹120' },
      ],
    },            
    {
      name: 'Singapuri Fried Rice Veg',
      category: 'Rice',
      price: '₹120',
      tags: [],
      variants: [
        { label: 'Half', price: '₹80' },
        { label: 'Full', price: '₹120' },
      ],
    },           
    {
      name: 'Singapuri Fried Rice Paneer',
      category: 'Rice',
      price: '₹130',
      tags: [],
      variants: [
        { label: 'Half', price: '₹90' },
        { label: 'Full', price: '₹130' },
      ],
    },            
    {
      name: 'Schezwan Fried Rice Veg',
      category: 'Rice',
      price: '₹130',
      tags: [],
      variants: [
        { label: 'Half', price: '₹90' },
        { label: 'Full', price: '₹130' },
      ],
    },           
    {
      name: 'Schezwan Fried Rice Paneer',
      category: 'Rice',
      price: '₹140',
      tags: [],
      variants: [
        { label: 'Half', price: '₹100' },
        { label: 'Full', price: '₹140' },
      ],
    },           
    {
      name: 'Chilli Garlic Fried Rice Veg',
      category: 'Rice',
      price: '₹130',
      tags: [],
      variants: [
        { label: 'Half', price: '₹90' },
        { label: 'Full', price: '₹130' },
      ],
    },           
    {
      name: 'Chilli Garlic Fried Rice Paneer',
      category: 'Rice',
      price: '₹140',
      tags: [],
      variants: [
        { label: 'Half', price: '₹100' },
        { label: 'Full', price: '₹140' },
      ],
    },            
    {
      name: 'French Fries',
      category: 'Snacks',
      price: '₹90',
      tags: [],
      variants: [
        { label: 'Half', price: '₹50' },
        { label: 'Full', price: '₹90' },
      ],
    },
    {
      name: 'Peri Peri Fries',
      category: 'Snacks',
      price: '₹100',
      tags: [],
      variants: [
        { label: 'Half', price: '₹70' },
        { label: 'Full', price: '₹100' },
      ],
    },            
    {
      name: 'Chilli Potato',
      category: 'Snacks',
      price: '₹110',
      tags: [],
      variants: [
        { label: 'Half', price: '₹70' },
        { label: 'Full', price: '₹110' },
      ],
    },           
    {
      name: 'Honey Chilli Potato',
      category: 'Snacks',
      price: '₹130',
      tags: [],
      variants: [
        { label: 'Half', price: '₹90' },
        { label: 'Full', price: '₹130' },
      ],
    },           
    {
      name: 'Veg Manchurian Dry',
      category: 'Snacks',
      price: '₹140',
      tags: [],
      variants: [
        { label: 'Half', price: '₹80' },
        { label: 'Full', price: '₹140' },
      ],
    },           
    {
      name: 'Paneer Manchurian Gravy',
      category: 'Snacks',
      price: '₹150',
      tags: [],
      variants: [
        { label: 'Half', price: '₹90' },
        { label: 'Full', price: '₹150' },
      ],
    },            
    {
      name: 'Chilli Paneer Dry',
      category: 'Snacks',
      price: '₹150',
      tags: [],
      variants: [
        { label: 'Half', price: '₹100' },
        { label: 'Full', price: '₹150' },
      ],
    },           
    {
      name: 'Chilli Paneer Gravy',
      category: 'Snacks',
      price: '₹160',
      tags: [],
      variants: [
        { label: 'Half', price: '₹110' },
        { label: 'Full', price: '₹160' },
      ],
    },           
    {
      name: 'Chilli Mushroom Dry',
      category: 'Snacks',
      price: '₹140',
      tags: [],
      variants: [
        { label: 'Half', price: '₹90' },
        { label: 'Full', price: '₹140' },
      ],
    },           
    {
      name: 'Chilli Mushroom Gravy',
      category: 'Snacks',
      price: '₹160',
      tags: [],
      variants: [
        { label: 'Half', price: '₹100' },
        { label: 'Full', price: '₹160' },
      ],
    },            
    {
      name: 'Veg Spring Roll',
      category: 'Snacks',
      price: '₹90',
      tags: [],
      variants: [
        { label: 'Half', price: '₹50' },
        { label: 'Full', price: '₹90' },
      ],
    },            
    {
      name: 'Paneer Spring Roll',
      category: 'Snacks',
      price: '₹100',
      tags: [],
      variants: [
        { label: 'Half', price: '₹80' },
        { label: 'Full', price: '₹100' },
      ],
    },          
    {
      name: 'Chocolate Doughnut',
      category: 'Dessert',
      price: '₹50',
      tags: ['1 Piece'],
      imageUrl: chocolateDoughnutImage,
    },                                                                                    
  ],
  gallery: [
    {
      title: 'Google Maps photo 1',
      category: 'Storefront',
      imageUrl:
        'https://lh3.googleusercontent.com/grass-cs/ACvplmNVYANbUe03iCqJCE9_QuIJShGGMkJuzSd13bXgmpF06fBzWXQRXxdB9TFDC4uxclge9w9gBcGXz_oylsTWqz8vxFd4Gk9XwaFxWNBIXYlmsr9o4Z29-eqfmL7_yq9oCv0zkZtJ=w289-h312-n-k-no',
    },
    {
      title: 'Google Maps photo 2',
      category: 'Bakery',
      imageUrl:
        'https://lh3.googleusercontent.com/grass-cs/ACvplmPDi1rcfJ4cUSeQ5E86cuB1VBY9ZTaHcQ-o8e6aH0o5XFAiAPEoHy72MxqOVT1oLRWzEFRUc6THO8rAHntM3F5glHP5wkxxG-3dn1tHkzbQeIGhH-4bYCvmHvu3RsPgmj6vmRWgsu7lg1Hr=w289-h156-n-k-no',
    },
    {
      title: 'Google Maps photo 3',
      category: 'Bakery',
      imageUrl:
        'https://lh3.googleusercontent.com/grass-cs/ACvplmOl_k2qCvQz40M_VdcveO9yUdD7_ng8vrwlZala07xflEuI41FY-WEsI3KqFHAbhMDV4lKNprZPRIO3ytKACp--frSYqKEFXv6fpSdfCO5WfwCTRLrMfGzLUpVTlt3xFtAO46AazEDDhFVx=w145-h156-n-k-no',
    },
    {
      title: 'Google Maps photo 4',
      category: 'Bakery',
      imageUrl:
        'https://lh3.googleusercontent.com/grass-cs/ACvplmMqrAxpzP_qSlli2y12RKMjL8ZexEk7PaMhLfjhjl7LvZPPO99gf4eV6v047Et79g7rkqafgir2IUrYK4Dq0B1-iTjiNHDOW1wye_N29Do1dkwBg9QCshWQc5rNQKxy-OatadkzVF0w6z_O=w145-h156-n-k-no',
    },
  ],
  reviews: [
    {
      name: 'Ravinder Kumar',
      quote: 'Good place service and food',
      rating: 5,
    },
    {
      name: 'Rahul Rajput',
      quote: 'We enjoyed their unlimited buffet with delicious food.',
      rating: 5,
    },
    {
      name: 'Vinod kumar singh',
      quote: 'Cakes, foods and every thing are delicious.',
      rating: 5,
    },
  ],
};

export type GalleryItem = (typeof site.gallery)[number];

export type ReviewItem = (typeof site.reviews)[number];
