import type { IValueValidator } from "./IValueValidator";
import type { LocalizableComboboxItemSourceDto } from "./LocalizableComboboxItemSourceDto";

export type FeatureInputTypeDto = {
    /**
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @type object | undefined
    */
    attributes?: {
        [key: string]: object;
    } | undefined;
    validator?: IValueValidator | undefined;
    itemSource?: LocalizableComboboxItemSourceDto | undefined;
};
