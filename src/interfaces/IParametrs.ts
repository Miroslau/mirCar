interface DeepObject {
    [key: string]: number | string,
}


export interface IParametrs {
    statusBarHeight: number,
    headerHeight: number,
    [key: string]: DeepObject | number,
}
