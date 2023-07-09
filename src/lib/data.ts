export type DataSet = {
  quote: string;
  author: string;
};

export const categories = {
  bollywood: "/img/bollywood.jpg",
  hollywood: "/img/hollywood.webp",
  marvel: "/img/marvel.jpg",
  starwars: "/img/starwars.webp",
  "harry-porter": "/img/harryPorter.jpg",
};

export type Categories = keyof typeof categories;

const Data = new Map<Categories, DataSet[]>();

Data.set("harry-porter", [
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    author: "Albus Dumbledore",
  },
  {
    quote: "To the well-organized mind, death is but the next great adventure.",
    author: "Albus Dumbledore",
  },
  {
    quote:
      "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    author: "Albus Dumbledore",
  },
  {
    quote:
      "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
    author: "Albus Dumbledore",
  },
  {
    quote:
      "We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are.",
    author: "Sirius Black",
  },
  {
    quote: "I solemnly swear that I am up to no good.",
    author: "Fred and George Weasley",
  },
  {
    quote: "Dobby is a free elf!",
    author: "Dobby",
  },
  {
    quote: "I don't go looking for trouble. Trouble usually finds me.",
    author: "Harry Potter",
  },
  {
    quote: "After all this time?",
    author: "Albus Dumbledore",
  },
  {
    quote: "Always.",
    author: "Severus Snape",
  },
  {
    quote: "Fear of a name only increases fear of the thing itself.",
    author: "Hermione Granger",
  },
  {
    quote:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "Albus Dumbledore",
  },
  {
    quote: "Not my daughter, you bitch!",
    author: "Molly Weasley",
  },
  {
    quote: "The ones that love us never really leave us.",
    author: "Sirius Black",
  },
  {
    quote: "It's wingardium leviOsa, not leviosAH.",
    author: "Hermione Granger",
  },
  {
    quote: "I am what I am, an' I'm not ashamed.",
    author: "Rubeus Hagrid",
  },
  {
    quote:
      "Dark and difficult times lie ahead. Soon, we must all face the choice between what is right and what is easy.",
    author: "Albus Dumbledore",
  },
  {
    quote: "I must not tell lies.",
    author: "Dolores Umbridge",
  },
  {
    quote:
      "Do not pity the dead, Harry. Pity the living, and above all, those who live without love.",
    author: "Albus Dumbledore",
  },
  {
    quote: "The wand chooses the wizard.",
    author: "Mr. Ollivander",
  },
  {
    quote:
      "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
    author: "Albus Dumbledore",
  },
  {
    quote: "Nitwit! Blubber! Oddment! Tweak!",
    author: "Albus Dumbledore",
  },
  {
    quote: "It matters not what someone is born, but what they grow to be.",
    author: "Albus Dumbledore",
  },
  {
    quote:
      "I'm going to bed before either of you come up with another clever idea to get us killed or worse, expelled.",
    author: "Hermione Granger",
  },
  {
    quote: "I solemnly swear that I am up to no good.",
    author: "Fred and George Weasley",
  },
  {
    quote:
      "It is the quality of one's convictions that determines success, not the number of followers.",
    author: "Remus Lupin",
  },
  {
    quote: "Wit beyond measure is man's greatest treasure.",
    author: "Luna Lovegood",
  },
  {
    quote:
      "The world isn't split into good people and Death Eaters. We've all got both light and dark inside us.",
    author: "Sirius Black",
  },
  {
    quote:
      "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
    author: "Luna Lovegood",
  },
  {
    quote: "I am not worried, Harry. I am with you.",
    author: "Albus Dumbledore",
  },
  {
    quote: "It's not how you are alike, it's how you are not.",
    author: "Albus Dumbledore",
  },
  {
    quote: "I open at the close.",
    author: "The Golden Snitch (from Dumbledore)",
  },
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    author: "Albus Dumbledore",
  },
  {
    quote: "To the well-organized mind, death is but the next great adventure.",
    author: "Albus Dumbledore",
  },
  {
    quote:
      "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    author: "Albus Dumbledore",
  },
  {
    quote:
      "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
    author: "Albus Dumbledore",
  },
  {
    quote:
      "We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are.",
    author: "Sirius Black",
  },
  {
    quote: "I solemnly swear that I am up to no good.",
    author: "Fred and George Weasley",
  },
  {
    quote: "Dobby is a free elf!",
    author: "Dobby",
  },
  {
    quote: "I don't go looking for trouble. Trouble usually finds me.",
    author: "Harry Potter",
  },
  {
    quote: "After all this time?",
    author: "Albus Dumbledore",
  },
  {
    quote: "Always.",
    author: "Severus Snape",
  },
  {
    quote: "Fear of a name only increases fear of the thing itself.",
    author: "Hermione Granger",
  },
  {
    quote:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "Albus Dumbledore",
  },
  {
    quote: "Not my daughter, you bitch!",
    author: "Molly Weasley",
  },
  {
    quote: "The ones that love us never really leave us.",
    author: "Sirius Black",
  },
  {
    quote: "It's wingardium leviOsa, not leviosAH.",
    author: "Hermione Granger",
  },
  {
    quote: "I am what I am, an' I'm not ashamed.",
    author: "Rubeus Hagrid",
  },
  {
    quote:
      "Dark and difficult times lie ahead. Soon, we must all face the choice between what is right and what is easy.",
    author: "Albus Dumbledore",
  },
  {
    quote: "I must not tell lies.",
    author: "Dolores Umbridge",
  },
  {
    quote:
      "Do not pity the dead, Harry. Pity the living, and above all, those who live without love.",
    author: "Albus Dumbledore",
  },
  {
    quote: "The wand chooses the wizard.",
    author: "Mr. Ollivander",
  },
  {
    quote:
      "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
    author: "Albus Dumbledore",
  },
  {
    quote: "Nitwit! Blubber! Oddment! Tweak!",
    author: "Albus Dumbledore",
  },
  {
    quote: "It matters not what someone is born, but what they grow to be.",
    author: "Albus Dumbledore",
  },
  {
    quote:
      "I'm going to bed before either of you come up with another clever idea to get us killed or worse, expelled.",
    author: "Hermione Granger",
  },
  {
    quote: "I solemnly swear that I am up to no good.",
    author: "Fred and George Weasley",
  },
  {
    quote:
      "It is the quality of one's convictions that determines success, not the number of followers.",
    author: "Remus Lupin",
  },
  {
    quote: "Wit beyond measure is man's greatest treasure.",
    author: "Luna Lovegood",
  },
  {
    quote:
      "The world isn't split into good people and Death Eaters. We've all got both light and dark inside us.",
    author: "Sirius Black",
  },
  {
    quote:
      "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
    author: "Luna Lovegood",
  },
  {
    quote: "I am not worried, Harry. I am with you.",
    author: "Albus Dumbledore",
  },
  {
    quote: "It's not how you are alike, it's how you are not.",
    author: "Albus Dumbledore",
  },
  {
    quote: "I open at the close.",
    author: "The Golden Snitch (from Dumbledore)",
  },
  {
    quote: "You have your mother's eyes.",
    author: "Severus Snape",
  },
  {
    quote: "You're a wizard, Harry.",
    author: "Rubeus Hagrid",
  },
  {
    quote: "Curiosity is not a sin. But we should exercise caution with our curiosity.",
    author: "Albus Dumbledore",
  },
  {
    quote:
      "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
    author: "Albus Dumbledore",
  },
  {
    quote: "Ah, music. A magic beyond all we do here!",
    author: "Albus Dumbledore",
  },
  {
    quote: "We are only as strong as we are united, as weak as we are divided.",
    author: "Albus Dumbledore",
  },
  {
    quote: "We could all have been killed, or worse, expelled.",
    author: "Hermione Granger",
  },
]);

