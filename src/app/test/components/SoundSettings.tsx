'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { setSoundVolume, toggleSound } from '../utils/sound';

const STORAGE_KEY = 'sound_settings';

interface SoundSettings {
  enabled: boolean;
  volume: number;
}

export default function SoundSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<SoundSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : { enabled: true, volume: 0.5 };
    } catch {
      return { enabled: true, volume: 0.5 };
    }
  });

  // 应用设置
  useEffect(() => {
    setSoundVolume(settings.volume);
    toggleSound(settings.enabled);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-secondary-color hover:text-primary-color transition-colors"
        aria-label="��效设置"
      >
        {settings.enabled ? '🔊' : '🔇'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 p-4 bg-card-background rounded-xl shadow-lg w-64"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-primary-color">音效</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSettings(prev => ({ ...prev, enabled: !prev.enabled }))}
                  className="text-2xl"
                >
                  {settings.enabled ? '🔊' : '🔇'}
                </motion.button>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-secondary-color">
                  <span>音量</span>
                  <span>{Math.round(settings.volume * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={settings.volume}
                  onChange={e => setSettings(prev => ({ ...prev, volume: parseFloat(e.target.value) }))}
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 