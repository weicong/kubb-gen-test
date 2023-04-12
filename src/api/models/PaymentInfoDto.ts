import type { EditionSelectDto } from "./EditionSelectDto";

export type PaymentInfoDto = {
    edition?: EditionSelectDto | undefined;
    /**
    * @type number | undefined double
    */
    additionalPrice?: number | undefined;
};
