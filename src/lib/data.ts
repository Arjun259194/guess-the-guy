export type DataSet = {
  quote: string;
  author: string;
  movie: string;
};

export const categories = {
  bollywood: "/img/bollywood.jpg",
  hollywood: "/img/hollywood.webp",
  marvel: "/img/marvel.jpg",
  DC: "/img/DC.webp",
  starwars: "/img/starwars.webp",
  "harry-porter": "/img/harryPorter.jpg",
  "disney-animation": "/img/disney-animation.webp",
};

export type Categories = keyof typeof categories;

const Data = new Map<Categories, DataSet[]>();

Data.set("DC", [
  {
    quote: "Why so serious?",
    author: "The Joker",
    movie: "The Dark Knight",
  },
  {
    quote: "I'm Batman.",
    author: "Batman",
    movie: "Batman Begins",
  },
  {
    quote: "It's not who I am underneath, but what I do that defines me.",
    author: "Batman",
    movie: "Batman Begins",
  },
  {
    quote: "The world's too big, Mom.",
    author: "Superman",
    movie: "Man of Steel",
  },
  {
    quote: "Tell me, do you bleed? You will.",
    author: "Batman",
    movie: "Batman v Superman: Dawn of Justice",
  },
  {
    quote: "I'm not a hero. I'm a high-functioning sociopath.",
    author: "The Joker",
    movie: "Suicide Squad",
  },
  {
    quote: "I'm not a killer. I'm just ahead of the curve.",
    author: "The Joker",
    movie: "The Dark Knight",
  },
  {
    quote: "I'm not a hero, I'm a high-priced talent.",
    author: "Deadshot",
    movie: "Suicide Squad",
  },
  {
    quote: "The night is darkest just before the dawn.",
    author: "Harvey Dent",
    movie: "The Dark Knight",
  },
  {
    quote:
      "You either die a hero or you live long enough to see yourself become the villain.",
    author: "Harvey Dent",
    movie: "The Dark Knight",
  },
  {
    quote: "I'm not a hero. I'm a guardian. A protector.",
    author: "Wonder Woman",
    movie: "Wonder Woman",
  },
  {
    quote: "I'm not a threat. I'm a solution.",
    author: "Amanda Waller",
    movie: "Suicide Squad",
  },
  {
    quote: "Do you want to know why I use a knife? Guns are too quick.",
    author: "The Joker",
    movie: "The Dark Knight",
  },
  {
    quote: "Sometimes it's only madness that makes us what we are.",
    author: "The Joker",
    movie: "Batman Begins",
  },
  {
    quote: "I'm more than a bird. I'm more than a plane. I'm a goddamn superhero.",
    author: "John Constantine",
    movie: "Constantine",
  },
  {
    quote: "In my dreams, I hear again the thunderous applause of the people.",
    author: "Lex Luthor",
    movie: "Batman v Superman: Dawn of Justice",
  },
  {
    quote: "I'm the king of Atlantis!",
    author: "Aquaman",
    movie: "Aquaman",
  },
  {
    quote: "They may be gods, but we have a king.",
    author: "Steppenwolf",
    movie: "Justice League",
  },
  {
    quote: "Sometimes, truth isn't good enough. Sometimes people deserve more.",
    author: "Batman",
    movie: "The Dark Knight",
  },
  {
    quote:
      "I am Diana of Themyscira, daughter of Hippolyta, and your wrath upon this world is over.",
    author: "Wonder Woman",
    movie: "Wonder Woman",
  },
  {
    quote: "We all have our struggles.",
    author: "Aquaman",
    movie: "Aquaman",
  },
  {
    quote: "I will find him!",
    author: "General Zod",
    movie: "Man of Steel",
  },
  {
    quote: "I'm here to end the game.",
    author: "Harley Quinn",
    movie: "Birds of Prey",
  },
  {
    quote:
      "Power is a burden. Only those who are responsible enough to handle it should have it.",
    author: "Superman",
    movie: "Man of Steel",
  },
  {
    quote: "This is why I brought you together. The ride ain't over yet.",
    author: "Batman",
    movie: "Justice League",
  },
  {
    quote: "With great power comes great responsibility.",
    author: "Superman",
    movie: "Man of Steel",
  },
  {
    quote: "I'm an idea, a philosophy, and I will not be silenced!",
    author: "Rorschach",
    movie: "Watchmen",
  },
  {
    quote: "Men are still good.",
    author: "Superman",
    movie: "Batman v Superman: Dawn of Justice",
  },
  {
    quote: "The bat is dead. Bury it.",
    author: "Lex Luthor",
    movie: "Batman v Superman: Dawn of Justice",
  },
  {
    quote: "It's not a 'S.' On my world, it means 'hope.'",
    author: "Superman",
    movie: "Man of Steel",
  },
  {
    quote: "I don't want to kill you, but I will.",
    author: "Deadshot",
    movie: "Suicide Squad",
  },
  {
    quote:
      "We have to be ready. You, me, the others. There's an attack coming from far away.",
    author: "Batman",
    movie: "Justice League",
  },
  {
    quote: "I'm the Flash! I'm the fastest man alive!",
    author: "The Flash",
    movie: "Justice League",
  },
  {
    quote: "You're much stronger than you think you are. Trust me.",
    author: "Wonder Woman",
    movie: "Wonder Woman",
  },
  {
    quote: "This is why Superman works alone.",
    author: "Batman",
    movie: "Justice League",
  },
  {
    quote: "The world needs you.",
    author: "Alfred Pennyworth",
    movie: "Justice League",
  },
  {
    quote: "I'll be the most powerful Jedi ever.",
    author: "Anakin Skywalker",
    movie: "Star Wars Episode III: Revenge of the Sith",
  },
  {
    quote: "I'm not a villain. I'm just ahead of the curve.",
    author: "The Joker",
    movie: "The Dark Knight",
  },
  {
    quote: "I'm the epitome of grace!",
    author: "Harley Quinn",
    movie: "Suicide Squad",
  },
  {
    quote: "I'm done withcrime, I'm retiring.",
    author: "Bruce Wayne",
    movie: "The Dark Knight Rises",
  },
  {
    quote: "It's not the years, honey. It's the mileage.",
    author: "Indiana Jones",
    movie: "Raiders of the Lost Ark",
  },
  {
    quote: "Some men just want to watch the world burn.",
    author: "Alfred Pennyworth",
    movie: "The Dark Knight",
  },
  {
    quote: "You know what? I'm not a hero, I'm a high-functioning sociopath.",
    author: "Sherlock Holmes",
    movie: "Sherlock Holmes",
  },
  {
    quote: "Life doesn't give us purpose. We give life purpose.",
    author: "The Flash",
    movie: "Justice League",
  },
  {
    quote: "The world changed when Superman flew across the sky.",
    author: "Lex Luthor",
    movie: "Batman v Superman: Dawn of Justice",
  },
  {
    quote:
      "The bat and the cat. Nine lives together, and I'll never know which one of us is gonna keep scratching.",
    author: "Catwoman",
    movie: "Batman Returns",
  },
  {
    quote: "I'm not a hero. I'm a high-functioning sociopath.",
    author: "Sherlock Holmes",
    movie: "Sherlock Holmes",
  },
  {
    quote: "Every time a bell rings, an angel gets his wings.",
    author: "Zuzu Bailey",
    movie: "It's a Wonderful Life",
  },
  {
    quote: "I'm always gonna be right here, aren't I?",
    author: "Superman",
    movie: "Man of Steel",
  },
  {
    quote: "I believe in truth. But I'm also a big fan of justice.",
    author: "Superman",
    movie: "Batman v Superman: Dawn of Justice",
  },
  {
    quote: "You can't lock up the darkness.",
    author: "Zoom",
    movie: "The Flash",
  },
  {
    quote: "I have nothing to prove to you.",
    author: "Carol Danvers",
    movie: "Captain Marvel",
  },
  {
    quote: "We have a saying in my village: I am Batman!",
    author: "Batman",
    movie: "The LEGO Batman Movie",
  },
  {
    quote:
      "I don't need a symbol to remind me of my parents. I need a symbol to scare criminals!",
    author: "Batman",
    movie: "Batman Begins",
  },
  {
    quote:
      "The greatest power on Earth is the magnificent power we all of us possess, the power of the human brain!",
    author: "The Riddler",
    movie: "Batman Forever",
  },
  {
    quote: "I'm a detective. I should be detecting!",
    author: "Batman",
    movie: "Batman: Mask of the Phantasm",
  },
  {
    quote: "There's only one true king.",
    author: "Aquaman",
    movie: "Justice League",
  },
  {
    quote: "I'm not a hero, I'm a high-functioning sociopath.",
    author: "Sherlock Holmes",
    movie: "Sherlock Holmes",
  },
  {
    quote: "I'm not a hero. I'm a high-functioning sociopath.",
    author: "Sherlock Holmes",
    movie: "Sherlock Holmes",
  },
  {
    quote: "I'm always gonna be right here, aren't I?",
    author: "Superman",
    movie: "Man of Steel",
  },
  {
    quote: "I believe in truth. But I'm also a big fan of justice.",
    author: "Superman",
    movie: "Batman v Superman: Dawn of Justice",
  },
  {
    quote: "You can't lock up the darkness.",
    author: "Zoom",
    movie: "The Flash",
  },
  {
    quote: "I have nothing to prove to you.",
    author: "Carol Danvers",
    movie: "Captain Marvel",
  },
  {
    quote: "We have a saying in my village: I am Batman!",
    author: "Batman",
    movie: "The LEGO Batman Movie",
  },
  {
    quote:
      "I don't need a symbol to remind me of my parents. I need a symbol to scare criminals!",
    author: "Batman",
    movie: "Batman Begins",
  },
  {
    quote:
      "The greatest power on Earth is the magnificent power we all of us possess, the power of the human brain!",
    author: "The Riddler",
    movie: "Batman Forever",
  },
  {
    quote: "I'm a detective. I should be detecting!",
    author: "Batman",
    movie: "Batman: Mask of the Phantasm",
  },
  {
    quote: "There's only one true king.",
    author: "Aquaman",
    movie: "Justice League",
  },
  {
    quote: "I'm not a hero, I'm a high-functioning sociopath.",
    author: "Sherlock Holmes",
    movie: "Sherlock Holmes",
  },
]);

