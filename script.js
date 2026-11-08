// ======================================
// 1. VOCABULARY BANK
// ======================================


const vocabulary = {

Food: [
    { fr: "pomme", en: "Apple", emoji: "🍎" },
    { fr: "riz", en: "Rice", emoji: "🍚" },
    { fr: "eau", en: "Water", emoji: "💧" },
    { fr: "pain", en: "Bread", emoji: "🍞" },
    { fr: "œuf", en: "Egg", emoji: "🥚" },
    { fr: "poisson", en: "Fish", emoji: "🐟" },
    { fr: "viande", en: "Meat", emoji: "🥩" },
    { fr: "légumes", en: "Vegetables", emoji: "🥦" },
    { fr: "fruits", en: "Fruit", emoji: "🍇" },
    { fr: "thé", en: "Tea", emoji: "🍵" },
    { fr: "lait", en: "Milk", emoji: "🥛" },
    { fr: "fromage", en: "Cheese", emoji: "🧀" },
    { fr: "poulet", en: "Chicken", emoji: "🍗" },
    { fr: "porc", en: "Pork", emoji: "🥓" },
    { fr: "bœuf", en: "Beef", emoji: "🥩" },
    { fr: "sel", en: "Salt", emoji: "🧂" },
    { fr: "sucre", en: "Sugar", emoji: "🍬" },
    { fr: "soupe", en: "Soup", emoji: "🍲" },
    { fr: "chocolat", en: "Chocolate", emoji: "🍫" },
    { fr: "jus", en: "Juice", emoji: "🧃" },
    { fr: "café", en: "Coffee", emoji: "☕" },
    { fr: "beurre", en: "Butter", emoji: "🧈" },
    { fr: "huile", en: "Oil", emoji: "🫒" },
    { fr: "farine", en: "Flour", emoji: "🌾" },
    { fr: "miel", en: "Honey", emoji: "🍯" },
    { fr: "confiture", en: "Jam", emoji: "🍓" },
    { fr: "yaourt", en: "Yogurt", emoji: "🥛" },
    { fr: "crème", en: "Cream", emoji: "🍨" },
    { fr: "glace", en: "Ice cream", emoji: "🍦" },
    { fr: "gâteau", en: "Cake", emoji: "🎂" },
    { fr: "tarte", en: "Pie / Tart", emoji: "🥧" },
    { fr: "biscuit", en: "Cookie / Biscuit", emoji: "🍪" },
    { fr: "bonbon", en: "Candy", emoji: "🍬" },
    { fr: "salade", en: "Salad", emoji: "🥗" },
    { fr: "soupe", en: "Soup", emoji: "🍲" },
    { fr: "sandwich", en: "Sandwich", emoji: "🥪" },
    { fr: "pizza", en: "Pizza", emoji: "🍕" },
    { fr: "hamburger", en: "Hamburger", emoji: "🍔" },
    { fr: "frites", en: "Fries", emoji: "🍟" },
    { fr: "pâtes", en: "Pasta", emoji: "🍝" },
    { fr: "riz", en: "Rice", emoji: "🍚" },
    { fr: "sushi", en: "Sushi", emoji: "🍣" },
    { fr: "taco", en: "Taco", emoji: "🌮" },
    { fr: "burrito", en: "Burrito", emoji: "🌯" },
    { fr: "soupe", en: "Soup", emoji: "🥣" },
    { fr: "pop-corn", en: "Popcorn", emoji: "🍿" },
    { fr: "bacon", en: "Bacon", emoji: "🥓" },
    { fr: "saucisse", en: "Sausage", emoji: "🌭" },
    { fr: "jambon", en: "Ham", emoji: "🍖" },
    { fr: "dinde", en: "Turkey", emoji: "🦃" },
    { fr: "canard", en: "Duck", emoji: "🦆" },
    { fr: "crevette", en: "Shrimp", emoji: "🍤" },
    { fr: "crabe", en: "Crab", emoji: "🦀" },
    { fr: "homard", en: "Lobster", emoji: "🦞" },
    { fr: "huître", en: "Oyster", emoji: "🦪" },
    { fr: "citron", en: "Lemon", emoji: "🍋" },
    { fr: "orange", en: "Orange", emoji: "🍊" },
    { fr: "banane", en: "Banana", emoji: "🍌" },
    { fr: "raisin", en: "Grapes", emoji: "🍇" },
    { fr: "fraise", en: "Strawberry", emoji: "🍓" },
    { fr: "cerise", en: "Cherry", emoji: "🍒" },
    { fr: "pêche", en: "Peach", emoji: "🍑" },
    { fr: "poire", en: "Pear", emoji: "🍐" },
    { fr: "ananas", en: "Pineapple", emoji: "🍍" },
    { fr: "melon", en: "Melon", emoji: "🍈" },
    { fr: "pastèque", en: "Watermelon", emoji: "🍉" },
    { fr: "kiwi", en: "Kiwi", emoji: "🥝" },
    { fr: "mangue", en: "Mango", emoji: "🥭" },
    { fr: "noix de coco", en: "Coconut", emoji: "🥥" },
    { fr: "avocat", en: "Avocado", emoji: "🥑" },
    { fr: "tomate", en: "Tomato", emoji: "🍅" },
    { fr: "carotte", en: "Carrot", emoji: "🥕" },
    { fr: "pomme de terre", en: "Potato", emoji: "🥔" },
    { fr: "oignon", en: "Onion", emoji: "🧅" },
    { fr: "ail", en: "Garlic", emoji: "🧄" },
    { fr: "brocoli", en: "Broccoli", emoji: "🥦" },
    { fr: "chou", en: "Cabbage", emoji: "🥬" },
    { fr: "concombre", en: "Cucumber", emoji: "🥒" },
    { fr: "champignon", en: "Mushroom", emoji: "🍄" },
    { fr: "maïs", en: "Corn", emoji: "🌽" },
    { fr: "poivron", en: "Bell pepper", emoji: "🫑" },
    { fr: "arachide", en: "Peanut", emoji: "🥜" },
    { fr: "noisette", en: "Hazelnut", emoji: "🌰" },
    { fr: "pain", en: "Roll", emoji: "🥖" },
    { fr: "croissant", en: "Croissant", emoji: "🥐" },
    { fr: "baguette", en: "Baguette", emoji: "🥖" },
    { fr: "brioche", en: "Brioche", emoji: "🍞" },
    { fr: "vinaigre", en: "Vinegar", emoji: "🍾" },
    { fr: "poivre", en: "Pepper", emoji: "🧂" },
    { fr: "moutarde", en: "Mustard", emoji: "🟡" },
    { fr: "ketchup", en: "Ketchup", emoji: "🍅" },
    { fr: "mayonnaise", en: "Mayonnaise", emoji: "🥚" },
    { fr: "sauce", en: "Sauce", emoji: "🥫" },
    { fr: "grillade", en: "Barbecue", emoji: "🍖" },
    { fr: "rôti", en: "Roast", emoji: "🥩" },
    { fr: "omelette", en: "Omelet", emoji: "🍳" },
    { fr: "pancake", en: "Pancake", emoji: "🥞" },
    { fr: "gaufre", en: "Waffle", emoji: "🧇" },
    { fr: "cidre", en: "Cider", emoji: "🍺" },
    { fr: "vin", en: "Wine", emoji: "🍷" }        
    ],
Numbers: [
    { fr: "un", en: "One", emoji: "1" },
    { fr: "deux", en: "Two", emoji: "2" },
    { fr: "trois", en: "Three", emoji: "3" },
    { fr: "quatre", en: "Four", emoji: "4" },
    { fr: "cinq", en: "Five", emoji: "5" },
    { fr: "six", en: "Six", emoji: "6" },
    { fr: "sept", en: "Seven", emoji: "7" },
    { fr: "huit", en: "Eight", emoji: "8" },
    { fr: "neuf", en: "Nine", emoji: "9" },
    { fr: "dix", en: "Ten", emoji: "10" },
    { fr: "onze", en: "Eleven", emoji: "11" },
    { fr: "douze", en: "Twelve", emoji: "12" },
    { fr: "treize", en: "Thirteen", emoji: "13" },
    { fr: "quatorze", en: "Fourteen", emoji: "14" },
    { fr: "quinze", en: "Fifteen", emoji: "15" },
    { fr: "seize", en: "Sixteen", emoji: "16" },
    { fr: "dix-sept", en: "Seventeen", emoji: "17" },
    { fr: "dix-huit", en: "Eighteen", emoji: "18" },
    { fr: "dix-neuf", en: "Nineteen", emoji: "19" },
    { fr: "vingt", en: "Twenty", emoji: "20" },
    { fr: "vingt et un", en: "Twenty-one", emoji: "21" },
    { fr: "vingt-deux", en: "Twenty-two", emoji: "22" },
    { fr: "vingt-trois", en: "Twenty-three", emoji: "23" },
    { fr: "vingt-quatre", en: "Twenty-four", emoji: "24" },
    { fr: "vingt-cinq", en: "Twenty-five", emoji: "25" },
    { fr: "vingt-six", en: "Twenty-six", emoji: "26" },
    { fr: "vingt-sept", en: "Twenty-seven", emoji: "27" },
    { fr: "vingt-huit", en: "Twenty-eight", emoji: "28" },
    { fr: "vingt-neuf", en: "Twenty-nine", emoji: "29" },
    { fr: "trente", en: "Thirty", emoji: "30" },
    { fr: "trente et un", en: "Thirty-one", emoji: "31" },
    { fr: "trente-deux", en: "Thirty-two", emoji: "32" },
    { fr: "trente-trois", en: "Thirty-three", emoji: "33" },
    { fr: "trente-quatre", en: "Thirty-four", emoji: "34" },
    { fr: "trente-cinq", en: "Thirty-five", emoji: "35" },
    { fr: "trente-six", en: "Thirty-six", emoji: "36" },
    { fr: "trente-sept", en: "Thirty-seven", emoji: "37" },
    { fr: "trente-huit", en: "Thirty-eight", emoji: "38" },
    { fr: "trente-neuf", en: "Thirty-nine", emoji: "39" },
    { fr: "quarante", en: "Forty", emoji: "40" },
    { fr: "quarante et un", en: "Forty-one", emoji: "41" },
    { fr: "quarante-deux", en: "Forty-two", emoji: "42" },
    { fr: "quarante-trois", en: "Forty-three", emoji: "43" },
    { fr: "quarante-quatre", en: "Forty-four", emoji: "44" },
    { fr: "quarante-cinq", en: "Forty-five", emoji: "45" },
    { fr: "quarante-six", en: "Forty-six", emoji: "46" },
    { fr: "quarante-sept", en: "Forty-seven", emoji: "47" },
    { fr: "quarante-huit", en: "Forty-eight", emoji: "48" },
    { fr: "quarante-neuf", en: "Forty-nine", emoji: "49" },
    { fr: "cinquante", en: "Fifty", emoji: "50" },
    { fr: "cinquante et un", en: "Fifty-one", emoji: "51" },
    { fr: "cinquante-deux", en: "Fifty-two", emoji: "52" },
    { fr: "cinquante-trois", en: "Fifty-three", emoji: "53" },
    { fr: "cinquante-quatre", en: "Fifty-four", emoji: "54" },
    { fr: "cinquante-cinq", en: "Fifty-five", emoji: "55" },
    { fr: "cinquante-six", en: "Fifty-six", emoji: "56" },
    { fr: "cinquante-sept", en: "Fifty-seven", emoji: "57" },
    { fr: "cinquante-huit", en: "Fifty-eight", emoji: "58" },
    { fr: "cinquante-neuf", en: "Fifty-nine", emoji: "59" },
    { fr: "soixante", en: "Sixty", emoji: "60" },
    { fr: "soixante et un", en: "Sixty-one", emoji: "61" },
    { fr: "soixante-deux", en: "Sixty-two", emoji: "62" },
    { fr: "soixante-trois", en: "Sixty-three", emoji: "63" },
    { fr: "soixante-quatre", en: "Sixty-four", emoji: "64" },
    { fr: "soixante-cinq", en: "Sixty-five", emoji: "65" },
    { fr: "soixante-six", en: "Sixty-six", emoji: "66" },
    { fr: "soixante-sept", en: "Sixty-seven", emoji: "67" },
    { fr: "soixante-huit", en: "Sixty-eight", emoji: "68" },
    { fr: "soixante-neuf", en: "Sixty-nine", emoji: "69" },
    { fr: "septante", en: "Seventy", emoji: "70" },
    { fr: "septante et un", en: "Seventy-one", emoji: "71" },
    { fr: "septante-deux", en: "Seventy-two", emoji: "72" },
    { fr: "septante-trois", en: "Seventy-three", emoji: "73" },
    { fr: "septante-quatre", en: "Seventy-four", emoji: "74" },
    { fr: "septante-cinq", en: "Seventy-five", emoji: "75" },
    { fr: "septante-six", en: "Seventy-six", emoji: "76" },
    { fr: "septante-sept", en: "Seventy-seven", emoji: "77" },
    { fr: "septante-huit", en: "Seventy-eight", emoji: "78" },
    { fr: "septante-neuf", en: "Seventy-nine", emoji: "79" },
    { fr: "huitante", en: "Eighty", emoji: "80" },
    { fr: "huitante et un", en: "Eighty-one", emoji: "81" },
    { fr: "huitante-deux", en: "Eighty-two", emoji: "82" },
    { fr: "huitante-trois", en: "Eighty-three", emoji: "83" },
    { fr: "huitante-quatre", en: "Eighty-four", emoji: "84" },
    { fr: "huitante-cinq", en: "Eighty-five", emoji: "85" },
    { fr: "huitante-six", en: "Eighty-six", emoji: "86" },
    { fr: "huitante-sept", en: "Eighty-seven", emoji: "87" },
    { fr: "huitante-huit", en: "Eighty-eight", emoji: "88" },
    { fr: "huitante-neuf", en: "Eighty-nine", emoji: "89" },
    { fr: "nonante", en: "Ninety", emoji: "90" },
    { fr: "nonante et un", en: "Ninety-one", emoji: "91" },
    { fr: "nonante-deux", en: "Ninety-two", emoji: "92" },
    { fr: "nonante-trois", en: "Ninety-three", emoji: "93" },
    { fr: "nonante-quatre", en: "Ninety-four", emoji: "94" },
    { fr: "nonante-cinq", en: "Ninety-five", emoji: "95" },
    { fr: "nonante-six", en: "Ninety-six", emoji: "96" },
    { fr: "nonante-sept", en: "Ninety-seven", emoji: "97" },
    { fr: "nonante-huit", en: "Ninety-eight", emoji: "98" },
    { fr: "nonante-neuf", en: "Ninety-nine", emoji: "99" },
    { fr: "cent", en: "One hundred", emoji: "100" }
],

Greetings: [
    { fr: "bonjour", en: "Hello", emoji: "👋" },
    { fr: "bonjour", en: "Good morning", emoji: "🌅" },
    { fr: "salut", en: "Hi / Bye", emoji: "🌞" },
    { fr: "bonsoir", en: "Good evening", emoji: "🌆" },
    { fr: "au revoir", en: "Goodbye", emoji: "👋" },
    { fr: "à plus", en: "See you", emoji: "🤝" },
    { fr: "à plus tard", en: "See you later", emoji: "👋" },
    { fr: "bonne nuit", en: "Good night", emoji: "🌙" },
    { fr: "dormez bien", en: "Good night (polite)", emoji: "😴" },
    { fr: "merci", en: "Thank you", emoji: "🙏" },
    { fr: "merci beaucoup", en: "Thank you (polite)", emoji: "💐" },
    { fr: "de rien", en: "You're welcome", emoji: "😊" },
    { fr: "pardon", en: "Excuse me", emoji: "🙋" },
    { fr: "désolé", en: "I'm sorry", emoji: "🙇" },
    { fr: "oui", en: "Yes", emoji: "👍" },
    { fr: "non", en: "No", emoji: "🙅" },
    { fr: "s'il vous plaît", en: "Please", emoji: "🙏" },
    { fr: "enchanté", en: "Nice to meet you", emoji: "🤝" },
    { fr: "bon appétit", en: "Said before eating", emoji: "🍽️" },
    { fr: "merci", en: "Thanks for the meal", emoji: "😋" },
    { fr: "comment ça va", en: "How are you", emoji: "❓" },
    { fr: "ça va bien", en: "I'm doing well", emoji: "👍" },
    { fr: "et toi", en: "And you", emoji: "👉" },
    { fr: "pas mal", en: "Not bad", emoji: "🙂" },
    { fr: "comme ci comme ça", en: "So-so", emoji: "🤷" },
    { fr: "à bientôt", en: "See you soon", emoji: "👋" },
    { fr: "à demain", en: "See you tomorrow", emoji: "📅" },
    { fr: "adieu", en: "Farewell", emoji: "🕊️" },
    { fr: "bonne journée", en: "Have a good day", emoji: "☀️" },
    { fr: "bonne soirée", en: "Have a good evening", emoji: "🌆" },
    { fr: "bienvenue", en: "Welcome", emoji: "🎉" },
    { fr: "félicitations", en: "Congratulations", emoji: "🥳" },
    { fr: "bonne chance", en: "Good luck", emoji: "🍀" },
    { fr: "santé", en: "Cheers", emoji: "🥂" },
    { fr: "s'il te plaît", en: "Please (informal)", emoji: "🙏" },
    { fr: "excusez-moi", en: "Excuse me (polite)", emoji: "🙋" },
    { fr: "je t'en prie", en: "You're welcome (informal)", emoji: "😊" },
    { fr: "avec plaisir", en: "With pleasure", emoji: "🌟" },
    { fr: "pas de problème", en: "No problem", emoji: "👌" },
    { fr: "de rien", en: "It's nothing", emoji: "😌" },
    { fr: "allo", en: "Hello (on phone)", emoji: "📞" },
    { fr: "oui, allô", en: "Yes, hello", emoji: "📱" },
    { fr: "ça marche", en: "That works / Okay", emoji: "👍" },
    { fr: "d'accord", en: "Agreed / Okay", emoji: "🤝" },
    { fr: "entendu", en: "Understood", emoji: "👂" },
    { fr: "absolument", en: "Absolutely", emoji: "💯" },
    { fr: "certainement", en: "Certainly", emoji: "✨" },
    { fr: "bien sûr", en: "Of course", emoji: "✅" },
    { fr: "peut-être", en: "Maybe", emoji: "🤔" },
    { fr: "vraiment", en: "Really", emoji: "🧐" },
    { fr: "s'il vous plaît", en: "If you please", emoji: "🤲" },
    { fr: "pardonnez-moi", en: "Forgive me", emoji: "🙇" },
    { fr: "je regrette", en: "I regret / I'm sorry", emoji: "😔" },
    { fr: "ce n'est rien", en: "It's nothing / No worries", emoji: "🌸" },
    { fr: "à tout de suite", en: "See you right away", emoji: "🏃" },
    { fr: "à tout à l'heure", en: "See you shortly", emoji: "⏱️" },
    { fr: "bonne route", en: "Have a safe trip", emoji: "🚗" },
    { fr: "bon voyage", en: "Have a good trip", emoji: "🧳" },
    { fr: "bon rétablissement", en: "Get well soon", emoji: "💐" },
    { fr: "joyeux anniversaire", en: "Happy birthday", emoji: "🎂" },
    { fr: "joyeux Noël", en: "Merry Christmas", emoji: "🎄" },
    { fr: "bonne année", en: "Happy New Year", emoji: "🎆" },
    { fr: "bonne fête", en: "Happy holiday / feast day", emoji: "🎉" },
    { fr: "salutations", en: "Greetings", emoji: "💌" },
    { fr: "coucou", en: "Hi there / Peekaboo", emoji: "👀" },
    { fr: "tiens", en: "Well look at that / Hey", emoji: "😲" },
    { fr: "dis donc", en: "Say / Wow", emoji: "🗣️" },
    { fr: "comment allez-vous", en: "How are you (formal)", emoji: "👔" },
    { fr: "je vais bien", en: "I am doing well", emoji: "😊" },
    { fr: "et vous", en: "And you (formal)", emoji: "👉" },
    { fr: "enchanté de faire votre connaissance", en: "Pleased to make your acquaintance", emoji: "🤝" },
    { fr: "comment t'appelles-tu", en: "What is your name", emoji: "📛" },
    { fr: "je m'appelle", en: "My name is", emoji: "🏷️" },
    { fr: "quel âge as-tu", en: "How old are you", emoji: "🎂" },
    { fr: "j'ai ans", en: "I am years old", emoji: "⏳" },
    { fr: "d'où viens-tu", en: "Where are you from", emoji: "🌍" },
    { fr: "je viens de", en: "I come from", emoji: "✈️" },
    { fr: "où habites-tu", en: "Where do you live", emoji: "🏠" },
    { fr: "j'habite à", en: "I live in", emoji: "📍" },
    { fr: "parles-tu français", en: "Do you speak French", emoji: "🇫🇷" },
    { fr: "je parle un peu français", en: "I speak a little French", emoji: "💬" },
    { fr: "je ne comprends pas", en: "I don't understand", emoji: "❓" },
    { fr: "pouvez-vous répéter", en: "Can you repeat", emoji: "🔁" },
    { fr: "plus lentement", en: "Slower please", emoji: "🐢" },
    { fr: "que signifie", en: "What does mean", emoji: "🔍" },
    { fr: "merci d'avance", en: "Thanks in advance", emoji: "📨" },
    { fr: "prends soin de toi", en: "Take care of yourself", emoji: "🤗" },
    { fr: "bonne continuation", en: "Best of luck with everything", emoji: "🛤️" },
    { fr: "mes respects", en: "My respects", emoji: "🎩" },
    { fr: "chapeau", en: "Hats off / Well done", emoji: "🧢" },
    { fr: "bravo", en: "Well done", emoji: "👏" },
    { fr: "magnifique", en: "Magnificent", emoji: "💎" },
    { fr: "superbe", en: "Superb", emoji: "🌟" },
    { fr: "formidable", en: "Terrific / Wonderful", emoji: "✨" },
    { fr: "génial", en: "Awesome", emoji: "🚀" },
    { fr: "parfait", en: "Perfect", emoji: "👌" },
    { fr: "excellent", en: "Excellent", emoji: "⭐" },
    { fr: "dommage", en: "What a pity", emoji: "🥀" },
    { fr: "helas", en: "Alas", emoji: "💨" },
    { fr: "c'est la vie", en: "That's life", emoji: "🌻" }
],

People: [
    { fr: "personne", en: "Person", emoji: "🧑" },
    { fr: "homme", en: "Man", emoji: "👨" },
    { fr: "femme", en: "Woman", emoji: "👩" },
    { fr: "enfant", en: "Child", emoji: "🧒" },
    { fr: "ami", en: "Friend", emoji: "🫂" },
    { fr: "famille", en: "Family", emoji: "👨‍👩‍👧" },
    { fr: "mère", en: "Mother", emoji: "👩" },
    { fr: "père", en: "Father", emoji: "👨" },
    { fr: "sœur", en: "Sister", emoji: "👧" },
    { fr: "frère", en: "Brother", emoji: "👦" },
    { fr: "sœur cadette", en: "Younger sister", emoji: "👧" },
    { fr: "frère cadet", en: "Younger brother", emoji: "👦" },
    { fr: "professeur", en: "Teacher", emoji: "🧑‍🏫" },
    { fr: "étudiant", en: "Student", emoji: "🎒" },
    { fr: "médecin", en: "Doctor", emoji: "🧑‍⚕️" },
    { fr: "infirmier", en: "Nurse", emoji: "👩‍⚕️" },
    { fr: "employé", en: "Office worker", emoji: "💼" },
    { fr: "vendeur", en: "Shop assistant", emoji: "🛍️" },
    { fr: "grand-père", en: "Grandfather", emoji: "👴" },
    { fr: "grand-mère", en: "Grandmother", emoji: "👵" },
    { fr: "bébé", en: "Baby", emoji: "👶" },
    { fr: "garçon", en: "Boy", emoji: "👦" },
    { fr: "fille", en: "Girl", emoji: "👧" },
    { fr: "adolescent", en: "Teenager", emoji: "🧑‍🎓" },
    { fr: "adulte", en: "Adult", emoji: "🧑" },
    { fr: "personne âgée", en: "Senior", emoji: "🧓" },
    { fr: "fils", en: "Son", emoji: "👦" },
    { fr: "fille", en: "Daughter", emoji: "👧" },
    { fr: "parents", en: "Parents", emoji: "🧑‍🧑‍🧒" },
    { fr: "grands-parents", en: "Grandparents", emoji: "👵👴" },
    { fr: "oncle", en: "Uncle", emoji: "🧔" },
    { fr: "tante", en: "Aunt", emoji: "👩" },
    { fr: "cousin", en: "Cousin (male)", emoji: "👦" },
    { fr: "cousine", en: "Cousin (female)", emoji: "👧" },
    { fr: "neveu", en: "Nephew", emoji: "👦" },
    { fr: "nièce", en: "Niece", emoji: "👧" },
    { fr: "petit-fils", en: "Grandson", emoji: "👦" },
    { fr: "petite-fille", en: "Granddaughter", emoji: "👧" },
    { fr: "mari", en: "Husband", emoji: "🤵" },
    { fr: "femme", en: "Wife", emoji: "👰" },
    { fr: "couple", en: "Couple", emoji: "👩‍❤️‍👨" },
    { fr: "voisin", en: "Neighbor", emoji: "🏡" },
    { fr: "collègue", en: "Colleague", emoji: "🧑‍💼" },
    { fr: "chef", en: "Boss / Chef", emoji: "🧑‍🍳" },
    { fr: "directeur", en: "Manager", emoji: "🕴️" },
    { fr: "client", en: "Customer", emoji: "🛒" },
    { fr: "policier", en: "Police officer", emoji: "👮" },
    { fr: "pompier", en: "Firefighter", emoji: "🧑‍🚒" },
    { fr: "avocat", en: "Lawyer", emoji: "⚖️" },
    { fr: "juge", en: "Judge", emoji: "🧑‍⚖️" },
    { fr: "dentiste", en: "Dentist", emoji: "🦷" },
    { fr: "pharmacien", en: "Pharmacist", emoji: "💊" },
    { fr: "vétérinaire", en: "Veterinarian", emoji: "🐾" },
    { fr: "ingénieur", en: "Engineer", emoji: "👷" },
    { fr: "architecte", en: "Architect", emoji: "📐" },
    { fr: "programmeur", en: "Developer", emoji: "💻" },
    { fr: "scientifique", en: "Scientist", emoji: "🧑‍🔬" },
    { fr: "journaliste", en: "Journalist", emoji: "🎙️" },
    { fr: "écrivain", en: "Writer", emoji: "✍️" },
    { fr: "artiste", en: "Artist", emoji: "🎨" },
    { fr: "peintre", en: "Painter", emoji: "🖌️" },
    { fr: "musicien", en: "Musician", emoji: "🎵" },
    { fr: "chanteur", en: "Singer", emoji: "🎤" },
    { fr: "acteur", en: "Actor", emoji: "🎭" },
    { fr: "danseur", en: "Dancer", emoji: "💃" },
    { fr: "photographe", en: "Photographer", emoji: "📷" },
    { fr: "athlète", en: "Athlete", emoji: "🏃" },
    { fr: "joueur", en: "Player", emoji: "⚽" },
    { fr: "entraîneur", en: "Coach", emoji: "📋" },
    { fr: "pilote", en: "Pilot", emoji: "🧑‍✈️" },
    { fr: "capitaine", en: "Captain", emoji: "👨‍✈️" },
    { fr: "conducteur", en: "Driver", emoji: "🚗" },
    { fr: "facteur", en: "Mail carrier", emoji: "📬" },
    { fr: "coiffeur", en: "Hairdresser", emoji: "💇" },
    { fr: "boulanger", en: "Baker", emoji: "🥖" },
    { fr: "boucher", en: "Butcher", emoji: "🥩" },
    { fr: "fermier", en: "Farmer", emoji: "🧑‍🌾" },
    { fr: "jardinier", en: "Gardener", emoji: "🏡" },
    { fr: "mécanicien", en: "Mechanic", emoji: "🔧" },
    { fr: "plombier", en: "Plumber", emoji: "🪠" },
    { fr: "électricien", en: "Electrician", emoji: "⚡" },
    { fr: "serveur", en: "Waiter", emoji: "🤵" },
    { fr: "serveuse", en: "Waitress", emoji: "👩‍🍳" },
    { fr: "guide", en: "Guide", emoji: "🗺️" },
    { fr: "touriste", en: "Tourist", emoji: "🧳" },
    { fr: "étranger", en: "Foreigner", emoji: "🌐" },
    { fr: "citoyen", en: "Citizen", emoji: "🏛️" },
    { fr: "roi", en: "King", emoji: "👑" },
    { fr: "reine", en: "Queen", emoji: "👸" },
    { fr: "prince", en: "Prince", emoji: "🕺" },
    { fr: "princesse", en: "Princess", emoji: "💃" },
    { fr: "président", en: "President", emoji: "🎙️" },
    { fr: "héros", en: "Hero", emoji: "🦸" },
    { fr: "champion", en: "Champion", emoji: "🏆" },
    { fr: "camarade", en: "Classmate", emoji: "🏫" },
    { fr: "connaissance", en: "Acquaintance", emoji: "👋" },
    { fr: "invité", en: "Guest", emoji: "🎟️" },
    { fr: "passager", en: "Passenger", emoji: "💺" },
    { fr: "membre", en: "Member", emoji: "🪪" },
    { fr: "public", en: "Audience", emoji: "👥" }
],

"Everyday Objects": [
    { fr: "livre", en: "Book", emoji: "📚" },
    { fr: "stylo", en: "Pen", emoji: "🖊️" },
    { fr: "bureau", en: "Desk", emoji: "🗄️" },
    { fr: "chaise", en: "Chair", emoji: "🪑" },
    { fr: "sac", en: "Bag", emoji: "🎒" },
    { fr: "téléphone", en: "Telephone", emoji: "📞" },
    { fr: "montre", en: "Clock / Watch", emoji: "⏰" },
    { fr: "chaussures", en: "Shoes", emoji: "👟" },
    { fr: "clé", en: "Key", emoji: "🔑" },
    { fr: "fenêtre", en: "Window", emoji: "🪟" },
    { fr: "porte", en: "Door", emoji: "🚪" },
    { fr: "voiture", en: "Car", emoji: "🚗" },
    { fr: "vélo", en: "Bicycle", emoji: "🚲" },
    { fr: "parapluie", en: "Umbrella", emoji: "☂️" },
    { fr: "portefeuille", en: "Wallet", emoji: "👛" },
    { fr: "lunettes", en: "Glasses", emoji: "👓" },
    { fr: "crayon", en: "Pencil", emoji: "✏️" },
    { fr: "gomme", en: "Eraser", emoji: "🧽" },
    { fr: "appareil photo", en: "Camera", emoji: "📷" },
    { fr: "télévision", en: "Television", emoji: "📺" },
    { fr: "ordinateur", en: "Computer", emoji: "💻" },
    { fr: "tablette", en: "Tablet", emoji: "📱" },
    { fr: "écouteurs", en: "Headphones", emoji: "🎧" },
    { fr: "radio", en: "Radio", emoji: "📻" },
    { fr: "lampe", en: "Lamp", emoji: "💡" },
    { fr: "table", en: "Table", emoji: "🪑" },
    { fr: "lit", en: "Bed", emoji: "🛏️" },
    { fr: "oreiller", en: "Pillow", emoji: "🛋️" },
    { fr: "couverture", en: "Blanket", emoji: "🧶" },
    { fr: "miroir", en: "Mirror", emoji: "🪞" },
    { fr: "tapis", en: "Carpet / Rug", emoji: "🪢" },
    { fr: "armoire", en: "Wardrobe", emoji: "🚪" },
    { fr: "canapé", en: "Sofa", emoji: "🛋️" },
    { fr: "horloge", en: "Clock", emoji: "🕰️" },
    { fr: "tableau", en: "Painting / Board", emoji: "🖼️" },
    { fr: "vase", en: "Vase", emoji: "🏺" },
    { fr: "bouteille", en: "Bottle", emoji: "🍾" },
    { fr: "verre", en: "Glass", emoji: "🥃" },
    { fr: "tasse", en: "Cup", emoji: "☕" },
    { fr: "assiette", en: "Plate", emoji: "🍽️" },
    { fr: "fourchette", en: "Fork", emoji: "🍴" },
    { fr: "couteau", en: "Knife", emoji: "🔪" },
    { fr: "cuillère", en: "Spoon", emoji: "🥄" },
    { fr: "poêle", en: "Frying pan", emoji: "🍳" },
    { fr: "casserole", en: "Pot", emoji: "🍲" },
    { fr: "serviette", en: "Towel / Napkin", emoji: "🧻" },
    { fr: "savon", en: "Soap", emoji: "🧼" },
    { fr: "brosse", en: "Brush", emoji: "🧹" },
    { fr: "peigne", en: "Comb", emoji: "🪮" },
    { fr: "dentifrice", en: "Toothpaste", emoji: "🪥" },
    { fr: "brosse à dents", en: "Toothbrush", emoji: "🪥" },
    { fr: "shampoing", en: "Shampoo", emoji: "🧴" },
    { fr: "ciseaux", en: "Scissors", emoji: "✂️" },
    { fr: "règle", en: "Ruler", emoji: "📏" },
    { fr: "cahier", en: "Notebook", emoji: "📓" },
    { fr: "papier", en: "Paper", emoji: "📄" },
    { fr: "enveloppe", en: "Envelope", emoji: "✉️" },
    { fr: "timbre", en: "Stamp", emoji: "📮" },
    { fr: "boîte", en: "Box", emoji: "📦" },
    { fr: "valise", en: "Suitcase", emoji: "🧳" },
    { fr: "chapeau", en: "Hat", emoji: "🎩" },
    { fr: "casquette", en: "Cap", emoji: "🧢" },
    { fr: "manteau", en: "Coat", emoji: "🧥" },
    { fr: "veste", en: "Jacket", emoji: "🥼" },
    { fr: "chemise", en: "Shirt", emoji: "👔" },
    { fr: "t-shirt", en: "T-shirt", emoji: "👕" },
    { fr: "pantalon", en: "Pants", emoji: "👖" },
    { fr: "robe", en: "Dress", emoji: "👗" },
    { fr: "jupe", en: "Skirt", emoji: "🥻" },
    { fr: "chaussettes", en: "Socks", emoji: "🧦" },
    { fr: "bottes", en: "Boots", emoji: "🥾" },
    { fr: "gants", en: "Gloves", emoji: "🧤" },
    { fr: "écharpe", en: "Scarf", emoji: "🧣" },
    { fr: "ceinture", en: "Belt", emoji: "👔" },
    { fr: "bague", en: "Ring", emoji: "💍" },
    { fr: "collier", en: "Necklace", emoji: "📿" },
    { fr: "bracelet", en: "Bracelet", emoji: "⌚" },
    { fr: "batterie", en: "Battery", emoji: "🔋" },
    { fr: "chargeur", en: "Charger", emoji: "🔌" },
    { fr: "câble", en: "Cable", emoji: "🧵" },
    { fr: "clé USB", en: "USB flash drive", emoji: "💾" },
    { fr: "souris", en: "Computer mouse", emoji: "🖱️" },
    { fr: "clavier", en: "Keyboard", emoji: "⌨️" },
    { fr: "écran", en: "Screen", emoji: "🖥️" },
    { fr: "imprimante", en: "Printer", emoji: "🖨️" },
    { fr: "réveil", en: "Alarm clock", emoji: "⏰" },
    { fr: "balai", en: "Broom", emoji: "🧹" },
    { fr: "seau", en: "Bucket", emoji: "🪣" },
    { fr: "éponge", en: "Sponge", emoji: "🧽" },
    { fr: "poubelle", en: "Trash can", emoji: "🗑️" },
    { fr: "sac à dos", en: "Backpack", emoji: "🎒" },
    { fr: "bougie", en: "Candle", emoji: "🕯️" },
    { fr: "allumette", en: "Matchstick", emoji: "🥖" },
    { fr: "briquet", en: "Lighter", emoji: "🔥" },
    { fr: "cadenas", en: "Padlock", emoji: "🔒" },
    { fr: "marteau", en: "Hammer", emoji: "🔨" },
    { fr: "tournevis", en: "Screwdriver", emoji: "🪛" },
    { fr: "clou", en: "Nail", emoji: "📍" },
    { fr: "fil", en: "Thread", emoji: "🧵" },
    { fr: "aiguille", en: "Needle", emoji: "🪡" }
],

"Travel & Places": [
    { fr: "gare", en: "Station", emoji: "🚉" },
    { fr: "aéroport", en: "Airport", emoji: "✈️" },
    { fr: "hôtel", en: "Hotel", emoji: "🏨" },
    { fr: "billet", en: "Ticket", emoji: "🎟️" },
    { fr: "carte", en: "Map", emoji: "🗺️" },
    { fr: "route", en: "Road / Way", emoji: "🛣️" },
    { fr: "pays", en: "Country", emoji: "🌍" },
    { fr: "ville", en: "Town / City", emoji: "🏙️" },
    { fr: "église", en: "Church", emoji: "⛪" },
    { fr: "château", en: "Castle", emoji: "🏰" },
    { fr: "mer", en: "Sea / Beach", emoji: "🌊" },
    { fr: "montagne", en: "Mountain", emoji: "⛰️" },
    { fr: "parc", en: "Park", emoji: "🌳" },
    { fr: "magasin", en: "Shop / Store", emoji: "🛍️" },
    { fr: "restaurant", en: "Restaurant", emoji: "🍽️" },
    { fr: "toilettes", en: "Restroom", emoji: "🚻" },
    { fr: "bus", en: "Bus", emoji: "🚌" },
    { fr: "train", en: "Train", emoji: "🚆" },
    { fr: "avion", en: "Airplane", emoji: "✈️" },
    { fr: "voyage", en: "Travel", emoji: "🧳" },
    { fr: "port", en: "Harbor / Port", emoji: "⚓" },
    { fr: "bateau", en: "Boat / Ship", emoji: "🚢" },
    { fr: "métro", en: "Subway", emoji: "🚇" },
    { fr: "tramway", en: "Tram", emoji: "🚊" },
    { fr: "taxi", en: "Taxi", emoji: "🚕" },
    { fr: "voiture", en: "Car", emoji: "🚗" },
    { fr: "place", en: "Town square", emoji: "🏛️" },
    { fr: "rue", en: "Street", emoji: "🛣️" },
    { fr: "avenue", en: "Avenue", emoji: "🛣️" },
    { fr: "pont", en: "Bridge", emoji: "🌉" },
    { fr: "rivière", en: "River", emoji: "🏞️" },
    { fr: "lac", en: "Lake", emoji: "🏞️" },
    { fr: "île", en: "Island", emoji: "🏝️" },
    { fr: "forêt", en: "Forest", emoji: "🌲" },
    { fr: "désert", en: "Desert", emoji: "🏜️" },
    { fr: "plage", en: "Beach", emoji: "🏖️" },
    { fr: "musée", en: "Museum", emoji: "🏛️" },
    { fr: "théâtre", en: "Theater", emoji: "🎭" },
    { fr: "cinéma", en: "Movie theater", emoji: "🎬" },
    { fr: "bibliothèque", en: "Library", emoji: "📚" },
    { fr: "école", en: "School", emoji: "🏫" },
    { fr: "université", en: "University", emoji: "🎓" },
    { fr: "hôpital", en: "Hospital", emoji: "🏥" },
    { fr: "pharmacie", en: "Pharmacy", emoji: "💊" },
    { fr: "banque", en: "Bank", emoji: "🏦" },
    { fr: "poste", en: "Post office", emoji: "🏣" },
    { fr: "boulangerie", en: "Bakery", emoji: "🥖" },
    { fr: "boucherie", en: "Butcher shop", emoji: "🥩" },
    { fr: "supermarché", en: "Supermarket", emoji: "🛒" },
    { fr: "marché", en: "Market", emoji: "🧺" },
    { fr: "café", en: "Café", emoji: "☕" },
    { fr: "bar", en: "Bar / Pub", emoji: "🍺" },
    { fr: "stade", en: "Stadium", emoji: "🏟️" },
    { fr: "piscine", en: "Swimming pool", emoji: "🏊" },
    { fr: "zoo", en: "Zoo", emoji: "🦁" },
    { fr: "jardin", en: "Garden", emoji: "🏡" },
    { fr: "maison", en: "House", emoji: "🏠" },
    { fr: "immeuble", en: "Building", emoji: "🏢" },
    { fr: "appartement", en: "Apartment", emoji: "🏢" },
    { fr: "chambre", en: "Room", emoji: "🛏️" },
    { fr: "passeport", en: "Passport", emoji: "🛂" },
    { fr: "visa", en: "Visa", emoji: "📄" },
    { fr: "valise", en: "Suitcase", emoji: "🧳" },
    { fr: "bagages", en: "Luggage", emoji: "🧳" },
    { fr: "douane", en: "Customs", emoji: "🛃" },
    { fr: "frontière", en: "Border", emoji: "🗺️" },
    { fr: "vol", en: "Flight", emoji: "🛫" },
    { fr: "départ", en: "Departure", emoji: "🛫" },
    { fr: "arrivée", en: "Arrival", emoji: "🛬" },
    { fr: "retard", en: "Delay", emoji: "⏰" },
    { fr: "réservation", en: "Reservation", emoji: "📅" },
    { fr: "réception", en: "Front desk", emoji: "🛎️" },
    { fr: "clé", en: "Key", emoji: "🔑" },
    { fr: "ascenseur", en: "Elevator", emoji: "🛗" },
    { fr: "escalier", en: "Stairs", emoji: "🪜" },
    { fr: "stationnement", en: "Parking", emoji: "🅿️" },
    { fr: "essence", en: "Gasoline", emoji: "⛽" },
    { fr: "péage", en: "Toll", emoji: "🛣️" },
    { fr: "croisière", en: "Cruise", emoji: "🚢" },
    { fr: "excursion", en: "Excursion / Tour", emoji: "🚌" },
    { fr: "souvenir", en: "Souvenir", emoji: "🎁" },
    { fr: "guide", en: "Guidebook / Guide", emoji: "📖" },
    { fr: "monument", en: "Monument", emoji: "🗿" },
    { fr: "statue", en: "Statue", emoji: "🗽" },
    { fr: "tour", en: "Tower", emoji: "🗼" },
    { fr: "fontaine", en: "Fountain", emoji: "⛲" },
    { fr: "cathédrale", en: "Cathedral", emoji: "⛪" },
    { fr: "mosquée", en: "Mosque", emoji: "🕌" },
    { fr: "synagogue", en: "Synagogue", emoji: "🕍" },
    { fr: "temple", en: "Temple", emoji: "🛕" },
    { fr: "village", en: "Village", emoji: "🏘️" },
    { fr: "quartier", en: "Neighborhood", emoji: "🏡" },
    { fr: "centre-ville", en: "Downtown", emoji: "🏙️" },
    { fr: "banlieue", en: "Suburbs", emoji: "🏘️" },
    { fr: "campagne", en: "Countryside", emoji: "🚜" },
    { fr: "ferme", en: "Farm", emoji: "🧑‍🌾" },
    { fr: "vallée", en: "Valley", emoji: "🏔️" },
    { fr: "colline", en: "Hill", emoji: "⛰️" },
    { fr: "cascade", en: "Waterfall", emoji: "🌊" },
    { fr: "monde", en: "World", emoji: "🌐" }
]

};

