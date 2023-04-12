import type { WidgetOutput } from "./WidgetOutput";

export type DashboardOutput = {
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type array | undefined
    */
    widgets?: WidgetOutput[] | undefined;
};
