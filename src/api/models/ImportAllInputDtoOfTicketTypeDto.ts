import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { TicketTypeDto } from "./TicketTypeDto";

export type ImportAllInputDtoOfTicketTypeDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: TicketTypeDto | undefined;
};
