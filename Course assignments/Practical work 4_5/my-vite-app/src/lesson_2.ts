// Основной интерфейс
interface IUser {
    readonly id: number;
    userName: string;
    surname: string;
    coins: number;
    age: number;
    nickname?: string;

    addCoin(amount: number): void;

    removeCoin(amount: number): void;

    getCoins(): string;
}

// Расширенный интерфейс
interface IUserExtended extends IUser {
    email: string;
}

// Интерфейс-наследник
interface IUserAdmin extends IUserExtended {
    role: string;
}

// Класс, реализующий интерфейс-наследник
class Admin implements IUserAdmin {
    id: number;
    userName: string;
    surname: string;
    coins: number;
    readonly age: number;
    email: string;
    role: string;
    nickname?: string;

    constructor(id: number, userName: string, surname: string, age: number, email: string, role: string, coins: number = 0, nickname?: string) {
        this.id = id;
        this.userName = userName;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.role = role;
        this.coins = coins;
        this.nickname = nickname;
    }

    addCoin(amount: number): void {
        this.coins += amount;
    }

    removeCoin(amount: number): void {
        this.coins -= amount;
    }

    getCoins(): string {
        return `Количество монет: ${this.coins}`;
    }
}

const admin = new Admin(1, "Ivan", "Ivanov", 25, "ivan@example.com", "admin", 5, "Ivanchik228");
console.log(admin.getCoins());
admin.addCoin(10);
console.log(admin.getCoins());