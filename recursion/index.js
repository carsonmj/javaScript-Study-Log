/**
 * Quest) 주어진 el 요소를 기준으로 className 과 일치하는 클래스를 가진 모든 하위 요소들을 배열에 담아 반환하는 함수를 작성
 * - document.getElementsByClassName , querySelector, querySelectorAll 등의 DOM API는 사용 불가
 * - 원하는 조건에 따라 요소를 찾아주는 기능 외에는 모두 사용해도 무관
 */
function getElementsByClassName (el, className) {
    const elements = [];

    if (el.className === className) {
        elements.push(el);
    }

    if (el.hasChildNodes()) {
        for (let i = 0; i < el.children.length; i++) {
            const result = getElementsByClassName (el.children[i], className);
            elements.push(...result);
        }
    }

    return elements;
}

const $element = document.querySelector(".container");
getElementsByClassName($element, "red");