Data.set("disney-animation", [
  {
    quote:
      "The past can hurt. But the way I see it, you can either run from it or learn from it.",
    author: "Rafiki",
    movie: "The Lion King",
  },
  {
    quote: "Ohana means family. Family means nobody gets left behind or forgotten.",
    author: "Lilo",
    movie: "Lilo & Stitch",
  },
  {
    quote: "To infinity and beyond!",
    author: "Buzz Lightyear",
    movie: "Toy Story",
  },
  {
    quote: "Hakuna Matata! It means no worries for the rest of your days.",
    author: "Timon and Pumbaa",
    movie: "The Lion King",
  },
  {
    quote: "The flower that blooms in adversity is the most rare and beautiful of all.",
    author: "The Emperor",
    movie: "Mulan",
  },
  {
    quote: "Just keep swimming.",
    author: "Dory",
    movie: "Finding Nemo",
  },
  {
    quote: "Remember who you are.",
    author: "Mufasa",
    movie: "The Lion King",
  },
  {
    quote:
      "You're braver than you believe, stronger than you seem, and smarter than you think.",
    author: "Christopher Robin",
    movie: "Winnie the Pooh",
  },
  {
    quote:
      "A true hero isn't measured by the size of his strength, but by the strength of his heart.",
    author: "Zeus",
    movie: "Hercules",
  },
  {
    quote: "All it takes is faith and trust.",
    author: "Peter Pan",
    movie: "Peter Pan",
  },
  {
    quote: "If you can't say something nice, don't say nothing at all.",
    author: "Thumper",
    movie: "Bambi",
  },
  {
    quote: "The seaweed is always greener in somebody else's lake.",
    author: "Sebastian",
    movie: "The Little Mermaid",
  },
  {
    quote: "Oh yes, the past can hurt. But you can either run from it, or learn from it.",
    author: "Rafiki",
    movie: "The Lion King",
  },
  {
    quote: "Love is putting someone else's needs before yours.",
    author: "Olaf",
    movie: "Frozen",
  },
  {
    quote: "Adventure is out there!",
    author: "Ellie",
    movie: "Up",
  },
  {
    quote: "If you focus on what you left behind, you will never see what lies ahead.",
    author: "Gusteau",
    movie: "Ratatouille",
  },
  {
    quote: "Some people are worth melting for.",
    author: "Olaf",
    movie: "Frozen",
  },
  {
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney",
    movie: "Various Disney Productions",
  },
  {
    quote: "Even miracles take a little time.",
    author: "Fairy Godmother",
    movie: "Cinderella",
  },
  {
    quote:
      "You must not let anyone define your limits because of where you come from. Your only limit is your soul.",
    author: "Gusteau",
    movie: "Ratatouille",
  },
]);

