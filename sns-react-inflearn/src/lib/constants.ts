export const API_URL = "http://localhost:3000";

/*
    Query Key Factory
    같은 쿼리키 값을 가지는 객체 또한 캐시 데이터 무효화를
    시키지 않기 위해, 보통 상수로 구조화해서 중복을 막는다.
*/
export const QUERY_KEYS = {
    todo: {
        all: ["todo"],
        list: ["todo", "list"],
        detail: (id: string) => ["todo", "detail", id],
    },
};
