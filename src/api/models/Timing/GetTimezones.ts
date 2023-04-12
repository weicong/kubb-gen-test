import type { SettingScopes } from "../SettingScopes";
import type { ListResultDtoOfNameValueDto } from "../ListResultDtoOfNameValueDto";

export type GetTimezonesQueryParams = {
    defaultTimezoneScope: SettingScopes;
};

/**
* @description Success
*/
export type GetTimezonesResponse = ListResultDtoOfNameValueDto;