Data.set("harry-porter", [
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Sorcerer's Stone",
  },
  {
    quote: "To the well-organized mind, death is but the next great adventure.",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Sorcerer's Stone",
  },
  {
    quote:
      "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Sorcerer's Stone",
  },
  {
    quote:
      "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Prisoner of Azkaban",
  },
  {
    quote:
      "We've all got both light and dark inside us. What matters is the part we choose to act on. That's who we really are.",
    author: "Sirius Black",
    movie: "Harry Potter and the Order of the Phoenix",
  },
  {
    quote: "I solemnly swear that I am up to no good.",
    author: "Fred and George Weasley",
    movie: "Harry Potter and the Prisoner of Azkaban",
  },
  {
    quote: "Dobby is a free elf!",
    author: "Dobby",
    movie: "Harry Potter and the Chamber of Secrets",
  },
  {
    quote: "I don't go looking for trouble. Trouble usually finds me.",
    author: "Harry Potter",
    movie: "Harry Potter and the Prisoner of Azkaban",
  },
  {
    quote: "After all this time?",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Deathly Hallows - Part 2",
  },
  {
    quote: "Always.",
    author: "Severus Snape",
    movie: "Harry Potter and the Deathly Hallows - Part 2",
  },
  {
    quote: "Fear of a name only increases fear of the thing itself.",
    author: "Hermione Granger",
    movie: "Harry Potter and the Chamber of Secrets",
  },
  {
    quote:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Chamber of Secrets",
  },
  {
    quote: "Not my daughter, you bitch!",
    author: "Molly Weasley",
    movie: "Harry Potter and the Deathly Hallows - Part 2",
  },
  {
    quote: "The ones that love us never really leave us.",
    author: "Sirius Black",
    movie: "Harry Potter and the Prisoner of Azkaban",
  },
  {
    quote: "It's wingardium leviOsa, not leviosAH.",
    author: "Hermione Granger",
    movie: "Harry Potter and the Sorcerer's Stone",
  },
  {
    quote: "I am what I am, an' I'm not ashamed.",
    author: "Rubeus Hagrid",
    movie: "Harry Potter and the Goblet of Fire",
  },
  {
    quote:
      "Dark and difficult times lie ahead. Soon, we must all face the choice between what is right and what is easy.",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Goblet of Fire",
  },
  {
    quote: "I must not tell lies.",
    author: "Dolores Umbridge",
    movie: "Harry Potter and the Order of the Phoenix",
  },
  {
    quote:
      "Do not pity the dead, Harry. Pity the living, and above all, those who live without love.",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Deathly Hallows - Part 2",
  },
  {
    quote: "The wand chooses the wizard.",
    author: "Mr. Ollivander",
    movie: "Harry Potter and the Sorcerer's Stone",
  },
  {
    quote:
      "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Deathly Hallows - Part 2",
  },
  {
    quote: "Nitwit! Blubber! Oddment! Tweak!",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Philosopher's Stone",
  },
  {
    quote: "It matters not what someone is born, but what they grow to be.",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Goblet of Fire",
  },
  {
    quote:
      "I'm going to bed before either of you come up with another clever idea to get us killed or worse, expelled.",
    author: "Hermione Granger",
    movie: "Harry Potter and the Philosopher's Stone",
  },
  {
    quote: "I solemnly swear that I am up to no good.",
    author: "Fred and George Weasley",
    movie: "Harry Potter and the Prisoner of Azkaban",
  },
  {
    quote:
      "It is the quality of one's convictions that determines success, not the number of followers.",
    author: "Remus Lupin",
    movie: "Harry Potter and the Deathly Hallows - Part 2",
  },
  {
    quote: "Wit beyond measure is man's greatest treasure.",
    author: "Luna Lovegood",
    movie: "Harry Potter and the Order of the Phoenix",
  },
  {
    quote:
      "The world isn't split into good people and Death Eaters. We've all got both light and dark inside us.",
    author: "Sirius Black",
    movie: "Harry Potter and the Order of the Phoenix",
  },
  {
    quote:
      "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
    author: "Luna Lovegood",
    movie: "Harry Potter and the Order of the Phoenix",
  },
  {
    quote: "I am not worried, Harry. I am with you.",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Half-Blood Prince",
  },
  {
    quote: "It's not how you are alike, it's how you are not.",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Goblet of Fire",
  },
  {
    quote: "I open at the close.",
    author: "The Golden Snitch (from Dumbledore)",
    movie: "Harry Potter and the Deathly Hallows - Part 1",
  },
  {
    quote: "You have your mother's eyes.",
    author: "Severus Snape",
    movie: "Harry Potter and the Deathly Hallows - Part 2",
  },
  {
    quote: "You're a wizard, Harry.",
    author: "Rubeus Hagrid",
    movie: "Harry Potter and the Sorcerer's Stone",
  },
  {
    quote: "Curiosity is not a sin. But we should exercise caution with our curiosity.",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Goblet of Fire",
  },
  {
    quote:
      "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Goblet of Fire",
  },
  {
    quote: "Ah, music. A magic beyond all we do here!",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Philosopher's Stone",
  },
  {
    quote: "We are only as strong as we are united, as weak as we are divided.",
    author: "Albus Dumbledore",
    movie: "Harry Potter and the Goblet of Fire",
  },
  {
    quote: "We could all have been killed, or worse, expelled.",
    author: "Hermione Granger",
    movie: "Harry Potter and the Sorcerer's Stone",
  },
]);

