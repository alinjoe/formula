// Premium 2D CAD Engineering Operating System Engine - Cinematic OS
const SHEETS_CONFIG = window.SHEETS_CONFIG;
const FORMULA_DIAGRAMS = window.FORMULA_DIAGRAMS;

// --- Spreadsheet Engine State ---
let currentSheetId = 'instructions';
let currentSectionId = null; // Active calculator module in Dashboard View
let viewMode = 'dashboard'; // 'dashboard' | 'grid'
const sheetsData = {}; // Stores { cellData: {}, selectedCell: 'B5', styles: {} }
const maxCols = 26; // A-Z
const maxRows = 65;

// Selection State for Raw Spreadsheet Grid
let activeCellCoord = null;
let isEditing = false;

// Initialize Sheets Data Cache
SHEETS_CONFIG.forEach(sheet => {
  sheetsData[sheet.id] = {
    cellData: {}, // 'A1': { raw: '...', value: '...', formula: '...' }
    styles: {},   // 'A1': { bold: true, ... }
    selectedCell: 'B5'
  };
  
  // Pre-load default cells from formulas config
  Object.keys(sheet.defaultCells).forEach(coord => {
    const rawVal = sheet.defaultCells[coord].v;
    const style = sheet.defaultCells[coord].style;
    
    const isFormula = String(rawVal).startsWith('=');
    sheetsData[sheet.id].cellData[coord] = {
      raw: rawVal,
      value: isFormula ? '' : rawVal,
      formula: isFormula ? rawVal : ''
    };
    
    if (style) {
      sheetsData[sheet.id].styles[coord] = style;
    }
  });
});

// Create custom sheet storage for dynamic user sheets
sheetsData['sheet-custom'] = {
  cellData: {},
  styles: {},
  selectedCell: 'A1'
};

// --- Custom Spreadsheet Evaluator Engine (100% Intact) ---
const evalCache = {}; // Cache to speed up recursive evaluation
let evalStack = [];   // Stack to detect circular references

function clearEvalCache() {
  Object.keys(evalCache).forEach(k => delete evalCache[k]);
  evalStack = [];
}

function colIndexToLabel(index) {
  return String.fromCharCode(65 + index);
}

function parseCoord(coord) {
  const match = coord.match(/^([A-Z]+)([0-9]+)$/);
  if (!match) return null;
  return { col: match[1], row: parseInt(match[2], 10) };
}

function evaluateCell(coord, sheetId) {
  const sheet = sheetsData[sheetId];
  if (!sheet) return '';
  
  const cell = sheet.cellData[coord];
  if (!cell) return '';
  
  if (evalCache[coord] !== undefined) {
    return evalCache[coord];
  }
  
  if (evalStack.includes(coord)) {
    return '#Ref/Cycle!';
  }
  
  if (!cell.raw || !String(cell.raw).startsWith('=')) {
    const num = Number(cell.raw);
    return isNaN(num) || cell.raw === '' ? cell.raw : num;
  }
  
  evalStack.push(coord);
  
  try {
    const formulaStr = cell.raw.substring(1); // Remove '='
    const result = evaluateFormula(formulaStr, sheetId);
    evalCache[coord] = result;
    return result;
  } catch (error) {
    console.error(`Error in cell ${coord}:`, error);
    return '#Error!';
  } finally {
    evalStack.pop();
  }
}

function evaluateFormula(formula, sheetId) {
  const refRegex = /\b([A-Z]+[0-9]+)\b/g;
  let resolvedFormula = formula.replace(refRegex, (match) => {
    const val = evaluateCell(match, sheetId);
    if (typeof val === 'string') {
      if (val.startsWith('#')) return val; // Forward errors
      return `"${val}"`; // Wrap text strings in quotes
    }
    return val;
  });

  if (resolvedFormula.includes('#Ref/Cycle!')) return '#Ref/Cycle!';
  if (resolvedFormula.includes('#Error!')) return '#Error!';

  resolvedFormula = resolveSpreadsheetFunctions(resolvedFormula);

  try {
    let expr = resolvedFormula.replace(/\^/g, '**').replace(/&/g, '+');
    const safeCheck = /^[0-9+\-*/().\s,*"'\u03B1-\u03C9a-zA-Z<>!=?:]+$/;
    if (!safeCheck.test(expr)) {
      return '#SyntaxError!';
    }
    
    const evalFn = new Function(`return (${expr});`);
    let res = evalFn();
    
    if (res === Infinity || res === -Infinity || (typeof res === 'number' && isNaN(res))) {
      return 'Div/0';
    }
    
    if (typeof res === 'number') {
      return Math.round(res * 10000) / 10000;
    }
    
    return res;
  } catch (e) {
    return '#Error!';
  }
}

function resolveSpreadsheetFunctions(formula) {
  let temp = formula;
  temp = temp.replace(/\bPI\(\)/gi, 'Math.PI');
  
  const mathFns = ['SQRT', 'SIN', 'COS', 'TAN', 'LOG', 'LN', 'MAX', 'MIN', 'POW', 'ABS'];
  mathFns.forEach(fn => {
    const regex = new RegExp(`\\b${fn}\\(`, 'gi');
    if (fn === 'LOG') {
      temp = temp.replace(regex, 'Math.log10(');
    } else if (fn === 'LN') {
      temp = temp.replace(regex, 'Math.log(');
    } else {
      temp = temp.replace(regex, `Math.${fn.toLowerCase()}(`);
    }
  });

  while (true) {
    let idx = temp.toUpperCase().lastIndexOf('IF(');
    if (idx === -1) break;
    
    let openCount = 1;
    let commaIndices = [];
    let endIdx = -1;
    
    for (let i = idx + 3; i < temp.length; i++) {
      let char = temp[i];
      if (char === '(') {
        openCount++;
      } else if (char === ')') {
        openCount--;
        if (openCount === 0) {
          endIdx = i;
          break;
        }
      } else if (char === ',' && openCount === 1) {
        commaIndices.push(i);
      }
    }
    
    if (endIdx === -1 || commaIndices.length !== 2) {
      temp = temp.substring(0, idx) + 'INVALID_IF' + temp.substring(idx + 2);
      continue;
    }
    
    let cond = temp.substring(idx + 3, commaIndices[0]);
    let trueVal = temp.substring(commaIndices[0] + 1, commaIndices[1]);
    let falseVal = temp.substring(commaIndices[1] + 1, endIdx);
    
    let ternary = `((${cond}) ? (${trueVal}) : (${falseVal}))`;
    temp = temp.substring(0, idx) + ternary + temp.substring(endIdx + 1);
  }
  
  return temp;
}

function calculateSheet(sheetId) {
  clearEvalCache();
  const sheet = sheetsData[sheetId];
  if (!sheet) return;
  
  Object.keys(sheet.cellData).forEach(coord => {
    const cell = sheet.cellData[coord];
    if (cell && cell.raw && String(cell.raw).startsWith('=')) {
      cell.value = evaluateCell(coord, sheetId);
    }
  });
}

// --- Dynamic Row-Scanning Section Parser ---
function getSectionFields(sheetId, section) {
  const sheet = sheetsData[sheetId];
  const fields = { inputs: [], outputs: [] };
  
  for (let r = section.startRow; r <= section.endRow; r++) {
    for (let c = 0; c < 10; c++) {
      const colLetter = colIndexToLabel(c);
      const coord = `${colLetter}${r}`;
      const cell = sheet.cellData[coord];
      if (!cell || cell.raw === undefined || cell.raw === '') continue;
      
      const isFormula = String(cell.raw).startsWith('=');
      const style = sheet.styles[coord] || {};
      
      if (isFormula) {
        let label = '';
        for (let prevC = c - 1; prevC >= 0; prevC--) {
          const prevCell = sheet.cellData[`${colIndexToLabel(prevC)}${r}`];
          if (prevCell && prevCell.raw && !String(prevCell.raw).startsWith('=') && isNaN(Number(prevCell.raw))) {
            label = prevCell.raw;
            break;
          }
        }
        
        let unit = '';
        const nextCell = sheet.cellData[`${colIndexToLabel(c + 1)}${r}`];
        if (nextCell && nextCell.raw && isNaN(Number(nextCell.raw)) && !String(nextCell.raw).startsWith('=')) {
          unit = nextCell.raw;
        }
        
        fields.outputs.push({
          coord,
          label: label.replace(/:$/, '').trim() || `Result (${coord})`,
          value: cell.value,
          formula: cell.raw,
          unit: unit.trim()
        });
      } else if (!isNaN(Number(cell.raw)) && cell.raw !== '') {
        const isInput = style.bgColor || colLetter === 'B' || colLetter === 'E';
        if (isInput) {
          let label = '';
          for (let prevC = c - 1; prevC >= 0; prevC--) {
            const prevCell = sheet.cellData[`${colIndexToLabel(prevC)}${r}`];
            if (prevCell && prevCell.raw && !String(prevCell.raw).startsWith('=') && isNaN(Number(prevCell.raw))) {
              label = prevCell.raw;
              break;
            }
          }
          
          let unit = '';
          const nextCell = sheet.cellData[`${colIndexToLabel(c + 1)}${r}`];
          if (nextCell && nextCell.raw && isNaN(Number(nextCell.raw)) && !String(nextCell.raw).startsWith('=')) {
            unit = nextCell.raw;
          }
          
          fields.inputs.push({
            coord,
            label: label.replace(/:$/, '').trim() || `Input (${coord})`,
            value: Number(cell.raw),
            unit: unit.trim()
          });
        }
      }
    }
  }
  return fields;
}

// --- Smooth Value Rolling Number Interpolator ---
function animateValue(obj, start, end, duration) {
  if (isNaN(start) || isNaN(end) || start === end) {
    obj.innerText = end;
    return;
  }
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = progress * (end - start) + start;
    obj.innerText = Math.round(current * 100) / 100;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.innerText = end;
    }
  };
  window.requestAnimationFrame(step);
}

