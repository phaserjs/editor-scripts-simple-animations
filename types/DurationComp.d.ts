export default class DurationComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): DurationComp;
    private gameObject;
    duration: number;
    delay: number;
    static getDuration(obj: any, defaultValue: number): number;
    static getDelay(obj: any, defaultValue: number): number;
}
