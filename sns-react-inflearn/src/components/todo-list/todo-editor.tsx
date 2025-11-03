import { useCreateTodoMutation } from "@/hooks/mutations/use-create-todo-mutation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function TodoEditor() {
    /* 
        useMutation > 데이터 수정에 활용되는 tanstack Hook
        비동기 처리를 함께 발송한다.
     */

    // mutate > 원하는 시점의 함수를 실행하기 위해
    // 굳이 mutate에 넣어서 관리하는 이유 > createTodo 와 같은
    // 수정 함수의 상태또한 관리하기위해
    const { mutate, isPending } = useCreateTodoMutation();
    const [content, setContent] = useState("");

    const handleAddClick = () => {
        if (content.trim() === "") return;

        mutate(content);
        setContent("");
    };

    return (
        <div className="gap2 flex items-center">
            <Input
                placeholder="새로운 할일을 입력하세요."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Button disabled={isPending} onClick={handleAddClick}>
                추가
            </Button>
        </div>
    );
}
