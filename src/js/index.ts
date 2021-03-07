// function hello(name: string): string {
//     return `Hello, ${name}!`;
// }

// // console.log(hello("World"));
// console.log(hello("Typescript"))
import { ServerAPI } from "./serverModule";

class Main {
    constructor() {
        // serverModuleのなかのserverAPIクラスのインスタンスを作成
        const serverAPI = new ServerAPI();
        // ServerAPIの関数を実行
        serverAPI.initServer();
    }
}

new Main();

// class Main {
//     constructor() {
//         const server: http.Server = http.createServer(
//             (request: http.IncomingMessage, response: http.ServerResponse) => 
//                 this.requestHandler(request, response)
//         );
//         server.listen("5000");
//         // ログ出力
//         console.log("http://localhost:5000 へ！");
//     }
//     private requestHandler(
//         request: http.IncomingMessage,
//         response: http.ServerResponse
//     ): void {
//         response.end("Hello! Node.js with Typescript")
//     }
// }

// new Main();