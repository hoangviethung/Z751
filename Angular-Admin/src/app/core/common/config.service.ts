import { Injectable, Injector } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { AppConsts } from '../constant/AppConsts'
import { Config } from 'protractor'
import { FuncHelper } from '../helpers/function-helper'
import { Queue } from '../algorithms/datastructures/queue.structure'
import { environment } from '../../../environments/environment'

@Injectable({
	providedIn: 'root',
})
export class ConfigService {
	_queue: Queue<() => void>

	constructor(private httpClient: HttpClient) {
		this._queue = new Queue()
	}

	public reqConfig() {
		return this.httpClient.get(
			`${AppConsts.configUrl}?${Math.round(
				new Date().getTime() / AppConsts.expiryTime
			)}`
		)

		// Nếu muốn config file theo environment
		// if (environment.production)
		// {
		//   return this.httpClient.get(`${AppConsts.configUrl}?${Math.round(new Date().getTime() / AppConsts.expiryTime)}`);
		// }
		// else
		// {
		//   return this.httpClient.get(`${AppConsts.configDevUrl}?${Math.round(new Date().getTime() / AppConsts.expiryTime)}`);
		// }
	}

	public getConfig(callback: () => void): void {
		if (AppConsts.isLoaded) {
			callback()
		} else {
			this.pushEvent(callback)
			this.reqConfig().subscribe((data: Config) => {
				AppConsts.isLoaded = true

				const props = Object.getOwnPropertyNames(data)

				for (let i = 0; i < props.length; i++) {
					if (!FuncHelper.isNull(data[props[i]])) {
						try {
							AppConsts[props[i]] = FuncHelper.isNull(
								data[props[i]]
							)
								? AppConsts[props[i]]
								: data[props[i]]
						} catch (e) {}
					}
				}

				while (true) {
					const cb = this._queue.pop()
					if (FuncHelper.isFunction(cb)) {
						cb()
					} else {
						break
					}
				}
			})
		}
	}

	public pushEvent(callback: () => void) {
		if (!AppConsts.isLoaded) {
			this._queue.push(callback)
		} else {
			callback()
		}
	}
}

export function HttpLoaderFactory(injector: Injector) {
	const configService = injector.get(ConfigService)
	return () => configService.getConfig(() => {})
}
