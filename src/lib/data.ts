export type DataSet = {
  quote: string;
  author: string;
};

export type Catagories =
  | "india"
  | "marvel"
  | "america"
  | "starwars"

const Data = new Map<Catagories, DataSet[]>();

Data.set("india", [
  {
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "You have to dream before your dreams can come true.",
    author: "A.P.J. Abdul Kalam",
  },
  {
    quote: "In a gentle way, you can shake the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "We are what our thoughts have made us; so take care about what you think.",
    author: "Swami Vivekananda",
  },
  {
    quote:
      "My religion is based on truth and non-violence. Truth is my God. Non-violence is the means of realizing Him.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "All our dreams can come true if we have the courage to pursue them.",
    author: "Jawaharlal Nehru",
  },
  {
    quote: "Arise, awake, and stop not until the goal is reached.",
    author: "Swami Vivekananda",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Let us sacrifice our today so that our children can have a better tomorrow.",
    author: "A.P.J. Abdul Kalam",
  },
  {
    quote:
      "The power of youth is the common wealth for the entire world. The faces of young people are the faces of our past, our present, and our future.",
    author: "Swami Vivekananda",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    author: "A.P.J. Abdul Kalam",
  },
  {
    quote: "I have faith in my country, and especially in the youth of my country.",
    author: "Swami Vivekananda",
  },
  {
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Education is the most powerful weapon which you can use to change the world.",
    author: "B.R. Ambedkar",
  },
  {
    quote: "If you want to shine like a sun, first burn like a sun.",
    author: "A.P.J. Abdul Kalam",
  },
  {
    quote:
      "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "All the power is within you; you can do anything and everything.",
    author: "Swami Vivekananda",
  },
  {
    quote:
      "Freedom is not worth having if it does not include the freedom to make mistakes.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "If a country is to be corruption-free and become a nation of beautiful minds, I strongly feel there are three key societal members who can make a difference. They are the father, the mother, and the teacher.",
    author: "A.P.J. Abdul Kalam",
  },
  {
    quote:
      "The best brains of the nation may be found on the last benches of the classroom.",
    author: "A.P.J. Abdul Kalam",
  },
  {
    quote: "You cannot believe in God until you believe in yourself.",
    author: "Swami Vivekananda",
  },
  {
    quote: "The weak can never forgive. Forgiveness is an attribute of the strong.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "We must learn to live together as brothers or perish together as fools.",
    author: "B.R. Ambedkar",
  },
  {
    quote: "Do not wait for leaders; do it alone, person to person.",
    author: "Mother Teresa",
  },
  {
    quote: "We are all pencils in the hand of God.",
    author: "Mother Teresa",
  },
  {
    quote:
      "Climbing to the top demands strength, whether it is to the top of Mount Everest or to the top of your career.",
    author: "A.P.J. Abdul Kalam",
  },
  {
    quote: "You cannot shake hands with a clenched fist.",
    author: "Indira Gandhi",
  },
  {
    quote: "Man needs his difficulties because they are necessary to enjoy success.",
    author: "A.P.J. Abdul Kalam",
  },
  {
    quote:
      "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Faith is the bird that feels the light when the dawn is still dark.",
    author: "Rabindranath Tagore",
  },
  {
    quote:
      "I measure the progress of a community by the degree of progress which women have achieved.",
    author: "B.R. Ambedkar",
  },
  {
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    author: "Ratan Tata",
  },
  {
    quote: "One child, one teacher, one book, one pen can change the world.",
    author: "Malala Yousafzai",
  },
  {
    quote: "A nation's culture resides in the hearts and in the soul of its people.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    quote: "If you don't ask, you don't get.",
    author: "Indira Gandhi",
  },
  {
    quote: "Man needs his difficulties because they are necessary to enjoy success.",
    author: "A.P.J. Abdul Kalam",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett",
  },
]);

Data.set("america", [
  {
    quote: "Injustice anywhere is a threat to justice everywhere.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "We hold these truths to be self-evident: that all men are created equal.",
    author: "Thomas Jefferson",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "Ask not what your country can do for you; ask what you can do for your country.",
    author: "John F. Kennedy",
  },
  {
    quote:
      "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their author.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: "Jimmy Dean",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    author: "Barack Obama",
  },
  {
    quote:
      "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    author: "Mark Twain",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown Jr.",
  },
  {
    quote: "If opportunity doesn't knock, build a door.",
    author: "Milton Berle",
  },
  {
    quote: "The only way to have a friend is to be one.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "We become what we think about.",
    author: "Earl Nightingale",
  },
  {
    quote: "The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    quote: "The best way to predict your future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    quote: "The best way to predict your future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown",
  },
  {
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    author: "Barack Obama",
  },
  {
    quote:
      "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    author: "Mark Twain",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown Jr.",
  },
  {
    quote: "If opportunity doesn't knock, build a door.",
    author: "Milton Berle",
  },
  {
    quote: "The only way to have a friend is to be one.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "We become what we think about.",
    author: "Earl Nightingale",
  },
  {
    quote: "The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
  },
  {
    quote: "The best way to predict your future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    quote: "The best way to predict your future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown",
  },
]);

