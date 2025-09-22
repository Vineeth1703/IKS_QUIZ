// script.js - Full 89-question quiz data + logic

const unit1Data = [
  { q: "What major river system provided fertile land for early settlements in ancient India?",
    options: ["Indus River", "Nile River", "Tigris-Euphrates River", "Yellow River"],
    answer: "Indus River" },

  { q: "The Harappan civilization was located in which present-day country?",
    options: ["Pakistan", "India", "Bangladesh", "Sri Lanka"],
    answer: "Pakistan" },

  { q: "The Indus Valley Civilization is also known as the __________.",
    options: ["Harappan Civilization", "Aryan Civilization", "Mughal Empire", "Gupta Dynasty"],
    answer: "Harappan Civilization" },

  { q: "Which region of ancient India is considered the birthplace of Hinduism?",
    options: ["Punjab", "Rajasthan", "Gujarat", "Uttar Pradesh"],
    answer: "Uttar Pradesh" },

  { q: "The ancient Indian city of Varanasi is situated on the banks of which river?",
    options: ["Ganges", "Yamuna", "Saraswati", "Brahmaputra"],
    answer: "Ganges" },

  { q: "Which of the following ancient Indian cities was a major center of learning and education?",
    options: ["Takṣaśilā", "Mathura", "Ayodhya", "Pataliputra"],
    answer: "Takṣaśilā" },

  { q: "Which ancient Indian university was renowned for its teachings in various fields, including philosophy and Buddhism?",
    options: ["Nalanda University", "Taxila University", "Vikramshila University", "Pushpagiri University"],
    answer: "Nalanda University" },

  { q: "The ancient Indian education system primarily emphasized the study of __________.",
    options: ["All of the above", "Mathematics", "Philosophy", "Medicine"],
    answer: "All of the above" },

  { q: "The transition from hunting and gathering to agriculture in ancient India led to the development of __________.",
    options: ["All of the above", "Social hierarchies", "Trade networks", "Permanent settlements"],
    answer: "Permanent settlements" },

  { q: "The earliest known agricultural settlements in ancient India were located in the region of __________.",
    options: ["Punjab", "Bihar", "Gujarat", "Rajasthan"],
    answer: "Punjab" },

  { q: "The Vedas are a collection of ancient Indian __________.",
    options: ["Religious texts", "Philosophical treatises", "Epic poems", "Legal codes"],
    answer: "Religious texts" },

  { q: "The oldest Veda is the __________.",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    answer: "Rigveda" },

  { q: "The Upanishads are a collection of texts that explore __________.",
    options: ["Philosophical ideas", "Yoga and meditation", "Mythology and folklore", "Rituals and sacrifices"],
    answer: "Philosophical ideas" },

  { q: "The Bhagavad Gita is a part of which ancient Indian epic?",
    options: ["Mahabharata", "Puranas", "Ramayana", "Upanishads"],
    answer: "Mahabharata" },

  { q: "The Ramayana and the Mahabharata are considered two of the greatest Indian __________.",
    options: ["Epics", "Temples", "Festivals", "Sculptures"],
    answer: "Epics" },

  { q: "The Ramayana tells the story of the prince __________.",
    options: ["Rama", "Krishna", "Arjuna", "Hanuman"],
    answer: "Rama" },

  { q: "Which festival celebrates the victory of good over evil and is associated with the story of Lord Rama?",
    options: ["Diwali", "Holi", "Durga Puja", "Navaratri"],
    answer: "Diwali" },

  { q: "The festival of Holi is known for its vibrant colors and the celebration of __________.",
    options: ["All of the above", "Harvest and fertility", "Victory of good over evil", "Love and friendship"],
    answer: "All of the above" },

  { q: "The Kumbh Mela, a major Hindu pilgrimage, is held every __________ years.",
    options: ["12", "4", "6", "2"],
    answer: "12" },

  { q: "The ancient Indian festival of Navaratri is dedicated to the worship of __________.",
    options: ["Goddess Durga", "Lord Shiva", "Lord Vishnu", "Lord Ganesha"],
    answer: "Goddess Durga" },

  { q: "The concept of 'Ahimsa' (non-violence) was most strongly advocated by which historical figure?",
    options: ["Mahavira", "Gautama Buddha", "Ashoka the Great", "Emperor Akbar"],
    answer: "Mahavira" },

  { q: "The Maurya Empire reached its greatest extent under the rule of which emperor?",
    options: ["Ashoka the Great", "Bindusara", "Chandragupta Maurya", "Chandragupta II"],
    answer: "Ashoka the Great" },

  { q: "The Arthashastra, an ancient Indian treatise on statecraft, was written by __________.",
    options: ["Chanakya", "Kalidasa", "Panini", "Vishnu Sharma"],
    answer: "Chanakya" },

  { q: "The Gupta Empire is known for its contributions to which field?",
    options: ["All of the above", "Art and literature", "Architecture", "Science and mathematics"],
    answer: "All of the above" },

  { q: "Which ancient Indian astronomer is known for his accurate calculation of the value of pi?",
    options: ["Aryabhata", "Brahmagupta", "Brahmagupta", "Bhaskara II"],
    answer: "Aryabhata" },

  { q: "The Chola dynasty of ancient India was known for its advancements in __________.",
    options: ["All of the above", "Temple architecture", "Administration", "Maritime trade"],
    answer: "All of the above" },

  { q: "The Sultanate of Delhi was established by which Islamic ruler in the 13th century?",
    options: ["Qutb-ud-din Aibak", "Muhammad bin Tughlaq", "Babur", "Alauddin Khilji"],
    answer: "Qutb-ud-din Aibak" },

  { q: "The Mughal Empire in India was founded by __________.",
    options: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
    answer: "Babur" },

  { q: "The Taj Mahal, a UNESCO World Heritage Site, was built during the reign of which Mughal emperor?",
    options: ["Shah Jahan", "Jahangir", "Akbar", "Aurangzeb"],
    answer: "Shah Jahan" },

  { q: "The Battle of Plassey in 1757 marked the beginning of British colonial rule in which region of India?",
    options: ["Bengal", "Punjab", "Maharashtra", "Tamil Nadu"],
    answer: "Bengal" },

  { q: "The Indian Rebellion of 1857, also known as the Sepoy Mutiny, was triggered by the use of which ammunition?",
    options: ["Cartridges greased with cow and pig fat", "Cartridges greased with coconut oil", "Cartridges greased with ghee", "Cartridges greased with vegetable oil"],
    answer: "Cartridges greased with cow and pig fat" },

  { q: "The Indian National Congress was formed in which year?",
    options: ["1885", "1857", "1905", "1947"],
    answer: "1885" },

  { q: "The partition of India and Pakistan occurred in which year?",
    options: ["1947", "1945", "1950", "1962"],
    answer: "1947" },

  { q: "The Indian independence movement was led by prominent leaders such as __________.",
    options: ["All of the above", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose"],
    answer: "All of the above" },

  { q: "The first Prime Minister of India was __________.",
    options: ["Jawaharlal Nehru", "Indira Gandhi", "Mahatma Gandhi", "Rajiv Gandhi"],
    answer: "Jawaharlal Nehru" },

  { q: "The ancient Indian game of chess, known as 'Chaturanga,' originated during which time period?",
    options: ["Mauryan period", "Vedic period", "Gupta period", "Mughal period"],
    answer: "Gupta period" },

  { q: "The traditional Indian system of medicine, which emphasizes a holistic approach to health, is known as __________.",
    options: ["All of the above", "Ayurveda", "Siddha", "Unani"],
    answer: "Ayurveda" },

  { q: "The Indian state of Kerala is known for its traditional martial art form called __________.",
    options: ["Kalaripayattu", "Kathakali", "Bharatanatyam", "Odissi"],
    answer: "Kalaripayattu" },

  { q: "The famous rock-cut temples of Ellora were built during the reign of which dynasty?",
    options: ["Rashtrakuta dynasty", "Chola dynasty", "Pallava dynasty", "Hoysala dynasty"],
    answer: "Rashtrakuta dynasty" },

  { q: "The Konark Sun Temple, a UNESCO World Heritage Site, is located in which Indian state?",
    options: ["Odisha", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
    answer: "Odisha" },

  { q: "The famous poet and playwright Kalidasa lived during the reign of which ancient Indian dynasty?",
    options: ["Gupta dynasty", "Maurya dynasty", "Chola dynasty", "Vijayanagara dynasty"],
    answer: "Gupta dynasty" },

  { q: "The official language of the Maurya Empire was __________.",
    options: ["Sanskrit", "Pali", "Prakrit", "Tamil"],
    answer: "Prakrit" },

  { q: "The Golden Age of ancient Indian culture and arts flourished under the patronage of which dynasty?",
    options: ["Gupta dynasty", "Mughal dynasty", "Maurya dynasty", "Chola dynasty"],
    answer: "Gupta dynasty" },

  { q: "The city of Agra, known for the Taj Mahal, served as the capital of which Mughal emperor?",
    options: ["Shah Jahan", "Akbar", "Aurangzeb", "Babur"],
    answer: "Shah Jahan" },

  { q: "The Battle of Plassey in 1757 was fought between the forces of the British East India Company and __________.",
    options: ["Mughal Empire", "Maratha Empire", "Sikh Empire", "Bengal Sultanate"],
    answer: "Bengal Sultanate" },

  { q: "The Swadeshi movement, which aimed at promoting Indian-made products, was a part of the __________.",
    options: ["Non-Cooperation Movement", "Quit India Movement", "Civil Disobedience Movement", "Khilafat Movement"],
    answer: "Non-Cooperation Movement" },

  { q: "The Dandi March, a significant event in the Indian independence movement, was led by __________.",
    options: ["Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru", "Bhagat Singh"],
    answer: "Mahatma Gandhi" },

  { q: "The Indian state of Tamil Nadu is known for its classical dance form called __________.",
    options: ["Bharatanatyam", "Kathak", "Manipuri", "Kuchipudi"],
    answer: "Bharatanatyam" },

  { q: "The city of Varanasi is considered a holy site in which two major religions?",
    options: ["Hinduism and Buddhism", "Hinduism and Jainism", "Buddhism and Sikhism", "Jainism and Sikhism"],
    answer: "Hinduism and Buddhism" },

  { q: "The Red Fort, a historic fort complex in Delhi, was constructed by which Mughal emperor?",
    options: ["Shah Jahan", "Aurangzeb", "Akbar", "Jahangir"],
    answer: "Shah Jahan" },

  { q: "The ancient city of Hampi, a UNESCO World Heritage Site, was the capital of which empire?",
    options: ["Vijayanagara Empire", "Chola Empire", "Pallava Empire", "Hoysala Empire"],
    answer: "Vijayanagara Empire" },

  { q: "The Sanchi Stupa, an important Buddhist monument, is located in which Indian state?",
    options: ["Madhya Pradesh", "Bihar", "Uttar Pradesh", "Maharashtra"],
    answer: "Madhya Pradesh" },

  { q: "The Jallianwala Bagh massacre, a tragic incident during the British colonial rule, took place in which Indian city?",
    options: ["Amritsar", "Mumbai", "Kolkata", "Lahore"],
    answer: "Amritsar" },

  { q: "The Indian National Army (INA), also known as the Azad Hind Fauj, was formed by __________.",
    options: ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Bhagat Singh"],
    answer: "Subhas Chandra Bose" },

  { q: "The first President of India was __________.",
    options: ["Rajendra Prasad", "Jawaharlal Nehru", "Indira Gandhi", "Dr. B.R. Ambedkar"],
    answer: "Rajendra Prasad" },

  { q: "The state of Punjab was divided during the partition of India, with a portion going to __________.",
    options: ["Pakistan", "Bangladesh", "Nepal", "Sri Lanka"],
    answer: "Pakistan" },

  { q: "The Quit India Movement was launched in which year?",
    options: ["1942", "1945", "1947", "1950"],
    answer: "1942" },

  { q: "The Constituent Assembly of India adopted the Constitution of India in which year?",
    options: ["1949", "1947", "1950", "1952"],
    answer: "1949" },

  { q: "The city of Mumbai was previously known by which name during the British colonial rule?",
    options: ["Bombay", "Madras", "Calcutta", "Chennai"],
    answer: "Bombay" },

  { q: "The Indian state of Rajasthan is known for its vibrant folk dance form called __________.",
    options: ["Ghoomar", "Bhangra", "Garba", "Kathakali"],
    answer: "Ghoomar" },

  { q: "The famous Ajanta and Ellora Caves are located in which Indian state?",
    options: ["Maharashtra", "Karnataka", "Uttar Pradesh", "Tamil Nadu"],
    answer: "Maharashtra" },

  { q: "The Rigveda, the oldest of the Vedas, is composed in which ancient Indian language?",
    options: ["Sanskrit", "Prakrit", "Pali", "Tamil"],
    answer: "Sanskrit" },

  { q: "The Mahabharata is an ancient Indian epic that tells the story of a great __________.",
    options: ["War", "Journey", "Love story", "Spiritual quest"],
    answer: "War" },

  { q: "The festival of Raksha Bandhan celebrates the bond between __________.",
    options: ["Brothers and sisters", "Parents and children", "Husband and wife", "Friends and relatives"],
    answer: "Brothers and sisters" },

  { q: "The famous Sun Temple at Konark is dedicated to which Hindu deity?",
    options: ["Sun God (Surya)", "Lord Shiva", "Lord Vishnu", "Lord Brahma"],
    answer: "Sun God (Surya)" },

  { q: "Takshashila, an ancient center of learning, is located in present-day:",
    options: ["India", "Afghanistan", "Pakistan", "Nepal"],
    answer: "Pakistan" },

  { q: "Takshashila University is associated with the famous ancient Indian scholar:",
    options: ["Chanakya", "Aryabhata", "Nagarjuna", "Kalidasa"],
    answer: "Chanakya" },

  { q: "Which ancient Indian philosopher is credited with establishing the philosophical school of Nyaya?",
    options: ["Adi Shankaracharya", "Charaka", "Gautama Buddha", "Gotama Maharishi"],
    answer: "Gotama Maharishi" },

  { q: "The ancient Indian text 'Nalanda Mahavira' provides insights into:",
    options: ["The principles of non-violence", "The art of warfare and strategy", "The history of Nalanda University", "Vedic mathematics and astronomy"],
    answer: "The history of Nalanda University" },

  { q: "The transition from hunting-gathering to agriculture in ancient India led to the development of:",
    options: ["Advanced trade routes", "Urban civilizations", "Metalworking techniques", "The caste system"],
    answer: "Urban civilizations" },

  { q: "The concept of 'Yajna' in ancient Vedic society was associated with:",
    options: ["Hunting rituals", "Agricultural festivals", "Fire sacrifices and rituals", "Temple construction"],
    answer: "Fire sacrifices and rituals" },

  { q: "The agricultural treatise 'Kautilya's Arthashastra' provides insights into:",
    options: ["Techniques for irrigation and water management", "Architecture and temple construction", "Military strategies and warfare", "Medicine and healing practices"],
    answer: "Techniques for irrigation and water management" },

  { q: "The Upanishads are a collection of texts that primarily explore:",
    options: ["Social and political issues in ancient India", "Mystical and philosophical concepts", "The life of Lord Krishna", "Agricultural practices and techniques"],
    answer: "Mystical and philosophical concepts" },

  { q: "The term 'Jataka' in ancient Indian literature refers to:",
    options: ["Fables and folktales", "Treatises on agriculture", "Sacred rituals and hymns", "Ancient medical texts"],
    answer: "Fables and folktales" },

  { q: "The Rigveda primarily consists of:",
    options: ["Rituals and ceremonies", "Philosophical hymns and prayers", "Historical accounts of ancient India", "Love poetry and epics"],
    answer: "Philosophical hymns and prayers" },

  { q: "The concept of 'Atman' in the Upanishads refers to:",
    options: ["The eternal soul or self", "The ruler of a kingdom", "A sacred dance form", "A type of Vedic sacrifice"],
    answer: "The eternal soul or self" },

  { q: "The character of Draupadi in the Mahabharata is known for her exceptional skills in:",
    options: ["Archery", "Diplomacy and statecraft", "Singing and dancing", "Healing and medicine"],
    answer: "Diplomacy and statecraft" },

  { q: "The Iron Pillar of Delhi, known for its rust-resistant composition, dates back to the time of __________.",
    options: ["Gupta dynasty", "Chandragupta Maurya", "Ashoka the Great", "Harsha Vardhana"],
    answer: "Gupta dynasty" },

  { q: "The term 'Dharma' in ancient Indian context refers to __________.",
    options: ["Religious duty and righteousness", "Social status and caste", "Political power and authority", "Material wealth and prosperity"],
    answer: "Religious duty and righteousness" },

  { q: "Which ancient Indian civilization is known for its well-planned cities and advanced drainage systems?",
    options: ["Harappa", "Mohenjo-Daro", "Vedic civilization", "Mauryan Empire"],
    answer: "Harappa" },

  { q: "The ancient Indian text 'Arthashastra' primarily focuses on:",
    options: ["Statecraft and political governance", "Religious rituals and ceremonies", "Astrological predictions", "Trade and commerce in ancient India"],
    answer: "Statecraft and political governance" },

  { q: "The ancient Indian term 'Janapada' refers to:",
    options: ["A class of Vedic priests", "An advanced form of agricultural tools", "A republic or territorial state", "A sacred dance form in ancient India"],
    answer: "A republic or territorial state" },

  { q: "The 'Aranyakas' in ancient Vedic literature are associated with:",
    options: ["Rituals and sacrifices", "Rules of warfare", "Forest dwellers and hermits", "Art and architecture"],
    answer: "Forest dwellers and hermits" },

  { q: "The ancient Indian system of education, where students lived with their teachers in an ashram, was known as:",
    options: ["Gurukula", "University", "Madrasa", "Monastery"],
    answer: "Gurukula" },

  { q: "Nalanda University was a renowned center for the study of:",
    options: ["Medicine and surgery", "Astronomy and astrology", "Buddhism and other subjects", "Vedic literature and rituals"],
    answer: "Buddhism and other subjects" },

  { q: "The decline of Nalanda University was primarily due to:",
    options: ["Invasion and destruction by foreign armies", "Lack of funding and support from rulers", "Emergence of other competing universities", "Internal conflicts and disputes among scholars"],
    answer: "Invasion and destruction by foreign armies" },

  { q: "Makar Sankranti is celebrated to mark the transition of the Sun into which zodiac sign?",
    options: ["Aries", "Cancer", "Libra", "Capricorn"],
    answer: "Capricorn" },

  { q: "The Great Bath, an important structure in the ancient city of Mohenjo-daro, was used for __________.",
    options: ["Ritual bathing", "Drinking water", "Animal sacrifices", "Community gatherings"],
    answer: "Ritual bathing" }
];


const unit2Data = [];
const unit3Data = [];

// =======================
// Utility: Shuffle Array
// =======================
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// =======================
// Elements
// =======================
const welcomeScreen = document.getElementById("welcome-screen");
const unitSelection = document.getElementById("unit-selection");
const quizArea = document.getElementById("quiz-area");
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const quizTitle = document.getElementById("quiz-title");

// =======================
// Name Handling
// =======================
document.getElementById("startBtn").addEventListener("click", () => {
  const name = document.getElementById("username").value.trim();
  if (name === "") {
    alert("Please enter your name!");
    return;
  }
  welcomeScreen.style.display = "none";
  unitSelection.style.display = "block";
  document.getElementById("greeting").innerText = `👋 Hello, ${name}!`;
});

// =======================
// Unit Selection
// =======================
document.querySelectorAll(".unitBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const unit = btn.dataset.unit;
    unitSelection.style.display = "none";
    quizArea.style.display = "block";
    resultsContainer.innerHTML = "";

    if (unit === "1") {
      quizTitle.innerText = "📘 Unit 1 Quiz";
      buildQuiz(unit1Data);
      document.getElementById("submit").style.display = "inline-block";
    } else if (unit === "2") {
      quizTitle.innerText = "📙 Unit 2 Quiz";
      quizContainer.innerHTML = "<p>🚧 In Progress 🚧</p>";
      document.getElementById("submit").style.display = "none";
    } else if (unit === "3") {
      quizTitle.innerText = "📗 Unit 3 Quiz";
      quizContainer.innerHTML = "<p>🚧 In Progress 🚧</p>";
      document.getElementById("submit").style.display = "none";
    }
  });
});

