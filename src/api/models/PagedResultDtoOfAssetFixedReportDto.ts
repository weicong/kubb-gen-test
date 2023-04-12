import type { AssetFixedReportDto } from "./AssetFixedReportDto";

export type PagedResultDtoOfAssetFixedReportDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: AssetFixedReportDto[] | undefined;
};
