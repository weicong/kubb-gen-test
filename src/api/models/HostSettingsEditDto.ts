import type { GeneralSettingsEditDto } from "./GeneralSettingsEditDto";
import type { HostUserManagementSettingsEditDto } from "./HostUserManagementSettingsEditDto";
import type { EmailSettingsEditDto } from "./EmailSettingsEditDto";
import type { TenantManagementSettingsEditDto } from "./TenantManagementSettingsEditDto";
import type { SecuritySettingsEditDto } from "./SecuritySettingsEditDto";
import type { HostBillingSettingsEditDto } from "./HostBillingSettingsEditDto";
import type { OtherSettingsEditDto } from "./OtherSettingsEditDto";

export type HostSettingsEditDto = {
    general: GeneralSettingsEditDto;
    userManagement: HostUserManagementSettingsEditDto;
    email: EmailSettingsEditDto;
    tenantManagement: TenantManagementSettingsEditDto;
    security: SecuritySettingsEditDto;
    billing?: HostBillingSettingsEditDto | undefined;
    otherSettings?: OtherSettingsEditDto | undefined;
};
