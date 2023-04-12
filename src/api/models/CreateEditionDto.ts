import type { EditionCreateDto } from "./EditionCreateDto";
import type { NameValueDto } from "./NameValueDto";

export type CreateEditionDto = {
    edition: EditionCreateDto;
    /**
    * @type array
    */
    featureValues: NameValueDto[];
};