// --- Concentric Circular Gauge Capacity Allocator ---
function getSectionGaugeInfo(sheetId, sectionId, fields) {
  let ratio = 0.5; // Default middle safety ratio
  let label = "Safety Index";
  let desc = "Calculated structural design margin of current factors.";
  
  // Concrete Volume
  if (sectionId === 's1-1') {
    const vol = fields.outputs.find(o => o.coord === 'B8')?.value || 0.6;
    ratio = Math.min(1.0, Number(vol) / 12); // Scale max 12m3
    label = "Design Volume";
    desc = "Total concrete volume needed for structural castings.";
  }
  // Concrete Compressive Stress
  else if (sectionId === 's1-3') {
    const stress = fields.outputs.find(o => o.coord === 'B18')?.value || 20;
    ratio = Math.min(1.0, Number(stress) / 30); // Max 30 N/mm2
    label = "Stress Ratio";
    desc = "Active compressive loads vs concrete capacity.";
  }
  // Deflections
  else if (sectionId === 's1-10' || sectionId === 's5-6') {
    const def = fields.outputs.find(o => o.coord === 'B58')?.value || 5;
    ratio = Math.min(1.0, Number(def) / 25); // Max 25mm limit
    label = "Deflection Index";
    desc = "Live deflection displacement compared to span limits.";
  }
  // Standard pass/fail limits checks
  else {
    const statusOut = fields.outputs.find(o => String(o.value).includes('SAFE') || String(o.value).includes('REDESIGN'));
    if (statusOut) {
      const isSafe = String(statusOut.value).includes('SAFE');
      ratio = isSafe ? 0.42 : 0.98;
      label = "Module Status";
      desc = isSafe ? "All structural criteria are fully satisfied and optimized." : "Critical design capacities exceeded! Redesign required.";
    } else if (fields.outputs.length > 0) {
      const primaryVal = Number(fields.outputs[0].value);
      if (!isNaN(primaryVal)) {
        ratio = Math.min(1.0, primaryVal / (primaryVal > 1000 ? 8000 : 150));
        label = fields.outputs[0].label;
        desc = `Computed capacity allocation index for ${fields.outputs[0].label}.`;
      }
    }
  }
  
  return { ratio, label, desc };
}

// --- Live LaTeX-like Mathematical Substitution ---
function renderLiveFormula(sheetId, sectionId) {
  const section = SHEETS_CONFIG.find(sc => sc.id === sheetId).sections.find(s => s.id === sectionId);
  const diagram = FORMULA_DIAGRAMS[sectionId];
  if (!section || !diagram) return '';

  let html = `<div class="equation-ledger-card">
    <div class="section-divider-label">Design Equation</div>
    <div class="equation-rendered">${formatLatexToUnicode(diagram.formula)}</div>`;

  const fields = getSectionFields(sheetId, section);

  if (fields.inputs.length > 0) {
    html += `<div class="equation-substitution">
      <div class="section-divider-label" style="margin-top: 10px; margin-bottom: 4px;">Live Substitutions</div>`;
    
    fields.inputs.forEach(inp => {
      const varMatch = inp.label.match(/\(([^)]+)\)/);
      const varSymbol = varMatch ? varMatch[1] : inp.label.split(' ')[0];
      
      html += `<div style="margin-bottom: 4px; font-size: 11px;">
        <span class="equation-variable-pill">${varSymbol}</span> = 
        <strong style="color: var(--accent-cyan);">${inp.value}</strong> ${inp.unit}
      </div>`;
    });
    
    html += `</div>`;
  }
  
  html += `</div>`;
  return html;
}

