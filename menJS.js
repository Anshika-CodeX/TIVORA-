const products = [
  {
        id: 101,
        name: 'Cotton Crewneck T-Shirt',
        brand: 'Rag & Bone',
        price: '₹8,500.00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEs6ww_eYknZYwqKFjCep8dSRX7uq2_SRfsw&s',
        category: 'tshirts',
        inDemand: true,
        stock: 120,
        bestSeller: true,
        description: 'Premium cotton crewneck t-shirt with a relaxed fit. This essential tee features a clean design with minimal branding for versatile everyday wear.',
        details: {
            materials: '100% Cotton',
            fit: 'True to size. Model is 6\'1" and wears size M.',
            care: 'Machine wash cold with like colors. Tumble dry low. Do not bleach.'
        },
        options: {
            size: ['S', 'M', 'L', 'XL'],
            color: ['Black', 'White', 'Navy']
        }
    },
    {
      id: 102,
      name: 'Slim Fit Jeans',
      brand: 'FRAME',
      price: '₹15,750.00',
      image: 'https://d118ps6mg0w7om.cloudfront.net/media/catalog/product/s/s/fit-in/1000x1333/ss-24_4000x5000-04-10-24_mft-29540-s-170-mid-blue_1_mft-29540-s-170-mid-blue.jpg',
      category: 'jeans',
      inDemand: true,
      stock: 85,
      bestSeller: false,
      description: 'Premium slim fit jeans crafted from high-quality stretch denim. These versatile jeans feature a modern silhouette with a comfortable mid-rise waist and tapered leg for a sleek, contemporary look that pairs well with any outfit.',
      details: {
          materials: '94% Cotton, 5% Polyester, 1% Elastane',
          fit: 'Slim fit. Model is 6\'2" and wears size 32.',
          care: 'Machine wash cold inside out with similar colors. Tumble dry low.'
      },
      options: {
          size: ['28', '30', '32', '34', '36'],
          color: ['Mid Blue', 'Dark Indigo', 'Black']
      }
  },
  {
      id: 103,
      name: 'Leather Sneakers',
      brand: 'Common Projects',
      price: '₹32,000.00',
      image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/29768136/2024/5/27/737818f9-2e64-404f-b18b-3795362bf6a21716789812680IDMenColourblockedLeatherSneakers1.jpg',
      category: 'sneakers',
      inDemand: true,
      stock: 65,
      bestSeller: true,
      description: 'Iconic minimalist leather sneakers handcrafted in Italy. These luxurious sneakers feature a clean, understated design with signature gold serial numbers stamped at the heel, premium leather lining, and durable rubber soles for everyday comfort and timeless style.',
      details: {
          materials: 'Italian Nappa leather upper, leather lining, rubber sole',
          fit: 'True to size. Order your regular shoe size.',
          care: 'Wipe clean with a soft cloth. Use leather conditioner occasionally to maintain suppleness.'
      },
      options: {
          size: ['40', '41', '42', '43', '44', '45'],
          color: ['White', 'Black', 'Blush']
      }
  },
  {
      id: 104,
      name: 'Cashmere Sweater',
      brand: 'Vince',
      price: '₹28,500.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3r5z_OgtxGEI3YO8PE-vCmeUlLjUtScA0pA&s',
      category: 'sweaters',
      inDemand: false,
      stock: 100,
      bestSeller: false,
      description: 'Luxurious pure cashmere sweater with a relaxed silhouette. This premium knitwear piece features a crew neckline, ribbed trim details, and an ultra-soft hand feel that drapes beautifully for effortless sophistication and exceptional warmth.',
      details: {
          materials: '100% Cashmere',
          fit: 'Relaxed fit. Model is 6\'0" and wears size M.',
          care: 'Dry clean only or hand wash cold with mild detergent. Lay flat to dry.'
      },
      options: {
          size: ['S', 'M', 'L', 'XL'],
          color: ['Heather Grey', 'Navy', 'Camel']
      }
  },
  {
      id: 105,
      name: 'Bomber Jacket',
      brand: 'Alpha Industries',
      price: '₹18,900.00',
      image: 'https://www.converse.in/media/catalog/product/1/0/10026976-a02_3.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover',
      category: 'jackets',
      inDemand: true,
      stock: 110,
      bestSeller: true,
      description: 'Iconic MA-1 bomber jacket with authentic military heritage. This classic flight jacket features a reversible design, ribbed collar, cuffs and hem, multiple utility pockets, and the signature arm zip pocket with "Remove Before Flight" tag for authentic aviator style.',
      details: {
          materials: 'Shell: 100% Nylon, Lining: 100% Nylon, Fill: 100% Polyester',
          fit: 'Regular fit. Model is 6\'1" and wears size M.',
          care: 'Machine wash cold. Do not bleach. Tumble dry low.'
      },
      options: {
          size: ['S', 'M', 'L', 'XL', 'XXL'],
          color: ['Sage Green', 'Black', 'Navy']
      }
  },
  {
      id: 106,
      name: 'Chino Pants',
      brand: 'Theory',
      price: '₹12,500.00',
      image: 'https://m.media-amazon.com/images/I/519SGd0981L._AC_UY1100_.jpg',
      category: 'pants',
      inDemand: false,
      stock: 29,
      bestSeller: false,
      description: 'Refined chino pants crafted from premium stretch cotton twill. These versatile trousers feature a clean, tailored silhouette with a comfortable mid-rise waist, slash front pockets, buttoned back welt pockets, and a modern slim fit through the leg.',
      details: {
          materials: '98% Cotton, 2% Elastane',
          fit: 'Slim fit. Model is 6\'1" and wears size 32.',
          care: 'Machine wash cold. Tumble dry low. Warm iron if needed.'
      },
      options: {
          size: ['28', '30', '32', '34', '36', '38'],
          color: ['Khaki', 'Navy', 'Black', 'Olive']
      }
  },
  {
      id: 107,
      name: 'Oxford Shirt',
      brand: 'Gitman Vintage',
      price: '₹11,200.00',
      image: 'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/724855s.jpg?im=Resize,width=750',
      category: 'shirts',
      inDemand: false,
      stock: 56,
      bestSeller: true,
      description: 'Classic Oxford cloth button-down shirt made in the USA with traditional craftsmanship. This timeless piece features a comfortable regular fit, single-needle stitching, chalk buttons, box pleat, and locker loop for authentic heritage style that improves with age.',
      details: {
          materials: '100% Cotton Oxford cloth',
          fit: 'Regular fit. Model is 6\'0" and wears size M.',
          care: 'Machine wash cold. Hang dry or tumble dry low. Iron on medium heat if needed.'
      },
      options: {
          size: ['S', 'M', 'L', 'XL'],
          color: ['White', 'Blue', 'University Stripe']
      }
  },
  {
      id: 108,
      name: 'Swim Shorts',
      brand: 'Orlebar Brown',
      price: '₹14,300.00',
      image: 'https://www.thebeachcompany.in/cdn/shop/files/tuc141943483-Navy_R_Z001A_1024x.webp?v=1684492650',
      category: 'shorts',
      inDemand: true,
      stock: 75,
      bestSeller: false,
      description: 'Premium tailored swim shorts inspired by traditional menswear. These sophisticated swim trunks feature a tailored fit with side adjusters, quick-drying fabric, mesh lining, and a snap closure with zip fly for a refined beach-to-bar versatility.',
      details: {
          materials: '100% Quick-dry polyamide fabric with 100% polyester mesh lining',
          fit: 'Tailored fit with 5" inseam. Model is 6\'1" and wears size 32.',
          care: 'Machine wash cold. Do not tumble dry. Do not iron.'
      },
      options: {
          size: ['28', '30', '32', '34', '36'],
          color: ['Navy', 'Sky Blue', 'Red', 'Black']
      }
  },
  {
      id: 109,
      name: 'Leather Belt',
      brand: 'Salvatore Ferragamo',
      price: '₹21,800.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziyOffZuEspLgn3I3g8AP15FLfV73w-r5Og&s',
      category: 'belts',
      inDemand: false,
      stock: 98,
      bestSeller: false,
      description: 'Luxurious Italian leather belt with the iconic Gancini buckle. This sophisticated accessory features premium calfskin leather construction, hand-finished edges, and the signature double Gancini hardware in polished palladium for timeless elegance.',
      details: {
          materials: 'Calfskin leather with palladium-plated hardware',
          fit: 'Width: 3.5cm. Available in sizes 85-120cm.',
          care: 'Wipe clean with a soft, dry cloth. Store in dust bag when not in use.'
      },
      options: {
          size: ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm'],
          color: ['Black', 'Brown']
      }
  },
  {
      id: 110,
      name: 'Aviator Sunglasses',
      brand: 'Ray-Ban',
      price: '₹9,800.00',
      image: 'https://optorium.in/cdn/shop/files/police_SPLE04K_0300_Sunglass_01_91be5ee2-fb83-4310-92b5-9b54643c01fc.jpg?v=1740750443&width=2048',
      category: 'sunglasses',
      inDemand: true,
      stock: 95,
      bestSeller: true,
      description: 'Iconic aviator sunglasses with a timeless teardrop shape. These classic shades feature a lightweight metal frame, adjustable nose pads, crystal lenses with UV protection, and signature bayonet temples for a secure, comfortable fit and enduring style.',
      details: {
          materials: 'Metal frame with crystal lenses',
          fit: 'Standard fit. Lens width: 58mm, Bridge: 14mm, Temple length: 135mm.',
          care: 'Clean with lens cloth and lens cleaner. Store in protective case when not in use.'
      },
      options: {
          size: ['58mm', '62mm'],
          color: ['Gold/Green', 'Gold/Brown', 'Silver/Blue', 'Black/Grey']
      }
  },
  {
      id: 111,
      name: 'Leather Wallet',
      brand: 'Maison Margiela',
      price: '₹16,500.00',
      image: 'https://m.media-amazon.com/images/I/81WIcyHQ7oL._AC_UY1100_.jpg',
      category: 'accessories',
      inDemand: false,
      stock: 60,
      bestSeller: false,
      description: 'Minimalist bifold wallet crafted from premium Italian leather. This sophisticated accessory features the brand\'s signature stitch detail, multiple card slots, bill compartments, and a sleek silhouette that fits comfortably in pocket while maintaining a refined aesthetic.',
      details: {
          materials: '100% Calfskin leather with cotton lining',
          fit: 'Dimensions: 11cm x 9cm when folded',
          care: 'Wipe clean with a soft, dry cloth. Avoid exposure to moisture and direct sunlight.'
      },
      options: {
          color: ['Black', 'Tan']
      }
  },
  {
      id: 112,
      name: 'Chelsea Boots',
      brand: 'Saint Laurent',
      price: '₹65,000.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aOm8O33mMbuFnyDggPgr0oW7gfpN8uNKAQ&s',
      category: 'boots',
      inDemand: true,
      stock: 45,
      bestSeller: true,
      description: 'Luxurious Chelsea boots crafted in Italy from premium suede. These sophisticated boots feature elastic side panels, a sleek almond toe, leather lining, stacked heel, and pull tab for easy on/off wear, offering timeless elegance with modern edge.',
      details: {
          materials: 'Suede upper, leather lining, leather sole with rubber insert',
          fit: 'True to size. Heel height: 4cm. Shaft height: 15cm.',
          care: 'Use suede brush and protector spray. Keep away from moisture. Use shoe trees when not worn.'
      },
      options: {
          size: ['40', '41', '42', '43', '44', '45'],
          color: ['Black', 'Tobacco', 'Sand']
      }
  },
{
  id: 113,
  name: 'Organic Cotton Basic Tee',
  brand: 'Everlane',
  price: '₹4,200.00',
  image: 'https://bhumi.com.au/cdn/shop/files/ProductPageImage2_NEW_2.jpg?v=1722999663',
  category: 'tshirts',
  inDemand: false,
  stock: 88,
  bestSeller: false,
  description: 'Sustainable everyday t-shirt made from 100% organic cotton. This essential tee features a classic crew neckline, short sleeves, and a regular fit with just the right amount of room through the body for comfort without excess fabric.',
  details: {
      materials: '100% Organic Cotton',
      fit: 'Regular fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold with like colors. Tumble dry low.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      color: ['White', 'Black', 'Navy', 'Heather Grey']
  }
},
{
  id: 114,
  name: 'Graphic Print T-Shirt',
  brand: 'Off-White',
  price: '₹22,500.00',
  image: 'https://assets.ajio.com/medias/sys_master/root/20230706/XPdB/64a6f249eebac147fc5a69b6/-1117Wx1400H-465975073-black-MODEL.jpg',
  category: 'tshirts',
  inDemand: true,
  stock: 112,
  bestSeller: true,
  description: 'Statement graphic t-shirt featuring the brand\'s signature diagonal stripe motif. This luxury streetwear piece is crafted from premium cotton with an oversized fit, dropped shoulders, and bold screen-printed design for an authentic contemporary aesthetic.',
  details: {
      materials: '100% Cotton',
      fit: 'Oversized fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold inside out. Do not tumble dry. Do not iron directly on print.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['Black', 'White']
  }
},
{
  id: 115,
  name: 'Striped Cotton Tee',
  brand: 'A.P.C.',
  price: '₹7,800.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDHMYWQcbtWfdlbRc-st1kRrOQdlUspe2pQ&s',
  category: 'tshirts',
  inDemand: false,
  stock: 90,
  bestSeller: false,
  description: 'Classic Breton-inspired striped t-shirt made from premium cotton jersey. This timeless piece features a clean crew neckline, short sleeves, and the perfect slim fit with horizontal stripes for effortless Parisian style.',
  details: {
      materials: '100% Cotton',
      fit: 'Slim fit. Model is 5\'11" and wears size M.',
      care: 'Machine wash cold. Lay flat to dry.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Navy/White', 'Black/White']
  }
},
{
  id: 116,
  name: 'Pocket Detail T-Shirt',
  brand: 'Carhartt WIP',
  price: '₹5,500.00',
  image: 'https://images.bestsellerclothing.in/data/JJ/15-july-2024/900771501_g0%20.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto',
  category: 'tshirts',
  inDemand: true,
  stock: 65,
  bestSeller: false,
  description: 'Durable workwear-inspired t-shirt with signature chest pocket detail. This everyday essential features heavyweight cotton construction, a classic crew neckline, reinforced seams, and the brand\'s discreet square label for authentic utilitarian style.',
  details: {
      materials: '100% Heavyweight Cotton',
      fit: 'Regular fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold. Tumble dry medium.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['White', 'Black', 'Hamilton Brown', 'Cypress']
  }
},
{
  id: 117,
  name: 'Oversized Logo T-Shirt',
  brand: 'Balenciaga',
  price: '₹32,000.00',
  image: 'https://bananaclub.co.in/cdn/shop/files/MinimalistPrintBrownTshirt_6.jpg?v=1738820026',
  category: 'tshirts',
  inDemand: true,
  stock: 78,
  bestSeller: true,
  description: 'Luxury statement t-shirt with bold logo print. This high-fashion piece features an intentionally oversized silhouette, dropped shoulders, heavyweight cotton construction, and the brand\'s iconic logo emblazoned across the chest for unmistakable designer appeal.',
  details: {
      materials: '100% Cotton',
      fit: 'Oversized fit. Model is 6\'1" and wears size M.',
      care: 'Hand wash cold or dry clean. Do not tumble dry.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['Black', 'White', 'Grey']
  }
},
{
  id: 118,
  name: 'Vintage Wash Tee',
  brand: 'AllSaints',
  price: '₹6,900.00',
  image: 'https://m.media-amazon.com/images/I/71InQyE-w8L._AC_UY1100_.jpg',
  category: 'tshirts',
  inDemand: false,
  stock: 90,
  bestSeller: false,
  description: 'Perfectly worn-in t-shirt with vintage-inspired wash treatment. This effortlessly cool tee features a scoop neckline, slim fit through the body, raw-edge details, and a specialized garment dyeing process that creates a unique, lived-in appearance.',
  details: {
      materials: '100% Cotton',
      fit: 'Slim fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold inside out. Tumble dry low.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['Vintage Black', 'Washed Grey', 'Chalk White']
  }
},
{
  id: 119,
  name: 'Embroidered Logo T-Shirt',
  brand: 'Maison Kitsune',
  price: '₹9,200.00',
  image: 'https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW35457_YBR_main?$b2c_updp_m_mainImage_1920$',
  category: 'tshirts',
  inDemand: true,
  stock: 55,
  bestSeller: false,
  description: 'Refined t-shirt featuring the brand\'s signature fox embroidery. This Parisian-designed piece is crafted from premium cotton with a classic crew neckline, straight hem, and meticulous embroidery detail for a subtle yet distinctive touch of sophistication.',
  details: {
      materials: '100% Cotton',
      fit: 'Regular fit. Model is 5\'11" and wears size M.',
      care: 'Machine wash cold. Do not tumble dry. Do not iron directly on embroidery.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['White', 'Navy', 'Grey Melange']
  }
},
{
  id: 120,
  name: 'Heavyweight Cotton Tee',
  brand: 'Acne Studios',
  price: '₹11,500.00',
  image: 'https://www.bonkerscorner.com/cdn/shop/files/khaki-heavyweight-oversized-t-shirt-xs-bonkerscorner-store-33688532189284.jpg?v=1728982636',
  category: 'tshirts',
  inDemand: false,
  stock: 60,
  bestSeller: false,
  description: 'Premium heavyweight t-shirt with Scandinavian minimalist design. This luxury basic features dense cotton construction, a ribbed crew neckline, straight hem, and the brand\'s signature face patch discreetly placed at the hem for understated contemporary style.',
  details: {
      materials: '100% Heavyweight Cotton',
      fit: 'Relaxed fit. Model is 6\'2" and wears size M.',
      care: 'Machine wash cold. Hang to dry.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['Optic White', 'Black', 'Pale Pink']
  }
},
{
  id: 121,
  name: 'Slim Fit Crew Neck T-Shirt',
  brand: 'Theory',
  price: '₹7,200.00',
  image: 'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/180221s.jpg?im=Resize,width=750',
  category: 'tshirts',
  inDemand: true,
  stock: 42,
  bestSeller: false,
  description: 'Refined essential t-shirt crafted from premium pima cotton. This elevated basic features a clean crew neckline, short sleeves, and a tailored slim fit that flatters the body while maintaining comfort for versatile everyday wear.',
  details: {
      materials: '100% Pima Cotton',
      fit: 'Slim fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold. Tumble dry low.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['White', 'Black', 'Navy', 'Heather Grey']
  }
},
{
  id: 122,
  name: 'Distressed Graphic Tee',
  brand: 'Amiri',
  price: '₹28,500.00',
  image: 'https://images-cdn.ubuy.co.in/6692018b15a63e122b3ba3c0-graphic-t-shirts-for-men-vintage.jpg',
  category: 'tshirts',
  inDemand: true,
  stock: 68,
  bestSeller: true,
  description: 'Luxury rock-inspired t-shirt with artisanal distressing details. This high-end piece features intentional rips, tears, and paint splatters, along with vintage-inspired graphic prints, for an authentic worn-in aesthetic that embodies the brand\'s rebellious California spirit.',
  details: {
      materials: '100% Cotton',
      fit: 'Relaxed fit. Model is 6\'1" and wears size M.',
      care: 'Hand wash cold. Do not tumble dry. Each piece is unique; distressing will vary.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['Vintage Black', 'Washed Grey']
  }
},

