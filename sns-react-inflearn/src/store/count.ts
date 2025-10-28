import { create } from "zustand";
import { combine, createJSONStorage, devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Store = {
    count: number;
    actions: {
        increase: () => void;
        decrease: () => void;
    };
};

/* 
    불변성 관리 -> Immer

    데이터 변경 시 원본을 직접 수정하는게 아니라, 새로운 객체 혹은 
    배열을 생성하여 업데이트해야한다.

    Immer는 복잡한 중첩 객체, 배열을 다룰 때 이를 쉽게 하기 위해 사용한다.
*/

/* 
    미들웨어 : 중간에 위치한 도구 

    combile 사용 시 : 첫번째 인수를 기준으로 타입을 자동으로 추론해준다.
    state를 기준으로 진행
*/

/* 
    subscribeWithSelector 

    리액트의 useEffect같은 기능
    특정 값이 변경될 때마다 콜백을 적용 가능
*/

export const useCountStore = create(
    devtools(
        persist(
            subscribeWithSelector(
                immer(
                    combine({ count: 0 }, (set, get) => ({
                        actions: {
                            increase: () => {
                                // set((state) => ({
                                //     count: state.count + 1,
                                // }));

                                set((state) => {
                                    state.count += 1;
                                });
                            },
                            decrease: () => {
                                // set((state) => ({
                                //     count: ,state.count - 1,
                                // }));
                                set((state) => {
                                    state.count -= 1;
                                });
                            },
                        },
                    })),
                ),
            ),
            {
                name: "count",

                // 선택적으로 로컬 스토리지에 저장
                partialize: (store) => ({
                    count: store.count,
                }),

                storage: createJSONStorage(() => sessionStorage),
            },
        ),
        {
            name: "countStore",
        },
    ),
);

useCountStore.subscribe(
    (store) => store.count,

    // listener
    (count, prevCount) => {
        console.log(count, prevCount);

        const store = useCountStore.getState();

        // useCountStore.setState((store) => { })
    },
);

// export const useCountStore = create<Store>((set, get) => ({
//     count: 0,
//     actions: {
//         increase: () => {
//             set((store) => ({
//                 count: store.count + 1,
//             }));
//         },
//         decrease: () => {
//             set((store) => ({
//                 count: store.count - 1,
//             }));
//         },
//     },
// }));

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
