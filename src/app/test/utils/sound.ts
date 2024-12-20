const SOUNDS = {
  select: new Audio('/sounds/select.mp3'),
  error: new Audio('/sounds/error.mp3'),
  success: new Audio('/sounds/success.mp3'),
  complete: new Audio('/sounds/complete.mp3'),
};

// 预加载所有音效
Object.values(SOUNDS).forEach(sound => {
  sound.load();
});

export function playSound(type: keyof typeof SOUNDS) {
  try {
    const sound = SOUNDS[type];
    sound.currentTime = 0;
    sound.play();
  } catch (error) {
    console.error('播放音效失败:', error);
  }
}

// 设置音效音量
export function setSoundVolume(volume: number) {
  Object.values(SOUNDS).forEach(sound => {
    sound.volume = Math.max(0, Math.min(1, volume));
  });
}

// 禁用/启用音效
export function toggleSound(enabled: boolean) {
  Object.values(SOUNDS).forEach(sound => {
    sound.muted = !enabled;
  });
} 