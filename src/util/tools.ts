/*
 * @Description: tools
 * @Author: lmaster
 * @Date: 2019-10-08 14:38:19
 */


// 解决 json bigint 问题
// https://golb.hplar.ch/2019/01/js-bigint-json.html
/**
 * parseReviver
 * @param key
 * @param value
 */
function parseReviver(key: any, value: any) {
    if (typeof value === 'string' && /^\d+n$/.test(value)) {
        return BigInt(value.slice(0, -1));
    }
    return value;
}

/**
 * stringifyReplacer
 * @param key
 * @param value
 */
function stringifyReplacer(key: any, value: any): number | string {
    if (typeof value === 'bigint') {
        return value.toString() + 'n';
    } else {
        return value;
    }
}
// json bigint end

/**
 * 判断对象是否为空
 * @param obj
 */
function isEmpty(obj: object): boolean {
    for (let key in obj) {
        return false;
    }
    return true;
}
