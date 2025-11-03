import { createTodo } from "@/api/create-todo";
import { useMutation } from "@tanstack/react-query";

export function useCreateTodoMutation() {
    return useMutation({
        mutationFn: createTodo,
        onMutate: () => {}, // 요청중일 때
        onSettled: () => {}, // 요청완료시
        onSuccess: () => {
            alert("생성 되었습니다.");
            window.location.reload();
        }, // 요청 성공시
        onError: (error) => {
            window.alert("요청이 실패했습니다.");
            console.log(error.message);
        }, // 에러 발생시
    });
}