// =========================================================
// 📐 HIGH-TECH 2D CAD LIVE-DRAWING CANVAS & STRESS HEATMAPS
// =========================================================
function animateSVG(sectionId, svgContent, fields) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgContent, 'image/svg+xml');
  const svg = doc.querySelector('svg');
  if (!svg) return svgContent;

  try {
    // Inject glowing technical CAD filters
    const defs = svg.querySelector('defs') || svg.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'defs'));
    
    // Glowing Stress Heatmap red filter
    if (!defs.querySelector('#stressGlow')) {
      defs.innerHTML += `
        <filter id="stressGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="stressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3"/>
          <stop offset="50%" stop-color="#ef4444" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.3"/>
        </linearGradient>
      `;
    }

    // --- 1. VOLUME OF CONCRETE (s1-1) ---
    if (sectionId === 's1-1') {
      const lVal = fields.inputs.find(i => i.coord === 'B5')?.value || 5;
      const bVal = fields.inputs.find(i => i.coord === 'B6')?.value || 0.3;
      const dVal = fields.inputs.find(i => i.coord === 'B7')?.value || 0.4;
      const vVal = fields.outputs.find(o => o.coord === 'B8')?.value || 0.6;
      
      svg.innerHTML = `
        <rect x="0" y="0" width="300" height="180" fill="#121216" rx="8"/>
        <line x1="20" y1="90" x2="280" y2="90" stroke="rgba(255,255,255,0.02)" stroke-width="1" stroke-dasharray="2,2"/>
        
        <!-- Draw concrete 3D solid -->
        <polygon points="60,105 180,105 220,70 100,70" fill="rgba(59,130,246,0.08)" stroke="var(--accent-blue)" stroke-width="2"/>
        <polygon points="180,105 220,70 220,115 180,150" fill="rgba(59,130,246,0.15)" stroke="var(--accent-blue)" stroke-width="2"/>
        <polygon points="60,105 180,105 180,150 60,150" fill="rgba(59,130,246,0.05)" stroke="var(--accent-blue)" stroke-width="2"/>
        
        <!-- Dimension Labels -->
        <path d="M 60,160 L 180,160" stroke="var(--text-light)" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
        <text x="120" y="172" fill="var(--text-light)" font-size="9.5" font-family="var(--font-mono)" text-anchor="middle">L = ${lVal} m</text>
        
        <path d="M 192,143 L 228,111" stroke="var(--text-light)" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
        <text x="215" y="136" fill="var(--text-light)" font-size="9.5" font-family="var(--font-mono)" text-anchor="start">B = ${bVal} m</text>
        
        <path d="M 45,105 L 45,150" stroke="var(--text-light)" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
        <text x="35" y="132" fill="var(--text-light)" font-size="9.5" font-family="var(--font-mono)" text-anchor="end">D = ${dVal} m</text>
        
        <text x="120" y="130" fill="var(--accent-cyan)" font-size="11" font-family="var(--font-title)" font-weight="bold" text-anchor="middle" filter="drop-shadow(0 0 4px var(--accent-cyan))">V = ${vVal} m³</text>
      `;
    }

    // --- 2. WEIGHT OF CONCRETE (s1-2) ---
    else if (sectionId === 's1-2') {
      const vVal = fields.inputs.find(i => i.coord === 'B11')?.value || 0.6;
      const wVal = fields.outputs.find(o => o.coord === 'B13')?.value || 14.4;
      
      svg.innerHTML = `
        <rect x="0" y="0" width="300" height="180" fill="#121216" rx="8"/>
        
        <!-- Concrete slab hanging -->
        <rect x="90" y="70" width="120" height="50" fill="rgba(59,130,246,0.06)" stroke="var(--accent-blue)" stroke-width="2" rx="4"/>
        
        <!-- Crane hoist rigging lines -->
        <line x1="150" y1="15" x2="150" y2="70" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
        <line x1="120" y1="70" x2="150" y2="40" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
        <line x1="180" y1="70" x2="150" y2="40" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
        <circle cx="150" cy="40" r="3.5" fill="var(--accent-cyan)"/>
        
        <!-- Gravity Load vector -->
        <line x1="150" y1="95" x2="150" y2="150" stroke="var(--accent-rose)" stroke-width="3" marker-end="url(#red-arrow)" filter="drop-shadow(0 0 4px var(--accent-rose))"/>
        
        <!-- Texts -->
        <text x="150" y="85" fill="var(--accent-cyan)" font-size="10.5" font-family="var(--font-mono)" font-weight="bold" text-anchor="middle">V = ${vVal} m³</text>
        <text x="162" y="135" fill="var(--accent-rose)" font-size="11" font-family="var(--font-title)" font-weight="bold">W = ${wVal} kN</text>
      `;
    }

    // --- 3. COMPRESSIVE STRESS (s1-3) ---
    else if (sectionId === 's1-3') {
      const pVal = fields.inputs.find(i => i.coord === 'B16')?.value || 50000;
      const aVal = fields.inputs.find(i => i.coord === 'B17')?.value || 2500;
      const sVal = fields.outputs.find(o => o.coord === 'B18')?.value || 20;
      
      svg.innerHTML = `
        <rect x="0" y="0" width="300" height="180" fill="#121216" rx="8"/>
        
        <!-- Compression cylinder -->
        <ellipse cx="150" cy="50" rx="35" ry="10" fill="rgba(59,130,246,0.1)" stroke="var(--accent-blue)" stroke-width="2"/>
        <rect x="115" y="50" width="70" height="70" fill="rgba(59,130,246,0.04)" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
        <path d="M 115,50 L 115,120 A 35,10 0 0 0 185,120 L 185,50" fill="none" stroke="var(--accent-blue)" stroke-width="2"/>
        <ellipse cx="150" cy="120" rx="35" ry="10" fill="rgba(59,130,246,0.2)" stroke="var(--accent-blue)" stroke-width="2"/>
        
        <!-- Compressive loads -->
        <line x1="150" y1="12" x2="150" y2="40" stroke="var(--accent-rose)" stroke-width="3" marker-end="url(#red-arrow)" filter="drop-shadow(0 0 3px var(--accent-rose))"/>
        <line x1="150" y1="158" x2="150" y2="130" stroke="var(--accent-rose)" stroke-width="3" marker-end="url(#red-arrow)" filter="drop-shadow(0 0 3px var(--accent-rose))"/>
        
        <!-- Metrics display -->
        <text x="162" y="26" fill="var(--accent-rose)" font-size="10.5" font-family="var(--font-mono)" font-weight="bold">P = ${pVal} N</text>
        <text x="150" y="88" fill="var(--text-light)" font-size="9.5" font-family="var(--font-mono)" text-anchor="middle">A = ${aVal} mm²</text>
        <text x="150" y="172" fill="var(--accent-cyan)" font-size="11" font-family="var(--font-title)" font-weight="bold" text-anchor="middle" filter="drop-shadow(0 0 4px var(--accent-cyan))">σc = ${sVal} N/mm²</text>
      `;
    }

    // --- 4. TENSILE STRESS (s1-4) ---
    else if (sectionId === 's1-4') {
      const pVal = fields.inputs.find(i => i.coord === 'B21')?.value || 35000;
      const aVal = fields.inputs.find(i => i.coord === 'B22')?.value || 1200;
      const sVal = fields.outputs.find(o => o.coord === 'B23')?.value || 29.17;
      
      svg.innerHTML = `
        <rect x="0" y="0" width="300" height="180" fill="#121216" rx="8"/>
        
        <!-- Tension bar -->
        <ellipse cx="150" cy="55" rx="20" ry="6" fill="rgba(59,130,246,0.1)" stroke="var(--accent-blue)" stroke-width="2"/>
        <rect x="130" y="55" width="40" height="60" fill="rgba(59,130,246,0.04)" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
        <path d="M 130,55 L 130,115 A 20,6 0 0 0 170,115 L 170,55" fill="none" stroke="var(--accent-blue)" stroke-width="2"/>
        <ellipse cx="150" cy="115" rx="20" ry="6" fill="rgba(59,130,246,0.2)" stroke="var(--accent-blue)" stroke-width="2"/>
        
        <!-- Pull forces -->
        <line x1="150" y1="45" x2="150" y2="15" stroke="var(--accent-rose)" stroke-width="3" marker-end="url(#red-arrow)" filter="drop-shadow(0 0 3px var(--accent-rose))"/>
        <line x1="150" y1="125" x2="150" y2="155" stroke="var(--accent-rose)" stroke-width="3" marker-end="url(#red-arrow)" filter="drop-shadow(0 0 3px var(--accent-rose))"/>
        
        <!-- Labels -->
        <text x="165" y="26" fill="var(--accent-rose)" font-size="10.5" font-family="var(--font-mono)" font-weight="bold">P = ${pVal} N</text>
        <text x="150" y="88" fill="var(--text-light)" font-size="9.5" font-family="var(--font-mono)" text-anchor="middle">A = ${aVal} mm²</text>
        <text x="150" y="172" fill="var(--accent-cyan)" font-size="11" font-family="var(--font-title)" font-weight="bold" text-anchor="middle" filter="drop-shadow(0 0 4px var(--accent-cyan))">σt = ${sVal} N/mm²</text>
      `;
    }

    // --- 5. FLEXURAL STRESS (s1-5) ---
    else if (sectionId === 's1-5') {
      const mVal = fields.inputs.find(i => i.coord === 'B26')?.value || 15000000;
      const yVal = fields.inputs.find(i => i.coord === 'B27')?.value || 150;
      const sVal = fields.outputs.find(o => o.coord === 'B29')?.value || 10;
      
      svg.innerHTML = `
        <rect x="0" y="0" width="300" height="180" fill="#121216" rx="8"/>
        
        <!-- Beam box -->
        <rect x="50" y="70" width="200" height="40" fill="rgba(59,130,246,0.06)" stroke="var(--accent-blue)" stroke-width="2" rx="3"/>
        
        <!-- Neutral axis line -->
        <line x1="40" y1="90" x2="260" y2="90" stroke="var(--accent-cyan)" stroke-dasharray="3,3" stroke-width="1.5" filter="drop-shadow(0 0 2px var(--accent-cyan))"/>
        <text x="265" y="93" fill="var(--accent-cyan)" font-size="9" font-family="var(--font-mono)" font-weight="bold">N.A.</text>
        
        <!-- Dimension y effective depth -->
        <path d="M 150,90 L 150,70" stroke="var(--text-light)" stroke-width="1.2" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
        <text x="156" y="82" fill="var(--text-light)" font-size="9" font-family="var(--font-mono)">y = ${yVal} mm</text>
        
        <!-- Bending Moment rotational vectors -->
        <path d="M 30,80 A 15,15 0 0 1 30,100" fill="none" stroke="var(--accent-amber)" stroke-width="2" marker-end="url(#orange-arrow)"/>
        <path d="M 270,100 A 15,15 0 0 1 270,80" fill="none" stroke="var(--accent-amber)" stroke-width="2" marker-end="url(#orange-arrow)"/>
        
        <!-- Labels -->
        <text x="150" y="55" fill="var(--accent-amber)" font-size="10.5" font-family="var(--font-mono)" font-weight="bold" text-anchor="middle">M = ${mVal} N·mm</text>
        <text x="150" y="145" fill="var(--accent-cyan)" font-size="11" font-family="var(--font-title)" font-weight="bold" text-anchor="middle" filter="drop-shadow(0 0 4px var(--accent-cyan))">σb = ${sVal} N/mm²</text>
      `;
    }

    // --- 6. REINFORCEMENT RATIO (s1-9) ---
    else if (sectionId === 's1-9') {
      const bVal = fields.inputs.find(i => i.coord === 'B48')?.value || 200;
      const dVal = fields.inputs.find(i => i.coord === 'B49')?.value || 300;
      const asVal = fields.inputs.find(i => i.coord === 'B47')?.value || 415;
      const percentVal = fields.outputs.find(o => o.coord === 'B51')?.value || 0.69;
      
      // Calculate rebar layout dynamically
      let rebarCount = 3;
      if (asVal < 300) rebarCount = 2;
      else if (asVal >= 300 && asVal < 600) rebarCount = 3;
      else if (asVal >= 600 && asVal < 900) rebarCount = 4;
      else rebarCount = 5;
      
      let rebarsHtml = '';
      if (rebarCount === 2) {
        rebarsHtml = `
          <circle cx="120" cy="134" r="7" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 4px var(--accent-cyan))"/>
          <circle cx="180" cy="134" r="7" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 4px var(--accent-cyan))"/>
        `;
      } else if (rebarCount === 3) {
        rebarsHtml = `
          <circle cx="120" cy="134" r="7" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 4px var(--accent-cyan))"/>
          <circle cx="150" cy="134" r="7" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 4px var(--accent-cyan))"/>
          <circle cx="180" cy="134" r="7" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 4px var(--accent-cyan))"/>
        `;
      } else if (rebarCount === 4) {
        rebarsHtml = `
          <circle cx="116" cy="134" r="6.5" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 4px var(--accent-cyan))"/>
          <circle cx="138" cy="134" r="6.5" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 4px var(--accent-cyan))"/>
          <circle cx="162" cy="134" r="6.5" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 4px var(--accent-cyan))"/>
          <circle cx="184" cy="134" r="6.5" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 4px var(--accent-cyan))"/>
        `;
      } else {
        rebarsHtml = `
          <circle cx="115" cy="134" r="6" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 4px var(--accent-cyan))"/>
          <circle cx="132" cy="134" r="6" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 4px var(--accent-cyan))"/>
          <circle cx="150" cy="134" r="6" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 4px var(--accent-cyan))"/>
          <circle cx="168" cy="134" r="6" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 4px var(--accent-cyan))"/>
          <circle cx="185" cy="134" r="6" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 4px var(--accent-cyan))"/>
        `;
      }
      
      svg.innerHTML = `
        <rect x="0" y="0" width="300" height="180" fill="#121216" rx="8"/>
        <line x1="20" y1="90" x2="280" y2="90" stroke="rgba(255,255,255,0.03)" stroke-width="1" stroke-dasharray="2,2"/>
        <line x1="150" y1="20" x2="150" y2="160" stroke="rgba(255,255,255,0.03)" stroke-width="1" stroke-dasharray="2,2"/>
        
        <!-- Concrete Section rect -->
        <rect x="100" y="30" width="100" height="120" fill="none" stroke="var(--accent-blue)" stroke-width="3" rx="4"/>
        <rect x="106" y="36" width="88" height="108" fill="rgba(59,130,246,0.04)" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
        
        <!-- Shear stirrup links -->
        <rect x="108" y="38" width="84" height="104" fill="none" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
        
        <!-- Top compression steel hanger bars -->
        <circle cx="116" cy="46" r="6" fill="#4b5563" stroke="#9ca3af"/>
        <circle cx="184" cy="46" r="6" fill="#4b5563" stroke="#9ca3af"/>
        
        <!-- Bottom Tension Rebars (Live counts) -->
        ${rebarsHtml}
        
        <!-- Dynamic dimension arrows and text labels -->
        <line x1="85" y1="30" x2="85" y2="150" stroke="var(--text-light)" stroke-width="1"/>
        <polygon points="85,30 82,36 88,36" fill="var(--text-light)"/>
        <polygon points="85,150 82,144 88,144" fill="var(--text-light)"/>
        <text x="75" y="90" fill="var(--text-light)" font-size="9.5" font-family="var(--font-mono)" text-anchor="middle" transform="rotate(-90 75 90)">d = ${dVal} mm</text>
        
        <line x1="100" y1="18" x2="200" y2="18" stroke="var(--text-light)" stroke-width="1"/>
        <polygon points="100,18 106,15 106,21" fill="var(--text-light)"/>
        <polygon points="200,18 194,15 194,21" fill="var(--text-light)"/>
        <text x="150" y="11" fill="var(--text-light)" font-size="9.5" font-family="var(--font-mono)" text-anchor="middle">b = ${bVal} mm</text>
        
        <text x="150" y="166" fill="var(--accent-cyan)" font-size="10" font-family="var(--font-title)" font-weight="bold" text-anchor="middle" filter="drop-shadow(0 0 3px var(--accent-cyan))">As = ${asVal} mm² (ρ = ${percentVal}%)</text>
      `;
    }

    // --- 7. FINITE ELEMENT BEAM BENDING (s1-10, s2-3, s5-6, s5-10) ---
    else if (sectionId === 's1-10' || sectionId === 's2-3' || sectionId === 's5-6' || sectionId === 's5-10') {
      const wVal = fields.inputs.find(i => i.coord === 'B54' || i.coord === 'B19' || i.coord === 'B53')?.value || 12;
      const lVal = fields.inputs.find(i => i.coord === 'B55' || i.coord === 'B20' || i.coord === 'B54')?.value || 4500;
      const defVal = fields.outputs.find(o => o.coord === 'B58' || o.coord === 'B21' || o.coord === 'B58')?.value || 5;
      
      const intensity = Math.min(145, 90 + Number(defVal) * 2.5);
      
      svg.innerHTML = `
        <rect x="0" y="0" width="300" height="180" fill="#121216" rx="8"/>
        
        <!-- Mesh Background -->
        <line x1="50" y1="40" x2="50" y2="150" stroke="rgba(255,255,255,0.015)"/>
        <line x1="150" y1="40" x2="150" y2="150" stroke="rgba(255,255,255,0.015)"/>
        <line x1="250" y1="40" x2="250" y2="150" stroke="rgba(255,255,255,0.015)"/>
        
        <!-- Support supports triangle markers -->
        <polygon points="50,90 42,102 58,102" fill="#475569" stroke="#94a3b8"/>
        <polygon points="250,90 242,102 258,102" fill="#475569" stroke="#94a3b8"/>
        
        <!-- Bending elastical mesh line with glowing gradient -->
        <path d="M 50,90 Q 150,${intensity} 250,90" fill="none" stroke="url(#stressGrad)" stroke-width="12" stroke-linecap="round" filter="url(#stressGlow)"/>
        <path d="M 50,90 Q 150,${intensity} 250,90" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
        
        <!-- Point or UDL load indicator -->
        <line x1="150" y1="30" x2="150" y2="${intensity - 12}" stroke="var(--accent-rose)" stroke-width="3" marker-end="url(#red-arrow)" filter="drop-shadow(0 0 3px var(--accent-rose))"/>
        <text x="150" y="24" fill="var(--accent-rose)" font-size="9.5" font-family="var(--font-mono)" font-weight="bold" text-anchor="middle">w = ${wVal} N/mm</text>
        
        <!-- Dimension arrow at bottom for L span -->
        <line x1="50" y1="135" x2="250" y2="135" stroke="var(--text-light)" stroke-width="1"/>
        <polygon points="50,135 56,132 56,138" fill="var(--text-light)"/>
        <polygon points="250,135 244,132 244,138" fill="var(--text-light)"/>
        <text x="150" y="147" fill="var(--text-light)" font-size="9.5" font-family="var(--font-mono)" text-anchor="middle">L = ${lVal} mm</text>
        
        <text x="150" y="${Math.max(122, intensity + 18)}" fill="var(--accent-cyan)" font-size="10.5" font-family="var(--font-title)" font-weight="bold" text-anchor="middle" filter="drop-shadow(0 0 3px var(--accent-cyan))">δmax = ${defVal} mm</text>
      `;
    }

    // --- 8. COLUMN DESIGN CAPACITY (s3-1) ---
    else if (sectionId === 's3-1') {
      const acVal = fields.inputs.find(i => i.coord === 'B7')?.value || 88800;
      const asVal = fields.inputs.find(i => i.coord === 'B8')?.value || 1200;
      const puVal = fields.outputs.find(o => o.coord === 'B9')?.value || 1222400;
      
      svg.innerHTML = `
        <rect x="0" y="0" width="300" height="180" fill="#121216" rx="8"/>
        
        <!-- Column cross section square -->
        <rect x="100" y="30" width="100" height="100" fill="none" stroke="var(--accent-blue)" stroke-width="3" rx="6"/>
        <rect x="106" y="36" width="88" height="88" fill="rgba(59,130,246,0.03)" stroke="rgba(255,255,255,0.05)"/>
        
        <!-- Main rebars in corners (circles) -->
        <circle cx="116" cy="46" r="8" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 3px var(--accent-cyan))"/>
        <circle cx="184" cy="46" r="8" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 3px var(--accent-cyan))"/>
        <circle cx="116" cy="114" r="8" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 3px var(--accent-cyan))"/>
        <circle cx="184" cy="114" r="8" fill="var(--accent-cyan)" stroke="#ffffff" filter="drop-shadow(0 0 3px var(--accent-cyan))"/>
        
        <!-- Lateral ties outline -->
        <rect x="110" y="40" width="80" height="80" fill="none" stroke="#6b7280" stroke-dasharray="3,3" stroke-width="1.2"/>
        
        <!-- Labels -->
        <text x="150" y="65" fill="var(--text-light)" font-size="9" font-family="var(--font-mono)" text-anchor="middle">Ac = ${acVal} mm²</text>
        <text x="150" y="80" fill="var(--text-light)" font-size="9" font-family="var(--font-mono)" text-anchor="middle">As = ${asVal} mm²</text>
        
        <text x="150" y="156" fill="var(--accent-cyan)" font-size="11" font-family="var(--font-title)" font-weight="bold" text-anchor="middle" filter="drop-shadow(0 0 3px var(--accent-cyan))">Axial Pu = ${Math.round(puVal/1000)} kN</text>
      `;
    }

    // --- 9. LATERAL TIE SPACING (s3-5) ---
    else if (sectionId === 's3-5') {
      const phiVal = fields.inputs.find(i => i.coord === 'B28')?.value || 20;
      const spacingVal = fields.outputs.find(o => o.coord === 'B31')?.value || 300;
      
      svg.innerHTML = `
        <rect x="0" y="0" width="300" height="180" fill="#121216" rx="8"/>
        
        <!-- Column elevation view -->
        <rect x="110" y="20" width="80" height="140" fill="none" stroke="var(--accent-blue)" stroke-width="2.5"/>
        
        <!-- Longitudinal rebars -->
        <line x1="120" y1="20" x2="120" y2="160" stroke="#475569" stroke-width="4"/>
        <line x1="180" y1="20" x2="180" y2="160" stroke="#475569" stroke-width="4"/>
        
        <!-- Lateral ties spacing loops -->
        <line x1="110" y1="40" x2="190" y2="40" stroke="var(--accent-cyan)" stroke-dasharray="2,2" stroke-width="1.5"/>
        <line x1="110" y1="75" x2="190" y2="75" stroke="var(--accent-cyan)" stroke-dasharray="2,2" stroke-width="1.5"/>
        <line x1="110" y1="110" x2="190" y2="110" stroke="var(--accent-cyan)" stroke-dasharray="2,2" stroke-width="1.5"/>
        <line x1="110" y1="145" x2="190" y2="145" stroke="var(--accent-cyan)" stroke-dasharray="2,2" stroke-width="1.5"/>
        
        <!-- Spacing dimension arrow -->
        <path d="M 95,75 L 95,110" stroke="var(--text-light)" stroke-width="1.2" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
        <text x="85" y="96" fill="var(--text-light)" font-size="9" font-family="var(--font-mono)" text-anchor="end">sv = ${spacingVal} mm</text>
        
        <!-- Main dia label -->
        <text x="202" y="55" fill="var(--text-muted)" font-size="9" font-family="var(--font-mono)">Bar φ = ${phiVal} mm</text>
        
        <text x="150" y="172" fill="var(--accent-cyan)" font-size="10.5" font-family="var(--font-title)" font-weight="bold" text-anchor="middle">Tie spacing limit sv = ${spacingVal} mm</text>
      `;
    }

    // --- 10. SAFE LOAD ON FOOTING (s3-7) ---
    else if (sectionId === 's3-7') {
      const pVal = fields.inputs.find(i => i.coord === 'B39')?.value || 450;
      const aVal = fields.inputs.find(i => i.coord === 'B40')?.value || 4;
      const qsVal = fields.outputs.find(o => o.coord === 'B41')?.value || 112.5;
      
      svg.innerHTML = `
        <rect x="0" y="0" width="300" height="180" fill="#121216" rx="8"/>
        
        <!-- Column stub on footing -->
        <rect x="135" y="20" width="30" height="40" fill="rgba(59,130,246,0.15)" stroke="var(--accent-blue)" stroke-width="2"/>
        <rect x="90" y="60" width="120" height="25" fill="rgba(59,130,246,0.06)" stroke="var(--accent-blue)" stroke-width="2" rx="2"/>
        
        <!-- Downward Column Force Vector -->
        <line x1="150" y1="10" x2="150" y2="50" stroke="var(--accent-rose)" stroke-width="3.5" marker-end="url(#red-arrow)" filter="drop-shadow(0 0 3px var(--accent-rose))"/>
        <text x="162" y="28" fill="var(--accent-rose)" font-size="10" font-family="var(--font-mono)" font-weight="bold">P = ${pVal} kN</text>
        
        <!-- Upward soil bearing pressures dynamic arrows -->
        <line x1="100" y1="120" x2="100" y2="92" stroke="var(--accent-cyan)" stroke-width="1.8" marker-end="url(#arrow)" filter="drop-shadow(0 0 2px var(--accent-cyan))"/>
        <line x1="125" y1="120" x2="125" y2="92" stroke="var(--accent-cyan)" stroke-width="1.8" marker-end="url(#arrow)" filter="drop-shadow(0 0 2px var(--accent-cyan))"/>
        <line x1="150" y1="120" x2="150" y2="92" stroke="var(--accent-cyan)" stroke-width="1.8" marker-end="url(#arrow)" filter="drop-shadow(0 0 2px var(--accent-cyan))"/>
        <line x1="175" y1="120" x2="175" y2="92" stroke="var(--accent-cyan)" stroke-width="1.8" marker-end="url(#arrow)" filter="drop-shadow(0 0 2px var(--accent-cyan))"/>
        <line x1="200" y1="120" x2="200" y2="92" stroke="var(--accent-cyan)" stroke-width="1.8" marker-end="url(#arrow)" filter="drop-shadow(0 0 2px var(--accent-cyan))"/>
        
        <!-- Soil level line -->
        <line x1="50" y1="122" x2="250" y2="122" stroke="var(--text-light)" stroke-width="1" stroke-dasharray="3,2"/>
        
        <!-- Labels -->
        <text x="150" y="80" fill="var(--text-light)" font-size="9.5" font-family="var(--font-mono)" text-anchor="middle">Footing Area = ${aVal} m²</text>
        <text x="150" y="145" fill="var(--accent-cyan)" font-size="11" font-family="var(--font-title)" font-weight="bold" text-anchor="middle" filter="drop-shadow(0 0 3px var(--accent-cyan))">Pressure qs = ${qsVal} kN/m²</text>
      `;
    }

    // --- 11. FLUID PIPE VENTURI CONTRACTION (s7-2) ---
    else if (sectionId === 's7-2') {
      const qVal = fields.outputs.find(o => o.coord === 'B14')?.value || 1;
      const v1Val = fields.outputs.find(o => o.coord === 'B12')?.value || 2.5;
      const v2Val = fields.outputs.find(o => o.coord === 'B13')?.value || 10;
      
      svg.innerHTML = `
        <rect x="0" y="0" width="300" height="180" fill="#121216" rx="8"/>
        
        <!-- Venturi reducer boundaries -->
        <path d="M 30,40 L 120,40 L 180,65 L 270,65 L 270,115 L 180,115 L 120,140 L 30,140 Z" fill="rgba(0, 240, 255, 0.03)" stroke="var(--accent-blue)" stroke-width="2"/>
        
        <!-- Fluid streamline particles animate at speeds -->
        <line x1="30" y1="65" x2="270" y2="65" stroke="var(--accent-cyan)" stroke-width="1.5" stroke-dasharray="8,6" stroke-dashoffset="${Date.now() / 15}" filter="drop-shadow(0 0 2px var(--accent-cyan))"/>
        <line x1="30" y1="90" x2="270" y2="90" stroke="var(--accent-cyan)" stroke-width="1.5" stroke-dasharray="12,8" stroke-dashoffset="${Date.now() / 10}" filter="drop-shadow(0 0 2px var(--accent-cyan))"/>
        <line x1="30" y1="115" x2="270" y2="115" stroke="var(--accent-cyan)" stroke-width="1.5" stroke-dasharray="8,6" stroke-dashoffset="${Date.now() / 15}" filter="drop-shadow(0 0 2px var(--accent-cyan))"/>
        
        <!-- Streamline dynamic text values overlay -->
        <text x="75" y="156" fill="var(--text-muted)" font-size="9.5" font-family="var(--font-mono)">v1 = ${v1Val} m/s</text>
        <text x="225" y="156" fill="var(--accent-cyan)" font-size="9.5" font-family="var(--font-mono)" font-weight="bold">v2 = ${v2Val} m/s</text>
        
        <text x="150" y="28" fill="var(--text-main)" font-size="10.5" font-family="var(--font-title)" font-weight="bold" text-anchor="middle">Flow Rate Q = ${qVal} m³/s</text>
      `;
      
      // Keep moving streamlines by forcing browser repaint
      setTimeout(() => {
        if (currentSectionId === 's7-2') {
          const viewer = document.getElementById('active-diagram-container');
          if (viewer) {
            const activeSvg = viewer.querySelector('svg');
            if (activeSvg) {
              const animated = animateSVG('s7-2', svgContent, fields);
              viewer.innerHTML = `<h3>Continuity Flow</h3>
                <div class="vector-diagram-card">
                  ${animated}
                  <div class="diagram-caption">Dynamic streamlines velocity compression profile</div>
                </div>`;
            }
          }
        }
      }, 50);
    }
  } catch (e) {
    console.error("Error drawing dynamic 2D CAD graphic:", e);
  }

  return new XMLSerializer().serializeToString(svg);
}

