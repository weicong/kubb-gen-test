import type { PayBillDto } from "./PayBillDto";

export type PagedResultDtoOfPayBillDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: PayBillDto[] | undefined;
};
