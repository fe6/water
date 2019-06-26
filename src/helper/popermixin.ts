import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class ProperMixin extends Vue {
  // 纵向( Ver )，设置左边的判断 start
  get isVerCenter(): boolean {
    return /\b(top|bottom)\b/g.test((this as any).placement);
  }

  // topRight bottomRight
  get isVerEndRight(): boolean {
    return /Right/g.test((this as any).placement);
  }

  // topLeft bottomLeft
  get isVerEndLeft(): boolean {
    return /Left/g.test((this as any).placement);
  }

  // leftTop left leftBottom
  get isVerLeft(): boolean {
    return /left/g.test((this as any).placement);
  }

  // rightTop right rightBottom
  get isVerRight(): boolean {
    return /right/g.test((this as any).placement);
  }

  // 纵向( Ver )，设置左边的判断 end

  // 横向( Hor )，设置左边的判断 start
  // left right
  get isHorCenter(): boolean {
    return /\b(left|right)\b/g.test((this as any).placement);
  }

  // leftBottom rightBottom
  get isHorEndBottom(): boolean {
    return /Bottom/g.test((this as any).placement);
  }

  // topTop bottomTop
  get isVerEndTop(): boolean {
    return /Top/g.test((this as any).placement);
  }

  // top topLeft topRight
  get isHorTop(): boolean {
    return /top/g.test((this as any).placement);
  }

  // bottom bottomLeft bottomRight
  get isHorBottom(): boolean {
    return /bottom/g.test((this as any).placement);
  }
  // 横向( Hor )，设置左边的判断 end
}
