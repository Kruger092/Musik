document.addEventListener('DOMContentLoaded', () => {
  const deadline = new Date('February 19, 2022 00:00:00');

  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');

  let timerId = null;

  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = `${ days }d`;
    $hours.textContent = `${ hours }h`;
    $minutes.textContent = `${ minutes }m`;
    $seconds.textContent = `${ seconds }s`;
  }

  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});