import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const worker =  setupWorker(...handlers);     // worker는 index.js에서 개발환경이면 start 서비스 워커. rest api 넣어주기
