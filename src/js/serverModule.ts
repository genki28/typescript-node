import * as http from "http";

export class ServerAPI {
    public initServer(): void {
        const server = http.createServer(
            (request: http.IncomingMessage, response: http.ServerResponse) => 
                this.requestHandler(request, response)
        );
        server.listen("5000");

        // ログを出力
        console.log("http://localhost:5000 へアクセスアクセスぅ！")
    }
    /**
    * サーバーリクエスト時の関数
    */
   private requestHandler(
       request: http.IncomingMessage,
       response: http.ServerResponse
    ): void {
        response.end("Cal From Server API Class")
    }
}