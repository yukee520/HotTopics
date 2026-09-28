export type ThemeMode = 'light' | 'dark' | 'system';

export type RefreshInterval = '15m' | '1h' | '6h' | '12h' | '24h';

export interface Settings {
  themeMode: ThemeMode;
  defaultRefreshInterval: RefreshInterval;
  notificationsEnabled: boolean;
  notifyOnSpike: boolean;
  retentionDays: number;
  apiBaseUrl: string;
  onboardingDone: boolean;
}

export const REFRESH_INTERVAL_LABELS: Record<RefreshInterval, string> = {
  '15m': 'Every 15 minutes',
  '1h': 'Every hour',
  '6h': 'Every 6 hours',
  '12h': 'Every 12 hours',
  '24h': 'Once a day',
};

export const THEME_MODE_LABELS: Record<ThemeMode, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
};

export const DEFAULT_SETTINGS: Settings = {
  themeMode: 'system',
  defaultRefreshInterval: '1h',
  notificationsEnabled: true,
  notifyOnSpike: true,
  retentionDays: 30,
  apiBaseUrl: '',
  onboardingDone: false,
};