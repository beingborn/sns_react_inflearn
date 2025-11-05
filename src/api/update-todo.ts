import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export async function updateTodo(todo: Partial<Todo> & { id: string }) {
    const response = await fetch(`${API_URL}/todos/${todo.id}`, {
        method: "PATCH",
        body: JSON.stringify(todo),
    });

    if (!response.ok) throw new Error("Update Todo Failed");
    const data: Todo = await response.json();

    return data;
}

// 모두 선택적 프로퍼티로 갖되, id값은 필수
