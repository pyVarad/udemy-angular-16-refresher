export class ItemSpec {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public imageSrc: string
    ) { }
}

export class ShoppingKartList {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public imageSrc: string,
        public quantity: number
    ) { }
}