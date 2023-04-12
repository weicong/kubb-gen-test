import type { UserLoginInfoDto } from "./UserLoginInfoDto";
import type { TenantLoginInfoDto } from "./TenantLoginInfoDto";
import type { ApplicationInfoDto } from "./ApplicationInfoDto";
import type { UiCustomizationSettingsDto } from "./UiCustomizationSettingsDto";

export type GetCurrentLoginInformationsOutput = {
    user?: UserLoginInfoDto | undefined;
    impersonatorUser?: UserLoginInfoDto | undefined;
    tenant?: TenantLoginInfoDto | undefined;
    impersonatorTenant?: TenantLoginInfoDto | undefined;
    application?: ApplicationInfoDto | undefined;
    theme?: UiCustomizationSettingsDto | undefined;
};
