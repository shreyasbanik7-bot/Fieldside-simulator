<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Fieldside — Live Odds</title>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="dark">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self';">
<meta name="referrer" content="strict-origin-when-cross-origin">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="shell">
  <header class="top">
    <div class="brand" id="brandHome">
      <div class="brand-mark"></div>
      <h1>Fieldside</h1>
    </div>
    <nav class="top-mid">
      <button class="navlink active" data-view="board">Sportsbook</button>
      <button class="navlink" data-view="bets">My Bets</button>
      <button class="navlink" data-view="wallet">Wallet</button>
      <button class="navlink" data-view="bank">Bank</button>
    </nav>
    <div class="top-actions" id="topActionsLoggedOut">
      <button class="btn btn-ghost" id="openLogin">Log in</button>
      <button class="btn btn-amber" id="openSignup">Sign up</button>
    </div>
    <div class="top-actions" id="topActionsLoggedIn" style="display:none;">
      <span class="balance">Balance <b id="balDisplay">$1,000.00</b></span>
      <button class="btn btn-ghost" id="openDeposit">Deposit</button>
      <div class="acct-menu">
        <button class="acct-btn" id="acctBtn"><span id="acctName">Account</span> ▾</button>
        <div class="acct-drop" id="acctDrop">
          <button data-view="bets">My Bets</button>
          <button data-view="wallet">Wallet</button>
          <button data-view="bank">Bank</button>
          <hr>
          <button data-view="security">Security</button>
          <button id="logoutBtn">Log out</button>
        </div>
      </div>
    </div>
  </header>

  <nav class="rail" id="rail">
    <div class="rail-title">Sports</div>
    <div class="sport active" data-sport="Soccer">Soccer <span class="count">42</span></div>
    <div class="sport" data-sport="Basketball">Basketball <span class="count">19</span></div>
    <div class="sport" data-sport="Tennis">Tennis <span class="count">27</span></div>
    <div class="sport" data-sport="Ice Hockey">Ice Hockey <span class="count">14</span></div>
  </nav>

  <main>
    <div class="view active" id="view-board">
      <div class="live-strip">
        <div class="live-tag"><span class="live-dot"></span>LIVE</div>
        <div class="live-teams">
          Halden FK <span class="live-score num">1–1</span> Sarpsborg 08
        </div>
        <div class="live-clock num">67'</div>
        <div class="live-odds" data-match="live-1" data-league="Norway · Eliteserien" data-teams="Halden FK vs Sarpsborg 08">
          <div class="odd-btn" data-market="Match Result" data-sel="1" data-price="2.45">
            <span class="k">1</span><span class="v num">2.45</span>
          </div>
          <div class="odd-btn" data-market="Match Result" data-sel="X" data-price="3.10">
            <span class="k">X</span><span class="v num">3.10</span>
          </div>
          <div class="odd-btn" data-market="Match Result" data-sel="2" data-price="2.80">
            <span class="k">2</span><span class="v num">2.80</span>
          </div>
        </div>
      </div>

      <div class="board-head">
        <h2 id="boardTitle">Soccer — Today</h2>
        <span>1&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;2</span>
      </div>

      <div id="board"></div>
    </div>

    <div class="view" id="view-bets">
      <div class="board-head"><h2>My Bets</h2></div>
      <div id="betsList"></div>
    </div>

    <div class="view" id="view-wallet">
      <div class="board-head"><h2>Wallet</h2></div>

      <div class="wallet-summary">
        <div class="wallet-bal-card">
          <span class="wsub">Available balance</span>
          <div class="wbal num" id="walletBalBig">$1,000.00</div>
          <div class="wallet-actions">
            <button class="btn btn-amber" id="walletDeposit">Deposit</button>
            <button class="btn btn-ghost" id="walletWithdraw">Withdraw</button>
          </div>
        </div>
      </div>

      <div class="board-head" style="margin-top:28px;"><h2 style="font-size:16px;">Deposit limit</h2></div>
      <div class="wallet-bal-card" style="max-width:420px;">
        <span class="wsub">Set a daily deposit limit to help you stay in control. Leave blank for no limit.</span>
        <div class="field" style="margin-top:14px;"><label for="depLimitInput">Daily limit ($)</label><input id="depLimitInput" type="number" min="1" placeholder="e.g. 100"></div>
        <button class="btn btn-ghost" id="saveLimitBtn">Save limit</button>
        <div id="limitStatus" style="font-size:12.5px; color:var(--muted); margin-top:10px;"></div>
      </div>

      <div class="board-head" style="margin-top:28px;"><h2 style="font-size:16px;">Transaction history</h2></div>
      <div id="txList"></div>
    </div>

    <div class="view" id="view-bank">
      <div class="board-head"><h2>Bank</h2></div>
      <div class="rg-grid">
        <div class="wallet-bal-card">
          <span class="wsub">Linked bank accounts</span>
          <div id="bankList" style="margin:12px 0;"></div>
          <button class="btn btn-amber" id="linkBankBtn">Link a bank account</button>
          <p class="modal-note">Your bank login is entered only inside your bank's or the payment provider's secure window. It never touches this page or our servers.</p>
        </div>
        <div class="wallet-bal-card">
          <span class="wsub">Move money</span>
          <div class="chip-row" id="bankDirChips" style="margin-top:12px;">
            <div class="chip selected" data-dir="deposit">Deposit</div>
            <div class="chip" data-dir="withdraw">Withdraw</div>
          </div>
          <div class="field"><label for="bankSelect">Bank account</label><select id="bankSelect"></select></div>
          <div class="field"><label for="bankAmt">Amount ($)</label><input id="bankAmt" type="number" min="1" placeholder="0"></div>
          <div class="insufficient" id="bankMsg" style="display:none;"></div>
          <button class="btn btn-amber" id="bankTransferBtn" style="width:100%;">Start transfer</button>
          <p class="modal-note">Real bank transfers settle in 1-3 business days and are confirmed by your payment provider before your balance changes. The demo simulates this in a few seconds.</p>
        </div>
      </div>
      <div class="board-head" style="margin-top:28px;"><h2 style="font-size:16px;">Bank transfers</h2></div>
      <div id="transferList"></div>
    </div>

    <div class="view" id="view-responsible">
      <div class="board-head"><h2>Responsible Gambling</h2></div>
      <div class="rg-grid">
        <div class="wallet-bal-card">
          <span class="wsub">Take a break</span>
          <p class="rg-copy">Pause your account for a fixed period. While paused you won't be able to deposit or place bets.</p>
          <div class="chip-row">
            <div class="chip" data-days="1">24 hours</div>
            <div class="chip" data-days="7">7 days</div>
            <div class="chip" data-days="30">30 days</div>
          </div>
          <button class="btn btn-amber" id="selfExcludeBtn" disabled>Start break</button>
          <div id="selfExcludeStatus" style="font-size:12.5px; color:var(--live); margin-top:10px;"></div>
        </div>
        <div class="wallet-bal-card">
          <span class="wsub">Deposit limit</span>
          <p class="rg-copy">Manage how much you can deposit per day from the <button class="linklike" data-view="wallet">Wallet page</button>.</p>
          <span class="wsub" style="display:block; margin-top:16px;">Get help</span>
          <p class="rg-copy">If gambling stops being fun, free confidential support is available 24/7.</p>
          <ul class="rg-list">
            <li>National Problem Gambling Helpline (US): <b>1-800-522-4700</b></li>
            <li>National Council on Problem Gambling: ncpgambling.org</li>
            <li>GambleAware (UK): 0808 8020 133 · gambleaware.org</li>
          </ul>
        </div>
      </div>
    </div>
  </main>

  <aside class="slip" id="desktopSlip">
    <div class="slip-head"><h3>Bet Slip</h3></div>
    <div class="slip-body" id="slipBodyDesktop"></div>
    <div class="slip-foot" id="slipFootDesktop"></div>
  </aside>