// Get category emoji for the back of cards
function getSubjectEmoji(subject) {
    return subjectIcons[subject] || "✨";
}


// ======================================
// 2. GAME VARIABLES
// ======================================

let currentSubject = "";
let selectedCards = [];
let matchedPairs = 0;
let lockBoard = false;

// Dynamically set pairs: 8 pairs (16 cards, 4x4) for mobile, 10 pairs (20 cards, 5x4) for desktop
const numberOfPairs = window.innerWidth <= 700 ? 8 : 10;


// Sound Effect Generator (Web Audio API)
function playMatchSound() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();

    // Play a cheerful two-tone chime (E5 -> A5)
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 major chord arpeggio
    notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.value = freq;

        const startTime = ctx.currentTime + index * 0.08;
        const stopTime = startTime + 0.25;

        gain.gain.setValueAtTime(0.15, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, stopTime);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(stopTime);
    });
}


// ======================================
// 3. SUBJECT ICONS
// ======================================

const subjectIcons = {
    Food: "🍱",
    Numbers: "🔢",
    Greetings: "👋",
    People: "👥",
    "Everyday Objects": "🏠",
    "Travel & Places": "✈️"
};


// ======================================
// 4. SHUFFLE FUNCTION
// ======================================

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


// ======================================
// 5. START THE GAME
// ======================================

