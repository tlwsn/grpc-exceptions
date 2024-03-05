import { Status } from "@grpc/grpc-js/build/src/constants";
import { GrpcBaseException } from "./base.exception";

export class GrpcUnavailableException extends GrpcBaseException {
    constructor(message?: string) {
        super(Status.UNAVAILABLE, message || "UNAVAILABLE");
    }
}
