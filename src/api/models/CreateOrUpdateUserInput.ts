import type { UserEditDto } from "./UserEditDto";

export type CreateOrUpdateUserInput = {
    user: UserEditDto;
    /**
    * @type array
    */
    assignedRoleNames: string[];
    /**
    * @type boolean | undefined
    */
    sendActivationEmail?: boolean | undefined;
    /**
    * @type boolean | undefined
    */
    setRandomPassword?: boolean | undefined;
    /**
    * @type array | undefined
    */
    organizationUnits?: number[] | undefined;
};
