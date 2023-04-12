import type { PaymentStatus } from "./PaymentStatus";

export type UpdateContractPayStateInput = {
    payState?: PaymentStatus | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
