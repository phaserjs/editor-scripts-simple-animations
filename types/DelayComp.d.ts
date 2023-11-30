export default class DelayComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): DelayComp;
    private gameObject;
    delay: number;
    static getDelay(obj: any, defaultValue: number): number;
}
