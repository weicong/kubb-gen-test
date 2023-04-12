import type { GetAllTicketTypesInput } from "../GetAllTicketTypesInput";
import type { PagedResultDtoOfTicketTypeDto } from "../PagedResultDtoOfTicketTypeDto";

export type GetAllQueryParams = {
    input?: GetAllTicketTypesInput | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfTicketTypeDto;
