import './styles/App.css';
import { Header } from './shared/components/header.tsx';
import { Hero } from './features/home/components/hero.tsx';
import { ReminderModes } from './features/home/components/reminder_modes.tsx';
import { SimplifyLife } from './features/home/components/simplify_life.tsx';
import { RememberEffortlessly } from './features/home/components/remember_effortlessly.tsx';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ReminderModes />
      <SimplifyLife />
      <RememberEffortlessly />
    </>
  );
}

export default App;
