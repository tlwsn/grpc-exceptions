import { Status } from "@grpc/grpc-js/build/src/constants";
import { RpcException } from "@nestjs/microservices";

export class GrpcBaseException extends RpcException {
    constructor(code: Status, message: string) {
        super({
            code,
            message,
        });
    }
}
