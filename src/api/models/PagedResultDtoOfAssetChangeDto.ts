import type { AssetChangeDto } from "./AssetChangeDto";

export type PagedResultDtoOfAssetChangeDto = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @type array | undefined
    */
    items?: AssetChangeDto[] | undefined;
};