Data.set("bollywood", [
  {
    quote: "Mere paas maa hai.",
    author: "Vijay (Deewaar)",
  },
  {
    quote: "Bade bade deshon mein aisi chhoti chhoti baatein hoti rehti hai.",
    author: "Raj (Dilwale Dulhania Le Jayenge)",
  },
  {
    quote: "Picture abhi baaki hai, mere dost.",
    author: "Om Prakash (Om Shanti Om)",
  },
  {
    quote: "Mogambo khush hua.",
    author: "Mogambo (Mr. India)",
  },
  {
    quote: "Kitne aadmi the?",
    author: "Gabbar Singh (Sholay)",
  },
  {
    quote: "Pushpa, I hate tears!",
    author: "Rajesh (Amar Prem)",
  },
  {
    quote: "Rishte mein toh hum tumhare baap lagte hain, naam hai Shahenshah.",
    author: "Vijay (Shahenshah)",
  },
  {
    quote: "Main apni favourite hoon.",
    author: "Geet (Jab We Met)",
  },
  {
    quote:
      "Yeh dhai kilo ka haath jab kisi pe padta hai na, toh aadmi uthta nahi, uth jaata hai.",
    author: "Inspector Vijay (Damini)",
  },
  {
    quote: "Ek chutki sindoor ki keemat, tum kya jaano Ramesh babu.",
    author: "Basanti (Sholay)",
  },
  {
    quote: "Bade bade shehron mein aisi chhoti chhoti baatein hoti rehti hai, Senorita.",
    author: "Raj (Dilwale Dulhania Le Jayenge)",
  },
  {
    quote: "Aata majhi satakli.",
    author: "Bajirao Singham (Singham)",
  },
  {
    quote: "Mere Karan-Arjun aayenge.",
    author: "Durga (Karan Arjun)",
  },
  {
    quote: "Aaj mere paas gaadi hai, bungla hai, paisa hai... tumhare paas kya hai?",
    author: "Vijay (Deewaar)",
  },
  {
    quote: "Koi Dhanda Chota Nahi Hota Aur Dhande Se Bada Koi Dharm Nahi Hota.",
    author: "Raees",
  },
  {
    quote: "Main aaj bhi phenke hue paise nahi uthata.",
    author: "Raj (Deewana)",
  },
  {
    quote: "Don ko pakadna mushkil hi nahi, namumkin hai.",
    author: "Vijay (Don)",
  },
  {
    quote:
      "Aadmi ki fitrat hi aisi hai ... chhot lagti hai, toh aadmi uthta nahi ... khud apni fitrat ki chhot khata hai, toh aadmi jee nahi pata.",
    author: "Kabir (Kabir Singh)",
  },
  {
    quote: "Mere pass aao, mere paas aao mere pas aao mere paas aao.",
    author: "Prem (Bobby)",
  },
]);

