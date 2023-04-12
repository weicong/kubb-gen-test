import type { EditionEditDto } from "./EditionEditDto";
import type { NameValueDto } from "./NameValueDto";
import type { FlatFeatureDto } from "./FlatFeatureDto";

export type GetEditionEditOutput = {
    edition?: EditionEditDto | undefined;
    /**
    * @type array | undefined
    */
    featureValues?: NameValueDto[] | undefined;
    /**
    * @type array | undefined
    */
    features?: FlatFeatureDto[] | undefined;
};
