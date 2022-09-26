/**
 * *Falsy인 깂
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

/**
 *Truthy인 값
 *{}
 *1
 *-1
 *'0' 문자열은 true
 *'false' 이것도 문자열이니까 true
 *[]
 */


const check = null;
if (check) {
    console.log('true일때만 출력');
}