Data.set("hollywood", [
  {
    quote: "I'm going to make him an offer he can't refuse.",
    author: "Vito Corleone",
  },
  {
    quote: "Here's looking at you, kid.",
    author: "Rick Blaine",
  },
  {
    quote: "May the Force be with you.",
    author: "Various characters",
  },
  {
    quote: "You can't handle the truth!",
    author: "Colonel Nathan R. Jessup",
  },
  {
    quote: "I'll be back.",
    author: "The Terminator",
  },
  {
    quote: "Houston, we have a problem.",
    author: "Jim Lovell",
  },
  {
    quote: "You talking to me?",
    author: "Travis Bickle",
  },
  {
    quote: "I'll have what she's having.",
    author: "Customer",
  },
  {
    quote: "E.T. phone home.",
    author: "E.T.",
  },
  {
    quote: "You shall not pass!",
    author: "Gandalf",
  },
  {
    quote: "Hasta la vista, baby.",
    author: "Terminator",
  },
  {
    quote: "There's no place like home.",
    author: "Dorothy Gale",
  },
  {
    quote: "Life is like a box of chocolates; you never know what you're gonna get.",
    author: "Forrest Gump",
  },
  {
    quote: "I feel the need... the need for speed!",
    author: "Maverick",
  },
  {
    quote: "To infinity and beyond!",
    author: "Buzz Lightyear",
  },
  {
    quote: "I'm king of the world!",
    author: "Jack Dawson",
  },
  {
    quote: "Keep your friends close, but your enemies closer.",
    author: "Michael Corleone",
  },
  {
    quote: "I'm just a girl, standing in front of a boy, asking him to love her.",
    author: "Anna Scott",
  },
  {
    quote: "You had me at hello.",
    author: "Dorothy Boyd",
  },
  {
    quote: "Frankly, my dear, I don't give a damn.",
    author: "Rhett Butler",
  },
  {
    quote: "I'm going to make him an offer he can't refuse.",
    author: "Vito Corleone",
  },
  {
    quote: "I see dead people.",
    author: "Cole Sear",
  },
  {
    quote: "There's no crying in baseball!",
    author: "Jimmy Dugan",
  },
  {
    quote: "I'm as mad as hell, and I'm not going to take this anymore!",
    author: "Howard Beale",
  },
  {
    quote: "Gentlemen, you can't fight in here! This is the War Room!",
    author: "President Merkin Muffley",
  },
  {
    quote: "Bond. James Bond.",
    author: "James Bond",
  },
  {
    quote: "Elementary, my dear Watson.",
    author: "Sherlock Holmes",
  },
  {
    quote: "I volunteer as tribute!",
    author: "Katniss Everdeen",
  },
  {
    quote: "Yippie-ki-yay, motherf***er!",
    author: "John McClane",
  },
  {
    quote: "There's a snake in my boot!",
    author: "Woody",
  },
  {
    quote: "I am Groot.",
    author: "Groot",
  },
  {
    quote: "I'm just one stomach flu away from my goal weight.",
    author: "Emily Charlton",
  },
  {
    quote: "I'm the Dude. So that's what you call me.",
    author: "The Dude",
  },
  {
    quote: "You complete me.",
    author: "Jerry Maguire",
  },
  {
    quote: "It's alive! It's alive!",
    author: "Dr. Henry Frankenstein",
  },
  {
    quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    author: "John Keating",
  },
  {
    quote: "Go ahead, make my day.",
    author: "Harry Callahan",
  },
  {
    quote: "I'm having an old friend for dinner.",
    author: "Dr. Hannibal Lecter",
  },
  {
    quote: "I'm king of the world!",
    author: "Jack Dawson",
  },
  {
    quote: "I'm the king of the world!",
    author: "Jack Dawson",
  },
  {
    quote: "I love the smell of napalm in the morning.",
    author: "Lieutenant Colonel Bill Kilgore",
  },
  {
    quote: "They may take our lives, but they'll never take our freedom!",
    author: "William Wallace",
  },
  {
    quote: "Say hello to my little friend!",
    author: "Tony Montana",
  },
  {
    quote: "Get busy living, or get busy dying.",
    author: "Andy Dufresne",
  },
  {
    quote: "I'm walking here!",
    author: "Ratso Rizzo",
  },
  {
    quote: "You make me want to be a better man.",
    author: "Melvin Udall",
  },
  {
    quote: "I am your father.",
    author: "Darth Vader",
  },
  {
    quote: "I'm the captain now.",
    author: "Captain Phillips",
  },
  {
    quote: "I see you.",
    author: "Neytiri",
  },
  {
    quote: "You're gonna need a bigger boat.",
    author: "Chief Brody",
  },
]);

