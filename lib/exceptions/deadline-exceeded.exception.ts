import { Status } from "@grpc/grpc-js/build/src/constants";
import { GrpcBaseException } from "./base.exception";

export class GrpcDeadlineExceededException extends GrpcBaseException {
    constructor(message?: string) {
        super(Status.DEADLINE_EXCEEDED, message || "DEADLINE_EXCEEDED");
    }
}
