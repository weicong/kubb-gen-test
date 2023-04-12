import type { EmailSettingsEditDto } from "./EmailSettingsEditDto";
import type { HostBillingSettingsEditDto } from "./HostBillingSettingsEditDto";

export type InstallDto = {
    /**
    * @type string
    */
    connectionString: string;
    /**
    * @type string
    */
    adminPassword: string;
    /**
    * @type string
    */
    webSiteUrl: string;
    /**
    * @type string | undefined
    */
    serverUrl?: string | undefined;
    /**
    * @type string
    */
    defaultLanguage: string;
    smtpSettings?: EmailSettingsEditDto | undefined;
    billInfo?: HostBillingSettingsEditDto | undefined;
};
