export enum ResultCode {
	FailMsg = -2,
	Fail = -1,
	Success = 0,
	Warning = 1,

	error404 = -11,
}

export enum Modes {
	default,
	publish,
	development,
}

export enum LoginType {
	internalUser = 1,
	contractor = 2,
}

export enum OrderStatuses {
	draft,
	todo,
	wip,
	review,
	accepted,
	done,
	paid,
}

export enum SOWStatuses {
	generated,
	voltageSigned,
	signed,
	aocGenerated,
	aocSigned,
	invoiceUploaded,
	postingAndPaymentRequested,
	postingAndPaymentApproved,
	readyToPay,
	paid,
}

export enum FileType {
	sow,
	aoc,
	invoice,
	postingAndPaymentRequest,
}
