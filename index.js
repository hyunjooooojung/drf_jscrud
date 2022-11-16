// // window : 가장 최상단에 있는 object
// console.log(window)
// // html 태그들은 document라는 것으로 저장되어있다. window 안에 들어있음. 
// // document == window.document



// // index.html에 있는 h1라는 element를 선택해서 mainHeader에 선언
// const mainHeader = document.querySelector("h1");
// const mainHeaders = document.querySelectorAll("h1");


// const myList = document.getElementById("my-list");
// const listItem = document.getElementsByClassName("list-item");



// // toggle : javascript에서 조작하는 것. 실행할때마다 있으면 빼고 없으면 넣고.
// myList.classList.toggle("mystyle");
// myList.classList.toggle("mystyle");
// myList.classList.toggle("mystyle");



// // HTMLColletion 대상으로는 for in 사용하지 않는다.
// // listItem을 array형태로 바꿔줘야 한다. array형태일 때는 forEach 사용
// Array.from(listItem).forEach((element)=> {
//     console.log(element)
//     element.classList.toggle("mystyle2")
// })


// // 버튼을 만들면 버튼을 눌렀을 때 함수가 잘 실행되는지 먼저 꼭꼭꼭!! 확인!!!
// function handleClick() {
//     myList.classList.toggle("mystyle");
//     // 버튼을 누를때마다 toggle 동작, 해제, 동작, 해제 ... 클래스 이름이 생겼다가 없어졌다가 한다.
//     Array.from(listItem).forEach((element)=> {
//         console.log(element)
//         element.classList.toggle("mystyle2")
//     })
// }


function handleSingleClick(e) {
    const singleItem = document.getElementById(e.id)
    singleItem.classList.toggle("mystyle")
}


function addItem() {
    // input박스 안에 입력한 값을 getElementById로 불러오기
    const itemInput = document.getElementById("item-input")
    const content = itemInput.value
    
    if(content) {
        console.log("컨텐트 있")

        const myList = document.getElementById("my-list")
        console.log(myList.getElementsByTagName("li").length)
        let list_number = myList.getElementsByTagName("li").length + 1

        // input박스에 입력된 값을 li태그에 추가해준다.
        const newList = document.createElement("li")
        newList.innerText = content
        // setAttribute : 추가되는 내용에 attribute를 추가해 줄 수 있다.
        newList.setAttribute("onclick", "handleSingleClick(this)")
        // backend에서 넘어오는 id를 받을 것이기 때문에 아래 방법은 쓸 일은 없을 것이다!
        // 보통 아래처럼 작성하면 된다.
        // newList.setAttribute("id", "new-id")

        newList.setAttribute("id", `${list_number}th-item`)

        
        myList.append(newList)
        itemInput.value = ""
    } else {
        console.log("컨텐트 없")
        alert("값을 입력해주세요!")
    }
}