// Shirts (IDs 123-132)
{
  id: 123,
  name: 'Linen Button-Down Shirt',
  brand: 'Orlebar Brown',
  price: '₹16,800.00',
  image: 'https://ramrajcotton.in/cdn/shop/files/240524_ramraj0376.jpg?v=1743659622',
  category: 'shirts',
  inDemand: true,
  stock: 72,
  bestSeller: false,
  description: 'Refined linen shirt perfect for warm-weather occasions. This lightweight button-down features a tailored fit, mother-of-pearl buttons, a spread collar, and single-button cuffs for a sophisticated yet relaxed look that transitions seamlessly from beach to dinner.',
  details: {
      materials: '100% Linen',
      fit: 'Tailored fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold or dry clean. Iron on medium heat while slightly damp.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['White', 'Sky Blue', 'Navy']
  }
},
{
  id: 124,
  name: 'Checked Flannel Shirt',
  brand: 'Filson',
  price: '₹12,500.00',
  image: 'https://cdna.lystit.com/photos/ralphlauren/633b9d8e/ralph-lauren-GreenBlack-Classic-Fit-Plaid-Flannel-Workshirt.jpeg',
  category: 'shirts',
  inDemand: false,
  stock: 0,
  bestSeller: false,
  description: 'Rugged brushed cotton flannel shirt with heritage-inspired check pattern. This durable workwear piece features a button-down collar, chest pockets with button flaps, adjustable cuffs, and a relaxed fit for comfort during outdoor activities and everyday wear.',
  details: {
      materials: '100% Cotton Flannel',
      fit: 'Regular fit. Model is 6\'2" and wears size L.',
      care: 'Machine wash warm. Tumble dry medium.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Red/Black Check', 'Green/Black Check', 'Blue/Black Check']
  }
},
{
  id: 125,
  name: 'Denim Western Shirt',
  brand: 'Levi\'s',
  price: '₹9,800.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqs0WAs9RDStysZS_j4bL5lP2fSornoj53VA&s',
  category: 'shirts',
  inDemand: true,
  stock: 58,
  bestSeller: false,
  description: 'Classic Western-inspired denim shirt with authentic details. This iconic piece features pearl snap buttons, pointed yoke, flap chest pockets, and a slightly washed denim fabric that offers both comfort and timeless Americana style.',
  details: {
      materials: '100% Cotton Denim',
      fit: 'Regular fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold. Tumble dry low.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Medium Wash', 'Dark Wash']
  }
},
{
  id: 126,
  name: 'Striped Oxford Shirt',
  brand: 'Brooks Brothers',
  price: '₹11,200.00',
  image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-214692_alternate10?$rl_4x5_pdp$',
  category: 'shirts',
  inDemand: true,
  stock: 45,
  bestSeller: true,
  description: 'Timeless striped oxford cloth button-down shirt with heritage craftsmanship. This preppy essential features a classic button-down collar, box pleat, locker loop, and the perfect roll at the collar for an authentic American look that works for both business and casual occasions.',
  details: {
      materials: '100% Supima Cotton Oxford',
      fit: 'Regular fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold. Tumble dry low. Iron if needed.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Blue/White Stripe', 'Pink/White Stripe', 'Yellow/White Stripe']
  }
},
{
  id: 127,
  name: 'Cuban Collar Shirt',
  brand: 'Reiss',
  price: '₹13,500.00',
  image: 'https://thehouseofrare.com/cdn/shop/files/SALFORDOFFWHITE00390HERO_9b24b352-2b3c-4d89-9fc1-5f3870d11148.jpg?v=1743585235',
  category: 'shirts',
  inDemand: true,
  stock: 92,
  bestSeller: true,
  description: 'Sophisticated resort-inspired shirt with an open Cuban collar. This refined warm-weather piece features a relaxed camp collar, straight hem, short sleeves, and lightweight fabric for a polished yet laid-back look perfect for summer evenings.',
  details: {
      materials: '55% Linen, 45% Cotton',
      fit: 'Regular fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold or dry clean. Iron on medium heat.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Off-White', 'Navy', 'Sage Green']
  }
},
{
  id: 128,
  name: 'Chambray Work Shirt',
  brand: 'RRL',
  price: '₹18,900.00',
  image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1341016_lifestyle?$rl_4x5_pdp$',
  category: 'shirts',
  inDemand: false,
  stock: 60,
  bestSeller: false,
  description: 'Vintage-inspired chambray work shirt with authentic heritage details. This rugged piece features selvedge chambray fabric, triple-needle stitching, cat-eye buttons, reinforced elbow patches, and a perfectly worn-in wash for timeless workwear style.',
  details: {
      materials: '100% Cotton Selvedge Chambray',
      fit: 'Regular fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold. Hang dry or tumble dry low.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Indigo', 'Washed Blue']
  }
},
{
  id: 129,
  name: 'Printed Resort Shirt',
  brand: 'Saturdays NYC',
  price: '₹14,200.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitZzxGtA6XxryC-NG2yjmZNkgLfYX08edkA&s',
  category: 'shirts',
  inDemand: true,
  stock: 63,
  bestSeller: false,
  description: 'Contemporary vacation-ready shirt with unique print design. This laid-back piece features a camp collar, relaxed fit, straight hem, and custom-designed pattern printed on lightweight fabric for effortless summer style with urban sensibility.',
  details: {
      materials: '100% Viscose',
      fit: 'Relaxed fit. Model is 6\'0" and wears size M.',
      care: 'Hand wash cold or dry clean. Do not tumble dry.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Palm Print', 'Abstract Print', 'Floral Print']
  }
},
{
  id: 130,
  name: 'Slim Fit Dress Shirt',
  brand: 'Hugo Boss',
  price: '₹15,800.00',
  image: 'https://assets.ajio.com/medias/sys_master/root/20231208/YPQm/65732893ddf7791519bc21fa/-473Wx593H-410385572-100-MODEL.jpg',
  category: 'shirts',
  inDemand: false,
  stock: 70,
  bestSeller: false,
  description: 'Refined business shirt with European tailoring. This sophisticated dress shirt features a spread collar, French cuffs, mother-of-pearl buttons, and a slim fit through the body for a sharp, contemporary silhouette perfect for professional settings.',
  details: {
      materials: '100% Egyptian Cotton',
      fit: 'Slim fit. Model is 6\'1" and wears size 15.5".',
      care: 'Machine wash cold or dry clean. Iron while damp for best results.'
  },
  options: {
      size: ['15", 15.5", 16", 16.5", 17"'],
      color: ['White', 'Light Blue', 'Pink']
  }
},
{
  id: 131,
  name: 'Corduroy Overshirt',
  brand: 'Portuguese Flannel',
  price: '₹12,900.00',
  image: 'https://www.andamen.com/cdn/shop/products/01_4edbb66e-b5bd-497f-976e-5ddf5bf20c50.jpg?v=1743151017',
  category: 'shirts',
  inDemand: true,
  stock: 38,
  bestSeller: false,
  description: 'Versatile corduroy overshirt that works as both a shirt and light jacket. This transitional piece features a soft wale corduroy fabric, button front, chest pockets, and a relaxed fit for easy layering and European-inspired casual style.',
  details: {
      materials: '100% Cotton Corduroy',
      fit: 'Regular fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold. Tumble dry low.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Rust', 'Olive', 'Navy']
  }
},
{
  id: 132,
  name: 'Silk Blend Shirt',
  brand: 'Brioni',
  price: '₹42,500.00',
  image: 'https://assets0.mirraw.com/images/9662035/image_zoom.jpeg?1634646169',
  category: 'shirts',
  inDemand: true,
  stock: 25,
  bestSeller: true,
  description: 'Luxurious Italian-made shirt crafted from silk and cotton blend. This exceptional piece features hand-finished details, mother-of-pearl buttons, a spread collar, and impeccable tailoring for unparalleled elegance and comfort for formal occasions.',
  details: {
      materials: '70% Cotton, 30% Silk',
      fit: 'Regular fit. Model is 6\'1" and wears size 40.',
      care: 'Dry clean only.'
  },
  options: {
      size: ['38', '39', '40', '41', '42', '43'],
      color: ['White', 'Ivory', 'Light Blue']
  }
},

// Tanks (IDs 133-142)
{
  id: 133,
  name: 'Premium Cotton Tank',
  brand: 'James Perse',
  price: '₹6,800.00',
  image: 'https://m.media-amazon.com/images/I/512fteLlqYL._AC_UY1100_.jpg',
  category: 'tanks',
  inDemand: true,
  stock: 48,
  bestSeller: false,
  description: 'Luxury everyday tank top crafted from supima cotton jersey. This refined essential features a clean scoop neckline, bound edges, and a slim fit through the body for a polished yet casual look with exceptional comfort and durability.',
  details: {
      materials: '100% Supima Cotton',
      fit: 'Slim fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold. Tumble dry low.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['White', 'Black', 'Navy', 'Grey']
  }
},
{
  id: 134,
  name: 'Ribbed Tank Top',
  brand: 'Calvin Klein',
  price: '₹4,500.00',
  image: 'https://m.media-amazon.com/images/I/71us8G-JzHS._AC_UY1100_.jpg',
  category: 'tanks',
  inDemand: true,
  stock: 82,
  bestSeller: true,
  description: 'Classic ribbed tank top with iconic branding. This versatile piece features a ribbed texture for enhanced fit, a square-cut neckline, the brand\'s signature waistband, and a body-hugging silhouette perfect for layering or wearing alone.',
  details: {
      materials: '95% Cotton, 5% Elastane',
      fit: 'Slim fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold. Tumble dry low.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['White', 'Black', 'Grey Heather']
  }
},
{
  id: 135,
  name: 'Performance Mesh Tank',
  brand: 'Lululemon',
  price: '₹5,200.00',
  image: 'https://m.media-amazon.com/images/I/71BBA7rfsyL._AC_UY1100_.jpg',
  category: 'tanks',
  inDemand: false,
  stock: 80,
  bestSeller: false,
  description: 'Technical training tank designed for high-intensity workouts. This performance piece features quick-drying, four-way stretch fabric, strategic mesh panels for ventilation, flat seams to prevent chafing, and reflective details for visibility during low-light activities.',
  details: {
      materials: '86% Recycled Polyester, 14% Elastane',
      fit: 'Athletic fit. Model is 6\'2" and wears size L.',
      care: 'Machine wash cold with like colors. Hang to dry.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Black', 'Navy', 'Grey', 'Electric Blue']
  }
},
{
  id: 136,
  name: 'Graphic Print Tank',
  brand: 'Diesel',
  price: '₹7,900.00',
  image: 'https://cdn12.nnnow.com/web-images/large/styles/LYD4IEWHFY1/1708325953807/1.jpg',
  category: 'tanks',
  inDemand: true,
  stock: 35,
  bestSeller: false,
  description: 'Bold statement tank with edgy graphic print. This urban-inspired piece features a distressed logo design, raw-edge armholes, a slightly longer length, and a relaxed fit for an authentic streetwear aesthetic with attitude.',
  details: {
      materials: '100% Cotton',
      fit: 'Relaxed fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold inside out. Do not tumble dry.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Black', 'White', 'Red']
  }
},
{
  id: 137,
  name: 'Muscle Fit Tank',
  brand: 'Under Armour',
  price: '₹3,800.00',
  image: 'https://m.media-amazon.com/images/I/71C8VMJHgkL._AC_UY1100_.jpg',
  category: 'tanks',
  inDemand: true,
  stock: 95,
  bestSeller: true,
  description: 'Athletic tank designed to showcase physique during workouts. This performance piece features moisture-wicking fabric, four-way stretch construction, anti-odor technology, and a fitted cut that highlights muscle definition while allowing full range of motion.',
  details: {
      materials: '90% Polyester, 10% Elastane',
      fit: 'Compression fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold. Tumble dry low.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Black', 'White', 'Red', 'Royal Blue']
  }
},
{
  id: 138,
  name: 'Slub Cotton Tank',
  brand: 'John Elliott',
  price: '₹8,500.00',
  image: 'https://images.meesho.com/images/products/159657872/xy0fd_512.webp',
  category: 'tanks',
  inDemand: false,
  stock: 90,
  bestSeller: false,
  description: 'Premium tank crafted from textured slub cotton. This elevated basic features a unique fabric with subtle texture variation, a curved hem, reinforced seams, and a relaxed fit through the body for contemporary casual style with attention to detail.',
  details: {
      materials: '100% Slub Cotton',
      fit: 'Relaxed fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold. Hang dry.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['White', 'Black', 'Olive', 'Clay']
  }
},
{
  id: 139,
  name: 'Longline Tank Top',
  brand: 'Fear of God Essentials',
  price: '₹9,200.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0lGvf8endVrpXd042O3SYJfXHbaSWDXuFAQ&s',
  category: 'tanks',
  inDemand: true,
  stock: 72,
  bestSeller: false,
  description: 'Contemporary tank with extended length for modern layering. This streetwear-inspired piece features a scoop neckline, dropped armholes, raw edges, and an elongated silhouette for an on-trend look that works well with the brand\'s aesthetic.',
  details: {
      materials: '100% Cotton',
      fit: 'Oversized fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold. Tumble dry low.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['Cream', 'Black', 'Taupe']
  }
},
{
  id: 140,
  name: 'Striped Tank',
  brand: 'Sunspel',
  price: '₹7,500.00',
  image: 'https://www.gymbrothers.in/cdn/shop/products/nodaysoffstriped_750x.jpg?v=1638699719',
  category: 'tanks',
  inDemand: false,
  stock: 50,
  bestSeller: false,
  description: 'Classic Breton-inspired striped tank made from fine cotton. This refined casual piece features horizontal navy and white stripes, a clean crew neckline, and a regular fit for timeless summer style with British heritage quality.',
  details: {
      materials: '100% Long-staple Cotton',
      fit: 'Regular fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold. Reshape while damp and dry flat.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Navy/White Stripe', 'White/Navy Stripe']
  }
},
{
  id: 141,
  name: 'Racerback Training Tank',
  brand: 'Nike',
  price: '₹4,200.00',
  image: 'https://m.media-amazon.com/images/I/61-b-GQ-cFL._AC_UY1100_.jpg',
  category: 'tanks',
  inDemand: true,
  stock: 58,
  bestSeller: false,
  description: 'Technical racerback tank designed for high-performance training. This athletic piece features Dri-FIT technology to wick away sweat, strategic mesh panels for ventilation, a racerback design for unrestricted movement, and reflective details for visibility.',
  details: {
      materials: '100% Recycled Polyester',
      fit: 'Athletic fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold. Tumble dry low.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Black', 'Grey', 'Blue', 'Red']
  }
},
{
  id: 142,
  name: 'Premium Supima Tank',
  brand: 'Uniqlo',
  price: '₹2,800.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JUr5oyRmZj0xDlYnkyi0phda2UXgyM2AxA&s',
  category: 'tanks',
  inDemand: true,
  stock: 120,
  bestSeller: true,
  description: 'Essential tank top made from premium Supima cotton. This versatile basic features a ribbed crew neckline, clean finish on armholes, and a comfortable regular fit that maintains its shape wash after wash for reliable everyday wear.',
  details: {
      materials: '100% Supima Cotton',
      fit: 'Regular fit. Model is 5\'11" and wears size M.',
      care: 'Machine wash cold. Tumble dry low.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      color: ['White', 'Black', 'Navy', 'Grey', 'Olive']
  }
},

