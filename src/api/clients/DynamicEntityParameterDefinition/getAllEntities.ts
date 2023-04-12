
import client from "../../../utils/axios-client";
import type { GetAllEntitiesResponse } from "../../models/DynamicEntityParameterDefinition/GetAllEntities";

      /**
* @link /api/services/app/DynamicEntityParameterDefinition/GetAllEntities
*/
      export function getAllEntities <TData = GetAllEntitiesResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/DynamicEntityParameterDefinition/GetAllEntities`,
          
        });
      };
    