function startGame(subject) {
    currentSubject = subject;
    selectedCards = [];
    matchedPairs = 0;
    lockBoard = false;

    // Change screens
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    // Update game heading
    document.getElementById("subjectTitle").textContent = subject;
    document.getElementById("gameIcon").textContent = subjectIcons[subject];

    // Reset progress
    updateProgress();
    document.getElementById("message").textContent = "";

    const board = document.getElementById("gameBoard");
    board.innerHTML = "";

    // Select random vocabulary entries based on numberOfPairs
    const words = shuffleArray(vocabulary[subject]);
    const selectedWords = words.slice(0, numberOfPairs);

    // Create two cards for each word
    let cards = [];
    const categoryEmoji = getSubjectEmoji(subject);

    selectedWords.forEach((word, index) => {
        cards.push({
            type: "french",
            content: word.fr,
            emojiWord: word.emoji,
            pair: index,
            backEmoji: categoryEmoji
        });

        cards.push({
            type: "english",
            content: word.en,
            emojiWord: word.emoji,
            pair: index,
            backEmoji: categoryEmoji
        });
    });

    // Shuffle all cards (16 on mobile, 20 on desktop)
    cards = shuffleArray(cards);

    // Create the cards on screen with classroom numbers on the back
    cards.forEach((card, index) => {
        const cardElement = document.createElement("button");

        cardElement.type = "button";
        cardElement.classList.add("card");
        cardElement.setAttribute("aria-label", `Hidden memory card ${index + 1}`);

        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-back">
                    <span class="card-back-number">${index + 1}</span>
                    <span class="card-back-label">Carte</span>
                </div>
                <div class="card-face card-front">
                    ${
                        card.type === "french"
                        ? `
                            <span class="french-word">${card.content}</span>
                            <span class="card-emoji-hint">${card.emojiWord}</span>
                          `
                        : `
                            <span class="english">${card.content}</span>
                          `
                    }
                </div>
            </div>
        `;

        // Add click event
        cardElement.addEventListener("click", () => {
            flipCard(cardElement, card);
        });

        board.appendChild(cardElement);
    });
}


// ======================================
// 6. FLIP A CARD
// ======================================

function flipCard(element, card) {
    // Don't allow clicks while checking a pair
    if (lockBoard) return;

    // Don't allow an already flipped card
    if (element.classList.contains("flipped")) return;

    // Don't allow a matched card
    if (element.classList.contains("matched")) return;

    // Flip the card
    element.classList.add("flipped");

    element.setAttribute(
        "aria-label",
        card.type === "french"
            ? `${card.content}`
            : card.content
    );

    // Add card to selected cards
    selectedCards.push({
        element: element,
        card: card
    });

    // Check when two cards have been selected
    if (selectedCards.length === 2) {
        checkMatch();
    }
}


// ======================================
// 7. CHECK FOR A MATCH
// ======================================

function checkMatch() {
    lockBoard = true;

    const first = selectedCards[0];
    const second = selectedCards[1];

    // Cards must have the same pair ID
    // but different types (French and English)
    const isMatch =
        first.card.pair === second.card.pair &&
        first.card.type !== second.card.type;

    if (isMatch) {
        // Correct match!
        first.element.classList.add("matched");
        second.element.classList.add("matched");

        // Play victory chime sound
        playMatchSound();

        matchedPairs++;
        selectedCards = [];
        lockBoard = false;

        updateProgress();

        // Check if all pairs have been found
        if (matchedPairs === numberOfPairs) {
            document.getElementById("message").textContent =
                `🎉 Amazing! You found all ${numberOfPairs} pairs!`;

            // Return to the main menu after 2 seconds
            setTimeout(() => {
                showMenu();
            }, 2000);
        }

    } else {
        // Incorrect match
        // Turn cards back over after one second
        setTimeout(() => {
            first.element.classList.remove("flipped");
            second.element.classList.remove("flipped");

            first.element.setAttribute("aria-label", "Hidden memory card");
            second.element.setAttribute("aria-label", "Hidden memory card");

            selectedCards = [];
            lockBoard = false;
        }, 1000);
    }
}


// ======================================
// 8. UPDATE PROGRESS
// ======================================

function updateProgress() {
    document.getElementById("score").textContent =
        `${matchedPairs} / ${numberOfPairs} pairs`;

    const percentage = (matchedPairs / numberOfPairs) * 100;

    document.getElementById("progressBar").style.width = percentage + "%";
}


// ======================================
// 9. RETURN TO MAIN MENU
// ======================================

function showMenu() {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
}
