import type { Page } from "./Page";

export type SavePageInput = {
    /**
    * @type string | undefined
    */
    dashboardName?: string | undefined;
    /**
    * @type string | undefined
    */
    application?: string | undefined;
    /**
    * @type array | undefined
    */
    pages?: Page[] | undefined;
};
