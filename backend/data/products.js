const products = [
  {
    name: 'Air Humidifier',
    headline:
      'Air Humidifier with USB Cable | 7 Multicolors | Air diffuser | Runs 18-20 Hours',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Air_Humidifiers.png?updatedAt=1640266927148',
    category: 'essential-oils',
    price: 599,
    size: 420,
    countInStock: 10,
    rating: 5.0,
    numReviews: 50,
    description:
      'The Humidifier Doesn’t Just Relax And Moist The Air Around You, It Also Acts As A Diffuser That Eliminates The Bad Smell Around You. That Means Breathing Healthier And Ionized Air Thats Good For Your Lungs And Your Skin. It Is Portable Which Makes It Convenient To Carry Around Whether You’re At Home Or A Yoga Class. The Humidifier Makes You Enjoy Fresh And Moist Air.',
    ingredients: 'Air Humidifier',
    howtouse:
      'Just turn it on, it remove unfavorable smells. Increase Humidity Of The Air, Reducing Dust And Bacteria. Moisturizing Your Skin. You Can Add A Few Drops Of Your Essential Oil To It. Specification: Humidification Method: Ultrasonic',
  },
  {
    name: 'Eucalyptus Oil',
    headline:
      'Cultivist Eucalyptus Oil, Product of Nilgiris (Nilgiri tel) , Breathe Easy, Therapeutic Grade, Pure and Natural, Relief from Common cold/cough and Nasal congestion, Used for steam inhalation, Natural Substitute for VapoRubs (Eco-friendly packaging with sac and dropper cap)',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Eucalyptus_Oil.png?updatedAt=1639503383099',
    category: 'essential-oils',
    price: 299,
    size: 15,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    description:
      'Pure and Natural Eucalyptus Oil made in Nilgiris. Eucalyptus oil can be used during relaxing or therapeutic massages, as it is also known to help reduce inflammation and pain when applied on top of skin. It makes great DIY cleaning product. It works well on most surfaces. Mix a few drops of eucalyptus essential oil with water in a spray bottle, shake well before use. Gives relief from common cold. Also used for Aromatherapy and a room freshener',
    ingredients: 'Eucalyptus',
    howtouse:
      'Eucalyptus oil is available as an essential oil that is used as a medicine to treat a variety of common diseases and conditions including nasal congestion, asthma, and as a tick repellant. Diluted eucalyptus oil may also be applied to the skin as a remedy for health problems such as arthritis and skin ulcers.',
  },
  {
    name: 'Fine Orthodox black tea',
    headline:
      'Refreshing Fine Orthodox Black Tea | Tastes best with few drops of lemon and honey | 100 grams',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Teas/Black_tea_orthodox_front_jIpXDRzZm.png?updatedAt=1640267561408',
    category: 'Tea',
    price: 399,
    size: 100,
    countInStock: 10,
    rating: 4.8,
    numReviews: 40,
    description:
      'Just like a fairytale, the story of this Black Tea is an enchanted one. Wiry black tea leaves plucked and processed by skilled farmers from the gardens of Nilgiris, convey a story of their effort, time taken and properties of this tea.',
    ingredients: 'Whole leaves Black Tea',
    howtouse:
      '1 PUT LOOSE TEA IN THE CUP. | 2 POUR HOT/COLD WATER. | 3 BREW FOR 2 MINUTES | Try it as a refreshingly fruity iced tea or simply brew it hot. | For iced tea : After brewing, allow the tea to cool and pour in a glass full of ice. Enjoy your tea!',
  },
  {
    name: 'Frankincense Oil',
    headline:
      'Frankincense oil for glowing skin and face / diffuser / Aromatherapy / Fragrance  / Pure & Undiluted / Therapeutic Grade Essential Oil 15ml',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Frankincense_Oil.png?updatedAt=1639503367926',
    category: 'essential-oils',
    price: 259,
    size: 15,
    countInStock: 10,
    rating: 4.9,
    numReviews: 15,
    description:
      '100% Natural Therapeutic Grade Frankincense Essential Oil. Frankincense Oil has been used in Ayurvedic for hundreds of years. It is very useful in perfumes due to its therapeutic properties and values. It prevents dry skin and wrinkles, age spots & stretch marks. It is used in skin tightening cream, soaps making, candles and various other products.',
    ingredients: 'Frankincense',
    howtouse: 'It is recommended to dilute essential oils with a carrier oil.',
  },
  {
    name: 'Chamomile Tea',
    headline:
      'Chamomile Tea | Tastes best with few drops of lemon and honey | 100 grams',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Teas/Chamomile_tea_front_DHBqqdSvT.png?updatedAt=1640267562004',
    category: 'Tea',
    price: 399,
    size: 100,
    countInStock: 10,
    rating: 4.3,
    numReviews: 10,
    description:
      'Chamomile is a well-known cure for insomnia that works by calming the nervous system. Bringing them together, this tea is a fragrant, soothing delight – like a nostalgic melody on a rainy afternoon. This infusion is a balm for the nerves and the gut. Its soothing properties aid digestion and promote better sleep. The perfect tea to relax your body and mind.',
    ingredients: 'Pure Chamomile Flowers, Tea Leaves',
    howtouse:
      '1 PUT LOOSE TEA IN THE CUP. | 2 POUR HOT/COLD WATER. | 3 BREW FOR 2 MINUTES | Try it as a refreshingly fruity iced tea or simply brew it hot. | For iced tea : After brewing, allow the tea to cool and pour in a glass full of ice. Enjoy your tea!',
  },
  {
    name: 'Lavender Oil',
    headline:
      'Lavender Essential Oil for Healthy Hair, Skin, Sleep  /100% Pure, Natural and Undiluted, 15ML',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Lavender_Oil.png?updatedAt=1639503356348',
    category: 'essential-oils',
    price: 359,
    size: 15,
    countInStock: 10,
    rating: 3.7,
    numReviews: 17,
    description:
      '100% Natural Therapeutic Grade LavenderEssential Oil | 100% Pure & Natural',
    ingredients: 'Lavender',
    howtouse:
      'Add to bath water to relax & refresh your body.Add 2 to 3 drops of Essential oil to any Carrier oil and apply on hair & skin for best results.',
  },
  {
    name: 'Blue Pea Tea',
    headline:
      'Blue Pea Tea | Lowers blood pressure and has anti-anxiety, anti-asthmatic and pain relieving properties | 100 grams',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Teas/Blue_pea_tea_front_z4S60JvXxHY.png?updatedAt=1640267561560',
    category: 'Tea',
    price: 399,
    size: 100,
    countInStock: 10,
    rating: 4.4,
    numReviews: 30,
    description:
      'Butterfly-pea flower tea commonly known as Blue Tea is a caffeine-free herbal tea, or tisane, a beverage made from a decoction or infusion of the flower petals or even whole flower of the Clitoria ternatea plant.',
    ingredients: 'Butterfly pea flower dried',
    howtouse:
      '1 PUT LOOSE TEA IN THE CUP. | 2 POUR HOT/COLD WATER. | 3 BREW FOR 2 MINUTES | Try it as a refreshingly fruity iced tea or simply brew it hot. | For iced tea : After brewing, allow the tea to cool and pour in a glass full of ice. Enjoy your tea!',
  },
  {
    name: 'Rosemary Oil',
    headline:
      'Rosemary Essential Oil 15ML, for Skin, Muscle & Joints, Hair Conditioner - 100% Pure Therapeutic Grade Organic essential-oils',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Rosemary_Oil.png?updatedAt=1639503309695',
    category: 'essential-oils',
    price: 199,
    size: 15,
    countInStock: 10,
    rating: 4.2,
    numReviews: 19,
    description:
      'Our Rosemary Essential Oil is 100% Pure, Un-diluted, and Natural. Free from adulterants, or additives.',
    ingredients: 'Rosemary',
    howtouse:
      'HAIR CARE: Massaging the scalp with Rosemary oil will stimulate hair growth. It will not clog the follicles., NATURAL PAIN RELIEVER: Helps those suffering from joint pain or muscular pain. Also, an ideal oil to relieve headache., MIND SOOTHER: An energizing oil that uplifts your spirits, stimulates mental activity, improves creativity, and confidence, SKIN CARE: Regular massaging with Rosemary Essential Oil will improve skin texture',
  },
  {
    name: 'Green Tea',
    headline:
      'Green Tea | Tastes best with few drops of lemon and honey | 100 grams',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Teas/Green_tea_front_fiRyhfJXW.png?updatedAt=1640267562723',
    category: 'Tea',
    price: 399,
    size: 100,
    countInStock: 10,
    rating: 4.4,
    numReviews: 30,
    description:
      'Holiday in a teacup. This tropical green tea brings back memories of that vacation — that happy place. Brew some for the day dreamer in you. Shortlisted by our master tasters, we have curated  our best-selling whole-leaf green tea.',
    ingredients: 'Green Tea',
    howtouse:
      '1 PUT LOOSE TEA IN THE CUP. | 2 POUR HOT/COLD WATER. | 3 BREW FOR 2 MINUTES | Try it as a refreshingly fruity iced tea or simply brew it hot. | For iced tea : After brewing, allow the tea to cool and pour in a glass full of ice. Enjoy your tea!',
  },
  {
    name: 'Tea Tree Oil',
    headline:
      'Tea Tree Essential Oil 100% Pure, Undiluted, Natural & Organic for Skin, Hair, Pimples, Acne, Dandruff, T Zone & Underarm - High Potency Premium Essential Oil',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Tea_Oil.png?updatedAt=1639503330795',
    category: 'essential-oils',
    price: 279,
    size: 15,
    countInStock: 10,
    rating: 4.6,
    numReviews: 14,
    description:
      'Tea Tree Essential Oil is extracted from the leaves of Melaleuca alternifolia (Tea Tree) by steam distillation. It is SUPERIOR as it only offers the finest grade of organic essential oils. Pure and Natural Ingredients that are grown in India. Vegan. Cruelty-free. Made with expertise of 2 decades.',
    ingredients: 'Tea Tree',
    howtouse:
      'It is a wonderful way to comfort and enhance long term care. Ideal to use after gardening trekking, during spa, yoga, meditation and for skin and hair rejuvenation, during summer months, massage after a long hour of strenuous activity or for a facial steam.',
  },
  {
    name: 'Ashwagandha Tea',
    headline:
      'Ashwagandha Tea | Lowers stress and helps improve fertility | 100 grams',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Teas/Ashwagandha_tea_front_PtJR7yJuh.png?updatedAt=1640267561207',
    category: 'Tea',
    price: 399,
    size: 100,
    countInStock: 10,
    rating: 4.6,
    numReviews: 25,
    description:
      'Roots of Ashwagandha, a well known ancient ayurvedic herb, is infused into High Mountain Black Tea. It is a perfect drink to build immunity, induce calmness and relieve stress',
    ingredients: 'Ashwagandha Tea',
    howtouse:
      '1 PUT LOOSE TEA IN THE CUP. | 2 POUR HOT/COLD WATER. | 3 BREW FOR 2 MINUTES | Try it as a refreshingly fruity iced tea or simply brew it hot. | For iced tea : After brewing, allow the tea to cool and pour in a glass full of ice. Enjoy your tea!',
  },
  {
    name: 'Ylang Ylang Oil',
    headline:
      'Ylang Ylang Essential Oil to Strengthen Hair Roots, Control Hair Fall, Skin Moisture, Controls Acne, Aromatherapy - 100% Pure, Natural & Undiluted Premium Essential Oil, 15ml',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Ylang_Oil.png?updatedAt=1639503344627',
    category: 'essential-oils',
    price: 399,
    size: 15,
    countInStock: 10,
    rating: 4.4,
    numReviews: 23,
    description:
      'Ylang Ylang is beautifully fragrant, with a heavy, sweet, slightly fruity floral aroma. One of the best ways to achieve all benefits of Ylang Ylang Essential Oil is to use it for diffusion. Ylang Ylang Essential Oil is extracted from the flowers of Cananga odorata (Ylang Ylang) by steam distillation. Soulflower Essential Oil offers the finest grade of organic essential oils. Pure and Natural Ingredients that are grown in India',
    ingredients: 'Ylang Ylang',
    howtouse:
      'Add it to your daily bath. Use it with your daily moisturizer for your skin. Mix 2 drops with your regular oil to massage on the scalp',
  },
  {
    name: 'Turmeric Tea',
    headline:
      'Turmeric Tea | Relieves joint pain and improves immunity | 100 grams',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Teas/Turmeric_tea_front_lrSbZEO-6Ck.png?updatedAt=1640267564291',
    category: 'Tea',
    price: 399,
    size: 100,
    countInStock: 10,
    rating: 4.6,
    numReviews: 25,
    description:
      'Inspired by an Ayurvedic recipe for balancing your senses, Turmeric Tea is our favourite immunity booster. Rain or sunshine, sip this brew all year through.An aromatic herbal blend with immunity boosting ingredients.',
    ingredients: 'Black tea, Turmeric',
    howtouse:
      '1 PUT LOOSE TEA IN THE CUP. | 2 POUR HOT/COLD WATER. | 3 BREW FOR 2 MINUTES | Try it as a refreshingly fruity iced tea or simply brew it hot. | For iced tea : After brewing, allow the tea to cool and pour in a glass full of ice. Enjoy your tea!',
  },
  {
    name: 'Peppermint Oil',
    headline:
      'Peppermint Mentha Piperita Essential Oil - 100% Pure Aroma, Therapeutic Grade (15 ML)',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Essential_Oils/Peppermint_Oil.png?updatedAt=1640264193627',
    category: 'essential-oils',
    price: 399,
    size: 15,
    countInStock: 10,
    rating: 4.5,
    numReviews: 13,
    description:
      'Peppermint Essential Oil is extracted from the plant Mentha piperita also known a brandy mint or balm mint. The entire plant above the ground is used for the extraction of oil and that too before it starts flowering. The oil is extracted through the process of steam distillation where the fresh as well as partially dried plants are used. Peppermint is the native of the Mediterranean and it’s a perennial herb with hairy and serrated leaves that are arranged in conical shape',
    ingredients: 'Peppermint',
    howtouse:
      'If it is to be applied to the skin or body, it should always be diluted in a suitable Carrier Oil like Jojoba Oil or Coconut Oil.Essential Oils should always be diluted with suitable Carrier Oil.',
  },
  {
    name: 'Cordyceps Tea',
    headline:
      'Cordyceps Tea | Improves Lung health (Apt for smokers) | 100 grams',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Teas/Cordyceps_tea_front_pInKN_PVF.png?updatedAt=1640267562475',
    category: 'Tea',
    price: 399,
    size: 100,
    countInStock: 10,
    rating: 4.3,
    numReviews: 29,
    description:
      'Cordyceps Tea is mix of Dried Cordyceps Extract, premium Darjeeling Green Tea and Stevia Leaves. For maximum benefits, avoid adding milk or sugar. You can add fresh mint leaves to make your Cordyceps Green Tea more enjoyable. Cordyceps optimizes oxygen uptake and delivery to increase vitality and endurance. Awaken, energy, improve cardio and ignite your inner strength. Add one teaspoon (2 grams) of Cordyceps Mushroom Tea to boiling water. Let it simmer for 2-3 minutes and enjoy your relxing cup of cordyceps tea. We recommended having 2 cups for first 3 weeks to accelerate results.',
    ingredients: 'Cordyceps Tea',
    howtouse:
      '1 PUT LOOSE TEA IN THE CUP. | 2 POUR HOT/COLD WATER. | 3 BREW FOR 2 MINUTES | Try it as a refreshingly fruity iced tea or simply brew it hot. | For iced tea : After brewing, allow the tea to cool and pour in a glass full of ice. Enjoy your tea!',
  },
  {
    name: 'Lemongrass oil',
    headline:
      'LemonGrass Essential Oil, 100% Pure Steam Distilled Natural (15ML)',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Essential_Oils/Lemon_Grass_Oil.png?updatedAt=1640264438301',
    category: 'essential-oils',
    price: 399,
    size: 15,
    countInStock: 10,
    rating: 4.8,
    numReviews: 17,
    description:
      'Lemongrass oil is popularly used in soaps, lotion and other cosmetic products as it has a strong citrus scent. In aromatherapy it is widely used to reduce stress, help one relax and ease anxiety.',
    ingredients: 'Lemongrass',
    howtouse:
      'To use lemongrass oil in aromatherapy- Add 12 drops of lemongrass essential oil to 1 teaspoon carrier oil. For good sleep and a relaxed mind – Use it as a room spray when at home for a fresh aura. Simply add a few drops of this oil into a spritzer with water and spray it.',
  },
  {
    name: 'Kadak Masala chai',
    headline:
      'Kadak Masala chai | The Desi way to get rid of all your problems | 100 grams',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Teas/Kadak_masala_chai_front_euGsEaApBuf.png?updatedAt=1640267563161',
    category: 'Tea',
    price: 399,
    size: 100,
    countInStock: 10,
    rating: 4.8,
    numReviews: 39,
    description:
      'The perfect blend of strong Assam CTC and aromatic Indian spices to brew a bold cup. Masala Chai is a blend expertly made by our in-house master blenders. Cinnamon, black pepper, cardamom, clove, and ginger are mixed in precision with chai, picked from the finest Assam tea estates. As you begin sipping this aromatic chai, all the spices, and the chai balance well in harmony. A cup, rich in history and tradition!',
    ingredients: 'Kadak Masala chai',
    howtouse:
      '1 PUT LOOSE TEA IN THE CUP. | 2 POUR HOT/COLD WATER. | 3 BREW FOR 2 MINUTES | Try it as a refreshingly fruity iced tea or simply brew it hot. | For iced tea : After brewing, allow the tea to cool and pour in a glass full of ice. Enjoy your tea!',
  },
  {
    name: 'Neem oil',
    headline:
      'Neem Oil – 15 ml | 100% Pure Certified Organic Cold-Pressed Anti-Aging Moisturizer Oil for Beautiful Skin and Hair',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Essential_Oils/Neem_Oil.png?updatedAt=1640264416030',
    category: 'essential-oils',
    price: 399,
    size: 15,
    countInStock: 10,
    rating: 4.1,
    numReviews: 27,
    description:
      '100% pure neem oil, you will enjoy an incredible number of benefits it can bring to your face, skin & hair. Our pure Neem oil is USDA organic which is authentic, pure, natural, and hexane-free. This neem essential oil is a perfect natural Anti-Aging Moisturizer, Antiseptic, Insecticide & Fungicide.',
    ingredients: 'Neem',
    howtouse:
      'Apply directly or blend a small amount of pure essential oil with your favorite lotions or shampoos for amazing benefits.Essential Oils should always be diluted with suitable Carrier Oil.',
  },
  {
    name: 'Tapri Wala Chai',
    headline: 'Tapri Wala Chai | Get local for a while | 100 grams',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Teas/Tapri_wala_chai_front_FYqEmtxBi.png?updatedAt=1640267564198',
    category: 'Tea',
    price: 399,
    size: 100,
    countInStock: 10,
    rating: 4.4,
    numReviews: 41,
    description: 'Tapri Wala Chai',
    ingredients: 'Tapri Wala Chai',
    howtouse:
      '1 PUT LOOSE TEA IN THE CUP. | 2 POUR HOT/COLD WATER. | 3 BREW FOR 2 MINUTES | Try it as a refreshingly fruity iced tea or simply brew it hot. | For iced tea : After brewing, allow the tea to cool and pour in a glass full of ice. Enjoy your tea!',
  },
  {
    name: 'Camphor oil',
    headline:
      'Camphor Essential Oil - Pure Natural Therapeutic Grade Oil Therapeutic Grade Oil for Skin Care & Hair Care, 15 ml',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Essential_Oils/Camphor_Oil.png?updatedAt=1640264457525',
    category: 'essential-oils',
    price: 399,
    size: 15,
    countInStock: 10,
    rating: 4.6,
    numReviews: 22,
    description:
      'Camphor Oil is Ideal for Skin, Hair Dandruff, Hair Growth, Hair loss Treatment, and Diffuser. Regular application of Camphor and Coconut Oil Blend is highly effective to sooth and lessen skin itching. It also helps protect skin from getting excessive dry. White camphor Oil is extracted from the ground dry wood by the process of steam distillation. It is native to India. It is white in color. This natural camphor Oil gets easily blend with Citrus Oil, eucalyptus, lavender, rosemary and spice Oil. It is camphorous aroma Oil.',
    ingredients: 'Camphor',
    howtouse:
      'Mix few drops of camphor oil with coconut oil and apply it on the scalp to reduce danruff.Essential Oils should always be diluted with suitable Carrier Oil.',
  },
  {
    name: 'Kattan Chai 1',
    headline:
      'Kattan Chai | Gives energy boost and improves digestion | 100 grams',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Teas/Tapri_wala_chai_front__3__48F5r9M8A.png?updatedAt=1640267563940',
    category: 'Tea',
    price: 399,
    size: 100,
    countInStock: 10,
    rating: 4.4,
    numReviews: 41,
    description: 'Kattan Chai',
    ingredients: 'Kattan Chai',
    howtouse:
      '1 PUT LOOSE TEA IN THE CUP. | 2 POUR HOT/COLD WATER. | 3 BREW FOR 2 MINUTES | Try it as a refreshingly fruity iced tea or simply brew it hot. | For iced tea : After brewing, allow the tea to cool and pour in a glass full of ice. Enjoy your tea!',
  },
  {
    name: 'Gaultheria Oil',
    headline:
      'Gaultheria Oil 15 ML (JOINT PAIN OIL) Winter Green Essential Oil, Natural pain reliever for all kinds of Joint pain',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Essential_Oils/Gaultheria_Oil.png?updatedAt=1640264486558',
    category: 'essential-oils',
    price: 399,
    size: 15,
    countInStock: 10,
    rating: 4.8,
    numReviews: 35,
    description:
      'Essential oil by steam distillation from the leaves; previously macerated in warm water. This oil may help in muscular pains, rheumatic pains, staunch bloody wounds, applied to dog bites, snakebites, and insect bites. Swellings, ulcers etc. Also used as flavoring agent in soft drinks. Contains a high concentration of methyl salicylate, which is the main ingredient widely used in commercially made muscle balms specifically designed to soothe joint pain and arthritic discomfort. As such it can be used to target similar discomfort and may reduce joint pain.',
    ingredients: 'Methyl salicylate, Gaultheria',
    howtouse:
      'Diilute 2-3 drops with a 3 table spoon of carrier oil, such as coconut oil, and massage into the skin to produce a warm sensation. Essential Oils should always be diluted with suitable Carrier Oil. Essential oil is highly toxic and should never be ingested under any circumstances.',
  },
  {
    name: 'Kattan Chai 2',
    headline:
      'Kattan Chai | Tastes best with few drops of lemon and honey | 100 grams',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Teas/Tapri_wala_chai_front_FYqEmtxBi.png?updatedAt=1640267564198',
    category: 'Tea',
    price: 399,
    size: 100,
    countInStock: 10,
    rating: 4.4,
    numReviews: 41,
    description: 'Kattan Chai | Tastes best with few drops of lemon and honey',
    ingredients: 'Kattan Chai',
    howtouse:
      '1 PUT LOOSE TEA IN THE CUP. | 2 POUR HOT/COLD WATER. | 3 BREW FOR 2 MINUTES | Try it as a refreshingly fruity iced tea or simply brew it hot. | For iced tea : After brewing, allow the tea to cool and pour in a glass full of ice. Enjoy your tea!',
  },
  {
    name: 'Rose Oil',
    headline:
      'Rose Essential Oil 15 Ml | Winter Green Essential Oil, Natural pain reliever for all kinds of Joint pain',
    image:
      'https://ik.imagekit.io/cz92t2phsuf/Essential_Oils/Gaultheria_Oil.png?updatedAt=1640264486558',
    category: 'essential-oils',
    price: 399,
    size: 15,
    countInStock: 10,
    rating: 4.8,
    numReviews: 35,
    description:
      'Rose essential oil has a very sweet and dreamy fragrance. It is used highly in cosmetic products but also has other uses. It has antibacterial and antifungal properties. It also helps with anxiety and depression',
    ingredients: 'Rose',
    howtouse:
      'Add 10 drops of rose essential oil to carrier oil. Add this oil blend to your bathtub. To treat anxiety, or depression – Add a few drops of rose oil to your diffuser.You can also apply this oil (mixed with a carrier oil of course) very lightly on your chest, wrist or neck. To use rose oil in aromatherapy and body massage – Add few drops of rose essential oil to any carrier oil, (you can use coconut oil, sweet almond oil, or jojoba oil.) Mix into your warm bath or simply massage into your skin.',
  },
];

export default products;
