import './style.css';
import { getState, subscribe } from './store';
import { renderIntroPage, attachIntroListeners } from './pages/intro';
import { renderRoleSelectPage, attachRoleSelectListeners } from './pages/roleSelect';
import { renderScenarioPage, attachScenarioListeners } from './pages/scenario';
import { renderProfilePage, attachProfileListeners } from './pages/profile';
import { renderGlossaryPage, attachGlossaryListeners } from './pages/glossary';
import { renderSummaryPage, attachSummaryListeners } from './pages/summary';
import { renderLeaderboardPage, attachLeaderboardListeners } from './pages/leaderboard';

const app = document.getElementById('app')!;

function render() {
  const state = getState();
  const page = state.currentPage;
  let html = '';
  let attach: (() => void) | null = null;

  switch (page) {
    case 'intro':
      html = renderIntroPage();
      attach = attachIntroListeners;
      break;
    case 'roleSelect':
      html = renderRoleSelectPage();
      attach = attachRoleSelectListeners;
      break;
    case 'scenario':
      html = renderScenarioPage();
      attach = attachScenarioListeners;
      break;
    case 'profile':
      html = renderProfilePage();
      attach = attachProfileListeners;
      break;
    case 'glossary':
      html = renderGlossaryPage();
      attach = attachGlossaryListeners;
      break;
    case 'summary':
      html = renderSummaryPage();
      attach = attachSummaryListeners;
      break;
    case 'leaderboard':
      html = renderLeaderboardPage();
      attach = attachLeaderboardListeners;
      break;
  }

  if (getState().currentPage !== page) {
    render();
    return;
  }

  app.innerHTML = html;
  attach?.();

  // Scroll to top on page change
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Subscribe to state changes
subscribe(render);

// Initial render
render();
