export namespace Table {
	export interface Pageable {
		pageNum: number;
		pageSize: number;
		total: number;
	}
}

export namespace HandleData {
	export type MessageType = "" | "success" | "warning" | "info" | "error";
}
