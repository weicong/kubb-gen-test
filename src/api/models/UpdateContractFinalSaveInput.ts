import type { ContractFinalSaveStatus } from "./ContractFinalSaveStatus";

export type UpdateContractFinalSaveInput = {
    finalSave?: ContractFinalSaveStatus | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
