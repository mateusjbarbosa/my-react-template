import { Counter } from './components/Counter';

export function App() {
  return (
    // eslint-disable-next-line max-len
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-5 bg-slate-100">
      <h1 className="text-4xl font-bold text-slate-800">Template</h1>

      <Counter />
    </main>
  );
}