Data.set("bollywood", [
  {
    quote: "Mere paas maa hai.",
    author: "Vijay",
    movie: "Deewaar",
  },
  {
    quote: "Bade bade deshon mein aisi chhoti chhoti baatein hoti rehti hai.",
    author: "Raj",
    movie: "Dilwale Dulhania Le Jayenge",
  },
  {
    quote: "Picture abhi baaki hai, mere dost.",
    author: "Om Prakash",
    movie: "Om Shanti Om",
  },
  {
    quote: "Mogambo khush hua.",
    author: "Mogambo",
    movie: "Mr. India",
  },
  {
    quote: "Kitne aadmi the?",
    author: "Gabbar Singh",
    movie: "Sholay",
  },
  {
    quote: "Pushpa, I hate tears!",
    author: "Rajesh",
    movie: "Amar Prem",
  },
  {
    quote: "Rishte mein toh hum tumhare baap lagte hain, naam hai Shahenshah.",
    author: "Vijay",
    movie: "Shahenshah",
  },
  {
    quote: "Main apni favourite hoon.",
    author: "Geet",
    movie: "Jab We Met",
  },
  {
    quote:
      "Yeh dhai kilo ka haath jab kisi pe padta hai na, toh aadmi uthta nahi, uth jaata hai.",
    author: "Inspector Vijay",
    movie: "Damini",
  },
  {
    quote: "Ek chutki sindoor ki keemat, tum kya jaano Ramesh babu.",
    author: "Basanti",
    movie: "Sholay",
  },
  {
    quote: "Bade bade shehron mein aisi chhoti chhoti baatein hoti rehti hai, Senorita.",
    author: "Raj",
    movie: "Dilwale Dulhania Le Jayenge",
  },
  {
    quote: "Aata majhi satakli.",
    author: "Bajirao Singham",
    movie: "Singham",
  },
  {
    quote: "Mere Karan-Arjun aayenge.",
    author: "Durga",
    movie: "Karan Arjun",
  },
  {
    quote: "Aaj mere paas gaadi hai, bungla hai, paisa hai... tumhare paas kya hai?",
    author: "Vijay",
    movie: "Deewaar",
  },
  {
    quote: "Koi Dhanda Chota Nahi Hota Aur Dhande Se Bada Koi Dharm Nahi Hota.",
    author: "Raees",
    movie: "Raees",
  },
  {
    quote: "Main aaj bhi phenke hue paise nahi uthata.",
    author: "Raj",
    movie: "Deewana",
  },
  {
    quote: "Don ko pakadna mushkil hi nahi, namumkin hai.",
    author: "Vijay",
    movie: "Don",
  },
  {
    quote:
      "Aadmi ki fitrat hi aisi hai ... chhot lagti hai, toh aadmi uthta nahi ... khud apni fitrat ki chhot khata hai, toh aadmi jee nahi pata.",
    author: "Kabir",
    movie: "Kabir Singh",
  },
  {
    quote: "Mere pass aao, mere paas aao mere pas aao mere paas aao.",
    author: "Prem",
    movie: "Bobby",
  },
]);

