import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import type { Todo } from "@/types";
import { Link } from "react-router";
import { Button } from "../ui/button";

export default function TodoItem({ id, content, isDone }: Todo) {
    const { mutate: updateTodo } = useUpdateTodoMutation();
    const { mutate: deleteTodo } = useDeleteTodoMutation();

    const handleDeleteClick = () => {
        deleteTodo(id);
    };

    const handleCheckboxClick = () => {
        updateTodo({
            id,
            isDone: !isDone,
        });
    };

    return (
        <div className="flex items-center justify-between border p-2">
            <div className="flex gap-5">
                <input
                    type="checkbox"
                    checked={isDone}
                    onClick={handleCheckboxClick}
                />
                <Link to={`/todolist/${id}`}>{content}</Link>
            </div>
            <Button variant="destructive" onClick={handleDeleteClick}>
                삭제
            </Button>
        </div>
    );
}