// --- PREMIUM DASHBOARD VIEW RENDERER ---
function renderDashboard(sheetId) {
  const inputsContainer = document.getElementById('dashboard-inputs-container');
  const resultsContainer = document.getElementById('dashboard-results-container');
  const activeDiagram = document.getElementById('active-diagram-container');
  const tabsContainer = document.getElementById('dashboard-sections-tabs');
  const sectionsList = document.getElementById('sidebar-sections-list');
  const sectionsWrapper = document.getElementById('sidebar-sections-container');
  
  inputsContainer.innerHTML = '';
  resultsContainer.innerHTML = '';
  activeDiagram.innerHTML = '';
  tabsContainer.innerHTML = '';
  sectionsList.innerHTML = '';
  
  const sheetConfig = SHEETS_CONFIG.find(sc => sc.id === sheetId);
  if (!sheetConfig) return;
  
  sectionsWrapper.style.display = 'block';
  
  if (!currentSectionId || !sheetConfig.sections.some(s => s.id === currentSectionId)) {
    currentSectionId = sheetConfig.sections[0].id;
  }
  
  sheetConfig.sections.forEach((sec, idx) => {
    const isActive = sec.id === currentSectionId;
    
    const sidebarItem = document.createElement('div');
    sidebarItem.className = `sidebar-section-item ${isActive ? 'active' : ''}`;
    sidebarItem.innerText = `0${idx + 1}. ${sec.name}`;
    sidebarItem.addEventListener('click', () => {
      currentSectionId = sec.id;
      renderDashboard(sheetId);
      updateSidebarSectionsList(sheetId);
    });
    sectionsList.appendChild(sidebarItem);
    
    const tabEl = document.createElement('div');
    tabEl.className = `dashboard-sub-tab ${isActive ? 'active' : ''}`;
    tabEl.innerText = sec.name;
    tabEl.addEventListener('click', () => {
      currentSectionId = sec.id;
      renderDashboard(sheetId);
      updateSidebarSectionsList(sheetId);
    });
    tabsContainer.appendChild(tabEl);
  });
  
  const activeSection = sheetConfig.sections.find(s => s.id === currentSectionId);
  if (!activeSection) return;
  
  const fields = getSectionFields(sheetId, activeSection);
  
  // --- Left Panel Parameters Form rendering ---
  fields.inputs.forEach(inp => {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    
    formGroup.innerHTML = `
      <div class="form-label-row">
        <label class="form-label" for="inp-${inp.coord}">${inp.label}</label>
        <span class="form-unit">${inp.unit}</span>
      </div>
      <div class="form-input-container">
        <button class="form-step-btn btn-dec" data-coord="${inp.coord}">−</button>
        <input type="text" class="form-input-control" id="inp-${inp.coord}" value="${inp.value}" data-coord="${inp.coord}">
        <button class="form-step-btn btn-inc" data-coord="${inp.coord}">+</button>
      </div>
      <input type="range" class="form-range-slider" min="${Math.round(inp.value * 0.1 * 100) / 100}" max="${Math.round(inp.value * 2.5 * 100) / 100}" step="${inp.value > 10 ? 1 : 0.1}" value="${inp.value}" data-coord="${inp.coord}">
    `;
    
    const txtInput = formGroup.querySelector(`.form-input-control`);
    const slider = formGroup.querySelector(`.form-range-slider`);
    const decBtn = formGroup.querySelector(`.btn-dec`);
    const incBtn = formGroup.querySelector(`.btn-inc`);
    
    const updateVal = (newVal) => {
      const sheet = sheetsData[sheetId];
      sheet.cellData[inp.coord].raw = String(newVal);
      sheet.cellData[inp.coord].value = newVal;
      
      calculateSheet(sheetId);
      
      txtInput.value = newVal;
      slider.value = newVal;
      
      const updatedFields = getSectionFields(sheetId, activeSection);
      updateRightPanel(sheetId, updatedFields);
      
      const diag = FORMULA_DIAGRAMS[currentSectionId];
      if (diag) {
        activeDiagram.innerHTML = `<h3>${diag.title}</h3>
          <div class="vector-diagram-card">
            ${animateSVG(currentSectionId, diag.svg, updatedFields)}
            <div class="diagram-caption">${diag.use}</div>
          </div>`;
      }
    };
    
    txtInput.addEventListener('change', (e) => {
      const val = Number(e.target.value);
      if (!isNaN(val)) updateVal(val);
    });
    
    slider.addEventListener('input', (e) => {
      updateVal(Number(e.target.value));
    });
    
    decBtn.addEventListener('click', () => {
      const current = Number(txtInput.value);
      const step = current > 10 ? 1 : 0.1;
      updateVal(Math.round((current - step) * 100) / 100);
    });
    
    incBtn.addEventListener('click', () => {
      const current = Number(txtInput.value);
      const step = current > 10 ? 1 : 0.1;
      updateVal(Math.round((current + step) * 100) / 100);
    });
    
    inputsContainer.appendChild(formGroup);
  });
  
  // --- Right Panel Concentric Circular Gauges & LED Indicators ---
  function updateRightPanel(sId, fld) {
    resultsContainer.innerHTML = '';
    
    const gaugeInfo = getSectionGaugeInfo(sId, currentSectionId, fld);
    const strokeDash = Math.round(251.2 * (1 - gaugeInfo.ratio));
    
    let colorGlow = 'var(--accent-cyan)';
    if (gaugeInfo.ratio > 0.9) {
      colorGlow = 'var(--accent-rose)'; // Alert overstress
    } else if (gaugeInfo.ratio > 0.75) {
      colorGlow = 'var(--accent-amber)'; // Warning
    }
    
    const gaugeCard = document.createElement('div');
    gaugeCard.className = 'gauge-visual-card';
    gaugeCard.innerHTML = `
      <div class="gauge-svg-container">
        <svg viewBox="0 0 100 100" style="width: 100%; height: 100%;">
          <circle cx="50" cy="50" r="40" class="gauge-circle-bg" />
          <circle cx="50" cy="50" r="40" class="gauge-circle-fill" style="stroke-dashoffset: ${strokeDash}; stroke: ${colorGlow};" />
        </svg>
        <span class="gauge-value-text">${Math.round(gaugeInfo.ratio * 100)}%</span>
      </div>
      <div class="gauge-info-text">
        <h4>${gaugeInfo.label}</h4>
        <p>${gaugeInfo.desc}</p>
      </div>
    `;
    resultsContainer.appendChild(gaugeCard);
    
    // Render Equation substitutions
    resultsContainer.innerHTML += renderLiveFormula(sId, currentSectionId);
    
    const divRes = document.createElement('div');
    divRes.className = 'results-section';
    divRes.innerHTML = `<div class="section-divider-label" style="margin-top: 12px;">Active Metrics Ledger</div>`;
    
    fld.outputs.forEach((out, idx) => {
      const isString = typeof out.value === 'string';
      const isDanger = isString && (out.value.includes('REDESIGN') || out.value.includes('INVALID') || out.value.includes('Error'));
      const isSafe = isString && out.value.includes('SAFE');
      
      let badgeHtml = '';
      if (isSafe) {
        badgeHtml = `<span class="metric-badge badge-safe">SAFE</span>`;
      } else if (isDanger) {
        badgeHtml = `<span class="metric-badge badge-danger">REDESIGN</span>`;
      }
      
      const card = document.createElement('div');
      card.className = 'metric-card';
      card.innerHTML = `
        <div class="metric-label-row">
          <span class="metric-label">${out.label}</span>
          ${badgeHtml}
        </div>
        <div class="metric-value-row">
          <span class="metric-value" id="val-${idx}">${out.value}</span>
          <span class="metric-unit">${out.unit}</span>
        </div>
      `;
      divRes.appendChild(card);
      
      // Roll up computed numbers dynamically using smooth animation transitions
      const targetValEl = card.querySelector(`#val-${idx}`);
      const valNum = Number(out.value);
      if (!isNaN(valNum) && targetValEl) {
        animateValue(targetValEl, Math.round(valNum * 0.4), valNum, 350);
      }
    });
    
    resultsContainer.appendChild(divRes);
  }
  
  updateRightPanel(sheetId, fields);
  
  // --- Center Panel Visualization CAD viewer ---
  const diag = FORMULA_DIAGRAMS[currentSectionId] || {
    title: activeSection.name,
    formula: activeSection.formula,
    use: "Engineering Formula Guide Reference Card",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic"><text x="150" y="90" text-anchor="middle" fill="var(--text-muted)">Visual Vector Diagram</text></svg>`,
  };
  
  activeDiagram.innerHTML = `
    <h3>${diag.title}</h3>
    <div class="vector-diagram-card">
      ${animateSVG(currentSectionId, diag.svg, fields)}
      <div class="diagram-caption">${diag.use}</div>
    </div>
  `;
}

