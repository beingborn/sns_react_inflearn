import { useTodoDataById } from "@/hooks/quries/use-todo-data-by-id";
import { useParams } from "react-router";

export default function TodoDetailPage() {
    const params = useParams();
    const id = params.id;

    const { data, isLoading, error } = useTodoDataById(String(id));

    if (error) return <div>에러남 ㅋ</div>;
    if (isLoading) return <div>로딩 중...</div>;

    return (
        <div>
            <h1>{data?.id}</h1>
            <h1>{data?.content}</h1>
        </div>
    );
}
