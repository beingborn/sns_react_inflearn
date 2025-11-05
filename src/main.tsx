import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0, // 개발하는 동안에는 0으로 설정하는게 일반적
            gcTime: 5 * 60 * 1000, // 캐시 데이터 제거

            refetchOnMount: true,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchInterval: false,
        },
    },
});

/*
    Query Client => 모든 서버 상태를 보관하는 일종의 저장소 : Store
*/

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <App />
        </QueryClientProvider>
    </BrowserRouter>,
);
