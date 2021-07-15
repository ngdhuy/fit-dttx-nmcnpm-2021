console.clear();

class Parents {
    constructor(value = 'anonymous') {
        this.name = value;
    }

    get Name() { return this.name; }
    set Name(value) { this.name = value; }

    toString() { return "String: " + this.name; }

    static getType() { return 'Parent'; }
}

class Child extends Parents {
    constructor(name = 'anonymous', hight = 0) {
        super(name);
        this.hight = hight;
    }

    toString() { return `${this.name} is tall ${this.hight}`; }

    static getType() { return 'Child'; }
}

let parents = new Parents();
console.log(Parents.getType(parents));
console.log(parents);

parents = "Peter";
console.log(parents);

let child = new Child('Marry', 100)
console.log(child);
console.log(Child.getType());