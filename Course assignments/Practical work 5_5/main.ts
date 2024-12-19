import { Stack } from "./Stack";
import { TowerOfHanoi } from "./TowerOfHanoi";
import { getValue, IContainer } from "./GenericInterface";

// Количество дисков
const diskCount = 5;

// Пример с кольцами, представляющими диски
interface Disk {
    diameter: number;
    color: string;
}

// Создаем башню с кольцами
const initialTowerWithDisks = new Stack<Disk>();
for (let i = 0; i < diskCount; i++) {
    initialTowerWithDisks.push({
        diameter: diskCount - i,
        color: `Color${diskCount - i}`
    });
}

const towerOfHanoiWithDisks = new TowerOfHanoi(initialTowerWithDisks);
towerOfHanoiWithDisks.solve();
towerOfHanoiWithDisks.checkLastTower();

// Пример с простыми числами
const initialTowerWithInts = new Stack<number>();
for (let i = 0; i < diskCount; i++) {
    initialTowerWithInts.push(diskCount - i);
}

const towerOfHanoiWithInts = new TowerOfHanoi(initialTowerWithInts);
towerOfHanoiWithInts.solve();
towerOfHanoiWithInts.checkLastTower();

// Пример с простыми строками
const initialTowerWithStrings = new Stack<string>();
for (let i = 0; i < diskCount; i++) {
    initialTowerWithStrings.push(`${String.fromCharCode(96 + diskCount - i)}`);
}

const towerOfHanoiWithStrings = new TowerOfHanoi(initialTowerWithStrings);
towerOfHanoiWithStrings.solve();
towerOfHanoiWithStrings.checkLastTower();

// Демонстрация использования интерфейса IContainer и функции getValue
// Контейнер с числом
const containerWithNumber: IContainer<number> = { value: 42 };
console.log(`Значение в контейнере с числом: ${getValue(containerWithNumber)}`);

// Контейнер со строкой
const containerWithString: IContainer<string> = { value: "Hello, World!" };
console.log(`Значение в контейнере со строкой: ${getValue(containerWithString)}`);

// Контейнер с кольцом
const containerWithDisk: IContainer<Disk> = { value: { diameter: 3, color: "Red" } };
console.log(`Значение в контейнере с кольцом: ${JSON.stringify(getValue(containerWithDisk))}`);
