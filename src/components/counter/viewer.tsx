import { useCountStore } from "@/store/count";

export default function Viewer() {
    const count = useCountStore((store) => store.count);

    return <div>{count}</div>;
}
