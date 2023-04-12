import type { GetAllFundSourcesInput } from "../GetAllFundSourcesInput";
import type { PagedResultDtoOfFundSourceDto } from "../PagedResultDtoOfFundSourceDto";

export type GetAllQueryParams = {
    input?: GetAllFundSourcesInput | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfFundSourceDto;
