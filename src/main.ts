import './style.css';
import { getState, subscribe } from './store';
import { renderIntroPage, attachIntroListeners } from './pages/intro';
import { renderRoleSelectPage, attachRoleSelectListeners } from './pages/roleSelect';
import { renderScenarioPage, attachScenarioListeners } from './pages/scenario';
import { renderProfilePage, attachProfileListeners } from './pages/profile';
import { renderGlossaryPage, attachGlossaryListeners } from './pages/glossary';
import { renderSummaryPage, attachSummaryListeners } from './pages/summary';

const app = document.getElementById('app')!;

function render() {
  const state = getState();

  switch (state.currentPage) {
    case 'intro':
      app.innerHTML = renderIntroPage();
      attachIntroListeners();
      break;
    case 'roleSelect':
      app.innerHTML = renderRoleSelectPage();
      attachRoleSelectListeners();
      break;
    case 'scenario':
      app.innerHTML = renderScenarioPage();
      attachScenarioListeners();
      break;
    case 'profile':
      app.innerHTML = renderProfilePage();
      attachProfileListeners();
      break;
    case 'glossary':
      app.innerHTML = renderGlossaryPage();
      attachGlossaryListeners();
      break;
    case 'summary':
      app.innerHTML = renderSummaryPage();
      attachSummaryListeners();
      break;
  }

  // Scroll to top on page change
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Subscribe to state changes
subscribe(render);

// Initial render
render();