// Sweaters (IDs 143-152)
{
  id: 143,
  name: 'Merino Wool Crewneck',
  brand: 'Loro Piana',
  price: '₹65,000.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxN4h_yEstSEL8lGzJPbigIrUGSab6d61S8A&s',
  category: 'sweaters',
  inDemand: true,
  stock: 28,
  bestSeller: true,
  description: 'Exquisite crewneck sweater crafted from the finest merino wool. This luxurious knitwear piece features a refined silhouette, ribbed collar, cuffs and hem, and incomparable softness with natural temperature regulation for year-round comfort and elegance.',
  details: {
      materials: '100% Extra-fine Merino Wool',
      fit: 'Regular fit. Model is 6\'0" and wears size 50.',
      care: 'Dry clean only or gentle hand wash with wool-specific detergent. Lay flat to dry.'
  },
  options: {
      size: ['48', '50', '52', '54', '56'],
      color: ['Navy', 'Camel', 'Burgundy', 'Forest Green']
  }
},
{
  id: 144,
  name: 'Cable Knit Sweater',
  brand: 'Ralph Lauren',
  price: '₹22,500.00',
  image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1355998_alternate4?$rl_4x5_pdp$',
  category: 'sweaters',
  inDemand: true,
  stock: 45,
  bestSeller: false,
  description: 'Classic cable knit sweater with timeless design. This heritage-inspired piece features intricate cable patterns throughout, a ribbed crew neckline, cuffs, and hem, and is crafted from substantial cotton for a traditional look with modern comfort.',
  details: {
      materials: '100% Cotton',
      fit: 'Regular fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold. Reshape and lay flat to dry.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Cream', 'Navy', 'Burgundy', 'Forest Green']
  }
},
{
  id: 145,
  name: 'Cashmere V-Neck',
  brand: 'Brunello Cucinelli',
  price: '₹78,000.00',
  image: 'https://content.woolovers.com/img/747x856/17474_q11m_greymarl_m_13.jpg',
  category: 'sweaters',
  inDemand: false,
  stock: 30,
  bestSeller: false,
  description: 'Sumptuous Italian-made cashmere sweater with V-neckline. This exceptional luxury piece features the world\'s finest cashmere with subtle micro-sequin detailing at the shoulders, ribbed trim, and impeccable craftsmanship for unparalleled softness and sophisticated style.',
  details: {
      materials: '100% Cashmere',
      fit: 'Regular fit. Model is 6\'1" and wears size 50.',
      care: 'Dry clean only.'
  },
  options: {
      size: ['48', '50', '52', '54', '56'],
      color: ['Dove Grey', 'Camel', 'Navy', 'Bordeaux']
  }
},
{
  id: 146,
  name: 'Lambswool Turtleneck',
  brand: 'Howlin\'',
  price: '₹18,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4RC8sDxSsgmH5urTLNTP9tK9gQpC2jOv3w&s',
  category: 'sweaters',
  inDemand: true,
  stock: 32,
  bestSeller: false,
  description: 'Scottish-made turtleneck sweater with heritage craftsmanship. This cozy piece features a substantial fold-over turtleneck, textured knit pattern, ribbed cuffs and hem, and is made from premium lambswool for exceptional warmth and authentic character.',
  details: {
      materials: '100% Lambswool',
      fit: 'Regular fit. Model is 6\'0" and wears size M.',
      care: 'Hand wash cold or dry clean. Lay flat to dry.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Oatmeal', 'Navy', 'Forest Green', 'Rust']
  }
},
{
  id: 147,
  name: 'Alpaca Blend Cardigan',
  brand: 'Officine Générale',
  price: '₹32,000.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKAQzBK8f6bOSB6kex2T90Wl2MM-WnG7AFw&s',
  category: 'sweaters',
  inDemand: true,
  stock: 18,
  bestSeller: false,
  description: 'Sophisticated shawl collar cardigan crafted from alpaca blend yarn. This refined knitwear piece features a substantial shawl collar, horn buttons, patch pockets, and a relaxed silhouette for effortless Parisian style with exceptional warmth and comfort.',
  details: {
      materials: '70% Alpaca, 30% Wool',
      fit: 'Relaxed fit. Model is 6\'1" and wears size M.',
      care: 'Dry clean only.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Charcoal', 'Navy', 'Camel']
  }
},
{
  id: 148,
  name: 'Ribbed Wool Sweater',
  brand: 'Stone Island',
  price: '₹28,900.00',
  image: 'https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87000612_33.jpg?imwidth=2048&imdensity=1&ts=1728052467136',
  category: 'sweaters',
  inDemand: false,
  stock: 70,
  bestSeller: false,
  description: 'Technical ribbed wool sweater with signature detailing. This performance-inspired piece features a chunky ribbed knit, crew neckline, the brand\'s iconic removable compass patch on the sleeve, and is crafted from treated wool for enhanced durability and weather resistance.',
  details: {
      materials: '100% Wool with special treatment',
      fit: 'Regular fit. Model is 6\'1" and wears size M.',
      care: 'Hand wash cold or dry clean. Lay flat to dry.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Black', 'Navy', 'Olive', 'Grey']
  }
},
{
  id: 149,
  name: 'Lightweight Cotton Sweater',
  brand: 'A.P.C.',
  price: '₹16,500.00',
  image: 'https://img.tatacliq.com/images/i14/437Wx649H/MP000000019936587_437Wx649H_202311031659091.jpeg',
  category: 'sweaters',
  inDemand: true,
  stock: 52,
  bestSeller: false,
  description: 'Refined lightweight sweater for transitional seasons. This versatile piece features a fine gauge cotton knit, clean crew neckline, ribbed trim details, and a slim fit for a minimalist Parisian aesthetic that works year-round in various climates.',
  details: {
      materials: '100% Cotton',
      fit: 'Slim fit. Model is 6\'0" and wears size M.',
      care: 'Hand wash cold. Lay flat to dry.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Navy', 'Ecru', 'Grey Melange', 'Black']
  }
},
{
  id: 150,
  name: 'Intarsia Knit Sweater',
  brand: 'Gucci',
  price: '₹85,000.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfwD65owLwua3zwGtosg1lGGMhOwF87r7jQ&s',
  category: 'sweaters',
  inDemand: true,
  stock: 15,
  bestSeller: true,
  description: 'Statement intarsia knit sweater with iconic motifs. This luxury piece features the brand\'s signature symbols and patterns knitted directly into the fabric using the traditional intarsia technique, a crew neckline, and ribbed trim for a bold designer statement.',
  details: {
      materials: '100% Wool',
      fit: 'Regular fit. Model is 6\'1" and wears size M.',
      care: 'Dry clean only.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['Ivory/Navy/Red', 'Black/Green/Red']
  }
},
{
  id: 151,
  name: 'Mohair Blend Sweater',
  brand: 'Acne Studios',
  price: '₹32,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICoR7AaOm08-mtnWH1rPAYyfmE0eTcv-qzA&s',
  category: 'sweaters',
  inDemand: false,
  stock: 70,
  bestSeller: false,
  description: 'Textural mohair blend sweater with contemporary design. This fashion-forward piece features a fuzzy, brushed texture, oversized silhouette, dropped shoulders, ribbed trim, and the brand\'s minimalist aesthetic for a modern Scandinavian interpretation of luxury knitwear.',
  details: {
      materials: '34% Mohair, 34% Wool, 27% Polyamide, 5% Elastane',
      fit: 'Oversized fit. Model is 6\'1" and wears size M.',
      care: 'Dry clean only.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['Powder Pink', 'Black', 'Mint Green']
  }
},
{
  id: 152,
  name: 'Waffle Knit Pullover',
  brand: 'Moncler',
  price: '₹42,000.00',
  image: 'https://cdn-images.farfetch-contents.com/27/29/91/30/27299130_57074045_600.jpg',
  category: 'sweaters',
  inDemand: true,
  stock: 22,
  bestSeller: false,
  description: 'Technical waffle knit pullover with performance features. This luxury sportswear piece features a textured waffle knit pattern, half-zip design with logo pull, ribbed trim, and the brand\'s signature logo patch for a sophisticated alpine-inspired aesthetic.',
  details: {
      materials: '100% Virgin Wool',
      fit: 'Regular fit. Model is 6\'1" and wears size M.',
      care: 'Hand wash cold or dry clean. Lay flat to dry.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Navy', 'Black', 'Grey', 'Red']
  }
},

// Sweatshirts and Hoodies (IDs 153-162)
{
  id: 153,
  name: 'Logo Embroidered Hoodie',
  brand: 'Supreme',
  price: '₹18,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nSuFiZ0QEJVD4An-9xeSKYtugu4u2cQCIQ&s',
  category: 'sweatshirts',
  inDemand: true,
  stock: 125,
  bestSeller: true,
  description: 'Iconic box logo hoodie with cult streetwear status. This coveted piece features heavyweight cotton construction, a kangaroo pocket, adjustable drawstring hood, ribbed cuffs and hem, and the brand\'s signature embroidered box logo on the chest.',
  details: {
      materials: '90% Cotton, 10% Polyester',
      fit: 'Regular fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold inside out. Tumble dry low.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Black', 'Grey', 'Navy', 'Red']
  }
},
{
  id: 154,
  name: 'Vintage Wash Sweatshirt',
  brand: 'Champion',
  price: '₹8,200.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JQjROhKz5o5fvY_cNEVyja2ExUnFRGlgwQ&s',
  category: 'sweatshirts',
  inDemand: true,
  stock: 88,
  bestSeller: false,
  description: 'Heritage-inspired sweatshirt with authentic vintage wash. This classic piece features reverse weave cotton construction, ribbed side panels, a V-insert at the neckline, ribbed cuffs and hem, and the brand\'s iconic C logo embroidered on the chest and sleeve.',
  details: {
      materials: '82% Cotton, 18% Polyester',
      fit: 'Regular fit. Model is 6\'1" and wears size L.',
      care: 'Machine wash cold. Tumble dry low.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Washed Grey', 'Washed Navy', 'Washed Green']
  }
},
{
  id: 155,
  name: 'Zip-Up Hoodie',
  brand: 'Reigning Champ',
  price: '₹14,500.00',
  image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/OCTOBER/28/76Ne2GHp_1c7052a650e6404c85431c506a6d4298.jpg',
  category: 'sweatshirts',
  inDemand: false,
  stock: 99,
  bestSeller: false,
  description: 'Premium midweight terry zip-up hoodie with meticulous craftsmanship. This Canadian-made piece features flatlock seams, reinforced side gussets, a two-way YKK zipper, jersey-lined hood, and raglan sleeves for superior comfort and durability.',
  details: {
      materials: '100% Cotton Midweight Terry',
      fit: 'Regular fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold and hang to dry or tumble dry low.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Heather Grey', 'Black', 'Navy']
  }
},
{
  id: 156,
  name: 'Oversized Graphic Hoodie',
  brand: 'Vetements',
  price: '₹65,000.00',
  image: 'https://m.media-amazon.com/images/I/61kw3DP4SxL._AC_UY1100_.jpg',
  category: 'sweatshirts',
  inDemand: true,
  stock: 42,
  bestSeller: true,
  description: 'Avant-garde oversized hoodie with provocative graphic print. This high-fashion statement piece features an extremely oversized fit, dropped shoulders, extra-long sleeves, heavyweight cotton construction, and the brand\'s signature subversive graphics and text.',
  details: {
      materials: '80% Cotton, 20% Polyester',
      fit: 'Extremely oversized fit. Model is 6\'1" and wears size S.',
      care: 'Hand wash cold or dry clean. Do not tumble dry.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L'],
      color: ['Black', 'White']
  }
},
{
  id: 157,
  name: 'Fleece Crewneck Sweatshirt',
  brand: 'Carhartt WIP',
  price: '₹9,800.00',
  image: 'https://www.victoriassecret.in/on/demandware.static/-/Sites-vs_master_catalog/default/dwd6037aa1/large/1125431554A2_OF_F.jpg',
  category: 'sweatshirts',
  inDemand: true,
  stock: 75,
  bestSeller: false,
  description: 'Durable workwear-inspired crewneck sweatshirt with modern styling. This versatile piece features heavyweight cotton fleece construction, ribbed cuffs, collar and hem, a small logo patch at the hem, and a regular fit for authentic utilitarian style.',
  details: {
      materials: '100% Cotton',
      fit: 'Regular fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold. Tumble dry low.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Hamilton Brown', 'Black', 'Grey Heather', 'Navy']
  }
},
{
  id: 158,
  name: 'Tech Fleece Pullover',
  brand: 'Nike',
  price: '₹7,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUmO4tWad4Te_D1b6Cd2QDT9Gd2ps76iJs0Q&s',
  category: 'sweatshirts',
  inDemand: false,
  soldCount: 70,
  bestSeller: false,
  description: 'Innovative tech fleece pullover designed for warmth without weight. This performance piece features Nike\'s signature tech fleece fabric, a funnel neck with adjustable drawcord, raglan sleeves, a kangaroo pocket, and tapered fit for modern athletic style.',
  details: {
      materials: '69% Cotton, 31% Polyester',
      fit: 'Slim fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold. Tumble dry low.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Black', 'Dark Grey', 'Navy', 'Olive']
  }
},
{
  id: 159,
  name: 'Cashmere Blend Hoodie',
  brand: 'Brunello Cucinelli',
  price: '₹95,000.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UD3o7CtMc_OUGgDpCDnKWGfh6KLItWC11Q&s',
  category: 'sweatshirts',
  inDemand: true,
  stock: 18,
  bestSeller: false,
  description: 'Sumptuous cashmere blend hoodie representing the height of luxury sportswear. This exceptional piece features a plush cashmere and silk blend fabric, a refined hood with tonal drawstrings, a full zip closure, ribbed cuffs and hem, and impeccable Italian craftsmanship.',
  details: {
      materials: '70% Cashmere, 30% Silk',
      fit: 'Regular fit. Model is 6\'1" and wears size 50.',
      care: 'Dry clean only.'
  },
  options: {
      size: ['48', '50', '52', '54', '56'],
      color: ['Dove Grey', 'Navy', 'Beige']
  }
},
{
  id: 160,
  name: 'Distressed Sweatshirt',
  brand: 'Amiri',
  price: '₹42,000.00',
  image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/1769341/2017/3/1/11488372308471-FOREVER-21-Rust-Orange-Distressed-Sweatshirt-8601488372308254-2.jpg',
  category: 'sweatshirts',
  inDemand: true,
  stock: 32,
  bestSeller: false,
  description: 'Luxury grunge-inspired sweatshirt with artisanal distressing. This high-end piece features intentional rips, tears, and paint splatters, along with a vintage-inspired wash, for an authentic worn-in aesthetic that embodies the brand\'s rock and roll spirit.',
  details: {
      materials: '100% Cotton',
      fit: 'Relaxed fit. Model is 6\'1" and wears size M.',
      care: 'Hand wash cold. Do not tumble dry. Each piece is unique; distressing will vary.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['Vintage Black', 'Washed Grey']
  }
},
{
  id: 161,
  name: 'Heavyweight Hoodie',
  brand: 'Fear of God',
  price: '₹32,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkOMBzQHp8rWKnFBrHq7_JLsIELOil4r6f7A&s',
  category: 'sweatshirts',
  inDemand: true,
  stock: 65,
  bestSeller: true,
  description: 'Premium heavyweight hoodie with contemporary proportions. This luxury streetwear piece features dense cotton fleece construction, a double-layered hood, dropped shoulders, ribbed cuffs and hem, and an oversized fit for an elevated take on casual essentials.',
  details: {
      materials: '100% Cotton',
      fit: 'Oversized fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold inside out. Tumble dry low.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['Oatmeal', 'Black', 'Vintage Black', 'Navy']
  }
},
{
  id: 162,
  name: 'Logo Print Sweatshirt',
  brand: 'Palm Angels',
  price: '₹28,900.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2KPwqQYB7FHGqg4K-0hMEErNT0mGUhEFHg&s',
  category: 'sweatshirts',
  inDemand: true,
  stock: 48,
  bestSeller: false,
  description: 'Bold logo sweatshirt with Italian luxury streetwear aesthetic. This statement piece features the brand\'s signature gothic font logo printed across the chest, heavyweight cotton construction, a crew neckline, and relaxed fit for authentic street style with designer appeal.',
  details: {
      materials: '100% Cotton',
      fit: 'Relaxed fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold inside out. Do not tumble dry.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['Black', 'White', 'Purple']
  }
},

// Jeans (IDs 163-172)
{
  id: 163,
  name: 'Selvedge Denim Jeans',
  brand: 'A.P.C.',
  price: '₹18,500.00',
  image: 'https://media.paulsmith.com/media/catalog/product/m/2/m2r-401x-b20001-un-back.jpg',
  category: 'jeans',
  inDemand: true,
  stock: 62,
  bestSeller: true,
  description: 'Iconic raw selvedge denim jeans with minimalist design. These cult-favorite jeans feature Japanese denim construction, a clean silhouette with no external branding, five-pocket styling, and signature selvedge outseam that develops a unique patina with wear.',
  details: {
      materials: '100% Cotton Japanese selvedge denim',
      fit: 'Slim straight fit. Model is 6\'1" and wears size 32.',
      care: 'Wash as infrequently as possible. When necessary, wash inside out in cold water and hang dry.'
  },
  options: {
      size: ['28', '29', '30', '31', '32', '33', '34', '36'],
      color: ['Indigo', 'Black']
  }
},
{
  id: 164,
  name: 'Distressed Skinny Jeans',
  brand: 'Amiri',
  price: '₹58,000.00',
  image: 'https://cdn.shopify.com/s/files/1/0293/9277/products/11-30-22Studio5_RD_SN_14-35-22_76_FNMH1161_MediumWash_P_4833_PLUS_JB_1200x1200.jpg?v=1669943306',
  category: 'jeans',
  inDemand: true,
  stock: 45,
  bestSeller: false,
  description: 'Luxury rock-inspired skinny jeans with artisanal distressing. These high-end jeans feature hand-finished rips and repairs, stretch denim for comfort, leather patch at back waist, and a skinny fit throughout for an authentic rock and roll aesthetic.',
  details: {
      materials: '98% Cotton, 2% Elastane',
      fit: 'Skinny fit. Model is 6\'1" and wears size 32.',
      care: 'Machine wash cold inside out. Tumble dry low. Each piece is unique; distressing will vary.'
  },
  options: {
      size: ['28', '29', '30', '31', '32', '33', '34', '36'],
      color: ['Aged Black', 'Medium Indigo']
  }
},
{
  id: 165,
  name: 'Straight Leg Raw Denim',
  brand: 'Nudie Jeans',
  price: '₹14,200.00',
  image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1064514_lifestyle?$rl_4x5_pdp$',
  category: 'jeans',
  inDemand: false,
  stock: 50,
  bestSeller: false,
  description: 'Sustainable raw denim jeans with classic straight leg. These eco-conscious jeans feature organic cotton construction, signature orange stitching, leather patch at back waist, and a regular straight fit that will develop unique wear patterns over time.',
  details: {
      materials: '100% Organic Cotton',
      fit: 'Regular straight fit. Model is 6\'0" and wears size 32.',
      care: 'Wash as infrequently as possible. When necessary, wash inside out in cold water and hang dry.'
  },
  options: {
      size: ['28', '29', '30', '31', '32', '33', '34', '36', '38'],
      color: ['Dry Dark Blue', 'Dry Black']
  }
},
{
  id: 166,
  name: 'Tapered Fit Jeans',
  brand: 'Acne Studios',
  price: '₹22,500.00',
  image: 'https://pictures.kartmax.in/live/sites/aPfvUDpPwMn1ZadNKhP7/product-images/8907787958062/660/HLJN000878_1.jpg',
  category: 'jeans',
  inDemand: true,
  stock: 38,
  bestSeller: false,
  description: 'Contemporary tapered jeans with Scandinavian design sensibility. These modern jeans feature a comfortable mid-rise waist, regular fit through the thigh that narrows from the knee down, and minimal detailing for a clean, versatile aesthetic.',
  details: {
      materials: '100% Cotton',
      fit: 'Tapered fit. Model is 6\'1" and wears size 32.',
      care: 'Machine wash cold inside out. Tumble dry low.'
  },
  options: {
      size: ['28', '29', '30', '31', '32', '33', '34', '36'],
      color: ['Mid Blue', 'Black', 'Light Wash']
  }
},
{
  id: 167,
  name: 'Vintage Wash Jeans',
  brand: 'Levi\'s Vintage Clothing',
  price: '₹16,800.00',
  image: 'https://dimg.dillards.com/is/image/DillardsZoom/zoom/levis-mens-502-tapered-leg-vintage-wash-jeans/00000000_zi_92342a93-a665-4432-a305-b84895c18669.jpg',
  category: 'jeans',
  inDemand: true,
  stock: 85,
  bestSeller: true,
  description: 'Authentic reproduction of classic 1950s jeans. These heritage-inspired jeans feature period-correct details like a higher rise, wider leg, selvedge denim from Cone Mills, two-horse leather patch, and vintage-inspired wash for timeless Americana style.',
  details: {
      materials: '100% Cotton Cone Mills Selvedge Denim',
      fit: 'Regular fit with straight leg. Model is 6\'0" and wears size 32.',
      care: 'Machine wash cold inside out. Hang dry.'
  },
  options: {
      size: ['28', '29', '30', '31', '32', '33', '34', '36', '38'],
      color: ['Rigid', '1955 Wash']
  }
},
{
  id: 168,
  name: 'Slim Fit Black Jeans',
  brand: 'Saint Laurent',
  price: '₹42,000.00',
  image: 'https://pantproject.com/cdn/shop/files/DSC6905.jpg?v=1744900836',
  category: 'jeans',
  inDemand: false,
  stock: 60,
  bestSeller: false,
  description: 'Luxurious slim fit jeans with rock and roll aesthetic. These high-end jeans feature premium stretch denim, a low rise waist, slim fit throughout the leg, and minimal branding for a sleek, edgy look that embodies the brand\'s rebellious spirit.',
  details: {
      materials: '98% Cotton, 2% Elastane',
      fit: 'Slim fit. Model is 6\'1" and wears size 32.',
      care: 'Machine wash cold inside out. Hang dry.'
  },
  options: {
      size: ['28', '29', '30', '31', '32', '33', '34'],
      color: ['Used Black', 'Raw Black']
  }
},
{
  id: 169,
  name: 'Relaxed Fit Jeans',
  brand: 'Carhartt WIP',
  price: '₹12,500.00',
  image: 'https://assets.ajio.com/medias/sys_master/root/20230613/98CW/64889a6a42f9e729d73f8247/-473Wx593H-466268646-navy-MODEL.jpg',
  category: 'jeans',
  inDemand: true,
  stock: 52,
  bestSeller: false,
  description: 'Workwear-inspired relaxed fit jeans with durable construction. These utilitarian jeans feature heavyweight denim, a comfortable mid-rise waist, relaxed fit through the leg, reinforced stitching, and the brand\'s signature square label for authentic workwear style.',
  details: {
      materials: '100% Cotton',
      fit: 'Relaxed fit. Model is 6\'1" and wears size 32.',
      care: 'Machine wash cold. Tumble dry medium.'
  },
  options: {
      size: ['28', '30', '32', '34', '36', '38'],
      color: ['Blue', 'Black', 'Stone Wash']
  }
},
{
  id: 170,
  name: 'Bootcut Jeans',
  brand: 'Diesel',
  price: '₹18,900.00',
  image: 'https://d1pdzcnm6xgxlz.cloudfront.net/bottoms/8905875288848-9.jpg',
  category: 'jeans',
  inDemand: false,
  stock: 80,
  bestSeller: false,
  description: 'Modern interpretation of classic bootcut jeans. These Italian-designed jeans feature premium stretch denim, a mid-rise waist, regular fit through the thigh with a subtle flare from the knee down, and signature hardware for a contemporary take on a timeless silhouette.',
  details: {
      materials: '92% Cotton, 6% Polyester, 2% Elastane',
      fit: 'Bootcut fit. Model is 6\'2" and wears size 32.',
      care: 'Machine wash cold inside out. Tumble dry low.'
  },
  options: {
      size: ['28', '30', '31', '32', '33', '34', '36', '38'],
      color: ['Medium Blue', 'Dark Blue', 'Black']
  }
},
{
  id: 171,
  name: 'Ripped Knee Jeans',
  brand: 'Ksubi',
  price: '₹24,500.00',
  image: 'https://www.fugazee.com/cdn/shop/files/1_b89bbb9c-83bd-4857-baea-b00cab858817.jpg?v=1734706548',
  category: 'jeans',
  inDemand: true,
  stock: 48,
  bestSeller: false,
  description: 'Australian-designed jeans with signature distressed details. These edgy jeans feature intentional rips at the knees, a slim fit throughout, premium denim construction, and the brand\'s distinctive cross embroidery on the back pocket for authentic street style.',
  details: {
      materials: '100% Cotton',
      fit: 'Slim fit. Model is 6\'0" and wears size 32.',
      care: 'Machine wash cold inside out. Hang dry.'
  },
  options: {
      size: ['28', '29', '30', '31', '32', '33', '34', '36'],
      color: ['Denim', 'Black']
  }
},
{
  id: 172,
  name: 'Japanese Selvedge Jeans',
  brand: 'Edwin',
  price: '₹19,800.00',
  image: 'https://luxire.in/cdn/shop/files/4_Japanese_Kaihara_Indigo_Selvedge_Jeans_5_1500x.jpg?v=1726916760',
  category: 'jeans',
  inDemand: true,
  stock: 35,
  bestSeller: false,
  description: 'Premium Japanese selvedge denim jeans with heritage craftsmanship. These authentic jeans feature fabric from renowned Japanese mills, classic five-pocket styling, signature rainbow selvedge ID, and a regular tapered fit that combines comfort with a modern silhouette.',
  details: {
      materials: '100% Japanese Cotton Selvedge Denim',
      fit: 'Regular tapered fit. Model is 6\'1" and wears size 32.',
      care: 'Wash inside out in cold water. Hang dry to preserve denim character.'
  },
  options: {
      size: ['29', '30', '31', '32', '33', '34', '36'],
      color: ['Raw Indigo', 'One Wash', 'Rinsed']
  }
},

