document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Drawer Navigation Logic
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // 2. Interactive Decibel & Urban Stress Simulator
  const simSlider = document.getElementById('sim-slider');
  const simDbText = document.getElementById('sim-db-text');
  const simStatusBadge = document.getElementById('sim-status-badge');
  const simBar = document.getElementById('sim-bar');
  const presetStadium = document.getElementById('preset-stadium');
  const presetStreet = document.getElementById('preset-street');
  const presetQuiet = document.getElementById('preset-quiet');
  const presetBtns = document.querySelectorAll('.preset-btn');

  function updateSimulator(dbValue) {
    // Clamp values between 30 and 120
    const val = Math.max(30, Math.min(120, dbValue));
    
    // Update Slider & Text
    if (simSlider) simSlider.value = val;
    if (simDbText) simDbText.innerHTML = `${val} <span class="text-xl font-bold">dB</span>`;

    // Percentage for width (30 dB = 0%, 120 dB = 100%)
    const percent = ((val - 30) / 90) * 100;
    if (simBar) simBar.style.width = `${percent}%`;

    // Status Badge & Color Rules
    if (val < 65) {
      simDbText.className = 'text-4xl sm:text-5xl font-black text-green-400';
      simStatusBadge.className = 'px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-green-950/80 text-green-400 border border-green-800/60';
      simStatusBadge.innerText = 'İdeal Konut Ortamı';
    } else if (val >= 65 && val < 90) {
      simDbText.className = 'text-4xl sm:text-5xl font-black text-yellow-400';
      simStatusBadge.className = 'px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-yellow-950/80 text-yellow-400 border border-yellow-800/60';
      simStatusBadge.innerText = 'Rahatsızlık & Konsantrasyon Kaybı';
    } else {
      simDbText.className = 'text-4xl sm:text-5xl font-black text-red-500';
      simStatusBadge.className = 'px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60';
      simStatusBadge.innerText = 'Yüksek Risk & Kentsel Stres';
    }
  }

  // Slider Event Listener
  if (simSlider) {
    simSlider.addEventListener('input', (e) => {
      presetBtns.forEach(btn => btn.classList.remove('active'));
      updateSimulator(parseInt(e.target.value, 10));
    });
  }

  // Preset Button Event Listeners
  if (presetStadium) {
    presetStadium.addEventListener('click', () => {
      presetBtns.forEach(btn => btn.classList.remove('active'));
      presetStadium.classList.add('active');
      updateSimulator(110);
    });
  }

  if (presetStreet) {
    presetStreet.addEventListener('click', () => {
      presetBtns.forEach(btn => btn.classList.remove('active'));
      presetStreet.classList.add('active');
      updateSimulator(105);
    });
  }

  if (presetQuiet) {
    presetQuiet.addEventListener('click', () => {
      presetBtns.forEach(btn => btn.classList.remove('active'));
      presetQuiet.classList.add('active');
      updateSimulator(40);
    });
  }

  // Initialize Simulator with 105 dB default
  updateSimulator(105);

  // 3. Human Rights Framework Interactive Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // Reset all buttons
      tabBtns.forEach(b => {
        b.classList.remove('active', 'border-yellow-400', 'text-yellow-400');
        b.classList.add('border-transparent', 'text-slate-400');
      });

      // Activate clicked button
      btn.classList.add('active', 'border-yellow-400', 'text-yellow-400');
      btn.classList.remove('border-transparent', 'text-slate-400');

      // Hide all panels
      tabPanels.forEach(panel => panel.classList.add('hidden'));

      // Show selected panel
      const activePanel = document.getElementById(`tab-content-${index + 1}`);
      if (activePanel) activePanel.classList.remove('hidden');
    });
  });

  // 4. Interactive Pledge Action & Counter
  const pledgeBtn = document.getElementById('pledge-action-btn');
  const pledgeCounterEl = document.getElementById('pledge-count-number');
  let hasPledged = false;

  if (pledgeBtn && pledgeCounterEl) {
    pledgeBtn.addEventListener('click', () => {
      if (!hasPledged) {
        let count = parseInt(pledgeCounterEl.innerText, 10) || 143;
        count += 1;
        pledgeCounterEl.innerText = count;
        hasPledged = true;

        pledgeBtn.classList.remove('from-yellow-500', 'to-amber-500', 'hover:from-yellow-400', 'hover:to-amber-400');
        pledgeBtn.classList.add('bg-green-600', 'text-white', 'cursor-default');
        pledgeBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i><span>Taahhüdünüz Kaydedildi!</span>';
      }
    });
  }

});