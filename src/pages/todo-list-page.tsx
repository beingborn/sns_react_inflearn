import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodosData } from "@/hooks/quries/use-todos-data";

function TodoList() {
    const { data: todoIds, isLoading, error } = useTodosData();

    if (error) return <div>에러남 ㅋ</div>;
    if (isLoading) return <div>로딩 중...</div>;

    return (
        <>
            {todoIds?.map((id) => (
                <TodoItem key={id} id={id} />
            ))}
        </>
    );
}

export default function TodoListPage() {
    return (
        <div className="flex flex-col gap-5 p-5">
            <h1 className="text-2xl font-bold">Todo</h1>
            <TodoEditor />
            <TodoList />
        </div>
    );
}