// =======================
// Build Quiz
// =======================
function buildQuiz(data) {
  const shuffledQuestions = shuffleArray([...data]);
  const output = shuffledQuestions.map((item, index) => {
    const shuffledOptions = shuffleArray([...item.options]);
    const optionsHtml = shuffledOptions.map(opt =>
      `<label class="option"><input type="radio" name="q${index}" value="${opt}"> ${opt}</label>`
    ).join("");
    return `<div class="question"><p>${index+1}. ${item.q}</p>${optionsHtml}</div>`;
  });
  quizContainer.innerHTML = output.join("");
}

// =======================
// Highlight Selection
// =======================
quizContainer.addEventListener("change", (e) => {
  if (e.target.type === "radio") {
    const parent = e.target.closest(".question");
    parent.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
    e.target.parentElement.classList.add("selected");
  }
});

// =======================
// Submit Quiz
// =======================
document.getElementById("submit").addEventListener("click", () => {
  let score = 0;
  const questions = quizContainer.querySelectorAll(".question");

  unit1Data.forEach((item, index) => {
    const selected = document.querySelector(`input[name=q${index}]:checked`);
    const questionBlock = questions[index];

    if (selected && selected.value === item.answer) {
      score++;
      questionBlock.classList.add("correct-answer");
    } else {
      questionBlock.classList.add("wrong-answer");
      // Highlight the correct one
      [...questionBlock.querySelectorAll(".option")].forEach(opt => {
        if (opt.innerText.trim() === item.answer) {
          opt.classList.add("correct-answer");
        }
      });
    }
  });

  const percent = ((score/unit1Data.length)*100).toFixed(1);
  let message = "Keep practicing!";
  if (percent == 100) message = "🎉 Perfect! Excellent!";
  else if (percent >= 80) message = "👏 Great job!";
  else if (percent >= 50) message = "🙂 Good attempt!";

  // Results UI
  resultsContainer.innerHTML = `
    <p>✅ Score: ${score}/${unit1Data.length} (${percent}%)</p>
    <div class="score-bar">
      <div class="score-fill" style="width:${percent}%">${percent}%</div>
    </div>
    <p>${message}</p>
    <button id="downloadPdf">📄 Download Questions & Answers</button>
  `;

  // =======================
  // PDF Download
  // =======================
  document.getElementById("downloadPdf").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(14);
    doc.text("Unit 1 Quiz - Questions & Answers", 10, 10);

    let y = 20;
    unit1Data.forEach((item, index) => {
      doc.setFont("helvetica", "bold");
      doc.text(`${index+1}. ${item.q}`, 10, y);
      y += 8;

      doc.setFont("helvetica", "normal");
      doc.text(`Answer: ${item.answer}`, 15, y);
      y += 12;

      if (y > 270) { // new page if too long
        doc.addPage();
        y = 20;
      }
    });

    doc.save("Unit1_Quiz_Answers.pdf");
  });
});