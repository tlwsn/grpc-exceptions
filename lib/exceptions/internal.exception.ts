import { Status } from "@grpc/grpc-js/build/src/constants";
import { GrpcBaseException } from "./base.exception";

export class GrpcInternalException extends GrpcBaseException {
    constructor(message?: string) {
        super(Status.INTERNAL, message || "INTERNAL");
    }
}
