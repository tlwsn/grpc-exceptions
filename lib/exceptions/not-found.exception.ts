import { Status } from "@grpc/grpc-js/build/src/constants";
import { GrpcBaseException } from "./base.exception";

export class GrpcNotFoundException extends GrpcBaseException {
    constructor(message?: string) {
        super(Status.NOT_FOUND, message || "NOT_FOUND");
    }
}
