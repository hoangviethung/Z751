export class LoadingService {
	private static loadings: any[] = []

	add(loading: any) {
		// add loading to array of active modals
		LoadingService.loadings.push(loading)
	}

	remove(id: string = 'global-loading') {
		// remove loading from array of active modals
		LoadingService.loadings = LoadingService.loadings.filter(
			(x) => x.id !== id
		)
	}

	open(id: string = 'global-loading') {
		// open loading specified by id
		const loading: any = LoadingService.loadings.filter(
			(x) => x.id === id
		)[0]
		loading.open()
	}

	close(id: string = 'global-loading') {
		// close loading specified by id
		const loading: any = LoadingService.loadings.filter(
			(x) => x.id === id
		)[0]
		loading.close()
	}
}