</div>

<div class="view" id="view-security" style="padding:24px; max-width:760px;">
  <div class="board-head"><h2>Security</h2></div>
  <p class="rg-copy" style="margin-top:0;">What's active in this interface, and what a live deployment adds behind it.</p>

  <div class="board-head" style="margin-top:20px;"><h2 style="font-size:15px;">In this frontend</h2></div>
  <ul class="rg-list">
    <li>Strict Content Security Policy blocking third-party scripts and inline frames</li>
    <li>All dynamic content HTML-escaped before rendering, to prevent script injection</li>
    <li>Login locks for 60 seconds after 5 failed attempts in a row</li>
    <li>Sessions auto-expire after 15 minutes of inactivity</li>
    <li>Password fields marked for password-manager autofill, never logged or stored in plain view</li>
    <li>Bank credentials are never entered on this site — only inside the provider's own secure window</li>
  </ul>

  <div class="board-head" style="margin-top:20px;"><h2 style="font-size:15px;">Required before handling real accounts or money</h2></div>
  <ul class="rg-list">
    <li>HTTPS everywhere with HSTS, and security headers set by the server (helmet.js) — CSP, X-Content-Type-Options, X-Frame-Options</li>
    <li>Passwords hashed with bcrypt or argon2, never stored in plain text</li>
    <li>Server-side session cookies flagged HttpOnly, Secure and SameSite, or short-lived signed JWTs</li>
    <li>Rate limiting and account lockouts enforced on the server, not just in the browser</li>
    <li>Parameterized SQL queries (already the default with the pg driver) to prevent injection</li>
    <li>Stripe webhook signatures verified before any wallet balance changes, as in the README</li>
    <li>Two-factor authentication, at minimum for withdrawals</li>
    <li>Secrets (API keys, DB credentials) kept in environment variables, never committed to source</li>
    <li>Dependency scanning (npm audit / Dependabot) and regular patching</li>
    <li>A WAF and geo-blocking at the edge (e.g. Cloudflare) for the jurisdictions you're licensed in</li>
    <li>Audit logging of logins, deposits, withdrawals and admin actions</li>
  </ul>
  <p class="modal-note">This list covers application security. Licensing, KYC/AML and responsible-gambling controls are separate legal requirements, not security features.</p>
