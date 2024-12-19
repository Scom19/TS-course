class User {
    static #userName: string; // приватное статическое поле
    #surname: string;         // приватное поле
    protected age: number;    // protected поле

    constructor(userName: string, surname: string, age: number) {
        User.#userName = userName;
        this.#surname = surname;
        this.age = age;
    }

    // Публичный метод для изменения возраста
    public setAge(age: number): void {
        this.age = age;
    }

    // Публичный метод для получения возраста
    public getAge(): number {
        return this.age;
    }

    // Метод для получения статического приватного userName
    static getUserName(): string {
        return User.#userName;
    }

    // Метод для получения приватного surname
    public getSurname(): string {
        return this.#surname;
    }
}

const user = new User("Alice", "Smith", 25);

console.log(User.getUserName());
console.log(user.getAge());
user.setAge(30);
console.log(user.getAge());