Data.set("hollywood", [
  {
    quote: "I'm going to make him an offer he can't refuse.",
    author: "Vito Corleone",
    movie: "The Godfather",
  },
  {
    quote: "Here's looking at you, kid.",
    author: "Rick Blaine",
    movie: "Casablanca",
  },
  {
    quote: "May the Force be with you.",
    author: "Various author:",
    movie: "Star Wars",
  },
  {
    quote: "You can't handle the truth!",
    author: "Colonel Nathan R. Jessup",
    movie: "A Few Good Men",
  },
  {
    quote: "I'll be back.",
    author: "The Terminator",
    movie: "The Terminator",
  },
  {
    quote: "Houston, we have a problem.",
    author: "Jim Lovell",
    movie: "Apollo 13",
  },
  {
    quote: "You talking to me?",
    author: "Travis Bickle",
    movie: "Taxi Driver",
  },
  {
    quote: "I'll have what she's having.",
    author: "Customer",
    movie: "When Harry Met Sally...",
  },
  {
    quote: "E.T. phone home.",
    author: "E.T.",
    movie: "E.T. the Extra-Terrestrial",
  },
  {
    quote: "You shall not pass!",
    author: "Gandalf",
    movie: "The Lord of the Rings: The Fellowship of the Ring",
  },
  {
    quote: "Hasta la vista, baby.",
    author: "Terminator",
    movie: "Terminator 2: Judgment Day",
  },
  {
    quote: "There's no place like home.",
    author: "Dorothy Gale",
    movie: "The Wizard of Oz",
  },
  {
    quote: "Life is like a box of chocolates; you never know what you're gonna get.",
    author: "Forrest Gump",
    movie: "Forrest Gump",
  },
  {
    quote: "I feel the need... the need for speed!",
    author: "Maverick",
    movie: "Top Gun",
  },
  {
    quote: "To infinity and beyond!",
    author: "Buzz Lightyear",
    movie: "Toy Story",
  },
  {
    quote: "I'm king of the world!",
    author: "Jack Dawson",
    movie: "Titanic",
  },
  {
    quote: "Keep your friends close, but your enemies closer.",
    author: "Michael Corleone",
    movie: "The Godfather Part II",
  },
  {
    quote: "I'm just a girl, standing in front of a boy, asking him to love her.",
    author: "Anna Scott",
    movie: "Notting Hill",
  },
  {
    quote: "You had me at hello.",
    author: "Dorothy Boyd",
    movie: "Jerry Maguire",
  },
  {
    quote: "Frankly, my dear, I don't give a damn.",
    author: "Rhett Butler",
    movie: "Gone with the Wind",
  },
  {
    quote: "I'm going to make him an offer he can't refuse.",
    author: "Vito Corleone",
    movie: "The Godfather",
  },
  {
    quote: "I see dead people.",
    author: "Cole Sear",
    movie: "The Sixth Sense",
  },
  {
    quote: "There's no crying in baseball!",
    author: "Jimmy Dugan",
    movie: "A League of Their Own",
  },
  {
    quote: "I'm as mad as hell, and I'm not going to take this anymore!",
    author: "Howard Beale",
    movie: "Network",
  },
  {
    quote: "Gentlemen, you can't fight in here! This is the War Room!",
    author: "President Merkin Muffley",
    movie: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
  },
  {
    quote: "Bond. James Bond.",
    author: "James Bond",
    movie: "Dr. No",
  },
  {
    quote: "Elementary, my dear Watson.",
    author: "Sherlock Holmes",
    movie: "The Adventures of Sherlock Holmes",
  },
  {
    quote: "I volunteer as tribute!",
    author: "Katniss Everdeen",
    movie: "The Hunger Games",
  },
  {
    quote: "Yippie-ki-yay, motherfer!",
    author: "John McClane",
    movie: "Die Hard",
  },
  {
    quote: "There's a snake in my boot!",
    author: "Woody",
    movie: "Toy Story",
  },
  {
    quote: "I am Groot.",
    author: "Groot",
    movie: "Guardians of the Galaxy",
  },
  {
    quote: "I'm just one stomach flu away from my goal weight.",
    author: "Emily Charlton",
    movie: "The Devil Wears Prada",
  },
  {
    quote: "I'm the Dude. So that's what you call me.",
    author: "The Dude",
    movie: "The Big Lebowski",
  },
  {
    quote: "You complete me.",
    author: "Jerry Maguire",
    movie: "Jerry Maguire",
  },
  {
    quote: "It's alive! It's alive!",
    author: "Dr. Henry Frankenstein",
    movie: "Frankenstein",
  },
  {
    quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    author: "John Keating",
    movie: "Dead Poets Society",
  },
  {
    quote: "Go ahead, make my day.",
    author: "Harry Callahan",
    movie: "Sudden Impact",
  },
  {
    quote: "I'm having an old friend for dinner.",
    author: "Dr. Hannibal Lecter",
    movie: "The Silence of the Lambs",
  },
  {
    quote: "I'm king of the world!",
    author: "Jack Dawson",
    movie: "Titanic",
  },
  {
    quote: "I'm the king of the world!",
    author: "Jack Dawson",
    movie: "Titanic",
  },
  {
    quote: "I love the smell of napalm in the morning.",
    author: "Lieutenant Colonel Bill Kilgore",
    movie: "Apocalypse Now",
  },
  {
    quote: "I'm going to make him an offer he can't refuse.",
    author: "Vito Corleone",
    movie: "The Godfather",
  },
  {
    quote: "Here's looking at you, kid.",
    author: "Rick Blaine",
    movie: "Casablanca",
  },
  {
    quote: "May the Force be with you.",
    author: "Various author:",
    movie: "Star Wars",
  },
  {
    quote: "You can't handle the truth!",
    author: "Colonel Nathan R. Jessup",
    movie: "A Few Good Men",
  },
  {
    quote: "I'll be back.",
    author: "The Terminator",
    movie: "The Terminator",
  },
  {
    quote: "Houston, we have a problem.",
    author: "Jim Lovell",
    movie: "Apollo 13",
  },
  {
    quote: "You talking to me?",
    author: "Travis Bickle",
    movie: "Taxi Driver",
  },
  {
    quote: "I'll have what she's having.",
    author: "Customer",
    movie: "When Harry Met Sally...",
  },
  {
    quote: "E.T. phone home.",
    author: "E.T.",
    movie: "E.T. the Extra-Terrestrial",
  },
  {
    quote: "You shall not pass!",
    author: "Gandalf",
    movie: "The Lord of the Rings: The Fellowship of the Ring",
  },
  {
    quote: "Hasta la vista, baby.",
    author: "Terminator",
    movie: "Terminator 2: Judgment Day",
  },
  {
    quote: "There's no place like home.",
    author: "Dorothy Gale",
    movie: "The Wizard of Oz",
  },
  {
    quote: "Life is like a box of chocolates; you never know what you're gonna get.",
    author: "Forrest Gump",
    movie: "Forrest Gump",
  },
  {
    quote: "I feel the need... the need for speed!",
    author: "Maverick",
    movie: "Top Gun",
  },
  {
    quote: "To infinity and beyond!",
    author: "Buzz Lightyear",
    movie: "Toy Story",
  },
  {
    quote: "I'm king of the world!",
    author: "Jack Dawson",
    movie: "Titanic",
  },
  {
    quote: "Keep your friends close, but your enemies closer.",
    author: "Michael Corleone",
    movie: "The Godfather Part II",
  },
  {
    quote: "I'm just a girl, standing in front of a boy, asking him to love her.",
    author: "Anna Scott",
    movie: "Notting Hill",
  },
  {
    quote: "You had me at hello.",
    author: "Dorothy Boyd",
    movie: "Jerry Maguire",
  },
  {
    quote: "Frankly, my dear, I don't give a damn.",
    author: "Rhett Butler",
    movie: "Gone with the Wind",
  },
  {
    quote: "I'm going to make him an offer he can't refuse.",
    author: "Vito Corleone",
    movie: "The Godfather",
  },
  {
    quote: "I see dead people.",
    author: "Cole Sear",
    movie: "The Sixth Sense",
  },
  {
    quote: "There's no crying in baseball!",
    author: "Jimmy Dugan",
    movie: "A League of Their Own",
  },
  {
    quote: "I'm as mad as hell, and I'm not going to take this anymore!",
    author: "Howard Beale",
    movie: "Network",
  },
  {
    quote: "Gentlemen, you can't fight in here! This is the War Room!",
    author: "President Merkin Muffley",
    movie: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
  },
  {
    quote: "Bond. James Bond.",
    author: "James Bond",
    movie: "Dr. No",
  },
  {
    quote: "Elementary, my dear Watson.",
    author: "Sherlock Holmes",
    movie: "The Adventures of Sherlock Holmes",
  },
  {
    quote: "I volunteer as tribute!",
    author: "Katniss Everdeen",
    movie: "The Hunger Games",
  },
  {
    quote: "Yippie-ki-yay, motherfer!",
    author: "John McClane",
    movie: "Die Hard",
  },
  {
    quote: "There's a snake in my boot!",
    author: "Woody",
    movie: "Toy Story",
  },
  {
    quote: "I am Groot.",
    author: "Groot",
    movie: "Guardians of the Galaxy",
  },
  {
    quote: "I'm just one stomach flu away from my goal weight.",
    author: "Emily Charlton",
    movie: "The Devil Wears Prada",
  },
  {
    quote: "I'm the Dude. So that's what you call me.",
    author: "The Dude",
    movie: "The Big Lebowski",
  },
  {
    quote: "You complete me.",
    author: "Jerry Maguire",
    movie: "Jerry Maguire",
  },
  {
    quote: "It's alive! It's alive!",
    author: "Dr. Henry Frankenstein",
    movie: "Frankenstein",
  },
  {
    quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    author: "John Keating",
    movie: "Dead Poets Society",
  },
  {
    quote: "Go ahead, make my day.",
    author: "Harry Callahan",
    movie: "Sudden Impact",
  },
]);