// Sneakers (IDs 173-182)
{
  id: 173,
  name: 'Minimalist Leather Sneakers',
  brand: 'Common Projects',
  price: '₹38,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAm8ot6ZZgzRFpdukmuIU6jEx3cvtPExWWBQ&s',
  category: 'sneakers',
  inDemand: true,
  stock: 85,
  bestSeller: true,
  description: 'Iconic minimalist leather sneakers handcrafted in Italy. These luxury sneakers feature premium Nappa leather, a clean silhouette with no visible branding, signature gold serial numbers at the heel, and durable Margom soles for understated elegance and exceptional quality.',
  details: {
      materials: 'Italian Nappa leather upper, leather lining, rubber sole',
      fit: 'True to size. Order your regular shoe size.',
      care: 'Wipe clean with a soft cloth. Use leather conditioner occasionally to maintain suppleness.'
  },
  options: {
      size: ['40', '41', '42', '43', '44', '45'],
      color: ['White', 'Black', 'Blush', 'Navy']
  }
},
{
  id: 174,
  name: 'Retro Running Sneakers',
  brand: 'New Balance',
  price: '₹12,500.00',
  image: 'https://i.shgcdn.com/8866d26e-214d-4c69-9d43-0ffdd14c597f/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
  category: 'sneakers',
  inDemand: true,
  stock: 110,
  bestSeller: true,
  description: 'Heritage-inspired running sneakers with retro design. These comfortable shoes feature a suede and mesh upper, ENCAP midsole cushioning technology, a padded collar and tongue, and the brand\'s iconic N logo for authentic vintage athletic style.',
  details: {
      materials: 'Suede and mesh upper, EVA midsole with ENCAP technology, rubber outsole',
      fit: 'True to size. Order your regular shoe size.',
      care: 'Brush away dirt with a soft brush. Use suede cleaner for stains.'
  },
  options: {
      size: ['7', '8', '9', '10', '11', '12', '13'],
      color: ['Grey/Navy', 'Green/Yellow', 'Burgundy/Grey']
  }
},
{
  id: 175,
  name: 'High-Top Canvas Sneakers',
  brand: 'Converse',
  price: '₹6,800.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWZbSWGkH9yC1jKzo6N9FgYV6wH03usH3lA&s',
  category: 'sneakers',
  inDemand: false,
  stock: 90,
  bestSeller: false,
  description: 'Classic high-top canvas sneakers with timeless design. These iconic shoes feature a durable canvas upper, rubber toe cap, metal eyelets, cushioned footbed, and the brand\'s signature star ankle patch for authentic American casual style.',
  details: {
      materials: 'Canvas upper, rubber toe cap and outsole',
      fit: 'Runs large. Order half size down from your regular shoe size.',
      care: 'Machine washable. Air dry away from direct heat.'
  },
  options: {
      size: ['7', '8', '9', '10', '11', '12'],
      color: ['Black', 'White', 'Navy', 'Red']
  }
},
{
  id: 176,
  name: 'Luxury Designer Sneakers',
  brand: 'Balenciaga',
  price: '₹75,000.00',
  image: 'https://hips.hearstapps.com/hmg-prod/images/designer-sneakera-1471965974-658338c090aa0.jpg?crop=0.668xw:1.00xh;0.138xw,0&resize=1200:*',
  category: 'sneakers',
  inDemand: true,
  stock: 42,
  bestSeller: false,
  description: 'Statement designer sneakers with bold, exaggerated proportions. These high-fashion shoes feature a complex paneled construction, oversized silhouette, chunky sole unit, and subtle logo details for a contemporary luxury aesthetic that makes a strong style statement.',
  details: {
      materials: 'Mesh, nylon and leather upper, rubber sole',
      fit: 'Runs large. Consider ordering one size down.',
      care: 'Wipe clean with a soft damp cloth. Store with shoe trees.'
  },
  options: {
      size: ['39', '40', '41', '42', '43', '44', '45'],
      color: ['Triple Black', 'Triple White', 'Grey/Blue/Red']
  }
},
{
  id: 177,
  name: 'Suede Low-Top Sneakers',
  brand: 'Adidas',
  price: '₹9,800.00',
  image: 'https://costosoitaliano.com/cdn/shop/files/sceinteis_SUEDE_COLOUR_SNEAKER_e088a8fc-482e-4520-9a8e-60c64dfa4f5d_580x.png?v=1736591111',
  category: 'sneakers',
  inDemand: true,
  stock: 95,
  bestSeller: false,
  description: 'Classic suede sneakers with retro tennis heritage. These versatile shoes feature a premium suede upper, leather three-stripe branding, cushioned EVA midsole, and the brand\'s signature trefoil logo on the heel tab for authentic sporty style.',
  details: {
      materials: 'Suede upper, textile lining, rubber outsole',
      fit: 'True to size. Order your regular shoe size.',
      care: 'Brush with a suede brush. Use suede protector spray before first wear.'
  },
  options: {
      size: ['7', '8', '9', '10', '11', '12'],
      color: ['Navy/White', 'Green/White', 'Black/White']
  }
},
{
  id: 178,
  name: 'Knit Performance Sneakers',
  brand: 'Nike',
  price: '₹14,500.00',
  image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/23e95755-136e-4b97-b0d0-86123a665f1a/nike-flyknit.jpg',
  category: 'sneakers',
  inDemand: false,
  stock: 0,
  bestSeller: false,
  description: 'Innovative performance sneakers with seamless knit construction. These technical running shoes feature a breathable Flyknit upper, responsive React foam cushioning, strategic support zones, and a lightweight design for superior comfort and athletic performance.',
  details: {
      materials: 'Flyknit upper, React foam midsole, rubber outsole',
      fit: 'True to size. Order your regular shoe size.',
      care: 'Remove dirt with a soft brush. Machine washable on gentle cycle in cold water. Air dry.'
  },
  options: {
      size: ['7', '8', '9', '10', '11', '12', '13'],
      color: ['Black/White', 'Grey/Volt', 'Blue/Orange']
  }
},
{
  id: 179,
  name: 'Slip-On Skate Sneakers',
  brand: 'Vans',
  price: '₹5,500.00',
  image: 'https://m.media-amazon.com/images/I/81A1pI32UfL._AC_UY1000_DpWeblab_.jpg',
  category: 'sneakers',
  inDemand: true,
  stock: 78,
  bestSeller: false,
  description: 'Classic slip-on sneakers with skateboarding heritage. These casual shoes feature a canvas upper, elastic side accents for easy on/off, padded collar, signature waffle outsole, and a simple silhouette for timeless California skate style.',
  details: {
      materials: 'Canvas upper, rubber waffle outsole',
      fit: 'True to size. Order your regular shoe size.',
      care: 'Spot clean with mild soap and water. Air dry.'
  },
  options: {
      size: ['7', '8', '9', '10', '11', '12'],
      color: ['Black/White Checkerboard', 'Black', 'White', 'Navy']
  }
},
{
  id: 180,
  name: 'Italian Leather Sneakers',
  brand: 'Koio',
  price: '₹28,900.00',
  image: 'https://costosoitaliano.com/cdn/shop/products/24720_men_rio-ii_black_p45_1024x1024@2x.jpg?v=1736601606',
  category: 'sneakers',
  inDemand: true,
  stock: 32,
  bestSeller: false,
  description: 'Handcrafted Italian leather sneakers with minimalist design. These premium shoes feature full-grain leather from Tuscany, hand-painted edges, waxed cotton laces, and Margom soles for exceptional quality and understated luxury with versatile style.',
  details: {
      materials: 'Full-grain Italian leather upper, leather lining, rubber sole',
      fit: 'True to size. Order your regular shoe size.',
      care: 'Wipe clean with a soft cloth. Use leather conditioner occasionally.'
  },
  options: {
      size: ['40', '41', '42', '43', '44', '45', '46'],
      color: ['White', 'Black', 'Grey', 'Tan']
  }
},
{
  id: 181,
  name: 'Chunky Sole Sneakers',
  brand: 'Alexander McQueen',
  price: '₹52,000.00',
  image: 'https://baccabucci.com/cdn/shop/products/MG_8831_6983b4ff-5d28-4d59-a03e-f55bce226ad7.jpg?v=1635422651',
  category: 'sneakers',
  inDemand: true,
  stock: 55,
  bestSeller: true,
  description: 'Luxury sneakers with signature exaggerated sole. These designer shoes feature premium leather construction, oversized rubber sole, padded collar, and subtle branding on the tongue and heel for a bold yet refined aesthetic that elevates casual outfits.',
  details: {
      materials: 'Calfskin leather upper and lining, rubber sole',
      fit: 'True to size. Order your regular shoe size.',
      care: 'Wipe clean with a soft cloth. Store with shoe trees when not in use.'
  },
  options: {
      size: ['39', '40', '41', '42', '43', '44', '45'],
      color: ['White/Black', 'All White', 'White/Navy']
  }
},
{
  id: 182,
  name: 'Sustainable Canvas Sneakers',
  brand: 'Veja',
  price: '₹11,200.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUxOuJP5FbOE8boWaxaHgLKKMowB1NqEsWw&s',
  category: 'sneakers',
  inDemand: true,
  stock: 68,
  bestSeller: false,
  description: 'Eco-conscious sneakers made with sustainable materials. These ethical shoes feature organic cotton canvas, wild rubber from the Amazon, recycled polyester lining, and the brand\'s distinctive V logo for responsible style with French minimalist design.',
  details: {
      materials: 'Organic cotton canvas upper, wild rubber sole, recycled polyester lining',
      fit: 'Runs narrow. Consider ordering half size up if you have wide feet.',
      care: 'Spot clean with mild soap and water. Air dry away from direct heat.'
  },
  options: {
      size: ['40', '41', '42', '43', '44', '45', '46'],
      color: ['White/Natural', 'Black/White', 'White/Cobalt']
  }
},

