export type CreateUserDto = {
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
    * @type array | undefined
    */
    roleNames?: string[] | undefined;
    /**
    * @type string
    */
    password: string;
};
