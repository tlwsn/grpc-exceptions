import { Status } from "@grpc/grpc-js/build/src/constants";
import { GrpcBaseException } from "./base.exception";

export class GrpcAlreadyExistsException extends GrpcBaseException {
    constructor(message?: string) {
        super(Status.ALREADY_EXISTS, message || "ALREADY_EXISTS");
    }
}