// Watches (IDs 183-192)
{
  id: 183,
  name: 'Automatic Chronograph Watch',
  brand: 'TAG Heuer',
  price: '₹185,000.00',
  image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/t/a/tag-heuer-carrera-cbn2a1aa-ba0643-multiple-2.jpg',
  category: 'watches',
  inDemand: true,
  stock: 28,
  bestSeller: true,
  description: 'Precision Swiss-made automatic chronograph watch with racing heritage. This sophisticated timepiece features a stainless steel case, sapphire crystal with anti-reflective coating, in-house movement with 80-hour power reserve, and water resistance to 100 meters.',
  details: {
      materials: 'Stainless steel case and bracelet, sapphire crystal, ceramic bezel',
      fit: 'Case diameter: 44mm. Thickness: 14.5mm. Lug width: 22mm.',
      care: 'Regular service every 5-7 years recommended. Avoid magnetic fields and extreme temperatures.'
  },
  options: {
      color: ['Blue Dial/Steel Bracelet', 'Black Dial/Steel Bracelet', 'Black Dial/Leather Strap']
  }
},
{
  id: 184,
  name: 'Dive Watch',
  brand: 'Omega',
  price: '₹425,000.00',
  image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/o/m/omega-seamaster-210-30-42-20-10-001-large.jpg',
  category: 'watches',
  inDemand: true,
  stock: 15,
  bestSeller: false,
  description: 'Professional dive watch with legendary underwater heritage. This high-performance timepiece features a unidirectional rotating bezel, helium escape valve, highly luminous dial and hands, co-axial master chronometer movement, and water resistance to 300 meters.',
  details: {
      materials: 'Stainless steel case and bracelet, sapphire crystal, ceramic bezel',
      fit: 'Case diameter: 42mm. Thickness: 13.5mm. Lug width: 20mm.',
      care: 'Rinse with fresh water after exposure to saltwater. Service every 5-8 years.'
  },
  options: {
      color: ['Blue Dial/Blue Bezel', 'Black Dial/Black Bezel', 'White Dial/Blue Bezel']
  }
},
{
  id: 185,
  name: 'Minimalist Quartz Watch',
  brand: 'Junghans',
  price: '₹85,000.00',
  image: 'https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2018/12/1200x900-2.jpg',
  category: 'watches',
  inDemand: false,
  stock: 70,
  bestSeller: false,
  description: 'Bauhaus-inspired minimalist watch with German design heritage. This elegant timepiece features a clean dial with slim markers, domed sapphire crystal, precision quartz movement, and a slim case profile for timeless sophistication with modernist principles.',
  details: {
      materials: 'Stainless steel case, sapphire crystal, leather strap',
      fit: 'Case diameter: 38mm. Thickness: 7.5mm. Lug width: 20mm.',
      care: 'Wipe clean with a soft cloth. Avoid water exposure with leather strap.'
  },
  options: {
      color: ['White Dial/Black Leather', 'Black Dial/Brown Leather', 'White Dial/Mesh Bracelet']
  }
},
{
  id: 186,
  name: 'Pilot\'s Watch',
  brand: 'IWC',
  price: '₹650,000.00',
  image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/i/w/iwc-pilots-iw389101-large.jpg',
  category: 'watches',
  inDemand: true,
  stock: 8,
  bestSeller: false,
  description: 'Classic aviation-inspired pilot\'s watch with heritage design. This precision timepiece features a highly legible dial with luminous numerals and hands, in-house automatic movement with 7-day power reserve, soft-iron inner case for magnetic field protection, and vintage-inspired aesthetics.',
  details: {
      materials: 'Stainless steel case, sapphire crystal, calfskin leather strap',
      fit: 'Case diameter: 46mm. Thickness: 15.5mm. Lug width: 22mm.',
      care: 'Regular service every 5 years recommended. Keep away from strong magnetic fields.'
  },
  options: {
      color: ['Black Dial/Brown Leather', 'Blue Dial/Black Leather']
  }
},
{
  id: 187,
  name: 'Dress Watch with Leather Strap',
  brand: 'Jaeger-LeCoultre',
  price: '₹750,000.00',
  image: 'https://img.jaeger-lecoultre.com/mega-menu-list-3/0a652a122ea0365fd7a0e11c5d4097c676a251ea.jpg',
  category: 'watches',
  inDemand: true,
  stock: 5,
  bestSeller: true,
  description: 'Ultra-thin dress watch with sophisticated elegance. This luxury timepiece features a hand-finished in-house movement, guilloché dial with applied hour markers, dauphine hands, sapphire crystal case back, and alligator leather strap for refined formal style.',
  details: {
      materials: 'Rose gold case, sapphire crystal, alligator leather strap',
      fit: 'Case diameter: 40mm. Thickness: 7.5mm. Lug width: 20mm.',
      care: 'Service every 5 years. Store in watch winder when not in use. Avoid water exposure.'
  },
  options: {
      color: ['Silver Dial/Black Leather', 'Champagne Dial/Brown Leather']
  }
},
{
  id: 188,
  name: 'Digital Smart Watch',
  brand: 'Apple',
  price: '₹45,000.00',
  image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-ultra2-202409_GEO_IN_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1725113864345',
  category: 'watches',
  inDemand: false,
  stock: 10,
  bestSeller: false,
  description: 'Advanced smartwatch with comprehensive health and connectivity features. This high-tech timepiece features a Retina display, ECG and blood oxygen sensors, always-on altimeter, GPS, cellular connectivity, and a wide range of customizable faces and bands.',
  details: {
      materials: 'Aluminum case, Ion-X glass, fluoroelastomer sport band',
      fit: 'Case sizes: 41mm or 45mm. Multiple band options available.',
      care: 'Wipe clean with a soft cloth. Water resistant to 50 meters but not suitable for diving.'
  },
  options: {
      size: ['41mm', '45mm'],
      color: ['Silver/White', 'Space Gray/Black', 'Gold/Pink']
  }
},
{
  id: 189,
  name: 'Field Watch',
  brand: 'Hamilton',
  price: '₹65,000.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLsc4UJtLfRbiKkmvkiG7q1_G5Ua74aMNmlg&s',
  category: 'watches',
  inDemand: true,
  stock: 22,
  bestSeller: false,
  description: 'Military-inspired field watch with rugged functionality. This heritage timepiece features a highly legible dial with 24-hour markings, luminous hands and indices, scratch-resistant sapphire crystal, automatic movement with 80-hour power reserve, and water resistance to 100 meters.',
  details: {
      materials: 'Stainless steel case, sapphire crystal, leather or NATO strap',
      fit: 'Case diameter: 42mm. Thickness: 11mm. Lug width: 20mm.',
      care: 'Wipe clean with a soft cloth. Service every 5-7 years.'
  },
  options: {
      color: ['Black Dial/Green NATO', 'Khaki Dial/Brown Leather', 'Black Dial/Black Leather']
  }
},
{
  id: 190,
  name: 'Ceramic Bezel Sports Watch',
  brand: 'Tudor',
  price: '₹325,000.00',
  image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/t/u/tudor-black-bay-m79210cnu-0001-multiple-6.jpg',
  category: 'watches',
  inDemand: true,
  stock: 12,
  bestSeller: false,
  description: 'Robust sports watch with vintage-inspired design elements. This precision timepiece features a unidirectional rotating ceramic bezel, domed sapphire crystal, in-house automatic movement with 70-hour power reserve, and water resistance to 200 meters for adventure-ready performance.',
  details: {
      materials: 'Stainless steel case and bracelet, ceramic bezel, sapphire crystal',
      fit: 'Case diameter: 41mm. Thickness: 14.4mm. Lug width: 22mm.',
      care: 'Rinse with fresh water after exposure to saltwater. Service every 7-10 years.'
  },
  options: {
      color: ['Black Dial/Black Bezel', 'Blue Dial/Blue Bezel', 'Black Dial/Fabric Strap']
  }
},
{
  id: 191,
  name: 'Skeleton Dial Watch',
  brand: 'Zenith',
  price: '₹550,000.00',
  image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/z/e/zenith-defy-03-9300-3620-78-i001.jpg',
  category: 'watches',
  inDemand: true,
  stock: 7,
  bestSeller: false,
  description: 'Avant-garde skeleton dial watch showcasing horological artistry. This exceptional timepiece features an openworked dial revealing the high-frequency El Primero movement, chronograph functionality, sapphire crystal case back, and a sophisticated fusion of technical innovation and artistic design.',
  details: {
      materials: 'Stainless steel case, sapphire crystal front and back, alligator leather strap',
      fit: 'Case diameter: 42mm. Thickness: 14mm. Lug width: 22mm.',
      care: 'Service every 5 years. Store in watch winder when not in use. Avoid magnetic fields.'
  },
  options: {
      color: ['Silver Skeleton/Black Leather', 'Black Skeleton/Black Leather']
  }
},
{
  id: 192,
  name: 'GMT Travel Watch',
  brand: 'Rolex',
  price: '₹950,000.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OnP0wem69jvj0iI7l9y920z1BUdP4wzimw&s',
  category: 'watches',
  inDemand: true,
  stock: 10,
  bestSeller: true,
  description: 'Iconic dual time zone watch designed for global travelers. This prestigious timepiece features a bidirectional rotatable 24-hour bezel, additional GMT hand, superlative chronometer certified movement, and the brand\'s signature Oyster case with water resistance to 100 meters.',
  details: {
      materials: 'Oystersteel case and bracelet, Cerachrom ceramic bezel, sapphire crystal',
      fit: 'Case diameter: 40mm. Thickness: 12mm. Oyster bracelet with Easylink extension.',
      care: 'Service every 10 years. Rinse with fresh water after exposure to saltwater.'
  },
  options: {
      color: ['Black/Blue Bezel', 'Black/Red Bezel', 'Blue Dial']
  }
},

// Sunglasses (IDs 193-202)
{
  id: 193,
  name: 'Classic Aviator Sunglasses',
  brand: 'Ray-Ban',
  price: '₹12,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE75inCLzT6-P0GdRjXtmF9KdHqya03kaG2w&s',
  category: 'sunglasses',
  inDemand: true,
  stock: 85,
  bestSeller: true,
  description: 'Iconic aviator sunglasses with timeless design. These classic shades feature a lightweight metal frame, teardrop-shaped lenses, adjustable nose pads, and signature bayonet temples for the authentic aviator look that has defined cool for generations.',
  details: {
      materials: 'Metal frame, glass or polycarbonate lenses with 100% UV protection',
      fit: 'Lens width: 58mm, Bridge: 14mm, Temple length: 135mm',
      care: 'Clean with lens cloth and lens cleaner. Store in protective case when not in use.'
  },
  options: {
      size: ['58mm', '62mm'],
      color: ['Gold/Green', 'Gold/Brown', 'Black/Grey']
  }
},
{
  id: 194,
  name: 'Acetate Frame Sunglasses',
  brand: 'Persol',
  price: '₹18,900.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5107gU9yZlDA0ridBTNUwPZYmskkCiwWjCg&s',
  category: 'sunglasses',
  inDemand: true,
  stock: 42,
  bestSeller: false,
  description: 'Italian-crafted acetate sunglasses with vintage appeal. These sophisticated shades feature hand-finished acetate frames, crystal lenses, the brand\'s signature arrow hinges, and Supreme Arrow metal accents for timeless Mediterranean style.',
  details: {
      materials: 'Acetate frame, crystal glass lenses with 100% UV protection',
      fit: 'Lens width: 54mm, Bridge: 18mm, Temple length: 145mm',
      care: 'Clean with lens cloth and mild soap. Avoid high temperatures that could warp acetate.'
  },
  options: {
      size: ['52mm', '54mm', '56mm'],
      color: ['Havana/Brown', 'Black/Green', 'Honey/Blue']
  }
},
{
  id: 195,
  name: 'Round Metal Sunglasses',
  brand: 'Oliver Peoples',
  price: '₹28,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1Xu3CWIXWIGnB6J2q6mGV_3E7FZdKxdfhQ&s',
  category: 'sunglasses',
  inDemand: false,
  stock: 10,
  bestSeller: false,
  description: 'Refined round sunglasses with vintage-inspired design. These premium shades feature a lightweight titanium frame, mineral glass lenses, filigree detailing, adjustable nose pads, and subtle branding for sophisticated retro style with modern craftsmanship.',
  details: {
      materials: 'Titanium frame, mineral glass lenses with anti-reflective coating and 100% UV protection',
      fit: 'Lens width: 47mm, Bridge: 22mm, Temple length: 145mm',
      care: 'Clean with lens cloth and lens cleaner. Store in protective case when not in use.'
  },
  options: {
      color: ['Gold/Green', 'Antique Gold/Blue', 'Silver/Grey']
  }
},
{
  id: 196,
  name: 'Polarized Wayfarer Sunglasses',
  brand: 'Maui Jim',
  price: '₹16,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznRoslIamDEWKK3_yOj6Ps-pLiL7GkISHaw&s',
  category: 'sunglasses',
  inDemand: true,
  stock: 58,
  bestSeller: false,
  description: 'High-performance polarized sunglasses with wayfarer-inspired shape. These premium shades feature the brand\'s patented PolarizedPlus2® lens technology that eliminates glare and enhances color, durable nylon frame, and spring hinges for comfort during active outdoor pursuits.',
  details: {
      materials: 'Nylon frame, polarized polycarbonate lenses with 100% UV protection',
      fit: 'Lens width: 55mm, Bridge: 17mm, Temple length: 140mm',
      care: 'Rinse with fresh water after exposure to saltwater. Clean with lens cloth and mild soap.'
  },
  options: {
      color: ['Matte Black/Neutral Grey', 'Tortoise/Bronze', 'Blue/Blue Hawaii']
  }
},
{
  id: 197,
  name: 'Luxury Oversized Sunglasses',
  brand: 'Gucci',
  price: '₹32,000.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYtEUmrE-Ff7jnWGJ5RPJLZ0vN8D0IV-TR3w&s',
  category: 'sunglasses',
  inDemand: true,
  stock: 35,
  bestSeller: true,
  description: 'Statement oversized sunglasses with bold designer aesthetic. These luxury shades feature an acetate frame with exaggerated proportions, gradient lenses, signature web stripe detail on temples, and interlocking G logo for unmistakable brand identity.',
  details: {
      materials: 'Acetate frame, gradient lenses with 100% UV protection',
      fit: 'Lens width: 56mm, Bridge: 18mm, Temple length: 145mm',
      care: 'Clean with lens cloth and mild soap. Store in protective case when not in use.'
  },
  options: {
      color: ['Black/Grey Gradient', 'Havana/Brown Gradient', 'Transparent/Green Gradient']
  }
},
{
  id: 198,
  name: 'Retro Square Sunglasses',
  brand: 'Saint Laurent',
  price: '₹28,900.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmQpp04JjqLTtFdmguLPEyrPq3DTweObECw&s',
  category: 'sunglasses',
  inDemand: false,
  stock: 30,
  bestSeller: false,
  description: 'Sophisticated square sunglasses with vintage-inspired design. These luxury shades feature a bold acetate frame, flat top silhouette, signature metal accents at temples, and minimalist branding for a timeless yet contemporary aesthetic.',
  details: {
      materials: 'Acetate frame, nylon lenses with 100% UV protection',
      fit: 'Lens width: 53mm, Bridge: 18mm, Temple length: 145mm',
      care: 'Clean with lens cloth and mild soap. Avoid high temperatures.'
  },
  options: {
      color: ['Black/Grey', 'Havana/Brown', 'Crystal/Green']
  }
},
{
  id: 199,
  name: 'Sport Wrap Sunglasses',
  brand: 'Oakley',
  price: '₹14,200.00',
  image: 'https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/o/k/ok9343934308_3_lar.jpg',
  category: 'sunglasses',
  inDemand: true,
  stock: 72,
  bestSeller: false,
  description: 'High-performance wrap sunglasses designed for athletic activities. These technical shades feature the brand\'s proprietary O Matter® frame material, Prizm™ lens technology for enhanced contrast, no-slip Unobtainium® nose pads and temple tips, and a semi-rimless design for unobstructed vision.',
  details: {
      materials: 'O Matter® frame, Prizm™ lenses with 100% UV protection and impact resistance',
      fit: 'Lens width: 59mm, Bridge: 12mm, Temple length: 130mm',
      care: 'Rinse with fresh water after use. Clean with lens cloth and mild soap.'
  },
  options: {
      color: ['Matte Black/Prizm Road', 'Polished White/Prizm Trail', 'Matte Navy/Prizm Deep Water']
  }
},
{
  id: 200,
  name: 'Titanium Frame Sunglasses',
  brand: 'Dita',
  price: '₹42,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqhiiEo46xd_OGrg1FXOnPUfL8NxJe47LOw&s',
  category: 'sunglasses',
  inDemand: true,
  stock: 18,
  bestSeller: false,
  description: 'Ultra-premium titanium sunglasses with exceptional craftsmanship. These luxury shades feature Japanese titanium construction, custom-engineered hinges, diamond-cut detailing, anti-reflective coated lenses, and hand-finished components for unparalleled quality and sophistication.',
  details: {
      materials: 'Titanium frame, mineral glass lenses with anti-reflective coating and 100% UV protection',
      fit: 'Lens width: 52mm, Bridge: 21mm, Temple length: 145mm',
      care: 'Clean with lens cloth and lens cleaner. Store in protective case when not in use.'
  },
  options: {
      color: ['Antique Gold/Grey', 'Black/Black', 'Silver/Blue']
  }
},
{
  id: 201,
  name: 'Clubmaster Sunglasses',
  brand: 'Ray-Ban',
  price: '₹13,800.00',
  image: 'https://india.ray-ban.com/media/catalog/product//0/r/0rb44166013151_2.jpg',
  category: 'sunglasses',
  inDemand: true,
  stock: 65,
  bestSeller: false,
  description: 'Iconic browline sunglasses with retro appeal. These classic shades feature a combination of acetate and metal construction, distinctive browline design, crystal lenses, and adjustable nose pads for a sophisticated vintage aesthetic that never goes out of style.',
  details: {
      materials: 'Acetate and metal frame, crystal lenses with 100% UV protection',
      fit: 'Lens width: 51mm, Bridge: 21mm, Temple length: 145mm',
      care: 'Clean with lens cloth and mild soap. Store in protective case when not in use.'
  },
  options: {
      size: ['49mm', '51mm'],
      color: ['Black/Green', 'Tortoise/Brown', 'Black/Blue']
  }
},
{
  id: 202,
  name: 'Foldable Pocket Sunglasses',
  brand: 'Persol',
  price: '₹22,500.00',
  image: 'https://assets2.persol.com/cdn-record-files-pi/4cd79376-6f4b-4754-95f8-a35e0060d1b5/dbe9dc93-b001-4cc4-ae86-aed800a8c3e9/0PO0714__24_S3__P21__shad__fldg.png?impolicy=HB_parameters&wid=400&cropnorth=-7&cropsouth=-8',
  category: 'sunglasses',
  inDemand: true,
  stock: 28,
  bestSeller: true,
  description: 'Premium foldable sunglasses with innovative design. These sophisticated shades feature a patented folding mechanism at bridge and temples, hand-crafted acetate frame, crystal lenses, signature arrow hinges, and compact folded size for convenient portability without sacrificing style.',
  details: {
      materials: 'Acetate frame, crystal lenses with 100% UV protection',
      fit: 'Lens width: 54mm, Bridge: 18mm, Temple length: 140mm',
      care: 'Clean with lens cloth and mild soap. Handle folding mechanism with care.'
  },
  options: {
      color: ['Havana/Brown', 'Black/Green', 'Honey/Light Blue']
  }
},

