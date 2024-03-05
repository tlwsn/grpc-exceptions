import { Status } from "@grpc/grpc-js/build/src/constants";
import { GrpcBaseException } from "./base.exception";

export class GrpcFailedPreconditionException extends GrpcBaseException {
    constructor(message?: string) {
        super(Status.FAILED_PRECONDITION, message || "FAILED_PRECONDITION");
    }
}
