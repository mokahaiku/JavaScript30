(function init() {
  const secondHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  const originalTransition = 'all 0.05s';
  const setHandPosition = (handElement, deg) => {
    const hand = handElement;
    if (deg > 90 && deg < 100) hand.style.transition = originalTransition;
    if (deg === 90) {
      hand.style.transition = 'none';
      hand.style.transform = `rotate(${deg}deg)`;
    } else {
      hand.style.transform = `rotate(${deg}deg)`;
    }
  };
  const setDate = (now = new Date()) => {
    setHandPosition(secondHand, 90 + (now.getSeconds() * 6));
    setHandPosition(minHand, 90 + (now.getMinutes() * 6));
    setHandPosition(hourHand, 90 + (now.getHours() * 30));
  };
  setInterval(setDate, 1000);
}());
