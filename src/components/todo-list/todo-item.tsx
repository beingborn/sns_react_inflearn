import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import { useTodoDataById } from "@/hooks/quries/use-todo-data-by-id";
import { Link } from "react-router";
import { Button } from "../ui/button";

export default function TodoItem({ id }: { id: string }) {
    const { data: todo } = useTodoDataById(id, "LIST");
    if (!todo) throw new Error("Todo Data Undefined");

    const { mutate: updateTodo, isPending: isDeleteTodoPending } =
        useUpdateTodoMutation();
    const { mutate: deleteTodo } = useDeleteTodoMutation();

    const { content, isDone } = todo;

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
                    disabled={isDeleteTodoPending}
                    type="checkbox"
                    checked={isDone}
                    onChange={handleCheckboxClick}
                />
                <Link to={`/todolist/${id}`}>{content}</Link>
            </div>
            <Button
                disabled={isDeleteTodoPending}
                variant="destructive"
                onClick={handleDeleteClick}
            >
                삭제
            </Button>
        </div>
    );
}
