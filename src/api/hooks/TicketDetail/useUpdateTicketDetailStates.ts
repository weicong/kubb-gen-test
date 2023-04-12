
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateTicketDetailStatesRequest, UpdateTicketDetailStatesResponse } from "../../models/TicketDetail/UpdateTicketDetailStates";

        /**
* @link /api/services/app/TicketDetail/UpdateTicketDetailStates
*/
        export function useUpdateTicketDetailStates <TData = UpdateTicketDetailStatesResponse, TError = unknown, TVariables = UpdateTicketDetailStatesRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/TicketDetail/UpdateTicketDetailStates`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    