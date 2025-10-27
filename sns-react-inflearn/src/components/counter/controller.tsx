import { useCountStore } from "@/store/count";
import { Button } from "../ui/button";

/* Zustand는 스토어의 한가지 값이라도 수정이 되면 리렌더링 된다. */
export default function Controller() {
    // 셀렉터 함수 : 스토어로부터 특정 값만 가져오게 함
    const { increase, decrease } = useCountStore((store) => store.actions);

    return (
        <div>
            <Button onClick={increase}>증가</Button>
            <Button variant="destructive" onClick={decrease}>
                감소
            </Button>
        </div>
    );
}