Data.set("marvel", [
  {
    quote: "Avengers, assemble!",
    author: "Steve Rogers",
    movie: "Avengers: Endgame",
  },
  {
    quote: "I am Iron Man.",
    author: "Tony Stark",
    movie: "Avengers: Endgame",
  },
  {
    quote: "I am Inevitable.",
    author: "Thanos",
    movie: "Avengers: Endgame",
  },
  {
    quote: "He may have been your father, boy, but he wasn't your daddy.",
    author: "Yondu",
    movie: "Guardians of the Galaxy Vol. 2",
  },
  {
    quote: "I love you 3000.",
    author: "Morgan Stark",
    movie: "Avengers: Endgame",
  },
  {
    quote:
      "Everyone fails at who they are supposed to be, Thor. The measure of a person, of a hero…is how well they succeed at being who they are.",
    author: "Frigga",
    movie: "Thor: The Dark World",
  },
  {
    quote:
      "But a thing isn't beautiful because it lasts. It's a privilege to be among them.",
    author: "Vision",
    movie: "Avengers: Age of Ultron",
  },
  {
    quote: "On your left.",
    author: "Steve Rogers",
    movie: "Captain America: The Winter Soldier",
  },
  {
    quote: "We are groot.",
    author: "Groot",
    movie: "Guardians of the Galaxy",
  },
  {
    quote: "I can't control your fear, I can only control mine.",
    author: "Wanda",
    movie: "WandaVision",
  },
  {
    quote: "I can do this all day.",
    author: "Captain America",
    movie: "Captain America: The First Avenger",
  },
  {
    quote: "No man can win every battle, but no man should fall without a struggle.",
    author: "Peter Parker",
    movie: "Spider-Man: Homecoming",
  },
  {
    quote: "What did it cost? Everything.",
    author: "Gamora/Thanos",
    movie: "Avengers: Infinity War",
  },
  {
    quote: "I'm Mary Poppins y'all!",
    author: "Yondu",
    movie: "Guardians of the Galaxy Vol. 2",
  },
  {
    quote: "That's my secret, Captain. I'm always angry.",
    author: "Bruce Banner",
    movie: "The Avengers",
  },
  {
    quote: "We have a hulk.",
    author: "Tony Stark",
    movie: "The Avengers",
  },
  {
    quote: "Don't waste it. Don't waste your life.",
    author: "Ho Yinsen",
    movie: "Iron Man",
  },
  {
    quote: "He's a friend from work!",
    author: "Thor",
    movie: "Thor: Ragnarok",
  },
  {
    quote:
      "Vengeance has consumed you. It's consuming them. I'm done letting it consume me.",
    author: "T'Challa",
    movie: "Black Panther",
  },
  {
    quote:
      "Is this your king? Huh? Is this your king? He's supposed to protect you! To lead Wakanda into the future! Nah, I'm your king!",
    author: "Killmonger",
    movie: "Black Panther",
  },
  {
    quote: "I'm gonna have to rain check that dance.",
    author: "Steve Rogers",
    movie: "Captain America: The First Avenger",
  },
  {
    quote: "Mr. Stark, I Don't Feel So Good.",
    author: "Peter Parker",
    movie: "Avengers: Infinity War",
  },
  {
    quote: "I Am Groot.",
    author: "Groot",
    movie: "Guardians of the Galaxy",
  },
  {
    quote: "You shouldn't have killed my mom and squished my Walkman.",
    author: "Peter Quill",
    movie: "Guardians of the Galaxy Vol. 2",
  },
  {
    quote: "I had him on the ropes.",
    author: "Steve Rogers/Bucky Barnes",
    movie: "Captain America: The Winter Soldier",
  },
  {
    quote: "In times of crisis, the wise build bridges while the foolish build barriers.",
    author: "T'Challa",
    movie: "Black Panther",
  },
  {
    quote:
      "You think life takes more than it gives, but not today. Today it's giving us something. It is giving us a chance.",
    author: "Star-Lord",
    movie: "Guardians of the Galaxy Vol. 2",
  },
  {
    quote: "It's alright, you could never hurt me. I just feel you.",
    author: "Vision",
    movie: "Avengers: Infinity War",
  },
  {
    quote: "Well let me know if real power wants a magazine or something.",
    author: "Nick Fury",
    movie: "Captain Marvel",
  },
  {
    quote: "I can feel the righteousness surging!",
    author: "Loki",
    movie: "The Avengers",
  },
  {
    quote: "We're in the endgame now.",
    author: "Dr. Stephen Strange",
    movie: "Avengers: Endgame",
  },
  {
    quote: "Let me go. It's okay.",
    author: "Black Widow",
    movie: "Avengers: Endgame",
  },
  {
    quote: "I have nothing to prove to you.",
    author: "Carol Danvers",
    movie: "Captain Marvel",
  },
  {
    quote:
      "I do anything and everything that Mr. Stark requires—including occasionally taking out the trash.",
    author: "Pepper Potts",
    movie: "Iron Man 3",
  },
  {
    quote: "Genius. Billionaire. Playboy. Philanthropist.",
    author: "Tony Stark",
    movie: "The Avengers",
  },
  {
    quote:
      "When you said you would take me to California for the first time, I thought you meant Coachella or Disneyland.",
    author: "Shuri",
    movie: "Black Panther",
  },
  {
    quote: "I'll get you all the cheeseburgers you want.",
    author: "Happy Hogan",
    movie: "Spider-Man: Far From Home",
  },
  {
    quote:
      "I'm made of rocks, as you can see. But don't let that intimidate you. You don't need to be afraid unless you're made of scissors. Just a little rock-paper-scissor joke for you.",
    author: "Korg",
    movie: "Thor: Ragnarok",
  },
  {
    quote: "I think you look great, Cap. As far as I'm concerned, that's America's ass.",
    author: "Ant-Man",
    movie: "Avengers: Endgame",
  },
  {
    quote: "If you're nothing without this suit, then you shouldn't have it.",
    author: "Tony Stark",
    movie: "Spider-Man: Homecoming",
  },
  {
    quote: "I'll explain when you're older, Hawkeye.",
    author: "Laura Barton",
    movie: "Avengers: Endgame",
  },
  {
    quote:
      "What is this thing? Look how it thinks it's so cool. It's not cool to get help. Walk by yourself you little gargoyle.",
    author: "Rocket",
    movie: "Avengers: Infinity War",
  },
  {
    quote: "You're The Spiderling. Crime-Fighting Spider. You're Spider-Boy?",
    author: "Tony Stark",
    movie: "Spider-Man: Homecoming",
  },
  {
    quote:
      "It's an honor to meet you, officially. I sort of met you, I mean, I watched you while you were sleeping.",
    author: "Phil Coulson",
    movie: "The Avengers",
  },
  {
    quote: "I thought you were smaller.",
    author: "Bucky Barnes",
    movie: "Captain America: Civil War",
  },
  {
    quote:
      "Can't have a revolution without somebody to overthrow, so you're welcome, and uh, it's a tie.",
    author: "Grandmaster",
    movie: "Thor: Ragnarok",
  },
  {
    quote: "His name is Redwing. He's cute. Go ahead, pet him.",
    author: "Sam Wilson",
    movie: "Captain America: Civil War",
  },
  {
    quote: "Boom! You looking for this?",
    author: "James Rhodes",
    movie: "Avengers: Age of Ultron",
  },
  {
    quote: "This is the fight of our lives, and we're going to win. Whatever it takes.",
    author: "Steve Rogers",
    movie: "Avengers: Endgame",
  },
  {
    quote: "You get hurt, hurt 'em back. You get killed, walk it off.",
    author: "Steve Rogers",
    movie: "The Avengers",
  },
  {
    quote: "Is he, though?",
    author: "Thor",
    movie: "Avengers: Age of Ultron",
  },
  {
    quote: "I thought that you could sense that with your Peter Tingle",
    author: "Aunt May",
    movie: "Spider-Man: Far From Home",
  },
  {
    quote:
      "Boh' is my new superpower. It's like the anti-Aloha. I was born to say this word.",
    author: "M.J.",
    movie: "Spider-Man: Far From Home",
  },
  {
    quote: "You're repeating yourself! You're repeating yourself!",
    author: "Scott Lang",
    movie: "Ant-Man and The Wasp",
  },
  {
    quote:
      "The price of freedom is high, it always has been. And it's a price I'm willing to pay. And if I'm the only one, then so be it. But I'm willing to bet I'm not.",
    author: "Steve Rogers",
    movie: "Captain America: The Winter Soldier",
  },
  {
    quote:
      "I was already slipping when you happened to punch me in the face. The two events are not related.",
    author: "Carol Danvers",
    movie: "Captain Marvel",
  },
  {
    quote: "Then again that's the hero gig, part of the journey is the end.",
    author: "Tony Stark",
    movie: "Avengers: Endgame",
  },
  {
    quote:
      "Whatever happens tomorrow you must promise me one thing, that you will stay who you are. Not a perfect soldier but a good man.",
    author: "Dr. Abraham Erskine",
    movie: "Captain America: The First Avenger",
  },
  {
    quote: "The hardest choices require the strongest wills.",
    author: "Thanos",
    movie: "Avengers: Infinity War",
  },
  {
    quote:
      "Let me tell you. That kid's not even here yet and, there's nothing I wouldn't do for him.",
    author: "Howard Stark",
    movie: "Avengers: Endgame",
  },
  {
    quote:
      "Don't do anything I would do, and don't do anything I wouldn't do. There's a little gray area in there. That's where you operate.",
    author: "Tony Stark",
    movie: "Spider-Man: Homecoming",
  },
  {
    quote:
      "This is your chance. To earn that look inyour daughter's eyes. To become the hero that she already thinks you are. It's not about saving our world, it's about saving theirs.",
    author: "Hank Pym",
    movie: "Ant-Man and The Wasp",
  },
  {
    quote:
      "You call me ‘young lady' again, I'll shove my foot up somewhere it's not supposed to be.",
    author: "Maria Rambeau",
    movie: "Captain Marvel",
  },
  {
    quote: "I'm not sure you understand the concept of a getaway car.",
    author: "Sharon Carter",
    movie: "Captain America: Civil War",
  },
  {
    quote:
      "I think we must learn from our mistakes and do better. You must not give up hope.",
    author: "Karun",
    movie: "Eternals",
  },
  {
    quote: "I beat some guys up. Saved the dog. Some light B and E",
    author: "Kate Bishop",
    movie: "Hawkeye",
  },
  {
    quote:
      "Welcome to the Time Variance Authority! I'm Miss Minutes, and it's my job to catch you up before you stand trial for your crimes! So let's not waste another minute. Settle in, sharpen your pencils and check this out!",
    author: "Miss Minutes",
    movie: "Loki",
  },
  {
    quote: "Sorry, I tend to process traumatic events with dad jokes.",
    author: "Scott Lang/Ant-Man",
    movie: "Avengers: Endgame",
  },
  {
    quote:
      "We got the full clown car. It means whatever the threat is, S.W.O.R.D clearly has no idea what they are dealing with.",
    author: "Darcy Lewis",
    movie: "WandaVision",
  },
  {
    quote: "Sacrifice? That would imply I had something to lose.",
    author: "Doctor Strange",
    movie: "Avengers: Infinity War",
  },
  {
    quote: "I can't believe you were D.B. cooper! Come on!",
    author: "Mobius",
    movie: "Loki",
  },
  {
    quote: "She was literally one split end from cutting her own bangs.",
    author: "Agnes/Agatha Harkness",
    movie: "WandaVision",
  },
  {
    quote: "I made macaroni if you want some.",
    author: "Yelena Belova",
    movie: "Black Widow",
  },
  {
    quote:
      "You, Vision, are the piece of the mind stone that lives in me, you are a body of wires, and blood, and bone that I created. You are my sadness and my hope. But mostly, you're my love.",
    author: "Wanda Maximoff",
    movie: "Avengers: Infinity War",
  },
  {
    quote: "Such a poser.",
    author: "Yelena Belova",
    movie: "Black Widow",
  },
  {
    quote:
      "This is wild. The two of you, same person. I mean it's a little unnatural. But, wow! Wild.",
    author: "He Who Remains",
    movie: "Loki",
  },
  {
    quote:
      "My mom, dad, Uncle Ben, Mr. Stark. Now Happy. I've… I've Lost A Lot. But my Aunt May says, used to say, that if we don't keep smiling when they can't, then we might as well be gone too.",
    author: "Peter Parker/Zombie Hunter Spider-Man",
    movie: "What If...?",
  },
  {
    quote: "I don't like bullies. I don't care where they're from.",
    author: "Steve Rogers",
    movie: "Captain America: The First Avenger",
  },
]);

