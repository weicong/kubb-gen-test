import type { EditionEditDto } from "./EditionEditDto";
import type { NameValueDto } from "./NameValueDto";

export type UpdateEditionDto = {
    edition: EditionEditDto;
    /**
    * @type array
    */
    featureValues: NameValueDto[];
};
