const products = [
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
      {
        id: 2,
        category: 'Makeup',
        name: 'Concealer',
        price: '₹350.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/KOSA-WU244_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/TOEI-WU77_V6.jpg',
        description: 'This high-performance concealer effectively covers dark circles, blemishes, and imperfections. Its creamy formula blends seamlessly into the skin, providing medium to full coverage with a natural finish. Enriched with antioxidants to nourish the delicate under-eye area.',
        stock: 25,
        reviews: [
          { name: 'Priya K.', date: '2025-04-05', rating: 5, comment: 'Best concealer Ive ever used! Covers my dark circles completely.' },
          { name: 'Nisha R.', date: '2025-03-18', rating: 4, comment: 'Creamy texture and great coverage. Doesnt crease throughout the day.' }
        ]
      },
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
        id: 4,
        category: 'Makeup',
        name: 'The Beautiful Tint',
        price: '₹1,000.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/KJER-WU227_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/KJER-WU227_V2.jpg',
        description: 'This versatile lip and cheek tint delivers a natural, long-lasting flush of color. The lightweight, buildable formula blends seamlessly into skin for a radiant finish. Made with nourishing botanical extracts that hydrate while providing beautiful color that lasts all day.',
        stock: 15,
        reviews: [
          { name: 'Aditi J.', date: '2025-04-08', rating: 5, comment: 'So versatile! I use it on my lips, cheeks, and even eyelids.' },
          { name: 'Kavita N.', date: '2025-03-20', rating: 4, comment: 'Beautiful color that lasts all day. A little goes a long way!' }
        ]
      },
      {
        id: 5,
        category: 'Makeup',
        name: '(Re)setting 100% Mineral Powder SPF 35',
        price: '₹600.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/SOOR-WU87_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/SOOR-WU87_V2.jpg',
        description: 'This innovative mineral setting powder not only sets makeup for all-day wear but also provides SPF 35 protection. The ultra-fine, translucent formula controls shine without adding weight or color, leaving skin with a flawless, airbrushed finish. Perfect for touch-ups throughout the day.',
        stock: 22,
        reviews: [
          { name: 'Ritu P.', date: '2025-04-15', rating: 5, comment: 'Love that it has SPF! Keeps my makeup in place all day.' },
          { name: 'Sonia G.', date: '2025-03-30', rating: 4, comment: 'Great for touch-ups and doesnt look cakey even after reapplication.' }
        ]
      },
      {
        id: 6,
        category: 'Makeup',
        name: 'Bronze',
        price: '₹1,500.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/PIXR-WU33_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/PIXR-WU33_V2.jpg',
        description: 'Achieve a sun-kissed glow year-round with our luxurious bronzer. The silky, buildable formula blends seamlessly for a natural-looking tan. Infused with subtle golden shimmer, it adds warmth and dimension to any complexion. Perfect for contouring or all-over warmth.',
        stock: 12,
        reviews: [
          { name: 'Neha T.', date: '2025-04-11', rating: 5, comment: 'The perfect bronzer! Gives me a natural tan without looking orange.' },
          { name: 'Pooja S.', date: '2025-03-27', rating: 4, comment: 'Beautiful formula that blends like a dream. Not too shimmery.' }
        ]
      },
      {
        id: 7,
        category: 'Makeup',
        name: 'Face Highlighter',
        price: '₹400.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/NDSX-WU152_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/NDSX-WU152_V6.jpg',
        description: 'Illuminate your features with our stunning highlighter. The finely-milled powder applies smoothly for a radiant glow that catches the light beautifully. The buildable formula allows for a subtle sheen or an intense metallic finish. Perfect for cheekbones, brow bones, and anywhere you want to add dimension.',
        stock: 20,
        reviews: [
          { name: 'Divya R.', date: '2025-04-09', rating: 5, comment: 'This highlighter gives the most beautiful glow without emphasizing texture!' },
          { name: 'Ananya K.', date: '2025-03-21', rating: 4, comment: 'Gorgeous shimmer that lasts all day. A little goes a long way.' }
        ]
      },
      {
        id: 8,
        category: 'Makeup',
        name: 'Heaven\'s Hue Hydro-Luminator',
        price: '₹450.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/STIL-WU497_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/STIL-WU497_V4.jpg',
        description: 'This innovative liquid highlighter combines skincare and makeup in one luxurious formula. Infused with hyaluronic acid and light-reflecting pearls, it delivers intense hydration while creating a luminous, dewy finish. Can be used alone, mixed with foundation, or as a targeted highlighter for a customizable glow.',
        stock: 15,
        reviews: [
          { name: 'Isha M.', date: '2025-04-14', rating: 5, comment: 'The most beautiful liquid highlighter! Gives a wet-look glow that lasts all day.' },
          { name: 'Tanya B.', date: '2025-03-29', rating: 4, comment: 'Love mixing this with my foundation for an all-over glow.' }
        ]
      },
      {
        id: 9,
        category: 'Makeup',
        name: 'Airbrush Flawless Finish Setting Spray',
        price: '₹700.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/CTIL-WU125_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/CTIL-WU125_V3.jpg',
        description: 'Lock in your makeup for up to 24 hours with our weightless setting spray. The fine mist applies evenly and dries quickly, creating an invisible shield that prevents fading, creasing, and smudging. Infused with hydrating ingredients to keep skin comfortable and refreshed throughout the day.',
        stock: 18,
        reviews: [
          { name: 'Aisha P.', date: '2025-04-13', rating: 5, comment: 'My makeup doesnt budge when I use this! Even in humid weather.' },
          { name: 'Radhika S.', date: '2025-03-26', rating: 4, comment: 'Fine mist that doesnt disturb makeup. Makes everything look seamless.' }
        ]
      },
      {
        id: 10,
        category: 'Makeup',
        name: 'The Duet: Baked Blush Duo',
        price: '₹700.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/DIBR-WU43_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/DIBR-WU43_V2.jpg',
        description: 'This luxurious baked blush duo features two complementary shades that can be worn alone or swirled together for a custom flush of color. The silky, lightweight formula applies smoothly and blends effortlessly for a natural-looking radiance. Infused with antioxidants to nourish and protect skin.',
        stock: 14,
        reviews: [
          { name: 'Sneha K.', date: '2025-04-07', rating: 5, comment: 'Love having two shades in one! The formula is so silky and blendable.' },
          { name: 'Jyoti R.', date: '2025-03-19', rating: 4, comment: 'Beautiful colors that complement each other perfectly. Long-lasting too!' }
        ]
      },
      {
        id: 11,
        category: 'Makeup',
        name: 'Divine Rose Jet Set Kit Limited Edition',
        price: '₹700.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/PMCG-WU229_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/PMCG-WU229_V4.jpg',
        description: 'This exclusive travel-friendly kit contains everything you need for a complete makeup look on the go. Featuring a curated selection of rose-toned eyeshadows, blush, highlighter, and lip color in a sleek, compact case. Perfect for travel or touch-ups throughout the day.',
        stock: 10,
        reviews: [
          { name: 'Preeti L.', date: '2025-04-16', rating: 5, comment: 'Perfect travel companion! The rose tones are flattering on my skin.' },
          { name: 'Manisha D.', date: '2025-03-31', rating: 4, comment: 'Great quality and so convenient for travel. Love the packaging!' }
        ]
      },
      {
        id: 12,
        category: 'Makeup',
        name: 'Cheekslime Lip + Cheek Tint',
        price: '₹700.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/FREK-WU33_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/FREK-WU33_V5.jpg',
        description: 'This innovative gel-cream formula delivers a buildable wash of color for both lips and cheeks. The lightweight, blendable texture melts into skin for a natural, dewy finish that lasts all day. Infused with nourishing botanicals to hydrate and protect, leaving skin soft and supple.',
        stock: 16,
        reviews: [
          { name: 'Shikha G.', date: '2025-04-06', rating: 5, comment: 'So easy to apply and blend! Love using one product for lips and cheeks.' },
          { name: 'Leela N.', date: '2025-03-23', rating: 4, comment: 'Beautiful sheer color thats buildable. Feels hydrating on both lips and cheeks.' }
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
        id: 14,
        category: 'Makeup',
        name: 'Airbrush Brightening Flawless Finish Powder',
        price: '₹600.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/CTIL-WU234_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/CTIL-WU234_V3.jpg',
        description: 'This ultra-fine, luminous setting powder instantly brightens and perfects the complexion. The lightweight formula blurs imperfections and sets makeup without looking dry or cakey. Infused with light-reflecting particles for a soft-focus, airbrushed finish that lasts all day.',
        stock: 18,
        reviews: [
          { name: 'Kiran R.', date: '2025-04-03', rating: 5, comment: 'This powder gives such a beautiful luminous finish without any shimmer!' },
          { name: 'Vandana P.', date: '2025-03-16', rating: 4, comment: 'Sets my makeup perfectly and gives a subtle brightness to my skin.' }
        ]
      },
      {
        id: 15,
        category: 'Makeup',
        name: 'Serum Foundation',
        price: '₹600.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/ILIR-WU260_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/ILIR-WU260_V3.jpg',
        description: 'This innovative foundation combines makeup and skincare in one powerful formula. The lightweight, serum-like texture provides medium, buildable coverage while delivering potent skincare ingredients to improve skin over time. Gives a natural, radiant finish that looks like your skin but better.',
        stock: 15,
        reviews: [
          { name: 'Shalini T.', date: '2025-04-01', rating: 5, comment: 'My skin looks better even when I take this off! Perfect coverage too.' },
          { name: 'Nandini K.', date: '2025-03-14', rating: 4, comment: 'Feels like nothing on the skin but provides beautiful coverage.' }
        ]
      },
      {
        id: 16,
        category: 'Makeup',
        name: 'Cloud Set Baked Setting & Smoothing Powder',
        price: '₹650.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/KOSA-WU311_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/KOSA-WU311_V3.jpg',
        description: 'This innovative baked setting powder sets makeup while creating a soft-focus, airbrushed effect. The ultra-fine, lightweight formula controls shine without looking dry or cakey. Infused with light-diffusing particles to blur imperfections and minimize the appearance of pores and fine lines.',
        stock: 22,
        reviews: [
          { name: 'Reena J.', date: '2025-04-17', rating: 5, comment: 'The most beautiful setting powder! Sets without looking powdery.' },
          { name: 'Priyanka M.', date: '2025-03-24', rating: 4, comment: 'Controls my oily T-zone all day without drying out my cheeks.' }
        ]
      },
      {
        id: 17,
        category: 'Eye Makeup',
        name: 'Mascara',
        price: '₹1,200.00',
        image: 'https://i5.walmartimages.com/asr/0da4778a-8470-4a7a-aafa-e6957dd4dc46.9d393bc0fefd71d33801cb9567a3fc5c.jpeg',
        hoverImage: 'https://images.beautyanswered.com/applying-mascara-to-eyelashes.jpg',
        description: 'Our premium volumizing mascara creates dramatically fuller, longer lashes with just a few strokes. The innovative brush separates and coats each lash from root to tip, while the smudge-proof, long-lasting formula stays perfect all day without flaking or smudging. Ophthalmologist-tested and suitable for sensitive eyes.',
        stock: 25,
        reviews: [
          { name: 'Anjali P.', date: '2025-04-10', rating: 5, comment: 'This mascara gives amazing volume without clumping. Stays on all day!' },
          { name: 'Shreya M.', date: '2025-03-22', rating: 4, comment: 'Great for everyday use. Doesn\'t smudge even in humid weather.' }
        ]
      },
      {
        id: 18,
        category: 'Eye Makeup',
        name: 'Eyebrow Pencil',
        price: '₹350.00',
        image: 'https://i5.walmartimages.com/asr/e11c5dab-36ce-431b-8887-bfba4e8efcb3.dbff6830b8b0a47a39d2ce6fdd86ae82.jpeg',
        hoverImage: 'https://images-na.ssl-images-amazon.com/images/I/719lbuhaE3L.SL1200.jpg',
        description: 'This precision eyebrow pencil creates defined, natural-looking brows with ease. The ultra-fine tip allows for hair-like strokes that blend seamlessly with your natural brows. The waterproof formula ensures your brows stay perfect all day, while the included spoolie brush helps blend and groom for a polished finish.',
        stock: 30,
        reviews: [
          { name: 'Priya K.', date: '2025-04-05', rating: 5, comment: 'Perfect for creating natural-looking brows. The spoolie is a great addition!' },
          { name: 'Nisha R.', date: '2025-03-18', rating: 4, comment: 'Great color match and stays on all day. Easy to apply.' }
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
        id: 20,
        category: 'Eye Makeup',
        name: 'Xtension Kit',
        price: '₹1,000.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/VELR-WU53_V2.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/VELR-WU53_V1.jpg',
        description: 'This comprehensive eyelash extension kit contains everything you need for salon-quality lashes at home. Includes a variety of lash lengths for a customized look, professional-grade adhesive, precision applicator, and removal solution. The lightweight, natural-looking lashes blend seamlessly with your own for a fluttery, voluminous effect that lasts for weeks.',
        stock: 15,
        reviews: [
          { name: 'Aditi J.', date: '2025-04-08', rating: 5, comment: 'Professional quality at home! The variety of lash lengths is perfect.' },
          { name: 'Kavita N.', date: '2025-03-20', rating: 4, comment: 'Easy to apply with the included tools. Lashes look natural and last well.' }
        ]
      },
      {
        id: 21,
        category: 'Eye Makeup',
        name: 'Brow Definer',
        price: '₹600.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/ABEV-WU100_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/ABEV-WU100_V3.jpg',
        description: 'This dual-ended brow definer features an angled tip on one end for precise application and a spoolie brush on the other for perfect blending. The creamy, waterproof formula glides on smoothly and sets to a natural-looking finish that lasts all day. Available in multiple shades to match any hair color for perfectly defined, natural-looking brows.',
        stock: 20,
        reviews: [
          { name: 'Ritu P.', date: '2025-04-15', rating: 5, comment: 'The angled tip makes application so easy! Perfect for filling in sparse areas.' },
          { name: 'Sonia G.', date: '2025-03-30', rating: 4, comment: 'Love having both tools in one product. Creates natural-looking brows.' }
        ]
      },
      {
        id: 22,
        category: 'Eye Makeup',
        name: 'Smokey Eye Kit',
        price: '₹1,500.00',
        image: 'https://i.pinimg.com/originals/f6/5b/4b/f65b4bcd0503b3fb13d110b470aeace2.jpg',
        hoverImage: 'http://www.outfittrends.com/wp-content/uploads/2014/08/Peach-Smoky-Eye.jpg',
        description: 'Create the perfect smokey eye with this all-in-one kit containing everything you need for a dramatic eye look. Includes four complementary eyeshadows in matte and shimmer finishes, a creamy eyeliner, dual-ended applicator, and step-by-step instructions. The highly pigmented, long-wearing formulas blend seamlessly for a professional-looking result every time.',
        stock: 18,
        reviews: [
          { name: 'Neha T.', date: '2025-04-11', rating: 5, comment: 'Perfect for beginners! The instructions make it so easy to create a smokey eye.' },
          { name: 'Pooja S.', date: '2025-03-27', rating: 4, comment: 'Great pigmentation and the shades work beautifully together.' }
        ]
      },
      {
        id: 23,
        category: 'Eye Makeup',
        name: 'Eyeshadow Palette',
        price: '₹400.00',
        image: 'https://i5.walmartimages.com/asr/f607066a-ae12-430d-a6f7-61cac342cd40_1.21b52c99aaf31f3950097903691eca6b.jpeg',
        hoverImage: 'https://d1ak51zwgmtslz.cloudfront.net/PRODUCTS_EN/8690604479511_8.jpg',
        description: 'This versatile eyeshadow palette features 12 highly pigmented shades in a mix of matte and shimmer finishes. The buttery-smooth formula blends effortlessly for seamless color transitions, while the long-wearing pigments stay vibrant all day without creasing or fading. From neutral everyday looks to bold evening statements, this palette has everything you need.',
        stock: 25,
        reviews: [
          { name: 'Divya R.', date: '2025-04-09', rating: 5, comment: 'The color payoff is amazing and they blend like a dream!' },
          { name: 'Ananya K.', date: '2025-03-21', rating: 4, comment: 'Perfect mix of mattes and shimmers. Very versatile palette.' }
        ]
      },
      {
        id: 24,
        category: 'Eye Makeup',
        name: 'Liquid Eyeliner',
        price: '₹450.00',
        image: 'https://silkycosmetics.com/id/wp-content/uploads/2017/11/SG-Perfect-Matte-Liq-Eyeliner-01-Matte-Black_Lazada-Images-Post-1.png',
        hoverImage: 'https://blogscdn.thehut.net/app/uploads/sites/507/2020/09/0824-YPP271-EY-JN-Shot-3-1200x672_1601282224.jpg',
        description: 'This precision liquid eyeliner features a fine-tip applicator for creating sharp, defined lines with ease. The quick-drying, waterproof formula delivers intense color that won\'t smudge, fade, or flake throughout the day. Perfect for creating everything from subtle definition to dramatic cat eyes and graphic liner looks.',
        stock: 28,
        reviews: [
          { name: 'Isha M.', date: '2025-04-14', rating: 5, comment: 'The fine tip makes it so easy to create a perfect wing!' },
          { name: 'Tanya B.', date: '2025-03-29', rating: 4, comment: 'Intense black color that doesn\'t fade throughout the day.' }
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
        id: 26,
        category: 'Eye Makeup',
        name: 'Waterproof Mascara',
        price: '₹650.00',
        image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/18585713a.webp',
        hoverImage: 'https://www.fashionlady.in/wp-content/uploads/2017/02/Best-waterproof-mascara-for-women.jpg',
        description: 'This high-performance waterproof mascara stays put through swimming, workouts, and even the most emotional moments. The volumizing and lengthening formula creates dramatic lashes that won\'t smudge, flake, or run. The specially designed brush separates and coats each lash for clump-free volume that lasts all day and night.',
        stock: 22,
        reviews: [
          { name: 'Sneha K.', date: '2025-04-07', rating: 5, comment: 'Survived a beach day and a wedding! Doesn\'t budge at all.' },
          { name: 'Jyoti R.', date: '2025-03-19', rating: 4, comment: 'Great for humid weather. Gives amazing length and volume.' }
        ]
      },

      {
        id: 27,
        category: 'Eye Makeup',
        name: 'Eye Set',
        price: '₹999.00',
        image: 'https://is4.fwrdassets.com/images/p/fw/45/PMCG-WU17_V2.jpg',
        hoverImage: 'https://is4.fwrdassets.com/images/p/fw/45/PMCG-WU17_V1.jpg',
        description: 'An iconic palette with ten cult-classic shadows that embellish the eyes with single-swipe saturation. Elevate your artistry with formulations that release infinitely smooth and extremely blendable pigments for seamless color transitions and unprecedented buildability.',
        stock: 3,
        reviews: [
          { name: 'Sneha K.', date: '2025-04-07', rating: 5, comment: 'Survived a beach day and a wedding! Doesn\'t budge at all.' },
          { name: 'Jyoti R.', date: '2025-03-19', rating: 4, comment: 'Great for humid weather. Gives amazing length and volume.' }
        ]
      },
      {
        id: 28,
        category: 'Eye Makeup',
        name: 'Freestyle Color Cream',
        price: '₹2,029.47',
        image: 'https://is4.revolveassets.com/images/p4/n/uv/TDRV-WU7_V2.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/uv/TDRV-WU7_V3.jpg',
        description: 'The silky formula glides on effortlessly, leaving behind a high-shimmer, non-toxic, and buildable glitter makeup look for all-day use. This rose gold creamy eyeshadow can go anywhere-face, body, edges, or hair. Mix and match our shimmery shades to create combinations that are unique to you.',
        stock: 12,
        reviews: [
          { name: 'Sneha K.', date: '2025-04-07', rating: 5, comment: 'Survived a beach day and a wedding! Doesn\'t budge at all.' },
          { name: 'Jyoti R.', date: '2025-03-19', rating: 4, comment: 'Great for humid weather. Gives amazing length and volume.' }
        ]
      },
      {
        id: 26,
        category: 'Eye Makeup',
        name: 'Waterproof Mascara',
        price: '₹650.00',
        image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/18585713a.webp',
        hoverImage: 'https://www.fashionlady.in/wp-content/uploads/2017/02/Best-waterproof-mascara-for-women.jpg',
        description: 'This high-performance waterproof mascara stays put through swimming, workouts, and even the most emotional moments. The volumizing and lengthening formula creates dramatic lashes that won\'t smudge, flake, or run. The specially designed brush separates and coats each lash for clump-free volume that lasts all day and night.',
        stock: 22,
        reviews: [
          { name: 'Sneha K.', date: '2025-04-07', rating: 5, comment: 'Survived a beach day and a wedding! Doesn\'t budge at all.' },
          { name: 'Jyoti R.', date: '2025-03-19', rating: 4, comment: 'Great for humid weather. Gives amazing length and volume.' }
        ]
      },
      {
        id: 26,
        category: 'Eye Makeup',
        name: 'Waterproof Mascara',
        price: '₹650.00',
        image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/18585713a.webp',
        hoverImage: 'https://www.fashionlady.in/wp-content/uploads/2017/02/Best-waterproof-mascara-for-women.jpg',
        description: 'This high-performance waterproof mascara stays put through swimming, workouts, and even the most emotional moments. The volumizing and lengthening formula creates dramatic lashes that won\'t smudge, flake, or run. The specially designed brush separates and coats each lash for clump-free volume that lasts all day and night.',
        stock: 22,
        reviews: [
          { name: 'Sneha K.', date: '2025-04-07', rating: 5, comment: 'Survived a beach day and a wedding! Doesn\'t budge at all.' },
          { name: 'Jyoti R.', date: '2025-03-19', rating: 4, comment: 'Great for humid weather. Gives amazing length and volume.' }
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
      {
        id: 28,
        category: 'Lip Products',
        name: 'Lip Fetish Balm Divinyl Lip Shine',
        price: '₹350.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/PMCG-WU51_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/PMCG-WU51_V4.jpg',
        description: 'This innovative lip balm combines the hydration of a balm with the high-shine finish of a gloss. The lightweight, non-sticky formula glides on smoothly, delivering a sheer wash of color and mirror-like shine. Infused with antioxidants and hydrating ingredients, it nourishes lips while providing a plumping effect for a fuller appearance.',
        stock: 30,
        reviews: [
          { name: 'Priya K.', date: '2025-04-05', rating: 5, comment: 'The shine is incredible without being sticky! Feels so comfortable.' },
          { name: 'Nisha R.', date: '2025-03-18', rating: 4, comment: 'Perfect for everyday wear. Hydrating and gives a beautiful glossy finish.' }
        ]
      },
      {
        id: 29,
        category: 'Lip Products',
        name: 'Serum Balm',
        price: '₹500.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/MKER-WU28_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/MKER-WU28_V3.jpg',
        description: 'This innovative lip treatment combines the benefits of a serum and balm in one powerful formula. Packed with hyaluronic acid, peptides, and antioxidants, it delivers deep hydration while improving lip texture and volume over time. The lightweight, non-greasy formula can be used alone for a natural look or as a primer under lipstick for enhanced color and longevity.',
        stock: 22,
        reviews: [
          { name: 'Meera S.', date: '2025-04-12', rating: 5, comment: 'I\'ve noticed a huge difference in my lip texture since using this!' },
          { name: 'Tanvi D.', date: '2025-03-25', rating: 4, comment: 'Great as an overnight treatment. Wakes up with soft, plump lips.' }
        ]
      },
      {
        id: 30,
        category: 'Lip Products',
        name: 'Sugar, Sugar 100% Natural Lip Scrub',
        price: '₹1,000.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/NCLR-WU74_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/NCLR-WU74_V3.jpg',
        description: 'This 100% natural lip scrub gently exfoliates dry, flaky skin to reveal soft, smooth lips. Formulated with fine sugar crystals, nourishing oils, and honey, it buffs away dead skin while simultaneously hydrating and conditioning. The sweet, delicious flavor makes this treatment feel like a luxurious treat while preparing lips for flawless lipstick application.',
        stock: 18,
        reviews: [
          { name: 'Aditi J.', date: '2025-04-08', rating: 5, comment: 'My lipstick applies so much better after using this scrub!' },
          { name: 'Kavita N.', date: '2025-03-20', rating: 4, comment: 'Gentle yet effective. Leaves my lips incredibly soft.' }
        ]
      },
      {
        id: 31,
        category: 'Lip Products',
        name: 'SatinAllure Lipstick',
        price: '₹600.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/PMCG-WU181_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/PMCG-WU181_V3.jpg',
        description: 'This luxurious satin-finish lipstick delivers rich, vibrant color with just one swipe. The creamy formula glides on smoothly without dragging, providing medium-to-full coverage with a comfortable, non-drying feel. Infused with moisturizing ingredients, it keeps lips hydrated throughout wear while the long-lasting pigments ensure your color stays true for hours.',
        stock: 25,
        reviews: [
          { name: 'Ritu P.', date: '2025-04-15', rating: 5, comment: 'The most comfortable lipstick I\'ve ever worn! Color payoff is amazing.' },
          { name: 'Sonia G.', date: '2025-03-30', rating: 4, comment: 'Beautiful satin finish that doesn\'t dry out my lips. Long-lasting too!' }
        ]
      },
      {
        id: 32,
        category: 'Lip Products',
        name: 'Lip Velvet',
        price: '₹1,500.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/ABEV-WU398_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/ABEV-WU398_V3.jpg',
        description: 'This luxurious matte liquid lipstick delivers intense color with a velvety-soft finish. The lightweight formula applies smoothly and sets to a comfortable matte that doesn\'t dry out lips or settle into fine lines. The precision applicator allows for perfect application, while the long-wearing, transfer-resistant formula stays put through eating, drinking, and kissing.',
        stock: 20,
        reviews: [
          { name: 'Neha T.', date: '2025-04-11', rating: 5, comment: 'Finally a matte liquid lip that doesn\'t dry out my lips! Stays on all day.' },
          { name: 'Pooja S.', date: '2025-03-27', rating: 4, comment: 'Beautiful pigmentation and the formula feels lightweight on the lips.' }
        ]
      },
      {
        id: 7,
        category: 'Lip Products',
        name: 'Renew Lip Oil',
        price: '₹1,500.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/SGBY-WU41_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/SGBY-WU41_V2.jpg',
        description: 'This nourishing lip oil delivers intense hydration while enhancing your natural lip color. The non-sticky formula is infused with a blend of natural oils including jojoba, rosehip, and avocado to repair and protect dry lips. The subtle tint adapts to your pH level for a customized flush of color, while the glossy finish gives lips a plump, healthy appearance.',
        stock: 18,
        reviews: [
          { name: 'Divya R.', date: '2025-04-09', rating: 5, comment: 'So hydrating and gives my lips the perfect natural tint!' },
          { name: 'Ananya K.', date: '2025-03-21', rating: 4, comment: 'Love how this feels on the lips. Not sticky at all and very moisturizing.' }
        ]
      },
      {
        id: 33,
        category: 'Lip Products',
        name: 'All Over Color',
        price: '₹400.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/MSIX-WU6_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/NDSX-WU152_V6.jpg',
        description: 'This versatile multi-use color can be applied to lips, cheeks, and eyes for a coordinated monochromatic look. The creamy, buildable formula blends seamlessly into skin for a natural flush of color that can be layered for more intensity. The lightweight, hydrating formula feels comfortable on all areas and creates a cohesive, effortless look in seconds.',
        stock: 25,
        reviews: [
          { name: 'Isha M.', date: '2025-04-14', rating: 5, comment: 'So convenient for travel! Love using one product for my whole face.' },
          { name: 'Tanya B.', date: '2025-03-29', rating: 4, comment: 'Beautiful color that works well on lips and cheeks. Blends easily.' }
        ]
      },
      {
        id: 34,
        category: 'Lip Products',
        name: 'Hyaluronic Hydra-Balm',
        price: '₹450.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/BTER-WU305_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/BTER-WU305_V2.jpg',
        description: 'This intensive lip treatment is formulated with hyaluronic acid to deliver deep hydration and plumping benefits. The rich, buttery texture melts into lips, instantly relieving dryness and creating a protective barrier against environmental stressors. Perfect for severely dry or chapped lips, this balm provides both immediate relief and long-term improvement in lip texture and volume.',
        stock: 28,
        reviews: [
          { name: 'Aisha P.', date: '2025-04-13', rating: 5, comment: 'Saved my lips during winter! Nothing else worked as well as this.' },
          { name: 'Radhika S.', date: '2025-03-26', rating: 4, comment: 'I use this every night and wake up with soft, plump lips.' }
        ]
      },
      {
        id: 36,
        category: 'Lip Products',
        name: 'OneLiner Multi-Liner',
        price: '₹700.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/TOEI-WU62_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/TOEI-WU62_V8.jpg',
        description: 'This versatile lip liner can be used to define, fill, or color the entire lip. The creamy formula glides on smoothly without tugging, while the long-wearing, waterproof pigments ensure your lip color stays put without feathering or bleeding. Perfect for creating precise definition, enhancing lip shape, or wearing alone as a matte lip color.',
        stock: 22,
        reviews: [
          { name: 'Sneha K.', date: '2025-04-07', rating: 5, comment: 'The perfect lip liner! Creamy but doesn\'t smudge or feather.' },
          { name: 'Jyoti R.', date: '2025-03-19', rating: 4, comment: 'I love wearing this all over my lips for a long-lasting matte look.' }
        ]
      },
      {
        id: 37,
        category: 'Lip Products',
        name: 'Dramatique Mega Lip Pencil',
        price: '₹700.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/PMCG-WU252_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/PMCG-WU252_V3.jpg',
        description: 'This oversized lip pencil combines the precision of a liner with the coverage of a lipstick. The jumbo tip allows for quick and easy application, while the creamy, highly pigmented formula delivers rich, long-lasting color. The comfortable, non-drying texture feels lightweight on lips and can be applied sheer or built up for more intensity.',
        stock: 20,
        reviews: [
          { name: 'Preeti L.', date: '2025-04-16', rating: 5, comment: 'So easy to apply and the color payoff is incredible!' },
          { name: 'Manisha D.', date: '2025-03-31', rating: 4, comment: 'Love the convenience of this jumbo pencil. Very comfortable to wear.' }
        ]
      },
      {
        id: 38,
        category: 'Lip Products',
        name: 'Lip Butter Balm - Berry',
        price: '₹700.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/SUMR-WU35_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/SUMR-WU35_V3.jpg',
        description: 'This berry-tinted lip butter balm delivers intense hydration with a beautiful flush of color. The nourishing formula is packed with shea butter, coconut oil, and vitamin E to repair dry lips while providing a subtle berry tint that enhances your natural lip color. The non-sticky texture feels comfortable and leaves lips soft, smooth, and naturally plump.',
        stock: 18,
        reviews: [
          { name: 'Shikha G.', date: '2025-04-06', rating: 5, comment: 'The berry tint is so flattering and the formula is incredibly moisturizing!' },
          { name: 'Leela N.', date: '2025-03-23', rating: 4, comment: 'Perfect for everyday wear. Gives just the right amount of color.' }
        ]
      },
      {
        id: 39,
        category: 'Lip Products',
        name: 'LIP: Gloss',
        price: '₹700.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/PMCG-WU203_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/PMCG-WU203_V3.jpg',
        description: 'This high-shine lip gloss delivers mirror-like shine without the sticky feeling. The lightweight, cushiony formula glides on smoothly, providing a wash of color and intense glossiness that makes lips appear fuller and more hydrated. Infused with nourishing ingredients, it conditions lips while creating a plumping effect for a voluptuous pout.',
        stock: 25,
        reviews: [
          { name: 'Anita S.', date: '2025-04-04', rating: 5, comment: 'Finally a non-sticky gloss! The shine is incredible.' },
          { name: 'Geeta M.', date: '2025-03-17', rating: 4, comment: 'Beautiful color and shine. Feels comfortable on the lips.' }
        ]
      },
      {
        id: 40,
        category: 'Lip Products',
        name: 'Long-wear Lip Topper',
        price: '₹600.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/JCOS-WU13_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/JCOS-WU13_V2.jpg',
        description: 'This shimmering lip topper adds dimension and shine to any lip color. The lightweight, non-sticky formula is enriched with coconut oil, shea butter, and vitamin E for a moisturizing feel that doesn\'t compromise longevity. The versatile formula can be worn alone for a subtle shimmer or layered over lipstick to transform any shade with multidimensional sparkle and shine.',
        stock: 22,
        reviews: [
          { name: 'Kiran R.', date: '2025-04-03', rating: 5, comment: 'Transforms any lipstick into something special! Not sticky at all.' },
          { name: 'Vandana P.', date: '2025-03-16', rating: 4, comment: 'Beautiful shimmer that lasts for hours. Very comfortable to wear.' }
        ]
      },
      {
        id: 41,
        category: 'Lip Products',
        name: 'ShineOn Lip Jelly',
        price: '₹600.00',
        image: 'https://is4.revolveassets.com/images/p4/n/z/TOEI-WU15_V1.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/z/TOEI-WU15_V2.jpg',
        description: 'This innovative lip treatment combines the shine of a gloss with the comfort of a balm. The cushiony, non-sticky formula delivers a wash of color and high-shine finish while nourishing lips with a blend of apricot oil, raspberry oil, and rosehip oil. Perfect for those who want the look of a gloss without the tacky feel, this lip jelly keeps lips healthy and hydrated all day.',
        stock: 20,
        reviews: [
          { name: 'Shalini T.', date: '2025-04-01', rating: 5, comment: 'The perfect balance between a gloss and balm! So comfortable.' },
          { name: 'Nandini K.', date: '2025-03-14', rating: 4, comment: 'Love the glossy finish without any stickiness. Very hydrating.' }
        ]
      },
      {
        id: 42,
        category: 'Lip Products',
        name: 'Nude Natural Lips Kit',

        price: '₹600.00',
        image: 'https://is4.revolveassets.com/images/p4/n/uv/NDSX-WU141_V2.jpg',
        hoverImage: 'https://is4.revolveassets.com/images/p4/n/uv/NDSX-WU141_V1.jpg',
        description: 'This exclusive kit features three mini, GEL COLOR LIP + CHEEK BALMS in carefully curated shades to match their individual perfect nude lip color. Packaged in a 100% reusable, portable, mini tin with mirror, this three-piece mini lip kit contains everything you need to create a perfectly juicy pout on-the-go.',
        stock: 15,
        reviews: [
          { name: 'Reena J.', date: '2025-04-17', rating: 5, comment: 'Love being able to mix shades for my perfect nude! Great pigmentation.' },
          { name: 'Priyanka M.', date: '2025-03-24', rating: 4, comment: 'The range of nudes is perfect and the formula is very comfortable.' }
        ]
      }
      
      
    
    




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