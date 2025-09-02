function Test() {
  return (
    <div className="themed-page min-h-screen">
      <nav className="themed-navbar p-4">
        <button className="themed-button">
          Click me
        </button>
      </nav>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Test Component</h1>
        <p>This is a test of the theming system</p>
      </div>
    </div>
  );
}

export default Test;