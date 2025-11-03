import { deleteTodo } from "@/api/delete-todo";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router";
import { Button } from "../ui/button";

export default function TodoItem({
    id,
    content,
}: {
    id: string;
    content: string;
}) {
    const { mutate } = useMutation({
        mutationFn: deleteTodo,
        onMutate: () => {},
        onSuccess: () => {
            alert("삭제 성공!");
            window.location.reload();
        },
        onError: (error) => {
            alert(error.message);
        },
    });

    const handleDeleteClick = () => {
        mutate(id);
    };

    return (
        <div className="flex items-center justify-between border p-2">
            <Link to={`/todolist/${id}`}>{content}</Link>
            <Button variant="destructive" onClick={handleDeleteClick}>
                삭제
            </Button>
        </div>
    );
}
