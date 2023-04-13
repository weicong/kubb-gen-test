export type ResetPasswordDto = {
    /**
    * @type string
    */
    adminPassword: string;
    /**
    * @type integer int64
    */
    userId: number;
    /**
    * @type string
    */
    newPassword: string;
};
