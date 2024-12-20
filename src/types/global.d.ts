/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

interface Window {
  navigator: Navigator;
}

interface Navigator {
  share?: (data?: ShareData) => Promise<void>;
  clipboard: Clipboard;
}

interface ShareData {
  title?: string;
  text?: string;
  url?: string;
}

interface Clipboard {
  writeText(text: string): Promise<void>;
} 