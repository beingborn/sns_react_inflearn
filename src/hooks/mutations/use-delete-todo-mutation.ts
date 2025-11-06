import { deleteTodo } from "@/api/delete-todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteTodo,

        // 1. 캐시 무효화 -> invalidateQueries
        // 2. 수정 요청의 응답값 활용 -> onSuccess
        // 3. 낙관적 업데이트 -> onMutate
    });
}
