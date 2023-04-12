export type CreateUserDelegationDto = {
    /**
    * @type integer int64
    */
    targetUserId: number;
    /**
    * @type string date-time
    */
    startTime: string;
    /**
    * @type string date-time
    */
    endTime: string;
};
