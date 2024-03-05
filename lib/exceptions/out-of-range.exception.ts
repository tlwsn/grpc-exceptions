import { Status } from "@grpc/grpc-js/build/src/constants";
import { GrpcBaseException } from "./base.exception";

export class GrpcOutOfRangeException extends GrpcBaseException {
    constructor(message?: string) {
        super(Status.OUT_OF_RANGE, message || "OUT_OF_RANGE");
    }
}
