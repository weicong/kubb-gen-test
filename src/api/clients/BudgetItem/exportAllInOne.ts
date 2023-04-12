
import client from "../../../utils/axios-client";
import type { ExportAllInOneRequest, ExportAllInOneResponse } from "../../models/BudgetItem/ExportAllInOne";

      /**
* @summary 导出到一个包含多个Sheet的Excel文件
* @link /api/services/app/BudgetItem/ExportAllInOne
*/
      export function exportAllInOne <TData = ExportAllInOneResponse, TVariables = ExportAllInOneRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetItem/ExportAllInOne`,
          data,
          
        });
      };
    