</div>

<div class="view" id="view-terms" style="padding:24px;">
  <div class="board-head"><h2>Terms of Service</h2></div>
  <p class="rg-copy">Placeholder terms — a real deployment needs jurisdiction-specific terms drafted with your licensing counsel, covering eligibility, bet settlement rules, self-exclusion, and dispute resolution.</p>
</div>
<div class="view" id="view-privacy" style="padding:24px;">
  <div class="board-head"><h2>Privacy Policy</h2></div>
  <p class="rg-copy">Placeholder policy — a real deployment needs a privacy policy covering KYC data handling, retention, and applicable regulations (e.g. GDPR, state gaming-commission rules).</p>
</div>

<footer class="site-footer">
  <div class="footer-top">
    <div class="footer-brand">
      <div class="brand-mark"></div>
      <span>Fieldside</span>
    </div>
    <nav class="footer-links">
      <button class="flink" data-view="responsible">Responsible Gambling</button>
      <button class="flink" data-view="terms">Terms of Service</button>
      <button class="flink" data-view="privacy">Privacy Policy</button>
      <button class="flink" data-view="security">Security</button>
        <button class="flink" id="footerSupport">Support</button>
    </nav>
  </div>
  <p class="footer-note">You must be 18 years or older (21+ in some jurisdictions) to use this site. Gambling involves risk — only wager what you can afford to lose. This is a demo interface; no real money or wagers are involved.</p>
</footer>

<button class="mobile-slip-bar" id="mobileBar">
  <span id="mobileBarLeft">0 selections</span>
  <span id="mobileBarRight">Open slip</span>
</button>

<div class="sheet-overlay" id="overlay"></div>
<div class="sheet" id="sheet">
  <div class="slip-head">
    <h3>Bet Slip</h3>
    <button id="closeSheet" aria-label="Close">×</button>
  </div>
  <div class="slip-body" id="slipBodyMobile"></div>
  <div class="slip-foot" id="slipFootMobile"></div>
</div>

