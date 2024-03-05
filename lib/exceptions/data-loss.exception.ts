import { Status } from "@grpc/grpc-js/build/src/constants";
import { GrpcBaseException } from "./base.exception";

export class GrpcDataLossException extends GrpcBaseException {
    constructor(message?: string) {
        super(Status.DATA_LOSS, message || "DATA_LOSS");
    }
}
