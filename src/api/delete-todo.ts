import { API_URL } from "@/lib/constants";

export async function deleteTodo(id: string) {
    const response = await fetch(`${API_URL}/todos/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) throw new Error("Create Todo Failed");

    return response.json();
}
