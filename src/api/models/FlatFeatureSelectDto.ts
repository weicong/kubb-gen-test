import type { IInputType } from "./IInputType";

export type FlatFeatureSelectDto = {
    /**
    * @type string | undefined
    */
    parentName?: string | undefined;
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type string | undefined
    */
    displayName?: string | undefined;
    /**
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @type string | undefined
    */
    defaultValue?: string | undefined;
    inputType?: IInputType | undefined;
    /**
    * @type string | undefined
    */
    textHtmlColor?: string | undefined;
};
