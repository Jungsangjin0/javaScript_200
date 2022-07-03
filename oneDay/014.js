/**
 * 반복문 배우기 for in
 * for in 은 객체 값을 순환하기에 좋다.. 하지만 안쓰는게 더 좋다..
 * for of 를 사용하자.
 */




let store = {snack: 1000, flower: 5000, beverage: 2000};
store.a = "a";

for(let item in store) {
    if (!store.hasOwnProperty(item)) continue;

    console.log(`${item}는 가격이 ${store[item]} 입니다.`);
}

console.log(store);