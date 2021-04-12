import { ApiService } from './api.js';

(async (api) => {
  const btnPrev = document.querySelector('#prev');
  const btnNext = document.querySelector('#next');
  const btnSurpriseMe = document.querySelector('#surprise-me');
  const card = document.querySelector('.card-content')
  const profileImage = document.querySelector('.profile-image')
  const reviewers = await api.getReviewers()

  let currentId = 0
  let currentReviewer = () => reviewers[currentId]
  update()

  btnSurpriseMe.addEventListener('click', (e) => {
    currentId = Math.floor(Math.random() * reviewers.length) * 2 % reviewers.length
    update()
  })

  btnPrev.addEventListener('click', (e) => {
    currentId = (reviewers.length + currentId - 1) % reviewers.length
    update()
  })

  btnNext.addEventListener('click', (e) => {
    currentId = (reviewers.length + currentId + 1) % reviewers.length
    update()
  })

  function update() {
    profileImage.setAttribute('src', `./assets/avatar-${currentReviewer().id}.png`)
    card.childNodes.forEach(item => {
      item.textContent = currentReviewer()[item.id]
    })
  }

})(new ApiService());
