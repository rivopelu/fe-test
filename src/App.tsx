import { Route, Routes } from 'react-router-dom';
import { routesList } from './constants/RoutesList.ts';
import { BasePage } from './components/BasePage.tsx';

function App() {
  return (
    <section className={'bg-slate-100 min-h-screen'}>
      <Routes>
        {routesList.map((item, i) => {
          const Element = item.element;
          return (
            <Route
              path={item.path}
              key={i}
              element={
                <BasePage type={item.type}>
                  <Element />
                </BasePage>
              }
            />
          );
        })}
      </Routes>
    </section>
  );
}

export default App;
