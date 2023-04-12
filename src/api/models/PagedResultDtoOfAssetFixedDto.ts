import type { AssetFixedDto } from "./AssetFixedDto";

export type PagedResultDtoOfAssetFixedDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: AssetFixedDto[] | undefined;
};
