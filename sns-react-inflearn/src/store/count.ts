import { create } from "zustand";

type Store = {
    count: number;
    actions: {
        increase: () => void;
        decrease: () => void;
    };
};

// 왜 여기다 넣어도 되는거지.. 함수도 객체 취급이라 그런가..

export const useCountStore = create<Store>((set, get) => ({
    count: 0,
    actions: {
        increase: () => {
            set((store) => ({
                count: store.count + 1,
            }));
        },
        decrease: () => {
            set((store) => ({
                count: store.count - 1,
            }));
        },
    },
}));

// Creat > State, Action을 포함한 함수
export const useCount = () => {
    const count = useCountStore((store) => store.count);

    return count;
};

export const useIncreaseCount = () => {
    const increase = useCountStore((store) => store.actions.increase);

    return increase;
};

export const useDecreaseCount = () => {
    const decrease = useCountStore((store) => store.actions.decrease);

    return decrease;
};
