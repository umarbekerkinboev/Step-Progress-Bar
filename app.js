// Select elements
const steps = document.querySelectorAll('.step');
const icons = document.querySelectorAll('.icon');
const stepNumbers = document.querySelectorAll('.step-number');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentStep = 0;

nextBtn.addEventListener('click', () => {
  currentStep++;
  if (currentStep > icons.length - 1) {
    currentStep = icons.length - 1;
  }
  updateSteps(currentStep);
});

prevBtn.addEventListener('click', () => {
  currentStep--;
  if (currentStep < 0) {
    currentStep = 0;
  }
  updateSteps(currentStep);
});

function updateSteps(step) {
  //remove all "checked"
  icons.forEach((icon) => {
    if (
      icon.classList.contains('checked') ||
      icon.classList.contains('fa-check')
    ) {
      icon.classList.remove('checked');
      icon.classList.remove('fa-check');
      icon.classList.add('fa-times');
    }
  });

  //remove all "step number"s
  stepNumbers.forEach((stepNumber) => {
    stepNumber.classList.add('hide');
  });

  //re-design icons
  for (let i = 0; i <= step; i++) {
    icons[i].classList.add('fa-check');
    icons[i].classList.add('checked');
    stepNumbers[i].classList.remove('hide');
  }

  //disable "prev"&"next" buttons
  if (step === icons.length - 1) {
    nextBtn.classList.add('disabled');
  } else if (step === 0) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
    nextBtn.classList.remove('disabled');
  }
}
