import type { IInputType } from "./IInputType";

export type GetAllEntityDynamicParameterValuesOutputItem = {
    /**
    * @type integer | undefined int32
    */
    entityDynamicParameterId?: number | undefined;
    /**
    * @type string | undefined
    */
    parameterName?: string | undefined;
    inputType?: IInputType | undefined;
    /**
    * @type array | undefined
    */
    selectedValues?: string[] | undefined;
    /**
    * @type array | undefined
    */
    allValuesInputTypeHas?: string[] | undefined;
};