// Belts (IDs 203-212)
{
  id: 203,
  name: 'Reversible Leather Belt',
  brand: 'Salvatore Ferragamo',
  price: '₹32,000.00',
  image: 'https://m.media-amazon.com/images/I/71-yoyiRlnL._AC_UY1100_.jpg',
  category: 'belts',
  inDemand: true,
  stock: 45,
  bestSeller: true,
  description: 'Versatile reversible belt crafted from premium leather. This luxury accessory features smooth calfskin on one side and textured leather on the reverse, the brand\'s iconic Gancini buckle in polished palladium, and a simple mechanism to switch between black and brown for maximum versatility.',
  details: {
      materials: 'Calfskin leather with palladium-plated hardware',
      fit: 'Width: 3.5cm. Available in sizes 85-120cm.',
      care: 'Wipe clean with a soft, dry cloth. Store rolled when not in use.'
  },
  options: {
      size: ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm'],
      color: ['Black/Brown']
  }
},
{
  id: 204,
  name: 'Gancini Buckle Belt',
  brand: 'Ferragamo',
  price: '₹28,500.00',
  image: 'https://m.media-amazon.com/images/I/514bshu6wXL._AC_UY1100_.jpg',
  category: 'belts',
  inDemand: true,
  stock: 32,
  bestSeller: false,
  description: 'Signature belt featuring the iconic Gancini buckle. This refined accessory is crafted from smooth calfskin leather with hand-painted edges, the brand\'s distinctive horseshoe-inspired buckle in polished gold finish, and impeccable Italian craftsmanship for enduring elegance.',
  details: {
      materials: 'Calfskin leather with gold-tone hardware',
      fit: 'Width: 3.5cm. Available in sizes 85-120cm.',
      care: 'Wipe clean with a soft, dry cloth. Avoid water exposure.'
  },
  options: {
      size: ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm'],
      color: ['Black', 'Brown', 'Navy']
  }
},
{
  id: 205,
  name: 'Woven Leather Belt',
  brand: 'Anderson\'s',
  price: '₹14,800.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9b-HrCp7d4HxTjigmPL69vMKltfk3fjh9Q&s',
  category: 'belts',
  inDemand: false,
  stock: 0,
  bestSeller: false,
  description: 'Artisanal woven leather belt handcrafted in Italy. This sophisticated accessory features intricately woven leather strips, a brushed nickel buckle, leather keeper, and elasticated construction that provides subtle flexibility for exceptional comfort throughout the day.',
  details: {
      materials: 'Woven calfskin leather with nickel-free buckle',
      fit: 'Width: 3.5cm. Available in sizes 85-120cm.',
      care: 'Wipe clean with a soft, dry cloth. Avoid prolonged sun exposure.'
  },
  options: {
      size: ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm'],
      color: ['Brown', 'Navy', 'Black', 'Tan']
  }
},
{
  id: 206,
  name: 'Monogram Buckle Belt',
  brand: 'Gucci',
  price: '₹42,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCOLkew3LvlCwyWHRBQMM441XBN7FI-9QKA&s',
  category: 'belts',
  inDemand: true,
  stock: 38,
  bestSeller: true,
  description: 'Iconic belt featuring the brand\'s signature interlocking G buckle. This luxury accessory is crafted from premium leather with a textured surface, antique-finish brass hardware, and the instantly recognizable double G motif for a timeless statement of designer style.',
  details: {
      materials: 'Leather with brass hardware',
      fit: 'Width: 4cm. Available in sizes 85-120cm.',
      care: 'Wipe clean with a soft, dry cloth. Store in dust bag when not in use.'
  },
  options: {
      size: ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm'],
      color: ['Black', 'Brown', 'Tan']
  }
},
{
  id: 207,
  name: 'Suede Belt',
  brand: 'Brunello Cucinelli',
  price: '₹35,000.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70UiyTwdBDmufOS3U-FZjdDS_fXKktLVwJw&s',
  category: 'belts',
  inDemand: true,
  stock: 22,
  bestSeller: false,
  description: 'Luxurious suede belt with understated elegance. This refined accessory features soft Italian suede construction, a minimalist rectangular buckle in brushed palladium, hand-stitched detailing, and the brand\'s signature attention to quality for sophisticated casual style.',
  details: {
      materials: 'Italian suede with palladium-finish hardware',
      fit: 'Width: 3.5cm. Available in sizes 85-120cm.',
      care: 'Brush gently to remove dust. Use suede protector spray. Avoid water exposure.'
  },
  options: {
      size: ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm'],
      color: ['Taupe', 'Navy', 'Brown']
  }
},
{
  id: 208,
  name: 'Braided Leather Belt',
  brand: 'Tod\'s',
  price: '₹18,900.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlB54aTUfhK5VXuMovn52xsU7LY78JMub0CQ&s',
  category: 'belts',
  inDemand: false,
  stock: 10,
  bestSeller: false,
  description: 'Sophisticated braided leather belt with Italian craftsmanship. This versatile accessory features hand-braided leather construction, a polished silver-tone buckle, leather keeper, and a slightly elastic quality that provides comfort while maintaining its shape.',
  details: {
      materials: 'Braided calfskin leather with silver-tone hardware',
      fit: 'Width: 3.5cm. Available in sizes 85-120cm.',
      care: 'Wipe clean with a soft, dry cloth. Avoid water exposure.'
  },
  options: {
      size: ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm'],
      color: ['Brown', 'Navy', 'Black']
  }
},
{
  id: 209,
  name: 'Canvas Web Belt',
  brand: 'Polo Ralph Lauren',
  price: '₹8,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gQb8sRqjX5Cs-qZmE6jdW_DtVYb7IV_e-g&s',
  category: 'belts',
  inDemand: true,
  stock: 55,
  bestSeller: false,
  description: 'Preppy canvas web belt with signature styling. This casual accessory features a durable cotton webbing strap with leather trim, an antique-finish brass buckle with embossed logo, and adjustable sizing for a relaxed yet refined addition to weekend outfits.',
  details: {
      materials: 'Cotton webbing with leather trim and brass hardware',
      fit: 'Width: 3.8cm. One size adjustable up to 120cm.',
      care: 'Spot clean with mild soap and water. Air dry.'
  },
  options: {
      color: ['Navy/Brown Leather', 'Green/Brown Leather', 'Khaki/Brown Leather', 'Black/Black Leather']
  }
},
{
  id: 210,
  name: 'Textured Leather Belt',
  brand: 'Bottega Veneta',
  price: '₹32,500.00',
  image: 'https://assets.ajio.com/medias/sys_master/root/20230614/yxJX/6489a8c442f9e729d7410156/-1117Wx1400H-410385333-3172-MODEL.jpg',
  category: 'belts',
  inDemand: true,
  stock: 18,
  bestSeller: false,
  description: 'Sophisticated belt featuring the brand\'s signature intrecciato weave. This luxury accessory showcases the iconic hand-woven leather technique, a sleek rectangular buckle in brushed palladium, and impeccable Italian craftsmanship for subtle yet distinctive style.',
  details: {
      materials: 'Intrecciato-woven leather with palladium-finish hardware',
      fit: 'Width: 3.5cm. Available in sizes 85-120cm.',
      care: 'Wipe clean with a soft, dry cloth. Store rolled when not in use.'
  },
  options: {
      size: ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm'],
      color: ['Black', 'Dark Brown', 'Navy']
  }
},
{
  id: 211,
  name: 'Slim Dress Belt',
  brand: 'Hugo Boss',
  price: '₹12,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2sSggyt9JdYN6gg2XRGeuGaguKViAotF4oA&s',
  category: 'belts',
  inDemand: true,
  stock: 48,
  bestSeller: false,
  description: 'Refined slim belt designed for formal wear. This elegant accessory features smooth leather construction, a sleek rectangular buckle with subtle logo detail, hand-finished edges, and a narrow width that pairs perfectly with tailored trousers and suits.',
  details: {
      materials: 'Calfskin leather with silver-tone hardware',
      fit: 'Width: 3cm. Available in sizes 85-120cm.',
      care: 'Wipe clean with a soft, dry cloth. Store rolled when not in use.'
  },
  options: {
      size: ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm'],
      color: ['Black', 'Dark Brown']
  }
},
{
  id: 212,
  name: 'Double G Buckle Belt',
  brand: 'Gucci',
  price: '₹38,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6WdNTuE_FEoJ856_yhPhIOY5W0EToQwoUw&s',
  category: 'belts',
  inDemand: true,
  stock: 32,
  bestSeller: true,
  description: 'Iconic belt featuring the brand\'s signature double G buckle. This statement accessory is crafted from premium grained leather, showcases the instantly recognizable interlocking G motif in antique brass finish, and represents a timeless symbol of luxury fashion.',
  details: {
      materials: 'Grained leather with brass hardware',
      fit: 'Width: 4cm. Available in sizes 85-120cm.',
      care: 'Wipe clean with a soft, dry cloth. Store in dust bag when not in use.'
  },
  options: {
      size: ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm'],
      color: ['Black', 'Brown', 'Red']
  }
},
{
  id: 213,
  name: 'Organic Slim Fit Tee',
  brand: 'Everlane',
  price: '₹3,200.00',
  image: 'https://image1.superdry.com/static/images/optimised/zoom/upload9223368955665685736.jpg',
  category: 'tshirts',
  inDemand: true,
  stock: 85,
  bestSeller: false,
  description: 'Sustainably made slim-fit t-shirt crafted from organic cotton. Features a clean neckline, precise fit through the shoulders and chest, and slightly tapered waist for a modern silhouette.',
  details: {
      materials: '100% Organic Cotton',
      fit: 'Slim fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold. Tumble dry low. Wash with similar colors.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      color: ['White', 'Black', 'Heather Grey', 'Navy']
  }
},
{
  id: 214,
  name: 'Vintage Wash Graphic Tee',
  brand: 'AllSaints',
  price: '₹6,800.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0lGvf8endVrpXd042O3SYJfXHbaSWDXuFAQ&s',
  category: 'tshirts',
  inDemand: true,
  stock: 62,
  bestSeller: true,
  description: 'Distressed graphic t-shirt with vintage-inspired wash treatment. Features a worn-in look, subtle logo print, and raw-edge details for an effortlessly cool aesthetic with rock and roll attitude.',
  details: {
      materials: '100% Cotton with garment wash treatment',
      fit: 'Regular fit with slight drape. Model is 6\'2" and wears size M.',
      care: 'Machine wash cold inside out. Do not tumble dry. Do not iron directly on print.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['Vintage Black', 'Washed Grey', 'Faded Red']
  }
},
{
  id: 215,
  name: 'Pima Cotton Pocket Tee',
  brand: 'James Perse',
  price: '₹7,500.00',
  image: 'https://patrickassaraf.com/cdn/shop/products/P600CP-336-16513_800x.jpg?v=1675964974',
  category: 'tshirts',
  inDemand: false,
  stock: 45,
  bestSeller: false,
  description: 'Luxury everyday t-shirt crafted from ultra-soft Pima cotton. Features a clean chest pocket, bound neckline, and a relaxed fit through the body for elevated casual style with exceptional comfort.',
  details: {
      materials: '100% Pima Cotton',
      fit: 'Relaxed fit. Model is 5\'11" and wears size M.',
      care: 'Hand wash cold or machine wash gentle cycle. Lay flat to dry.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['White', 'Black', 'Heather Grey', 'Olive']
  }
},
{
  id: 216,
  name: 'Heavyweight Logo T-Shirt',
  brand: 'Carhartt WIP',
  price: '₹4,800.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JQjROhKz5o5fvY_cNEVyja2ExUnFRGlgwQ&s',
  category: 'tshirts',
  inDemand: true,
  stock: 98,
  bestSeller: false,
  description: 'Durable workwear-inspired t-shirt with signature logo patch. Features heavyweight cotton construction, reinforced seams, and a classic fit for authentic utilitarian style with urban appeal.',
  details: {
      materials: '100% Heavyweight Cotton',
      fit: 'Regular fit. Model is 6\'1" and wears size L.',
      care: 'Machine wash cold. Tumble dry medium.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Black', 'White', 'Hamilton Brown', 'Dark Navy']
  }
},
{
  id: 217,
  name: 'Striped Breton T-Shirt',
  brand: 'A.P.C.',
  price: '₹8,900.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitZzxGtA6XxryC-NG2yjmZNkgLfYX08edkA&s',
  category: 'tshirts',
  inDemand: true,
  stock: 72,
  bestSeller: true,
  description: 'Classic Breton-inspired striped t-shirt made from premium cotton jersey. Features traditional horizontal stripes, a clean crew neckline, and a slim fit for timeless French style with contemporary proportions.',
  details: {
      materials: '100% Cotton',
      fit: 'Slim fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold. Reshape and lay flat to dry.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Navy/White', 'Black/White', 'Red/White']
  }
},
{
  id: 218,
  name: 'Ribbed Athletic Tank',
  brand: 'Under Armour',
  price: '₹3,900.00',
  image: 'https://m.media-amazon.com/images/I/71us8G-JzHS._AC_UY1100_.jpg',
  category: 'tanks',
  inDemand: true,
  stock: 65,
  bestSeller: true,
  description: 'Performance-oriented ribbed tank designed for intense workouts. Features moisture-wicking fabric, four-way stretch construction, anti-odor technology, and a compression fit that supports muscles while allowing full range of motion.',
  details: {
      materials: '88% Polyester, 12% Elastane',
      fit: 'Compression fit. Model is 6\'2" and wears size L.',
      care: 'Machine wash cold with like colors. Tumble dry low.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Black', 'White', 'Red', 'Blue']
  }
},
{
  id: 219,
  name: 'Organic Cotton Relaxed Tank',
  brand: 'Everlane',
  price: '₹2,800.00',
  image: 'https://herroom.scene7.com/is/image/Andraweb/c-in2-cin201-4226-gs?$z$',
  category: 'tanks',
  inDemand: false,
  stock: 42,
  bestSeller: false,
  description: 'Sustainably made relaxed tank crafted from organic cotton. Features a slightly oversized fit, raw edge details, and a scoop neckline for an effortless everyday look with eco-conscious credentials.',
  details: {
      materials: '100% Organic Cotton',
      fit: 'Relaxed fit. Model is 5\'10" and wears size S.',
      care: 'Machine wash cold. Tumble dry low.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['White', 'Black', 'Sage', 'Sand']
  }
},
{
  id: 220,
  name: 'Mesh Performance Tank',
  brand: 'Nike',
  price: '₹4,200.00',
  image: 'https://tse3.mm.bing.net/th?id=OIP.odmjOdG_Hfop4bfdcyFUhQHaKX&pid=Api&P=0&h=180',
  category: 'tanks',
  inDemand: true,
  stock: 58,
  bestSeller: false,
  description: 'Technical training tank with strategic ventilation. Features Dri-FIT technology to wick away sweat, mesh panels for enhanced airflow, racerback design for unrestricted movement, and reflective details for low-light visibility.',
  details: {
      materials: '100% Recycled Polyester',
      fit: 'Athletic fit. Model is 5\'9" and wears size M.',
      care: 'Machine wash cold. Line dry.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['Black', 'Grey', 'Neon Yellow', 'Blue']
  }
},
{
  id: 221,
  name: 'Luxury Silk Blend Tank',
  brand: 'Vince',
  price: '₹12,500.00',
  image: 'https://i5.walmartimages.com/asr/88a0a8f3-bcab-4b46-95c3-8fc461512788_1.fb386c901c93a1baa69142daa6c927d3.jpeg',
  category: 'tanks',
  inDemand: false,
  stock: 32,
  bestSeller: false,
  description: 'Elevated tank top crafted from silk and modal blend. Features a luxurious drape, satin-trimmed neckline and armholes, and a slightly longer length for sophisticated layering or standalone wear.',
  details: {
      materials: '70% Modal, 30% Silk',
      fit: 'Relaxed fit. Model is 5\'11" and wears size S.',
      care: 'Dry clean only or hand wash cold with mild detergent.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L'],
      color: ['Ivory', 'Black', 'Navy', 'Blush']
  }
},
{
  id: 222,
  name: 'Graphic Print Muscle Tank',
  brand: 'Diesel',
  price: '₹7,800.00',
  image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d0254bb5-aa3d-403d-9319-8324c556aa8f/dri-fit-vintage-graphic-fitness-muscle-tank-8XpTmD.png',
  category: 'tanks',
  inDemand: true,
  stock: 45,
  bestSeller: true,
  description: 'Bold statement tank with edgy graphic print. Features distressed logo design, raw-edge armholes, dropped armholes, and a relaxed fit for authentic streetwear style with attitude.',
  details: {
      materials: '100% Cotton',
      fit: 'Relaxed fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold inside out. Do not tumble dry.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Black', 'White', 'Grey']
  }
},
{
  id: 223,
  name: 'Striped Nautical Tank',
  brand: 'Saint James',
  price: '₹8,900.00',
  image: 'https://tse1.mm.bing.net/th?id=OIP.xcfzHufWyBUlJ3lO71av-gHaKB&pid=Api&P=0&h=180',
  category: 'tanks',
  inDemand: true,
  stock: 38,
  bestSeller: false,
  description: 'Classic Breton-inspired striped tank made in France. Features traditional horizontal navy and white stripes, heavyweight cotton construction, and a clean boat neckline for authentic maritime style with timeless appeal.',
  details: {
      materials: '100% Combed Cotton',
      fit: 'Regular fit. Model is 5\'10" and wears size M.',
      care: 'Machine wash cold. Reshape while damp and dry flat.'
  },
  options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      color: ['Navy/White', 'White/Navy', 'Red/White']
  }
},
{
  id: 224,
  name: 'Oxford Button-Down Shirt',
  brand: 'Brooks Brothers',
  price: '₹11,500.00',
  image: 'http://images.bloomingdales.com/is/image/BLM/products/1/optimized/8483131_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg',
  category: 'shirts',
  inDemand: true,
  stock: 62,
  bestSeller: true,
  description: 'Iconic American-made oxford cloth button-down shirt. Features a soft roll collar, box pleat, locker loop, and traditional fit for a timeless preppy aesthetic that works for both business and casual occasions.',
  details: {
      materials: '100% Supima Cotton Oxford',
      fit: 'Traditional fit. Model is 6\'0" and wears size M.',
      care: 'Machine wash cold. Tumble dry low. Iron if needed.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['White', 'Blue', 'Pink', 'Yellow']
  }
},
{
  id: 225,
  name: 'Linen Resort Shirt',
  brand: 'Orlebar Brown',
  price: '₹15,800.00',
  image: 'https://bananarepublic.gap.com/webcontent/0053/400/673/cn53400673.jpg',
  category: 'shirts',
  inDemand: true,
  stock: 45,
  bestSeller: false,
  description: 'Premium linen shirt designed for warm-weather occasions. Features a camp collar, straight hem, mother-of-pearl buttons, and lightweight breathable fabric for sophisticated resort style.',
  details: {
      materials: '100% Italian Linen',
      fit: 'Regular fit. Model is 6\'1" and wears size M.',
      care: 'Machine wash cold or dry clean. Iron on medium heat while slightly damp.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['White', 'Navy', 'Sage Green', 'Sand']
  }
},
{
  id: 226,
  name: 'Japanese Denim Shirt',
  brand: 'Visvim',
  price: '₹32,000.00',
  image: 'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/2/02-09-2021_ML_121205007004-IN_7_1.jpg',
  category: 'shirts',
  inDemand: false,
  stock: 28,
  bestSeller: false,
  description: 'Artisanal denim shirt crafted from Japanese selvedge fabric. Features hand-finished details, natural indigo dye, horn buttons, reinforced elbow patches, and a perfectly worn-in wash for premium workwear-inspired style.',
  details: {
      materials: '100% Japanese Selvedge Cotton',
      fit: 'Relaxed fit. Model is 6\'0" and wears size 3.',
      care: 'Hand wash cold or dry clean. Hang dry.'
  },
  options: {
      size: ['2', '3', '4', '5'],
      color: ['Indigo', 'Light Wash']
  }
},
{
  id: 227,
  name: 'Flannel Check Shirt',
  brand: 'Filson',
  price: '₹14,200.00',
  image: 'https://i.pinimg.com/originals/18/7e/24/187e24e1564c9f9e9b58259087eb0dfb.jpg',
  category: 'shirts',
  inDemand: true,
  stock: 72,
  bestSeller: true,
  description: 'Rugged brushed cotton flannel shirt with heritage design. Features a button-down collar, chest pockets with button flaps, adjustable cuffs, and a relaxed fit for comfort during outdoor activities.',
  details: {
      materials: '100% Cotton Flannel',
      fit: 'Regular fit. Model is 6\'2" and wears size L.',
      care: 'Machine wash warm. Tumble dry medium.'
  },
  options: {
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['Red/Black Check', 'Green/Black Check', 'Blue/Black Check']
  }
},
{
  id: 228,
  name: 'Silk Evening Shirt',
  brand: 'Tom Ford',
  price: '₹58,000.00',
  image: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mini-monogram-silk-evening-shirt--HTS9PWDIV001_PM1_Cropped%20view.png?wid=2400&hei=2400',
  category: 'shirts',
  inDemand: false,
  stock: 18,
  bestSeller: false,
  description: 'Luxurious formal shirt crafted from Italian silk. Features a spread collar, French cuffs, mother-of-pearl buttons, and impeccable tailoring for sophisticated evening wear with unparalleled elegance.',
  details: {
      materials: '100% Italian Silk',
      fit: 'Slim fit. Model is 6\'1" and wears size 40.',
      care: 'Dry clean only.'
  },
  options: {
      size: ['38', '39', '40', '41', '42', '43'],
      color: ['White', 'Black', 'Ivory']
  }
},
{
  id: 229,
  name: 'Slim Tapered Selvedge Jeans',
  brand: 'A.P.C.',
  price: '₹18,500.00',
  image: 'https://lsco.scene7.com/is/image/lsco/A58770000-detail1-pdp?fmt=jpeg&qlt=70&resMode=bisharp&fit=crop,0&op_usm=1.25,0.6,8&wid=2000&hei=1800',
  category: 'jeans',
  inDemand: true,
  stock: 55,
  bestSeller: true,
  description: 'Iconic raw selvedge denim jeans with minimalist design. Features Japanese denim construction, clean silhouette with no external branding, five-pocket styling, and signature selvedge outseam that develops unique patina with wear.',
  details: {
      materials: '100% Cotton Japanese selvedge denim',
      fit: 'Slim tapered fit. Model is 6\'1" and wears size 32.',
      care: 'Wash as infrequently as possible. When necessary, wash inside out in cold water and hang dry.'
  },
  options: {
      size: ['28', '29', '30', '31', '32', '33', '34', '36'],
      color: ['Indigo', 'Black']
  }
},
{
  id: 230,
  name: 'Relaxed Straight Jeans',
  brand: 'Levi\'s Vintage Clothing',
  price: '₹16,800.00',
  image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1064514_lifestyle?$rl_4x5_pdp$',
  category: 'jeans',
  inDemand: true,
  stock: 68,
  bestSeller: false,
  description: 'Authentic reproduction of classic 1950s jeans. Features period-correct details like a higher rise, wider leg, selvedge denim from Cone Mills, two-horse leather patch, and vintage-inspired wash for timeless Americana style.',
  details: {
      materials: '100% Cotton Cone Mills Selvedge Denim',
      fit: 'Relaxed straight fit. Model is 6\'0" and wears size 32.',
      care: 'Machine wash cold inside out. Hang dry.'
  },
  options: {
      size: ['28', '29', '30', '31', '32', '33', '34', '36', '38'],
      color: ['Rigid', '1955 Wash']
  }
},
{
  id: 231,
  name: 'Skinny Stretch Jeans',
  brand: 'Saint Laurent',
  price: '₹42,000.00',
  image: 'https://pantproject.com/cdn/shop/files/DSC6905.jpg?v=1744900836',
  category: 'jeans',
  inDemand: true,
  stock: 42,
  bestSeller: true,
  description: 'Luxurious skinny jeans with rock and roll aesthetic. Features premium stretch denim, a low rise waist, ultra-slim fit throughout the leg, and minimal branding for a sleek, edgy look that embodies the brand\'s rebellious spirit.',
  details: {
      materials: '98% Cotton, 2% Elastane',
      fit: 'Skinny fit. Model is 6\'1" and wears size 32.',
      care: 'Machine wash cold inside out. Hang dry.'
  },
  options: {
      size: ['28', '29', '30', '31', '32', '33', '34'],
      color: ['Used Black', 'Raw Black', 'Indigo']
  }
},
{
  id: 232,
  name: 'Wide Leg Carpenter Jeans',
  brand: 'Carhartt WIP',
  price: '₹12,500.00',
  image: 'https://assets.ajio.com/medias/sys_master/root/20230613/98CW/64889a6a42f9e729d73f8247/-473Wx593H-466268646-navy-MODEL.jpg',
  category: 'jeans',
  inDemand: false,
  stock: 38,
  bestSeller: false,
  description: 'Workwear-inspired wide leg jeans with utility details. Features heavyweight denim, hammer loop, tool pockets, reinforced stitching, and a relaxed fit through the leg for authentic workwear style with urban appeal.',
  details: {
      materials: '100% Cotton',
      fit: 'Wide leg fit. Model is 6\'1" and wears size 32.',
      care: 'Machine wash cold. Tumble dry medium.'
  },
  options: {
      size: ['28', '30', '32', '34', '36', '38'],
      color: ['Blue', 'Black', 'Stone Wash']
  }
},
{
  id: 233,
  name: 'Vintage Wash Dad Jeans',
  brand: 'Acne Studios',
  price: '₹22,500.00',
  image: 'https://pictures.kartmax.in/live/sites/aPfvUDpPwMn1ZadNKhP7/product-images/8907787958062/660/HLJN000878_1.jpg',
  category: 'jeans',
  inDemand: true,
  stock: 52,
  bestSeller: false,
  description: 'Contemporary interpretation of classic dad jeans. Features a comfortable mid-rise waist, relaxed fit through the thigh with a slight taper, premium denim with vintage wash treatment, and minimal detailing for Scandinavian-inspired style.',
  details: {
      materials: '100% Cotton',
      fit: 'Relaxed tapered fit. Model is 6\'1" and wears size 32.',
      care: 'Machine wash cold inside out. Tumble dry low.'
  },
  options: {
      size: ['28', '29', '30', '31', '32', '33', '34', '36'],
      color: ['Light Vintage Wash', 'Mid Blue', 'Stonewashed Black']
  }
},
{
  id: 234,
  name: 'Retro Basketball Sneakers',
  brand: 'Nike',
  price: '₹12,500.00',
  image: 'https://i.shgcdn.com/8866d26e-214d-4c69-9d43-0ffdd14c597f/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
  category: 'sneakers',
  inDemand: true,
  stock: 85,
  bestSeller: true,
  description: 'Iconic basketball-inspired sneakers with vintage appeal. Features premium leather upper, air cushioning technology, padded collar and tongue, and the brand\'s signature swoosh logo for authentic retro athletic style.',
  details: {
      materials: 'Leather upper, rubber outsole',
      fit: 'True to size. Order your regular shoe size.',
      care: 'Wipe clean with a soft cloth. Use leather cleaner for stains.'
  },
  options: {
      size: ['7', '8', '9', '10', '11', '12', '13'],
      color: ['White/Red', 'White/Blue', 'Black/White']
  }
},
{
  id: 235,
  name: 'Minimalist Leather Trainers',
  brand: 'Common Projects',
  price: '₹38,500.00',
  image: 'https://costosoitaliano.com/cdn/shop/files/sceinteis_SUEDE_COLOUR_SNEAKER_e088a8fc-482e-4520-9a8e-60c64dfa4f5d_580x.png?v=1736591111',
  category: 'sneakers',
  inDemand: true,
  stock: 42,
  bestSeller: false,
  description: 'Luxury minimalist sneakers handcrafted in Italy. Features premium Nappa leather, clean silhouette with no visible branding, signature gold serial numbers at the heel, and durable Margom soles for understated elegance.',
  details: {
      materials: 'Italian Nappa leather upper, leather lining, rubber sole',
      fit: 'True to size. Order your regular shoe size.',
      care: 'Wipe clean with a soft cloth. Use leather conditioner occasionally.'
  },
  options: {
      size: ['40', '41', '42', '43', '44', '45'],
      color: ['White', 'Black', 'Blush', 'Navy']
  }
},
{
  id: 236,
  name: 'Sustainable Canvas Sneakers',
  brand: 'Veja',
  price: '₹11,200.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUxOuJP5FbOE8boWaxaHgLKKMowB1NqEsWw&s',
  category: 'sneakers',
  inDemand: true,
  stock: 68,
  bestSeller: true,
  description: 'Eco-conscious sneakers made with sustainable materials. Features organic cotton canvas, wild rubber from the Amazon, recycled polyester lining, and the brand\'s distinctive V logo for responsible style with French minimalist design.',
  details: {
      materials: 'Organic cotton canvas upper, wild rubber sole, recycled polyester lining',
      fit: 'Runs narrow. Consider ordering half size up if you have wide feet.',
      care: 'Spot clean with mild soap and water. Air dry away from direct heat.'
  },
  options: {
      size: ['40', '41', '42', '43', '44', '45', '46'],
      color: ['White/Natural', 'Black/White', 'White/Cobalt']
  }
},
{
  id: 237,
  name: 'Chunky Sole Designer Sneakers',
  brand: 'Balenciaga',
  price: '₹75,000.00',
  image: 'https://hips.hearstapps.com/hmg-prod/images/designer-sneakera-1471965974-658338c090aa0.jpg?crop=0.668xw:1.00xh;0.138xw,0&resize=1200:*',
  category: 'sneakers',
  inDemand: true,
  stock: 32,
  bestSeller: false,
  description: 'Statement designer sneakers with bold, exaggerated proportions. Features a complex paneled construction, oversized silhouette, chunky sole unit, and subtle logo details for a contemporary luxury aesthetic that makes a strong style statement.',
  details: {
      materials: 'Mesh, nylon and leather upper, rubber sole',
      fit: 'Runs large. Consider ordering one size down.',
      care: 'Wipe clean with a soft damp cloth. Store with shoe trees.'
  },
  options: {
      size: ['39', '40', '41', '42', '43', '44', '45'],
      color: ['Triple Black', 'Triple White', 'Grey/Blue/Red']
  }
},
{
  id: 238,
  name: 'Knit Performance Runners',
  brand: 'Adidas',
  price: '₹14,500.00',
  image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/23e95755-136e-4b97-b0d0-86123a665f1a/nike-flyknit.jpg',
  category: 'sneakers',
  inDemand: false,
  stock: 48,
  bestSeller: false,
  description: 'Innovative performance running shoes with seamless knit construction. Features breathable Primeknit upper, responsive Boost foam cushioning, Continental rubber outsole, and a lightweight design for superior comfort and athletic performance.',
  details: {
      materials: 'Primeknit upper, Boost foam midsole, Continental rubber outsole',
      fit: 'True to size. Order your regular shoe size.',
      care: 'Remove dirt with a soft brush. Machine washable on gentle cycle in cold water. Air dry.'
  },
  options: {
      size: ['7', '8', '9', '10', '11', '12', '13'],
      color: ['Core Black', 'Cloud White', 'Signal Green', 'Solar Red']
  }
},
{
  id: 239,
  name: 'Acetate Frame Wayfarers',
  brand: 'Persol',
  price: '₹18,900.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5107gU9yZlDA0ridBTNUwPZYmskkCiwWjCg&s',
  category: 'sunglasses',
  inDemand: true,
  stock: 42,
  bestSeller: false,
  description: 'Italian-crafted acetate sunglasses with wayfarer-inspired shape. Features hand-finished acetate frames, crystal lenses, the brand\'s signature arrow hinges, and Supreme Arrow metal accents for timeless Mediterranean style.',
  details: {
      materials: 'Acetate frame, crystal glass lenses with 100% UV protection',
      fit: 'Lens width: 54mm, Bridge: 18mm, Temple length: 145mm',
      care: 'Clean with lens cloth and mild soap. Avoid high temperatures that could warp acetate.'
  },
  options: {
      size: ['52mm', '54mm', '56mm'],
      color: ['Havana/Brown', 'Black/Green', 'Honey/Blue']
  }
},
{
  id: 240,
  name: 'Round Metal Sunglasses',
  brand: 'Oliver Peoples',
  price: '₹28,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1Xu3CWIXWIGnB6J2q6mGV_3E7FZdKxdfhQ&s',
  category: 'sunglasses',
  inDemand: false,
  stock: 28,
  bestSeller: false,
  description: 'Refined round sunglasses with vintage-inspired design. Features a lightweight titanium frame, mineral glass lenses, filigree detailing, adjustable nose pads, and subtle branding for sophisticated retro style with modern craftsmanship.',
  details: {
      materials: 'Titanium frame, mineral glass lenses with anti-reflective coating and 100% UV protection',
      fit: 'Lens width: 47mm, Bridge: 22mm, Temple length: 145mm',
      care: 'Clean with lens cloth and lens cleaner. Store in protective case when not in use.'
  },
  options: {
      color: ['Gold/Green', 'Antique Gold/Blue', 'Silver/Grey']
  }
},
{
  id: 241,
  name: 'Oversized Square Sunglasses',
  brand: 'Gucci',
  price: '₹32,000.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYtEUmrE-Ff7jnWGJ5RPJLZ0vN8D0IV-TR3w&s',
  category: 'sunglasses',
  inDemand: true,
  stock: 35,
  bestSeller: true,
  description: 'Statement oversized sunglasses with bold designer aesthetic. Features an acetate frame with exaggerated proportions, gradient lenses, signature web stripe detail on temples, and interlocking G logo for unmistakable brand identity.',
  details: {
      materials: 'Acetate frame, gradient lenses with 100% UV protection',
      fit: 'Lens width: 56mm, Bridge: 18mm, Temple length: 145mm',
      care: 'Clean with lens cloth and mild soap. Store in protective case when not in use.'
  },
  options: {
      color: ['Black/Grey Gradient', 'Havana/Brown Gradient', 'Transparent/Green Gradient']
  }
},
{
  id: 242,
  name: 'Sport Wrap Polarized Sunglasses',
  brand: 'Oakley',
  price: '₹14,200.00',
  image: 'https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/o/k/ok9343934308_3_lar.jpg',
  category: 'sunglasses',
  inDemand: true,
  stock: 72,
  bestSeller: false,
  description: 'High-performance wrap sunglasses designed for athletic activities. Features the brand\'s proprietary O Matter® frame material, Prizm™ lens technology for enhanced contrast, no-slip Unobtainium® nose pads and temple tips, and a semi-rimless design for unobstructed vision.',
  details: {
      materials: 'O Matter® frame, Prizm™ polarized lenses with 100% UV protection and impact resistance',
      fit: 'Lens width: 59mm, Bridge: 12mm, Temple length: 130mm',
      care: 'Rinse with fresh water after use. Clean with lens cloth and mild soap.'
  },
  options: {
      color: ['Matte Black/Prizm Road', 'Polished White/Prizm Trail', 'Matte Navy/Prizm Deep Water']
  }
},
{
  id: 243,
  name: 'Foldable Pocket Sunglasses',
  brand: 'Persol',
  price: '₹22,500.00',
  image: 'https://assets2.persol.com/cdn-record-files-pi/4cd79376-6f4b-4754-95f8-a35e0060d1b5/dbe9dc93-b001-4cc4-ae86-aed800a8c3e9/0PO0714__24_S3__P21__shad__fldg.png?impolicy=HB_parameters&wid=400&cropnorth=-7&cropsouth=-8',
  category: 'sunglasses',
  inDemand: true,
  stock: 28,
  bestSeller: true,
  description: 'Premium foldable sunglasses with innovative design. Features a patented folding mechanism at bridge and temples, hand-crafted acetate frame, crystal lenses, signature arrow hinges, and compact folded size for convenient portability without sacrificing style.',
  details: {
      materials: 'Acetate frame, crystal lenses with 100% UV protection',
      fit: 'Lens width: 54mm, Bridge: 18mm, Temple length: 140mm',
      care: 'Clean with lens cloth and mild soap. Handle folding mechanism with care.'
  },
  options: {
      color: ['Havana/Brown', 'Black/Green', 'Honey/Light Blue']
  }
},
{
  id: 244,
  name: 'Automatic Chronograph Watch',
  brand: 'TAG Heuer',
  price: '₹185,000.00',
  image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/t/a/tag-heuer-carrera-cbn2a1aa-ba0643-multiple-2.jpg',
  category: 'watches',
  inDemand: true,
  stock: 28,
  bestSeller: true,
  description: 'Precision Swiss-made automatic chronograph watch with racing heritage. Features a stainless steel case, sapphire crystal with anti-reflective coating, in-house movement with 80-hour power reserve, and water resistance to 100 meters.',
  details: {
      materials: 'Stainless steel case and bracelet, sapphire crystal, ceramic bezel',
      fit: 'Case diameter: 44mm. Thickness: 14.5mm. Lug width: 22mm.',
      care: 'Regular service every 5-7 years recommended. Avoid magnetic fields and extreme temperatures.'
  },
  options: {
      color: ['Blue Dial/Steel Bracelet', 'Black Dial/Steel Bracelet', 'Black Dial/Leather Strap']
  }
},
{
  id: 245,
  name: 'Dive Watch',
  brand: 'Omega',
  price: '₹425,000.00',
  image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/o/m/omega-seamaster-210-30-42-20-10-001-large.jpg',
  category: 'watches',
  inDemand: true,
  stock: 15,
  bestSeller: false,
  description: 'Professional dive watch with legendary underwater heritage. Features a unidirectional rotating bezel, helium escape valve, highly luminous dial and hands, co-axial master chronometer movement, and water resistance to 300 meters.',
  details: {
      materials: 'Stainless steel case and bracelet, sapphire crystal, ceramic bezel',
      fit: 'Case diameter: 42mm. Thickness: 13.5mm. Lug width: 20mm.',
      care: 'Rinse with fresh water after exposure to saltwater. Service every 5-8 years.'
  },
  options: {
      color: ['Blue Dial/Blue Bezel', 'Black Dial/Black Bezel', 'White Dial/Blue Bezel']
  }
},
{
  id: 246,
  name: 'Dress Watch with Leather Strap',
  brand: 'Jaeger-LeCoultre',
  price: '₹750,000.00',
  image: 'https://img.jaeger-lecoultre.com/mega-menu-list-3/0a652a122ea0365fd7a0e11c5d4097c676a251ea.jpg',
  category: 'watches',
  inDemand: true,
  stock: 12,
  bestSeller: true,
  description: 'Ultra-thin dress watch with sophisticated elegance. Features a hand-finished in-house movement, guilloché dial with applied hour markers, dauphine hands, sapphire crystal case back, and alligator leather strap for refined formal style.',
  details: {
      materials: 'Rose gold case, sapphire crystal, alligator leather strap',
      fit: 'Case diameter: 40mm. Thickness: 7.5mm. Lug width: 20mm.',
      care: 'Service every 5 years. Store in watch winder when not in use. Avoid water exposure.'
  },
  options: {
      color: ['Silver Dial/Black Leather', 'Champagne Dial/Brown Leather']
  }
},
{
  id: 247,
  name: 'Pilot\'s Chronograph',
  brand: 'IWC',
  price: '₹650,000.00',
  image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/i/w/iwc-pilots-iw389101-large.jpg',
  category: 'watches',
  inDemand: true,
  stock: 8,
  bestSeller: false,
  description: 'Classic aviation-inspired pilot\'s chronograph with heritage design. Features a highly legible dial with luminous numerals and hands, in-house automatic movement with 7-day power reserve, soft-iron inner case for magnetic field protection, and vintage-inspired aesthetics.',
  details: {
      materials: 'Stainless steel case, sapphire crystal, calfskin leather strap',
      fit: 'Case diameter: 46mm. Thickness: 15.5mm. Lug width: 22mm.',
      care: 'Regular service every 5 years recommended. Keep away from strong magnetic fields.'
  },
  options: {
      color: ['Black Dial/Brown Leather', 'Blue Dial/Black Leather']
  }
},
{
  id: 248,
  name: 'GMT Travel Watch',
  brand: 'Rolex',
  price: '₹950,000.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OnP0wem69jvj0iI7l9y920z1BUdP4wzimw&s',
  category: 'watches',
  inDemand: true,
  stock: 10,
  bestSeller: true,
  description: 'Iconic dual time zone watch designed for global travelers. Features a bidirectional rotatable 24-hour bezel, additional GMT hand, superlative chronometer certified movement, and the brand\'s signature Oyster case with water resistance to 100 meters.',
  details: {
      materials: 'Oystersteel case and bracelet, Cerachrom ceramic bezel, sapphire crystal',
      fit: 'Case diameter: 40mm. Thickness: 12mm. Oyster bracelet with Easylink extension.',
      care: 'Service every 10 years. Rinse with fresh water after exposure to saltwater.'
  },
  options: {
      color: ['Black/Blue Bezel', 'Black/Red Bezel', 'Blue Dial']
  }
},
{
  id: 249,
  name: 'Minimalist Quartz Watch',
  brand: 'Junghans',
  price: '₹85,000.00',
  image: 'https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2018/12/1200x900-2.jpg',
  category: 'watches',
  inDemand: false,
  stock: 22,
  bestSeller: false,
  description: 'Bauhaus-inspired minimalist watch with German design heritage. Features a clean dial with slim markers, domed sapphire crystal, precision quartz movement, and a slim case profile for timeless sophistication with modernist principles.',
  details: {
      materials: 'Stainless steel case, sapphire crystal, leather strap',
      fit: 'Case diameter: 38mm. Thickness: 7.5mm. Lug width: 20mm.',
      care: 'Wipe clean with a soft cloth. Avoid water exposure with leather strap.'
  },
  options: {
      color: ['White Dial/Black Leather', 'Black Dial/Brown Leather', 'White Dial/Mesh Bracelet']
  }
},
{
  id: 250,
  name: 'Automatic Chronograph Watch',
  brand: 'TAG Heuer',
  price: '₹185,000.00',
  image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/t/a/tag-heuer-carrera-cbn2a1aa-ba0643-multiple-2.jpg',
  category: 'watches',
  inDemand: true,
  stock: 28,
  bestSeller: true,
  description: 'Precision Swiss-made automatic chronograph watch with racing heritage. Features a stainless steel case, sapphire crystal with anti-reflective coating, in-house movement with 80-hour power reserve, and water resistance to 100 meters.',
  details: {
      materials: 'Stainless steel case and bracelet, sapphire crystal, ceramic bezel',
      fit: 'Case diameter: 44mm. Thickness: 14.5mm. Lug width: 22mm.',
      care: 'Regular service every 5-7 years recommended. Avoid magnetic fields and extreme temperatures.'
  },
  options: {
      color: ['Blue Dial/Steel Bracelet', 'Black Dial/Steel Bracelet', 'Black Dial/Leather Strap']
  }
},
{
  id: 251,
  name: 'Dive Watch',
  brand: 'Omega',
  price: '₹425,000.00',
  image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/o/m/omega-seamaster-210-30-42-20-10-001-large.jpg',
  category: 'watches',
  inDemand: true,
  stock: 15,
  bestSeller: false,
  description: 'Professional dive watch with legendary underwater heritage. Features a unidirectional rotating bezel, helium escape valve, highly luminous dial and hands, co-axial master chronometer movement, and water resistance to 300 meters.',
  details: {
      materials: 'Stainless steel case and bracelet, sapphire crystal, ceramic bezel',
      fit: 'Case diameter: 42mm. Thickness: 13.5mm. Lug width: 20mm.',
      care: 'Rinse with fresh water after exposure to saltwater. Service every 5-8 years.'
  },
  options: {
      color: ['Blue Dial/Blue Bezel', 'Black Dial/Black Bezel', 'White Dial/Blue Bezel']
  }
},
{
  id: 252,
  name: 'Dress Watch with Leather Strap',
  brand: 'Jaeger-LeCoultre',
  price: '₹750,000.00',
  image: 'https://img.jaeger-lecoultre.com/mega-menu-list-3/0a652a122ea0365fd7a0e11c5d4097c676a251ea.jpg',
  category: 'watches',
  inDemand: true,
  stock: 12,
  bestSeller: true,
  description: 'Ultra-thin dress watch with sophisticated elegance. Features a hand-finished in-house movement, guilloché dial with applied hour markers, dauphine hands, sapphire crystal case back, and alligator leather strap for refined formal style.',
  details: {
      materials: 'Rose gold case, sapphire crystal, alligator leather strap',
      fit: 'Case diameter: 40mm. Thickness: 7.5mm. Lug width: 20mm.',
      care: 'Service every 5 years. Store in watch winder when not in use. Avoid water exposure.'
  },
  options: {
      color: ['Silver Dial/Black Leather', 'Champagne Dial/Brown Leather']
  }
},
{
  id: 253,
  name: 'Pilot\'s Chronograph',
  brand: 'IWC',
  price: '₹650,000.00',
  image: 'https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/i/w/iwc-pilots-iw389101-large.jpg',
  category: 'watches',
  inDemand: true,
  stock: 8,
  bestSeller: false,
  description: 'Classic aviation-inspired pilot\'s chronograph with heritage design. Features a highly legible dial with luminous numerals and hands, in-house automatic movement with 7-day power reserve, soft-iron inner case for magnetic field protection, and vintage-inspired aesthetics.',
  details: {
      materials: 'Stainless steel case, sapphire crystal, calfskin leather strap',
      fit: 'Case diameter: 46mm. Thickness: 15.5mm. Lug width: 22mm.',
      care: 'Regular service every 5 years recommended. Keep away from strong magnetic fields.'
  },
  options: {
      color: ['Black Dial/Brown Leather', 'Blue Dial/Black Leather']
  }
},
{
  id: 254,
  name: 'GMT Travel Watch',
  brand: 'Rolex',
  price: '₹950,000.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OnP0wem69jvj0iI7l9y920z1BUdP4wzimw&s',
  category: 'watches',
  inDemand: true,
  stock: 10,
  bestSeller: true,
  description: 'Iconic dual time zone watch designed for global travelers. Features a bidirectional rotatable 24-hour bezel, additional GMT hand, superlative chronometer certified movement, and the brand\'s signature Oyster case with water resistance to 100 meters.',
  details: {
      materials: 'Oystersteel case and bracelet, Cerachrom ceramic bezel, sapphire crystal',
      fit: 'Case diameter: 40mm. Thickness: 12mm. Oyster bracelet with Easylink extension.',
      care: 'Service every 10 years. Rinse with fresh water after exposure to saltwater.'
  },
  options: {
      color: ['Black/Blue Bezel', 'Black/Red Bezel', 'Blue Dial']
  }
},
{
  id: 255,
  name: 'Minimalist Quartz Watch',
  brand: 'Junghans',
  price: '₹85,000.00',
  image: 'https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2018/12/1200x900-2.jpg',
  category: 'watches',
  inDemand: false,
  stock: 22,
  bestSeller: false,
  description: 'Bauhaus-inspired minimalist watch with German design heritage. Features a clean dial with slim markers, domed sapphire crystal, precision quartz movement, and a slim case profile for timeless sophistication with modernist principles.',
  details: {
      materials: 'Stainless steel case, sapphire crystal, leather strap',
      fit: 'Case diameter: 38mm. Thickness: 7.5mm. Lug width: 20mm.',
      care: 'Wipe clean with a soft cloth. Avoid water exposure with leather strap.'
  },
  options: {
      color: ['White Dial/Black Leather', 'Black Dial/Brown Leather', 'White Dial/Mesh Bracelet']
  }
},
{
  id: 256,
  name: 'Reversible Leather Belt',
  brand: 'Salvatore Ferragamo',
  price: '₹32,000.00',
  image: 'https://m.media-amazon.com/images/I/71-yoyiRlnL._AC_UY1100_.jpg',
  category: 'belts',
  inDemand: true,
  stock: 45,
  bestSeller: true,
  description: 'Versatile reversible belt crafted from premium leather. Features smooth calfskin on one side and textured leather on the reverse, the brand\'s iconic Gancini buckle in polished palladium, and a simple mechanism to switch between black and brown for maximum versatility.',
  details: {
      materials: 'Calfskin leather with palladium-plated hardware',
      fit: 'Width: 3.5cm. Available in sizes 85-120cm.',
      care: 'Wipe clean with a soft, dry cloth. Store rolled when not in use.'
  },
  options: {
      size: ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm'],
      color: ['Black/Brown']
  }
},
{
  id: 257,
  name: 'Canvas Web Belt',
  brand: 'Polo Ralph Lauren',
  price: '₹8,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gQb8sRqjX5Cs-qZmE6jdW_DtVYb7IV_e-g&s',
  category: 'belts',
  inDemand: true,
  stock: 55,
  bestSeller: false,
  description: 'Preppy canvas web belt with signature styling. This casual accessory features a durable cotton webbing strap with leather trim, an antique-finish brass buckle with embossed logo, and adjustable sizing for a relaxed yet refined addition to weekend outfits.',
  details: {
      materials: 'Cotton webbing with leather trim and brass hardware',
      fit: 'Width: 3.8cm. One size adjustable up to 120cm.',
      care: 'Spot clean with mild soap and water. Air dry.'
  },
  options: {
      color: ['Navy/Brown Leather', 'Green/Brown Leather', 'Khaki/Brown Leather', 'Black/Black Leather']
  }
},
{
  id: 258,
  name: 'Reversible Leather Belt',
  brand: 'Salvatore Ferragamo',
  price: '₹32,000.00',
  image: 'https://m.media-amazon.com/images/I/71-yoyiRlnL._AC_UY1100_.jpg',
  category: 'belts',
  inDemand: true,
  stock: 45,
  bestSeller: true,
  description: 'Versatile reversible belt crafted from premium leather. Features smooth calfskin on one side and textured leather on the reverse, the brand\'s iconic Gancini buckle in polished palladium, and a simple mechanism to switch between black and brown for maximum versatility.',
  details: {
      materials: 'Calfskin leather with palladium-plated hardware',
      fit: 'Width: 3.5cm. Available in sizes 85-120cm.',
      care: 'Wipe clean with a soft, dry cloth. Store rolled when not in use.'
  },
  options: {
      size: ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm'],
      color: ['Black/Brown']
  }
},
{
  id: 259,
  name: 'Woven Leather Belt',
  brand: 'Anderson\'s',
  price: '₹14,800.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9b-HrCp7d4HxTjigmPL69vMKltfk3fjh9Q&s',
  category: 'belts',
  inDemand: false,
  stock: 32,
  bestSeller: false,
  description: 'Artisanal woven leather belt handcrafted in Italy. Features intricately woven leather strips, a brushed nickel buckle, leather keeper, and elasticated construction that provides subtle flexibility for exceptional comfort throughout the day.',
  details: {
      materials: 'Woven calfskin leather with nickel-free buckle',
      fit: 'Width: 3.5cm. Available in sizes 85-120cm.',
      care: 'Wipe clean with a soft, dry cloth. Avoid prolonged sun exposure.'
  },
  options: {
      size: ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm'],
      color: ['Brown', 'Navy', 'Black', 'Tan']
  }
},
{
  id: 260,
  name: 'Monogram Buckle Belt',
  brand: 'Gucci',
  price: '₹42,500.00',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCOLkew3LvlCwyWHRBQMM441XBN7FI-9QKA&s',
  category: 'belts',
  inDemand: true,
  stock: 38,
  bestSeller: true,
  description: 'Iconic belt featuring the brand\'s signature interlocking G buckle. This luxury accessory is crafted from premium leather with a textured surface, antique-finish brass hardware, and the instantly recognizable double G motif for a timeless statement of designer style.',
  details: {
      materials: 'Leather with brass hardware',
      fit: 'Width: 4cm. Available in sizes 85-120cm.',
      care: 'Wipe clean with a soft, dry cloth. Store in dust bag when not in use.'
  },
  options: {
      size: ['85cm', '90cm', '95cm', '100cm', '105cm', '110cm'],
      color: ['Black', 'Brown', 'Tan']
  }
},








  ];



  // Slideshow functionality
  let slideIndex = 0;
  let slideInterval;

  // Initialize slideshow
  function initSlideshow() {
    showSlide(slideIndex);
    // Auto advance slides every 5 seconds
    slideInterval = setInterval(() => {
      changeSlide(1);
    }, 5000);
  }

  // Show specific slide
  function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Reset all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active-dot'));
    
    // Handle index wrapping
    if (index >= slides.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex = index;
    }
    
    // Activate current slide and dot
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active-dot');
  }

  // Change slide with prev/next buttons
  function changeSlide(n) {
    showSlide(slideIndex + n);
    
    // Reset the timer when manually changing slides
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      changeSlide(1);
    }, 5000);
  }

  // Go to specific slide when clicking dots
  function currentSlide(n) {
    showSlide(n);
    
    // Reset the timer when manually changing slides
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      changeSlide(1);
    }, 5000);
  }

  // Cart array to store items
  let cart = [];

  // Function to display products
  function displayProducts(items) {
    const container = document.getElementById('products');
    container.innerHTML = '';
    items.forEach(item => {
      container.innerHTML += `
        <div class="product" data-id="${item.id}">
          <div class="img-container">
            <img src="${item.image}" alt="${item.name}" class="default-img">
            <img src="${item.hoverImage || item.image}" alt="${item.name} hover" class="hover-img">
          </div>
          <h4>${item.name}</h4>
          <p>${item.price}</p>
          <div class="product-buttons">
            <button class="buy-now-btn" onclick="buyNow(${item.id})">Buy Now</button>
            <button class="details-btn" onclick="showDetails(${item.id})">Details</button>
          </div>
        </div>`;
    });
  }

  // Function to filter items by category
  function filterItems(category) {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }

  // Function to get product by ID
  function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
  }

  // Function to show product details
  function showDetails(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    const productDetail = document.getElementById('product-detail');
    
    // Generate reviews HTML
    let reviewsHTML = '';
    if (product.reviews && product.reviews.length > 0) {
      product.reviews.forEach(review => {
        // Generate stars
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
          if (i <= review.rating) {
            starsHTML += '<i class="fas fa-star"></i>';
          } else {
            starsHTML += '<i class="far fa-star"></i>';
          }
        }
        
        reviewsHTML += `
          <div class="review">
            <div class="review-header">
              <span class="reviewer-name">${review.name}</span>
              <span class="review-date">${review.date}</span>
            </div>
            <div class="stars">
              ${starsHTML}
            </div>
            <div class="review-content">
              <p>${review.comment}</p>
            </div>
          </div>
        `;
      });
    } else {
      reviewsHTML = '<p>No reviews yet.</p>';
    }
    
    productDetail.innerHTML = `
      <div class="product-images">
        <img src="${product.image}" alt="${product.name}" class="main-image">
      </div>
      <div class="product-info-detail">
        <h2>${product.name}</h2>
        <div class="price">${product.price}</div>
        <div class="product-description">
          <p>${product.description}</p>
        </div>
        <div class="quantity-selector">
          <button onclick="decrementQuantity()">-</button>
          <input type="number" id="product-quantity" value="1" min="1" max="${product.stock}">
          <button onclick="incrementQuantity(${product.stock})">+</button>
        </div>
        <div class="action-buttons">
          <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="buy-now" onclick="buyNow(${product.id})">Buy Now</button>
        </div>
        <div class="product-meta">
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Availability:</strong> ${product.stock > 0 ? 'In Stock' : 'Out of Stock'} (${product.stock} left)</p>
        </div>
        
        <div class="reviews-section">
          <h3>Customer Reviews</h3>
          ${reviewsHTML}
        </div>
      </div>
    `;
    
    // Show the modal
    document.getElementById('product-modal').style.display = 'block';
  }

  // Function to close product modal
  function closeProductModal() {
    document.getElementById('product-modal').style.display = 'none';
  }

  // Function to increment quantity
  function incrementQuantity(max) {
    const quantityInput = document.getElementById('product-quantity');
    let quantity = parseInt(quantityInput.value);
    
    if (quantity < max) {
      quantityInput.value = quantity + 1;
    }
  }

  // Function to decrement quantity
  function decrementQuantity() {
    const quantityInput = document.getElementById('product-quantity');
    let quantity = parseInt(quantityInput.value);
    
    if (quantity > 1) {
      quantityInput.value = quantity - 1;
    }
  }

  // Function to add to cart
  function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    const quantity = document.getElementById('product-quantity') 
      ? parseInt(document.getElementById('product-quantity').value) 
      : 1;
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      });
    }
    
    // Update cart count
    updateCartCount();
    
    // Show confirmation
    alert(`${product.name} added to cart!`);
    
    // Close modal if open
    closeProductModal();
  }

  // Function to update cart count
  function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }

  // Function to buy now
  function buyNow(productId) {
    addToCart(productId);
    openCheckoutModal();
  }

  // Function to open cart modal
  function openCartModal() {
    const cartContent = document.getElementById('cart-content');
    
    if (cart.length === 0) {
      cartContent.innerHTML = `
        <div class="cart-empty">
          <p>Your cart is empty</p>
          <button class="btn" onclick="closeCartModal()">Continue Shopping</button>
        </div>
      `;
    } else {
      let cartHTML = `
        <div class="cart-items">
      `;
      
      let subtotal = 0;
      
      cart.forEach(item => {
        const price = parseFloat(item.price.replace('₹', '').replace(',', ''));
        const itemTotal = price * item.quantity;
        subtotal += itemTotal;
        
        cartHTML += `
          <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-price">${item.price}</div>
            </div>
            <div class="cart-item-quantity">
              <button onclick="decrementCartItem(${item.id})">-</button>
              <span>${item.quantity}</span>
              <button onclick="incrementCartItem(${item.id})">+</button>
            </div>
            <div class="cart-item-total">₹${itemTotal.toFixed(2)}</div>
            <div class="cart-item-remove" onclick="removeFromCart(${item.id})">
              <i class="fas fa-trash"></i>
            </div>
          </div>
        `;
      });
      
      const shipping = subtotal > 1000 ? 0 : 99;
      const total = subtotal + shipping;
      
      cartHTML += `
        </div>
        <div class="cart-summary">
          <h3>Order Summary</h3>
          <div class="summary-row">
            <span>Subtotal</span>
            <span>₹${subtotal.toFixed(2)}</span>
          </div>
          <div class="summary-row">
            <span>Shipping</span>
            <span>${shipping === 0 ? 'Free' : '₹' + shipping.toFixed(2)}</span>
          </div>
          <div class="summary-row total">
            <span>Total</span>
            <span>₹${total.toFixed(2)}</span>
          </div>
          <button class="checkout-btn" onclick="openCheckoutModal()">Proceed to Checkout</button>
        </div>
      `;
      
      cartContent.innerHTML = cartHTML;
    }
    
    document.getElementById('cart-modal').style.display = 'block';
  }

  // Function to close cart modal
  function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
  }

  // Function to increment cart item
  function incrementCartItem(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
      item.quantity += 1;
      openCartModal(); // Refresh cart modal
      updateCartCount();
    }
  }

  // Function to decrement cart item
  function decrementCartItem(id) {
    const item = cart.find(item => item.id === id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      openCartModal(); // Refresh cart modal
      updateCartCount();
    }
  }

  // Function to remove from cart
  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    openCartModal(); // Refresh cart modal
    updateCartCount();
  }

  // Function to open checkout modal
  function openCheckoutModal() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    closeCartModal(); // Close cart modal if open
    document.getElementById('checkout-modal').style.display = 'block';
  }

  // Function to close checkout modal
  function closeCheckoutModal() {
    document.getElementById('checkout-modal').style.display = 'none';
  }

  // Function to place order
  function placeOrder() {
    // Validate form
    const requiredFields = document.querySelectorAll('#checkout-modal input[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!field.value) {
        field.style.borderColor = 'red';
        isValid = false;
      } else {
        field.style.borderColor = '';
      }
    });
    
    if (!isValid) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Process order (in a real app, this would send data to a server)
    alert('Thank you for your order! Your items will be shipped soon.');
    
    // Clear cart
    cart = [];
    updateCartCount();
    
    // Close checkout modal
    closeCheckoutModal();
  }

  // Initialize slideshow when page loads
  window.onload = function() {
    initSlideshow();
    displayProducts(products);
  };