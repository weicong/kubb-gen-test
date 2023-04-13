export type UserDto = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @type string
    */
    userName: string;
    /**
    * @type string
    */
    name: string;
    /**
    * @type string
    */
    surname: string;
    /**
    * @type string email
    */
    emailAddress: string;
    /**
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @type string | undefined
    */
    fullName?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    lastLoginTime?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type array | undefined
    */
    roleNames?: string[] | undefined;
};
