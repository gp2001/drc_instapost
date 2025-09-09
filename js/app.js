/* Instagram Post Generator - Refactored & Optimized */

// -------------------- Data -------------------- //
const matches = [
  { isoDate: '2025-09-11', date: "donderdag 11 september 2025", homeTeam: "SV DRC 2012 1", awayTeam: "AVC Heracles", time: "20:00", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKT37E", isHome: true },
  { isoDate: '2025-09-13', date: "zaterdag 13 september 2025", homeTeam: "FC Aramea 1", awayTeam: "SV DRC 2012 1", time: "15:00", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=NXRS63J", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", isHome: false },
  { isoDate: '2025-09-20', date: "zaterdag 20 september 2025", homeTeam: "SV DRC 2012 1", awayTeam: "s.v. Rijssen 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=SSTS02K", isHome: true },
  { isoDate: '2025-09-27', date: "zaterdag 27 september 2025", homeTeam: "FC Aramea 1", awayTeam: "SV DRC 2012 1", time: "15:00", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=NXRS63J", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", isHome: false },
  { isoDate: '2025-10-04', date: "zaterdag 4 oktober 2025", homeTeam: "SV DRC 2012 1", awayTeam: "Sportclub Rijssen 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKY02L", isHome: true },
  { isoDate: '2025-10-11', date: "zaterdag 11 oktober 2025", homeTeam: "Victoria '28 1", awayTeam: "SV DRC 2012 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKR33Y", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", isHome: false },
  { isoDate: '2025-10-25', date: "zaterdag 25 oktober 2025", homeTeam: "SV DRC 2012 1", awayTeam: "SC Enschede 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKR66C", isHome: true },
  { isoDate: '2025-11-01', date: "zaterdag 1 november 2025", homeTeam: "EMOS 1", awayTeam: "SV DRC 2012 1", time: "15:00", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKX21P", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", isHome: false },
  { isoDate: '2025-11-08', date: "zaterdag 8 november 2025", homeTeam: "SV DRC 2012 1", awayTeam: "SVV '91 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKW42R", isHome: true },
  { isoDate: '2025-11-22', date: "zaterdag 22 november 2025", homeTeam: "SV DRC 2012 1", awayTeam: "BZSV de Blauwwitters 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKT134", isHome: true },
  { isoDate: '2025-11-29', date: "zaterdag 29 november 2025", homeTeam: "SV DRC 2012 1", awayTeam: "De Tubanters 1897 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKT75O", isHome: true },
  { isoDate: '2025-12-06', date: "zaterdag 6 december 2025", homeTeam: "EFC PW 1885 1", awayTeam: "SV DRC 2012 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKX12N", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", isHome: false },
  { isoDate: '2026-01-31', date: "zaterdag 31 januari 2026", homeTeam: "s.v. Rijssen 1", awayTeam: "SV DRC 2012 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=SSTS02K", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", isHome: false },
  { isoDate: '2026-02-07', date: "zaterdag 7 februari 2026", homeTeam: "SV DRC 2012 1", awayTeam: "FC Aramea 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=NXRS63J", isHome: true },
  { isoDate: '2026-02-28', date: "zaterdag 28 februari 2026", homeTeam: "Sportclub Rijssen 1", awayTeam: "SV DRC 2012 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKY02L", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", isHome: false },
  { isoDate: '2026-03-07', date: "zaterdag 7 maart 2026", homeTeam: "SV DRC 2012 1", awayTeam: "Victoria '28 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKR33Y", isHome: true },
  { isoDate: '2026-03-14', date: "zaterdag 14 maart 2026", homeTeam: "SC Enschede 1", awayTeam: "SV DRC 2012 1", time: "15:00", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKR66C", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", isHome: false },
  { isoDate: '2026-03-21', date: "zaterdag 21 maart 2026", homeTeam: "SV DRC 2012 1", awayTeam: "EMOS 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKX21P", isHome: true },
  { isoDate: '2026-03-28', date: "zaterdag 28 maart 2026", homeTeam: "SVV '91 1", awayTeam: "SV DRC 2012 1", time: "14:00", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKW42R", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", isHome: false },
  { isoDate: '2026-04-18', date: "zaterdag 18 april 2026", homeTeam: "BZSV de Blauwwitters 1", awayTeam: "SV DRC 2012 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKT134", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", isHome: false },
  { isoDate: '2026-05-09', date: "zaterdag 9 mei 2026", homeTeam: "SV DRC 2012 1", awayTeam: "EFC PW 1885 1", time: "14:30", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKX12N", isHome: true },
  { isoDate: '2026-05-16', date: "zaterdag 16 mei 2026", homeTeam: "De Tubanters 1897 1", awayTeam: "SV DRC 2012 1", time: "15:15", homeLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=BBKT75O", awayLogo: "https://logoapi.voetbal.nl/logo.php?clubcode=PJZV43O", isHome: false }
];

const presetBackgrounds = [
  'img/485437157_17885022696250032_5436364154748334515_n.jpg',
  'img/485790489_17885022657250032_3992219924780858834_n.jpg',
  'img/485964564_17885022687250032_9111789748228200947_n.jpg',
  'img/485990307_17885022705250032_7959596681191365443_n.jpg',
  'img/486044440_17885022633250032_1660088353521374380_n.jpg',
  'img/486052401_17885022675250032_3591721298460659784_n.jpg',
  'img/486519902_17885022648250032_571595400200978865_n.jpg',
  'img/486559930_17885022666250032_8929534141537722409_n.jpg'
];

// -------------------- State -------------------- //
let selectedMatch = null;
let backgroundImage = null;
let canvasTainted = false;
// Added: simple in-memory cache for logos (URL -> Promise<{img,tainted}>)
const logoCache = new Map();

// -------------------- Elements -------------------- //
// const canvas = document.getElementById('previewCanvas');
// const ctx = canvas.getContext('2d');
const canvases = Array.from(document.querySelectorAll('.match-canvas'));
const contexts = canvases.map(c => c.getContext('2d'));
const statusEl = document.getElementById('status');
const downloadStatusEl = document.getElementById('downloadStatus');
let selectedVariant = 0; // default first
let loadedLogos = null; // {home:{img,tainted}, away:{img,tainted}}

// -------------------- Init -------------------- //
(function init(){
  populateMatchSelect();
  setupUpload();
  initPresetGallery();
  initVariantSelection();
  contexts.forEach(ctx => drawDefaultCanvas(ctx));
  document.getElementById('generateBtn').addEventListener('click', generateVariants);
  document.getElementById('downloadBtn').addEventListener('click', downloadPost);
})();

// -------------------- UI Population -------------------- //
function populateMatchSelect(){
  const select = document.getElementById('matchSelect');
  const today = new Date(); today.setHours(0,0,0,0);
  const upcoming = matches.map((m,i)=>({ ...m, _i:i })).filter(m => new Date(m.isoDate) >= today);
  if (!upcoming.length){
    select.appendChild(new Option('Geen komende wedstrijden','',true,true));
    select.disabled = true; return;
  }
  upcoming.forEach(match => {
    const opponent = match.isHome ? match.awayTeam : match.homeTeam;
    const label = `${match.date} - ${match.isHome ? 'THUIS' : 'UIT'} vs ${opponent} (${match.time})`;
    select.appendChild(new Option(label, match._i));
  });
  select.addEventListener('change', e => {
    if (e.target.value !== ''){
      selectedMatch = matches[parseInt(e.target.value,10)];
      if (backgroundImage) generateVariants();
    }
  });
}

function initPresetGallery(){
  const gallery = document.getElementById('presetGallery');
  if (!gallery) return;
  presetBackgrounds.forEach(path => {
    const item = document.createElement('div');
    item.className = 'preset-item';
    item.tabIndex = 0;
    const img = document.createElement('img'); img.src = path; img.alt='Achtergrond';
    item.appendChild(img);
    const selectThis = () => {
      gallery.querySelectorAll('.preset-item.selected').forEach(el=>el.classList.remove('selected'));
      item.classList.add('selected');
      const loaded = new Image();
      loaded.onload = () => { backgroundImage = loaded; document.querySelector('.upload-area p').textContent = 'Achtergrond gekozen uit bibliotheek'; if (selectedMatch) generateVariants(); };
      loaded.src = path;
    };
    item.addEventListener('click', selectThis);
    item.addEventListener('keypress', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectThis(); }});
    gallery.appendChild(item);
  });
}

function initVariantSelection(){
  const items = Array.from(document.querySelectorAll('.canvas-item'));
  const selectItem = (idx) => {
    selectedVariant = idx;
    items.forEach((el,i)=>{
      const sel = i===idx; el.classList.toggle('selected', sel); el.setAttribute('aria-checked', sel? 'true':'false');
    });
  };
  items.forEach((el,i)=>{
    el.addEventListener('click', ()=> selectItem(i));
    el.addEventListener('keypress', e=> { if(e.key==='Enter'|| e.key===' '){ e.preventDefault(); selectItem(i);} });
  });
}

// -------------------- Upload Handling -------------------- //
function setupUpload(){
  const uploadArea = document.getElementById('uploadArea');
  const fileInput = document.getElementById('backgroundUpload');
  uploadArea.addEventListener('click', () => fileInput.click());
  uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.classList.add('dragover'); });
  uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
  uploadArea.addEventListener('drop', e => { e.preventDefault(); uploadArea.classList.remove('dragover'); if (e.dataTransfer.files.length) handleFileUpload(e.dataTransfer.files[0]); });
  fileInput.addEventListener('change', e => { if (e.target.files.length) handleFileUpload(e.target.files[0]); });
}

function handleFileUpload(file){
  if (!file.type.startsWith('image/')) return alert('Alleen afbeeldingen zijn toegestaan!');
  if (file.size > 5 * 1024 * 1024) return alert('Bestand is te groot! Max 5MB toegestaan.');
  const reader = new FileReader();
  reader.onload = e => { const img = new Image(); img.onload = () => { backgroundImage = img; document.querySelector('.upload-area p').textContent = `Afbeelding geladen: ${file.name}`; document.querySelectorAll('.preset-item.selected').forEach(el=>el.classList.remove('selected')); if (selectedMatch) generateVariants(); }; img.src = e.target.result; };
  reader.readAsDataURL(file);
}

// -------------------- Drawing Helpers -------------------- //
function drawDefaultCanvas(context){
  context.fillStyle='#f8f9fa'; context.fillRect(0,0,context.canvas.width,context.canvas.height);
  context.fillStyle='#6c757d'; context.font='42px Arial'; context.textAlign='center';
  context.fillText('Selecteer een', context.canvas.width/2, context.canvas.height/2 - 40);
  context.fillText('wedstrijd + achtergrond', context.canvas.width/2, context.canvas.height/2 + 20);
}

function addRoundRectPolyfill(){
  if (!CanvasRenderingContext2D.prototype.roundRect){
    CanvasRenderingContext2D.prototype.roundRect = function(x,y,w,h,r){
      this.beginPath();
      this.moveTo(x+r,y); this.lineTo(x+w-r,y); this.quadraticCurveTo(x+w,y,x+w,y+r);
      this.lineTo(x+w,y+h-r); this.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
      this.lineTo(x+r,y+h); this.quadraticCurveTo(x,y+h,x,y+h-r);
      this.lineTo(x,y+r); this.quadraticCurveTo(x,y,x+r,y); this.closePath();
    };
  }
}
addRoundRectPolyfill();

function getProxyUrl(url){ return `https://images.weserv.nl/?url=${encodeURIComponent(url.replace(/^https?:\/\//,''))}&w=400&il`; }
const attemptCors = src => new Promise((res,rej)=>{ const img=new Image(); img.crossOrigin='anonymous'; img.onload=()=>res(img); img.onerror=rej; img.src=src; });
const attemptNoCors = src => new Promise(res => { const img=new Image(); img.onload=()=>res(img); img.onerror=()=>res(null); img.src = src + (src.includes('?')?'&':'?') + 'nocors=1'; });

function loadLogo(src){
  if (!src) return Promise.resolve({ img:null, tainted:false });
  if (logoCache.has(src)) return logoCache.get(src);
  const p = (async () => {
    try {
      const img = await attemptCors(src);
      return { img, tainted:false };
    } catch {
      try {
        const img = await attemptCors(getProxyUrl(src));
        return { img, tainted:false };
      } catch {
        const img = await attemptNoCors(src);
        return { img, tainted:true };
      }
    }
  })();
  logoCache.set(src, p);
  return p;
}

function getWrappedLines(context, text, maxWidth){
  const words = text.split(' '); let line=''; const lines=[];
  for (let i=0;i<words.length;i++){
    const test=line+words[i]+" ";
    if (context.measureText(test).width > maxWidth && i>0){ lines.push(line.trim()); line=words[i]+" "; }
    else line=test;
  }
  if (line) lines.push(line.trim());
  return lines;
}

function drawTeamName(context, text, centerX, topY, maxWidth, baseFontSize, highlight){
  let fontSize = baseFontSize; let lineHeight = Math.round(fontSize * 1.05);
  context.textAlign='center'; context.textBaseline='alphabetic';
  context.font = `bold ${fontSize}px Arial`;
  let lines = getWrappedLines(context, text, maxWidth);
  const availableHeight = ((context.canvas.height/2) + 140 - 10) - topY;
  while ((lines.length * lineHeight) > availableHeight && fontSize > 22){
    fontSize -= 2; lineHeight = Math.round(fontSize * 1.1); context.font = `bold ${fontSize}px Arial`; lines = getWrappedLines(context, text, maxWidth);
  }
  context.fillStyle = highlight ? '#e74c3c' : '#2c3e50';
  lines.forEach((l,idx)=> context.fillText(l, centerX, topY + idx * lineHeight + fontSize));
}

function wrapCentered(context, text, x, y, maxWidth, lineHeight){
  const words = text.split(' '); let line=''; const lines=[]; context.textAlign='center';
  for (let n=0;n<words.length;n++){
    const test=line+words[n]+" ";
    if (context.measureText(test).width > maxWidth && n>0){ lines.push(line); line=words[n]+" "; }
    else line=test;
  }
  lines.push(line);
  const startY = y - ((lines.length-1)/2)*lineHeight;
  lines.forEach((l,i)=> context.fillText(l.trim(), x, startY + i*lineHeight));
}

function placeholderBadge(context, x, y, text){
  context.save(); context.beginPath(); context.arc(x,y,60,0,Math.PI*2); context.fillStyle='#ececec'; context.fill(); context.strokeStyle='#bbb'; context.lineWidth=4; context.stroke(); context.fillStyle='#666'; context.font='bold 22px Arial'; context.textAlign='center'; context.fillText(text, x, y+8); context.restore();
}

// Draws the full match card onto supplied context
function drawMatchInfo(context, match, homeLogo, awayLogo){
  const centerX = context.canvas.width/2; const centerY = context.canvas.height/2;
  context.fillStyle='rgba(255,255,255,0.95)';
  context.roundRect(centerX-400, centerY-200, 800, 400, 30); context.fill();
  context.fillStyle='#2c3e50'; context.font='bold 42px Arial'; context.textAlign='center';
  wrapCentered(context, match.date.toUpperCase(), centerX, centerY-135, 700, 44);
  const logoSize=120; const logoY=centerY - logoSize/2; const homeLogoX=centerX - 300; const awayLogoX=centerX + 180;
  if (homeLogo) context.drawImage(homeLogo, homeLogoX, logoY, logoSize, logoSize); else placeholderBadge(context, homeLogoX + logoSize/2, logoY + logoSize/2, 'HOME');
  if (awayLogo) context.drawImage(awayLogo, awayLogoX, logoY, logoSize, logoSize); else placeholderBadge(context, awayLogoX + logoSize/2, logoY + logoSize/2, 'AWAY');
  context.fillStyle='#2c3e50'; context.font='bold 70px Arial'; context.fillText('VS', centerX, centerY + 10);
  context.fillStyle='#e74c3c'; context.font='bold 64px Arial'; context.fillText(match.time, centerX, centerY + 100);
  const labelTop = logoY + logoSize + 8;
  drawTeamName(context, match.homeTeam, homeLogoX + logoSize/2, labelTop, 180, 30, match.isHome);
  drawTeamName(context, match.awayTeam, awayLogoX + logoSize/2, labelTop, 180, 30, !match.isHome);
  context.fillStyle='#fff'; context.fillRect(centerX-160, centerY + 140, 320, 60);
  context.fillStyle='#e74c3c'; context.font='bold 30px Arial'; context.fillText(match.isHome ? 'THUISWEDSTRIJD' : 'UITWEDSTRIJD', centerX, centerY + 180);
  context.fillStyle='rgba(231,76,60,0.95)'; context.fillRect(0, context.canvas.height - 110, context.canvas.width, 110);
  context.fillStyle='#fff'; context.font='bold 60px Arial'; context.fillText('SV DRC 2012', centerX, context.canvas.height - 40);
}

// -------------------- Generation & Export -------------------- //
function drawBackgroundFit(context, img){
  const bgAspect = img.width / img.height; const canvasAspect = context.canvas.width / context.canvas.height;
  let drawW, drawH, offX=0, offY=0;
  if (bgAspect > canvasAspect){ drawH = context.canvas.height; drawW = drawH * bgAspect; offX = (context.canvas.width - drawW)/2; }
  else { drawW = context.canvas.width; drawH = drawW / bgAspect; offY = (context.canvas.height - drawH)/2; }
  context.drawImage(img, offX, offY, drawW, drawH);
}

function drawVariant(variantIndex, context, match, logos){
  switch(variantIndex){
    case 0: return drawVariantClassic(context, match, logos);
    case 1: return drawVariantStripeTop(context, match, logos);
    case 2: return drawVariantDiagonal(context, match, logos);
    case 3: return drawVariantMinimal(context, match, logos);
    case 4: return drawVariantSplitVertical(context, match, logos);
    case 5: return drawVariantBadgeCenter(context, match, logos);
    default: return drawVariantClassic(context, match, logos);
  }
}

function clearAndBackground(context){
  context.clearRect(0,0,context.canvas.width,context.canvas.height);
  if (backgroundImage){
    drawBackgroundFit(context, backgroundImage);
    context.fillStyle='rgba(0,0,0,0.35)'; context.fillRect(0,0,context.canvas.width,context.canvas.height);
  } else {
    drawDefaultCanvas(context);
  }
}

function commonLogos(match, context, logos){
  const homeLogo = logos?.home?.img || null;
  const awayLogo = logos?.away?.img || null;
  const logoSize = 120;
  const centerX = context.canvas.width/2; const centerY = context.canvas.height/2;
  const leftX = centerX - 260; const rightX = centerX + 140; const y = centerY - logoSize/2;
  if (homeLogo) context.drawImage(homeLogo, leftX, y, logoSize, logoSize); else placeholderBadge(context, leftX+logoSize/2, y+logoSize/2, 'HOME');
  if (awayLogo) context.drawImage(awayLogo, rightX, y, logoSize, logoSize); else placeholderBadge(context, rightX+logoSize/2, y+logoSize/2, 'AWAY');
  return {leftX,rightX,y,logoSize,centerX,centerY};
}

function drawVariantClassic(context, match, logos){
  clearAndBackground(context);
  // reuse drawMatchInfo from original design
  drawMatchInfo(context, match, logos?.home?.img || null, logos?.away?.img || null);
}

function drawVariantStripeTop(context, match, logos){
  clearAndBackground(context);
  const {centerX, centerY} = {centerX: context.canvas.width/2, centerY: context.canvas.height/2};
  // Top stripe
  context.fillStyle='rgba(231,76,60,0.95)'; context.fillRect(0,0,context.canvas.width,160);
  context.fillStyle='#fff'; context.font='bold 54px Arial'; context.textAlign='center';
  context.fillText('SV DRC 2012', centerX, 105);
  // Middle card transparent
  context.fillStyle='rgba(255,255,255,0.92)'; context.roundRect(centerX-420, centerY-230, 840, 460, 38); context.fill();
  context.fillStyle='#2c3e50'; context.font='bold 40px Arial';
  wrapCentered(context, match.date.toUpperCase(), centerX, centerY-150, 720, 44);
  const logosMeta = commonLogos(match, context, logos);
  context.fillStyle='#2c3e50'; context.font='bold 72px Arial'; context.fillText('VS', centerX, logosMeta.centerY + 10);
  context.fillStyle='#e74c3c'; context.font='bold 62px Arial'; context.fillText(match.time, centerX, logosMeta.centerY + 120);
  context.fillStyle='#fff'; context.fillRect(centerX-200, logosMeta.centerY + 150, 400, 58);
  context.fillStyle='#e74c3c'; context.font='bold 30px Arial'; context.fillText(match.isHome ? 'THUISWEDSTRIJD' : 'UITWEDSTRIJD', centerX, logosMeta.centerY + 192);
}

function drawVariantDiagonal(context, match, logos){
  clearAndBackground(context);
  // Diagonal overlay
  const grad = context.createLinearGradient(0,0, context.canvas.width, context.canvas.height);
  grad.addColorStop(0,'rgba(102,126,234,0.85)');
  grad.addColorStop(1,'rgba(118,75,162,0.85)');
  context.save();
  context.beginPath();
  context.moveTo(0,0); context.lineTo(context.canvas.width,0); context.lineTo(context.canvas.width, context.canvas.height*0.55); context.lineTo(0, context.canvas.height*0.75); context.closePath();
  context.fillStyle=grad; context.fill();
  context.restore();
  const centerX = context.canvas.width/2; const centerY = context.canvas.height/2 - 40;
  context.fillStyle='#fff'; context.font='bold 44px Arial'; context.textAlign='center';
  wrapCentered(context, match.date.toUpperCase(), centerX, centerY-190, 760, 46);
  // Circular backgrounds for logos
  const homeLogo = logos?.home?.img || null; const awayLogo = logos?.away?.img || null;
  const radius = 130; const homeCx = centerX - 260; const awayCx = centerX + 260; const cy = centerY - 20;
  [ [homeCx, homeLogo, 'HOME'], [awayCx, awayLogo, 'AWAY'] ].forEach(([cx,img,label])=>{
    context.beginPath(); context.arc(cx, cy, radius, 0, Math.PI*2); context.fillStyle='rgba(255,255,255,0.15)'; context.fill();
    if (img) context.drawImage(img, cx-110, cy-110, 220, 220); else placeholderBadge(context, cx, cy, label);
  });
  context.fillStyle='#fff'; context.font='bold 90px Arial'; context.fillText('VS', centerX, centerY + 40);
  context.fillStyle='#fff'; context.font='bold 70px Arial'; context.fillText(match.time, centerX, centerY + 140);
  // Bottom ribbon
  context.fillStyle='rgba(0,0,0,0.55)'; context.fillRect(0, context.canvas.height-140, context.canvas.width, 140);
  context.fillStyle='#e74c3c'; context.font='bold 42px Arial'; context.fillText(match.isHome ? 'THUIS' : 'UIT', centerX, context.canvas.height - 90);
  context.fillStyle='#fff'; context.font='bold 64px Arial'; context.fillText('SV DRC 2012', centerX, context.canvas.height - 40);
}

function drawVariantMinimal(context, match, logos){
  clearAndBackground(context);
  const centerX = context.canvas.width/2; const centerY = context.canvas.height/2;
  context.fillStyle='rgba(255,255,255,0.85)'; context.roundRect(centerX-350, centerY-300, 700, 600, 28); context.fill();
  context.fillStyle='#2c3e50'; context.font='bold 38px Arial'; context.textAlign='center';
  wrapCentered(context, match.date.toUpperCase(), centerX, centerY-210, 620, 42);
  const homeLogo = logos?.home?.img || null; const awayLogo = logos?.away?.img || null; const size=180; const logoY = centerY - size/2 - 40;
  if (homeLogo) context.drawImage(homeLogo, centerX - size - 40, logoY, size, size); else placeholderBadge(context, centerX - size/2 - 40, logoY + size/2, 'HOME');
  if (awayLogo) context.drawImage(awayLogo, centerX + 40, logoY, size, size); else placeholderBadge(context, centerX + 40 + size/2, logoY + size/2, 'AWAY');
  context.fillStyle='#e74c3c'; context.font='bold 82px Arial'; context.fillText('VS', centerX, centerY + 60);
  context.fillStyle='#2c3e50'; context.font='bold 60px Arial'; context.fillText(match.time, centerX, centerY + 150);
  context.fillStyle='#e74c3c'; context.font='bold 34px Arial'; context.fillText(match.isHome ? 'THUISWEDSTRIJD' : 'UITWEDSTRIJD', centerX, centerY + 210);
  context.fillStyle='rgba(231,76,60,0.95)'; context.fillRect(0, context.canvas.height - 90, context.canvas.width, 90);
  context.fillStyle='#fff'; context.font='bold 58px Arial'; context.fillText('SV DRC 2012', centerX, context.canvas.height - 30);
}
// New Variant 5: Split Vertical panel
function drawVariantSplitVertical(context, match, logos){
  clearAndBackground(context);
  const w = context.canvas.width; const h = context.canvas.height; const centerX = w/2;
  // Left panel
  const grad = context.createLinearGradient(0,0, w*0.55,0);
  grad.addColorStop(0,'rgba(231,76,60,0.95)');
  grad.addColorStop(1,'rgba(231,76,60,0.55)');
  context.fillStyle=grad; context.fillRect(0,0,w*0.55,h);
  // Date & time
  context.fillStyle='#fff'; context.font='bold 48px Arial'; context.textAlign='left';
  wrapCentered(context, match.date.toUpperCase(), w*0.27, h*0.18, w*0.45, 50);
  context.font='bold 90px Arial'; context.fillStyle='#fff'; context.fillText(match.time, w*0.10 + (w*0.45)/2, h*0.55);
  context.font='bold 38px Arial'; context.fillStyle='#2c3e50'; context.textAlign='center';
  context.fillText(match.isHome ? 'THUIS' : 'UIT', w*0.275, h*0.66);
  // Logos & VS on right side
  const home = logos?.home?.img; const away = logos?.away?.img; const size=230; const logoY = h*0.18;
  if (home) context.drawImage(home, centerX + 40 - size/2, logoY, size, size); else placeholderBadge(context, centerX + 40, logoY + size/2, 'HOME');
  if (away) context.drawImage(away, centerX + 300 - size/2, logoY, size, size); else placeholderBadge(context, centerX + 300, logoY + size/2, 'AWAY');
  context.fillStyle='#e74c3c'; context.font='bold 110px Arial'; context.fillText('VS', centerX + 170, logoY + size/2 + 35);
  // Bottom bar
  context.fillStyle='rgba(0,0,0,0.6)'; context.fillRect(0,h-120,w,120);
  context.fillStyle='#fff'; context.font='bold 70px Arial'; context.textAlign='center'; context.fillText('SV DRC 2012', w/2, h-40);
}
// New Variant 6: Central circular badge focus
function drawVariantBadgeCenter(context, match, logos){
  clearAndBackground(context);
  const w = context.canvas.width; const h = context.canvas.height; const cx = w/2; const cy = h/2;
  // Dark radial vignette
  const rad = context.createRadialGradient(cx,cy,50,cx,cy,Math.max(w,h)/1.2);
  rad.addColorStop(0,'rgba(0,0,0,0.2)'); rad.addColorStop(1,'rgba(0,0,0,0.75)');
  context.fillStyle=rad; context.fillRect(0,0,w,h);
  // Concentric rings
  context.strokeStyle='rgba(255,255,255,0.25)';
  for (let r=420;r<=520;r+=50){ context.beginPath(); context.lineWidth=4; context.arc(cx,cy,r,0,Math.PI*2); context.stroke(); }
  // Central badge
  context.beginPath(); context.arc(cx,cy,360,0,Math.PI*2); context.fillStyle='rgba(255,255,255,0.10)'; context.fill();
  context.beginPath(); context.arc(cx,cy,300,0,Math.PI*2); context.fillStyle='rgba(231,76,60,0.92)'; context.fill();
  // Date on top arc
  context.fillStyle='#fff'; context.font='bold 44px Arial'; context.textAlign='center';
  wrapCentered(context, match.date.toUpperCase(), cx, cy - 180, 520, 48);
  // Logos left/right inside badge
  const home = logos?.home?.img; const away = logos?.away?.img; const size=170;
  if (home) context.drawImage(home, cx - 240 - size/2, cy - size/2, size, size); else placeholderBadge(context, cx - 240, cy, 'HOME');
  if (away) context.drawImage(away, cx + 240 - size/2, cy - size/2, size, size); else placeholderBadge(context, cx + 240, cy, 'AWAY');
  context.fillStyle='#fff'; context.font='bold 140px Arial'; context.fillText('VS', cx, cy + 40);
  context.fillStyle='#2c3e50'; context.font='bold 80px Arial'; context.fillText(match.time, cx, cy + 170);
  context.fillStyle='#fff'; context.font='bold 46px Arial'; context.fillText(match.isHome ? 'THUISWEDSTRIJD' : 'UITWEDSTRIJD', cx, cy + 240);
  // Bottom label
  context.fillStyle='rgba(231,76,60,0.95)'; context.fillRect(0,h-110,w,110);
  context.fillStyle='#fff'; context.font='bold 68px Arial'; context.fillText('SV DRC 2012', cx, h-38);
}

// Updated generate to produce all variants
function generateVariants(){
  if (!selectedMatch || !backgroundImage) return alert('Selecteer eerst een wedstrijd en upload of kies een achtergrond afbeelding!');
  statusEl.textContent='Bezig met genereren...';
  canvasTainted = false;
  // Load logos once then draw each variant
  Promise.all([
    loadLogo(selectedMatch.homeLogo),
    loadLogo(selectedMatch.awayLogo)
  ]).then(([home,away])=>{
    loadedLogos = { home, away };
    if (home?.tainted || away?.tainted) canvasTainted = true;
    contexts.forEach((ctx,i)=> drawVariant(i, ctx, selectedMatch, loadedLogos));
    statusEl.textContent = canvasTainted ? 'Klaar (let op: mogelijk CORS voor logo’s).' : 'Klaar.';
  }).catch(()=>{
    loadedLogos = { home:null, away:null };
    contexts.forEach((ctx,i)=> drawVariant(i, ctx, selectedMatch, loadedLogos));
    statusEl.textContent='Logo laden mislukt.';
  });
}

// Replace old generatePost reference if still used externally
const generatePost = generateVariants;

async function downloadPost(){
  if (!selectedMatch || !backgroundImage) return alert('Genereer eerst de voorbeelden!');
  const targetCtx = contexts[selectedVariant];
  downloadStatusEl.textContent='Exporteren...';
  if (!canvasTainted){
    triggerDownload(targetCtx.canvas.toDataURL());
    downloadStatusEl.textContent='Download klaar.'; return;
  }
  try {
    // Rebuild selected variant with proxy logos to avoid taint
    const off = document.createElement('canvas'); off.width=targetCtx.canvas.width; off.height=targetCtx.canvas.height; const octx = off.getContext('2d');
    const [homeSafe, awaySafe] = await Promise.all([
      attemptCors(getProxyUrl(selectedMatch.homeLogo)).catch(()=>null),
      attemptCors(getProxyUrl(selectedMatch.awayLogo)).catch(()=>null)
    ]);
    // draw background & variant
    drawBackgroundFit(octx, backgroundImage); octx.fillStyle='rgba(0,0,0,0.35)'; octx.fillRect(0,0,off.width,off.height);
    const safeLogos = { home: homeSafe? {img:homeSafe, tainted:false}: null, away: awaySafe? {img:awaySafe, tainted:false}: null };
    drawVariant(selectedVariant, octx, selectedMatch, safeLogos);
    triggerDownload(off.toDataURL());
    downloadStatusEl.textContent='Download klaar.';
  } catch(err){ console.error(err); downloadStatusEl.textContent='Export mislukt.'; }
}

function triggerDownload(dataUrl){
  const variantPart = `variant-${selectedVariant+1}`;
  const a=document.createElement('a'); a.download=`SV-DRC-2012-${variantPart}-${selectedMatch.date.replace(/\s+/g,'-')}.png`; a.href=dataUrl; document.body.appendChild(a); a.click(); document.body.removeChild(a);
}
