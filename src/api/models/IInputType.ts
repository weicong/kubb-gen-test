import type { IValueValidator } from "./IValueValidator";

export type IInputType = {
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type object | undefined
    */
    attributes?: {
        [key: string]: object;
    } | undefined;
    validator?: IValueValidator | undefined;
};
