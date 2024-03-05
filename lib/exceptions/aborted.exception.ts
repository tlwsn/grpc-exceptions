import { Status } from "@grpc/grpc-js/build/src/constants";
import { GrpcBaseException } from "./base.exception";

export class GrpcAbortedException extends GrpcBaseException {
    constructor(message?: string) {
        super(Status.ABORTED, message || "ABORTED");
    }
}
