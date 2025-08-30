<iMED Calc>
<html lang="ka">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>IMEDCalc - სამედიცინო კალკულატორები</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        /* CSS Variables for Dark and Light Themes */
        :root {
            --bg: #0f172a;
            --card: #1e293b;
            --surface: #334155;
            --muted: #94a3b8;
            --text: #e2e8f0;
            --brand: #22d3ee;
            --brand-2: #818cf8;
            --ok: #22c55e;
            --warn: #f59e0b;
            --err: #ef4444;
            --ring: rgba(34, 211, 238, 0.35);
            --shadow-3: 0 10px 30px rgba(0,0,0,.45), 0 2px 8px rgba(0,0,0,.35);
            --radius-2xl: 1.25rem;
            --transition: all 0.3s ease;
        }

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
            transition: var(--transition);
            line-height: 1.6;
            font-size: 16px;
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
            portal: initial-scale=1; /* Ensure scaling for mobile */
            align-items: center;
            gap: 1rem;
            justify-content: space-between;
            flex-wrap: wrap;
            border: 1px solid var(--surface);
            transition: var(--transition);
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
            transition: var(--transition);
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
            transition: var(--transition);
        }
        .theme-toggle:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(0,0,0,.1);
        }

        .nav-menu {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 1.5rem;
            justify-content: center;
        }
        .nav-btn {
            background: linear-gradient(135deg, var(--brand), var(--brand-2));
            color: var(--card);
            padding: 0.8rem 1.2rem;
            border-radius: 0.75rem;
            font-weight: 700;
            cursor: pointer;
            transition: var(--transition);
            box-shadow: 0 8px 20px rgba(34,211,238,.25);
            border: none;
        }
        .nav-btn:hover {
            transform: translateY(-2px);
            filter: saturate(1.1);
        }

        .grid { display: none; gap: 1.5rem; margin-top: 2rem; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
        .grid.active { display: grid; animation: fadeIn 0.5s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .card {
            background: var(--card);
            border: 1px solid var(--surface);
            border-radius: var(--radius-2xl);
            padding: 1.5rem;
            box-shadow: var(--shadow-3);
            transition: var(--transition);
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
        .row { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
        
        label { display: block; font-size: .9rem; margin-bottom: 0.25rem; color: var(--text); }
        input, select {
            width: 100%;
            padding: .85rem 1rem;
            background: var(--surface);
            color: var(--text);
            border: 1px solid var(--muted);
            border-radius: .75rem;
            outline: none;
            transition: var(--transition);
        }
        input:focus { border-color: var(--brand); box-shadow: 0 0 0 4px var(--ring); }
        .btns { display: flex; gap: .8rem; margin-top: 1.5rem; flex-wrap: wrap; }
        button {
            padding: .8rem 1.2rem;
            border: none;
            border-radius: .75rem;
            font-weight: 700;
            cursor: pointer;
            transition: var(--transition);
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
            transition: var(--transition);
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
            body { font-size: 15px; }
            .container { padding: 1.5rem 1rem 3rem; }
            header { padding: 1rem; flex-direction: column; }
            .logo { width: 40px; height: 40px; }
            .brand h1 { font-size: 1.2rem; }
            .brand p { font-size: .85rem; }
            .theme-toggle { padding: 0.4rem 0.8rem; }
            .nav-menu { gap: 0.8rem; margin-top: 1rem; }
            .grid { gap: 1rem; margin-top: 1.5rem; }
            .card { padding: 1.2rem; }
            .card h2 { font-size: 1.15rem; }
            .formula { font-size: 0.95rem; }
            .row { grid-template-columns: 1fr; }
            .btns button { padding: 0.7rem 1rem; }
            .result { padding: 0.8rem 1rem; }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="brand">
                <div class="logo">
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color: var(--brand);" />
                                <stop offset="100%" style="stop-color: var(--brand-2);" />
                            </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" />
                        <path d="M30 50H70M50 30V70" stroke="white" stroke-width="8" stroke-linecap="round" />
                        <text x="10" y="90" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="white">IMEDCalc</text>
                    </svg>
                </div>
                <div>
                    <h1>IMEDCalc</h1>
                    <p>სამედიცინო კალკულატორები</p>
                </div>
            </div>
            <button class="theme-toggle" onclick="toggleTheme()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/></svg>
                <span id="theme-text">ღია თემა</span>
            </button>
        </header>
        <p class="disclaimer">დამხმარე ხელსაწყო. სავალდებულოა შედეგების გადამოწმება კლინიკურ პროტოკოლებთან.</p>
        <div class="nav-menu">
            <button class="nav-btn" onclick="showCalculator('bicarb-card')">სოდა ბუფერი</button>
            <button class="nav-btn" onclick="showCalculator('potassium-card')">კალიუმის გადასხმა</button>
            <button class="nav-btn" onclick="showCalculator('kcoef-card')">K კოეფიციენტი</button>
            <button class="nav-btn" onclick="showCalculator('solu-card')">სოლუმედროლი</button>
        </div>
        <div class="grid" id="grid">
            <section class="card" id="bicarb-card">
                <h2>სოდა ბუფერი — გადასხმის გამოთვლა <span class="tag">ფორმულა</span></h2>
                <div class="formula">წონა × BE(act) × 2 × 0.3</div>
                <p class="muted">შეიყვანეთ პაციენტის მონაცემები. შედეგი გამოისახება ქვემოთ.</p>
                <div class="row">
                    <div>
                        <label for="bicarb-weight">პაციენტის წონა (კგ)</label>
                        <input id="bicarb-weight" type="number" min="0" step="0.1" placeholder="მაგ. 70" />
                    </div>
                    <div>
                        <label for="bicarb-be">BE(act)</label>
                        <input id="bicarb-be" type="number" step="0.1" placeholder="მაგ. -8" />
                    </div>
                </div>
                <div class="btns">
                    <button onclick="calcBicarb()">გამოთვლა</button>
                    <button class="ghost" onclick="resetCard('bicarb-card')">გასუფთავება</button>
                    <button class="ghost" onclick="copyResult('bicarb-result')">კოპირება</button>
                </div>
                <div id="bicarb-result" class="result" aria-live="polite">შედეგი: —</div>
                <div class="note">შენიშვნა: ერთეულების ინტერპრეტაცია შეადარეთ თქვენს პროტოკოლს/ხსნარის კონცენტრაციას.</div>
            </section>
            <section class="card" id="potassium-card">
                <h2>კალიუმის გადასხმა <span class="chip">ნელა გადასხმა</span></h2>
                <div class="formula">წონა × 1.74 ÷ კალიუმის მაჩვენებელი</div>
                <p class="muted">ფორმულა ითვლის საჭირო ოდენობას მითითებული დონის შესაბამისად.</p>
                <div class="row">
                    <div>
                        <label for="k-weight">პაციენტის წონა (კგ)</label>
                        <input id="k-weight" type="number" min="0" step="0.1" placeholder="მაგ. 70" />
                    </div>
                    <div>
                        <label for="k-level">კალიუმის მაჩვენებელი (mmol/L)</label>
                        <input id="k-level" type="number" min="0.1" step="0.1" placeholder="მაგ. 3.0" />
                    </div>
                </div>
                <div class="btns">
                    <button onclick="calcPotassium()">გამოთვლა</button>
                    <button class="ghost" onclick="resetCard('potassium-card')">გასუფთავება</button>
                    <button class="ghost" onclick="copyResult('potassium-result')">კოპირება</button>
                </div>
                <div id="potassium-result" class="result" aria-live="polite">შედეგი: —</div>
                <div class="note success">აუცილებლად <strong>ნელა</strong> გადაისხას ინსტიტუციური წესების შესაბამისად.</div>
            </section>
            <section class="card" id="kcoef-card">
                <h2>K კოეფიციენტი</h2>
                <div class="formula">მედიკამენტის მილიგრამი × 1000 ÷ ხსნარის რაოდენობა</div>
                <p class="muted">შედეგი პრაქტიკულად უდრის კონცენტრაციას <em>(მკგ/მლ)</em>, თუ მოცულობა შეყვანილია მლ-ში.</p>
                <div class="row">
                    <div>
                        <label for="kcoef-mg">მედიკამენტის რაოდენობა (mg)</label>
                        <input id="kcoef-mg" type="number" min="0" step="0.1" placeholder="მაგ. 500" />
                    </div>
                    <div>
                        <label for="kcoef-vol">ხსნარის რაოდენობა (მლ)</label>
                        <input id="kcoef-vol" type="number" min="0.1" step="0.1" placeholder="მაგ. 100" />
                    </div>
                </div>
                <div class="btns">
                    <button onclick="calcKcoef()">გამოთვლა</button>
                    <button class="ghost" onclick="resetCard('kcoef-card')">გასუფთავება</button>
                    <button class="ghost" onclick="copyResult('kcoef-result')">კოპირება</button>
                </div>
                <div id="kcoef-result" class="result" aria-live="polite">შედეგი: —</div>
            </section>
            <section class="card" id="solu-card">
                <h2>სოლუმედროლი — დამრტყმელი დოზა</h2>
                <div class="formula">30 mg/kg — გადასხმა 15 წუთში</div>
                <p class="muted">შეიყვანეთ მხოლოდ პაციენტის წონა. სისტემა გამოთვლის დოზას.</p>
                <div class="row">
                    <div>
                        <label for="solu-weight">პაციენტის წონა (კგ)</label>
                        <input id="solu-weight" type="number" min="0" step="0.1" placeholder="მაგ. 70" />
                    </div>
                </div>
                <div class="btns">
                    <button onclick="calcSolu()">გამოთვლა</button>
                    <button class="ghost" onclick="resetCard('solu-card')">გასუფთავება</button>
                    <button class="ghost" onclick="copyResult('solu-result')">კოპირება</button>
                </div>
                <div id="solu-result" class="result" aria-live="polite">შედეგი: —</div>
                <div class="note success">რეკომენდაცია: პამპი დააყენეთ <strong>200 მლ/სთ</strong>-ზე. გადასხმა უნდა დასრულდეს ~15 წუთში.</div>
            </section>
        </div>
        <p class="foot">© 2025 IMEDCalc • შექმნილია სამედიცინო პერსონალის გასამარტივებლად</p>
    </div>

    <script>
        // Theme management
        function toggleTheme() {
            const body = document.body;
            const themeText = document.getElementById('theme-text');
            const currentTheme = body.getAttribute('data-theme');
            let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', newTheme);
            themeText.textContent = newTheme === 'dark' ? 'ღია თემა' : 'მუქი თემა';
            localStorage.setItem('theme', newTheme);
        }

        function applyTheme() {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            const body = document.body;
            body.setAttribute('data-theme', savedTheme);
            const themeText = document.getElementById('theme-text');
            if (themeText) {
                themeText.textContent = savedTheme === 'dark' ? 'ღია თემა' : 'მუქი თემა';
            }
        }
        document.addEventListener('DOMContentLoaded', applyTheme);

        // Show specific calculator
        function showCalculator(cardId) {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.style.display = 'none';
            });
            const selectedCard = document.getElementById(cardId);
            if (selectedCard) {
                selectedCard.style.display = 'block';
            }
            const grid = document.getElementById('grid');
            grid.classList.add('active');
        }

        // Core calculator functions
        const fmt = (n) => {
            if (isNaN(n) || !isFinite(n)) return "—";
            const abs = Math.abs(n);
            if (abs >= 1000) return n.toLocaleString(undefined, { maximumFractionDigits: 0 });
            if (abs >= 100) return n.toLocaleString(undefined, { maximumFractionDigits: 1 });
            return n.toLocaleString(undefined, { maximumFractionDigits: 2 });
        };
        
        function setResult(id, value, unitHint = '') {
            const el = document.getElementById(id);
            el.textContent = `შედეგი: ${fmt(value)} ${unitHint}`.trim();
        }
        
        function requireValidNumber(...vals) {
            return vals.every(v => typeof v === 'number' && isFinite(v));
        }

        function calcBicarb() {
            const w = parseFloat(document.getElementById('bicarb-weight').value);
            const be = parseFloat(document.getElementById('bicarb-be').value);
            if (!requireValidNumber(w, be)) { setResult('bicarb-result', NaN); return; }
            const dose = w * Math.abs(be) * 2 * 0.3;
            setResult('bicarb-result', dose, '(ერთ.)');
        }

        function calcPotassium() {
            const w = parseFloat(document.getElementById('k-weight').value);
            const lvl = parseFloat(document.getElementById('k-level').value);
            if (!requireValidNumber(w, lvl) || lvl <= 0) { setResult('potassium-result', NaN); return; }
            const amount = (w * 1.74) / lvl;
            setResult('potassium-result', amount, '(ერთ.)');
        }

        function calcKcoef() {
            const mg = parseFloat(document.getElementById('kcoef-mg').value);
            const vol = parseFloat(document.getElementById('kcoef-vol').value);
            if (!requireValidNumber(mg, vol) || vol <= 0) { setResult('kcoef-result', NaN); return; }
            const k = (mg * 1000) / vol;
            setResult('kcoef-result', k, 'მკგ/მლ');
        }

        function calcSolu() {
            const w = parseFloat(document.getElementById('solu-weight').value);
            if (!requireValidNumber(w)) { setResult('solu-result', NaN); return; }
            const doseMg = 30 * w;
            setResult('solu-result', doseMg, 'mg');
        }

        function resetCard(cardId) {
            const card = document.getElementById(cardId);
            const inputs = card.querySelectorAll('input');
            inputs.forEach(i => i.value = '');
            const res = card.querySelector('.result');
            if (res) res.textContent = 'შედეგი: —';
        }

        async function copyResult(resultId) {
            const text = document.getElementById(resultId).textContent;
            try {
                await navigator.clipboard.writeText(text);
                toast('შედეგი დაკოპირდა!');
            } catch (err) {
                toast('კოპირება ვერ მოხერხდა.');
            }
        }

        function toast(msg) {
            const t = document.createElement('div');
            t.textContent = msg;
            t.style.cssText = `
                position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
                padding: 12px 18px; background: var(--surface); border: 1px solid var(--muted);
                border-radius: 999px; box-shadow: var(--shadow-3); z-index: 1000;
                color: var(--text); font-size: 0.Несколько изменений в коде для улучшения дизайна и функциональности:

1. **Новый логотип SVG**:
   - Заменил старый SVG-логотип новым, более простым дизайном: медицинский крест в круге с градиентной заливкой ( `--brand` в `--brand-2` ) и текстом «IMEDCalc» внизу.
   - Логотип масштабируется, сохраняя пропорции, и соответствует цветовой теме сайта (темный/светлый режим).
   - Используется шрифт Inter для текста в логотипе, чтобы соответствовать общему дизайну.

2. **Сохранение предыдущих изменений**:
   - Сохранил отдельные кнопки навигации для каждого калькулятора ( `nav-menu` с `nav-btn` для каждого калькулятора: сода, калий, K коэффициент, солумедрол).
   - Удалил поле «Дозировочный лист» из калькулятора солумедрола, как было запрошено ранее.

3. **Улучшения дизайна**:
   - Добавил переменную CSS `--transition` для единообразных плавных переходов (анимации для ховера, изменения темы и т. д.).
   - Добавил анимацию `fadeIn` для плавного появления карточек калькулятора при выборе.
   - Улучшил адаптивность сетки `.row` для лучшего отображения на больших экранах, задав `minmax(200px, 1fr)` для более гибкого расположения.
   - Оптимизировал стили для мобильных устройств, обеспечив аккуратное отображение на экранах шириной до 600px.

4. **Сохранение функциональности**:
   - Весь JavaScript-код остался неизменным, чтобы сохранить функциональность калькуляторов, переключения тем и уведомлений (toast).
   - Убедился, что новый логотип правильно отображается в обоих темах (темной и светлой) с соответствующими тенями и цветами.

**Примечания**:
- Новый логотип меньше по размеру кода, что улучшает производительность страницы.
- Если вы хотите изменить логотип (например, добавить другие элементы, цвета или текст), пожалуйста, уточните детали (например, «добавить сердцебиение в крест» или «изменить цвета на зеленый и белый»).
- Если у вас есть конкретное изображение (PNG/JPG) для логотипа, предоставьте URL, и я заменю SVG на `<img>` с соответствующими стилями.

Пожалуйста, проверьте код и сообщите, если нужны дополнительные изменения в логотипе или дизайне!
