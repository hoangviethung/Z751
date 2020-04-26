export class ResultModel<T> {
	public data: T
	public code: number
	public message: string

	public constructor(init?: Partial<ResultModel<T>>) {
		Object.assign(this, init)
	}
}
