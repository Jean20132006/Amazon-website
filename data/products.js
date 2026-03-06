 const products = [
{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",

  title: "Core Power Elite High Protein Shake, Chocolate, 42g Bottle, 14oz, 12 Pack",

  shortTitle: "Core Power Protein Shake",

  brand: "Fairlife",

  categories: [
    "drink",
    "protein shake",
    "nutrition",
    "Grocery & Gourmet Food",
    "beverages"
  ],

  images: {
    main: "images/drink-images/core-power.jpg",
    gallery: [
      "images/small-images/core.jpg",
      "images/small-images/core2.jpg",
      "images/small-images/core3.jpg",
      "https://m.media-amazon.com/images/I/51DuUJcDgJL._AA50_.jpg"
    ],
    reviews: [
      "images/review-carousel/core1.jpg",
      "images/review-carousel/core2.jpg",
      "images/review-carousel/core3.jpg",
      "images/review-carousel/core4.jpg",
      "images/review-carousel/core5.jpg",
      "images/review-carousel/core6.jpg",
      "images/review-carousel/core7.jpg",
      "images/review-carousel/core8.jpg",
      "images/review-carousel/core9.jpg",
      "images/review-carousel/core10.jpg"
    ]
  },

  videos : {
    advertisement: "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/eba56eed-1ecb-4741-b838-21f9b551eb02.mp4/productVideoOptimized.mp4",
    galleryVideos : [
      "images/productVideoOptimized.mp4",
      "images/video2.mp4",
      "images/video4.mp4"
    ],
    galleryVideosImages : [
      "images/video3_img.jpg",
      "images/video1_img.jpg",
      "images/video2_img.jpg"
    ]
  },

  manifacturer: {
    image1: "images/high-quality.jpg",
    image2: "images/first-carousel-images/core-power-protein-shake.jpg",
    image3: "images/power-elite.jpg",
    thirdRowImages: [
      "images/man-drink.jpg",
      "images/woman-sport-drink.jpg",
      "images/half-drink.jpg"
    ],
    fourthRowImage: "images/recovery-core.jpg"
  },

  price: {
    priceDollar: 50,
    priceCents: 64,
    currentPrice: 50.64,
    currency: "USD",
    discountPercent: 33
  },

  rating: {
    average: 4.6,
    totalReviews: 2387,
    breakdown: {
      fiveStar: 70,
      fourStar: 18,
      threeStar: 7,
      twoStar: 3,
      oneStar: 2
    }
  },

  productDetails : {
    productDimensions: "10.75 x 8.19 x 7.5 inches; 10.92 Pounds",
    modelNumber: "1",
    department: "Men",
    upc: "811620020640",
    manufacturer: "fairlife, LLC",
    asin: "B01DDIRDZA",
    units: "168 Fluid Ounces"
  },

  inventory: {
    totalStock: 420,
    warehouses: [
      { location: "MD Fulfillment Center", stock: 180 },
      { location: "TX Fulfillment Center", stock: 240 }
    ]
  },

  variants: [
    {
      flavor: "Chocolate",
      size: "14 oz Bottle",
      pack: "12 Pack",
      asin: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6-1"
    },
    {
      flavor: "Vanilla",
      size: "14 oz Bottle",
      pack: "12 Pack",
      asin: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6-2"
    },
    {
      flavor: "Strawberry Banana",
      size: "14 oz Bottle",
      pack: "12 Pack",
      asin: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6-3"
    }
  ],

  shipping: {
    primeEligible: true,
    freeShipping: true,
    estimatedDelivery: "2 days",
    weight: "1.2 lb"
  },

  seller: {
    sellerId: "SELL84729",
    name: "FastRun Official Store",
    rating: 4.8,
    totalSales: 152000
  },

  description:
    "Breathable running shoes designed for comfort and performance. Lightweight mesh upper with durable rubber outsole.",

  features: [
    "26g high quality complete protein",
    "Lactose free",
    "Made with ultra-filtered milk",
    "Contains calcium and vitamin D",
    "Ideal post workout recovery drink"
  ],

  reviews: [
    {
      user: "Michael",
      rating: 5,
      title: "Great running shoes",
      comment: "Very comfortable and lightweight.",
      date: "2026-01-12"
    },
    {
      user: "Sarah",
      rating: 4,
      title: "Nice shoes",
      comment: "Good value but runs slightly small.",
      date: "2026-02-03"
    }
  ]
}
];

 
const secondCarouselProducts = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/second-carousel-images/amazon-basic-cotton-swabs.jpg",
    name: "amazon-basic-cotton-swabs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/second-carousel-images/biodance.jpg",
    name: "biodance",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/second-carousel-images/meyers.jpg",
    name: "Meyer's Clean Day Liquid Dish Soap, 25 Fl Oz",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/second-carousel-images/amazon-basics-appolallergelic.jpg",
    name: "amazon-basics-appolallergelic",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/second-carousel-images/cerave-daily-lotion.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2067,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/second-carousel-images/clean-towels.jpg",
    name: "Clean towels",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/second-carousel-images/E.I.F.jpg",
    name: "E.I.F",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 2400,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/second-carousel-images/eos-cashmare-body.jpg",
    name: "Eos Cashmere Body Lotion - 6 Fl Oz",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/second-carousel-images/cerave-hydratinf-daily-facial.jpg",
    name: "CeraVe Hydrating Daily Facial Cleanser - 16 Fl Oz",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 2899,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/second-carousel-images/essence-lash-princesse.jpg",
    name: "Essence Lash Princesse False Lash Effect Mascara - 0.27 Fl Oz",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/second-carousel-images/jelly-eye-lashes.jpg",
    name: "Jelly Eye Lashes",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/second-carousel-images/kitsh-dermaplane.jpg",
    name: "Kitsh Dermaplane Facial Tool",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 1560,
    keywords: [
      "accessories",
      "shades"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/second-carousel-images/la-roche-posay.jpg",
    name: "La Roche-Posay Anthelios Melt-in Milk Sunscreen SPF 100 - 3 Fl Oz",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 2499,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/second-carousel-images/cerave-moisturizer-cream.jpg",
    name: "CeraVe Moisturizing Cream - 16 Fl Oz",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 4599,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/second-carousel-images/mebelin-slash.jpg",
    name: "Mebeli Slash",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 1699,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/second-carousel-images/medicube-collagen.jpg",
    name: "Medicube Collagen Ampoule - 1.01 Fl Oz",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3074,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/second-carousel-images/medicube-wrapping.jpg",
    name: "Medicube Wrapping Mask - 5 Pack",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 2374,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/second-carousel-images/medicube-zero-pore-pad.jpg",
    name: "Medicube Zero Pore Pad - 70 Pads",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 2200,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/second-carousel-images/method-body-wash.jpg",
    name: "Method Body Wash - 18 Fl Oz",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 1799,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/second-carousel-images/mighty-patch.jpg",
    name: "Mighty Patch Original - 36 Patches",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/second-carousel-images/native-deodorant.jpg",
    name: "Native Deodorant - Coconut & Vanilla - 2.65 Oz",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/second-carousel-images/neutrogena-makeup.jpg",
    name: "Neutrogena Makeup Remover Cleansing Towelettes - 25 Count",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/second-carousel-images/nizora-anti.jpg",
    name: "Nizora Anti-Aging Serum - 1 Fl Oz",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/second-carousel-images/ordinary-glycolic-acid.jpg",
    name: "The Ordinary Glycolic Acid 7% Toning Solution - 8.45 Fl Oz",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/second-carousel-images/ordinary-hyurolic-acid.jpg",
    name: "The Ordinary Hyaluronic Acid 2% + B5 - 1 Fl Oz",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/second-carousel-images/ordinary-medinamide.jpg",
    name: "The Ordinary 10% Niacinamide + 1% Zinc - 1 Fl Oz",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1250,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/second-carousel-images/shea-butter-body-lotion.jpg",
    name: "Shea Butter Body Lotion - 20 Fl Oz",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/second-carousel-images/vani-cream-daily-facial.jpg",
    name: "Vani Cream Daily Facial Moisturizer SPF 30 - 2 Fl Oz",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
    }
];

