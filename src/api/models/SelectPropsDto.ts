import type { SelectOptionDto } from "./SelectOptionDto";

export type SelectPropsDto = {
    /**
    * @type array | undefined
    */
    options?: SelectOptionDto[] | undefined;
    /**
    * @description 支持清除
    * @type boolean | undefined
    */
    allowClear?: boolean | undefined;
    /**
    * @description 默认
    * @type integer | undefined int64
    */
    defaultValue?: number | undefined;
};
