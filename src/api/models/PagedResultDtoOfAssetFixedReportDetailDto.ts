import type { AssetFixedReportDetailDto } from "./AssetFixedReportDetailDto";

export type PagedResultDtoOfAssetFixedReportDetailDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: AssetFixedReportDetailDto[] | undefined;
};