Data.set("marvel", [
  {
    quote: "Avengers, assemble!",
    author: "Steve Rogers",
  },
  {
    quote: "I am Iron Man.",
    author: "Tony Stark",
  },
  {
    quote: "I am Inevitable.",
    author: "Thanos",
  },
  {
    quote: "He may have been your father, boy, but he wasn’t your daddy.",
    author: "Yondu",
  },
  {
    quote: "I love you 3000.",
    author: "Morgan Stark",
  },
  {
    quote:
      "Everyone fails at who they are supposed to be, Thor. The measure of a person, of a hero…is how well they succeed at being who they are.",
    author: "Frigga",
  },
  {
    quote:
      "But a thing isn’t beautiful because it lasts. It’s a privilege to be among them.",
    author: "Vision",
  },
  {
    quote: "On your left.",
    author: "Steve Rogers",
  },
  {
    quote: "We are groot.",
    author: "Groot",
  },
  {
    quote: "I can’t control your fear, I can only control mine.",
    author: "Wanda",
  },
  {
    quote: "I can do this all day.",
    author: "Captain America",
  },
  {
    quote: "No man can win every battle, but no man should fall without a struggle.",
    author: "Peter Parker",
  },
  {
    quote: "What did it cost? Everything.",
    author: "Gamora/Thanos",
  },
  {
    quote: "I’m Mary Poppins y’all!",
    author: "Yondu",
  },
  {
    quote: "That’s my secret, Captain I’m always angry.",
    author: "Bruce Banner",
  },
  {
    quote: "We have a hulk.",
    author: "Tony Stark",
  },
  {
    quote: "Don’t waste it. Don’t waste your life.",
    author: "Ho Yinsen",
  },
  {
    quote: "He’s a friend from work!",
    author: "Thor",
  },
  {
    quote:
      "Vengeance has consumed you. It’s consuming them. I’m done letting it consume me.",
    author: "T’Challa",
  },
  {
    quote:
      "Is this your king? Huh? Is this your king? He’s supposed to protect you! To lead Wakanda into the future! Nah, I’m your king!",
    author: "Killmonger",
  },
  {
    quote: "I’m gonna have to rain check that dance.",
    author: "Steve Rogers",
  },
  {
    quote: "Mr. Stark, I Don’t Feel So Good.",
    author: "Peter Parker",
  },
  {
    quote: "I Am Groot.",
    author: "Groot",
  },
  {
    quote: "You shouldn’t have killed my mom and squished my Walkman.",
    author: "Peter Quill",
  },
  {
    quote: "I had him on the ropes.",
    author: "Steve Rogers/Bucky Barnes",
  },
  {
    quote: "In times of crisis, the wise build bridges while the foolish build barriers.",
    author: "T’Challa",
  },
  {
    quote:
      "You think life takes more than it gives, but not today. Today it’s giving us something. It is giving us a chance.",
    author: "Star-Lord",
  },
  {
    quote: "It’s alright, you could never hurt me. I just feel you.",
    author: "Vision",
  },
  {
    quote: "Well let me know if real power wants a magazine or something.",
    author: "Nick Fury",
  },
  {
    quote: "I can feel the righteousness surging!",
    author: "Loki",
  },
  {
    quote: "We’re in the endgame now.",
    author: "Dr. Stephen Strange",
  },
  {
    quote: "Let me go. It’s okay.",
    author: "Black Widow",
  },
  {
    quote: "I have nothing to prove to you.",
    author: "Carol Danvers",
  },
  {
    quote:
      "I do anything and everything that Mr. Stark requires—including occasionally taking out the trash.",
    author: "Pepper Potts",
  },
  {
    quote: "Genius. Billionaire. Playboy. Philanthropist.",
    author: "Tony Stark",
  },
  {
    quote:
      "When you said you would take me to California for the first time, I thought you meant Coachella or Disneyland.",
    author: "Shuri",
  },
  {
    quote: "I’ll get you all the cheeseburgers you want.",
    author: "Happy Hogan",
  },
  {
    quote:
      "I’m made of rocks, as you can see. But don’t let that intimidate you. You don’t need to be afraid unless you’re made of scissors. Just a little rock-paper-scissor joke for you.",
    author: "Korg",
  },
  {
    quote: "I think you look great, Cap. As far as I’m concerned, that’s America’s ass.",
    author: "Ant-Man",
  },
  {
    quote: "If you’re nothing without this suit, then you shouldn’t have it.",
    author: "Tony Stark",
  },
  {
    quote: "I’ll explain when you’re older, Hawkeye.",
    author: "Laura Barton",
  },
  {
    quote:
      "What is this thing? Look how it thinks it’s so cool. It’s not cool to get help. Walk by yourself you little gargoyle.",
    author: "Rocket",
  },
  {
    quote: "You’re The Spiderling. Crime-Fighting Spider. You’re Spider-Boy?",
    author: "Tony Stark",
  },
  {
    quote:
      "It’s an honor to meet you, officially. I sort of met you, I mean, I watched you while you were sleeping.",
    author: "Phil Coulson",
  },
  {
    quote: "I thought you were smaller.",
    author: "Bucky Barnes",
  },
  {
    quote:
      "Can’t have a revolution without somebody to overthrow, so you’re welcome, and uh, it’s a tie.",
    author: "Grandmaster",
  },
  {
    quote: "His name is Redwing. He’s cute. Go ahead, pet him.",
    author: "Sam Wilson",
  },
  {
    quote: "Boom! You looking for this?",
    author: "James Rhodes",
  },
  {
    quote: "This is the fight of our lives, and we’re going to win. Whatever it takes.",
    author: "Steve Rogers",
  },
  {
    quote: "You get hurt, hurt ‘em back. You get killed, walk it off.",
    author: "Steve Rogers",
  },
  {
    quote: "Is he, though?",
    author: "Thor",
  },
  {
    quote: "I thought that you could sense that with your Peter Tingle",
    author: "Aunt May",
  },
  {
    quote:
      "‘Boh’ is my new superpower. It’s like the anti-Aloha. I was born to say this word.",
    author: "M.J.",
  },
  {
    quote: "You’re repeating yourself! You’re repeating yourself!",
    author: "Scott Lang",
  },
  {
    quote:
      "The price of freedom is high, it always has been. And it’s a price I’m willing to pay. And if I’m the only one, then so be it. But I’m willing to bet I’m not.",
    author: "Steve Rogers",
  },
  {
    quote:
      "I was already slipping when you happened to punch me in the face. The two events are not related.",
    author: "Carol Danvers",
  },
  {
    quote: "Then again that’s the hero gig, part of the journey is the end.",
    author: "Tony Stark",
  },
  {
    quote:
      "Whatever happens tomorrow you must promise me one thing, that you will stay who you are. Not a perfect soldier but a good man.",
    author: "Dr. Abraham Erskine",
  },
  {
    quote: "The hardest choices require the strongest wills.",
    author: "Thanos",
  },
  {
    quote:
      "Let me tell you. That kid’s not even here yet and, there’s nothing I wouldn’t do for him.",
    author: "Howard Stark",
  },
  {
    quote:
      "Don’t do anything I would do, and don’t do anything I wouldn’t do. There’s a little gray area in there. That’s where you operate.",
    author: "Tony Stark",
  },
  {
    quote:
      "This is your chance. To earn that look in your daughter’s eyes. To become the hero that she already thinks you are. It’s not about saving our world, it’s about saving theirs.",
    author: "Hank Pym",
  },
  {
    quote:
      "You call me ‘young lady’ again, I’ll shove my foot up somewhere it’s not supposed to be.",
    author: "Maria Rambeau",
  },
  {
    quote: "I’m not sure you understand the concept of a getaway car.",
    author: "Sharon Carter",
  },
  {
    quote:
      "I think we must learn from our mistakes and do better. You must not give up hope.",
    author: "Karun",
  },
  {
    quote: "I beat some guys up. Saved the dog. Some light B and E",
    author: "Kate Bishop",
  },
  {
    quote:
      "Welcome to the Time Variance Authority! I’m Miss Minutes, and it’s my job to catch you up before you stand trial for your crimes! So let’s not waste another minute. Settle in, sharpen your pencils and check this out!",
    author: "Miss Minutes",
  },
  {
    quote: "Sorry, I tend to process traumatic events with dad jokes.",
    author: "Scott Lang/Ant-Man",
  },
  {
    quote:
      "We got the full clown car. It means whatever the threat is, S.W.O.R.D clearly has no idea what they are dealing with.",
    author: "Darcy Lewis",
  },
  {
    quote: "Sacrifice? That would imply I had something to lose.",
    author: "Doctor Strange",
  },
  {
    quote: "I can’t believe you were D.B. cooper! Come on!",
    author: "Mobius",
  },
  {
    quote: "She was literally one split end from cutting her own bangs.",
    author: "Agnes/Agatha Harkness",
  },
  {
    quote: "I made macaroni if you want some.",
    author: "Yelena Belova",
  },
  {
    quote:
      "You, Vision, are the piece of the mind stone that lives in me, you are a body of wires, and blood, and bone that I created. You are my sadness and my hope. But mostly, you’re my love.",
    author: "Wanda Maximoff",
  },
  {
    quote: "Such a poser.",
    author: "Yelena Belova",
  },
  {
    quote:
      "This is wild. The two of you, same person. I mean it’s a little unnatural. But, wow! Wild.",
    author: "He Who Remains",
  },
  {
    quote:
      "My mom, dad, Uncle Ben, Mr. Stark. Now Happy. I’ve… I’ve Lost A Lot. But my Aunt May says, used to say, that if we don’t keep smiling when they can’t, then we might as well be gone too.",
    author: "Peter Parker/Zombie Hunter Spider-Man",
  },
  {
    quote: "I don’t like bullies. I don’t care where they’re from.",
    author: "Steve Rogers",
  },
]);

