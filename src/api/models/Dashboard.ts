import type { Page } from "./Page";

export type Dashboard = {
    /**
    * @type string | undefined
    */
    dashboardName?: string | undefined;
    /**
    * @type array | undefined
    */
    pages?: Page[] | undefined;
};
