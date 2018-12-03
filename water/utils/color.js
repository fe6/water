/* eslint-disable */
export const hsbToRgb = hsb => {
  const rgb = {};
  let h = hsb.h;
  const s = (hsb.s * 255) / 100;
  const v = (hsb.b * 255) / 100;
  if (s === 0) {
    rgb.r = v;
    rgb.g = v;
    rgb.b = v;
  } else {
    const t1 = v;
    const t2 = ((255 - s) * v) / 255;
    const t3 = ((t1 - t2) * (h % 60)) / 60;
    if (h === 360) {
      h = 0;
    }
    if (h < 60) {
      rgb.r = t1;
      rgb.b = t2;
      rgb.g = t2 + t3;
    } else if (h < 120) {
      rgb.g = t1;
      rgb.b = t2;
      rgb.r = t1 - t3;
    } else if (h < 180) {
      rgb.g = t1;
      rgb.r = t2;
      rgb.b = t2 + t3;
    } else if (h < 240) {
      rgb.b = t1;
      rgb.r = t2;
      rgb.g = t1 - t3;
    } else if (h < 300) {
      rgb.b = t1;
      rgb.g = t2;
      rgb.r = t2 + t3;
    } else if (h < 360) {
      rgb.r = t1;
      rgb.g = t2;
      rgb.b = t1 - t3;
    } else {
      rgb.r = 0;
      rgb.g = 0;
      rgb.b = 0;
    }
  }
  return {
    r: Math.round(rgb.r),
    g: Math.round(rgb.g),
    b: Math.round(rgb.b),
  };
}; // end hsbToRgb

export const rgbToHex = rgb => {
  const hex = [
    rgb.r.toString(16),
    rgb.g.toString(16),
    rgb.b.toString(16),
  ];
  hex.forEach((val, nr) => {
    if (val.length === 1) {
      hex[nr] = `0${val}`;
    }
  });
  return hex.join('');
};

export const hexToRgb = hex => {
  let newHex = hex.replace(/#/, '');
  // 处理 #f00 -> #ff0000
  if (newHex.length === 3) {
    newHex = newHex.replace(/(.)/g, '$1$1');
  }

  const hex16 = parseInt(newHex, 16);
  return {
    r: hex16 >> 16,
    g: (hex16 & 0x00FF00) >> 8,
    b: (hex16 & 0x0000FF),
  };
};

export const rgbToHsb = rgb => {
  const hsb = {
    h: 0,
    s: 0,
    b: 0,
  };
  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  const delta = max - min;
  hsb.b = max;
  hsb.s = max !== 0 ? (255 * delta) / max : 0;
  if (hsb.s !== 0) {
    if (rgb.r === max) {
      hsb.h = (rgb.g - rgb.b) / delta;
    } else if (rgb.g === max) {
      hsb.h = 2 + ((rgb.b - rgb.r) / delta);
    } else {
      hsb.h = 4 + ((rgb.r - rgb.g) / delta);
    }
  } else {
    hsb.h = -1;
  }
  hsb.h *= 60;
  if (hsb.h < 0) {
    hsb.h += 360;
  }
  hsb.s *= 100 / 255;
  hsb.b *= 100 / 255;
  return hsb;
};
