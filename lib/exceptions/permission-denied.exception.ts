import { Status } from "@grpc/grpc-js/build/src/constants";
import { GrpcBaseException } from "./base.exception";

export class GrpcPermissionDeniedException extends GrpcBaseException {
    constructor(message?: string) {
        super(Status.PERMISSION_DENIED, message || "PERMISSION_DENIED");
    }
}