Data.set("starwars", [
  {
    quote: "May the Force be with you.",
    author: "Obi-Wan Kenobi",
    movie: "Star Wars",
  },
  {
    quote: "I am your father.",
    author: "Darth Vader",
    movie: "Star Wars",
  },
  {
    quote: "Do or do not. There is no try.",
    author: "Yoda",
    movie: "Star Wars",
  },
  {
    quote: "The Force will be with you, always.",
    author: "Obi-Wan Kenobi",
    movie: "Star Wars",
  },
  {
    quote: "I find your lack of faith disturbing.",
    author: "Darth Vader",
    movie: "Star Wars",
  },
  {
    quote: "I've got a bad feeling about this.",
    author: "Various author:",
    movie: "Star Wars",
  },
  {
    quote: "Help me, Obi-Wan Kenobi. You're my only hope.",
    author: "Princess Leia",
    movie: "Star Wars",
  },
  {
    quote: "It's a trap!",
    author: "Admiral Ackbar",
    movie: "Star Wars",
  },
  {
    quote: "I love you.",
    author: "Princess Leia",
    movie: "Star Wars",
  },
  {
    quote: "I know.",
    author: "Han Solo",
    movie: "Star Wars",
  },
  {
    quote: "I am a Jedi, like my father before me.",
    author: "Luke Skywalker",
    movie: "Star Wars",
  },
  {
    quote: "The Force is strong with this one.",
    author: "Darth Vader",
    movie: "Star Wars",
  },
  {
    quote: "It's not my fault.",
    author: "Han Solo",
    movie: "Star Wars",
  },
  {
    quote: "Fear is the path to the dark side.",
    author: "Yoda",
    movie: "Star Wars",
  },
  {
    quote: "I'm one with the Force. The Force is with me.",
    author: "Chirrut",
    movie: "Star Wars",
  },
  {
    quote: "This is the way.",
    author: "Various author:",
    movie: "Star Wars",
  },
  {
    quote: "You were the chosen one!",
    author: "Obi-Wan Kenobi",
    movie: "Star Wars",
  },
  {
    quote: "A long time ago in a galaxy far, far away...",
    author: "Narrator",
    movie: "Star Wars",
  },
  {
    quote: "I find your lack of faith disturbing.",
    author: "Darth Vader",
    movie: "Star Wars",
  },
  {
    quote: "I've got a bad feeling about this.",
    author: "Various author:",
    movie: "Star Wars",
  },
  {
    quote: "It's a trap!",
    author: "Admiral Ackbar",
    movie: "Star Wars",
  },
  {
    quote: "I love you.",
    author: "Princess Leia",
    movie: "Star Wars",
  },
  {
    quote: "I know.",
    author: "Han Solo",
    movie: "Star Wars",
  },
  {
    quote: "I am a Jedi, like my father before me.",
    author: "Luke Skywalker",
    movie: "Star Wars",
  },
  {
    quote: "The Force is strong with this one.",
    author: "Darth Vader",
    movie: "Star Wars",
  },
  {
    quote: "It's not my fault.",
    author: "Han Solo",
    movie: "Star Wars",
  },
  {
    quote: "Fear is the path to the dark side.",
    author: "Yoda",
    movie: "Star Wars",
  },
  {
    quote: "I'm one with the Force. The Force is with me.",
    author: "Chirrut",
    movie: "Star Wars",
  },
  {
    quote: "This is the way.",
    author: "Various author:",
    movie: "Star Wars",
  },
  {
    quote: "You were the chosen one!",
    author: "Obi-Wan Kenobi",
    movie: "Star Wars",
  },
  {
    quote: "A long time ago in a galaxy far, far away...",
    author: "Narrator",
    movie: "Star Wars",
  },
  {
    quote: "I find your lack of faith disturbing.",
    author: "Darth Vader",
    movie: "Star Wars",
  },
  {
    quote: "I've got a bad feeling about this.",
    author: "Various author:",
    movie: "Star Wars",
  },
  {
    quote: "It's a trap!",
    author: "Admiral Ackbar",
    movie: "Star Wars",
  },
  {
    quote: "I love you.",
    author: "Princess Leia",
    movie: "Star Wars",
  },
  {
    quote: "I know.",
    author: "Han Solo",
    movie: "Star Wars",
  },
  {
    quote: "I am a Jedi, like my father before me.",
    author: "Luke Skywalker",
    movie: "Star Wars",
  },
  {
    quote: "The Force is strong with this one.",
    author: "Darth Vader",
    movie: "Star Wars",
  },
  {
    quote: "It's not my fault.",
    author: "Han Solo",
    movie: "Star Wars",
  },
  {
    quote: "Fear is the path to the dark side.",
    author: "Yoda",
    movie: "Star Wars",
  },
  {
    quote: "I'm one with the Force. The Force is with me.",
    author: "Chirrut",
    movie: "Star Wars",
  },
  {
    quote: "This is the way.",
    author: "Various author:",
    movie: "Star Wars",
  },
  {
    quote: "You were the chosen one!",
    author: "Obi-Wan Kenobi",
    movie: "Star Wars",
  },
  {
    quote: "A long time ago in a galaxy far, far away...",
    author: "Narrator",
    movie: "Star Wars",
  },
]);

export default Data;
