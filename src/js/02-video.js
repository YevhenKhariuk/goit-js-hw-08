import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(event) {
  const currentTime = event.seconds;
  localStorage.setItem(STORAGE_KEY, currentTime);
}

const savedTime = localStorage.getItem(STORAGE_KEY);
if (savedTime) {
  player.setCurrentTime(savedTime);
}
