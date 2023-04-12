import type { EditionSelectDto } from "./EditionSelectDto";
import type { NameValueDto } from "./NameValueDto";

export type EditionWithFeaturesDto = {
    edition?: EditionSelectDto | undefined;
    /**
    * @type array | undefined
    */
    featureValues?: NameValueDto[] | undefined;
};
