import type { GetAllSendAttemptsOutput } from "./GetAllSendAttemptsOutput";

export type PagedResultDtoOfGetAllSendAttemptsOutput = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: GetAllSendAttemptsOutput[] | undefined;
};
