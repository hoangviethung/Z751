import { Input, Injector, Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { LanguageService } from '../common/language.service'
import { AppConsts } from '../constant/AppConsts'
import {
	AlertService,
	InforAlert,
	SuccessAlert,
	ErrorAlert,
	QuestionAlert,
	WarningAlert,
} from '../alert/alert.service'
import { ConfigService } from '../common/config.service'
import { Router, ActivatedRoute } from '@angular/router'
import { ToastrService } from 'ngx-toastr'

@Injectable()
export abstract class BaseComponent {
	@Input() AppName: string
	@Input() lang: TranslateService
	@Input() langCurrent: string = 'en'

	public languageSvc: LanguageService
	public alertSvc: AlertService
	public configSvc: ConfigService
	public routerSvc: Router
	public toastSvc: ToastrService
	public activeRoute: ActivatedRoute

	constructor(injector: Injector) {
		this.lang = injector.get(TranslateService)
		this.languageSvc = injector.get(LanguageService)
		this.alertSvc = injector.get(AlertService)
		this.configSvc = injector.get(ConfigService)
		this.routerSvc = injector.get(Router)
		this.toastSvc = injector.get(ToastrService)
		this.activeRoute = injector.get(ActivatedRoute)

		const langCurrent = this.languageSvc.getLangCurrent()
		if (langCurrent !== undefined && langCurrent !== null) {
			this.langCurrent = langCurrent
		}
		this.lang.setDefaultLang(this.langCurrent)
		this.lang.use(this.langCurrent)
		this.useLanguage(this.langCurrent)
		this.configSvc.pushEvent(() => {
			this.AppName = AppConsts.appName
		})

		this.evenLangChanged = this.evenLangChanged.bind(this)
		this.languageSvc.pushEventLangChanged(this.evenLangChanged)
		this.languageSvc.setTranslateService(this.lang)
	}

	evenLangChanged(lang: string) {
		this.langCurrent = lang
	}

	useLanguage(lang: string) {
		this.languageSvc.useLanguage(lang).then(() => {
			this.langCurrent = lang
		})
	}

	showInfor(title: string, isToast: boolean = true) {
		if (isToast) {
			this.toastSvc.info(this.lang.instant(title))
		} else {
			this.alertSvc.alert(
				new InforAlert({
					title: this.lang.instant(title),
				})
			)
		}
	}

	showSuccess(title: string, isToast: boolean = true) {
		if (isToast) {
			this.toastSvc.success(this.lang.instant(title))
		} else {
			this.alertSvc.alert(
				new SuccessAlert({
					title: this.lang.instant(title),
				})
			)
		}
	}

	showWarnning(title: string, isToast: boolean = true) {
		if (isToast) {
			this.toastSvc.warning(this.lang.instant(title))
		} else {
			this.alertSvc.alert(
				new WarningAlert({
					title: this.lang.instant(title),
				})
			)
		}
	}

	showError(title: string, isToast: boolean = true) {
		if (isToast) {
			this.toastSvc.error(this.lang.instant(title))
		} else {
			this.alertSvc.alert(
				new ErrorAlert({
					title: this.lang.instant(title),
				})
			)
		}
	}

	showYesNoQuestion(question: string, okFunction: () => void) {
		this.alertSvc.alert(
			new QuestionAlert({
				title: this.lang.instant(question) + ' ?',
				confirmButtonText: this.lang.instant(
					'Common.Alert.ConfirmQuestionText'
				),
				cancelButtonText: this.lang.instant(
					'Common.Alert.CancelQuestionText'
				),
				onConfirm: okFunction,
			})
		)
	}
}
