[data-theme="light"] {
        --bg: #f1f5f9;
        --card: #ffffff;
        --surface: #f8fafc;
        --muted: #64748b;
        --text: #1f2937;
        --brand: #06b6d4;
        --brand-2: #4f46e5;
        --ok: #059669;
        --warn: #d97706;
        --err: #dc2626;
        --ring: rgba(6, 182, 212, 0.25);
        --shadow-3: 0 10px 30px rgba(0,0,0,.1), 0 2px 8px rgba(0,0,0,.05);
    }

    * { box-sizing: border-box; }
    html, body { height: 100%; }
    body {
        margin: 0;
        font-family: 'Inter', sans-serif;
        background: var(--bg);
        color: var(--text);
        transition: background-color .3s, color .3s;
        line-height: 1.6;
        font-size: 16px; /* Default font size for desktop */
    }
    [data-theme="dark"] body {
        background: radial-gradient(80rem 40rem at 10% -10%, rgba(129,140,248,.08), transparent 60%),
                    radial-gradient(70rem 30rem at 110% 10%, rgba(34,211,238,.08), transparent 60%),
                    var(--bg);
    }

    .container { max-width: 1100px; margin: 0 auto; padding: 2.5rem 1rem 4rem; }
    header {
        background: var(--card);
        padding: 1.4rem 1.2rem;
        border-radius: var(--radius-2xl);
        box-shadow: var(--shadow-3);
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: space-between;
        flex-wrap: wrap;
        border: 1px solid var(--surface);
        transition: all 0.3s ease;
    }
    
    .brand { display: flex; align-items: center; gap: .9rem; }
    .logo {
        width: 48px;
        height: 48px;
        border-radius: 14px;
        background: linear-gradient(135deg, var(--brand), var(--brand-2));
        box-shadow: 0 8px 25px rgba(34,211,238,.25);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    [data-theme="light"] .logo {
        box-shadow: 0 8px 25px rgba(6, 182, 212, .2);
    }
    .logo svg {
        width: 90%;
        height: 90%;
        color: var(--card);
    }
    .brand h1 { margin: 0; font-weight: 800; font-size: 1.5rem; letter-spacing: -0.5px; }
    .brand p { margin: 0; color: var(--muted); font-size: .95rem; }
    .disclaimer { color: var(--muted); font-size: .9rem; margin-top: 1rem; }
    .theme-toggle {
        background: var(--surface);
        color: var(--text);
        border: 1px solid var(--muted);
        border-radius: 999px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s ease;
    }
    .theme-toggle:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0,0,0,.1);
    }

    .grid { display: grid; gap: 1.5rem; margin-top: 2rem; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
    .card {
        background: var(--card);
        border: 1px solid var(--surface);
        border-radius: var(--radius-2xl);
        padding: 1.5rem;
        box-shadow: var(--shadow-3);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0,0,0,0.55), 0 5px 15px rgba(0,0,0,0.45);
    }
    [data-theme="light"] .card:hover {
        box-shadow: 0 15px 40px rgba(0,0,0,.15), 0 5px 15px rgba(0,0,0,.1);
    }

    .card h2 { margin: 0 0 1rem; font-size: 1.25rem; font-weight: 800; }
    .formula {
        font-family: 'Fira Sans', monospace;
        font-size: 1rem;
        color: var(--brand);
        padding: 0.5rem 0;
        border-bottom: 1px dashed var(--surface);
        margin-bottom: 1rem;
    }
    .muted { color: var(--muted); font-size: .92rem; }
    .row { display: grid; gap: 1rem; }
    
    label { display: block; font-size: .9rem; margin-bottom: 0.25rem; color: var(--text); }
    input, select {
        width: 100%;
        padding: .85rem 1rem;
        background: var(--surface);
        color: var(--text);
        border: 1px solid var(--muted);
        border-radius: .75rem;
        outline: none;
        transition: border-color .2s, box-shadow .2s;
    }
    input:focus { border-color: var(--brand); box-shadow: 0 0 0 4px var(--ring); }
    .btns { display: flex; gap: .8rem; margin-top: 1.5rem; flex-wrap: wrap; }
    button {
        padding: .8rem 1.2rem;
        border: none;
        border-radius: .75rem;
        font-weight: 700;
        cursor: pointer;
        transition: all .2s ease;
        background: linear-gradient(135deg, var(--brand), var(--brand-2));
        color: var(--card);
        box-shadow: 0 8px 20px rgba(34,211,238,.25);
    }
    button:hover { transform: translateY(-2px); filter: saturate(1.1); }
    .ghost {
        background: var(--surface);
        color: var(--text);
        border: 1px solid var(--muted);
        box-shadow: none;
    }
    .result {
        margin-top: 1.5rem;
        padding: 1rem 1.2rem;
        border-radius: .75rem;
        background: var(--surface);
        border: 1px dashed var(--brand-2);
        font-weight: 700;
        letter-spacing: .3px;
    }
    .note { margin-top: 1rem; padding: .8rem 1rem; border-left: 4px solid var(--warn); background: rgba(245, 158, 11, .1); border-radius:.5rem; }
    .success { border-left-color: var(--ok); background: rgba(34, 197, 94, .1); }
    .danger { border-left-color: var(--err); background: rgba(239, 68, 68, .1); }
    .foot { margin-top: 2rem; color: var(--muted); font-size: .85rem; text-align: center; }
    .tag, .chip {
        display: inline-block;
        font-size: .75rem;
        padding: .25rem .6rem;
        border-radius: 999px;
        background: var(--surface);
        border: 1px solid var(--muted);
        margin-left: .5rem;
        color: var(--text);
    }
    .chip { background: rgba(34,211,238,.12); border-color: rgba(34,211,238,.25); color: #a5f3fc; }
    [data-theme="light"] .chip { background: rgba(6, 182, 212, .1); border-color: rgba(6, 182, 212, .25); color: #0891b2; }

    /* --- MOBILE OPTIMIZATION --- */
    @media (max-width: 600px) {
        body { font-size: 15px; } /* Slightly smaller font for mobile */
        .container { padding: 1.5rem 1rem 3rem; }
        header { padding: 1rem; }
        .logo { width: 40px; height: 40px; }
        .brand h1 { font-size: 1.2rem; }
        .brand p { font-size: .85rem; }
        .theme-toggle { padding: 0.4rem 0.8rem; }
        .grid { gap: 1rem; margin-top: 1.5rem; }
        .card { padding: 1.2rem; }
        .card h2 { font-size: 1.15rem; }
        .formula { font-size: 0.95rem; }
        .row { grid-template-columns: 1fr; } /* Stack columns on small screens */
        .btns button { padding: 0.7rem 1rem; }
        .result { padding: 0.8rem 1rem; }
    }
</style>
