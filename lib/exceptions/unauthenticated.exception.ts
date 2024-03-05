import { Status } from "@grpc/grpc-js/build/src/constants";
import { GrpcBaseException } from "./base.exception";

export class GrpcUnauthenticatedException extends GrpcBaseException {
    constructor(message?: string) {
        super(Status.UNAUTHENTICATED, message || "UNAUTHENTICATED");
    }
}
