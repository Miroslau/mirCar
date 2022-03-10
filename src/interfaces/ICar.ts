interface ICarInfo {
    name: string,
    group: number,
    price: number,
    image: string,
    note: string,
    promotion: number,
    time: string | Date,
    id: string
}

export interface ICar {
    title: string,
    data: ICarInfo[],
}

export interface Filter {
    name: string,
    image: number,
    id: string,
}

export interface Ride {
    street: string,
    area: string,
    id: string,
}

export interface Request {
    name: string,
    id: number,
}

export interface Options {
    name: string,
    icon: string,
    id: string,
}

export interface Payment {
    image: string,
    text: string
}

export interface Around {
    latitude: number,
    longitude: number,
}
