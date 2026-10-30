export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Get your lab results without coming back</h1>
        <p>Your result is uploaded, you get an email, and you view it securely online.</p>
        <a href="/login" className="btn">Login to view my result</a>
      </section>
      <section className="wrap">
        <h2>How it works</h2>
        <div className="card"><b>1.</b> The lab uploads your result after your test.</div>
        <div className="card"><b>2.</b> You get an email saying it is ready.</div>
        <div className="card"><b>3.</b> Log in to view it. Only you can open it.</div>
      </section>
    </main>
  );
}
