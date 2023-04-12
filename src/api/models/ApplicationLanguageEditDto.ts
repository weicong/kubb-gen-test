export type ApplicationLanguageEditDto = {
    /**
    * @type integer | undefined int32
    */
    id?: number | undefined;
    /**
    * @type string
    */
    name: string;
    /**
    * @type string | undefined
    */
    icon?: string | undefined;
    /**
    * @description Mapped from Language.IsDisabled with using manual mapping in CustomDtoMapper.cs
    * @type boolean | undefined
    */
    isEnabled?: boolean | undefined;
};
