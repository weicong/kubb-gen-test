import type { NameValue } from "./NameValue";

export type AppSettingsJsonDto = {
    /**
    * @type string | undefined
    */
    webSiteUrl?: string | undefined;
    /**
    * @type string | undefined
    */
    serverSiteUrl?: string | undefined;
    /**
    * @type array | undefined
    */
    languages?: NameValue[] | undefined;
};
