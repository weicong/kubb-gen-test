
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DownloadWebLogsRequest, DownloadWebLogsResponse } from "../../models/WebLog/DownloadWebLogs";

        /**
* @link /api/services/app/WebLog/DownloadWebLogs
*/
        export function useDownloadWebLogs <TData = DownloadWebLogsResponse, TError = unknown, TVariables = DownloadWebLogsRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/WebLog/DownloadWebLogs`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    