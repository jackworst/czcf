var challenges = {
1: {difficulty: 2, categories: ["sz-easy", "approach"], description: "Ask 3 different strangers a question."},
2: {difficulty: 5, categories: ["sz-easy", "approach", "body"], description: "Ask a stranger for the direction and start to imitate their body language"},
3: {difficulty: 8, categories: ["sz-easy", "approach"], description: "Ask a stranger how much money they earn per year"},
4: {difficulty: 7, categories: ["sz-easy", "approach", "rejection"], description: "Ask a stranger to borrow 100 bucks for one week"},
5: {difficulty: 8, categories: ["sz-easy", "approach", "rejection"], description: "Ask a stranger to give you a random compliment"},
6: {difficulty: 5, categories: ["sz-easy", "shame"], description: "Call or go to the movie theater and ask for a movie recommendation for a date"},
7: {difficulty: 6, categories: ["sz-easy", "approach", "conversation"], description: "Change your name to Simon and speak in third person."},
8: {difficulty: 7, categories: ["sz-easy", "approach", "rejection", "sympathy"], description: "Compliment 3 different strangers"},
9: {difficulty: 3, categories: ["sz-easy", "attention", "shame"], description: "Do push-ups in a crowded place"},
10: {difficulty: 4, categories: ["sz-easy", "attention", "shame"], description: "Do some Pull-ups at a bus stop"},
11: {difficulty: 6, categories: ["sz-easy", "attention", "shame"], description: "Follow a pigeon and scream \"Don't leave me alone pleeeease!\" until it flies away"},
12: {difficulty: 8, categories: ["sz-easy", "approach"], description: "Give a stranger your phone and tell him that it's for him"},
13: {difficulty: 8, categories: ["sz-easy", "approach", "rejection"], description: "Give away 1-5 bucks to a stranger"},
14: {difficulty: 7, categories: ["sz-easy", "approach", "rejection", "sympathy"], description: "High-Five a stranger person"},
15: {difficulty: 5, categories: ["sz-easy", "attention", "shame"], description: "Let your friend record you while you are outside making a weather forecast"},
16: {difficulty: 3, categories: ["sz-easy", "eyes"], description: "Look three people into their eyes until they look away"},
17: {difficulty: 5, categories: ["sz-easy", "approach", "rejection"], description: "Make a present to someone (origami, rose, napkin...)."},
18: {difficulty: 2, categories: ["sz-easy", "eyes"], description: "Make eye contact with with strangers and smile"},
19: {difficulty: 5, categories: ["sz-easy", "shame", "rejection"], description: "Order a pizza in McDonald's or Burger King"},
20: {difficulty: 5, categories: ["sz-easy", "attention", "body"], description: "Pretend to be James Bond and hide behind walls, roll on the floor, pretend you have a gun, etc in a crowded place"},
21: {difficulty: 6, categories: ["sz-easy", "attention", "shame"], description: "Scream into a trash can \"Mommy come out, you have to cook something, I'm hungry!\""},
22: {difficulty: 4, categories: ["sz-easy", "attention", "shame"], description: "Stand in front of the timetable in a train station and read out loudly the departure times and destinations"},
23: {difficulty: 8, categories: ["sz-easy", "approach", "shame"], description: "Tell someone a total pointless story"},
24: {difficulty: 9, categories: ["sz-easy", "shame", "rejection"], description: "Try to buy something that is not for selling. Persist on it and if you don't get it cry like a baby (mannequin, display)."}, 
25: {difficulty: 9, categories: ["sz-easy", "attention", "shame"], description: "Try to sell drugs to someone"},
26: {difficulty: 7, categories: ["sz-easy", "attention", "shame"], description: "Use a crowded escalator in the wrong way"},
27: {difficulty: 8, categories: ["sz-medium", "approach", "rejection"], description: "Ask somebody to borrow their coat"},
28: {difficulty: 7, categories: ["sz-medium", "approach", "rejection", "shame"], description: "Ask someone if he twists himself 360 degree"},
29: {difficulty: 9, categories: ["sz-medium", "approach", "rejection"], description: "Get 10 times rejected from different strangers in 5 minutes"},
30: {difficulty: 9, categories: ["sz-medium", "approach", "shame", "rejection"], description: "Act gay and ask a guy for a date (girls go for girls)."},
31: {difficulty: 6, categories: ["sz-medium", "attention", "shame", "body"], description: "Act like a ballet dancer in a crowded place for 30 second and make a impromptu show"},
32: {difficulty: 6, categories: ["sz-medium", "approach", "sympathy", "rejection"], description: "Ask a bicycle driver to borrow their bike"},
33: {difficulty: 8, categories: ["sz-medium", "approach", "sympathy", "rejection"], description: "Ask a stranger to borrow her/his dog"},
34: {difficulty: 6, categories: ["sz-medium", "approach", "sympathy", "rejection"], description: "Ask people in the supermarket checkout line if you can skip ahead of them"},
35: {difficulty: 8, categories: ["sz-medium", "approach", "shame"], description: "Ask someone \"excuse me\" and freeze until he or she leaves"},
36: {difficulty: 8, categories: ["sz-medium", "approach", "sympathy", "rejection"], description: "Ask someone to tie your shoes"},
37: {difficulty: 7, categories: ["sz-medium", "approach", "sympathy", "rejection", "shame"], description: "Beg for money"},
38: {difficulty: 3, categories: ["sz-medium", "approach", "sympathy", "rejection"], description: "Change money with somebody (Different coins or bills)"},
39: {difficulty: 8, categories: ["sz-medium", "approach", "shame"], description: "Compliment one person of a couple"},
40: {difficulty: 8, categories: ["sz-medium", "approach", "shame"], description: "Confess a stranger one of your awkward secrets"},
41: {difficulty: 6, categories: ["sz-medium", "attention", "shame", "body"], description: "Dance of the music of a street musician or just without any music"},
42: {difficulty: 9, categories: ["sz-medium", "attention", "approach", "shame"], description: "Get into a crowded elevator and say \"I bet you're all wondering why I gathered you here today…\". Then give them Task to complete until tomorrow."},
43: {difficulty: 6, categories: ["sz-medium", "approach", "sympathy", "body"], description: "Give a free hug to a stranger"},
44: {difficulty: 9, categories: ["sz-medium", "approach", "shame"], description: "Go in the mall and ask a girl with two different thongs in your hand and ask, which one is better for yourself"},
45: {difficulty: 7, categories: ["sz-medium", "sympathy", "rejection"], description: "Go to a grocery store, hot dog stand or restaurant and ask if you can have something for free"},
46: {difficulty: 7, categories: ["sz-medium", "approach", "voice", "shame"], description: "Go to a stranger and sing a refrain of a song"},
47: {difficulty: 7, categories: ["sz-medium", "approach", "attention", "body", "shame"], description: "Ask two strangers to carry you in a horizontal position by holding your arms and legs."},
48: {difficulty: 7, categories: ["sz-medium", "approach", "body", "shame"], description: "Handshake a stranger and don't let the hand go until they pull away"},
49: {difficulty: 6, categories: ["sz-medium", "attention", "shame", "voice"], description: "Howl like a wolf in a crowded place"},
50: {difficulty: 8, categories: ["sz-medium", "approach", "shame"], description: "In a cloth-store, act as you are the clerk and give advice to a customer"},
51: {difficulty: 8, categories: ["sz-medium", "approach", "shame"], description: "In a restaurant ask if a chair is free, take a seat and ask \"so where were we?\""}, 
52: {difficulty: 8, categories: ["sz-medium", "approach", "shame", "rejection"], description: "Introduce a stranger to another stranger"},
53: {difficulty: 7, categories: ["sz-medium", "approach", "rejection"], description: "Introduce yourself to 2 different strangers (only counts when hands are shaken)."},
54: {difficulty: 9, categories: ["sz-medium", "approach", "conversation"], description: "Join a random conversation and act as you are the part of this group all the time"},
55: {difficulty: 8, categories: ["sz-medium", "approach", "attention", "body"], description: "Persuade a stranger to make a short workout with you (Push-ups, squats)."},
56: {difficulty: 7, categories: ["sz-medium", "attention", "body", "voice"], description: "Pretend to be a cat and make miau sounds while walking close around people on all fours"},
57: {difficulty: 6, categories: ["sz-medium", "attention", "body", "voice"], description: "Pretend to be an airplane: Flight with open arms and funny airplane sound through the crowd"},
58: {difficulty: 7, categories: ["sz-medium", "attention", "shame"], description: "Run into a store, ask what year it is. When someone answers, yell \"it worked!\" and run out cheering"},
59: {difficulty: 8, categories: ["sz-medium", "approach", "voice", "shame"], description: "Run up to a stranger and sing happy birthday to him/her"},
60: {difficulty: 7, categories: ["sz-medium", "approach", "shame", "rejection"], description: "Show a stranger person your identity card and say:\"Hahaha oh shit I look so stupid on this Picture, Show me yours!\""}, 
61: {difficulty: 7, categories: ["sz-medium", "attention", "shame"], description: "Stand in front of a store, act like security and greet at least 3 strangers"},
62: {difficulty: 7, categories: ["sz-medium", "attention", "voice"], description: "Start to sing loud in a public place"},
63: {difficulty: 7, categories: ["sz-medium", "attention", "body", "voice"], description: "Stretch your arms as high as you can and scream for 15 seconds"},
64: {difficulty: 7, categories: ["sz-medium", "approach", "shame", "voice"], description: "Talk to a stranger in a not understandable language (like budedibabedi dilablala)"},
65: {difficulty: 9, categories: ["sz-medium", "approach", "shame"], description: "Tell a Person how great you are and tell incredible stories about your life, like a real poser"},
66: {difficulty: 8, categories: ["sz-medium", "approach", "body", "shame"], description: "Tell a short story to a stranger with using your body language as much as possible"},
67: {difficulty: 10, categories: ["sz-medium", "approach", "shame", "body", "rejection"], description: "Go to a girl with High Heels and say \"I like your shoes, can I caress them?\" Go down and caress them\"butzbutzbutz\"."},
68: {difficulty: 8, categories: ["sz-medium", "approach", "shame"], description: "Tell a story (min 20 seconds) to a group of at least 3 people"},
69: {difficulty: 8, categories: ["sz-medium", "rejection", "shame"], description: "Try to buy something with play money from a board game, self drawn money or Reka Check and cry if they reject you"},
70: {difficulty: 8, categories: ["sz-medium", "approach", "shame"], description: "Walk to a stranger and tell a not-funny joke"},
71: {difficulty: 7, categories: ["sz-hard", "approach", "body", "rejection", "shame"], description: "Ask a stranger to carry him in a horizontal position in your arms for a few meters"},
72: {difficulty: 6, categories: ["sz-hard", "approach", "body", "rejection", "shame"], description: "Ask someone if you can help carry his bag for a few meters"},
73: {difficulty: 8, categories: ["sz-hard", "approach", "shame", "rejection", "body", "sympathy"], description: "Dance with someone of the opposite sex"},
74: {difficulty: 9, categories: ["sz-hard", "approach", "rejection", "sympathy"], description: "Get a phone number of a stranger you like"},
75: {difficulty: 7, categories: ["sz-hard", "approach", "conversation", "rejection"], description: "Go to a stranger and talk with him/her for at least 3 minutes"},
76: {difficulty: 9, categories: ["sz-hard", "approach", "sympathy", "shame"], description: "Hitchhike for a few meters"},
77: {difficulty: 10, categories: ["sz-hard", "approach", "sympathy", "rejection", "body"], description: "Hug a stranger for 20 seconds"},
78: {difficulty: 8, categories: ["sz-hard", "approach", "shame", "rejection", "body"], description: "Let a stranger be your backpack and carry him for at least 10m"},
79: {difficulty: 7, categories: ["sz-hard", "attention", "shame"], description: "Lie on the ground in a crowded place until you get approached"},
80: {difficulty: 9, categories: ["sz-hard", "approach", "rejection", "shame", "sympathy"], description: "Make a group-selfie with different persons whom don't know each other"},
81: {difficulty: 8, categories: ["sz-hard", "approach", "rejection", "shame", "sympathy"], description: "Make a selfie with a stranger"},
82: {difficulty: 9, categories: ["sz-hard", "approach", "rejection", "shame", "sympathy", "body"], description: "Make the romantic Titanic move with a stranger"},
83: {difficulty: 9, categories: ["sz-hard", "approach", "rejection", "shame", "sympathy", "body"], description: "Organize a group hug with 2 different strangers whom don't know each other"},
84: {difficulty: 9, categories: ["sz-hard", "approach", "rejection", "shame"], description: "Take over a group of tourists and lead them. Talk whatever you can think of"},
};