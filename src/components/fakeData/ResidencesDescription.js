import { useEffect, useState } from 'react'

export default function ResidencesDescription(name) {
    const [ownerDescription, setOwnerDescription] = useState("empty...");

    const descriptions = [{"Mac's Cottage" : `Welcome to Mac's Cottage, a charming retreat located at 123 Charming Street, Small Town, USA. This cozy apartment, managed by the hospitable Mac Miller, offers a delightful escape for your next getaway.

    With two inviting bedrooms and a well-appointed bathroom, Mac's Cottage is the perfect haven for up to four guests. Step into a warm and welcoming atmosphere enhanced by features like a fireplace and rustic wooden beams that add character to the space.
    
    Immerse yourself in the tranquility of the private garden, creating a serene outdoor oasis just steps away from your doorstep. The perfect spot for a morning coffee or an evening under the stars.
    
    At Mac's Cottage, your comfort is our priority. This smoke-free and pet-friendly haven ensures a clean and allergen-free environment for all guests. The accommodation is equipped with essential amenities, including WiFi for staying connected and a parking space for your convenience.
    
    While you may be tempted to spend all your time in the cozy interior, don't forget to explore the surrounding area. The apartment is ideally situated with a short distance of 4 units away from local attractions and points of interest.
    
    For the budget-conscious traveler, the price per night is set at a reasonable $150, providing excellent value for the quality of accommodation offered. Mac's Cottage aims to provide an affordable yet delightful experience for those seeking a home away from home.
    
    Escape the ordinary and book your stay at Mac's Cottage today. Experience the charm, comfort, and hospitality that sets this apartment apart from the rest. Your ideal getaway awaits in this enchanting retreat managed by the one and only Mac Miller.`}
    ,{"Joker's Hideaway" : `Step into the eccentric world of Joker's Hideaway, located at 666 Mystery Lane in the heart of Gotham City, USA. This uniquely designed apartment, owned and curated by none other than the infamous Joker, promises an unforgettable experience for those who dare to embrace the chaos.
    
    With six enigmatic bedrooms and three bathrooms, Joker's Hideaway is a labyrinth of surprises awaiting your discovery. Unleash your sense of mischief in the specially designated "Mischief Room" or indulge in a relaxing soak in the "Bathtub of Laughter." The entire space is a masterpiece of whimsy, with "Chaos Central" being the focal point of the madness.
    
    As the only accommodation where smoking is not just allowed but encouraged, Joker's Hideaway caters to those with a taste for the unconventional. Pet-friendly and filled with unpredictable features, this hideaway is a haven for those who appreciate the unconventional.
    
    Enjoy the convenience of modern amenities, including WiFi to keep you connected to the world outside the madness, parking for your mode of transportation, and a balcony and garden to escape the mayhem and enjoy a moment of tranquility.
    
    Priced at $420 per night, this hideaway is not for the faint-hearted but promises an experience like no other. The 5-star rating reflects the unparalleled hospitality and unique atmosphere provided by the one and only Joker.
    
    Embark on an extraordinary adventure and book your stay at Joker's Hideaway. Embrace the chaos, revel in the madness, and make memories that will last a lifetime in this one-of-a-kind retreat owned by the iconic Joker himself. Dare to be different and indulge in the madness that awaits you at Joker's Hideaway!`}
,{"Lennon's Peaceful Place" : `Welcome to Lennon's Peaceful Place, a harmonious retreat nestled at 321 Strawberry Fields in the iconic city of Liverpool, UK. This enchanting apartment, owned and inspired by the legendary John Lennon of The Beatles, invites you to experience a tranquil escape in a setting that echoes the spirit of peace and creativity.

Discover the charm of Lennon's Peaceful Place, boasting five cozy bedrooms and two thoughtfully designed bathrooms. Immerse yourself in the "Imagine Room," a space that captures the essence of John Lennon's visionary spirit. Feel the vintage vibes throughout the apartment, creating a nostalgic ambiance that pays homage to the musical heritage of the Beatles.

As a pet-friendly and smoke-friendly haven, Lennon's Peaceful Place accommodates your every comfort, ensuring a welcoming environment for all guests. Enjoy the convenience of modern amenities, including WiFi for staying connected, parking for your convenience, and a balcony offering a peaceful view of the surroundings.

Priced at a reasonable $120 per night, Lennon's Peaceful Place provides an affordable yet exceptional experience for those seeking a touch of musical history. The 4-star rating reflects the serenity and creative atmosphere that permeates this unique retreat.

While there may not be a garden, the apartment is strategically located just 200 units away from the heart of Liverpool's cultural attractions, allowing you to explore the city's vibrant history and musical legacy.

Embark on a journey through Lennon's Peaceful Place and let the spirit of John Lennon guide your stay. Immerse yourself in the tranquility, soak in the vintage vibes, and experience a stay that harmonizes with the spirit of one of the greatest musicians in history. Book your stay now and create memories in this homage to the legendary John Lennon.`}
,{"Beyoncé's Luxurious Loft" : `Welcome to Beyoncé's Luxurious Loft, an exclusive haven of opulence located at 567 Diva Drive in the heart of Hollywood, USA. This sophisticated loft, owned by the iconic Beyoncé, promises an unparalleled experience of luxury, glamour, and VIP vibes.

Indulge in the splendor of Beyoncé's Luxurious Loft, featuring two lavish bedrooms and a sumptuous bathroom. Immerse yourself in the "Golden Glam" ambiance, where every detail reflects the unparalleled style and sophistication of the global music sensation.

The loft offers an intimate escape with features such as the "Starlight Lounge," providing a celestial setting for relaxation and entertainment. Feel the VIP vibes coursing through the space, creating an atmosphere fit for royalty.

As a smoke-friendly and pet-friendly retreat, Beyoncé's Luxurious Loft caters to those seeking a lavish experience without compromising on comfort. The accommodation includes parking for your convenience, ensuring a seamless and stress-free stay.

Priced at $400 per night, this exclusive loft offers a taste of the high life. While WiFi is not available, you'll find yourself immersed in the glitz and glam of Hollywood, just 555 units away from the heart of the entertainment capital.

Despite the 3-star rating, Beyoncé's Luxurious Loft promises an unforgettable stay in an atmosphere dripping with star power. Book your stay now and elevate your experience to a level befitting a true diva. Immerse yourself in the luxury, embrace the VIP vibes, and make memories in this exclusive retreat curated by the one and only Beyoncé.`}
,{"Einstein's Intellectual Haven" : `Welcome to Einstein's Intellectual Haven, a thought-provoking retreat situated at 999 Quantum Lane in the heart of Physics City, Switzerland. This distinctive residence, once owned by the brilliant mind himself, Albert Einstein, invites you to immerse yourself in an environment that sparks intellect, creativity, and scientific curiosity.

Einstein's Intellectual Haven features four comfortable bedrooms and a well-appointed bathroom. Delve into the "Genius Lab," a space designed to inspire contemplation and intellectual exploration. Relax in the "E=mc² Lounge," where the spirit of Einstein's groundbreaking equation permeates the atmosphere. Step into the "Quantum Garden," a unique outdoor space that mirrors the complexity of quantum physics.

As a smoke-friendly and pet-friendly haven, Einstein's Intellectual Haven welcomes guests with an appreciation for intellectual pursuits and furry companions alike. The accommodation is equipped with WiFi, ensuring you stay connected to the vast world of knowledge.

Priced at $180 per night, this intellectual retreat provides a unique opportunity to reside in the midst of scientific history. While parking, balcony, and garden features are not available, the proximity of just 3 units to the heart of Physics City ensures easy access to the city's scientific community and cultural offerings.

With a 3-star rating, Einstein's Intellectual Haven promises a stay that transcends the ordinary. Book your stay now and immerse yourself in the intellectual legacy of Albert Einstein. Delight in the genius of the surroundings, embrace the scientific spirit, and create memories in this one-of-a-kind haven for the intellectually curious.`}
,{"Drake's Skyline Retreat" : `Welcome to Drake's Skyline Retreat, a lavish haven perched at 777 Views Avenue in the heart of Toronto, Canada. This exclusive residence, owned by the multi-talented Drake, promises an experience that transcends the ordinary, offering a taste of the high life with a touch of hip-hop glamour.

Drake's Skyline Retreat features two stylish bedrooms and a sleek bathroom, setting the stage for a luxurious stay. Immerse yourself in the "Rap Realm," a space curated for those with an appreciation for the finest beats and lyrics. Elevate your experience in the "Cloud 9 Lounge," where the atmosphere is as smooth and captivating as Drake's chart-topping hits. Step out onto the "Views Balcony," providing a breathtaking panorama of the Toronto skyline.

While this retreat does not cater to smoking or pets, it compensates with other exceptional amenities. Enjoy the convenience of WiFi, allowing you to stay connected to the digital world. The premium price of $800 per night reflects the exclusivity and luxury that Drake's Skyline Retreat has to offer.

Though parking, balcony, and garden features are not available, the proximity of just 7 units to the city center ensures easy access to Toronto's vibrant cultural scene, dining, and entertainment.

With a 2-star rating, Drake's Skyline Retreat may not be for everyone, but for those seeking a taste of the high life and a touch of hip-hop royalty, this residence offers an unforgettable experience. Book your stay now and immerse yourself in the lifestyle of Drake, where luxury meets the rhythm of the city.`}
,{"Zendaya's Zen Zone" : `Welcome to Zendaya's Zen Zone, a serene oasis nestled at 456 Serenity Street in the heart of Los Angeles, USA. This luxurious retreat, owned by the talented Zendaya, invites you to experience a harmonious blend of tranquility and style.

Zendaya's Zen Zone features five spacious bedrooms and two well-appointed bathrooms, providing ample space for relaxation and rejuvenation. Immerse yourself in the elegance of the "Infinity Pool," offering a refreshing escape with breathtaking views. Connect with your inner self in the "Yoga Garden," a peaceful sanctuary designed for meditation and self-reflection. Find solace in the "Peaceful Pavilion," a space curated for moments of serenity.

As a smoke-friendly haven, Zendaya's Zen Zone caters to those who appreciate a moment of contemplation. While not pet-friendly, the retreat compensates with other exceptional amenities. Enjoy the convenience of WiFi, allowing you to stay connected, and parking for a stress-free arrival and departure.

Priced at $600 per night, this exclusive retreat offers a premium experience in the heart of Los Angeles. The 4-star rating reflects the high level of comfort and tranquility that Zendaya's Zen Zone provides.

While a balcony is not available, the retreat boasts a beautiful garden, providing a green escape in the midst of the city. Situated just 1 unit away from the heart of Los Angeles, you have easy access to the city's vibrant cultural scene and entertainment.

Book your stay at Zendaya's Zen Zone and immerse yourself in the serenity and luxury that this unique retreat has to offer. Experience the perfect balance of style and tranquility curated by Zendaya herself.`}
,{"Leo's Lakeside Lodge" : `Welcome to Leo's Lakeside Lodge, an intimate retreat located at 789 Serene Shores on the enchanting Lake Como in Italy. This cozy getaway, owned by the legendary Leonardo DiCaprio, offers a tranquil escape in a picturesque setting.

Leo's Lakeside Lodge features a single, well-appointed bedroom and a charming bathroom, providing a romantic haven for those seeking a peaceful retreat. Revel in the breathtaking views from the "Lakeview Terrace," where the serenity of Lake Como unfolds before your eyes. Experience the allure of "Italian Charm," a characteristic that permeates every corner of this intimate lakeside abode. As night falls, find your way to the "Candlelit Cove," a secluded spot where the ambiance is as warm and inviting as the flickering flames.

While Leo's Lakeside Lodge does not accommodate smoking or pets, it compensates with an authentic Italian experience. The retreat is devoid of WiFi and parking facilities, but this intentional choice encourages guests to disconnect and embrace the simplicity of the lakeside lifestyle.

Priced at $300 per night, this exclusive lodge is a testament to understated luxury and natural beauty. The 1-star rating reflects the commitment to providing a rustic and genuine experience in the heart of Lake Como.

While a balcony and garden are not present, the distance of 15 units from the hustle and bustle ensures a secluded and private stay. Embrace the tranquility, bask in the Italian charm, and create timeless memories at Leo's Lakeside Lodge. Book your stay now and experience the beauty of Lake Como through the eyes of Leonardo DiCaprio.`}
,{"Tupac's Tupendous Mansion" :`Welcome to Tupac's Tupendous Mansion, an iconic residence situated at 101 Hip-Hop Avenue in the heart of Compton, USA. This legendary mansion, owned by the one and only Tupac, invites you to experience a hip-hop haven like no other—a tribute to the rap royalty that defined an era.

Tupac's Tupendous Mansion boasts seven spacious bedrooms and five luxurious bathrooms, providing ample space for you and your entourage. Immerse yourself in the "Rap Royalty Room," a space that pays homage to the legends of hip-hop. Dive into the "Pool of Lyrics," where the rhythm of the water echoes the beats of classic tracks. Step out onto the "Hip-Hop Haven" balcony and garden, offering a scenic retreat infused with the spirit of the streets.

As a smoke-friendly and pet-friendly residence, Tupac's Tupendous Mansion welcomes those who appreciate the authentic hip-hop lifestyle. Enjoy the convenience of WiFi to stay connected, parking for your entourage's vehicles, and a balcony and garden for moments of relaxation.

Priced at $699 per night, this mansion offers an unrivaled experience for those who want to immerse themselves in the hip-hop culture. The 5-star rating reflects the unparalleled luxury and homage to the rap legend himself.

Situated at a distance of 420 units from the city center, Tupac's Tupendous Mansion provides a perfect balance of seclusion and access to Compton's vibrant culture. Book your stay now and live like a hip-hop legend in Tupac's Tupendous Mansion. Immerse yourself in the beats, relive the lyrics, and create memories in this iconic homage to Tupac Shakur.`}
,{"Marilyn's Marvelous Mansion": `Welcome to Marilyn's Marvelous Mansion, an enchanting residence situated at 789 Glamour Lane in the heart of Hollywood, USA. This iconic mansion, once owned by the legendary Marilyn Monroe, invites you to step into a world of vintage elegance and Hollywood glamour.

Marilyn's Marvelous Mansion features three beautifully appointed bedrooms and two luxurious bathrooms, offering a glimpse into the golden age of Hollywood. Immerse yourself in the allure of the "Glam Room," where timeless beauty and style converge. Enjoy the breathtaking "Iconic Views" that surround the mansion, offering a glimpse into the magic of Hollywood's iconic landscape. Step out onto the balcony and bask in the "Vintage Elegance" that defines every corner of this marvelous residence.

As a pet-friendly haven, Marilyn's Marvelous Mansion welcomes your furry companions to share in the luxury. While smoking is not permitted, guests can enjoy WiFi connectivity, convenient parking, and a balcony for moments of relaxation.

Priced at $500 per night, this mansion offers an unparalleled experience, blending the charm of Hollywood's golden era with modern amenities. The 4-star rating reflects the timeless elegance and comfort provided by this historic mansion.

Although a garden is not present, the proximity of just 10 units to the heart of Hollywood ensures easy access to the city's entertainment, cultural, and dining scenes. Book your stay now at Marilyn's Marvelous Mansion and immerse yourself in the glamour and allure of Hollywood's iconic past. Experience the magic, create memories, and relive the elegance of Marilyn Monroe's era.`}
,{"Nipsey's Haven":`
Welcome to Nipsey's Haven, a remarkable residence located at 123 Crenshaw Blvd in the heart of Los Angeles, USA. This iconic haven, owned by the legendary Nipsey Hussle, invites you to experience a blend of comfort, creativity, and community spirit.

Nipsey's Haven features three stylish bedrooms and two modern bathrooms, offering a cozy and welcoming atmosphere. Take a dip in the "Private Pool," an oasis of relaxation and tranquility. Unleash your creativity in the fully-equipped "Recording Studio," where the spirit of Nipsey's musical legacy comes alive. Shoot some hoops on the "Basketball Court," a space that pays homage to the community and culture Nipsey cherished.

As a pet-friendly residence, Nipsey's Haven extends a warm welcome to your furry companions. While smoking is not permitted, guests can enjoy WiFi connectivity, convenient parking, and a garden for moments of relaxation.

Priced at $499 per night, this haven offers an authentic experience that reflects Nipsey Hussle's commitment to his community and his passion for music. The 4-star rating reflects the comfort and creativity embedded in every corner of Nipsey's Haven.

Although a balcony is not present, the garden provides a green escape, and the proximity of just 13 units to the heart of Los Angeles ensures easy access to the city's vibrant cultural scene and entertainment. Book your stay now at Nipsey's Haven and immerse yourself in the spirit of creativity, community, and comfort that Nipsey Hussle envisioned. Experience the legacy, create memories, and enjoy the unique charm of this iconic residence.`}
,{"Billie's Retreat":`Welcome to Billie's Retreat, an extraordinary haven located at 456 Melody Lane in the vibrant city of London, UK. This unique residence, owned by the one and only Billie Eilish, invites you to step into a world of artistic expression and musical inspiration.

Billie's Retreat features four beautifully designed bedrooms and three modern bathrooms, offering a harmonious space for creativity and relaxation. Immerse yourself in the "Music Studio," a place where melodies come to life and inspiration knows no bounds. Admire the "Artistic Decor" that defines every corner of this retreat, reflecting Billie's distinctive style. Step onto the balcony and breathe in the creative air, surrounded by the harmonies of the city.

As a smoke-friendly and pet-friendly residence, Billie's Retreat welcomes those who appreciate the freedom to express themselves. Enjoy the convenience of WiFi, allowing you to stay connected to the digital world. Parking is provided for your ease, and the balcony offers a space to unwind.

Priced at $799 per night, this retreat offers an immersive experience that reflects Billie Eilish's commitment to creativity and individuality. The 5-star rating reflects the unparalleled comfort and artistic ambiance that defines every aspect of Billie's Retreat.

Although a garden is not present, the residence is strategically located just 6 units away from the heart of London, ensuring easy access to the city's cultural scene, entertainment, and artistic inspiration. Book your stay now at Billie's Retreat and immerse yourself in the artistic spirit, create memories, and enjoy the unique charm of this iconic residence.`}
,{"Biggie's Mansion":`Welcome to Biggie's Mansion, an opulent residence situated at 789 Notorious St in the heart of New York, USA. This legendary mansion, owned by the iconic Notorious BIG, invites you to experience the epitome of luxury, style, and hip-hop royalty.

Biggie's Mansion boasts five luxurious bedrooms and four elegant bathrooms, providing a lavish retreat for you and your entourage. Immerse yourself in the regal ambiance of the "Versace Decor," where opulence meets sophistication. Shoot some hoops in the "Indoor Basketball Court," paying homage to Biggie's love for the game. Unwind in the "Home Theater," a space designed for the ultimate cinematic experience.

As a smoke-friendly and pet-friendly residence, Biggie's Mansion welcomes those who appreciate the finer things in life. Enjoy the convenience of WiFi, ensuring you stay connected to the world. Parking is provided for your ease, and the balcony and garden offer serene outdoor spaces with a touch of royalty.

Priced at $899 per night, this mansion offers a premium experience that reflects Notorious BIG's legacy of success and style. The 4-star rating reflects the unparalleled luxury and comfort provided by this historic mansion.

Situated just 5 units away from the heart of New York, Biggie's Mansion ensures easy access to the city's vibrant cultural scene, entertainment, and the hustle and bustle of urban life. Book your stay now and live like hip-hop royalty in Biggie's Mansion. Immerse yourself in the grandeur, create memories, and enjoy the unique charm of this iconic residence.`}
,{"Shelby's Manor":`Welcome to Shelby's Manor, a captivating residence located at 321 Small Heath in the heart of Birmingham, UK. This distinguished manor, owned by the enigmatic Tommy Shelby, offers a unique blend of vintage elegance, hidden indulgences, and a touch of the Shelby family's storied history.

Shelby's Manor boasts six charming bedrooms and three tastefully designed bathrooms, providing a setting that reflects the distinguished taste of its owner. Immerse yourself in the ambiance of "Vintage Furnishings," where every piece tells a story of bygone eras. Discover the "Secret Whiskey Stash," a hidden gem for those looking to savor the spirit of the Shelby family. Explore the "Horse Stable," a unique feature that adds a rustic charm to the manor.

As a smoke-friendly residence, Shelby's Manor caters to those who appreciate a moment of contemplation. While not pet-friendly, guests can enjoy WiFi connectivity for staying connected, and the balcony and garden offer serene outdoor spaces.

Priced at $599 per night, this manor provides an exclusive experience that reflects the intriguing history and charm of the Shelby family. The 3-star rating reflects the distinctive character and unique features that set Shelby's Manor apart.

Although parking is not available, the manor's proximity of just 2 units from the heart of Birmingham ensures easy access to the city's cultural scene and historic charm. Book your stay now at Shelby's Manor and immerse yourself in the vintage elegance, create memories, and enjoy the unique charm of this iconic residence curated by Tommy Shelby.`}
,{"Mercury's Haven":`Welcome to Mercury's Haven, an enchanting residence located at 234 Rock Street in the heart of London, UK. This iconic haven, owned by the legendary Freddie Mercury, invites you to experience a harmonious blend of music, artistry, and timeless elegance.

Mercury's Haven features five luxurious bedrooms and four exquisitely designed bathrooms, providing a sanctuary for you and your guests. Immerse yourself in the enchanting melody of the "Grand Piano," a centerpiece that resonates with the spirit of Freddie's musical genius. Admire the "Gold Records Wall," a testament to the legendary achievements of Queen. Uncover the beauty of the "Artistic Mural," a masterpiece that adds a touch of artistic allure to the residence.

As a pet-friendly residence, Mercury's Haven welcomes your furry companions to share in the luxury. While smoking is not permitted, guests can enjoy WiFi connectivity, convenient parking, and a garden for moments of relaxation.

Priced at $699 per night, this haven offers an unparalleled experience that reflects Freddie Mercury's commitment to musical excellence and artistic expression. The 5-star rating reflects the unmatched luxury and comfort provided by this historic residence.

Although a balcony is not present, the garden provides a green escape, and the residence is conveniently located just 4 units away from the heart of London. This ensures easy access to the city's vibrant cultural scene, entertainment, and the spirit of rock and roll. Book your stay now at Mercury's Haven and immerse yourself in the melodies, create memories, and enjoy the unique charm of this iconic residence`}
,{"Eastwood's Retreat":`Welcome to Eastwood's Retreat, a distinctive residence situated at 567 Cowboy Lane in the heart of Los Angeles, USA. This unique retreat, owned by the legendary Clint Eastwood, invites you to step into a world where the Old West meets modern comfort.

Eastwood's Retreat features three thoughtfully designed bedrooms and two rustic bathrooms, providing a cozy and comfortable atmosphere. Immerse yourself in the charm of "Western-themed Decor," where every detail pays homage to the rugged elegance of the Wild West. Enjoy the ultimate cinematic experience in the "Home Theater," where classic Westerns come to life. Take in the "Scenic View" that surrounds the retreat, offering a glimpse of the natural beauty that captures the essence of the Old West.

As a pet-friendly residence, Eastwood's Retreat welcomes your furry companions to share in the comfort. Smoking is not permitted, but guests can enjoy WiFi connectivity, convenient parking, and a garden for moments of relaxation.

Priced at $599 per night, this retreat offers a unique experience that reflects Clint Eastwood's passion for the timeless allure of the American West. The 4-star rating reflects the blend of charm and comfort provided by this rustic yet modern residence.

Although a balcony is not present, the garden provides a serene outdoor space, and the retreat is conveniently located just 6 units away from the heart of Los Angeles. Book your stay now at Eastwood's Retreat and immerse yourself in the Western charm, create memories, and enjoy the unique blend of history and modernity in this iconic residence.`}
,{"Morrison's Haven":`Welcome to Morrison's Haven, a captivating residence located at 89 Psychedelic Blvd in the heart of Los Angeles, USA. This unique haven, owned by the iconic Jim Morrison, invites you to step into a world where the mystical and the musical converge in a symphony of rock 'n' roll allure.

Morrison's Haven features four thoughtfully designed bedrooms and three eclectic bathrooms, providing an immersive experience for you and your guests. Immerse yourself in the enchantment of the "Lava Lamp Room," where the glow of vibrant colors transports you to a psychedelic dreamscape. Feel the rhythm of the "Rock 'n' Roll Lounge," a space curated for music enthusiasts and fans of Morrison's poetic musings. Step onto the balcony and take in the unique ambiance, surrounded by the vibrant energy of Los Angeles.

As a smoke-friendly residence, Morrison's Haven caters to those who appreciate a moment of contemplation. While not pet-friendly, guests can enjoy WiFi connectivity, convenient parking, and a balcony for moments of relaxation.

Priced at $799 per night, this haven offers a unique experience that reflects Jim Morrison's free-spirited approach to life and art. The 3-star rating reflects the eclectic charm and immersive ambiance provided by this historic residence.

While a garden is not present, the retreat is conveniently located just 3 units away from the heart of Los Angeles, ensuring easy access to the city's vibrant cultural scene, entertainment, and the spirit of the '60s and '70s. Book your stay now at Morrison's Haven and immerse yourself in the psychedelic allure, create memories, and enjoy the unique charm of this iconic residence.`}
,{"Marley's Oasis":`Welcome to Marley's Oasis, a vibrant residence situated at 876 Reggae Lane in the heart of Kingston, Jamaica. This iconic oasis, owned by the legendary Bob Marley, invites you to immerse yourself in the spirit of reggae, Rastafarian culture, and the laid-back charm of the Caribbean.

Marley's Oasis features five beautifully designed bedrooms and four tropical bathrooms, providing a sanctuary that resonates with the rhythm of reggae. Immerse yourself in the charm of "Reggae-themed Decor," where the vibrant colors and patterns reflect the musical legacy of Bob Marley. Explore the "Rastafarian Garden," a tranquil space adorned with symbolic elements that celebrate the culture. Relax in the "Hammock Lounge," where the gentle breeze carries the soothing vibes of reggae melodies.

As a smoke-friendly and pet-friendly residence, Marley's Oasis welcomes those who appreciate a moment of relaxation and the company of furry friends. Enjoy the convenience of WiFi, ensuring you stay connected to the digital world. Parking is provided for your ease, and the balcony and garden offer serene outdoor spaces with a touch of Caribbean magic.

Priced at $899 per night, this oasis offers an immersive experience that reflects Bob Marley's commitment to peace, love, and unity. The 5-star rating reflects the unparalleled comfort and cultural richness provided by this iconic residence.

Situated just 5 units away from the heart of Kingston, Marley's Oasis ensures easy access to the city's vibrant culture, music, and the spirit of reggae. Book your stay now and immerse yourself in the rhythm, create memories, and enjoy the unique charm of this iconic residence.`}
,{"The Weeknd's Hideaway":`Welcome to The Weeknd's Hideaway, an extraordinary residence located at 456 Starboy Street in the heart of Toronto, Canada. This luxurious hideaway, owned by the iconic artist The Weeknd, invites you to step into a world of opulence, music, and unparalleled entertainment.

The Weeknd's Hideaway features six impeccably designed bedrooms and five lavish bathrooms, providing a retreat that mirrors the artist's penchant for style. Immerse yourself in the awe-inspiring views from the "Glass Observatory," a space that offers panoramic scenes of Toronto's skyline. Unleash your inner rock star on the "Private Concert Stage," a feature that elevates your stay to a live performance experience. Refresh your senses in the "Infinity Pool," where the cityscape serves as a stunning backdrop.

As a smoke-free and pet-friendly residence, The Weeknd's Hideaway offers an environment of sophistication and comfort. Enjoy the convenience of WiFi, ensuring you stay connected to the digital world. Parking is provided for your ease, and the balcony offers a space to unwind with city views.

Priced at $999 per night, this hideaway offers an unparalleled experience that reflects The Weeknd's commitment to artistic expression and luxury. The 4-star rating reflects the exceptional comfort and entertainment provided by this iconic residence.

While a garden is not present, the retreat is conveniently located just 7 units away from the heart of Toronto, ensuring easy access to the city's vibrant cultural scene and entertainment. Book your stay now at The Weeknd's Hideaway and immerse yourself in the luxurious lifestyle, create memories, and enjoy the unique charm of this iconic residence.`}
,{"Downey's Mansion":`Welcome to Downey's Mansion, an exquisite residence located at 789 Hollywood Blvd in the heart of Los Angeles, USA. This luxurious mansion, owned by the esteemed Robert Downey, Jr., invites you to experience the epitome of Hollywood glamour, featuring iconic memorabilia and unparalleled luxury.

Downey's Mansion boasts seven lavishly designed bedrooms and six opulent bathrooms, providing an extravagant haven for you and your guests. Immerse yourself in the world of superheroes with "Iron Man Memorabilia," a collection that pays homage to Robert Downey, Jr.'s iconic role. Enjoy a cinematic experience in the state-of-the-art "Movie Theater," and unwind in the "Indoor Pool," a private oasis of relaxation.

As a smoke-free and non-pet-friendly residence, Downey's Mansion maintains a pristine environment suitable for the most discerning guests. Revel in the convenience of WiFi, ensuring seamless connectivity, and indulge in hassle-free parking. The mansion offers a balcony and garden, providing tranquil outdoor spaces.

Priced at $1299 per night, this mansion offers a 5-star experience that reflects the exceptional comfort, style, and entertainment provided by this iconic residence.

Situated just 2 units away from the heart of Hollywood, Downey's Mansion ensures easy access to the city's vibrant cultural scene, entertainment, and the allure of Tinseltown. Book your stay now and revel in the luxury, create memories, and enjoy the unique charm of this iconic residence curated by Robert Downey, Jr.`}
,{"Capone's Penthouse":`Welcome to Capone's Penthouse, a historic and stylish residence located at 192 Gangster Ave in the heart of Chicago, USA. This distinctive penthouse, owned by the legendary Al Capone, invites you to step into the glamorous era of the roaring twenties, featuring a blend of luxury, entertainment, and cityscape views.

Capone's Penthouse features four elegantly appointed bedrooms and three opulent bathrooms, providing a sophisticated retreat with a touch of nostalgia. Immerse yourself in the clandestine charm of the "Speakeasy Bar," where echoes of the prohibition era come alive. Try your luck in the "Casino Room," a space that exudes the excitement of a bygone era. Enjoy breathtaking views of the city skyline from the comfort of your own private haven.

As a smoke-friendly and non-pet-friendly residence, Capone's Penthouse caters to those who appreciate the historical ambiance of the roaring twenties. Revel in the convenience of WiFi connectivity, ensuring you stay connected to the digital world. Parking is provided for your ease, and the balcony offers a space to unwind with captivating city views.

Priced at $899 per night, this penthouse offers a 4-star experience that reflects the historic charm, luxury, and entertainment provided by this iconic residence.

Although a garden is not present, the penthouse is conveniently located just 3 units away from the heart of Chicago, ensuring easy access to the city's vibrant cultural scene, entertainment, and the allure of the prohibition era. Book your stay now at Capone's Penthouse and immerse yourself in the glamour, create memories, and enjoy the unique charm of this iconic residence.`}
,{"Heisenberg's Hideout":`Welcome to Heisenberg's Hideout, a unique and clandestine residence located at 308 Blue Sky Lane in the heart of Albuquerque, USA. This enigmatic hideout, owned by the notorious Walter White, invites you to step into the world of high-stakes chemistry and suspense, featuring a blend of scientific intrigue and the rugged beauty of the desert landscape.

Heisenberg's Hideout features three thoughtfully designed bedrooms and two sleek bathrooms, providing a haven for those seeking an unconventional experience. Immerse yourself in the secrets of the "Chemistry Lab," where scientific pursuits and thrilling endeavors unfold. Secure your RV in the dedicated "RV Garage," reminiscent of the iconic mobile meth lab. Enjoy the tranquil atmosphere of the "Desert Landscape," offering a unique backdrop to your stay.

As a smoke-friendly and pet-friendly residence, Heisenberg's Hideout welcomes those who appreciate the unconventional. Revel in the convenience of WiFi, ensuring seamless connectivity. Parking is provided for your ease, and the garden offers a space to unwind in the rugged beauty of the desert.

Priced at $749 per night, this hideout offers a 5-star experience that reflects the suspense, intrigue, and uniqueness provided by this iconic residence.

Although a balcony is not present, the hideout is conveniently located just 1 unit away from the heart of Albuquerque, ensuring easy access to the city's cultural scene, entertainment, and the mysteries of Heisenberg's world. Book your stay now at Heisenberg's Hideout and immerse yourself in the intrigue, create memories, and enjoy the unique charm of this iconic residence.`}
,{"Rocky's Retreat":`Welcome to Rocky's Retreat, a stylish and energetic residence located at 123 Boxing Ring Rd in the heart of New York, USA. This dynamic retreat, owned by the charismatic A$AP Rocky, invites you to experience a blend of urban living, creativity, and fitness.

Rocky's Retreat features two trendsetting bedrooms and one sleek bathroom, providing a modern and vibrant space for your stay. Immerse yourself in the "Home Gym," where fitness meets style, allowing you to maintain your active lifestyle. Unleash your creativity in the "Music Studio," a space designed for artistic expression and musical exploration. Step onto the "Cityscape Balcony" and take in the panoramic views of the iconic New York skyline.

As a smoke-free and pet-friendly residence, Rocky's Retreat caters to those who appreciate a healthy and creative environment. Revel in the convenience of WiFi, ensuring you stay connected to the digital world. Parking is provided for your ease, and the balcony offers a space to unwind with breathtaking city views.

Priced at $499 per night, this retreat offers a 4-star experience that reflects the dynamic lifestyle, creativity, and comfort provided by this iconic residence.

Although a garden is not present, the retreat is conveniently located just 5 units away from the heart of New York, ensuring easy access to the city's vibrant cultural scene, entertainment, and the energetic spirit of A$AP Rocky. Book your stay now at Rocky's Retreat and immerse yourself in the urban energy, create memories, and enjoy the unique charm of this iconic residence.`}
,{"Winehouse's Villa":`Welcome to Winehouse's Villa, an enchanting residence located at 456 Jazz Lane in the heart of London, UK. This captivating villa, owned by the legendary Amy Winehouse, invites you to experience the soulful ambiance of jazz, artistic inspiration, and the tranquil beauty of an English garden.

Winehouse's Villa features five elegantly designed bedrooms and four tastefully appointed bathrooms, providing a haven that reflects the distinctive style and creativity of its owner. Immerse yourself in the charm of the "Jazz-themed Decor," where every room resonates with the spirit of musical expression. Unleash your creativity in the "Private Recording Studio," a space curated for those seeking artistic inspiration. Wander through the enchanting "English Garden," a serene outdoor oasis that complements the villa's artistic charm.

As a smoke-friendly and pet-friendly residence, Winehouse's Villa welcomes those who appreciate a moment of artistic contemplation and the company of furry friends. Revel in the convenience of WiFi connectivity, ensuring you stay connected to the digital world. Parking is provided for your ease, and the balcony and garden offer serene outdoor spaces with a touch of artistic inspiration.

Priced at $899 per night, this villa offers an immersive experience that reflects Amy Winehouse's commitment to musical excellence and artistic expression. The 3-star rating reflects the distinctive character and artistic charm provided by this historic residence.

Situated just 4 units away from the heart of London, Winehouse's Villa ensures easy access to the city's vibrant cultural scene, entertainment, and the soulful spirit of jazz. Book your stay now and immerse yourself in the melodies, create memories, and enjoy the unique charm of this iconic residence.`}
,{"Mbappé's Mansion":`Bienvenue to Mbappé's Mansion, an opulent residence nestled at 789 Soccer Street in the heart of Paris, France. This magnificent mansion, owned by the illustrious Kylian Mbappé, invites you to experience the world of football, luxury, and breathtaking views of the iconic Eiffel Tower.

Mbappé's Mansion boasts six impeccably designed bedrooms and five lavish bathrooms, providing a haven that mirrors the grandeur of its owner. Immerse yourself in the thrill of the game on the exclusive "Football Pitch," a space where passion and precision converge. Admire the accomplishments in the "Trophy Room," showcasing the victories of a football maestro. Step onto the balcony and witness the majesty of the "Eiffel Tower View," a scene that encapsulates the romance of Paris.

As a smoke-free and pet-friendly residence, Mbappé's Mansion caters to those who appreciate a pristine environment and the joy of furry companions. Revel in the convenience of WiFi, ensuring seamless connectivity. Parking is provided for your ease, and the mansion offers a balcony and garden, providing serene outdoor spaces.

Priced at $1199 per night, this mansion offers a 5-star experience that reflects Kylian Mbappé's commitment to excellence on and off the field.

Situated just 2 units away from the heart of Paris, Mbappé's Mansion ensures easy access to the city's cultural richness, entertainment, and the allure of football in the City of Light. Book your stay now and revel in the luxury, create memories, and enjoy the unique charm of this iconic residence curated by Kylian Mbappé.`}
,{"Jordan's Court":`Welcome to Jordan's Court, an iconic residence situated at 23 Slam Dunk Lane in the heart of Chicago, USA. This legendary court, owned by the basketball icon Michael Jordan, invites you to experience the legacy of greatness, championship victories, and the unmistakable flair of the Air Jordan collection.

Jordan's Court features four tastefully designed bedrooms and three luxurious bathrooms, providing a haven that reflects the unparalleled achievements of its owner. Immerse yourself in the game on the exclusive "Basketball Court," where every slam dunk is a testament to a legacy of excellence. Admire the glory of past victories in the "Championship Trophies" room, showcasing the triumphs that defined an era. Explore the "Air Jordan Collection," a curated exhibit of iconic footwear that has left an indelible mark on the world of sports and fashion.

As a smoke-free and pet-friendly residence, Jordan's Court welcomes those who appreciate the precision of the game and the joy of furry companions. Revel in the convenience of WiFi, ensuring seamless connectivity. Parking is provided for your ease, and the court offers a garden, providing a serene outdoor space.

Priced at $999 per night, this court offers a 5-star experience that reflects Michael Jordan's commitment to excellence and a legacy that transcends the basketball court.

Although a balcony is not present, Jordan's Court is conveniently located just 1 unit away from the heart of Chicago, ensuring easy access to the city's vibrant cultural scene, entertainment, and the enduring spirit of Michael Jordan's greatness. Book your stay now and relive the moments, create memories, and enjoy the unique charm of this legendary residence curated by Michael Jordan.`}
,{"Ray's Melody Cottage":`Welcome to Ray's Melody Cottage, a soulful haven located at 456 Soulful Street in the heart of New Orleans, USA. This enchanting cottage, owned by the legendary Ray Charles, invites you to immerse yourself in the rich tapestry of jazz, melody, and the culinary delights of the soulful South.

Ray's Melody Cottage features three thoughtfully designed bedrooms and two cozy bathrooms, providing a retreat that echoes the warmth and musicality of its owner. Immerse yourself in the rhythm of the "Piano Lounge," where the keys of the piano tell stories of a lifetime. Embrace the vibrant culture of New Orleans with complimentary "Jazz Festival Tickets," offering you an unforgettable musical experience. Delight your senses in the "Soul Food Kitchen," where the aromas of Southern cuisine fill the air.

As a smoke-free and pet-friendly residence, Ray's Melody Cottage welcomes those who appreciate the soulful ambiance and the joy of furry companions. Revel in the convenience of WiFi, ensuring seamless connectivity. Parking is provided for your ease, and the cottage offers a balcony, providing a space to unwind in the heart of the vibrant city.

Priced at $799 per night, this cottage offers a 4-star experience that reflects Ray Charles' commitment to soulful melodies and the cultural richness of New Orleans.

Although a garden is not present, Ray's Melody Cottage is conveniently located just 2 units away from the heart of New Orleans, ensuring easy access to the city's vibrant cultural scene, entertainment, and the soulful spirit of Ray Charles. Book your stay now and embrace the melody, create memories, and enjoy the unique charm of this legendary residence curated by Ray Charles.`}
,{"Shady's Hideaway":`Welcome to Shady's Hideaway, an exclusive retreat located at 313 Slim Street in the heart of Detroit, USA. This one-of-a-kind hideaway, owned by the iconic Slim Shady (Eminem), invites you to step into the world of rap, creativity, and unparalleled luxury.

Shady's Hideaway features two stylishly designed bedrooms and one sleek bathroom, providing an intimate yet extravagant space. Immerse yourself in the artistry of the "Recording Studio," where creativity knows no bounds. Witness the intensity of the "Rap Battle Arena," a space designed for lyrical showdowns and artistic expression. Experience the epitome of luxury with the "Private Jet Landing Strip," ensuring a grand entrance to this exclusive hideaway.

As a smoke-friendly and pet-friendly residence, Shady's Hideaway caters to those who appreciate a creative environment and the company of furry friends. Revel in the convenience of WiFi, ensuring seamless connectivity. Parking is provided for your ease, and the hideaway offers a balcony, providing a space to unwind with city views.

Priced at $899 per night, this hideaway offers a 5-star experience that reflects Slim Shady's commitment to artistic excellence and luxury.

Although a garden is not present, Shady's Hideaway is conveniently located just 3 units away from the heart of Detroit, ensuring easy access to the city's vibrant cultural scene, entertainment, and the dynamic spirit of Eminem's creativity. Book your stay now and immerse yourself in the lyrical world, create memories, and enjoy the unique charm of this legendary hideaway curated by Slim Shady.`}
,{"Cudi Glamorous Getaway":`Welcome to Cudi Glamorous Getaway, a luxurious retreat situated at 567 Man On The Moon in the heart of Hollywood, USA. This dazzling getaway, owned by the trendsetting Kid Cudi, invites you to experience the fusion of music, fashion, and glamour in an opulent setting.

Cudi Glamorous Getaway features three elegantly designed bedrooms and two chic bathrooms, providing a haven that reflects the sophistication and style of its owner. Immerse yourself in the allure of the "Dazzling Stage," a space designed for artistic expression and intimate performances. Step into the "Fashionista Closet," curated with the latest trends and styles for an unparalleled fashion experience. Refresh and rejuvenate in the "Diamond Pool," an exquisite oasis of luxury.

As a smoke-free and non-pet-friendly residence, Cudi Glamorous Getaway caters to those who appreciate a pristine and stylish environment. Revel in the convenience of WiFi, ensuring seamless connectivity. Parking is provided for your ease, and the getaway offers a balcony, providing a space to unwind with city views.

Priced at $899 per night, this glamorous getaway offers a 4-star experience that reflects Kid Cudi's commitment to style, creativity, and luxury.

Although a garden is not present, Cudi Glamorous Getaway is conveniently located in the heart of Hollywood, ensuring easy access to the city's vibrant cultural scene, entertainment, and the dynamic spirit of Kid Cudi. Book your stay now and immerse yourself in the glamour, create memories, and enjoy the unique charm of this legendary getaway curated by Kid Cudi.`}
,{"Johnny's Cruise Cabin":`Welcome to Johnny's Cruise Cabin, a cinematic escape situated at 789 Action Ave in the heart of Hollywood, USA. This unique cabin, owned by the legendary Johnny Depp, offers a thrilling retreat that blends the excitement of action movies with the tranquility of a cruise.

Johnny's Cruise Cabin features one tastefully designed bedroom and one sleek bathroom, providing an intimate yet adventurous space. Immerse yourself in the world of action in the "Action Movie Theater," where every screening feels like a Hollywood blockbuster. Feel the adrenaline as you step onto the "Speedboat Dock," ready to embark on your cinematic journey. Experience the art of stunts in the "Stuntman Studio," a space dedicated to the craft of action-packed performances.

As a smoke-free and non-pet-friendly residence, Johnny's Cruise Cabin caters to those who appreciate a pristine and cinematic environment. Revel in the convenience of WiFi, ensuring seamless connectivity. Parking is provided for your ease, and the cabin offers a balcony, providing a space to unwind with Hollywood views.

Priced at $599 per night, this cruise cabin offers a 3-star experience that reflects Johnny Depp's commitment to cinematic excellence and adventure.

Although a garden is not present, Johnny's Cruise Cabin is conveniently located just 8 units away from the heart of Hollywood, ensuring easy access to the city's vibrant cultural scene, entertainment, and the dynamic spirit of Johnny Depp. Book your stay now and immerse yourself in the cinematic world, create memories, and enjoy the unique charm of this legendary cabin curated by Johnny Depp.`}
,{"Malone's Songbird Sanctuary":`Welcome to Malone's Songbird Sanctuary, a harmonious haven located at 456 Melody Lane in the heart of Nashville, USA. This musical sanctuary, owned by the acclaimed Post Malone, invites you to immerse yourself in the world of country music, songwriting, and the camaraderie of Swifties.

Malone's Songbird Sanctuary features four thoughtfully designed bedrooms and three cozy bathrooms, providing a retreat that mirrors the soulful essence of its owner. Immerse yourself in the art of country music in the "Country Music Studio," where creativity and melody intertwine. Find inspiration in the "Songwriting Nook," a space designed for crafting lyrics and melodies that resonate with the heart. Unwind in the "Swifties Lounge," a dedicated area for fans of Taylor Swift to gather and celebrate their shared love for music.

As a smoke-free and pet-friendly residence, Malone's Songbird Sanctuary welcomes those who appreciate the serenity of a musical environment and the joy of furry companions. Revel in the convenience of WiFi, ensuring seamless connectivity. Parking is provided for your ease, and the sanctuary offers a balcony and garden, providing serene outdoor spaces.

Priced at $799 per night, this songbird sanctuary offers a 5-star experience that reflects Post Malone's commitment to musical excellence.

Situated just 3 units away from the heart of Nashville, Malone's Songbird Sanctuary ensures easy access to the city's vibrant country music scene, entertainment, and the musical spirit that defines Post Malone's artistry. Book your stay now and immerse yourself in the melodies, create memories, and enjoy the unique charm of this legendary sanctuary curated by Post Malone.`}
,{"Oneal's Glam Haven":`Welcome to Oneal's Glam Haven, an opulent retreat situated at 789 Fashion Blvd in the heart of Beverly Hills, USA. This lavish haven, owned by the legendary Shaquille O'Neal, invites you to experience the epitome of luxury, fashion, and sophistication.

Oneal's Glam Haven features six exquisitely designed bedrooms and four lavish bathrooms, providing a sanctuary that mirrors the grandeur and style of its owner. Step onto the "Fashion Runway," where elegance meets innovation, and every step is a statement. Indulge in the pinnacle of relaxation at the "Luxury Spa," a space dedicated to rejuvenation and pampering. Bask in the brilliance of the "Crystal Chandelier," a symbol of the glamour that defines this haven.

As a smoke-free and non-pet-friendly residence, Oneal's Glam Haven caters to those who appreciate the pristine environment and the elegance of high fashion. Revel in the convenience of WiFi, ensuring seamless connectivity. Parking is provided for your ease, and the haven offers a balcony, providing a space to unwind with views of the glamorous city.

Priced at $1299 per night, this glam haven offers a 4-star experience that reflects Shaquille O'Neal's commitment to excellence on and off the court.

Although a garden is not present, Oneal's Glam Haven is conveniently located just 4 units away from the heart of Beverly Hills, ensuring easy access to the city's vibrant cultural scene, entertainment, and the luxurious spirit of Shaquille O'Neal. Book your stay now and immerse yourself in the glamour, create memories, and enjoy the unique charm of this legendary haven curated by Shaquille O'Neal.`}
,{"Smiths' Tech Retreat":`Welcome to Smiths' Tech Retreat, a cutting-edge oasis nestled at 123 Innovation Lane in the heart of Seattle, USA. This technological haven, owned by the visionary Will Smith, invites you to experience the future of luxury living in a space where innovation and sophistication seamlessly blend.

Smiths' Tech Retreat features five impeccably designed bedrooms and three state-of-the-art bathrooms, providing a sanctuary that mirrors the technological prowess of its owner. Immerse yourself in the convenience of the "Smart Home System," where every aspect of your stay is seamlessly integrated for maximum comfort. Engage in groundbreaking discoveries in the "Private Tech Lab," a space dedicated to exploration and innovation. Unwind by the "Infinity Tech Pool," an oasis where technology meets relaxation in perfect harmony.

As a smoke-free and non-pet-friendly residence, Smiths' Tech Retreat caters to those who appreciate the sleek precision of modern technology and the tranquility of a pristine environment. Revel in the convenience of WiFi, ensuring seamless connectivity. Parking is provided for your ease, and the retreat offers a balcony, providing a space to relax and enjoy the cityscape.

Priced at $1499 per night, this tech retreat offers a 5-star experience that reflects Will Smith's commitment to cutting-edge living.

Situated just 1 unit away from the heart of Seattle, Smiths' Tech Retreat ensures easy access to the city's vibrant technological scene, innovation hubs, and the forward-thinking spirit of Will Smith. Book your stay now and immerse yourself in the tech-driven future, create memories, and enjoy the unique charm of this legendary retreat curated by Will Smith.`}
,{"Kurt's Castle":`Welcome to Kurt's Castle, a majestic fortress situated at 789 Monarchy Lane in the heart of London, UK. This regal retreat, owned by the iconic Kurt Cobain, invites you to step into a world of grandeur, artistic expression, and timeless elegance.

Kurt's Castle features eight luxuriously designed bedrooms and six opulent bathrooms, providing a palace that mirrors the creativity and vision of its owner. Immerse yourself in the splendor of the "Royal Ballroom," a space where elegance and celebration come together in perfect harmony. Admire the "Crown Jewel Collection," a curated display of treasures that reflect the essence of Kurt Cobain's artistic legacy. Experience the security and charm of the "Knight's Guard," ensuring a safe and welcoming environment.

As a smoke-free and non-pet-friendly residence, Kurt's Castle caters to those who appreciate the pristine environment and the sophistication of royal living. Revel in the convenience of WiFi, ensuring seamless connectivity. Parking is provided for your ease, and the castle offers a balcony and garden, providing serene outdoor spaces.

Priced at $1999 per night, this castle offers a 5-star experience that reflects Kurt Cobain's commitment to artistic brilliance.

Situated just 2 units away from the heart of London, Kurt's Castle ensures easy access to the city's historic landmarks, cultural richness, and the timeless spirit of Kurt Cobain. Book your stay now and immerse yourself in the royal atmosphere, create memories, and enjoy the unique charm of this legendary castle curated by Kurt Cobain.`}
,{"Musk's Mars Oasis":`Welcome to Musk's Mars Oasis, a futuristic escape located at 456 SpaceX Street on the Red Planet. This celestial retreat, owned by the visionary Elon Musk, invites you to experience the frontier of space exploration in a habitat where innovation and otherworldly luxury seamlessly converge.

Musk's Mars Oasis features two space-efficient bedrooms and one state-of-the-art bathroom, providing an extraterrestrial haven that mirrors the technological prowess of its owner. Immerse yourself in the awe-inspiring "Rocket Launch Pad," where the future of interplanetary travel begins. Relax in the "Zero-Gravity Lounge," an innovative space where Earthly constraints vanish. Witness the marvels of a "Martian Garden," a testament to sustainable living on Mars.

As a smoke-free and non-pet-friendly residence, Musk's Mars Oasis caters to those who appreciate the pristine environment and the challenges of living beyond our home planet. Revel in the convenience of WiFi, ensuring seamless connectivity across the cosmos. Parking is provided for your futuristic space vehicle, and the oasis offers a balcony, providing a unique vantage point to observe the Martian landscape.

Priced at $9999 per night, this Mars Oasis offers a 5-star experience that reflects Elon Musk's commitment to pushing the boundaries of human exploration.

Situated approximately 1,000,000 units away from Earth, Musk's Mars Oasis ensures an unparalleled experience in space living, offering a glimpse into the future of interplanetary colonization. Book your stay now and immerse yourself in the cosmic atmosphere, create memories, and enjoy the unique charm of this legendary oasis curated by Elon Musk.`}
,{"Ocean's Hideout":`Welcome to Ocean's Hideout, a mythical sanctuary located at 567 Thor Lane in the majestic realm of Asgard. This ethereal retreat, owned by the enigmatic Frank Ocean, invites you to immerse yourself in a world where music, mythology, and divine luxury converge.

Ocean's Hideout features three artistically designed bedrooms and two celestial bathrooms, providing a haven that mirrors the creative essence of its owner. Immerse yourself in the awe-inspiring "God of Thunder Room," where the power of music meets the might of the gods. Admire the "Mjolnir Collection," a curated display of mythical artifacts that pays homage to the Asgardian legends. Bask in the enchantment of the "Asgardian Garden," a space where nature and magic intertwine.

As a smoke-free and non-pet-friendly residence, Ocean's Hideout caters to those who appreciate the pristine environment and the divine allure of Asgard. Revel in the convenience of WiFi, ensuring seamless connectivity across realms. Parking is provided for your ethereal chariot, and the hideout offers a balcony and garden, providing serene outdoor spaces.

Priced at $1499 per night, this hideout offers a 4-star experience that reflects Frank Ocean's commitment to artistic brilliance and mythical inspiration.

Situated approximately 9,999 units away from the mortal realm, Ocean's Hideout ensures a transcendent experience, offering a glimpse into the divine beauty and creativity of Asgard. Book your stay now and immerse yourself in the celestial atmosphere, create memories, and enjoy the unique charm of this legendary hideout curated by Frank Ocean.`}
,{"McCartneys' Cozy Cabin":`Welcome to McCartneys' Cozy Cabin, a charming retreat nestled at 123 Log Cabin Lane in the serene woods of the USA. This rustic haven, owned by the legendary Paul McCartney, invites you to escape to a world where nature, music, and cozy comfort harmonize.

McCartneys' Cozy Cabin features two intimately designed bedrooms and one quaint bathroom, providing a retreat that mirrors the simplicity and warmth of its owner. Gather around the "Rustic Fireplace," where the crackling flames create an ambiance of tranquility and nostalgia. Explore the "Nature Trail," a scenic path through the woods that allows you to reconnect with the beauty of the natural world. Relax in the "Woodland Retreat," a haven that offers a perfect blend of comfort and rustic charm.

As a smoke-free and pet-friendly residence, McCartneys' Cozy Cabin caters to those who appreciate the pristine environment and the companionship of furry friends. Revel in the convenience of WiFi, ensuring connectivity even in the heart of nature. Parking is provided for your convenience, and the cabin boasts a garden, providing a peaceful outdoor space.

Priced at $799 per night, this cozy cabin offers a 4-star experience that reflects Paul McCartney's commitment to simplicity and the joys of nature.

Situated just 10 units away from the hustle and bustle of city life, McCartneys' Cozy Cabin ensures easy access to the tranquility of the woods, creating the perfect retreat for relaxation and inspiration. Book your stay now and immerse yourself in the natural beauty, create memories, and enjoy the unique charm of this legendary cabin curated by Paul McCartney.`}
,{"Ricch's Caribbean Retreat":`Welcome to Ricch's Caribbean Retreat, an exotic paradise located at 789 Tropical Paradise in the heart of the Caribbean. This beachfront haven, owned by the illustrious Roddy Ricch, invites you to indulge in the luxury of a tropical escape where sun-kissed sands, azure waters, and lavish accommodations create the perfect setting for an unforgettable retreat.

Ricch's Caribbean Retreat features four elegantly appointed bedrooms and three opulent bathrooms, providing a villa that mirrors the beauty and extravagance of its owner. Immerse yourself in the breathtaking views from the "Beachfront Villa," where every sunrise and sunset becomes a masterpiece. Dock your private yacht at the "Private Yacht Dock," allowing you to explore the Caribbean's crystal-clear waters at your leisure. Stroll through the "Tropical Gardens," where vibrant flora adds a touch of natural elegance to your surroundings.

As a smoke-free and non-pet-friendly residence, Ricch's Caribbean Retreat caters to those who appreciate the pristine environment and the tranquility of an exclusive getaway. Revel in the convenience of WiFi, ensuring connectivity even in this tropical haven. Parking is provided for your convenience, and the retreat offers a balcony and garden, providing serene outdoor spaces.

Priced at $1899 per night, this Caribbean retreat offers a 5-star experience that reflects Roddy Ricch's commitment to luxury and style.

Situated just 100 units away from the ordinary, Ricch's Caribbean Retreat ensures an escape to a tropical paradise, where every moment is a celebration of life's grandeur. Book your stay now and immerse yourself in the beauty of the Caribbean, create memories, and enjoy the unique charm of this legendary retreat curated by Roddy Ricch.`}
,{"Scott's Wilderness Lodge":`Welcome to Scott's Wilderness Lodge, an enchanting retreat situated at 456 Tranquil Trail in the picturesque landscapes of Montana, USA. Owned by the iconic Travis Scott, this wilderness lodge offers a harmonious blend of natural beauty, serenity, and luxury.

Scott's Wilderness Lodge features three thoughtfully designed bedrooms and two elegantly appointed bathrooms, providing a haven that reflects the rugged charm of Montana. Step onto the "Mountain View Deck," where breathtaking vistas unfold, offering a panoramic display of the surrounding wilderness. Embark on a "Wildlife Safari" to encounter the diverse flora and fauna that call this tranquil trail home. Retreat to the "Oprah's Book Club Room," a space that invites you to relax and engage with literature in the heart of nature.

As a smoke-free and pet-friendly residence, Scott's Wilderness Lodge caters to those who appreciate the pristine environment and the companionship of furry friends. Revel in the convenience of WiFi, ensuring connectivity amidst the untamed beauty. Parking is provided for your convenience, and the lodge boasts a balcony and garden, creating serene outdoor spaces.

Priced at $1499 per night, this wilderness lodge offers a 5-star experience that reflects Travis Scott's commitment to creating an immersive and luxurious escape.

Situated just 15 units away from the hustle and bustle of city life, Scott's Wilderness Lodge ensures easy access to the tranquility of nature, creating the perfect retreat for relaxation and inspiration. Book your stay now and immerse yourself in the beauty of Montana, create memories, and enjoy the unique charm of this legendary lodge curated by Travis Scott.`}
,{"Sinatra's Eco Retreat":`Welcome to Sinatra's Eco Retreat, a verdant oasis nestled at 789 Green Valley in the heart of the Amazon Rainforest, USA. Owned by the legendary Frank Sinatra, this eco-friendly haven offers a unique blend of luxurious comfort and immersive natural experiences.

Sinatra's Eco Retreat features five elegantly designed bedrooms and four thoughtfully appointed bathrooms, providing a spacious retreat that reflects the serenity of the surrounding rainforest. Embark on a thrilling adventure on the "Canopy Walkway," offering an elevated perspective of the lush jungle canopy. Embrace "Eco-Friendly Living," as this retreat is committed to sustainable practices that harmonize with the Amazon's delicate ecosystem. Dive into a "Jungle Adventure," exploring the rich biodiversity and breathtaking landscapes that define the region.

As a smoke-free and pet-friendly residence, Sinatra's Eco Retreat caters to those who appreciate the pristine environment and the companionship of furry friends. Revel in the convenience of WiFi, ensuring connectivity amidst the remote rainforest. Parking is provided for your convenience, and the retreat boasts a balcony and garden, creating serene outdoor spaces.

Priced at $1599 per night, this eco retreat offers a 4-star experience that reflects Frank Sinatra's commitment to sustainable luxury.

Situated just 20 units away from conventional living, Sinatra's Eco Retreat ensures a rare opportunity to experience the wonders of the Amazon Rainforest in comfort and style. Book your stay now and immerse yourself in the beauty of nature, create memories, and enjoy the unique charm of this legendary eco retreat curated by Frank Sinatra.`}
];
useEffect(()=>{
    getDescription();
},[])
const keyName = Object.values(name);
const getDescription = () => {
    for(const description of descriptions){
        const key = Object.keys(description);
        console.log("key : " + key[0]  + " keyName : "+ keyName[0] );
        console.log(key[0] === keyName[0]);
        if(key[0] === keyName[0]){
            const value = Object.values(description);
            setOwnerDescription(value);
            console.log(value);
        }
    }
}
return (
    <div>
      {ownerDescription !== "empty..." ? (
        <p>{ownerDescription}</p>
      ) : (
        <p>Description not found</p>
      )}
    </div>
  );
}