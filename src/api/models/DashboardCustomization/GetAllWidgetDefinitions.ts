import type { WidgetOutput } from "../WidgetOutput";

export type GetAllWidgetDefinitionsQueryParams = {
    /**
    * @type string | undefined
    */
    dashboardName?: string | undefined;
    /**
    * @type string | undefined
    */
    application?: string | undefined;
};

/**
* @description Success
*/
export type GetAllWidgetDefinitionsResponse = WidgetOutput[];
