import type { FileDto } from "./FileDto";
import type { ImportMode } from "./ImportMode";
import type { TicketDetailDto } from "./TicketDetailDto";

export type ImportAllInputDtoOfTicketDetailDto = {
    /**
    * @description TempFileCache 文件
    * @type array | undefined
    */
    files?: FileDto[] | undefined;
    mode?: ImportMode | undefined;
    initialValues?: TicketDetailDto | undefined;
};
