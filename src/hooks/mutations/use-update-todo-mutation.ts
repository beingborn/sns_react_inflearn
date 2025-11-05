import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTodoMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateTodo,

        // mutate 함수에 사용되는 매개변수
        onMutate: (updatedTodo) => {
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
        },
    });
}
