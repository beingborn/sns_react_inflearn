import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { QUERY_KEYS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

/*
    리페칭 되는 상황

    - 마운트
    - 윈도우 포커스 
    - 네트워크 재기동
    - 주기적인 리페치
*/

/* 
    Stale > 상한 데이터 
    위 상황 4가지 중 하나가 발생되면 
    데이터를 다시 불러옴
*/

export function useTodoDataById(id: string, type: "LIST" | "DETAIL") {
    return useQuery({
        queryFn: () => fetchTodoById(id),
        // 각각 아이템을 캐싱하기 위해서 id값 생성
        queryKey: QUERY_KEYS.todo.detail(id),
        staleTime: 1000,
        enabled: type == "DETAIL",
        // refetchOnMount: false,
        // refetchOnWindowFocus: false,
        // refetchOnReconnect: false,
        // refetchInterval: 1000,

        // inactive > 캐시데이터를 사용하고 있는 컴포넌트가 하나도 없는 상태
        // gcTime => Garbage Collecting Time => 더이상 사용되지 않는 메모리 정리
        gcTime: 5000,
    });
}
