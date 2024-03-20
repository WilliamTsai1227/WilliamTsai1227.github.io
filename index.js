document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.title2').forEach(e =>
    e.addEventListener('click', function () {
      this.classList.toggle('active')
    })
  )
})
