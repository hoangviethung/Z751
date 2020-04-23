const dateFormat = require('dateformat')

export class FuncHelper {
	public static callFuncCheckNotNull(func: () => void = null) {
		if (func != null) {
			func()
		}
	}

	public static isNull(value: any): boolean {
		return value == null || value === ''
	}

	public static isFunction(f): f is Function {
		return f instanceof Function
	}

	public static syncData(from: any, to: any): any {
		let rs = to
		if (FuncHelper.isNull(rs)) {
			rs = {}
		}
		const props = Object.getOwnPropertyNames(from)
		for (let i = 0; i < props.length; i++) {
			rs[props[i]] = from[props[i]]
		}
		return rs
	}

	public static getTime(date?: any) {
		try {
			const dtemp = new Date(date)
			return dtemp != null ? dtemp.getTime() : 0
		} catch (e) {
			return 0
		}
	}

	public static clone(item: any): any {
		if (!item) {
			return item
		} // null, undefined values check

		// tslint:disable-next-line: prefer-const
		let types = [Number, String, Boolean],
			result: any

		// normalizing primitives if someone did new String('aaa'), or new Number('444');
		types.forEach(function (type) {
			if (item instanceof type) {
				result = type(item)
			}
		})

		// tslint:disable-next-line: triple-equals
		if (typeof result == 'undefined') {
			if (Object.prototype.toString.call(item) === '[object Array]') {
				result = []
				item.forEach((child: any, index: number, array: any) => {
					result[index] = FuncHelper.clone(child)
				})
			} else if (typeof item === 'object') {
				// testing that this is DOM
				if (item.nodeType && typeof item.cloneNode === 'function') {
					result = item.cloneNode(true)
				} else if (!item.prototype) {
					// check that this is a literal
					if (item instanceof Date) {
						result = new Date(item)
					} else {
						// it is an object literal
						result = {}
						// tslint:disable-next-line: forin
						for (const i in item) {
							result[i] = FuncHelper.clone(item[i])
						}
					}
				} else {
					result = item
				}
			} else {
				result = item
			}
		}

		return result
	}

	public static removeItemInArray<T>(
		array: T[],
		key: string,
		value: any
	): T[] {
		const result: T[] = []
		for (let i = 0; i < array.length; i++) {
			if (array[i][key] !== value) {
				result.push(array[i])
			}
		}
		return result
	}

	public static updateItemInArray<T>(
		array: T[],
		key: string,
		value: any,
		item: T
	): T[] {
		const result: T[] = []
		for (let i = 0; i < array.length; i++) {
			if (array[i][key] !== value) {
				result.push(array[i])
			} else {
				result.push(item)
			}
		}
		return result
	}

	public static uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
			/[xy]/g,
			function (c) {
				// tslint:disable-next-line: no-bitwise
				const r = (Math.random() * 16) | 0,
					v = c === 'x' ? r : (r & 0x3) | 0x8
				return v.toString(16)
			}
		)
	}

	public static getCurrenyFormat(num: number): string {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
	}

	public static copyStringToClipboard(str: string) {
		// Create new element
		const el = document.createElement('textarea')
		// Set value (string to be copied)
		el.value = str
		// Set non-editable to avoid focus and move outside of view
		el.setAttribute('readonly', '')
		// el.style = {position: 'absolute', left: '-9999px'};
		document.body.appendChild(el)
		// Select text inside element
		el.select()
		// Copy text to clipboard
		document.execCommand('copy')
		// Remove temporary element
		document.body.removeChild(el)
	}

	public static pad(num: number, size: number): string {
		let s = num + ''
		while (s.length < size) {
			s = '0' + s
		}
		return s
	}

	public static convertNumberToTime(
		num: number,
		isAMPM: boolean = true
	): string {
		const hours = Math.floor(num / 3600)
		const minutes = Math.floor(Math.floor(num % 3600) / 60)
		const seconds = Math.floor(num % 60)
		if (isAMPM) {
			// tslint:disable-next-line: max-line-length
			return `${FuncHelper.pad(
				hours > 12 ? hours - 12 : hours,
				2
			)}:${FuncHelper.pad(minutes, 2)}:${FuncHelper.pad(seconds, 2)} ${
				hours > 12 ? 'PM' : 'AM'
			}`
		} else {
			return `${FuncHelper.pad(hours, 2)}:${FuncHelper.pad(
				minutes,
				2
			)}:${FuncHelper.pad(seconds, 2)}`
		}
	}

	public static generateWhereString(filters: any[]): string {
		let result = ''

		filters.forEach((filter) => {
			if (filter.value !== undefined) {
				if (filter.type === 'text') {
					result += `[where][${filter.key}][like]=${filter.value}&`
				}
				if (filter.type === 'date') {
					const today = new Date(filter.value)
					const tomorrow = new Date(filter.value)
					tomorrow.setDate(tomorrow.getDate() + 1)
					result += `[where][and[${filter.key}][gte]=${dateFormat(
						today,
						'mm/dd/yyyy'
					)}&`
					result += `[where][and[${filter.key}][lt]=${dateFormat(
						tomorrow,
						'mm/dd/yyyy'
					)}&`
				} else {
					result += `[where][${filter.key}]=${filter.value}&`
				}
			}
		})

		if (filters.length > 0) {
			result = result.substr(0, result.length - 1)
		}

		return result
	}

	public static generateFilterString(filters: any[]): string {
		let result = ''

		filters.forEach((filter) => {
			if (filter.value !== undefined) {
				if (filter.type === 'text') {
					result += `[filter][where][${filter.key}][like]=${filter.value}&`
				}
				if (filter.type === 'date') {
					const today = new Date(filter.value)
					const tomorrow = new Date(filter.value)
					tomorrow.setDate(tomorrow.getDate() + 1)
					result += `[filter][where][and[${
						filter.key
					}][gte]=${dateFormat(today, 'mm/dd/yyyy')}&`
					result += `[filter][where][and[${
						filter.key
					}][lt]=${dateFormat(tomorrow, 'mm/dd/yyyy')}&`
				} else {
					result += `[filter][where][${filter.key}]=${filter.value}&`
				}
			}
		})

		if (filters.length > 0) {
			result = result.substr(0, result.length - 1)
		}

		return result
	}
}
