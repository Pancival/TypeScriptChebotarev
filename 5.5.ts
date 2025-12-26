class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    size(): number {
        return this.items.length;
    }
}


class HanoiTower<T> {
    private from: Stack<T>;
    private to: Stack<T>;
    private aux: Stack<T>;

    private fromName: string;
    private toName: string;
    private auxName: string;

    constructor(
        fromName: string = "First",
        toName: string = "Second",
        auxName: string = "Third"
    ) {
        this.from = new Stack<T>();
        this.to = new Stack<T>();
        this.aux = new Stack<T>();

        this.fromName = fromName;
        this.toName = toName;
        this.auxName = auxName;
    }

    addDisks(disks: T[]): void {
        for (const disk of disks) {
            this.from.push(disk);
        }
    }

    solve(): void {
        const count = this.from.size();
        this.move(count, this.from, this.to, this.aux, this.fromName, this.toName, this.auxName);
    }

    private move(
        n: number,
        from: Stack<T>,
        to: Stack<T>,
        aux: Stack<T>,
        fromName: string,
        toName: string,
        auxName: string
    ): void {
        if (n === 0) return;

        this.move(n - 1, from, aux, to, fromName, auxName, toName);

        const disk = from.pop();
        if (disk !== undefined) {
            console.log(`Переместить диск ${disk} с ${fromName} на ${toName}`);
            to.push(disk);
        }

        this.move(n - 1, aux, to, from, auxName, toName, fromName);
    }
}