// --- HIGH-FIDELITY RAW SPREADSHEET GRID VIEW RENDERER ---
function renderGrid(sheetId) {
  const gridContainer = document.getElementById('grid-container');
  gridContainer.innerHTML = '';
  
  const sheet = sheetsData[sheetId];
  const table = document.createElement('table');
  table.className = 'excel-table';
  
  const headerRow = document.createElement('tr');
  const cornerHeader = document.createElement('th');
  cornerHeader.className = 'corner-header';
  headerRow.appendChild(cornerHeader);
  
  for (let c = 0; c < maxCols; c++) {
    const colLetter = colIndexToLabel(c);
    const th = document.createElement('th');
    th.className = 'col-header';
    th.id = `col-header-${colLetter}`;
    th.innerText = colLetter;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);
  
  for (let r = 1; r <= maxRows; r++) {
    const tr = document.createElement('tr');
    const rowHeader = document.createElement('td');
    rowHeader.className = 'row-header';
    rowHeader.id = `row-header-${r}`;
    rowHeader.innerText = r;
    tr.appendChild(rowHeader);
    
    for (let c = 0; c < maxCols; c++) {
      const colLetter = colIndexToLabel(c);
      const coord = `${colLetter}${r}`;
      
      const td = document.createElement('td');
      td.className = 'excel-cell';
      td.dataset.coord = coord;
      
      const cell = sheet.cellData[coord];
      const style = sheet.styles[coord];
      
      if (cell) {
        td.innerText = cell.value !== undefined ? cell.value : cell.raw;
      }
      
      if (style) {
        if (style.bold) td.classList.add('cell-bold');
        if (style.italic) td.classList.add('cell-italic');
        if (style.align) td.classList.add(`align-${style.align}`);
        if (style.bgColor) td.style.backgroundColor = style.bgColor;
        if (style.color) td.style.color = style.color;
        if (style.fontSize) td.style.fontSize = `${style.fontSize}px`;
      }
      
      if (coord === sheet.selectedCell) {
        td.classList.add('cell-selected');
        highlightHeaders(colLetter, r);
      }
      
      td.addEventListener('dblclick', () => {
        enterCellEditMode(td, coord);
      });
      
      td.addEventListener('click', () => {
        selectCell(coord);
      });
      
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  
  gridContainer.appendChild(table);
}

function highlightHeaders(col, row) {
  document.querySelectorAll('.col-header.header-active').forEach(h => h.classList.remove('header-active'));
  document.querySelectorAll('.row-header.header-active').forEach(h => h.classList.remove('header-active'));
  
  const colHeader = document.getElementById(`col-header-${col}`);
  const rowHeader = document.getElementById(`row-header-${row}`);
  if (colHeader) colHeader.classList.add('header-active');
  if (rowHeader) rowHeader.classList.add('header-active');
}

function selectCell(coord) {
  if (isEditing) {
    saveCellEdit();
  }
  
  const currentSheet = sheetsData[currentSheetId];
  if (!currentSheet) return;
  
  const prevSelected = document.querySelector('.excel-cell.cell-selected');
  if (prevSelected) prevSelected.classList.remove('cell-selected');
  
  currentSheet.selectedCell = coord;
  activeCellCoord = coord;
  
  const cellElement = document.querySelector(`td[data-coord="${coord}"]`);
  if (cellElement) {
    cellElement.classList.add('cell-selected');
    const parsed = parseCoord(coord);
    if (parsed) {
      highlightHeaders(parsed.col, parsed.row);
      
      // Dynamic active section sync when clicking cells in Spreadsheet view!
      const sheetConfig = SHEETS_CONFIG.find(sc => sc.id === currentSheetId);
      if (sheetConfig) {
        const rowNum = parsed.row;
        const matchingSec = sheetConfig.sections.find(s => rowNum >= s.startRow && rowNum <= s.endRow);
        if (matchingSec && matchingSec.id !== currentSectionId) {
          currentSectionId = matchingSec.id;
          updateSidebarSectionsList(currentSheetId);
          if (viewMode === 'dashboard') {
            renderDashboard(currentSheetId);
          }
        }
      }
    }
  }
  
  const formulaInput = document.getElementById('formula-input');
  const coordDisplay = document.getElementById('active-cell-display');
  coordDisplay.innerText = coord;
  
  const cell = currentSheet.cellData[coord];
  formulaInput.value = cell && cell.raw ? cell.raw : '';
  
  updateToolbarButtonStates(coord);
}

function enterCellEditMode(td, coord) {
  if (isEditing) return;
  isEditing = true;
  td.classList.add('cell-focused');
  
  const sheet = sheetsData[currentSheetId];
  const cell = sheet.cellData[coord];
  
  const input = document.createElement('input');
  input.className = 'cell-edit-input';
  input.value = cell && cell.raw ? cell.raw : '';
  td.appendChild(input);
  input.focus();
  
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      saveCellEdit();
      moveSelection(0, 1);
    } else if (e.key === 'Escape') {
      cancelCellEdit(td);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      saveCellEdit();
      moveSelection(1, 0);
    }
  });
  
  input.addEventListener('blur', () => {
    if (isEditing) saveCellEdit();
  });
}

