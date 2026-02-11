import './styles/App.css';
import { Header } from './shared/components/header.tsx';
import { Hero } from './shared/components/hero.tsx';
import { ReminderModes } from './shared/components/reminder_modes.tsx';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ReminderModes />
    </>
  );
}

export default App;
