import { Status } from "@grpc/grpc-js/build/src/constants";
import { GrpcBaseException } from "./base.exception";

export class GrpcCanceledException extends GrpcBaseException {
    constructor(message?: string) {
        super(Status.CANCELLED, message || "CANCELLED");
    }
}
