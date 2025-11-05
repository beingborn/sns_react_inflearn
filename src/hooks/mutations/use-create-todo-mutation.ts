import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodoMutation() {
    /* 
        일종의 저장소, 서버 상태를 저장하는 저장소  
        
        Cache, State등이 저장되어 있음
    */
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createTodo,
        onMutate: () => {}, // 요청중일 때
        onSettled: () => {}, // 요청완료시
        onSuccess: () => {
            // window.location.reload();

            // todos 쿼리키를 갖는 캐시 데이터 무효화
            queryClient.invalidateQueries({
                // queryKey: ["todos"],
                queryKey: QUERY_KEYS.todo.list,
            });
            /*
                reload -> 사용자 경험 저하
                데이터만 리페칭 -> todos data를 가져오는 
                훅을 재실행 > todos 데이터 캐시 데이터 무효화 > 데이터 리페칭
            */
        }, // 요청 성공시
        onError: (error) => {
            window.alert("요청이 실패했습니다.");
            console.log(error.message);
        }, // 에러 발생시
    });
}