function saveCellEdit() {
  const activeInput = document.querySelector('.cell-edit-input');
  if (!activeInput) return;
  
  const newValue = activeInput.value;
  const parentTd = activeInput.parentElement;
  const coord = parentTd.dataset.coord;
  
  parentTd.classList.remove('cell-focused');
  activeInput.remove();
  
  const sheet = sheetsData[currentSheetId];
  const isFormula = newValue.startsWith('=');
  
  sheet.cellData[coord] = {
    raw: newValue,
    value: isFormula ? '' : newValue,
    formula: isFormula ? newValue : ''
  };
  
  isEditing = false;
  
  calculateSheet(currentSheetId);
  renderGrid(currentSheetId);
  selectCell(coord);
}

function cancelCellEdit(td) {
  const activeInput = document.querySelector('.cell-edit-input');
  if (activeInput) activeInput.remove();
  td.classList.remove('cell-focused');
  isEditing = false;
  selectCell(td.dataset.coord);
}

function moveSelection(colOffset, rowOffset) {
  if (!activeCellCoord) return;
  const parsed = parseCoord(activeCellCoord);
  if (!parsed) return;
  
  let colIndex = parsed.col.charCodeAt(0) - 65;
  let rowIndex = parsed.row;
  
  colIndex = Math.max(0, Math.min(maxCols - 1, colIndex + colOffset));
  rowIndex = Math.max(1, Math.min(maxRows, rowIndex + rowOffset));
  
  const newCoord = `${colIndexToLabel(colIndex)}${rowIndex}`;
  selectCell(newCoord);
  
  const newCellEl = document.querySelector(`td[data-coord="${newCoord}"]`);
  if (newCellEl) {
    newCellEl.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'nearest' });
  }
}