Data.set("marvel", [
  {
    quote: "I am Iron Man.",
    author: "Tony Stark",
  },
  {
    quote: "I can do this all day.",
    author: "Steve Rogers",
  },
  {
    quote: "I'm always angry.",
    author: "Bruce Banner",
  },
  {
    quote: "I am Groot.",
    author: "Groot",
  },
  {
    quote: "I'm just a kid from Brooklyn.",
    author: "Steve Rogers",
  },
  {
    quote: "I can do anything you can do, better.",
    author: "Loki",
  },
  {
    quote: "We are Groot.",
    author: "Groot",
  },
  {
    quote: "I am burdened with glorious purpose.",
    author: "Loki",
  },
  {
    quote: "We have a Hulk.",
    author: "Tony Stark",
  },
  {
    quote: "I am inevitable.",
    author: "Thanos",
  },
  {
    quote: "I'm Mary Poppins, y'all!",
    author: "Yondu",
  },
  {
    quote: "I'm just a sucker for pain.",
    author: "Tony Stark",
  },
  {
    quote: "Dread it. Run from it. Destiny arrives all the same.",
    author: "Thanos",
  },
  {
    quote: "You should've gone for the head.",
    author: "Thor",
  },
  {
    quote: "Wakanda forever!",
    author: "T'Challa",
  },
  {
    quote: "I am Steve Rogers.",
    author: "Steve Rogers",
  },
  {
    quote: "I can do this all day.",
    author: "Steve Rogers",
  },
  {
    quote: "I understood that reference.",
    author: "Steve Rogers",
  },
  {
    quote: "I am Groot.",
    author: "Groot",
  },
  {
    quote: "I'm Mary Poppins, y'all!",
    author: "Yondu",
  },
  {
    quote: "I'm just a sucker for pain.",
    author: "Tony Stark",
  },
  {
    quote: "I am burdened with glorious purpose.",
    author: "Loki",
  },
  {
    quote: "I am inevitable.",
    author: "Thanos",
  },
  {
    quote: "I am Iron Man.",
    author: "Tony Stark",
  },
  {
    quote: "We have a Hulk.",
    author: "Tony Stark",
  },
  {
    quote: "I am Steve Rogers.",
    author: "Steve Rogers",
  },
  {
    quote: "I'm always angry.",
    author: "Bruce Banner",
  },
  {
    quote: "I can do anything you can do, better.",
    author: "Loki",
  },
  {
    quote: "I can do this all day.",
    author: "Steve Rogers",
  },
  {
    quote: "I understood that reference.",
    author: "Steve Rogers",
  },
  {
    quote: "Wakanda forever!",
    author: "T'Challa",
  },
  {
    quote: "We are Groot.",
    author: "Groot",
  },
  {
    quote: "I'm just a kid from Brooklyn.",
    author: "Steve Rogers",
  },
  {
    quote: "Dread it. Run from it. Destiny arrives all the same.",
    author: "Thanos",
  },
  {
    quote: "You should've gone for the head.",
    author: "Thor",
  },
  {
    quote: "I'm Mary Poppins, y'all!",
    author: "Yondu",
  },
  {
    quote: "I'm just a sucker for pain.",
    author: "Tony Stark",
  },
  {
    quote: "I am burdened with glorious purpose.",
    author: "Loki",
  },
  {
    quote: "I am inevitable.",
    author: "Thanos",
  },
  {
    quote: "I am Iron Man.",
    author: "Tony Stark",
  },
  {
    quote: "We have a Hulk.",
    author: "Tony Stark",
  },
  {
    quote: "I am Groot.",
    author: "Groot",
  },
  {
    quote: "I'm always angry.",
    author: "Bruce Banner",
  },
  {
    quote: "I can do anything you can do, better.",
    author: "Loki",
  },
  {
    quote: "We are Groot.",
    author: "Groot",
  },
  {
    quote: "I am burdened with glorious purpose.",
    author: "Loki",
  },
  {
    quote: "We have a Hulk.",
    author: "Tony Stark",
  },
  {
    quote: "I am inevitable.",
    author: "Thanos",
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
