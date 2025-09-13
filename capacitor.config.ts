import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.d16ab4ae05c64fcb956d84a47dbc304e',
  appName: 'Sikkim Monasteries',
  webDir: 'dist',
  server: {
    url: 'https://d16ab4ae-05c6-4fcb-956d-84a47dbc304e.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#FF8C00',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
    }
  }
};

export default config;