function updateToolbarButtonStates(coord) {
  const sheet = sheetsData[currentSheetId];
  const style = sheet.styles[coord] || {};
  
  const boldEl = document.getElementById('btn-bold');
  const italicEl = document.getElementById('btn-italic');
  if (boldEl) boldEl.classList.toggle('active', !!style.bold);
  if (italicEl) italicEl.classList.toggle('active', !!style.italic);
}

function applyFormat(styleProp, value) {
  if (!activeCellCoord) return;
  
  const sheet = sheetsData[currentSheetId];
  if (!sheet.styles[activeCellCoord]) {
    sheet.styles[activeCellCoord] = {};
  }
  
  const cellStyle = sheet.styles[activeCellCoord];
  
  if (styleProp === 'bold' || styleProp === 'italic') {
    cellStyle[styleProp] = !cellStyle[styleProp];
  } else {
    cellStyle[styleProp] = value;
  }
  
  renderGrid(currentSheetId);
  selectCell(activeCellCoord);
}

function formatLatexToUnicode(str) {
  if (!str) return '';
  let s = str;
  
  let iterations = 0;
  while (s.includes('\\frac') && iterations < 10) {
    const next = s.replace(/\\frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, '($1)/($2)');
    if (next === s) {
      s = s.replace(/\\frac/g, '');
      break;
    }
    s = next;
    iterations++;
  }
  
  const symbols = {
    '\\sigma': 'σ', '\\tau': 'τ', '\\gamma': 'γ', '\\delta': 'δ', '\\theta': 'θ',
    '\\alpha': 'α', '\\beta': 'β', '\\phi': 'φ', '\\lambda': 'λ', '\\rho': 'ρ',
    '\\Delta': 'Δ', '\\sum': '∑', '\\times': ' × ', '\\cdot': ' · ', '\\sqrt': '√',
    '\\le': ' ≤ ', '\\ge': ' ≥ ', '\\quad': '   ', '\\text': ''
  };
  
  Object.keys(symbols).forEach(key => {
    s = s.replaceAll(key, symbols[key]);
  });
  
  s = s.replaceAll('{', '').replaceAll('}', '');
  s = s.replace(/\^2\b/g, '²').replace(/\^3\b/g, '³').replace(/\^4\b/g, '⁴');
  s = s.replaceAll('\\', '');
  
  return s;
}