<!-- Login modal -->
<div class="modal-overlay" id="loginOverlay">
  <div class="modal">
    <div class="modal-top"><h3>Log in</h3><button class="closeModal" data-target="loginOverlay">×</button></div>
    <form id="loginForm">
      <div class="field"><label for="liUser">Username</label><input id="liUser" required placeholder="e.g. jordan92" autocomplete="username" maxlength="40"></div>
      <div class="field"><label for="liPass">Password</label><input id="liPass" type="password" required placeholder="••••••••" autocomplete="current-password" maxlength="128"></div>
      <button class="btn btn-amber" type="submit">Log in</button>
    </form>
    <p class="modal-note">Demo only — no account data leaves this browser tab.</p>
  </div>
</div>

<!-- Signup modal -->
<div class="modal-overlay" id="signupOverlay">
  <div class="modal">
    <div class="modal-top"><h3>Create account</h3><button class="closeModal" data-target="signupOverlay">×</button></div>
    <form id="signupForm">
      <div class="field"><label for="suUser">Username</label><input id="suUser" required placeholder="Pick a username" autocomplete="username" maxlength="40" pattern="[A-Za-z0-9_]{3,40}" title="3-40 letters, numbers or underscore"></div>
      <div class="field"><label for="suEmail">Email</label><input id="suEmail" type="email" required placeholder="you@example.com" autocomplete="email" maxlength="254"></div>
      <div class="field"><label for="suPass">Password</label><input id="suPass" type="password" required placeholder="At least 8 characters" minlength="8" maxlength="128" autocomplete="new-password"></div>
      <button class="btn btn-amber" type="submit">Create account</button>
    </form>
    <p class="modal-note">Demo signup — starts you with a $1,000 mock balance. No real funds, no real identity checks.</p>
  </div>
</div>

<!-- Deposit modal -->
<div class="modal-overlay" id="depositOverlay">
  <div class="modal">
    <div class="modal-top"><h3>Deposit</h3><button class="closeModal" data-target="depositOverlay">×</button></div>
    <div class="field">
      <label for="depMethod">Payment method</label>
      <select id="depMethod">
        <option>Card ending •••• (connect provider)</option>
        <option>Bank transfer (connect provider)</option>
        <option>Wallet balance demo top-up</option>
      </select>
    </div>
    <div class="chip-row" id="depositChips">
      <div class="chip" data-amt="25">$25</div>
      <div class="chip" data-amt="50">$50</div>
      <div class="chip" data-amt="100">$100</div>
      <div class="chip" data-amt="250">$250</div>
    </div>
    <div class="field"><label for="depAmt">Or enter amount ($)</label><input id="depAmt" type="number" min="1" placeholder="0"></div>
    <button class="btn btn-amber" id="confirmDeposit">Add to balance</button>
    <p class="modal-note">Demo only — adds mock funds locally. No real payment is captured or processed; a real deposit flow would hand off to a licensed payment processor's hosted checkout.</p>
  </div>
</div>

<!-- Bank link modal -->
<div class="modal-overlay" id="bankOverlay">
  <div class="modal">
    <div class="modal-top"><h3>Link a bank</h3><button class="closeModal" data-target="bankOverlay">×</button></div>
    <div id="bankStep"></div>
    <p class="modal-note">Demo stand-in for the provider's hosted window. In production this step is Stripe Financial Connections or Plaid Link, run by the provider.</p>
  </div>
</div>

<!-- Withdraw modal -->
<div class="modal-overlay" id="withdrawOverlay">
  <div class="modal">
    <div class="modal-top"><h3>Withdraw</h3><button class="closeModal" data-target="withdrawOverlay">×</button></div>
    <div class="field">
      <label for="wdMethod">Payout method</label>
      <select id="wdMethod">
        <option>Bank transfer (connect provider)</option>
        <option>Original payment method</option>
      </select>
    </div>
    <div class="field"><label for="wdAmt">Amount ($)</label><input id="wdAmt" type="number" min="1" placeholder="0"></div>
    <div class="insufficient" id="wdWarn" style="display:none;">Exceeds available balance.</div>
    <button class="btn btn-amber" id="confirmWithdraw">Request withdrawal</button>
    <p class="modal-note">Demo only — deducts mock funds and logs a pending withdrawal. No real payout is issued.</p>
  </div>
</div>

<script src="script.js"></script>
</body>
</html>
