import { Component, OnInit, TemplateRef, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush // 更改变更检测策略，OnPush 只有在 当前 Input依赖的值发生变化后才重新检测该页面是否改变
})
export class WyCarouselComponent implements OnInit {
  @Input() activeIndex = 0;

  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();

  /**
   * static 在变更检测前解析模板 还是之后  true: 之前
   * 如果是动态的，则需要设置为 false  如：ng-if
   */
  @ViewChild('dot', { static: true }) dotRef: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.changeSlide.emit(type);
  }

}
