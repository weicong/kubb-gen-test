import type { Widget } from "./Widget";

export type Page = {
    /**
    * @type string | undefined
    */
    id?: string | undefined;
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type array | undefined
    */
    widgets?: Widget[] | undefined;
};
