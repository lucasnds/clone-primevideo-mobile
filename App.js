import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';

export default function App() {
  //fragment
  return (
    <>
      <Home/>
      <StatusBar style="auto" />
    </>
  );
}