function renderInstructions(container) {
  container.innerHTML = `
    <div class="instructions-overlay">
      <h2>Civil &amp; Structural Engineering Workspace</h2>
      <p class="instructions-subtitle">Fusione di calcoli reattivi in stile Excel con bellissime visualizzazioni CAD e pannelli moderni.</p>
      
      <div class="guide-grid">
        <div class="guide-card">
          <div class="guide-card-icon">💻</div>
          <h3>Modern Bi-Modal Workspace</h3>
          <p>Switch dynamically between the <strong>📊 Dashboard View</strong> (clean forms, live schematics, safety thresholds) and the <strong>🔢 Spreadsheet Grid View</strong> (Figma-style dark cells editor) using the header control.</p>
        </div>
        <div class="guide-card">
          <div class="guide-card-icon">📐</div>
          <h3>Live CAD Simulations</h3>
          <p>Engineering visuals in the Center Panel adapt in real-time as parameters slider scales. Load arrows, structural deflections, and sewer pipes wetted profiles animate dynamically.</p>
        </div>
        <div class="guide-card">
          <div class="guide-card-icon">📚</div>
          <h3>Equation Substitutions</h3>
          <p>Formulas substitute variables with their actual values in real time to display fully expanded equations, showing calculations clearly for audit reports.</p>
        </div>
      </div>
      
      <div class="quick-launch-deck" style="margin-top: 30px;">
        <h3>Launch Module Calculator</h3>
        <div class="launch-grid">
          ${SHEETS_CONFIG.map(sheet => `
            <div class="launch-card" data-sheet="${sheet.id}">
              <h4>${sheet.name}</h4>
              <span>${sheet.description}</span>
            </div>
          `).join('')}
          <div class="launch-card" data-sheet="sheet-custom" style="border-style: dashed;">
            <h4>Custom Sheet</h4>
            <span>Empty spreadsheet canvas to build custom structural calculations</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  container.querySelectorAll('.launch-card').forEach(card => {
    card.addEventListener('click', () => {
      switchSheet(card.dataset.sheet);
    });
  });
}

function updateSidebarSectionsList(sheetId) {
  const sectionsWrapper = document.getElementById('sidebar-sections-container');
  const sectionsList = document.getElementById('sidebar-sections-list');
  sectionsList.innerHTML = '';
  
  if (sheetId === 'instructions' || sheetId === 'sheet-custom') {
    sectionsWrapper.style.display = 'none';
    return;
  }
  
  sectionsWrapper.style.display = 'block';
  const sheetConfig = SHEETS_CONFIG.find(sc => sc.id === sheetId);
  if (!sheetConfig) return;
  
  sheetConfig.sections.forEach((sec, idx) => {
    const isActive = sec.id === currentSectionId;
    const sidebarItem = document.createElement('div');
    sidebarItem.className = `sidebar-section-item ${isActive ? 'active' : ''}`;
    
    // Double digit formatting for technical layouts
    const prefix = (idx + 1) < 10 ? '0' + (idx + 1) : (idx + 1);
    sidebarItem.innerText = `${prefix}. ${sec.name}`;
    
    sidebarItem.addEventListener('click', () => {
      currentSectionId = sec.id;
      updateSidebarSectionsList(sheetId);
      
      if (viewMode === 'dashboard') {
        renderDashboard(sheetId);
      } else {
        // In Spreadsheet View: scroll directly to the selected section!
        const targetCoord = `B${sec.startRow + 1}`;
        selectCell(targetCoord);
        
        setTimeout(() => {
          const targetCellEl = document.querySelector(`td[data-coord="${targetCoord}"]`);
          if (targetCellEl) {
            targetCellEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 50);
      }
    });
    sectionsList.appendChild(sidebarItem);
  });
}

function switchSheet(sheetId) {
  currentSheetId = sheetId;
  
  document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.toggle('active', item.dataset.sheet === sheetId);
  });
  
  const sheetConfig = SHEETS_CONFIG.find(sc => sc.id === sheetId);
  
  const titleEl = document.getElementById('active-sheet-title');
  const descEl = document.getElementById('active-sheet-desc');
  if (sheetId === 'instructions') {
    titleEl.innerText = 'Instructions & Guide';
    descEl.innerText = 'Get started with our premium engineering suite';
  } else if (sheetId === 'sheet-custom') {
    titleEl.innerText = 'Custom Spreadsheet';
    descEl.innerText = 'Blank engineering formula workspace';
  } else if (sheetConfig) {
    titleEl.innerText = sheetConfig.name;
    descEl.innerText = sheetConfig.description;
  }
  
  const switcher = document.getElementById('view-mode-toggle');
  if (sheetId === 'instructions') {
    switcher.style.opacity = '0';
    switcher.style.pointerEvents = 'none';
    viewMode = 'dashboard';
  } else if (sheetId === 'sheet-custom') {
    switcher.style.opacity = '0';
    switcher.style.pointerEvents = 'none';
    viewMode = 'grid';
  } else {
    switcher.style.opacity = '1';
    switcher.style.pointerEvents = 'auto';
  }
  
  if (sheetId !== 'instructions' && sheetId !== 'sheet-custom') {
    calculateSheet(sheetId);
    currentSectionId = sheetConfig.sections[0].id;
  }
  
  updateViewContainerState();
  updateSidebarSectionsList(sheetId);
}

function updateViewContainerState() {
  const dashContainer = document.getElementById('dashboard-view-container');
  const gridContainer = document.getElementById('grid-view-container');
  const instContainer = document.getElementById('instructions-view-container');
  
  const btnDashboard = document.getElementById('btn-view-dashboard');
  const btnGrid = document.getElementById('btn-view-grid');
  
  btnDashboard.classList.toggle('active', viewMode === 'dashboard');
  btnGrid.classList.toggle('active', viewMode === 'grid');
  
  if (currentSheetId === 'instructions') {
    dashContainer.classList.add('hidden');
    gridContainer.classList.add('hidden');
    instContainer.classList.remove('hidden');
    renderInstructions(instContainer);
  } else if (currentSheetId === 'sheet-custom') {
    dashContainer.classList.add('hidden');
    gridContainer.classList.remove('hidden');
    instContainer.classList.add('hidden');
    renderGrid(currentSheetId);
    selectCell('A1');
  } else {
    instContainer.classList.add('hidden');
    if (viewMode === 'dashboard') {
      dashContainer.classList.remove('hidden');
      gridContainer.classList.add('hidden');
      renderDashboard(currentSheetId);
    } else {
      dashContainer.classList.add('hidden');
      gridContainer.classList.remove('hidden');
      renderGrid(currentSheetId);
      
      const sheetConfig = SHEETS_CONFIG.find(sc => sc.id === currentSheetId);
      if (sheetConfig && currentSectionId) {
        const sec = sheetConfig.sections.find(s => s.id === currentSectionId);
        if (sec) {
          const targetCoord = `B${sec.startRow + 1}`;
          selectCell(targetCoord);
          setTimeout(() => {
            const targetCellEl = document.querySelector(`td[data-coord="${targetCoord}"]`);
            if (targetCellEl) {
              targetCellEl.scrollIntoView({ behavior: 'auto', block: 'center' });
            }
          }, 50);
        }
      } else {
        const sheetState = sheetsData[currentSheetId];
        selectCell(sheetState.selectedCell || 'B5');
      }
    }
  }
}

// --- FLOATING CMD SEARCH OVERLAYS ---
let commandResults = [];
let selectedCommandIndex = 0;

const commands = [
  { name: "Instructions & Guide", type: "navigation", sheet: "instructions" },
  { name: "Concrete Calculator", type: "navigation", sheet: "sheet-1" },
  { name: "Beam & Slab Design", type: "navigation", sheet: "sheet-2" },
  { name: "Column & Footing", type: "navigation", sheet: "sheet-3" },
  { name: "Soil Mechanics", type: "navigation", sheet: "sheet-4" },
  { name: "Structural Analysis", type: "navigation", sheet: "sheet-5" },
  { name: "Steel Design", type: "navigation", sheet: "sheet-6" },
  { name: "Fluid Mechanics", type: "navigation", sheet: "sheet-7" },
  { name: "Surveying", type: "navigation", sheet: "sheet-8" },
  { name: "Transportation Eng", type: "navigation", sheet: "sheet-9" },
  { name: "Environmental Eng", type: "navigation", sheet: "sheet-10" },
  { name: "Custom Blank Canvas", type: "navigation", sheet: "sheet-custom" },
  { name: "Switch to Dashboard View", type: "action", action: "view-dashboard" },
  { name: "Switch to Grid Spreadsheet", type: "action", action: "view-grid" },
  { name: "Print PDF Report", type: "action", action: "print" },
  { name: "Export Active Sheet as CSV", type: "action", action: "export" },
  { name: "Import CSV Data file", type: "action", action: "import" }
];

SHEETS_CONFIG.forEach(sheet => {
  sheet.sections.forEach(sec => {
    commands.push({
      name: `${sheet.name}: ${sec.name}`,
      type: "section",
      sheet: sheet.id,
      section: sec.id
    });
  });
});

function toggleCommandBar(show) {
  const overlay = document.getElementById('cmd-bar-overlay');
  const input = document.getElementById('cmd-bar-input');
  
  if (show) {
    overlay.classList.add('visible');
    input.value = '';
    input.focus();
    renderCommandResults('');
  } else {
    overlay.classList.remove('visible');
  }
}

function renderCommandResults(query) {
  const resultsContainer = document.getElementById('cmd-bar-results');
  resultsContainer.innerHTML = '';
  
  const q = query.toLowerCase().trim();
  commandResults = commands.filter(cmd => cmd.name.toLowerCase().includes(q));
  selectedCommandIndex = 0;
  
  if (commandResults.length === 0) {
    resultsContainer.innerHTML = `<div style="padding: 16px; text-align: center; color: var(--text-light); font-size: 13px;">No commands found matching "${query}"</div>`;
    return;
  }
  
  commandResults.forEach((cmd, idx) => {
    const isSelected = idx === selectedCommandIndex;
    const item = document.createElement('div');
    item.className = `cmd-bar-result-item ${isSelected ? 'selected' : ''}`;
    
    let badgeText = cmd.type.toUpperCase();
    
    item.innerHTML = `
      <div class="result-item-left">
        <span class="result-item-icon">⚙️</span>
        <div>
          <div class="result-item-name">${cmd.name}</div>
          <div class="result-item-cat">${badgeText}</div>
        </div>
      </div>
      <span class="result-item-shortcut">Enter</span>
    `;
    
    item.addEventListener('click', () => {
      executeCommand(cmd);
    });
    
    resultsContainer.appendChild(item);
  });
}

function executeCommand(cmd) {
  toggleCommandBar(false);
  
  if (cmd.type === 'navigation') {
    switchSheet(cmd.sheet);
  } else if (cmd.type === 'section') {
    switchSheet(cmd.sheet);
    currentSectionId = cmd.section;
    renderDashboard(cmd.sheet);
    updateSidebarSectionsList(cmd.sheet);
  } else if (cmd.type === 'action') {
    if (cmd.action === 'view-dashboard') {
      viewMode = 'dashboard';
      updateViewContainerState();
    } else if (cmd.action === 'view-grid') {
      viewMode = 'grid';
      updateViewContainerState();
    } else if (cmd.action === 'print') {
      window.print();
    } else if (cmd.action === 'export') {
      exportToCSV();
    } else if (cmd.action === 'import') {
      document.getElementById('csv-file-loader').click();
    }
  }
}

// --- CSV UTILITIES ---
function exportToCSV() {
  if (currentSheetId === 'instructions') {
    alert('Switch to a calculations module to export.');
    return;
  }
  
  const sheet = sheetsData[currentSheetId];
  let csvContent = "";
  
  for (let r = 1; r <= maxRows; r++) {
    const rowCells = [];
    for (let c = 0; c < maxCols; c++) {
      const coord = `${colIndexToLabel(c)}${r}`;
      const cell = sheet.cellData[coord];
      const val = cell ? (cell.value !== undefined ? cell.value : cell.raw) : "";
      
      let escaped = String(val).replace(/"/g, '""');
      if (escaped.includes(',') || escaped.includes('"') || escaped.includes('\n')) {
        escaped = `"${escaped}"`;
      }
      rowCells.push(escaped);
    }
    csvContent += rowCells.join(",") + "\n";
  }
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `${currentSheetId}_report.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function importCSV(e) {
  if (currentSheetId === 'instructions') {
    alert('Select a calculation module to import CSV.');
    return;
  }
  
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(evt) {
    const text = evt.target.result;
    const lines = text.split('\n');
    const sheet = sheetsData[currentSheetId];
    
    sheet.cellData = {};
    
    lines.forEach((line, rIndex) => {
      const r = rIndex + 1;
      if (r > maxRows) return;
      
      const cells = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      cells.forEach((val, cIndex) => {
        const colLetter = colIndexToLabel(cIndex);
        if (cIndex >= maxCols) return;
        
        let cleanedVal = val.trim();
        if (cleanedVal.startsWith('"') && cleanedVal.endsWith('"')) {
          cleanedVal = cleanedVal.substring(1, cleanedVal.length - 1).replace(/""/g, '"');
        }
        
        if (cleanedVal !== '') {
          const isFormula = cleanedVal.startsWith('=');
          sheet.cellData[`${colLetter}${r}`] = {
            raw: cleanedVal,
            value: isFormula ? '' : cleanedVal,
            formula: isFormula ? cleanedVal : ''
          };
        }
      });
    });
    
    calculateSheet(currentSheetId);
    updateViewContainerState();
  };
  reader.readAsText(file);
}

// --- Wire Up Global Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
  switchSheet('instructions');
  
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      switchSheet(item.dataset.sheet);
    });
  });
  
  document.getElementById('btn-view-dashboard').addEventListener('click', () => {
    viewMode = 'dashboard';
    updateViewContainerState();
  });
  
  document.getElementById('btn-view-grid').addEventListener('click', () => {
    viewMode = 'grid';
    updateViewContainerState();
  });
  
  document.getElementById('btn-search-trigger').addEventListener('click', () => {
    toggleCommandBar(true);
  });
  
  const cmdOverlay = document.getElementById('cmd-bar-overlay');
  cmdOverlay.addEventListener('click', (e) => {
    if (e.target === cmdOverlay) toggleCommandBar(false);
  });
  
  const cmdInput = document.getElementById('cmd-bar-input');
  cmdInput.addEventListener('input', (e) => {
    renderCommandResults(e.target.value);
  });
  
  cmdInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleCommandBar(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedCommandIndex = Math.min(commandResults.length - 1, selectedCommandIndex + 1);
      renderCommandResults(cmdInput.value);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedCommandIndex = Math.max(0, selectedCommandIndex - 1);
      renderCommandResults(cmdInput.value);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (commandResults[selectedCommandIndex]) {
        executeCommand(commandResults[selectedCommandIndex]);
      }
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      toggleCommandBar(true);
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (isEditing || viewMode === 'dashboard') return;
    
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveSelection(0, -1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      moveSelection(0, 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      moveSelection(-1, 0);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      moveSelection(1, 0);
    } else if (e.key === 'Delete' || e.key === 'Backspace') {
      if (activeCellCoord) {
        const sheet = sheetsData[currentSheetId];
        sheet.cellData[activeCellCoord] = { raw: '', value: '', formula: '' };
        calculateSheet(currentSheetId);
        renderGrid(currentSheetId);
        selectCell(activeCellCoord);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeCellCoord) {
        const td = document.querySelector(`td[data-coord="${activeCellCoord}"]`);
        if (td) enterCellEditMode(td, activeCellCoord);
      }
    }
  });

  const formulaInput = document.getElementById('formula-input');
  formulaInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (!activeCellCoord) return;
      const sheet = sheetsData[currentSheetId];
      const isFormula = formulaInput.value.startsWith('=');
      
      sheet.cellData[activeCellCoord] = {
        raw: formulaInput.value,
        value: isFormula ? '' : formulaInput.value,
        formula: isFormula ? formulaInput.value : ''
      };
      
      formulaInput.blur();
      calculateSheet(currentSheetId);
      renderGrid(currentSheetId);
      selectCell(activeCellCoord);
    }
  });
  
  document.getElementById('btn-export-csv').addEventListener('click', exportToCSV);
  const csvFileLoader = document.getElementById('csv-file-loader');
  document.getElementById('btn-import-csv').addEventListener('click', () => {
    csvFileLoader.click();
  });
  csvFileLoader.addEventListener('change', importCSV);
  
  document.getElementById('btn-print-report').addEventListener('click', () => {
    window.print();
  });
  
  const themeBtn = document.getElementById('theme-toggle');
  themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', targetTheme);
    
    themeBtn.innerHTML = targetTheme === 'dark' 
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  });

  // Mobile Sidebar Drawer Toggle Events
  const sidebar = document.getElementById('sidebar-nav');
  const sidebarOverlay = document.getElementById('mobile-sidebar-overlay');
  const mobileToggle = document.getElementById('btn-sidebar-mobile-toggle');
  
  function toggleMobileSidebar(show) {
    if (show) {
      sidebar.classList.add('mobile-open');
      sidebarOverlay.classList.add('active');
    } else {
      sidebar.classList.remove('mobile-open');
      sidebarOverlay.classList.remove('active');
    }
  }
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileSidebar(true));
  }
  
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => toggleMobileSidebar(false));
  }
  
  // Close mobile sidebar automatically on navigation clicks
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      toggleMobileSidebar(false);
    });
  });
});
