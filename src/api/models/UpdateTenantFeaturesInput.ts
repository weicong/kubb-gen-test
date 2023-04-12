import type { NameValueDto } from "./NameValueDto";

export type UpdateTenantFeaturesInput = {
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
    /**
    * @type array
    */
    featureValues: NameValueDto[];
};
