import reactLogo from '../assets/react.svg';

export function Header() {
  return (
    <div className="header">
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>React</h1>
    </div>
  )
}
