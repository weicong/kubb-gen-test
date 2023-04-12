import type { FeatureInputTypeDto } from "./FeatureInputTypeDto";

export type FlatFeatureDto = {
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
    inputType?: FeatureInputTypeDto | undefined;
};
