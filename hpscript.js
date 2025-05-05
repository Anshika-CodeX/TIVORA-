// Product data
const products = {
    featured: [
      { id:30,
        category: 'Jewelry',
        name: 'Waist Chains',
        price: '₹800.00',
        image: 'https://m.media-amazon.com/images/I/612ENqFXIhL._AC_UY300_.jpg',
        hoverImage: 'https://m.media-amazon.com/images/I/617JtFtISfL._AC_UY300_.jpg',
         description: 'Trendy waist chain accessory that highlights the waistline stylishly. Great for pairing with dresses or crop tops for a bold, chic edge.',
          stock: 5,
          reviews: [
            { name: 'Anjali P.', date: '2025-04-05', rating: 5, comment: 'Perfect accessory to glam up any dress or saree!' },
            { name: 'Kavita M.', date: '2025-03-18', rating: 4, comment: 'This is giving Y2K vibes—super trendy and bold.'}
          ]
          },
          {
            id: 25,
            category: 'Eye Makeup',
            name: 'Glitter Eyeshadow',
            price: '₹700.00',
            image: 'https://4.bp.blogspot.com/-Y7SBi5nJz3k/WZFIV426WiI/AAAAAAAAbGE/bmc16v82iq89BdfNf-wKtUNvdDmIrY2OwCEwYBhgL/s1600/too-faced-glitter-bomb-eyeshadow-palette-review-swatches-shadow-insurance-glitter-glue.jpg',
            hoverImage: 'http://ezeenah.com/wp-content/uploads/2018/05/2000x2000-GG-CORE-ALT-SHADENAMES.jpg',
            description: 'Add instant glamour to any look with our dazzling glitter eyeshadow. The innovative gel-powder formula delivers intense sparkle with minimal fallout, while the adhesive base ensures long-lasting wear without the need for glitter glue. Available in a range of stunning shades from subtle shimmer to bold, multi-dimensional glitter for eye-catching effects.',
            stock: 20,
            reviews: [
              { name: 'Aisha P.', date: '2025-04-13', rating: 5, comment: 'The glitter stays put all night with minimal fallout. So sparkly!' },
              { name: 'Radhika S.', date: '2025-03-26', rating: 4, comment: 'Beautiful formula that applies easily with fingers or a brush.' }
            ]
          },
    
          {  id:19,
            category: 'Jewelry', 
            name: 'Gold Hoops', 
            price: '₹1,199.00', 
            image: 'https://m.media-amazon.com/images/I/71OTYHMuX%20L._AC_UY1000_.jpg',
            hoverImage: 'https://bycharlotte.com.au/cdn/shop/files/e399g18-18k-gold-vermeil-sunkissed-large-hoops-gold-1.jpg?v=1710718887',
             description: 'Classic gold hoop earrings with a sleek finish. Timeless and versatile—ideal for casual outings or dressing up your look for the evening.',
            stock: 5,
            reviews: [
              { name: 'Anjali P.', date: '2025-04-05', rating: 5, comment: 'These earrings are stunning! The diamonds catch the light beautifully.' },
              { name: 'Kavita M.', date: '2025-03-18', rating: 4, comment: 'Gorgeous earrings but the clasps could be more secure.' }
            ]
        },
     
        {
          id: 1,
          category: 'Makeup',
          name: 'Foundation',
          price: '₹1,200.00',
          image: 'https://media1.popsugar-assets.com/files/thumbor/vS5UjE_dgA_biPdblT1sguZxjdw/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/04/24/714/n/1922153/6c52d061243b2e93_Familes10Plus-211_1_.jpg',
          hoverImage: 'https://i.pinimg.com/736x/f4/80/da/f480da4792e9a451a13688a1d517d266.jpg',
          description: 'Our premium foundation provides flawless coverage with a natural finish. Formulated with skin-loving ingredients, it evens out skin tone while hydrating and protecting. Available in a wide range of shades to match every skin tone perfectly.',
          stock: 20,
          reviews: [
            { name: 'Anjali P.', date: '2025-04-10', rating: 5, comment: 'Perfect match for my skin tone! Blends beautifully and lasts all day.' },
            { name: 'Shreya M.', date: '2025-03-22', rating: 4, comment: 'Great coverage without feeling heavy. Would definitely repurchase.' }
          ]
        },
       
    ],
    womenMakeup: [
      {
        id: 3,
        category: 'Makeup',
        name: 'Blush',
        price: '₹500.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/MKER-WU79_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/MKER-WU79_V2.jpg',
        description: 'Add a natural flush of color to your cheeks with our silky-smooth blush. The finely-milled powder applies evenly and blends effortlessly for a radiant glow. Buildable formula allows for subtle to dramatic looks, perfect for any occasion.',
        stock: 18,
        reviews: [
          { name: 'Meera S.', date: '2025-04-12', rating: 5, comment: 'The color is gorgeous and gives such a natural flush!' },
          { name: 'Tanvi D.', date: '2025-03-25', rating: 4, comment: 'Blends beautifully and lasts all day. Love the pigmentation.' }
        ]
      },
      {
        id: 25,
        category: 'Eye Makeup',
        name: 'Glitter Eyeshadow',
        price: '₹700.00',
        image: 'https://4.bp.blogspot.com/-Y7SBi5nJz3k/WZFIV426WiI/AAAAAAAAbGE/bmc16v82iq89BdfNf-wKtUNvdDmIrY2OwCEwYBhgL/s1600/too-faced-glitter-bomb-eyeshadow-palette-review-swatches-shadow-insurance-glitter-glue.jpg',
        hoverImage: 'http://ezeenah.com/wp-content/uploads/2018/05/2000x2000-GG-CORE-ALT-SHADENAMES.jpg',
        description: 'Add instant glamour to any look with our dazzling glitter eyeshadow. The innovative gel-powder formula delivers intense sparkle with minimal fallout, while the adhesive base ensures long-lasting wear without the need for glitter glue. Available in a range of stunning shades from subtle shimmer to bold, multi-dimensional glitter for eye-catching effects.',
        stock: 20,
        reviews: [
          { name: 'Aisha P.', date: '2025-04-13', rating: 5, comment: 'The glitter stays put all night with minimal fallout. So sparkly!' },
          { name: 'Radhika S.', date: '2025-03-26', rating: 4, comment: 'Beautiful formula that applies easily with fingers or a brush.' }
        ]
      },
      {
        id: 13,
        category: 'Makeup',
        name: 'Blush and Bronze',
        price: '₹600.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/NDSX-WU140_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/NDSX-WU140_V6.jpg',
        description: 'This versatile duo palette features a perfectly paired blush and bronzer to create a complete, dimensional cheek look. The silky powders blend seamlessly for a natural finish that can be built from subtle to dramatic. Infused with skin-loving ingredients for comfortable, all-day wear.',
        stock: 20,
        reviews: [
          { name: 'Anita S.', date: '2025-04-04', rating: 5, comment: 'Perfect pairing of blush and bronzer! They complement each other beautifully.' },
          { name: 'Geeta M.', date: '2025-03-17', rating: 4, comment: 'Great pigmentation and blendability. Love having both products in one compact.' }
        ]
      },
      {
        id: 19,
        category: 'Eye Makeup',
        name: 'Kajal Stick',
        price: '₹500.00',
        image: 'https://www.india-store.de/images/thumbnail/produkte/xlarge/cosmetic01/003/blueheaven_classic_kajal_2.jpg',
        hoverImage: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/10938308b.webp',
        description: 'Our intense black kajal stick delivers dramatic eye definition with a single stroke. The creamy, waterproof formula glides on smoothly without tugging, creating bold lines that stay put for hours. Smudge-resistant and enriched with vitamin E, this kajal is perfect for creating everything from subtle definition to dramatic smokey eyes.',
        stock: 22,
        reviews: [
          { name: 'Meera S.', date: '2025-04-12', rating: 5, comment: 'The blackest kajal I\'ve ever used! Stays put even on my waterline.' },
          { name: 'Tanvi D.', date: '2025-03-25', rating: 4, comment: 'Intense color payoff and doesn\'t smudge throughout the day.' }
        ]
      },
      {
        id: 27,
        category: 'Lip Products',
        name: 'Lip Butter Balm',
        price: '₹1,200.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/SUMR-WU41_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/SUMR-WU41_V2.jpg',
        description: 'This luxuriously rich lip butter balm delivers intense hydration while coating lips in a sheer wash of color. Formulated with nourishing shea butter, coconut oil, and vitamin E, it repairs dry, chapped lips while providing a subtle tint. The non-sticky formula feels comfortable on lips and leaves them soft, smooth, and naturally plump.',
        stock: 25,
        reviews: [
          { name: 'Anjali P.', date: '2025-04-10', rating: 5, comment: 'So moisturizing! My lips feel soft and hydrated all day.' },
          { name: 'Shreya M.', date: '2025-03-22', rating: 4, comment: 'Love the subtle tint and the formula isn\'t sticky at all.' }
        ]
      },
    ],
    womenClothing: [
      {
        id: 101,
        name: 'Silk Slip Dress',
        brand: 'Reformation',
        price: '₹12,500.00',
        image: 'https://assets.ajio.com/medias/sys_master/root/20240315/mJMw/65f437ec05ac7d77bbba6845/-473Wx593H-443025752-jetblack-MODEL.jpg',
        category: 'dresses',
        inDemand: true,
        soldCount: 145,
        bestSeller: true,
        description: 'Luxurious silk slip dress with adjustable spaghetti straps and a flattering bias cut. This elegant piece features a sleek silhouette that drapes beautifully over the body, a subtle cowl neckline, and a side slit for ease of movement.',
        details: {
          materials: '100% Silk',
          fit: 'True to size. Model is 5\'10" and wears size S.',
          care: 'Dry clean only. Do not bleach. Cool iron if needed.'
        },
        options: {
          size: ['XS', 'S', 'M', 'L'],
          color: ['Black', 'Ivory', 'Navy']
        }
      },
      {
        id: 105,
        name: 'Summer Linen Wrap Dress',
        brand: 'Faithfull the Brand',
        price: '₹11,300.00',
        image: 'https://m.media-amazon.com/images/I/71CdFLyL5QL._AC_UY1100_.jpg',
        category: 'dresses',
        inDemand: true,
        soldCount: 130,
        bestSeller: false,
        description: 'Breezy linen wrap dress perfect for warm days. Features a deep V-neckline, adjustable waist tie, and flutter sleeves. Light and breathable, making it an effortless choice for beach outings and casual brunches.',
        details: {
          materials: '100% Linen',
          fit: 'Adjustable fit. Model is 5\'9" and wears size S.',
          care: 'Hand wash cold. Lay flat to dry. Warm iron if necessary.'
        },
        options: {
          size: ['XS', 'S', 'M', 'L', 'XL'],
          color: ['Sky Blue', 'Sunset Orange', 'Natural Beige']
        }
      },

      {
        id: 108,
        name: 'High-Rise Skinny Jeans',
        brand: 'AGOLDE',
        price: '₹16,800.00',
        image: 'https://freakins.com/cdn/shop/files/Aniwarya01525-Edit_54ec0cce-3005-4ec8-abfb-c6781cb95cad.jpg?v=1718094249',
        category: 'Bottom',
        inDemand: true,
        soldCount: 98,
        bestSeller: false,
        description: 'Premium high-rise skinny jeans crafted from stretch denim for the perfect fit. These versatile jeans feature a flattering high waist, classic five-pocket styling, and a skinny leg that elongates your silhouette for a sleek, contemporary look.',
        details: {
          materials: '94% Cotton, 5% Polyester, 1% Elastane',
          fit: 'Skinny fit. Model is 5\'9" and wears size 26.',
          care: 'Machine wash cold inside out with similar colors. Tumble dry low.'
        },
        options: {
          size: ['24', '25', '26', '27', '28', '29', '30', '31'],
          color: ['Dark Indigo', 'Black', 'Medium Wash']
        }
      },
      {
        id: 110,
        name: 'Essential Cotton Lowers',
        brand: 'AGOLDE',
        price: '₹12,500.00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_tICTSbBV22_TjZUgxLZxtNia_6w4yQ-yQ&s',
        category: 'Bottom',
        inDemand: true,
        soldCount: 85,
        bestSeller: false,
        description: 'Lightweight essential cotton lowers designed for all-day comfort. Features an adjustable waistband, tapered legs, and a relaxed fit, perfect for casual outings or lounging.',
        details: {
          materials: '100% Cotton',
          fit: 'Relaxed fit. Model is 5\'9" and wears size S.',
          care: 'Machine wash cold with like colors. Do not bleach. Tumble dry low.'
        }
      },
      {
        id: 114,
        name: 'Flared Skirt',
        brand: 'AGOLDE',
        price: '₹10,200.00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7-2mM0QWisXRmanmlL_UO_ivtf0S8cgDLEB1mACZu-aSBUmwG68pzOqgPxrIiDjZqlA&usqp=CAU',
        category: 'Bottom',
        inDemand: true,
        soldCount: 88,
        bestSeller: false,
        description: 'Trendy frayed hem short skirt made from premium stretch denim. Featuring a mid-rise waist, mini length, and raw-edge detailing for an edgy, casual look.',
        details: {
          materials: '98% Cotton, 2% Elastane',
          fit: 'Slim fit. Model is 5\'8" and wears size 26.',
          care: 'Machine wash cold. Hang to dry.'
        }
      },
      
      
      
     
     
     
    ],
    womenAccessories: [
      { 
        id: 5,
        category: 'Hair Accessories', 
        name: 'Ribbon Scrunchie', 
        price: '₹499.00', 
        image: 'https://down-ph.img.susercontent.com/file/sg-11134201-22110-5j1yt9t5idjv12',
        hoverImage: 'https://down-ph.img.susercontent.com/file/sg-11134201-23030-p745mcumvfovbd',
        description: 'Stylish ribbon scrunchie that adds a playful touch to any hairstyle. Made with premium fabric for durability and comfort.',
        stock: 18,
        reviews: [
          { name: 'Deepa R.', date: '2025-04-05', rating: 5, comment: 'Love this scrunchie! The ribbon detail is so cute.' },
          { name: 'Tina M.', date: '2025-03-22', rating: 4, comment: 'Good quality and holds my hair well without pulling.' }
        ]
      },
      {  id: 7,
        category: 'Hair Accessories', 
        name: 'Butterfly Clips', 
        price: '₹299.00', 
        image: 'https://images-eu.ssl-images-amazon.com/images/I/71dP6m9CGuL._AC_UL600_SR600,600_.jpg' ,
        hoverImage: 'https://images.meesho.com/images/products/213923623/7mual_512.jpg',
        description: 'Wrap your hair in luxury with our Silk Scrunchie, made from ultra-soft, premium-quality silk. Gentle on hair and kind to strands, it helps reduce breakage, frizz, and creases. Whether you\'re styling a sleek ponytail or a relaxed bun, this scrunchie adds a touch of sophistication while keeping your hair secure and healthy.',
        stock: 25,
        reviews: [
          { name: 'Meera K.', date: '2025-04-02', rating: 5, comment: 'Such a cute bow! My daughter loves it and wears it every day.' },
          { name: 'Riya T.', date: '2025-03-15', rating: 4, comment: 'Good quality and stays in place all day. Would recommend.' }
          ]
  
      },
      {  id:21,
        category: 'Jewelry', 
        name: 'Stone Ring', 
        price: '₹899.00', 
        image: 'https://i0.wp.com/www.weddingforward.com/wp-content/uploads/2023/12/emerald-engagement-rings-modern-solitaire-emerand-ring-phantomjewels.jpg?fit=1080%2C1350&quality=70&ssl=1' ,
        hoverImage: 'https://prod-sfcc-api.michaelhill.com/dw/image/v2/AANC_PRD/on/demandware.static/-/Sites-MHJ_Master/default/dw06c90409/images/P21403897/P21403897-25-21.jpg?sw=300&sm=fit&q=90',
         description: 'A stylish ring featuring a bold green gemstone in the center. This piece combines simplicity with elegance, making it a stunning accessory for any outfit.',
        stock: 5,
        reviews: [
          { name: 'Anjali P.', date: '2025-04-05', rating: 5, comment: 'These earrings are stunning! The diamonds catch the light beautifully.' },
          { name: 'Kavita M.', date: '2025-03-18', rating: 4, comment: 'Gorgeous earrings but the clasps could be more secure.' }
        ]
    },
    { id:27,
      category: 'Jewelry',
      name: 'Layered Necklace',
      price: '₹1,500.00',
      image: 'https://victorialdn.uk/cdn/shop/products/victoria-london-layered-link-chain-necklace-38546549997784.jpg?v=1667670084',
      hoverImage: 'https://img.tomade.com/images/tm/1002018/v8puhogv3tuic5c2umff/Boomer-Cat-925-Sterling-Silver-Hollow-Geometric-Chain-Minimalist-Necklace.jpg',
       description: 'A minimalist layered chain necklace with sleek gold links. Ideal for everyday wear or layering with other jewelry for a chic aesthetic.',
        stock: 5,
        reviews: [
          { name: 'Anjali P.', date: '2025-04-05', rating: 5, comment: 'Simple yet stylish! Great for layering with other necklaces' },
          { name: 'Kavita M.', date: '2025-03-18', rating: 4, comment: 'This would look amazing with off-shoulder tops or deep necklines' }
        ]
    },
    { id:29,
      category: 'Jewelry',
      name: 'Stackable Rings',
      price: '₹1,500.00',
      image: 'https://i.pinimg.com/736x/8b/ce/8d/8bce8d1fc84383b07c546019ea3c7212.jpg',
      hoverImage: 'https://i5.walmartimages.com/asr/9a07c461-dc58-4e0f-8a09-80afc18eba80.ca5f6cd27c27109651a8e02c8ae30f18.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
       description: 'Elegant gold-toned rings studded with dainty crystals, designed to be worn individually or stacked together for a fashionable statement.',
        stock: 5,
        reviews: [
          { name: 'Anjali P.', date: '2025-04-05', rating: 5, comment: 'These rings are so pretty and versatile—stack or wear solo!' },
          { name: 'Kavita M.', date: '2025-03-18', rating: 4, comment: 'The tiny crystals add just the right amount of sparkle.' }
        ]
    },
    ],

    Perfumes:[
      {
        id: 18,
        category: 'Perfumes',
        name: 'Mitti Attar',
        price: '₹999.00',
        image: 'https://i.pinimg.com/474x/f9/19/82/f91982bbae2a5b34d520b9b5a5d30542.jpg',
        hoverImage: 'https://i.pinimg.com/474x/c6/5f/e8/c65fe8e361ee1e132574323d60ca877d.jpg',
        description: 'The scent of earth after the first rain (petrichor). A nostalgic and grounding fragrance that captures the essence of Indian monsoons.',
        stock: 30,
        reviews: [
          { name: 'Rajesh P.', date: '2025-04-05', rating: 5, comment: 'Takes me back to childhood monsoons. So authentic!' },
          { name: 'Kavita M.', date: '2025-03-18', rating: 5, comment: 'The most realistic petrichor scent. Absolutely love it.' }
        ]
      },
      {
        id: 19,
        category: 'Perfumes',
        name: 'Shamama Attar',
        price: '₹3,199.00',
        image: 'https://i.pinimg.com/474x/7e/6c/7c/7e6c7cc0739684af45632ec4ba21b4e7.jpg',
        hoverImage: 'https://i.pinimg.com/474x/23/5b/f8/235bf88a7db93d2f1f75074059fbba70.jpg',
        description: 'A complex blend of over 40 herbs and spices, aged for years. A royal fragrance with deep historical significance in Indian perfumery.',
        stock: 15,
        reviews: [
          { name: 'Anand K.', date: '2025-04-05', rating: 5, comment: 'Complex and regal. A true masterpiece of traditional perfumery.' },
          { name: 'Rahul M.', date: '2025-03-18', rating: 5, comment: 'Like nothing I\'ve ever smelled before. Worth every rupee.' }
        ]
      },
      {
        id: 20,
        category: 'Perfumes',
        name: 'Kewda Attar',
        price: '₹1,499.00',
        image: 'https://i.pinimg.com/474x/29/60/42/29604204fb790fd638385987ebd5d099.jpg',
        hoverImage: 'https://i.pinimg.com/474x/35/c7/b9/35c7b9e105acac48317c56c215aeb754.jpg',
        description: 'Distilled from the flowers of the screw pine, this attar has a unique floral-green scent. Traditional in Indian ceremonies and celebrations.',
        stock: 20,
        reviews: [
          { name: 'Vikram P.', date: '2025-04-05', rating: 5, comment: 'Such a unique floral scent. Reminds me of temple visits.' },
          { name: 'Meena M.', date: '2025-03-18', rating: 4, comment: 'Beautiful and authentic. Lasts surprisingly long.' }
        ]
      },
      {
        id: 21,
        category: 'Perfumes',
        name: 'Oudh Attar',
        price: '₹4,899.00',
        image: 'https://i.pinimg.com/474x/4b/c7/66/4bc76699a29188bb59280a824538dfd4.jpg',
        hoverImage: 'https://i.pinimg.com/474x/34/44/96/3444965e4424b7896d3af7d615d20875.jpg',
        description: 'Rare and precious agarwood oil with a deep, woody, and slightly sweet aroma. One of the most expensive natural raw materials in perfumery.',
        stock: 8,
        reviews: [
          { name: 'Farhan A.', date: '2025-04-05', rating: 5, comment: 'The most authentic oud I\'ve found in India. Exceptional quality.' },
          { name: 'Zara K.', date: '2025-03-18', rating: 5, comment: 'Rich, complex, and long-lasting. A true luxury.' }
        ]
      },
      {
        id: 22,
        category: 'Perfumes',
        name: 'Mogra Attar',
        price: '₹1,499.00',
        image: 'https://i.pinimg.com/474x/55/3a/c2/553ac2e6a87750b9e707817f823b5e66.jpg',
        hoverImage: 'https://i.pinimg.com/736x/50/11/4b/50114b8e8ca20a71f70378254cce0df5.jpg',
        description: 'Jasmine sambac (Arabian jasmine) distilled in the traditional method. A rich, sweet, and intoxicating white floral scent.',
        stock: 22,
        reviews: [
          { name: 'Priya D.', date: '2025-04-05', rating: 5, comment: 'The most beautiful jasmine scent. Pure and natural.' },
          { name: 'Neha R.', date: '2025-03-18', rating: 5, comment: 'Reminds me of summer evenings in my grandmother\'s garden.' }
        ]
      },
      {
        id: 23,
        category: 'Collection',
        name: 'Summer Breeze Collection',
        price: '₹7,799.00',
        image: 'https://i.pinimg.com/474x/28/f5/67/28f5678c9b29449358ce64ceac81301e.jpg',
        hoverImage: 'https://i.pinimg.com/474x/3b/0a/64/3b0a648f7aa0680ba5b9f120d077e4ae.jpg',
        description: 'A set of three light, fresh fragrances perfect for summer: Citrus Splash, Ocean Breeze, and Tropical Sunset. Each 30ml bottle captures a different summer mood.',
        stock: 15,
        reviews: [
          { name: 'Anjali P.', date: '2025-04-05', rating: 5, comment: 'Perfect summer scents! The Tropical Sunset is my favorite.' },
          { name: 'Kavita M.', date: '2025-03-18', rating: 4, comment: 'Great value for three quality fragrances. Love the variety.' }
        ]
      },
    ],
    menProducts: [
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
     
    ],
    accessories: [
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
      
    ]
  };
  
  // Cart array to store items
  let cart = [];
  
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
  
  // Function to create product HTML
  function createProductHTML(product) {
    return `
      <div class="product" data-id="${product.id}">
        <div class="img-container">
          <img src="${product.image}" alt="${product.name}" class="default-img">
          <img src="${product.hoverImage || product.image}" alt="${product.name} hover" class="hover-img">
        </div>
        <h4>${product.name}</h4>
        <p>${product.price}</p>
        <div class="product-buttons">
          <button class="buy-now-btn" onclick="buyNow(${product.id})">Buy Now</button>
          <button class="details-btn" onclick="showDetails(${product.id})">Details</button>
        </div>
      </div>
    `;
  }
  
  // Function to load products
  function loadProducts() {
    // Load featured products
    const featuredContainer = document.querySelector('#featured-products .products-grid');
    if (featuredContainer) {
      featuredContainer.innerHTML = '';
      products.featured.forEach(product => {
        featuredContainer.innerHTML += createProductHTML(product);
      });
    }
    
    // Load women's makeup products
    const makeupContainer = document.querySelector('#women-makeup .products-row');
    if (makeupContainer) {
      makeupContainer.innerHTML = '';
      products.womenMakeup.forEach(product => {
        makeupContainer.innerHTML += createProductHTML(product);
      });
    }
    
    // Load women's clothing products
    const clothingContainer = document.querySelector('#women-clothing .products-row');
    if (clothingContainer) {
      clothingContainer.innerHTML = '';
      products.womenClothing.forEach(product => {
        clothingContainer.innerHTML += createProductHTML(product);
      });
    }
    
    // Load women's accessories products
    const accessoriesContainer = document.querySelector('#women-accessories .products-row');
    if (accessoriesContainer) {
      accessoriesContainer.innerHTML = '';
      products.womenAccessories.forEach(product => {
        accessoriesContainer.innerHTML += createProductHTML(product);
      });
    }
    
    // Load men's products
    const menContainer = document.querySelector('#men-products .products-row');
    if (menContainer) {
      menContainer.innerHTML = '';
      products.menProducts.forEach(product => {
        menContainer.innerHTML += createProductHTML(product);
      });
    }
    
    // Load accessories products
    const accessoriesMainContainer = document.querySelector('#accessories .products-row');
    if (accessoriesMainContainer) {
      accessoriesMainContainer.innerHTML = '';
      products.accessories.forEach(product => {
        accessoriesMainContainer.innerHTML += createProductHTML(product);
      });
    }
  }
  
  // Function to toggle women categories
  function toggleWomenCategories() {
    const categoriesSection = document.getElementById('women-categories');
    categoriesSection.classList.toggle('active');
  }
  
  // Function to scroll to section
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  }
  
  // Function to get product by ID
  function getProductById(id) {
    id = parseInt(id);
    
    // Search through all product categories
    for (const category in products) {
      const found = products[category].find(product => product.id === id);
      if (found) return found;
    }
    return null;
  }
  
  // Function to show product details
  function showDetails(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    const productDetail = document.getElementById('product-detail');
    
    // Generate reviews HTML
    let reviewsHTML = '<p>No reviews yet.</p>';
    
    productDetail.innerHTML = `
      <div class="product-images">
        <img src="${product.image}" alt="${product.name}" class="main-image">
      </div>
      <div class="product-info-detail">
        <h2>${product.name}</h2>
        <div class="price">${product.price}</div>
        <div class="product-description">
          <p>This premium quality ${product.name.toLowerCase()} is designed to enhance your style. Made with high-quality materials for comfort and durability.</p>
        </div>
        <div class="quantity-selector">
          <button onclick="decrementQuantity()">-</button>
          <input type="number" id="product-quantity" value="1" min="1" max="10">
          <button onclick="incrementQuantity(10)">+</button>
        </div>
        <div class="action-buttons">
          <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="buy-now" onclick="buyNow(${product.id})">Buy Now</button>
        </div>
        <div class="product-meta">
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Availability:</strong> In Stock</p>
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
  
  // Initialize when page loads
  window.onload = function() {
    initSlideshow();
    loadProducts();
  };