export default class DurationComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): DurationComp;
    private gameObject;
    duration: number;
    static getDuration(obj: any, defaultValue: number): number;
}
