const users = [
  {
    name: "Оля",
    age: 21,
    city: "Львів",
    favoriteColors: ["синій", "жовтий"],
    isStudent: true,
    grades: [90, 80, 85, 95],
  },
  {
    name: "Іван",
    age: 25,
    city: "Київ",
    favoriteColors: ["зелений", "червоний", "чорний"],
    isStudent: false,
    grades: [55, 60, 58, 65],
  },
  {
    name: "Марія",
    age: 19,
    city: "Одеса",
    favoriteColors: ["рожевий"],
    isStudent: true,
    grades: [70, 75, 80],
  },
];

// Функція короткого привітання
function greet(user) {
  console.log(`Привіт, ${user.name} з міста ${user.city}!`);
}

// Функція розрахунку середнього балу
function calculateAverage(grades) {
  let sum = 0;
  for (let grade of grades) {
    sum += grade;
  }
  return sum / grades.length;
}

// Функція оцінки середнього балу
function getPerformanceText(average) {
  if (average >= 85) return "Відмінно";
  else if (average >= 70) return "Добре";
  else return "Задовільно";
}

// Функція об'єднання кольорів
function joinColors(colors) {
  return colors.join(", ");
}

// Стрілочні функції для демонстрації
const square = (num) => num * num;
const half = (num) => num / 2;
const addTen = (num) => num + 10;

console.log("=== Демонстрація стрілочних функцій ===");
console.log("Квадрат 5:", square(5));
console.log("Половина 20:", half(20));
console.log("10 + 10:", addTen(10));
console.log("=======================================");

// 2. Перебір масиву двома способами

console.log("----- Перебір через for -----");
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  greet(user);

  const avg = calculateAverage(user.grades);
  const performance = getPerformanceText(avg);
  const colors = joinColors(user.favoriteColors);
  const retake = user.grades.some((g) => g < 60)
    ? "Потрібна перездача"
    : "Хвостів немає";

  console.log(`Ім'я: ${user.name}`);
  console.log(`Місто: ${user.city}`);
  console.log(`Студент: ${user.isStudent}`);
  console.log(`Середній бал: ${avg.toFixed(2)} (${performance})`);
  console.log(`Улюблені кольори: ${colors}`);
  console.log(`Результат: ${retake}`);
  console.log("----------------------------");
}

console.log("----- Перебір через forEach -----");
users.forEach((user) => {
  greet(user);

  const avg = calculateAverage(user.grades);
  const performance = getPerformanceText(avg);
  const colors = joinColors(user.favoriteColors);
  const retake = user.grades.some((g) => g < 60)
    ? "Потрібна перездача"
    : "Хвостів немає";

  console.log(`Ім'я: ${user.name}`);
  console.log(`Місто: ${user.city}`);
  console.log(`Студент: ${user.isStudent}`);
  console.log(`Середній бал: ${avg.toFixed(2)} (${performance})`);
  console.log(`Улюблені кольори: ${colors}`);
  console.log(`Результат: ${retake}`);
  console.log("----------------------------");
});
