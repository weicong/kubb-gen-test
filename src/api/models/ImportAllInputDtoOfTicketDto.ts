import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { TicketDto } from "./TicketDto";

export type ImportAllInputDtoOfTicketDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: TicketDto | undefined;
};
