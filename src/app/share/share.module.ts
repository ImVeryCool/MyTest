import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgxEchartsModule} from 'ngx-echarts';
import {DaterangepickerDirective} from "../directive/daterangepicker.directive";
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    NgZorroAntdModule
  ],
  declarations: [
    DaterangepickerDirective
  ],
  exports: [
    DaterangepickerDirective,
    NgxEchartsModule,
    NgZorroAntdModule
  ],
  providers   : [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class ShareModule { }
