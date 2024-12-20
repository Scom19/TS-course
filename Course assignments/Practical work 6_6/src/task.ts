// Задание 1: Динамические объекты
interface Car {
	model: string;
	price: number;
	dynamic_1: Record<string, string>;
	dynamic_2: { [key: string]: number };
	tuple: [string, number, string];
}

// Получение ключей интерфейса Car
type cKeys = keyof Car;
const carKey: cKeys = "model";
console.log(carKey)

// Использование typeof и keyof
const carExample: Car = {
	model: "Tesla",
	price: 89999,
	dynamic_1: { key1: "value1", key2: "value2" },
	dynamic_2: { key1: 1, key2: 2 },
	tuple: ["Tesla", 2023, "Electric"],
};

console.log("Ключи интерфейса Car:", Object.keys(carExample));

// Задание 2: Перегрузка функции
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: string | number, b: string | number): string | number {
	if (typeof a === "number" && typeof b === "number") {
		return a + b; // Сложение чисел
	}
	if (typeof a === "string" && typeof b === "string") {
		return a + b; // Конкатенация строк
	}
	return a.toString() + b.toString(); // Преобразование к строке
}

console.log(add(5, 3));
console.log(add("Hello", " World"));
console.log(add(10, " apples"));
console.log(add("Price:", 100));

// Задание 3: Утилитарные типы
// 1. Partial<Car> - все свойства становятся необязательными
type PartialCar = Partial<Car>;

// 2. Required<Car> - все свойства становятся обязательными
type RequiredCar = Required<Car>;

// 3. Pick<Car, "model" | "price"> - выбираем только указанные свойства
type PickCar = Pick<Car, "model" | "price">;

// 4. Omit<Car, "dynamic_1" | "dynamic_2"> - исключаем указанные свойства
type OmitCar = Omit<Car, "dynamic_1" | "dynamic_2">;

// 5. Readonly<Car> - все свойства становятся только для чтения
type ReadonlyCar = Readonly<Car>;


