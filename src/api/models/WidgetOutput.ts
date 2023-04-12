import type { WidgetFilterOutput } from "./WidgetFilterOutput";

export type WidgetOutput = {
    /**
    * @type string | undefined
    */
    id?: string | undefined;
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @type array | undefined
    */
    filters?: WidgetFilterOutput[] | undefined;
};
