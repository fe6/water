/**
 * 获取一段区间的随机数，并包括这段区间的值
 * @static
 * @since 1.0.11
 * @param min {Number} 最小数
 * @param max {Number} 最小数
 * @param floor {Boolean} 是否保留整数，默认保留
 * @returns {Number} Returns {}
 * @example
 *
 * var shallow = random();
 * console.log(shallow); // 返回 500-10000 之间的随机数
 *
 * var shallow = random(1, 20);
 * console.log(shallow); // 返回 1-20 之间的随机数
 */
interface paramsEntity {
  min?: number;
  max?: number;
  floor?: boolean;
}

function random(params: paramsEntity = {}): number {
  const {
    min = 500,
    max = 10000,
    floor = false,
  } = params;
  const num = Math.random() * (max - min) + min;
  return floor ? Math.floor(num) : num;
}
export default random;
