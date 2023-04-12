
import client from "../../../utils/axios-client";
import type { DeleteEditionRequest, DeleteEditionResponse, DeleteEditionQueryParams } from "../../models/Edition/DeleteEdition";

      /**
* @link /api/services/app/Edition/DeleteEdition
*/
      export function deleteEdition <TData = DeleteEditionResponse, TVariables = DeleteEditionRequest>( data: TVariables, params?: DeleteEditionQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/Edition/DeleteEdition`,
          data,
          params,
        });
      };
    