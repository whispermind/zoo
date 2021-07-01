const popup = document.querySelector('.login-popup');
const form = popup.querySelector('.login-popup__form');
const popupBackground = popup.querySelector('.login-popup__background');
const signInFields = popup.querySelectorAll('.sign-field');
const loginButtons = document.querySelectorAll('.login-xxl');
const headerLogin = document.querySelector('.header-area__login');
const userIcon = headerLogin.querySelector('.login-xl');

popup.addEventListener('click', (event) =>{
  if(event.target.matches('.login-popup__background')){
    popup.style.display = 'none';
    let error = document.querySelector('.error');
    if(error) error.remove();
  }
  if(event.target.matches('.sign-mode') && !event.target.matches('.login-popup__mode-active')){
    signinSwitch(event.target);
  }
  if(event.target.matches('.log-mode') && !event.target.matches('.login-popup__mode-active')){
    loginSwitch(event.target);
  }
  if(event.target.matches('.login-popup__submit')){
    if(document.querySelector('.log-mode').matches('.login-popup__mode-active')){
      if(validation(event)){
        loginButtons.forEach((elem) => elem.style.display = 'none');
        userIcon.style.display = 'block';
      }
    }else{
      loginButtons.forEach((elem) => elem.style.display = 'none');
      userIcon.style.display = 'block';
      registration(event);
    }
  }
  if(event.target.closest('.google') || event.target.closest('.facebook')){
    socialLogin(event);
    loginButtons.forEach((elem) => elem.style.display = 'none');
    userIcon.style.display = 'block';
  }
});

headerLogin.addEventListener('click', (event) => {
  if(event.target.closest('.header-login')){
    popup.style.display = "flex";
    const mode = document.querySelector('.log-mode');
    if(!mode.matches('.login-popup__mode-active')) loginSwitch(mode);
  }
  if(event.target.closest('.header-signup')){
    popup.style.display = "flex";
    const mode = document.querySelector('.sign-mode');
    if(!mode.matches('.login-popup__mode-active')) signinSwitch(mode);
  }
  if(event.target.closest('.login-xl')){
    let button = document.createElement('button');
    button.style.width = '100px';
    button.style.height = '50px';
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    button.style.position = 'absolute';
    button.style.right = '60px';
    button.style.top = '110px';
    button.className = 'kostylipodvezli';
    button.textContent = 'log out';
    document.body.append(button);
    button.addEventListener('click', (event) => {
      userIcon.style.display = 'none';
      loginButtons.forEach((elem) => elem.style.display = 'block');
      button.remove();
    })
  }
})


function registration(event){
  event.preventDefault();
  userIcon.title = form.elements['username'].value;
  popupBackground.click()
  }

function validation(event){
  event.preventDefault();
  if(form.elements['form-email'].value != 'user@gmail.com' || form.elements['form-password'].value != 'useruser'){
    if(!document.querySelector('.error')){
      const div = document.createElement('div');
      div.textContent = 'wrong input';
      div.classList.add('error');
      div.style.color = 'red';
      div.style.padding = '20px';
      form.append(div);
    }else return false
  }
  userIcon.title = form.elements['form-email'].value;
  popupBackground.click();
  return true;
}

function socialLogin(event){
  userIcon.title = `logged with ${event.target.closest('button').className}`;
  popupBackground.click();
}

function loginSwitch(target){
    signInFields.forEach((elem) =>{
      elem.style.display = "none";
      elem.removeAttribute('required');
    });
    target.classList.toggle('login-popup__mode-active');
    target.previousElementSibling.classList.toggle('login-popup__mode-active');
}

function signinSwitch(target){
  console.log('gg2');
  signInFields.forEach((elem) => {
    elem.style.display = "block";
    if(elem.matches('.login-popup__checkbox')) elem.style.display = "flex";
    elem.setAttribute('required', 'true');
  });
    target.classList.toggle('login-popup__mode-active');
    target.nextElementSibling.classList.toggle('login-popup__mode-active');
}