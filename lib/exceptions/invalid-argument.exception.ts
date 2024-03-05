import { Status } from "@grpc/grpc-js/build/src/constants";
import { GrpcBaseException } from "./base.exception";

export class GrpcInvalidArgumentException extends GrpcBaseException {
    constructor(message?: string) {
        super(Status.INVALID_ARGUMENT, message || "INVALID_ARGUMENT");
    }
}
