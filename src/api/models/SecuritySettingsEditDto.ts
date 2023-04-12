import type { PasswordComplexitySetting } from "./PasswordComplexitySetting";
import type { UserLockOutSettingsEditDto } from "./UserLockOutSettingsEditDto";
import type { TwoFactorLoginSettingsEditDto } from "./TwoFactorLoginSettingsEditDto";

export type SecuritySettingsEditDto = {
    /**
    * @type boolean | undefined
    */
    allowOneConcurrentLoginPerUser?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    useDefaultPasswordComplexitySettings?: boolean | undefined;
    passwordComplexity?: PasswordComplexitySetting | undefined;
    defaultPasswordComplexity?: PasswordComplexitySetting | undefined;
    userLockOut?: UserLockOutSettingsEditDto | undefined;
    twoFactorLogin?: TwoFactorLoginSettingsEditDto | undefined;
};
