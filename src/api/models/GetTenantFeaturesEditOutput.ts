import type { NameValueDto } from "./NameValueDto";
import type { FlatFeatureDto } from "./FlatFeatureDto";

export type GetTenantFeaturesEditOutput = {
    /**
    * @type array | undefined
    */
    featureValues?: NameValueDto[] | undefined;
    /**
    * @type array | undefined
    */
    features?: FlatFeatureDto[] | undefined;
};
