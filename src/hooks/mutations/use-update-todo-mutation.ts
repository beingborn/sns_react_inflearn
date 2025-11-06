import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTodoMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateTodo,

        // mutate 함수에 사용되는 매개변수
        onMutate: async (updatedTodo) => {
            // 수정 중 데이터 조회요청 취소 (수정 시점이 끝난 후 덮여씌워짐 방지)
            await queryClient.cancelQueries({
                queryKey: QUERY_KEYS.todo.list,
            });

            const prevTodos = queryClient.getQueryData<Todo[]>(
                QUERY_KEYS.todo.list,
            );
            queryClient.setQueriesData<Todo[]>(
                { queryKey: QUERY_KEYS.todo.list },
                (prevTodos) => {
                    if (!prevTodos) return [];
                    return prevTodos.map((prevTodo) =>
                        prevTodo.id === updatedTodo.id
                            ? { ...prevTodo, ...updatedTodo }
                            : prevTodo,
                    );
                },
            );
            return {
                prevTodos,
            };
        },
        onError: (error, variable, context) => {
            if (context && context.prevTodos) {
                queryClient.setQueriesData<Todo[]>(
                    { queryKey: QUERY_KEYS.todo.list },
                    context.prevTodos,
                );
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: QUERY_KEYS.todo.list,
            });
        },
    });
}