Data.set("starwars", [
  {
    quote: "May the Force be with you.",
    author: "Obi-Wan Kenobi",
  },
  {
    quote: "I am your father.",
    author: "Darth Vader",
  },
  {
    quote: "Do or do not. There is no try.",
    author: "Yoda",
  },
  {
    quote: "The Force will be with you, always.",
    author: "Obi-Wan Kenobi",
  },
  {
    quote: "I find your lack of faith disturbing.",
    author: "Darth Vader",
  },
  {
    quote: "I've got a bad feeling about this.",
    author: "Various Characters",
  },
  {
    quote: "Help me, Obi-Wan Kenobi. You're my only hope.",
    author: "Princess Leia",
  },
  {
    quote: "It's a trap!",
    author: "Admiral Ackbar",
  },
  {
    quote: "I love you.",
    author: "Princess Leia",
  },
  {
    quote: "I know.",
    author: "Han Solo",
  },
  {
    quote: "I am a Jedi, like my father before me.",
    author: "Luke Skywalker",
  },
  {
    quote: "The Force is strong with this one.",
    author: "Darth Vader",
  },
  {
    quote: "It's not my fault.",
    author: "Han Solo",
  },
  {
    quote: "Fear is the path to the dark side.",
    author: "Yoda",
  },
  {
    quote: "I'm one with the Force. The Force is with me.",
    author: "Chirrut",
  },
  {
    quote: "This is the way.",
    author: "Various Characters",
  },
  {
    quote: "You were the chosen one!",
    author: "Obi-Wan Kenobi",
  },
  {
    quote: "A long time ago in a galaxy far, far away...",
    author: "Narrator",
  },
  {
    quote: "The Force will be with you, always.",
    author: "Obi-Wan Kenobi",
  },
  {
    quote: "May the Force be with you.",
    author: "Obi-Wan Kenobi",
  },
  {
    quote: "I am your father.",
    author: "Darth Vader",
  },
  {
    quote: "Do or do not. There is no try.",
    author: "Yoda",
  },
  {
    quote: "The Force will be with you, always.",
    author: "Obi-Wan Kenobi",
  },
  {
    quote: "I find your lack of faith disturbing.",
    author: "Darth Vader",
  },
  {
    quote: "I've got a bad feeling about this.",
    author: "Various Characters",
  },
  {
    quote: "Help me, Obi-Wan Kenobi. You're my only hope.",
    author: "Princess Leia",
  },
  {
    quote: "It's a trap!",
    author: "Admiral Ackbar",
  },
  {
    quote: "I love you.",
    author: "Princess Leia",
  },
  {
    quote: "I know.",
    author: "Han Solo",
  },
  {
    quote: "I am a Jedi, like my father before me.",
    author: "Luke Skywalker",
  },
  {
    quote: "The Force is strong with this one.",
    author: "Darth Vader",
  },
  {
    quote: "It's not my fault.",
    author: "Han Solo",
  },
  {
    quote: "Fear is the path to the dark side.",
    author: "Yoda",
  },
  {
    quote: "I'm one with the Force. The Force is with me.",
    author: "Chirrut",
  },
  {
    quote: "This is the way.",
    author: "Various Characters",
  },
  {
    quote: "You were the chosen one!",
    author: "Obi-Wan Kenobi",
  },
  {
    quote: "A long time ago in a galaxy far, far away...",
    author: "Narrator",
  },
  {
    quote: "I find your lack of faith disturbing.",
    author: "Darth Vader",
  },
  {
    quote: "I've got a bad feeling about this.",
    author: "Various Characters",
  },
  {
    quote: "It's a trap!",
    author: "Admiral Ackbar",
  },
  {
    quote: "I love you.",
    author: "Princess Leia",
  },
  {
    quote: "I know.",
    author: "Han Solo",
  },
  {
    quote: "I am a Jedi, like my father before me.",
    author: "Luke Skywalker",
  },
  {
    quote: "The Force is strong with this one.",
    author: "Darth Vader",
  },
  {
    quote: "It's not my fault.",
    author: "Han Solo",
  },
  {
    quote: "Fear is the path to the dark side.",
    author: "Yoda",
  },
  {
    quote: "I'm one with the Force. The Force is with me.",
    author: "Chirrut",
  },
  {
    quote: "This is the way.",
    author: "Various Characters",
  },
  {
    quote: "You were the chosen one!",
    author: "Obi-Wan Kenobi",
  },
  {
    quote: "A long time ago in a galaxy far, far away...",
    author: "Narrator",
  },
]);

export default Data;
