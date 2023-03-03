/* 회원가입 */

//회원가입 폼-1
const emailCheck = () => {
    let email = document.getElementById("email_id").value; 

    //이메일 형식 확인-1.정규식
    let reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    
    if(reg.test(email)){
        alert("이메일 입력 완료");   
        
        //다음 페이지로 이동
        let link = 'http://127.0.0.1:5500/joinForm_step2.html';
        location.href=link;
        location.replace(link);
        window.open(link);
    }    
    else{
        document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다.";
        email.value = "";
        return false;
    } 
}

//회원가입 폼-2
const pageBack=()=>{
    // history.go(-1);
    history.back();
    console.log("이전 페이지");
}    
const joinFin=()=>{
    let link = 'http://127.0.0.1:5500/joinForm_step3.html';
    location.href=link;
    location.replace(link);
    window.open(link);
}
//회원가입 폼-3
const loginLink=()=>{
    let link = 'http://127.0.0.1:5500/login.html';
    location.href=link;
    location.replace(link);
    window.open(link);
}

/* 로그인 */

// 1.회원 로그인 체크
const memberLogin = () => {
    let checkId = memberIDCheck();
    let checkPw = memberPWCheck(); 

    // 로그인 완료 -> 메인 페이지로 이동
    if(checkId && checkPw){
        let link = 'http://127.0.0.1:5500/index.html';
        location.href=link;
        location.replace(link);
        window.open(link);
    } else{
        return       
    }          
}


// 회원-아이디(이메일) 확인
const memberIDCheck = () => {
    let memberId = document.getElementById("memberId").value;
    let reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    
    if(reg.test(memberId)){
        console.log("이메일 입력 완료");
        return true
    } else{
        alert("이메일이 올바르지 않습니다.");
        memberId.value = "";
        return false;
    }        
}
// 회원-비밀번호 확인
const memberPWCheck = () => {
    let memberPw = document.getElementById("memberPw").value;
    let reg = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합

	if(reg.test(memberPw)){
        console.log("비밀번호 입력 완료");
        return true
    } else{
        alert("비밀번호가 올바르지 않습니다.");
        memberPw.value = "";  
        return false;
    }   
}

// 2.비회원 로그인 체크
const nomemberLogin = () => { 
    let check =  nomemberCheck();

    if(check){
        // console.log("입력 완료2")
        let link = 'http://127.0.0.1:5500/index.html';
        location.href=link;
        location.replace(link);
        window.open(link);
    }else{
        return
    }
}
//비회원 4가지 항목 체크
const nomemberCheck = () => {
    let name = document.getElementById("nomemberName").value;
    let email = document.getElementById("nomemberId").value; 
    let phone = document.getElementById("nomemberPhone").value;
    let numPw = document.getElementById("nomemberPw").value;
    //정규식
    let regName = /^[가-힣]{2,4}$/; // 한글 이름 2~4자 이내
    let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let regPhon = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4}$)/;
    let regNum = /^[0-9]{4}$/;

    if(regName.test(name)&&regEmail.test(email)&&regPhon.test(phone)&&regNum.test(numPw)){
        console.log("입력 완료");
        return true
    } else{
        alert("입력이 올바르지 않습니다.");
        debugger
        return false;
    } 
}