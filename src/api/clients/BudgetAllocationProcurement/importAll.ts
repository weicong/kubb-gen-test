
import client from "../../../utils/axios-client";
import type { ImportAllRequest, ImportAllResponse } from "../../models/BudgetAllocationProcurement/ImportAll";

      /**
* @summary 从 Excel 文件导入数据，导入记录对象为 TEntityDto。
* @link /api/services/app/BudgetAllocationProcurement/ImportAll
*/
      export function importAll <TData = ImportAllResponse, TVariables = ImportAllRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationProcurement/ImportAll`,
          data,
          
        });
      };
    