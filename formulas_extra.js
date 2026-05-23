// Supplemental Engineering Grids & Diagrams (Parts 6, 7, 8 & 9)
// This file appends extra calculator configurations and CAD-style vector diagrams directly to the global window storage.

if (!window.SHEETS_CONFIG) window.SHEETS_CONFIG = [];
if (!window.FORMULA_DIAGRAMS) window.FORMULA_DIAGRAMS = {};

// --- 1. Append Sheets configurations ---
window.SHEETS_CONFIG.push(...[
  {
    id: "sheet-6",
    name: "Steel Structure Design",
    description: "Steel Structures Sizing & Connection Capacities (Part 6)",
    sections: [
      { id: "s6-1", name: "Slenderness Ratio of Steel Member", startRow: 4, endRow: 7, formula: "lambda = Leff / rmin" },
      { id: "s6-2", name: "Compressive Strength (Axial Member)", startRow: 9, endRow: 12, formula: "Pd = Ag * fcd" },
      { id: "s6-3", name: "Design Strength (Tension Yielding)", startRow: 14, endRow: 18, formula: "Tdg = (Ag * fy) / ymo" },
      { id: "s6-4", name: "Euler's Buckling Load", startRow: 20, endRow: 24, formula: "Pe = (PI()^2 * E * I) / Leff^2" },
      { id: "s6-5", name: "Moment Capacity of Steel Section", startRow: 26, endRow: 30, formula: "Md = (fy * Zp) / ymo" },
      { id: "s6-6", name: "Shear Capacity of Steel Section", startRow: 32, endRow: 36, formula: "Vd = (fy * Aw) / (SQRT(3) * ymo)" },
      { id: "s6-7", name: "Weld Strength (Fillet Weld)", startRow: 38, endRow: 42, formula: "P = 0.7 * s * Lw * fwd" },
      { id: "s6-8", name: "Bolt Shear Capacity", startRow: 44, endRow: 48, formula: "Vdsb = (fub * Anb) / (SQRT(3) * ymb)" },
      { id: "s6-9", name: "Bearing Capacity of Bolt", startRow: 50, endRow: 55, formula: "Vdpb = (2.5 * kb * d * t * fu) / ymb" },
      { id: "s6-10", name: "Plastic & Design Moment Capacity", startRow: 57, endRow: 62, formula: "Md = (bb * Zp * fy) / ymo" }
    ],
    defaultCells: {
      "A2": { v: "STEEL STRUCTURE DESIGN FORMULAS - CALCULATOR", style: { bold: true, fontSize: 16, color: "#1e3a8a" } },
      "A3": { v: "Design specifications in compliance with IS 800 standards", style: { italic: true, fontSize: 11, color: "#475569" } },
      
      // s6-1
      "A4": { v: "1. SLENDERNESS RATIO OF STEEL MEMBER", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B4": { v: "", style: { bgColor: "#1e40af" } }, "C4": { v: "", style: { bgColor: "#1e40af" } }, "D4": { v: "", style: { bgColor: "#1e40af" } },
      "A5": { v: "Effective Length (Leff)" }, "B5": { v: "3200", style: { bgColor: "#dbeafe", align: "right" } }, "C5": { v: "mm" },
      "A6": { v: "Min Radius of Gyration (rmin)" }, "B6": { v: "24.5", style: { bgColor: "#dbeafe", align: "right" } }, "C6": { v: "mm" },
      "A7": { v: "Slenderness Ratio (\u03BB)" }, "B7": { v: "=B5/B6", style: { bold: true, align: "right" } }, "C7": { v: "(ratio)" },

      // s6-2
      "A9": { v: "2. COMPRESSIVE STRENGTH (AXIAL COMPRESSION MEMBER)", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B9": { v: "", style: { bgColor: "#1e40af" } }, "C9": { v: "", style: { bgColor: "#1e40af" } }, "D9": { v: "", style: { bgColor: "#1e40af" } },
      "A10": { v: "Gross Area (Ag)" }, "B10": { v: "4500", style: { bgColor: "#dbeafe", align: "right" } }, "C10": { v: "mm²" },
      "A11": { v: "Design Stress (fcd)" }, "B11": { v: "135", style: { bgColor: "#dbeafe", align: "right" } }, "C11": { v: "N/mm²" },
      "A12": { v: "Design strength (Pd)" }, "B12": { v: "=B10*B11", style: { bold: true, align: "right" } }, "C12": { v: "N" },

      // s6-3
      "A14": { v: "3. DESIGN STRENGTH OF STEEL MEMBER (TENSION YIELDING)", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B14": { v: "", style: { bgColor: "#1e40af" } }, "C14": { v: "", style: { bgColor: "#1e40af" } }, "D14": { v: "", style: { bgColor: "#1e40af" } },
      "A15": { v: "Gross Area (Ag)" }, "B15": { v: "2400", style: { bgColor: "#dbeafe", align: "right" } }, "C15": { v: "mm²" },
      "A16": { v: "Yield Strength (fy)" }, "B16": { v: "250", style: { bgColor: "#dbeafe", align: "right" } }, "C16": { v: "N/mm²" },
      "A17": { v: "Safety Factor (\u03B3mo)" }, "B17": { v: "1.1", style: { bgColor: "#dbeafe", align: "right" } }, "C17": { v: "(limit state factor)" },
      "A18": { v: "Tension Capacity (Tdg)" }, "B18": { v: "=(B15*B16)/B17", style: { bold: true, align: "right" } }, "C18": { v: "N" },

      // s6-4
      "A20": { v: "4. EULER'S BUCKLING LOAD", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B20": { v: "", style: { bgColor: "#1e40af" } }, "C20": { v: "", style: { bgColor: "#1e40af" } }, "D20": { v: "", style: { bgColor: "#1e40af" } },
      "A21": { v: "Modulus of Elasticity (E)" }, "B21": { v: "200000", style: { bgColor: "#dbeafe", align: "right" } }, "C21": { v: "N/mm²" },
      "A22": { v: "Moment of Inertia (I)" }, "B22": { v: "8500000", style: { bgColor: "#dbeafe", align: "right" } }, "C22": { v: "mm⁴" },
      "A23": { v: "Effective Length (Leff)" }, "B23": { v: "3200", style: { bgColor: "#dbeafe", align: "right" } }, "C23": { v: "mm" },
      "A24": { v: "Buckling Load (Pe)" }, "B24": { v: "=(PI()^2*B21*B22)/POW(B23,2)", style: { bold: true, align: "right" } }, "C24": { v: "N" },

      // s6-5
      "A26": { v: "5. MOMENT CAPACITY OF STEEL SECTION", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B26": { v: "", style: { bgColor: "#1e40af" } }, "C26": { v: "", style: { bgColor: "#1e40af" } }, "D26": { v: "", style: { bgColor: "#1e40af" } },
      "A27": { v: "Yield Strength (fy)" }, "B27": { v: "250", style: { bgColor: "#dbeafe", align: "right" } }, "C27": { v: "N/mm²" },
      "A28": { v: "Plastic Section Modulus (Zp)" }, "B28": { v: "450000", style: { bgColor: "#dbeafe", align: "right" } }, "C28": { v: "mm³" },
      "A29": { v: "Safety Factor (\u03B3mo)" }, "B29": { v: "1.1", style: { bgColor: "#dbeafe", align: "right" } }, "C29": { v: "1.10" },
      "A30": { v: "Design Moment (Md)" }, "B30": { v: "=(B27*B28)/B29", style: { bold: true, align: "right" } }, "C30": { v: "N·mm" },

      // s6-6
      "A32": { v: "6. SHEAR CAPACITY OF STEEL SECTION", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B32": { v: "", style: { bgColor: "#1e40af" } }, "C32": { v: "", style: { bgColor: "#1e40af" } }, "D32": { v: "", style: { bgColor: "#1e40af" } },
      "A33": { v: "Yield Strength (fy)" }, "B33": { v: "250", style: { bgColor: "#dbeafe", align: "right" } }, "C33": { v: "N/mm²" },
      "A34": { v: "Shear Area of Web (Aw)" }, "B34": { v: "1800", style: { bgColor: "#dbeafe", align: "right" } }, "C34": { v: "mm²" },
      "A35": { v: "Safety Factor (\u03B3mo)" }, "B35": { v: "1.1", style: { bgColor: "#dbeafe", align: "right" } }, "C35": { v: "1.10" },
      "A36": { v: "Design Shear (Vd)" }, "B36": { v: "=(B33*B34)/(SQRT(3)*B35)", style: { bold: true, align: "right" } }, "C36": { v: "N" },

      // s6-7
      "A38": { v: "7. WELD STRENGTH (FILLET WELD)", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B38": { v: "", style: { bgColor: "#1e40af" } }, "C38": { v: "", style: { bgColor: "#1e40af" } }, "D38": { v: "", style: { bgColor: "#1e40af" } },
      "A39": { v: "Size of Weld (s)" }, "B39": { v: "6", style: { bgColor: "#dbeafe", align: "right" } }, "C39": { v: "mm" },
      "A40": { v: "Effective Length (Lw)" }, "B40": { v: "120", style: { bgColor: "#dbeafe", align: "right" } }, "C40": { v: "mm" },
      "A41": { v: "Design Weld Stress (fwd)" }, "B41": { v: "189", style: { bgColor: "#dbeafe", align: "right" } }, "C41": { v: "N/mm²" },
      "A42": { v: "Weld Strength Capacity (P)" }, "B42": { v: "=0.7*B39*B40*B41", style: { bold: true, align: "right" } }, "C42": { v: "N" },

      // s6-8
      "A44": { v: "8. BOLT SHEAR CAPACITY", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B44": { v: "", style: { bgColor: "#1e40af" } }, "C44": { v: "", style: { bgColor: "#1e40af" } }, "D44": { v: "", style: { bgColor: "#1e40af" } },
      "A45": { v: "Ult Tensile of Bolt (fub)" }, "B45": { v: "400", style: { bgColor: "#dbeafe", align: "right" } }, "C45": { v: "N/mm²" },
      "A46": { v: "Net Tensile Area (Anb)" }, "B46": { v: "245", style: { bgColor: "#dbeafe", align: "right" } }, "C46": { v: "mm²" },
      "A47": { v: "Safety Factor (\u03B3mb)" }, "B47": { v: "1.25", style: { bgColor: "#dbeafe", align: "right" } }, "C47": { v: "1.25" },
      "A48": { v: "Bolt Shear Strength (Vdsb)" }, "B48": { v: "=(B45*B46)/(SQRT(3)*B47)", style: { bold: true, align: "right" } }, "C48": { v: "N" },

      // s6-9
      "A50": { v: "9. BEARING CAPACITY OF BOLT", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B50": { v: "", style: { bgColor: "#1e40af" } }, "C50": { v: "", style: { bgColor: "#1e40af" } }, "D50": { v: "", style: { bgColor: "#1e40af" } },
      "A51": { v: "Bearing Factor (kb)" }, "B51": { v: "0.55", style: { bgColor: "#dbeafe", align: "right" } }, "C51": { v: "(ratio)" },
      "A52": { v: "Nominal Bolt Diam (d)" }, "B52": { v: "20", style: { bgColor: "#dbeafe", align: "right" } }, "C52": { v: "mm" },
      "A53": { v: "Plate Thickness (t)" }, "B53": { v: "10", style: { bgColor: "#dbeafe", align: "right" } }, "C53": { v: "mm" },
      "A54": { v: "Ult Tensile of Plate (fu)" }, "B54": { v: "410", style: { bgColor: "#dbeafe", align: "right" } }, "C54": { v: "N/mm²" },
      "A55": { v: "Bearing Capacity (Vdpb)" }, "B55": { v: "=(2.5*B51*B52*B53*B54)/1.25", style: { bold: true, align: "right" } }, "C55": { v: "N" },

      // s6-10
      "A57": { v: "10. PLASTIC & DESIGN MOMENT CAPACITY", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B57": { v: "", style: { bgColor: "#1e40af" } }, "C57": { v: "", style: { bgColor: "#1e40af" } }, "D57": { v: "", style: { bgColor: "#1e40af" } },
      "A58": { v: "Theoretical moment (Mp)" }, "B58": { v: "=B27*B28", style: { align: "right" } }, "C58": { v: "N·mm" },
      "A59": { v: "Classification factor (bb)" }, "B59": { v: "1.0", style: { bgColor: "#dbeafe", align: "right" } }, "C59": { v: "(=1.0 for plastic)" },
      "A60": { v: "Plastic Section Modulus (Zp)" }, "B60": { v: "=B28", style: { align: "right" } }, "C60": { v: "mm³" },
      "A61": { v: "Yield Strength (fy)" }, "B61": { v: "=B27", style: { align: "right" } }, "C61": { v: "N/mm²" },
      "A62": { v: "Design moment (Md)" }, "B62": { v: "=(B59*B60*B61)/1.10", style: { bold: true, align: "right" } }, "C62": { v: "N·mm" }
    }
  },
  {
    id: "sheet-7",
    name: "Fluid Mechanics",
    description: "Fluid Hydraulics, Flows & Pressure Calculations (Part 7)",
    sections: [
      { id: "s7-1", name: "Hydrostatic Pressure", startRow: 4, endRow: 8, formula: "P = p * g * h" },
      { id: "s7-2", name: "Continuity Equation (Flow)", startRow: 10, endRow: 14, formula: "A1 * V1 = A2 * V2 = Q" },
      { id: "s7-3", name: "Bernoulli's Equation", startRow: 16, endRow: 20, formula: "P/(p*g) + V^2/(2g) + z = Constant" },
      { id: "s7-4", name: "Darcy-Weisbach Equation", startRow: 22, endRow: 27, formula: "hf = (f * L * V^2) / (2 * g * D)" },
      { id: "s7-5", name: "Reynolds Number", startRow: 29, endRow: 33, formula: "Re = (p * V * D) / u" },
      { id: "s7-6", name: "Chezy's Formula (Open Channel)", startRow: 35, endRow: 39, formula: "V = C * sqrt(m * i)" },
      { id: "s7-7", name: "Manning's Equation", startRow: 41, endRow: 45, formula: "V = (1/n) * R^(2/3) * S^(1/2)" },
      { id: "s7-8", name: "Orifice Discharge", startRow: 47, endRow: 51, formula: "Q = Cd * A * sqrt(2 * g * H)" },
      { id: "s7-9", name: "Buoyancy Force", startRow: 53, endRow: 56, formula: "FB = pf * g * Vsub" },
      { id: "s7-10", name: "Froude Number", startRow: 58, endRow: 61, formula: "Fr = V / sqrt(g * D)" }
    ],
    defaultCells: {
      "A2": { v: "FLUID MECHANICS & HYDRAULICS FORMULAS", style: { bold: true, fontSize: 16, color: "#0369a1" } },
      "A3": { v: "Dynamic Engineering Calculator for Hydromechanics", style: { italic: true, fontSize: 11, color: "#475569" } },
      
      // s7-1
      "A4": { v: "1. HYDROSTATIC PRESSURE", style: { bold: true, bgColor: "#0284c7", color: "#ffffff" } },
      "B4": { v: "", style: { bgColor: "#0284c7" } }, "C4": { v: "", style: { bgColor: "#0284c7" } }, "D4": { v: "", style: { bgColor: "#0284c7" } },
      "A5": { v: "Fluid Density (\u03C1)" }, "B5": { v: "1000", style: { bgColor: "#e0f2fe", align: "right" } }, "C5": { v: "kg/m³" }, "D5": { v: "(Water = 1000)", style: { italic: true, color: "#64748b" } },
      "A6": { v: "Gravity (g)" }, "B6": { v: "9.81", style: { bgColor: "#e0f2fe", align: "right" } }, "C6": { v: "m/s²" },
      "A7": { v: "Depth below surface (h)" }, "B7": { v: "5", style: { bgColor: "#e0f2fe", align: "right" } }, "C7": { v: "m" },
      "A8": { v: "Hydrostatic Pressure (P)" }, "B8": { v: "=B5*B6*B7", style: { bold: true, align: "right" } }, "C8": { v: "Pa" },

      // s7-2
      "A10": { v: "2. CONTINUITY EQUATION (FLOW)", style: { bold: true, bgColor: "#0284c7", color: "#ffffff" } },
      "B10": { v: "", style: { bgColor: "#0284c7" } }, "C10": { v: "", style: { bgColor: "#0284c7" } }, "D10": { v: "", style: { bgColor: "#0284c7" } },
      "A11": { v: "Inlet Area (A1)" }, "B11": { v: "0.05", style: { bgColor: "#e0f2fe", align: "right" } }, "C11": { v: "m²" },
      "A12": { v: "Inlet Velocity (V1)" }, "B12": { v: "2.4", style: { bgColor: "#e0f2fe", align: "right" } }, "C12": { v: "m/s" },
      "A13": { v: "Outlet Area (A2)" }, "B13": { v: "0.025", style: { bgColor: "#e0f2fe", align: "right" } }, "C13": { v: "m²" },
      "A14": { v: "Outlet Velocity (V2)" }, "B14": { v: "=(B11*B12)/B13", style: { bold: true, align: "right" } }, "C14": { v: "m/s" },

      // s7-3
      "A16": { v: "3. BERNOULLI'S EQUATION", style: { bold: true, bgColor: "#0284c7", color: "#ffffff" } },
      "B16": { v: "", style: { bgColor: "#0284c7" } }, "C16": { v: "", style: { bgColor: "#0284c7" } }, "D16": { v: "", style: { bgColor: "#0284c7" } },
      "A17": { v: "Pressure Head (P/pg)" }, "B17": { v: "15", style: { bgColor: "#e0f2fe", align: "right" } }, "C17": { v: "m" },
      "A18": { v: "Velocity Head (V²/2g)" }, "B18": { v: "1.8", style: { bgColor: "#e0f2fe", align: "right" } }, "C18": { v: "m" },
      "A19": { v: "Datum Head (z)" }, "B19": { v: "4.5", style: { bgColor: "#e0f2fe", align: "right" } }, "C19": { v: "m" },
      "A20": { v: "Total Head Energy", style: { bold: true } }, "B20": { v: "=B17+B18+B19", style: { bold: true, align: "right" } }, "C20": { v: "m (total head)" },

      // s7-4
      "A22": { v: "4. DARCY-WEISBACH EQUATION (PIPE FRICTION LOSS)", style: { bold: true, bgColor: "#0284c7", color: "#ffffff" } },
      "B22": { v: "", style: { bgColor: "#0284c7" } }, "C22": { v: "", style: { bgColor: "#0284c7" } }, "D22": { v: "", style: { bgColor: "#0284c7" } },
      "A23": { v: "Friction factor (f)" }, "B23": { v: "0.02", style: { bgColor: "#e0f2fe", align: "right" } }, "C23": { v: "(dimensionless)" },
      "A24": { v: "Pipe Length (L)" }, "B24": { v: "150", style: { bgColor: "#e0f2fe", align: "right" } }, "C24": { v: "m" },
      "A25": { v: "Velocity (V)" }, "B25": { v: "2.2", style: { bgColor: "#e0f2fe", align: "right" } }, "C25": { v: "m/s" },
      "A26": { v: "Pipe Diameter (D)" }, "B26": { v: "0.3", style: { bgColor: "#e0f2fe", align: "right" } }, "C26": { v: "m" },
      "A27": { v: "Friction Head Loss (hf)" }, "B27": { v: "=(B23*B24*POW(B25,2))/(2*9.81*B26)", style: { bold: true, align: "right" } }, "C27": { v: "m" },

      // s7-5
      "A29": { v: "5. REYNOLDS NUMBER", style: { bold: true, bgColor: "#0284c7", color: "#ffffff" } },
      "B29": { v: "", style: { bgColor: "#0284c7" } }, "C29": { v: "", style: { bgColor: "#0284c7" } }, "D29": { v: "", style: { bgColor: "#0284c7" } },
      "A30": { v: "Flow Velocity (V)" }, "B30": { v: "1.5", style: { bgColor: "#e0f2fe", align: "right" } }, "C30": { v: "m/s" },
      "A31": { v: "Pipe Diam (D)" }, "B31": { v: "0.1", style: { bgColor: "#e0f2fe", align: "right" } }, "C31": { v: "m" },
      "A32": { v: "Kinematic Visc (\u03BD)" }, "B32": { v: "0.000001", style: { bgColor: "#e0f2fe", align: "right" } }, "C32": { v: "m²/s" }, "D32": { v: "(Water = 1e-6)", style: { italic: true } },
      "A33": { v: "Reynolds Number (Re)" }, "B33": { v: "=(B30*B31)/B32", style: { bold: true, align: "right" } }, "C33": { v: "(dimensionless)" },

      // s7-6
      "A35": { v: "6. CHEZY'S FORMULA (OPEN CHANNEL FLOW)", style: { bold: true, bgColor: "#0284c7", color: "#ffffff" } },
      "B35": { v: "", style: { bgColor: "#0284c7" } }, "C35": { v: "", style: { bgColor: "#0284c7" } }, "D35": { v: "", style: { bgColor: "#0284c7" } },
      "A36": { v: "Chezy Constant (C)" }, "B36": { v: "55", style: { bgColor: "#e0f2fe", align: "right" } }, "C36": { v: "m^0.5/s" },
      "A37": { v: "Hydraulic Depth (m)" }, "B37": { v: "0.8", style: { bgColor: "#e0f2fe", align: "right" } }, "C37": { v: "m" },
      "A38": { v: "Hydraulic Slope (i)" }, "B38": { v: "0.0004", style: { bgColor: "#e0f2fe", align: "right" } }, "C38": { v: "(ratio)" },
      "A39": { v: "Mean Velocity (V)" }, "B39": { v: "=B36*SQRT(B37*B38)", style: { bold: true, align: "right" } }, "C39": { v: "m/s" },

      // s7-7
      "A41": { v: "7. MANNING'S EQUATION (OPEN CHANNEL)", style: { bold: true, bgColor: "#0284c7", color: "#ffffff" } },
      "B41": { v: "", style: { bgColor: "#0284c7" } }, "C41": { v: "", style: { bgColor: "#0284c7" } }, "D41": { v: "", style: { bgColor: "#0284c7" } },
      "A42": { v: "Roughness Coeff (n)" }, "B42": { v: "0.015", style: { bgColor: "#e0f2fe", align: "right" } }, "C42": { v: "(e.g., concrete)" },
      "A43": { v: "Hydraulic Radius (R)" }, "B43": { v: "0.8", style: { bgColor: "#e0f2fe", align: "right" } }, "C43": { v: "m" },
      "A44": { v: "Bed Slope (S)" }, "B44": { v: "0.0004", style: { bgColor: "#e0f2fe", align: "right" } }, "C44": { v: "(ratio)" },
      "A45": { v: "Velocity (V)" }, "B45": { v: "=(1/B42)*POW(B43,2/3)*SQRT(B44)", style: { bold: true, align: "right" } }, "C45": { v: "m/s" },

      // s7-8
      "A47": { v: "8. ORIFICE DISCHARGE", style: { bold: true, bgColor: "#0284c7", color: "#ffffff" } },
      "B47": { v: "", style: { bgColor: "#0284c7" } }, "C47": { v: "", style: { bgColor: "#0284c7" } }, "D47": { v: "", style: { bgColor: "#0284c7" } },
      "A48": { v: "Discharge Coeff (Cd)" }, "B48": { v: "0.62", style: { bgColor: "#e0f2fe", align: "right" } }, "C48": { v: "(typically 0.60-0.64)" },
      "A49": { v: "Orifice Area (A)" }, "B49": { v: "0.002", style: { bgColor: "#e0f2fe", align: "right" } }, "C49": { v: "m²" },
      "A50": { v: "Liquid Head (H)" }, "B50": { v: "2.5", style: { bgColor: "#e0f2fe", align: "right" } }, "C50": { v: "m" },
      "A51": { v: "Discharge (Q)" }, "B51": { v: "=B48*B49*SQRT(2*9.81*B50)", style: { bold: true, align: "right" } }, "C51": { v: "m³/s" },

      // s7-9
      "A53": { v: "9. BUOYANCY FORCE (ARCHIMEDES' PRINCIPLE)", style: { bold: true, bgColor: "#0284c7", color: "#ffffff" } },
      "B53": { v: "", style: { bgColor: "#0284c7" } }, "C53": { v: "", style: { bgColor: "#0284c7" } }, "D53": { v: "", style: { bgColor: "#0284c7" } },
      "A54": { v: "Liquid Density (\u03C1f)" }, "B54": { v: "1000", style: { bgColor: "#e0f2fe", align: "right" } }, "C54": { v: "kg/m³" },
      "A55": { v: "Submerged Volume (Vsub)" }, "B55": { v: "0.75", style: { bgColor: "#e0f2fe", align: "right" } }, "C55": { v: "m³" },
      "A56": { v: "Buoyancy Force (FB)" }, "B56": { v: "=B54*9.81*B55", style: { bold: true, align: "right" } }, "C56": { v: "N" },

      // s7-10
      "A58": { v: "10. FROUDE NUMBER (OPEN CHANNEL)", style: { bold: true, bgColor: "#0284c7", color: "#ffffff" } },
      "B58": { v: "", style: { bgColor: "#0284c7" } }, "C58": { v: "", style: { bgColor: "#0284c7" } }, "D58": { v: "", style: { bgColor: "#0284c7" } },
      "A59": { v: "Flow Velocity (V)" }, "B59": { v: "2.5", style: { bgColor: "#e0f2fe", align: "right" } }, "C59": { v: "m/s" },
      "A60": { v: "Hydraulic Depth (D)" }, "B60": { v: "1.2", style: { bgColor: "#e0f2fe", align: "right" } }, "C60": { v: "m" },
      "A61": { v: "Froude Number (Fr)" }, "B61": { v: "=B59/SQRT(9.81*B60)", style: { bold: true, align: "right" } }, "C61": { v: "(ratio)" }
    }
  },
  {
    id: "sheet-8",
    name: "Surveying",
    description: "Surveying & Levelling Geomatics Formulas (Part 8)",
    sections: [
      { id: "s8-1", name: "Distance by Tacheometry (Horizontal)", startRow: 4, endRow: 8, formula: "D = K * S * cos(o)^2 + C * cos(o)" },
      { id: "s8-2", name: "Elevation by Tacheometry", startRow: 10, endRow: 14, formula: "V = (K * S * sin(2*o)) / 2 + C * sin(o)" },
      { id: "s8-3", name: "Rise & Fall / HI Method", startRow: 16, endRow: 20, formula: "HI = BM + BS, RL = HI - FS" },
      { id: "s8-4", name: "Closing Error in Levelling", startRow: 22, endRow: 25, formula: "e = sum(BS) - sum(FS)" },
      { id: "s8-5", name: "Area by Trapezoidal Rule", startRow: 27, endRow: 32, formula: "A = (d / 2) * [O1 + On + 2*(O2 + O3 + ...)]" },
      { id: "s8-6", name: "Area by Simpson's Rule", startRow: 34, endRow: 39, formula: "A = (d / 3) * [O1 + On + 4*odd + 2*even]" },
      { id: "s8-7", name: "Prismoidal Formula (Volume)", startRow: 41, endRow: 45, formula: "V = (L / 6) * [A1 + A2 + 4*Am]" },
      { id: "s8-8", name: "Bearing Conversion (WCB to QB)", startRow: 47, endRow: 50, formula: "Conditional Quadrant bearings" },
      { id: "s8-9", name: "Correction for Curvature & Refraction", startRow: 52, endRow: 55, formula: "C = 0.0673 * D^2" },
      { id: "s8-10", name: "Missing Bearing (Traverse Closure)", startRow: 57, endRow: 61, formula: "e = sqrt(sum(Lat)^2 + sum(Dep)^2)" }
    ],
    defaultCells: {
      "A2": { v: "SURVEYING & LEVELLING FORMULAS - CALCULATOR", style: { bold: true, fontSize: 16, color: "#4d7c0f" } },
      "A3": { v: "Geomatic, Tacheometric and Alignment calculation grids", style: { italic: true, fontSize: 11, color: "#475569" } },
      
      // s8-1
      "A4": { v: "1. DISTANCE BY TACHEOMETRY (HORIZONTAL)", style: { bold: true, bgColor: "#4f750f", color: "#ffffff" } },
      "B4": { v: "", style: { bgColor: "#4f750f" } }, "C4": { v: "", style: { bgColor: "#4f750f" } }, "D4": { v: "", style: { bgColor: "#4f750f" } },
      "A5": { v: "Stadia Constant (K)" }, "B5": { v: "100", style: { bgColor: "#ecfccb", align: "right" } }, "C5": { v: "additive C" }, "D5": { v: "0", style: { bgColor: "#ecfccb" } },
      "A6": { v: "Staff Intercept (S)" }, "B6": { v: "1.45", style: { bgColor: "#ecfccb", align: "right" } }, "C6": { v: "m" },
      "A7": { v: "Inclination Angle (\u03B8)" }, "B7": { v: "8.5", style: { bgColor: "#ecfccb", align: "right" } }, "C7": { v: "degrees" },
      "A8": { v: "Horizontal Dist (D)" }, "B8": { v: "=B5*B6*POW(COS(B7*PI()/180),2) + D5*COS(B7*PI()/180)", style: { bold: true, align: "right" } }, "C8": { v: "m" },

      // s8-2
      "A10": { v: "2. ELEVATION BY TACHEOMETRY", style: { bold: true, bgColor: "#4f750f", color: "#ffffff" } },
      "B10": { v: "", style: { bgColor: "#4f750f" } }, "C10": { v: "", style: { bgColor: "#4f750f" } }, "D10": { v: "", style: { bgColor: "#4f750f" } },
      "A11": { v: "Staff Intercept (S)" }, "B11": { v: "1.45", style: { align: "right" } }, "C11": { v: "m" },
      "A12": { v: "Inclination Angle (\u03B8)" }, "B12": { v: "8.5", style: { align: "right" } }, "C12": { v: "degrees" },
      "A13": { v: "Stadia Constants (K, C)" }, "B13": { v: "100", style: { align: "right" } }, "C13": "0",
      "A14": { v: "Vertical Distance (V)" }, "B14": { v: "=(B13*B11*SIN(2*B12*PI()/180))/2 + C13*SIN(B12*PI()/180)", style: { bold: true, align: "right" } }, "C14": { v: "m" },

      // s8-3
      "A16": { v: "3. HEIGHT OF INSTRUMENT (HI METHOD)", style: { bold: true, bgColor: "#4f750f", color: "#ffffff" } },
      "B16": { v: "", style: { bgColor: "#4f750f" } }, "C16": { v: "", style: { bgColor: "#4f750f" } }, "D16": { v: "", style: { bgColor: "#4f750f" } },
      "A17": { v: "Benchmark RL (BM)" }, "B17": { v: "100", style: { bgColor: "#ecfccb", align: "right" } }, "C17": { v: "Back Sight (BS)" }, "D17": { v: "1.45", style: { bgColor: "#ecfccb" } },
      "A18": { v: "Instrument HI" }, "B18": { v: "=B17+D17", style: { bold: true, align: "right" } }, "C18": { v: "m" },
      "A19": { v: "Fore Sight (FS)" }, "B19": { v: "2.12", style: { bgColor: "#ecfccb", align: "right" } }, "C19": { v: "m" },
      "A20": { v: "New Station RL" }, "B20": { v: "=B18-B19", style: { bold: true, align: "right" } }, "C20": { v: "m" },

      // s8-4
      "A22": { v: "4. CLOSING ERROR IN LEVELLING", style: { bold: true, bgColor: "#4f750f", color: "#ffffff" } },
      "B22": { v: "", style: { bgColor: "#4f750f" } }, "C22": { v: "", style: { bgColor: "#4f750f" } }, "D22": { v: "", style: { bgColor: "#4f750f" } },
      "A23": { v: "Sum Back Sight (\u03A3BS)" }, "B23": { v: "15.42", style: { bgColor: "#ecfccb", align: "right" } }, "C23": { v: "Sum Fore Sight (\u03A3FS)" }, "D23": { v: "15.38", style: { bgColor: "#ecfccb" } },
      "A24": { v: "Closing Error (e)" }, "B24": { v: "=B23-D23", style: { bold: true, align: "right" } }, "C24": { v: "mm" },
      "A25": { v: "Permissible Error" }, "B25": { v: "=12*SQRT(0.5)", style: { bold: true, align: "right" } }, "C25": { v: "mm (12\u221aK for precise)" },

      // s8-5
      "A27": { v: "5. AREA BY TRAPEZOIDAL RULE", style: { bold: true, bgColor: "#4f750f", color: "#ffffff" } },
      "B27": { v: "", style: { bgColor: "#4f750f" } }, "C27": { v: "", style: { bgColor: "#4f750f" } }, "D27": { v: "", style: { bgColor: "#4f750f" } },
      "A28": { v: "Interval (d)" }, "B28": { v: "5", style: { bgColor: "#ecfccb", align: "right" } }, "C28": { v: "m" },
      "A29": { v: "Ends (O1, On)" }, "B29": { v: "2.4", style: { bgColor: "#ecfccb", align: "right" } }, "C29": { v: "4.8" }, "D29": { v: "m", style: { bgColor: "#ecfccb" } },
      "A30": { v: "Sum Mid-ordinations" }, "B30": { v: "14.5", style: { bgColor: "#ecfccb", align: "right" } }, "C30": { v: "(O2 + O3 + ... + On-1)" },
      "A31": { v: "Total Trapezoidal Area" }, "B31": { v: "=(B28/2)*(B29+C29+2*B30)", style: { bold: true, align: "right" } }, "C31": { v: "m²" },

      // s8-6
      "A33": { v: "6. AREA BY SIMPSON'S RULE", style: { bold: true, bgColor: "#4f750f", color: "#ffffff" } },
      "B33": { v: "", style: { bgColor: "#4f750f" } }, "C33": { v: "", style: { bgColor: "#4f750f" } }, "D33": { v: "", style: { bgColor: "#4f750f" } },
      "A34": { v: "Interval (d)" }, "B34": { v: "=B28", style: { align: "right" } }, "C34": { v: "m" },
      "A35": { v: "Ends (O1, On)" }, "B35": { v: "=B29", style: { align: "right" } }, "C35": { v: "=C29", style: { align: "right" } },
      "A36": { v: "Sum Odd Ordinates" }, "B36": { v: "6.4", style: { bgColor: "#ecfccb", align: "right" } }, "C36": { v: "(O3 + O5 + ...)" },
      "A37": { v: "Sum Even Ordinates" }, "B37": { v: "8.1", style: { bgColor: "#ecfccb", align: "right" } }, "C37": { v: "(O2 + O4 + ...)" },
      "A38": { v: "Simpson Area (A)" }, "B38": { v: "=(B34/3)*(B35+C35+4*B37+2*B36)", style: { bold: true, align: "right" } }, "C38": { v: "m²" },

      // s8-7
      "A40": { v: "7. PRISMOIDAL FORMULA (VOLUME)", style: { bold: true, bgColor: "#4f750f", color: "#ffffff" } },
      "B40": { v: "", style: { bgColor: "#4f750f" } }, "C40": { v: "", style: { bgColor: "#4f750f" } }, "D40": { v: "", style: { bgColor: "#4f750f" } },
      "A41": { v: "Length between (L)" }, "B41": { v: "30", style: { bgColor: "#ecfccb", align: "right" } }, "C41": { v: "m" },
      "A42": { v: "Areas (A1, A2)" }, "B42": { v: "145", style: { bgColor: "#ecfccb", align: "right" } }, "C42": { v: "220" }, "D42": { v: "m²", style: { bgColor: "#ecfccb" } },
      "A43": { v: "Mid-section Area (Am)" }, "B43": { v: "180", style: { bgColor: "#ecfccb", align: "right" } }, "C43": { v: "m²" },
      "A44": { v: "Prismoidal Volume (V)" }, "B44": { v: "=(B41/6)*(B42+D42+4*B43)", style: { bold: true, align: "right" } }, "C44": { v: "m³" },

      // s8-8
      "A46": { v: "8. BEARING CONVERSION (WCB TO QB)", style: { bold: true, bgColor: "#4f750f", color: "#ffffff" } },
      "B46": { v: "", style: { bgColor: "#4f750f" } }, "C46": { v: "", style: { bgColor: "#4f750f" } }, "D46": { v: "", style: { bgColor: "#4f750f" } },
      "A47": { v: "Whole Circle Bear (WCB)" }, "B47": { v: "145", style: { bgColor: "#ecfccb", align: "right" } }, "C47": { v: "degrees" },
      "A48": { v: "Quadrant (QB)" }, "B48": { v: "=IF(B47<=90,\"N \"&B47&\" E\",IF(B47<=180,\"S \"&(180-B47)&\" E\",IF(B47<=270,\"S \"&(B47-180)&\" W\",\"N \"&(360-B47)&\" W\")))", style: { bold: true, align: "center", color: "#1e3a8a" } },

      // s8-9
      "A50": { v: "9. CORRECTION FOR CURVATURE & REFRACTION", style: { bold: true, bgColor: "#4f750f", color: "#ffffff" } },
      "B50": { v: "", style: { bgColor: "#4f750f" } }, "C50": { v: "", style: { bgColor: "#4f750f" } }, "D50": { v: "", style: { bgColor: "#4f750f" } },
      "A51": { v: "Distance in km (D)" }, "B51": { v: "2.5", style: { bgColor: "#ecfccb", align: "right" } }, "C51": { v: "km" },
      "A52": { v: "Combined Correction (C)" }, "B52": { v: "=0.0673*POW(B51,2)", style: { bold: true, align: "right" } }, "C52": { v: "metres" },

      // s8-10
      "A54": { v: "10. MISSING BEARING (TRAVERSE CLOSURE)", style: { bold: true, bgColor: "#4f750f", color: "#ffffff" } },
      "B54": { v: "", style: { bgColor: "#4f750f" } }, "C54": { v: "", style: { bgColor: "#4f750f" } }, "D54": { v: "", style: { bgColor: "#4f750f" } },
      "A55": { v: "Sum Latitude (\u03A3Lat)" }, "B55": { v: "1.85", style: { bgColor: "#ecfccb", align: "right" } }, "C55": { v: "Sum Departure (\u03A3Dep)" }, "D55": { v: "-2.42", style: { bgColor: "#ecfccb" } },
      "A56": { v: "Closing Error (e)" }, "B56": { v: "=SQRT(POW(B55,2)+POW(D55,2))", style: { bold: true, align: "right" } }
    }
  },
  {
    id: "sheet-9",
    name: "Transportation Eng",
    description: "Transportation Engineering, sight distances & highways (Part 9)",
    sections: [
      { id: "s9-1", name: "Stopping Sight Distance (SSD)", startRow: 4, endRow: 9, formula: "SSD = 0.278 * V * t + V^2 / (254 * f)" },
      { id: "s9-2", name: "Overtaking Sight Distance (OSD)", startRow: 11, endRow: 17, formula: "OSD = d1 + d2 + d3" },
      { id: "s9-3", name: "Superelevation on Curves", startRow: 19, endRow: 23, formula: "e + f = V^2 / 127R" },
      { id: "s9-4", name: "Extra Widening on Curves", startRow: 25, endRow: 30, formula: "We = (n * l^2) / (2 * R) + V / (9.5 * sqrt(R))" },
      { id: "s9-5", name: "Transition Curve Length", startRow: 32, endRow: 36, formula: "L = 0.0215 * V^3 / (C * R)" },
      { id: "s9-6", name: "Grade Compensation on Curves", startRow: 38, endRow: 42, formula: "GC = (30 + R) / R %" },
      { id: "s9-7", name: "CBR Pavement Thickness Design", startRow: 44, endRow: 48, formula: "t = sqrt( P / CBR - a )" },
      { id: "s9-8", name: "Traffic Flow Equation", startRow: 50, endRow: 53, formula: "q = k * v" },
      { id: "s9-9", name: "PCU Based Capacity", startRow: 55, endRow: 58, formula: "Capacity = (1000 * V) / S" },
      { id: "s9-10", name: "Marshall Stability", startRow: 60, endRow: 66, formula: "VMA = 100 - (Gmb * Ps)/Gsb, VFB = (VMA - Vv)/VMA * 100" }
    ],
    defaultCells: {
      "A2": { v: "HIGHWAY & TRANSPORTATION ENGINEERING CALCULATORS", style: { bold: true, fontSize: 16, color: "#be123c" } },
      "A3": { v: "Alignment, Widening, Sight Distances and Pavement designs", style: { italic: true, fontSize: 11, color: "#475569" } },
      
      // s9-1
      "A4": { v: "1. STOPPING SIGHT DISTANCE (SSD)", style: { bold: true, bgColor: "#be123c", color: "#ffffff" } },
      "B4": { v: "", style: { bgColor: "#be123c" } }, "C4": { v: "", style: { bgColor: "#be123c" } }, "D4": { v: "", style: { bgColor: "#be123c" } },
      "A5": { v: "Design Speed (V)" }, "B5": { v: "80", style: { bgColor: "#ffe4e6", align: "right" } }, "C5": { v: "km/h" },
      "A6": { v: "Reaction Time (t)" }, "B6": { v: "2.5", style: { bgColor: "#ffe4e6", align: "right" } }, "C6": { v: "seconds (IRC standard)" },
      "A7": { v: "Friction Coeff (f)" }, "B7": { v: "0.35", style: { bgColor: "#ffe4e6", align: "right" } }, "C7": { v: "(0.35 to 0.40)" },
      "A8": { v: "Lag Dist (0.278Vt)" }, "B8": { v: "=0.278*B5*B6", style: { align: "right" } }, "C8": { v: "Braking Dist (V²/254f)" }, "D8": { v: "=POW(B5,2)/(254*B7)", style: { align: "right" } },
      "A9": { v: "Stopping Sight Dist (SSD)" }, "B9": { v: "=B8+D8", style: { bold: true, align: "right" } }, "C9": { v: "m" },
 
      // s9-2
      "A11": { v: "2. OVERTAKING SIGHT DISTANCE (OSD)", style: { bold: true, bgColor: "#be123c", color: "#ffffff" } },
      "B11": { v: "", style: { bgColor: "#be123c" } }, "C11": { v: "", style: { bgColor: "#be123c" } }, "D11": { v: "", style: { bgColor: "#be123c" } },
      "A12": { v: "Overtaker Speed (V)" }, "B12": { v: "80", style: { bgColor: "#ffe4e6", align: "right" } }, "C12": { v: "Overtaken Speed (Vb)" }, "D12": { v: "64", style: { bgColor: "#ffe4e6" } },
      "A13": { v: "Overtaking Time (T)" }, "B13": { v: "9.2", style: { bgColor: "#ffe4e6", align: "right" } }, "C13": { v: "Safety Distance (s)" }, "D13": { v: "14.5", style: { bgColor: "#ffe4e6" } },
      "A14": { v: "d1 (0.278Vbt)" }, "B14": { v: "=0.278*D12*2", style: { align: "right" } }, "C14": { v: "m" },
      "A15": { v: "d2 (0.278VbT + 2s)" }, "B15": { v: "=0.278*D12*B13+2*D13", style: { align: "right" } }, "C15": { v: "m" },
      "A16": { v: "d3 (0.278VT)" }, "B16": { v: "=0.278*B12*B13", style: { align: "right" } }, "C16": { v: "m" },
      "A17": { v: "OSD (d1 + d2 + d3)" }, "B17": { v: "=B14+B15+B16", style: { bold: true, align: "right" } }, "C17": { v: "m" },
 
      // s9-3
      "A19": { v: "3. SUPERELEVATION ON CURVES", style: { bold: true, bgColor: "#be123c", color: "#ffffff" } },
      "B19": { v: "", style: { bgColor: "#be123c" } }, "C19": { v: "", style: { bgColor: "#be123c" } }, "D19": { v: "", style: { bgColor: "#be123c" } },
      "A20": { v: "Speed (V)" }, "B20": { v: "80", style: { bgColor: "#ffe4e6", align: "right" } }, "C20": { v: "Radius of Curve (R)" }, "D20": { v: "240", style: { bgColor: "#ffe4e6" } },
      "A21": { v: "Equilibrium (e+f)" }, "B21": { v: "=POW(B20,2)/(127*D20)", style: { bold: true, align: "right" } }, "C21": { v: "(ratio)" },
      "A22": { v: "Required e (with f=0.15)" }, "B22": { v: "=MAX(0, B21-0.15)", style: { align: "right" } }, "C22": { v: "(limit = 7% plain)" },
 
      // s9-4
      "A25": { v: "4. EXTRA WIDENING ON CURVES", style: { bold: true, bgColor: "#be123c", color: "#ffffff" } },
      "B25": { v: "", style: { bgColor: "#be123c" } }, "C25": { v: "", style: { bgColor: "#be123c" } }, "D25": { v: "", style: { bgColor: "#be123c" } },
      "A26": { v: "Number of lanes (n)" }, "B26": { v: "2", style: { bgColor: "#ffe4e6", align: "right" } }, "C26": { v: "Wheelbase (l)" }, "D26": { v: "6.1", style: { bgColor: "#ffe4e6" } },
      "A27": { v: "Curve Radius (R)" }, "B27": { v: "240", style: { bgColor: "#ffe4e6", align: "right" } }, "C27": { v: "Design Speed (V)" }, "D27": { v: "80", style: { bgColor: "#ffe4e6" } },
      "A28": { v: "Mechanical (nl²/2R)" }, "B28": { v: "=(B26*POW(D26,2))/(2*B27)", style: { align: "right" } }, "C28": { v: "m" },
      "A29": { v: "Psychological widening" }, "B29": { v: "=D27/(9.5*SQRT(B27))", style: { align: "right" } }, "C29": { v: "m" },
      "A30": { v: "Total Widening (We)" }, "B30": { v: "=B28+B29", style: { bold: true, align: "right" } }, "C30": { v: "m" },
 
      // s9-5
      "A32": { v: "5. TRANSITION CURVE LENGTH", style: { bold: true, bgColor: "#be123c", color: "#ffffff" } },
      "B32": { v: "", style: { bgColor: "#be123c" } }, "C32": { v: "", style: { bgColor: "#be123c" } }, "D32": { v: "", style: { bgColor: "#be123c" } },
      "A33": { v: "Design Speed (V)" }, "B33": { v: "80", style: { bgColor: "#ffe4e6", align: "right" } }, "C33": { v: "Curve Radius (R)" }, "D33": { v: "240", style: { bgColor: "#ffe4e6" } },
      "A34": { v: "Acceleration change (C)" }, "B34": { v: "0.6", style: { bgColor: "#ffe4e6", align: "right" } }, "C34": { v: "m/s³ (range 0.5-0.8)" },
      "A35": { v: "Min length (L)" }, "B35": { v: "=0.0215*POW(B33,3)/(B34*D33)", style: { bold: true, align: "right" } }, "C35": { v: "m" },
 
      // s9-6
      "A38": { v: "6. GRADE COMPENSATION ON CURVES", style: { bold: true, bgColor: "#be123c", color: "#ffffff" } },
      "B38": { v: "", style: { bgColor: "#be123c" } }, "C38": { v: "", style: { bgColor: "#be123c" } }, "D38": { v: "", style: { bgColor: "#be123c" } },
      "A39": { v: "Curve Radius (R)" }, "B39": { v: "50", style: { bgColor: "#ffe4e6", align: "right" } }, "C39": { v: "m" },
      "A40": { v: "Calculated Comp" }, "B40": { v: "=(30+B39)/B39", style: { align: "right" } }, "C40": { v: "%" },
      "A41": { v: "Max Allowed Comp" }, "B41": { v: "=75/B39", style: { align: "right" } }, "C41": { v: "%" },
      "A42": { v: "Design Compensation" }, "B42": { v: "=MIN(B40, B41)", style: { bold: true, align: "right" } }, "C42": { v: "%" },
 
      // s9-7
      "A44": { v: "7. CBR PAVEMENT THICKNESS DESIGN", style: { bold: true, bgColor: "#be123c", color: "#ffffff" } },
      "B44": { v: "", style: { bgColor: "#be123c" } }, "C44": { v: "", style: { bgColor: "#be123c" } }, "D44": { v: "", style: { bgColor: "#be123c" } },
      "A45": { v: "Wheel Load (P)" }, "B45": { v: "4100", style: { bgColor: "#ffe4e6", align: "right" } }, "C45": { v: "kg" },
      "A46": { v: "CBR Ratio" }, "B46": { v: "5", style: { bgColor: "#ffe4e6", align: "right" } }, "C46": { v: "%" },
      "A47": { v: "Tire Area (a)" }, "B47": { v: "150", style: { bgColor: "#ffe4e6", align: "right" } }, "C47": { v: "cm²" },
      "A48": { v: "Total Thickness (t)" }, "B48": { v: "=SQRT((B45/B46)-B47)", style: { bold: true, align: "right" } }, "C48": { v: "cm" },
 
      // s9-8
      "A50": { v: "8. TRAFFIC FLOW FUNDAMENTAL EQUATION", style: { bold: true, bgColor: "#be123c", color: "#ffffff" } },
      "B50": { v: "", style: { bgColor: "#be123c" } }, "C50": { v: "", style: { bgColor: "#be123c" } }, "D50": { v: "", style: { bgColor: "#be123c" } },
      "A51": { v: "Traffic Density (k)" }, "B51": { v: "22", style: { bgColor: "#ffe4e6", align: "right" } }, "C51": { v: "veh/km" },
      "A52": { v: "Space Mean Speed (v)" }, "B52": { v: "60", style: { bgColor: "#ffe4e6", align: "right" } }, "C52": { v: "km/h" },
      "A53": { v: "Traffic Flow (q)" }, "B53": { v: "=B51*B52", style: { bold: true, align: "right" } }, "C53": { v: "veh/hour" },
 
      // s9-9
      "A55": { v: "9. PCU (PASSENGER CAR UNIT) BASED CAPACITY", style: { bold: true, bgColor: "#be123c", color: "#ffffff" } },
      "B55": { v: "", style: { bgColor: "#be123c" } }, "C55": { v: "", style: { bgColor: "#be123c" } }, "D55": { v: "", style: { bgColor: "#be123c" } },
      "A56": { v: "Speed of Stream (V)" }, "B56": { v: "60", style: { bgColor: "#ffe4e6", align: "right" } }, "C56": { v: "km/h" },
      "A57": { v: "Safe Stopping Dist (S)" }, "B57": { v: "18.5", style: { bgColor: "#ffe4e6", align: "right" } }, "C57": { v: "m" },
      "A58": { v: "PCU Capacity", style: { bold: true } }, "B58": { v: "=(1000*B56)/B57", style: { bold: true, align: "right" } }, "C58": { v: "veh/hr/lane" },
 
      // s9-10
      "A60": { v: "10. MARSHALL STABILITY (BITUMEN MIX DESIGN)", style: { bold: true, bgColor: "#be123c", color: "#ffffff" } },
      "B60": { v: "", style: { bgColor: "#be123c" } }, "C60": { v: "", style: { bgColor: "#be123c" } }, "D60": { v: "", style: { bgColor: "#be123c" } },
      "A61": { v: "Bulk Density of Mix (Gmb)" }, "B61": { v: "2.35", style: { bgColor: "#ffe4e6", align: "right" } }, "C61": { v: "g/cm³" },
      "A62": { v: "% Aggregate in Mix (Ps)" }, "B62": { v: "92", style: { bgColor: "#ffe4e6", align: "right" } }, "C62": { v: "%" },
      "A63": { v: "Bulk Sp Gravity of Agg (Gsb)" }, "B63": { v: "2.65", style: { bgColor: "#ffe4e6", align: "right" } }, "C63": { v: "(ratio)" },
      "A64": { v: "Voids in Mix (Vv)" }, "B64": { v: "4.2", style: { bgColor: "#ffe4e6", align: "right" } }, "C64": { v: "%" },
      "A65": { v: "Voids in Mineral Agg (VMA)" }, "B65": { v: "=100-(B61*B62)/B63", style: { bold: true, align: "right" } }, "C65": { v: "%" },
      "A66": { v: "Voids Filled with Bitumen (VFB)" }, "B66": { v: "=(B65-B64)/B65*100", style: { bold: true, align: "right" } }, "C66": { v: "%" }
    }
  },
  {
    id: "sheet-10",
    name: "Environmental Eng",
    description: "Environmental, wastewater & sanitary engineering (Part 10)",
    sections: [
      { id: "s10-1", name: "Population Forecasting (Arithmetic)", startRow: 4, endRow: 8, formula: "Pn = P0 + n * x" },
      { id: "s10-2", name: "Fire Water Demand (Kuichling)", startRow: 9, endRow: 12, formula: "Q = 3182 * sqrt(P)" },
      { id: "s10-3", name: "Sedimentation Tank Overflow Rate", startRow: 14, endRow: 17, formula: "v0 = Q / As" },
      { id: "s10-4", name: "Stokes' Settling Velocity", startRow: 19, endRow: 23, formula: "vs = (g * (s - 1) * d^2) / (18 * v)" },
      { id: "s10-5", name: "Rapid Sand Filter Bed Area", startRow: 25, endRow: 28, formula: "Af = Q / Rate" },
      { id: "s10-6", name: "BOD Decay Modeling", startRow: 30, endRow: 34, formula: "BODt = BODu * (1 - POW(10, -k*t))" },
      { id: "s10-7", name: "Oxygen Sag Curve (DO Deficit)", startRow: 36, endRow: 41, formula: "Dt = (kd * L0) / (kr - kd) * (POW(2.718, -kd*t) - POW(2.718, -kr*t)) + D0 * POW(2.718, -kr*t)" },
      { id: "s10-8", name: "Gravity Sewer Sizing", startRow: 43, endRow: 47, formula: "Q = A * (1/n) * R^(2/3) * S^(1/2)" },
      { id: "s10-9", name: "Sludge Volume Index (SVI)", startRow: 49, endRow: 52, formula: "SVI = (V30 * 1000) / MLSS" },
      { id: "s10-10", name: "Activated Sludge F/M Ratio", startRow: 54, endRow: 58, formula: "F/M = (Q * S0) / (V * X)" }
    ],
    defaultCells: {
      "A2": { v: "ENVIRONMENTAL & SANITARY ENGINEERING CALCULATOR", style: { bold: true, fontSize: 16, color: "#0d9488" } },
      "A3": { v: "Water supply forecasting, sedimentation, biological treatment and sewers sizing", style: { italic: true, fontSize: 11, color: "#475569" } },
      
      // s10-1
      "A4": { v: "1. POPULATION FORECASTING (ARITHMETIC INCREASE METHOD)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B4": { v: "", style: { bgColor: "#0f766e" } }, "C4": { v: "", style: { bgColor: "#0f766e" } }, "D4": { v: "", style: { bgColor: "#0f766e" } },
      "A5": { v: "Initial Population (P0)" }, "B5": { v: "45000", style: { bgColor: "#ccfbf1", align: "right" } }, "C5": { v: "capita" },
      "A6": { v: "Decades to Forecast (n)" }, "B6": { v: "3", style: { bgColor: "#ccfbf1", align: "right" } }, "C6": { v: "decades (30 yrs)" },
      "A7": { v: "Avg Decadal Growth (x)" }, "B7": { v: "6500", style: { bgColor: "#ccfbf1", align: "right" } }, "C7": { v: "capita/decade" },
      "A8": { v: "Forecast Population (Pn)" }, "B8": { v: "=B5+B6*B7", style: { bold: true, align: "right" } }, "C8": { v: "capita" },
      
      // s10-2
      "A9": { v: "2. FIRE WATER DEMAND (KUICHLING'S FORMULA)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B9": { v: "", style: { bgColor: "#0f766e" } }, "C9": { v: "", style: { bgColor: "#0f766e" } }, "D9": { v: "", style: { bgColor: "#0f766e" } },
      "A10": { v: "Population in Thousands (P)" }, "B10": { v: "45", style: { bgColor: "#ccfbf1", align: "right" } }, "C10": { v: "(thousands)" },
      "A11": { v: "Fire Water Flow Rate (Q)" }, "B11": { v: "=3182*SQRT(B10)", style: { bold: true, align: "right" } }, "C11": { v: "liters/min" },
      "A12": { v: "Fire flow in cubic m/hr", style: { italic: true } }, "B12": { v: "=(B11*60)/1000", style: { bold: true, align: "right" } }, "C12": { v: "m³/hr" },

      // s10-3
      "A14": { v: "3. SEDIMENTATION BASIN OVERFLOW RATE (SOR)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B14": { v: "", style: { bgColor: "#0f766e" } }, "C14": { v: "", style: { bgColor: "#0f766e" } }, "D14": { v: "", style: { bgColor: "#0f766e" } },
      "A15": { v: "Water Inflow Rate (Q)" }, "B15": { v: "250", style: { bgColor: "#ccfbf1", align: "right" } }, "C15": { v: "m³/hour" },
      "A16": { v: "Basin Surface Area (As)" }, "B16": { v: "120", style: { bgColor: "#ccfbf1", align: "right" } }, "C16": { v: "m²" },
      "A17": { v: "Surface Overflow (v0)" }, "B17": { v: "=B15/B16", style: { bold: true, align: "right" } }, "C17": { v: "m³/m²/hour" },

      // s10-4
      "A19": { v: "4. DISCRETE PARTICLE SETTLING VELOCITY (STOKES' LAW)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B19": { v: "", style: { bgColor: "#0f766e" } }, "C19": { v: "", style: { bgColor: "#0f766e" } }, "D19": { v: "", style: { bgColor: "#0f766e" } },
      "A20": { v: "Particle Sp Gravity (s)" }, "B20": { v: "2.65", style: { bgColor: "#ccfbf1", align: "right" } }, "C20": { v: "sand = 2.65" },
      "A21": { v: "Particle Diameter (d)" }, "B21": { v: "0.00008", style: { bgColor: "#ccfbf1", align: "right" } }, "C21": { v: "meters (0.08 mm)" },
      "A22": { v: "Kinematic Viscosity (\u03BD)" }, "B22": { v: "0.000001", style: { bgColor: "#ccfbf1", align: "right" } }, "C22": { v: "m²/s (Water at 20\u00B0C)" },
      "A23": { v: "Settling Velocity (vs)" }, "B23": { v: "=(9.81*(B20-1)*POW(B21,2))/(18*B22)", style: { bold: true, align: "right" } }, "C23": { v: "m/s" },

      // s10-5
      "A25": { v: "5. RAPID SAND FILTER BED AREA", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B25": { v: "", style: { bgColor: "#0f766e" } }, "C25": { v: "", style: { bgColor: "#0f766e" } }, "D25": { v: "", style: { bgColor: "#0f766e" } },
      "A26": { v: "Daily Water Supply (Q)" }, "B26": { v: "12000", style: { bgColor: "#ccfbf1", align: "right" } }, "C26": { v: "m³/day" },
      "A27": { v: "Filtration Rate" }, "B27": { v: "120", style: { bgColor: "#ccfbf1", align: "right" } }, "C27": { v: "m³/day/m²" },
      "A28": { v: "Filter Area Required (Af)" }, "B28": { v: "=B26/B27", style: { bold: true, align: "right" } }, "C28": { v: "m²" },

      // s10-6
      "A30": { v: "6. BIOCHEMICAL OXYGEN DEMAND (BOD DECAY)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B30": { v: "", style: { bgColor: "#0f766e" } }, "C30": { v: "", style: { bgColor: "#0f766e" } }, "D30": { v: "", style: { bgColor: "#0f766e" } },
      "A31": { v: "Ultimate BOD (BODu)" }, "B31": { v: "280", style: { bgColor: "#ccfbf1", align: "right" } }, "C31": { v: "mg/liter" },
      "A32": { v: "Decay Constant base-10 (k)" }, "B32": { v: "0.1", style: { bgColor: "#ccfbf1", align: "right" } }, "C32": { v: "day\u207B\u00B9 (at 20\u00B0C)" },
      "A33": { v: "Time elapsed (t)" }, "B33": { v: "5", style: { bgColor: "#ccfbf1", align: "right" } }, "C33": { v: "days" },
      "A34": { v: "BOD consumed (BODt)" }, "B34": { v: "=B31*(1-POW(10,-B32*B33))", style: { bold: true, align: "right" } }, "C34": { v: "mg/liter (5-day BOD)" },

      // s10-7
      "A36": { v: "7. STREETER-PHELPS OXYGEN SAG CURVE (DO DEFICIT)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B36": { v: "", style: { bgColor: "#0f766e" } }, "C36": { v: "", style: { bgColor: "#0f766e" } }, "D36": { v: "", style: { bgColor: "#0f766e" } },
      "A37": { v: "Ultimate BOD Mix (L0)" }, "B37": { v: "25", style: { bgColor: "#ccfbf1", align: "right" } }, "C37": { v: "mg/l" }, "D37": { v: "Initial DO Deficit (D0)" }, "E37": { v: "2.5", style: { bgColor: "#ccfbf1" } },
      "A38": { v: "Deoxygenation rate (kd)" }, "B38": { v: "0.15", style: { bgColor: "#ccfbf1", align: "right" } }, "C38": { v: "Reaeration rate (kr)" }, "D38": { v: "0.45", style: { bgColor: "#ccfbf1" } },
      "A39": { v: "Travel Time (t)" }, "B39": { v: "2", style: { bgColor: "#ccfbf1", align: "right" } }, "C39": { v: "days" },
      "A40": { v: "DO Deficit (Dt)" }, "B40": { v: "=((B38*B37)/(D38-B38))*(POW(2.718,-B38*B39)-POW(2.718,-D38*B39))+E37*POW(2.718,-D38*B39)", style: { bold: true, align: "right" } }, "C40": { v: "mg/liter" },
      "A41": { v: "River Dissolved Oxygen" }, "B41": { v: "=MAX(0, 9.2-B40)", style: { bold: true, align: "right" } }, "C41": { v: "mg/l (Saturation = 9.2)" },

      // s10-8
      "A43": { v: "8. GRAVITY SEWER PIPE SIZING (MANNING'S EQUATION)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B43": { v: "", style: { bgColor: "#0f766e" } }, "C43": { v: "", style: { bgColor: "#0f766e" } }, "D43": { v: "", style: { bgColor: "#0f766e" } },
      "A44": { v: "Cross Section Area (A)" }, "B44": { v: "0.196", style: { bgColor: "#ccfbf1", align: "right" } }, "C44": { v: "m² (D=0.5m full)" }, "D44": { v: "Manning's n" }, "E44": { v: "0.013", style: { bgColor: "#ccfbf1" } },
      "A45": { v: "Hydraulic Radius (R)" }, "B45": { v: "0.125", style: { bgColor: "#ccfbf1", align: "right" } }, "C45": { v: "m (D/4 for full)" }, "D45": { v: "Bed Slope (S)" }, "E45": { v: "0.002", style: { bgColor: "#ccfbf1" } },
      "A47": { v: "Full Pipe Discharge (Q)" }, "B47": { v: "=B44*(1/E44)*POW(B45,2/3)*SQRT(E45)", style: { bold: true, align: "right" } }, "C47": { v: "m³/s" },

      // s10-9
      "A49": { v: "9. SLUDGE VOLUME INDEX (SVI)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B49": { v: "", style: { bgColor: "#0f766e" } }, "C49": { v: "", style: { bgColor: "#0f766e" } }, "D49": { v: "", style: { bgColor: "#0f766e" } },
      "A50": { v: "Settled Volume 30m (V30)" }, "B50": { v: "280", style: { bgColor: "#ccfbf1", align: "right" } }, "C50": { v: "ml/liter" },
      "A51": { v: "Suspended Solids (MLSS)" }, "B51": { v: "3000", style: { bgColor: "#ccfbf1", align: "right" } }, "C51": { v: "mg/liter" },
      "A52": { v: "Sludge Index (SVI)" }, "B52": { v: "=(B50*1000)/B51", style: { bold: true, align: "right" } }, "C52": { v: "ml/g (ideal = 50-150)" },

      // s10-10
      "A54": { v: "10. ACTIVATED SLUDGE ORGANIC LOADING (F/M RATIO)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B54": { v: "", style: { bgColor: "#0f766e" } }, "C54": { v: "", style: { bgColor: "#0f766e" } }, "D54": { v: "", style: { bgColor: "#0f766e" } },
      "A55": { v: "Wastewater Inflow (Q)" }, "B55": { v: "4000", style: { bgColor: "#ccfbf1", align: "right" } }, "C55": { v: "m³/day" }, "D55": { v: "Influent BOD (S0)" }, "E55": { v: "220", style: { bgColor: "#ccfbf1" } },
      "A56": { v: "Aeration Tank Volume (V)" }, "B56": { v: "2500", style: { bgColor: "#ccfbf1", align: "right" } }, "C56": { v: "m³" }, "D56": { v: "Biomass MLVSS (X)" }, "E56": { v: "2500", style: { bgColor: "#ccfbf1" } },
      "A58": { v: "Organic F/M Ratio", style: { bold: true } }, "B58": { v: "=(B55*E55)/(B56*E56)", style: { bold: true, align: "right" } }, "C58": { v: "kg BOD/kg MLVSS/day" }
    }
  }
]);

// --- 2. Append reference diagrams (vector CAD cards) ---
Object.assign(window.FORMULA_DIAGRAMS, {
  // --- Part 6 Steel Structure ---
  "s6-1": {
    title: "Slenderness Ratio of Steel Member",
    formula: "\\lambda = \\frac{L_{eff}}{r_{min}}",
    use: "Used for: Classifying steel compression members as short or slender.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <path d="M 150,20 L 150,160" stroke="#475569" stroke-width="3" stroke-dasharray="4,2"/>
      <path d="M 150,20 Q 180,90 150,160" fill="none" stroke="#e11d48" stroke-dasharray="3,3" stroke-width="1.5"/>
      <path d="M 210,20 L 210,160" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="220" y="90" fill="#0284c7" font-weight="bold" font-size="12">Leff</text>
    </svg>`
  },
  "s6-2": {
    title: "Compressive Strength (Steel Column)",
    formula: "P_d = A_g \\cdot f_{cd}",
    use: "Used for: Design of steel compression members (columns, struts).",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="120" y="40" width="60" height="100" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <path d="M 150,10 L 150,35" stroke="#e11d48" stroke-width="3" marker-end="url(#red-arrow)"/>
      <path d="M 150,170 L 150,145" stroke="#e11d48" stroke-width="3" marker-end="url(#red-arrow)"/>
      <text x="165" y="25" fill="#e11d48" font-weight="bold" font-size="11">P (Compression)</text>
    </svg>`
  },
  "s6-3": {
    title: "Design Strength (Tension Yielding)",
    formula: "T_{dg} = \\frac{A_g \\cdot f_y}{\\gamma_{mo}}",
    use: "Used for: Limit state design of structural steel tension members.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="130" y="45" width="40" height="90" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <circle cx="150" cy="55" r="4" fill="#000"/>
      <circle cx="150" cy="125" r="4" fill="#000"/>
      <path d="M 150,45 L 150,15" stroke="#ea580c" stroke-width="2.5" marker-end="url(#orange-arrow)"/>
      <path d="M 150,135 L 150,165" stroke="#ea580c" stroke-width="2.5" marker-end="url(#orange-arrow)"/>
      <text x="165" y="25" fill="#ea580c" font-weight="bold" font-size="11">T (Tension)</text>
    </svg>`
  },
  "s6-4": {
    title: "Euler's Buckling Load",
    formula: "P_e = \\frac{\\pi^2 E I}{L_{eff}^2}",
    use: "Used for: Determining elastic critical buckling limit of slender columns.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <path d="M 150,30 Q 190,90 150,150" fill="none" stroke="#e11d48" stroke-dasharray="4,4" stroke-width="2"/>
      <circle cx="150" cy="30" r="5" fill="#475569"/>
      <circle cx="150" cy="150" r="5" fill="#475569"/>
      <path d="M 150,5 L 150,25" stroke="#e11d48" stroke-width="2.5" marker-end="url(#red-arrow)"/>
      <text x="165" y="18" fill="#e11d48" font-weight="bold" font-size="12">Pe</text>
    </svg>`
  },
  "s6-5": {
    title: "Moment Capacity of Steel Member",
    formula: "M_d = \\frac{f_y \\cdot Z_p}{\\gamma_{mo}}",
    use: "Used for: Flexural bending design capacity of steel beams.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Cross section of steel I-Beam -->
      <polygon points="90,40 210,40 210,60 160,60 160,120 210,120 210,140 90,140 90,120 140,120 140,60 90,60" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <text x="150" y="160" fill="#475569" font-weight="bold" font-size="12" text-anchor="middle">Design bending Md</text>
    </svg>`
  },
  "s6-6": {
    title: "Shear Capacity of Steel",
    formula: "V_d = \\frac{f_y \\cdot A_w}{\\sqrt{3} \\cdot \\gamma_{mo}}",
    use: "Used for: Verifying shear yield limits of structural steel webs.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <polygon points="100,30 200,30 200,50 160,50 160,130 200,130 200,150 100,150 100,130 140,130 140,50 100,50" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
      <rect x="140" y="50" width="20" height="80" fill="#ea580c" opacity="0.3" stroke="#ea580c" stroke-width="1"/>
      <text x="150" y="95" fill="#ea580c" font-weight="bold" font-size="11" text-anchor="middle">Aw (Web Area)</text>
    </svg>`
  },
  "s6-7": {
    title: "Weld Strength (Fillet Weld)",
    formula: "P = 0.7 \\cdot s \\cdot L_w \\cdot f_{wd}",
    use: "Used for: Design capacity checking of fillet welded steel plates.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="60" y="100" width="130" height="20" fill="#94a3b8" stroke="#334155"/>
      <rect x="130" y="40" width="20" height="60" fill="#64748b" stroke="#334155"/>
      <!-- Fillet Weld Triangle -->
      <polygon points="130,100 130,90 120,100" fill="#ea580c" stroke="#334155"/>
      <text x="110" y="85" fill="#ea580c" font-weight="bold" font-size="11">s (weld size)</text>
    </svg>`
  },
  "s6-8": {
    title: "Bolt Shear Capacity",
    formula: "V_{dsb} = \\frac{f_{ub} \\cdot A_{nb}}{\\sqrt{3} \\cdot \\gamma_{mb}}",
    use: "Used for: Calculating shear capacity of bolted connections.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="70" y="50" width="160" height="20" fill="#94a3b8" stroke="#334155"/>
      <rect x="70" y="70" width="160" height="20" fill="#64748b" stroke="#334155"/>
      <!-- Bolt -->
      <rect x="140" y="35" width="20" height="70" fill="#cbd5e1" stroke="#334155" rx="2"/>
      <path d="M 120,60 L 180,60" stroke="#e11d48" stroke-dasharray="3,2" stroke-width="1.5"/>
      <text x="185" y="64" fill="#e11d48" font-weight="bold" font-size="11">Shear Plane</text>
    </svg>`
  },
  "s6-9": {
    title: "Bearing Capacity of Bolt",
    formula: "V_{dpb} = \\frac{2.5 \\cdot k_b \\cdot d \\cdot t \\cdot f_u}{\\gamma_{mb}}",
    use: "Used for: Checking bearing failure limits in bolted structural plates.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="70" y="60" width="160" height="20" fill="#94a3b8" stroke="#334155"/>
      <rect x="140" y="45" width="20" height="50" fill="#475569" stroke="#334155"/>
      <circle cx="150" cy="70" r="10" fill="none" stroke="#ea580c" stroke-width="2"/>
      <text x="180" y="80" fill="#ea580c" font-weight="bold" font-size="11">t (thickness)</text>
    </svg>`
  },
  "s6-10": {
    title: "Plastic & Design Moment",
    formula: "M_d = \\frac{\\beta_b \\cdot Z_p \\cdot f_y}{\\gamma_{mo}}",
    use: "Used for: Steel member plastic analysis and frame collapse design limits.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <polygon points="100,40 200,40 200,55 160,55 160,125 200,125 200,140 100,140 100,125 140,125 140,55 100,55" fill="#94a3b8" stroke="#334155"/>
      <path d="M 60,60 A 20,20 0 0 1 60,120" fill="none" stroke="#6d28d9" stroke-width="2.5" marker-end="url(#purple-arrow)"/>
      <text x="45" y="95" fill="#6d28d9" font-weight="bold" font-size="12">Mp</text>
    </svg>`
  },

  // --- Part 7 Fluid Mechanics ---
  "s7-1": {
    title: "Hydrostatic Pressure",
    formula: "P = \\rho \\cdot g \\cdot h",
    use: "Used for: Reservoir wall thrust and base pressure calculations.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="80" y="30" width="140" height="120" fill="#e0f2fe" stroke="#334155" stroke-width="2"/>
      <path d="M 235,30 L 235,150" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="245" y="95" fill="#0284c7" font-weight="bold" font-size="12">h (depth)</text>
    </svg>`
  },
  "s7-2": {
    title: "Continuity Equation (Flow)",
    formula: "A_1 V_1 = A_2 V_2",
    use: "Used for: Flow velocities profiling in reducer/expanders pipes.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <path d="M 60,50 L 160,50 L 220,70 L 250,70 L 250,110 L 220,110 L 160,130 L 60,130 Z" fill="#e0f2fe" stroke="#334155" stroke-width="2"/>
      <path d="M 80,90 L 110,90" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="80" y="80" fill="#0284c7" font-weight="bold" font-size="11">V1</text>
      <path d="M 220,90 L 240,90" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="220" y="80" fill="#0284c7" font-weight="bold" font-size="11">V2</text>
    </svg>`
  },
  "s7-3": {
    title: "Bernoulli's Equation",
    formula: "\\frac{P}{\\rho g} + \\frac{V^2}{2g} + z = Constant",
    use: "Used for: Determining total head energy profiles along streamlines.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <path d="M 50,130 Q 150,60 250,100" fill="none" stroke="#0284c7" stroke-width="3"/>
      <line x1="50" y1="150" x2="250" y2="150" stroke="#475569" stroke-dasharray="3,3"/>
      <path d="M 100,150 L 100,108" stroke="#ea580c" stroke-width="1" marker-end="url(#orange-arrow)" marker-start="url(#orange-arrow)"/>
      <text x="90" y="130" fill="#ea580c" font-weight="bold" font-size="11">z</text>
    </svg>`
  },
  "s7-4": {
    title: "Darcy-Weisbach Equation",
    formula: "h_f = \\frac{f L V^2}{2 g D}",
    use: "Used for: Calculating head loss due to friction inside circular conduits.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="70" y="60" width="160" height="50" fill="#e0f2fe" stroke="#334155" stroke-width="2"/>
      <path d="M 70,130 L 230,130" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="150" y="145" fill="#0284c7" font-weight="bold" font-size="11" text-anchor="middle">L (Pipe length)</text>
    </svg>`
  },
  "s7-5": {
    title: "Reynolds Number",
    formula: "R_e = \\frac{\\rho V D}{\\mu}",
    use: "Used for: Classifying flow regimes as laminar, transitional or turbulent.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="50" y="60" width="200" height="50" fill="#e0f2fe" stroke="#334155" stroke-width="2"/>
      <!-- Laminar velocity profile -->
      <path d="M 50,85 Q 150,85 50,60 M 50,85 Q 150,85 50,110" fill="none" stroke="#ea580c" stroke-width="1.5"/>
      <text x="150" y="90" fill="#ea580c" font-weight="bold" font-size="11">Velocity Profile</text>
    </svg>`
  },
  "s7-6": {
    title: "Chezy's Formula",
    formula: "V = C \\sqrt{m i}",
    use: "Used for: Mean velocity calculations in uniform open channels.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <polygon points="50,60 90,130 210,130 250,60" fill="#e0f2fe" stroke="#334155" stroke-width="2"/>
      <line x1="40" y1="80" x2="260" y2="80" stroke="#0284c7" stroke-dasharray="3,3" stroke-width="1.5"/>
      <text x="150" y="110" fill="#334155" font-weight="bold" font-size="11" text-anchor="middle">Open Channel Area</text>
    </svg>`
  },
  "s7-7": {
    title: "Manning's Equation",
    formula: "V = \\frac{1}{n} R^{2/3} S^{1/2}",
    use: "Used for: Designing open drains, sewer mains, and civil channels.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <polygon points="50,60 90,130 210,130 250,60" fill="#e0f2fe" stroke="#334155"/>
      <path d="M 90,130 L 210,130" stroke="#ea580c" stroke-width="3"/>
      <text x="150" y="125" fill="#ea580c" font-weight="bold" font-size="11" text-anchor="middle">Wetted Perimeter</text>
    </svg>`
  },
  "s7-8": {
    title: "Orifice Discharge",
    formula: "Q = C_d A \\sqrt{2 g H}",
    use: "Used for: Hydraulic tank discharging and orifice plate sizing.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="70" y="30" width="100" height="120" fill="#e0f2fe" stroke="#334155" stroke-width="2"/>
      <rect x="170" y="110" width="40" height="15" fill="#e0f2fe" stroke="#334155" stroke-width="0"/>
      <!-- Jet profile -->
      <path d="M 170,110 Q 210,110 240,150 L 170,125" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <text x="120" y="90" fill="#334155" font-weight="bold" font-size="12">H (Head)</text>
    </svg>`
  },
  "s7-9": {
    title: "Buoyancy Force",
    formula: "F_B = \\rho_f g V_{sub}",
    use: "Used for: Checking floatation and stability of retaining tanks.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="60" y="60" width="180" height="90" fill="#e0f2fe" stroke="#334155"/>
      <rect x="120" y="80" width="60" height="45" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <path d="M 150,115 L 150,75" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrow)"/>
      <text x="160" y="95" fill="#16a34a" font-weight="bold" font-size="11">FB</text>
    </svg>`
  },
  "s7-10": {
    title: "Froude Number",
    formula: "F_r = \\frac{V}{\\sqrt{g D}}",
    use: "Used for: Classifying open channel flow states (subcritical, critical, supercritical).",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <polygon points="50,60 90,130 210,130 250,60" fill="#e0f2fe" stroke="#334155"/>
      <path d="M 150,60 L 150,130" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="160" y="95" fill="#0284c7" font-weight="bold" font-size="11">Hydraulic Depth D</text>
    </svg>`
  },

  // --- Part 8 Surveying ---
  "s8-1": {
    title: "Horizontal Distance by Tacheometry",
    formula: "D = K S \\cos^2 \\theta + C \\cos \\theta",
    use: "Used for: Indirect horizontal distance calculations using optical transits.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Theodolite and staff staff intercept -->
      <polygon points="50,130 65,130 57.5,100" fill="#4d7c0f" stroke="#334155"/>
      <rect x="230" y="30" width="10" height="110" fill="#cbd5e1" stroke="#334155"/>
      <line x1="57.5" y1="100" x2="230" y2="50" stroke="#e11d48" stroke-dasharray="3,3"/>
      <line x1="57.5" y1="100" x2="230" y2="120" stroke="#e11d48" stroke-dasharray="3,3"/>
      <text x="245" y="85" fill="#4d7c0f" font-weight="bold" font-size="12">S</text>
    </svg>`
  },
  "s8-2": {
    title: "Elevation by Tacheometry",
    formula: "V = \\frac{K S \\sin 2\\theta}{2} + C \\sin \\theta",
    use: "Used for: Trigonometrical levelling height calculations.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <polygon points="50,130 65,130 57.5,100" fill="#4d7c0f" stroke="#334155"/>
      <rect x="230" y="30" width="10" height="110" fill="#cbd5e1" stroke="#334155"/>
      <path d="M 215,100 L 215,50" stroke="#ea580c" stroke-width="1.5" marker-end="url(#orange-arrow)" marker-start="url(#orange-arrow)"/>
      <text x="200" y="80" fill="#ea580c" font-weight="bold" font-size="12">V</text>
    </svg>`
  },
  "s8-3": {
    title: "HI Method (Height of Instrument)",
    formula: "HI = BM + BS, \\quad RL = HI - FS",
    use: "Used for: Benchmarks levelling and structural survey point grids.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="40" y="100" width="30" height="40" fill="#94a3b8" stroke="#334155"/>
      <!-- Tripod -->
      <polygon points="135,140 165,140 150,100" fill="none" stroke="#334155" stroke-width="1.5"/>
      <text x="55" y="125" fill="#334155" font-weight="bold" font-size="11">BM</text>
      <text x="150" y="90" fill="#4d7c0f" font-weight="bold" font-size="12" text-anchor="middle">HI</text>
    </svg>`
  },
  "s8-4": {
    title: "Closing Error in Levelling",
    formula: "e = \\sum BS - \\sum FS",
    use: "Used for: Closed loop error evaluation checking.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Closed polygon traverse -->
      <polygon points="60,60 140,40 220,70 200,130 90,120" fill="none" stroke="#475569" stroke-width="2"/>
      <circle cx="60" cy="60" r="5" fill="#4d7c0f"/>
      <circle cx="58" cy="65" r="4" fill="#e11d48"/>
      <text x="35" y="65" fill="#e11d48" font-weight="bold" font-size="11">Error e</text>
    </svg>`
  },
  "s8-5": {
    title: "Area by Trapezoidal Rule",
    formula: "A = \\frac{d}{2} [ O_1 + O_n + 2(O_2 + O_3 + \\dots) ]",
    use: "Used for: Plot boundary area estimates under trapezoidal splits.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <path d="M 40,120 L 260,120 L 260,70 L 205,80 L 150,60 L 95,95 L 40,75 Z" fill="#ecfccb" stroke="#334155" stroke-width="1.5"/>
      <line x1="95" y1="120" x2="95" y2="95" stroke="#4d7c0f" stroke-width="1.5"/>
      <line x1="150" y1="120" x2="150" y2="60" stroke="#4d7c0f" stroke-width="1.5"/>
      <line x1="205" y1="120" x2="205" y2="80" stroke="#4d7c0f" stroke-width="1.5"/>
      <text x="150" y="140" fill="#4d7c0f" font-weight="bold" font-size="11" text-anchor="middle">d (Intervals)</text>
    </svg>`
  },
  "s8-6": {
    title: "Area by Simpson's Rule",
    formula: "A = \\frac{d}{3} [ O_1 + O_n + 4(odd) + 2(even) ]",
    use: "Used for: Precise volume and area checks of irregular curves.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Curved boundary -->
      <path d="M 40,120 L 260,120 L 260,60 Q 200,40 150,85 Q 100,120 40,75 Z" fill="#ecfccb" stroke="#334155" stroke-width="1.5"/>
      <line x1="150" y1="120" x2="150" y2="85" stroke="#4d7c0f" stroke-width="1.5"/>
      <text x="150" y="140" fill="#4d7c0f" font-weight="bold" font-size="11" text-anchor="middle">Simpson's parabolas</text>
    </svg>`
  },
  "s8-7": {
    title: "Prismoidal Formula (Volume)",
    formula: "V = \\frac{L}{6} [ A_1 + A_2 + 4 A_m ]",
    use: "Used for: Accurate volume checks of earthwork cuttings.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Multi-section solid -->
      <polygon points="50,80 80,60 130,110 50,110" fill="#cbd5e1" stroke="#334155"/>
      <polygon points="170,80 200,60 250,110 170,110" fill="#94a3b8" stroke="#334155"/>
      <text x="150" y="140" fill="#4d7c0f" font-weight="bold" font-size="11" text-anchor="middle">L (length)</text>
    </svg>`
  },
  "s8-8": {
    title: "Bearing Conversion",
    formula: "WCB \\rightarrow QB conversions",
    use: "Used for: Mapping compass Whole Circle Bearings to Quadrantal Bearings.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <line x1="150" y1="20" x2="150" y2="160" stroke="#334155" stroke-width="1.5"/>
      <line x1="80" y1="90" x2="220" y2="90" stroke="#334155" stroke-width="1.5"/>
      <path d="M 150,90 L 195,50" stroke="#ea580c" stroke-width="2" marker-end="url(#orange-arrow)"/>
      <text x="150" y="15" fill="#334155" font-weight="bold" font-size="11" text-anchor="middle">N</text>
      <text x="225" y="93" fill="#334155" font-weight="bold" font-size="11">E</text>
    </svg>`
  },
  "s8-9": {
    title: "Curvature & Refraction",
    formula: "C = 0.0673 \\cdot D^2",
    use: "Used for: Correcting long-distance level sight points.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <path d="M 50,150 Q 150,110 250,150" fill="none" stroke="#475569" stroke-width="2"/>
      <line x1="50" y1="110" x2="250" y2="110" stroke="#e11d48" stroke-dasharray="3,3"/>
      <text x="150" y="90" fill="#e11d48" font-weight="bold" font-size="11" text-anchor="middle">Line of Sight</text>
      <text x="150" y="160" fill="#334155" font-weight="bold" font-size="11" text-anchor="middle">Earth Curve</text>
    </svg>`
  },
  "s8-10": {
    title: "Traverse Missing Bearing",
    formula: "e = \\sqrt{(\\sum Lat)^2 + (\\sum Dep)^2}",
    use: "Used for: Checking missing lengths and bearings in closed traverses.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <polygon points="70,60 180,40 230,120 110,130" fill="none" stroke="#334155" stroke-width="1.5"/>
      <path d="M 110,130 L 70,60" stroke="#e11d48" stroke-dasharray="4,2" stroke-width="2.5"/>
      <text x="60" y="105" fill="#e11d48" font-weight="bold" font-size="11">Missing Link</text>
    </svg>`
  },

  // --- Part 9 Transportation Engineering ---
  "s9-1": {
    title: "Stopping Sight Distance (SSD)",
    formula: "SSD = 0.278 \\cdot V \\cdot t + \\frac{V^2}{254 \\cdot f}",
    use: "Used for: Minimum clear safe sight distance design for highways.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Road -->
      <line x1="30" y1="130" x2="270" y2="130" stroke="#475569" stroke-width="4"/>
      <!-- Car 1 (Overtaking/Moving - Red) -->
      <g transform="translate(45, 108) scale(0.6)">
        <path d="M 10,20 Q 15,5 30,5 L 50,5 Q 65,5 75,20 L 85,20 Q 95,20 95,30 L 5,30 Q 5,20 10,20 Z" fill="#e11d48"/>
        <rect x="15" y="20" width="65" height="15" fill="#f43f5e"/>
        <circle cx="25" cy="35" r="8" fill="#1e293b"/>
        <circle cx="70" cy="35" r="8" fill="#1e293b"/>
        <circle cx="25" cy="35" r="3" fill="#cbd5e1"/>
        <circle cx="70" cy="35" r="3" fill="#cbd5e1"/>
      </g>
      <!-- Car 2 (Stationary Obstacle - Blue) -->
      <g transform="translate(195, 108) scale(0.6)">
        <path d="M 10,20 Q 15,5 30,5 L 50,5 Q 65,5 75,20 L 85,20 Q 95,20 95,30 L 5,30 Q 5,20 10,20 Z" fill="#0284c7"/>
        <rect x="15" y="20" width="65" height="15" fill="#0ea5e9"/>
        <circle cx="25" cy="35" r="8" fill="#1e293b"/>
        <circle cx="70" cy="35" r="8" fill="#1e293b"/>
        <circle cx="25" cy="35" r="3" fill="#cbd5e1"/>
        <circle cx="70" cy="35" r="3" fill="#cbd5e1"/>
      </g>
      <!-- SSD Dimension line -->
      <path d="M 75,145 L 225,145" stroke="#be123c" stroke-width="2" marker-end="url(#red-arrow)" marker-start="url(#red-arrow)"/>
      <text x="150" y="160" fill="#be123c" font-weight="bold" font-size="12" text-anchor="middle">SSD</text>
      <!-- Sight line -->
      <line x1="85" y1="118" x2="205" y2="118" stroke="#10b981" stroke-dasharray="3,3" stroke-width="1.5"/>
    </svg>`
  },
  "s9-2": {
    title: "Overtaking Sight Distance (OSD)",
    formula: "OSD = d_1 + d_2 + d_3",
    use: "Used for: Overtaking zone distance designs on high speed highways.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Multi-lane highway -->
      <line x1="20" y1="75" x2="280" y2="75" stroke="#475569" stroke-width="2"/>
      <line x1="20" y1="105" x2="280" y2="105" stroke="#94a3b8" stroke-dasharray="4,4" stroke-width="1.5"/>
      <line x1="20" y1="135" x2="280" y2="135" stroke="#475569" stroke-width="2"/>
      <!-- Car A1 (Overtaking initial - Red) -->
      <g transform="translate(30, 110) scale(0.4)">
        <rect x="10" y="10" width="50" height="20" fill="#e11d48" rx="3"/>
        <circle cx="20" cy="32" r="5" fill="#000"/><circle cx="50" cy="32" r="5" fill="#000"/>
      </g>
      <!-- Car B (Overtaken slow vehicle - Grey) -->
      <g transform="translate(100, 110) scale(0.4)">
        <rect x="5" y="5" width="60" height="25" fill="#64748b" rx="2"/>
        <circle cx="18" cy="32" r="6" fill="#000"/><circle cx="52" cy="32" r="6" fill="#000"/>
      </g>
      <!-- Car A2 (Overtaking passing - Red outline) -->
      <g transform="translate(140, 80) scale(0.4)" opacity="0.7">
        <rect x="10" y="10" width="50" height="20" fill="none" stroke="#e11d48" stroke-width="2" rx="3"/>
        <circle cx="20" cy="32" r="5" fill="#000"/><circle cx="50" cy="32" r="5" fill="#000"/>
      </g>
      <!-- Car C (Oncoming - Blue) -->
      <g transform="translate(225, 80) scale(0.4)">
        <rect x="10" y="10" width="50" height="20" fill="#0284c7" rx="3"/>
        <circle cx="20" cy="32" r="5" fill="#000"/><circle cx="50" cy="32" r="5" fill="#000"/>
      </g>
      <!-- Path Arrow -->
      <path d="M 55,115 C 90,115 110,85 155,85" fill="none" stroke="#e11d48" stroke-width="1" stroke-dasharray="2,2"/>
      <!-- Dimension Arrows -->
      <path d="M 30,150 L 95,150" stroke="#475569" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <path d="M 95,150 L 220,150" stroke="#475569" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <path d="M 220,150 L 265,150" stroke="#475569" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="62" y="162" fill="#475569" font-size="9" font-weight="bold" text-anchor="middle">d1</text>
      <text x="157" y="162" fill="#475569" font-size="9" font-weight="bold" text-anchor="middle">d2</text>
      <text x="242" y="162" fill="#475569" font-size="9" font-weight="bold" text-anchor="middle">d3</text>
    </svg>`
  },
  "s9-3": {
    title: "Superelevation on Curves",
    formula: "e + f = \\frac{V^2}{127 \\cdot R}",
    use: "Used for: Banking roads on horizontal curves to resist centrifugal force.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Horizontal Reference -->
      <line x1="40" y1="135" x2="240" y2="135" stroke="#94a3b8" stroke-dasharray="3,3" stroke-width="1.5"/>
      <!-- Banked Road Bed -->
      <polygon points="40,135 240,95 240,135" fill="none" stroke="#334155" stroke-width="2"/>
      <polygon points="40,135 240,95 240,135" fill="#f1f5f9" opacity="0.4"/>
      <!-- Height e -->
      <path d="M 248,135 L 248,95" stroke="#be123c" stroke-width="1.5" marker-end="url(#red-arrow)" marker-start="url(#red-arrow)"/>
      <text x="258" y="120" fill="#be123c" font-weight="bold" font-size="12">e</text>
      <!-- Banked Vehicle Cross section -->
      <g transform="translate(130, 95) rotate(-11.3)">
        <rect x="-20" y="-30" width="40" height="25" fill="#64748b" stroke="#334155" stroke-width="1.5" rx="3"/>
        <rect x="-16" y="-5" width="10" height="5" fill="#1e293b"/>
        <rect x="6" y="-5" width="10" height="5" fill="#1e293b"/>
        <!-- Force vectors -->
        <path d="M 0,-15 L 0,15" stroke="#ea580c" stroke-width="2" marker-end="url(#orange-arrow)"/>
        <path d="M 0,-15 L 30,-15" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)"/>
        <text x="35" y="-12" fill="#0284c7" font-size="10" font-weight="bold">P</text>
        <text x="4" y="25" fill="#ea580c" font-size="10" font-weight="bold">W</text>
        <!-- Friction f -->
        <path d="M -15,-2 L -35,-2" stroke="#10b981" stroke-width="1.5" marker-end="url(#arrow)"/>
        <text x="-38" y="-8" fill="#10b981" font-size="10" font-weight="bold">f</text>
      </g>
    </svg>`
  },
  "s9-4": {
    title: "Extra Widening on Curves",
    formula: "W_e = \\frac{n \\cdot l^2}{2 \\cdot R} + \\frac{V}{9.5 \\cdot \\sqrt{R}}",
    use: "Used for: Mechanical and psychological widening design on horizontal road curves.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Curved road boundaries -->
      <path d="M 40,160 Q 150,150 220,40" fill="none" stroke="#475569" stroke-width="24"/>
      <!-- Inner dashed widening line -->
      <path d="M 45,155 Q 145,142 210,38" fill="none" stroke="#be123c" stroke-dasharray="3,3" stroke-width="1"/>
      <path d="M 33,165 Q 153,158 230,42" fill="none" stroke="#0284c7" stroke-width="1.5"/>
      <!-- Vehicle off-tracking paths -->
      <g transform="translate(100, 115) rotate(-25)">
        <rect x="-10" y="-20" width="20" height="40" fill="#64748b" opacity="0.8" rx="2"/>
        <!-- Front tires skewed -->
        <rect x="-13" y="-18" width="4" height="10" fill="#000" transform="rotate(15, -11, -13)"/>
        <rect x="9" y="-18" width="4" height="10" fill="#000" transform="rotate(15, 11, -13)"/>
        <!-- Rear tires straight -->
        <rect x="-13" y="10" width="4" height="10" fill="#000"/>
        <rect x="9" y="10" width="4" height="10" fill="#000"/>
      </g>
      <!-- Widening arrow indicator -->
      <path d="M 195,65 L 210,55" stroke="#be123c" stroke-width="1.5" marker-end="url(#red-arrow)" marker-start="url(#red-arrow)"/>
      <text x="175" y="55" fill="#be123c" font-size="11" font-weight="bold">We</text>
      <text x="135" y="150" fill="#475569" font-size="11" font-weight="bold">R (Radius)</text>
    </svg>`
  },
  "s9-5": {
    title: "Transition Curve Length",
    formula: "L = \\frac{0.0215 \\cdot V^3}{C \\cdot R}",
    use: "Used for: Spiral transition length between tangent alignment and circular curve.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Tangent road (straight) -->
      <line x1="30" y1="130" x2="120" y2="130" stroke="#475569" stroke-width="3"/>
      <!-- Spiral/Transition curve -->
      <path d="M 120,130 C 160,130 190,110 220,70" fill="none" stroke="#be123c" stroke-width="3"/>
      <!-- Circular curve -->
      <path d="M 220,70 C 235,50 250,25 260,10" fill="none" stroke="#0284c7" stroke-width="2"/>
      <!-- Radius representation -->
      <line x1="220" y1="70" x2="160" y2="20" stroke="#0284c7" stroke-dasharray="3,3" stroke-width="1.5"/>
      <circle cx="160" cy="20" r="3" fill="#0284c7"/>
      <!-- Dimension markers -->
      <path d="M 120,145 L 220,145" stroke="#be123c" stroke-width="1.5" marker-end="url(#red-arrow)" marker-start="url(#red-arrow)"/>
      <text x="170" y="160" fill="#be123c" font-weight="bold" font-size="11" text-anchor="middle">L (Transition Length)</text>
      <text x="195" y="45" fill="#0284c7" font-weight="bold" font-size="11">R</text>
    </svg>`
  },
  "s9-6": {
    title: "Grade Compensation on Curves",
    formula: "\\text{Comp} = \\min\\left(\\frac{30+R}{R}\\% , \\frac{75}{R}\\%\\right)",
    use: "Used for: Reducing design gradient on curves to offset tractive loss.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Hill Wedge -->
      <polygon points="40,140 240,60 240,140" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      <line x1="40" y1="140" x2="240" y2="140" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <!-- Climbing Car -->
      <g transform="translate(130, 96) rotate(-21.8) scale(0.6)">
        <path d="M 10,20 Q 15,5 30,5 L 50,5 Q 65,5 75,20 L 85,20 Q 95,20 95,30 L 5,30 Q 5,20 10,20 Z" fill="#be123c"/>
        <circle cx="25" cy="33" r="8" fill="#000"/><circle cx="70" cy="33" r="8" fill="#000"/>
      </g>
      <!-- Dimension -->
      <path d="M 252,140 L 252,60" stroke="#ea580c" stroke-width="1.5" marker-end="url(#orange-arrow)" marker-start="url(#orange-arrow)"/>
      <text x="262" y="105" fill="#orange-arrow" font-weight="bold" font-size="11">Grade</text>
      <text x="140" y="130" fill="#475569" font-weight="bold" font-size="11">R (Curve Radius)</text>
    </svg>`
  },
  "s9-7": {
    title: "CBR Pavement Thickness Design",
    formula: "t = \\sqrt{ \\frac{P}{\\text{CBR}} - a }",
    use: "Used for: Determining flexible pavement thickness (t) required over soil subgrade.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Pavement Layers -->
      <rect x="50" y="50" width="160" height="15" fill="#475569" stroke="#334155" stroke-width="1"/>
      <text x="130" y="61" fill="#fff" font-size="8" text-anchor="middle">Asphalt Wearing Course</text>
      <rect x="50" y="65" width="160" height="25" fill="#94a3b8" stroke="#334155" stroke-width="1"/>
      <text x="130" y="80" fill="#1e293b" font-size="9" text-anchor="middle">Base &amp; Sub-Base</text>
      <rect x="50" y="90" width="160" height="45" fill="#d97706" opacity="0.3" stroke="#334155" stroke-width="1"/>
      <text x="130" y="115" fill="#78350f" font-weight="bold" font-size="10" text-anchor="middle">Subgrade Soil (CBR)</text>
      <!-- Load Wheel -->
      <circle cx="130" cy="30" r="20" fill="none" stroke="#475569" stroke-width="3"/>
      <line x1="130" y1="10" x2="130" y2="40" stroke="#e11d48" stroke-width="2.5" marker-end="url(#red-arrow)"/>
      <text x="138" y="20" fill="#e11d48" font-weight="bold" font-size="11">W</text>
      <!-- Dispersion Lines -->
      <line x1="110" y1="50" x2="70" y2="90" stroke="#ea580c" stroke-dasharray="3,3" stroke-width="1.5"/>
      <line x1="150" y1="50" x2="190" y2="90" stroke="#ea580c" stroke-dasharray="3,3" stroke-width="1.5"/>
      <!-- Thickness Dimension -->
      <path d="M 222,50 L 222,90" stroke="#be123c" stroke-width="1.5" marker-end="url(#red-arrow)" marker-start="url(#red-arrow)"/>
      <text x="232" y="75" fill="#be123c" font-weight="bold" font-size="12">t</text>
    </svg>`
  },
  "s9-8": {
    title: "Traffic Flow Fundamental Equation",
    formula: "q = k \\cdot v",
    use: "Used for: Calculating flow volume (q) from density (k) and space mean speed (v).",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Graph Axes -->
      <line x1="40" y1="140" x2="260" y2="140" stroke="#334155" stroke-width="2"/>
      <line x1="40" y1="20" x2="40" y2="140" stroke="#334155" stroke-width="2"/>
      <text x="260" y="155" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">Density (k)</text>
      <text x="25" y="20" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-90 25 20)">Flow (q)</text>
      <!-- Parabola -->
      <path d="M 40,140 Q 140,25 240,140" fill="none" stroke="#be123c" stroke-width="3"/>
      <!-- Critical points -->
      <line x1="140" y1="82.5" x2="140" y2="140" stroke="#475569" stroke-dasharray="2,2"/>
      <line x1="40" y1="82.5" x2="140" y2="82.5" stroke="#475569" stroke-dasharray="2,2"/>
      <circle cx="140" cy="82.5" r="4" fill="#be123c"/>
      <text x="140" y="152" fill="#be123c" font-size="9" text-anchor="middle">kc (Critical)</text>
      <text x="240" y="152" fill="#334155" font-size="9" text-anchor="middle">kj (Jam)</text>
      <text x="20" y="86" fill="#be123c" font-size="9">qmax</text>
    </svg>`
  },
  "s9-9": {
    title: "PCU Based Capacity",
    formula: "Capacity = \\frac{1000 \\cdot V}{S}",
    use: "Used for: Estimating highway single lane safe capacity flow rate (PCU/hr).",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <line x1="20" y1="120" x2="280" y2="120" stroke="#475569" stroke-width="3"/>
      <!-- Stream of vehicles (Car -> Truck) -->
      <!-- Lead Vehicle (Grey Truck) -->
      <g transform="translate(180, 85) scale(0.55)">
        <rect x="5" y="10" width="70" height="40" fill="#64748b" rx="2"/>
        <rect x="55" y="20" width="25" height="30" fill="#475569" rx="1"/>
        <circle cx="20" cy="50" r="10" fill="#1e293b"/><circle cx="65" cy="50" r="10" fill="#1e293b"/>
      </g>
      <!-- Following Vehicle (Red Car) -->
      <g transform="translate(50, 95) scale(0.55)">
        <path d="M 10,20 Q 15,5 30,5 L 50,5 Q 65,5 75,20 L 85,20 Q 95,20 95,30 L 5,30 Q 5,20 10,20 Z" fill="#e11d48"/>
        <circle cx="25" cy="35" r="9" fill="#1e293b"/><circle cx="70" cy="35" r="9" fill="#1e293b"/>
      </g>
      <!-- Spacing arrow -->
      <path d="M 102,110 L 182,110" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="142" y="132" fill="#0284c7" font-weight="bold" font-size="11" text-anchor="middle">Spacing S</text>
    </svg>`
  },
  "s9-10": {
    title: "Marshall Stability Mix Design",
    formula: "VFB = \\frac{\\text{VMA} - V_v}{\\text{VMA}} \\times 100",
    use: "Used for: Sizing air voids (Vv) and bitumen fill indices (VMA, VFB) in aggregate mixes.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Circular Specimen Section -->
      <circle cx="150" cy="90" r="50" fill="#0f172a" stroke="#475569" stroke-width="4"/>
      <!-- Interlocking Aggregates (Styled Polygons) -->
      <polygon points="120,70 145,55 140,80" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
      <polygon points="135,100 160,85 165,115" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
      <polygon points="170,70 190,80 180,60" fill="#475569" stroke="#334155" stroke-width="1.5"/>
      <polygon points="110,95 125,115 100,110" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
      <polygon points="150,55 170,45 160,65" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
      <!-- Asphalt Binder (Black matrix background represents binder) -->
      <!-- Air Voids (Tiny White circles representing Vv) -->
      <circle cx="128" cy="65" r="4" fill="#ffffff" stroke="#94a3b8" stroke-width="0.5"/>
      <circle cx="152" cy="78" r="3" fill="#ffffff" stroke="#94a3b8" stroke-width="0.5"/>
      <circle cx="140" cy="115" r="4" fill="#ffffff" stroke="#94a3b8" stroke-width="0.5"/>
      <circle cx="178" cy="85" r="3" fill="#ffffff" stroke="#94a3b8" stroke-width="0.5"/>
      <text x="150" y="160" fill="#be123c" font-weight="bold" font-size="11" text-anchor="middle">Aggregate Matrix &amp; Air Voids (Vv)</text>
    </svg>`
  },
  "s10-1": {
    title: "Population Forecasting (Arithmetic)",
    formula: "P_n = P_0 + n \\cdot \\bar{x}",
    use: "Used for: Forecasting municipal water demand requirements across future decades.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Grid -->
      <line x1="40" y1="140" x2="260" y2="140" stroke="#475569" stroke-width="2"/>
      <line x1="40" y1="20" x2="40" y2="140" stroke="#475569" stroke-width="2"/>
      <!-- Linear Projection -->
      <path d="M 40,110 L 220,40" fill="none" stroke="#0d9488" stroke-width="3"/>
      <!-- Data points -->
      <circle cx="40" cy="110" r="4" fill="#0f766e"/>
      <circle cx="100" cy="87" r="4" fill="#0f766e"/>
      <circle cx="160" cy="63" r="4" fill="#0f766e"/>
      <circle cx="220" cy="40" r="4" fill="#be123c"/>
      <!-- Lines -->
      <line x1="220" y1="40" x2="220" y2="140" stroke="#94a3b8" stroke-dasharray="2,2"/>
      <line x1="40" y1="40" x2="220" y2="40" stroke="#94a3b8" stroke-dasharray="2,2"/>
      <text x="220" y="152" fill="#be123c" font-size="9" text-anchor="middle">Pn (Forecast)</text>
      <text x="45" y="152" fill="#0f766e" font-size="9" text-anchor="middle">P0</text>
      <text x="145" y="25" fill="#0d9488" font-weight="bold" font-size="11" text-anchor="middle">Linear Increase (Slope = x)</text>
    </svg>`
  },
  "s10-2": {
    title: "Fire Water Demand (Kuichling's)",
    formula: "Q = 3182 \\cdot \\sqrt{P}",
    use: "Used for: Sizing local storage reservoirs to provide municipal fire extinguishing flows.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Water jet spray vectors -->
      <path d="M 175,70 Q 230,40 270,90" fill="none" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow)"/>
      <path d="M 175,60 Q 230,20 280,60" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Fire Hydrant profile -->
      <g transform="translate(110, 40) scale(0.7)">
        <rect x="25" y="20" width="30" height="80" fill="#e11d48" rx="5" stroke="#991b1b" stroke-width="2"/>
        <rect x="20" y="30" width="40" height="15" fill="#f43f5e" rx="2"/>
        <rect x="35" y="5" width="10" height="15" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
        <circle cx="15" cy="55" r="8" fill="#94a3b8" stroke="#475569"/>
        <circle cx="65" cy="55" r="8" fill="#94a3b8" stroke="#475569"/>
        <rect x="20" y="95" width="40" height="10" fill="#475569"/>
      </g>
      <text x="210" y="145" fill="#0ea5e9" font-weight="bold" font-size="12">Q (Fire Flow)</text>
    </svg>`
  },
  "s10-3": {
    title: "Sedimentation Surface Overflow Rate (SOR)",
    formula: "v_0 = \\frac{Q}{A_s}",
    use: "Used for: Design sizing of water treatment settling basins and clarifiers.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Sedimentation Basin Cross section -->
      <polygon points="40,40 240,40 220,130 60,130" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
      <line x1="40" y1="50" x2="240" y2="50" stroke="#38bdf8" stroke-width="3"/>
      <!-- Water flow arrows -->
      <path d="M 30,50 L 55,50" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)"/>
      <path d="M 225,50 L 255,50" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Settling Particles -->
      <g fill="#78350f" opacity="0.8">
        <circle cx="90" cy="65" r="3"/><circle cx="105" cy="85" r="2.5"/><path d="M 90,65 L 100,95" stroke="#78350f" stroke-dasharray="2,1"/>
        <circle cx="140" cy="70" r="3"/><circle cx="155" cy="100" r="2.5"/><path d="M 140,70 L 152,110" stroke="#78350f" stroke-dasharray="2,1"/>
      </g>
      <text x="150" y="145" fill="#0f766e" font-weight="bold" font-size="11" text-anchor="middle">As (Surface Settling Area)</text>
    </svg>`
  },
  "s10-4": {
    title: "Stokes' Settling Velocity",
    formula: "v_s = \\frac{g \\cdot (s - 1) \\cdot d^2}{18 \\cdot \\nu}",
    use: "Used for: Calculating settling velocity of sand/silt in primary settling tanks.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Container boundary -->
      <rect x="90" y="20" width="120" height="140" fill="#f8fafc" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <!-- Discrete particle -->
      <circle cx="150" cy="80" r="14" fill="#d97706" stroke="#b45309" stroke-width="2"/>
      <text x="150" y="84" fill="#fff" font-weight="bold" font-size="11" text-anchor="middle">d</text>
      <!-- Force vectors -->
      <path d="M 150,94 L 150,140" stroke="#be123c" stroke-width="2.5" marker-end="url(#red-arrow)"/>
      <text x="160" y="130" fill="#be123c" font-weight="bold" font-size="10">vs (Settling)</text>
      <path d="M 150,66 L 150,30" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="160" y="45" fill="#0284c7" font-weight="bold" font-size="10">Viscous Drag</text>
    </svg>`
  },
  "s10-5": {
    title: "Rapid Sand Filter Bed Area",
    formula: "A_f = \\frac{Q}{\\text{Filtration Rate}}",
    use: "Used for: Determining total bed filter surface area for municipal drinking water filtration.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Filter Layers cross-section -->
      <rect x="60" y="30" width="180" height="15" fill="#0284c7" opacity="0.2"/>
      <text x="150" y="41" fill="#0369a1" font-size="9" text-anchor="middle">Water Layer</text>
      <rect x="60" y="45" width="180" height="25" fill="#475569" stroke="#1e293b"/>
      <text x="150" y="60" fill="#fff" font-size="9" text-anchor="middle">Coal / Anthracite</text>
      <rect x="60" y="70" width="180" height="30" fill="#eab308" opacity="0.6" stroke="#1e293b"/>
      <text x="150" y="88" fill="#713f12" font-size="9" text-anchor="middle">Fine Silica Sand</text>
      <rect x="60" y="100" width="180" height="35" fill="#94a3b8" stroke="#1e293b"/>
      <!-- Gravel stone indicators -->
      <circle cx="80" cy="110" r="5" fill="#475569"/><circle cx="110" cy="118" r="6" fill="#475569"/><circle cx="140" cy="112" r="5" fill="#475569"/>
      <text x="190" y="122" fill="#1e293b" font-weight="bold" font-size="9">Graded Gravel</text>
      <!-- Filtration flow arrow -->
      <path d="M 252,30 L 252,135" stroke="#0d9488" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="262" y="85" fill="#0d9488" font-weight="bold" font-size="11">Bed Depth</text>
    </svg>`
  },
  "s10-6": {
    title: "Biochemical Oxygen Demand (BOD Decay)",
    formula: "\\text{BOD}_t = \\text{BOD}_u \\cdot (1 - 10^{-k \\cdot t})",
    use: "Used for: Modeling biological depletion of organic wastes in natural streams.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Grid -->
      <line x1="45" y1="140" x2="265" y2="140" stroke="#334155" stroke-width="2"/>
      <line x1="45" y1="20" x2="45" y2="140" stroke="#334155" stroke-width="2"/>
      <!-- BOD curve asymptotic -->
      <path d="M 45,140 Q 120,45 250,45" fill="none" stroke="#be123c" stroke-width="3"/>
      <!-- Asymptotic Ultimate BOD limit -->
      <line x1="45" y1="45" x2="265" y2="45" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <text x="230" y="38" fill="#be123c" font-weight="bold" font-size="11">Ultimate BOD (BODu)</text>
      <text x="145" y="100" fill="#be123c" font-weight="bold" font-size="11">BOD consumed (BODt)</text>
      <text x="250" y="155" fill="#334155" font-weight="bold" font-size="10" text-anchor="middle">Time t (Days)</text>
    </svg>`
  },
  "s10-7": {
    title: "Streeter-Phelps DO Sag Curve",
    formula: "\\text{DO Deficit } D_t = f(L_0, D_0, k_d, k_r, t)",
    use: "Used for: Sizing allowable wastewater stream discharges based on downstream oxygen recovery.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Axes -->
      <line x1="40" y1="140" x2="260" y2="140" stroke="#334155" stroke-width="2"/>
      <line x1="40" y1="20" x2="40" y2="140" stroke="#334155" stroke-width="2"/>
      <!-- Sag Curve -->
      <path d="M 40,50 Q 80,135 150,110 T 260,35" fill="none" stroke="#0284c7" stroke-width="3"/>
      <!-- Critical oxygen deficit line -->
      <line x1="120" y1="124" x2="120" y2="140" stroke="#be123c" stroke-dasharray="2,2"/>
      <circle cx="120" cy="124" r="4" fill="#be123c"/>
      <text x="120" y="152" fill="#be123c" font-size="9" font-weight="bold" text-anchor="middle">Critical Point</text>
      <text x="210" y="70" fill="#0284c7" font-weight="bold" font-size="11">DO Recovery</text>
      <text x="250" y="155" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">Distance Downstream</text>
    </svg>`
  },
  "s10-8": {
    title: "Gravity Sewer Sizing (Manning's)",
    formula: "Q = A \\cdot \\frac{1}{n} \\cdot R^{2/3} \\cdot S^{1/2}",
    use: "Used for: Hydraulic structural sizing of gravity flow sewer pipes and conduits.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Sewer outer circle -->
      <circle cx="150" cy="85" r="50" fill="none" stroke="#475569" stroke-width="4"/>
      <!-- Partial flow water profile -->
      <path d="M 104,66 A 50,50 0 0 0 196,66 Z" fill="#38bdf8" opacity="0.4" stroke="#0284c7" stroke-width="1"/>
      <line x1="104" y1="66" x2="196" y2="66" stroke="#0284c7" stroke-width="2"/>
      <!-- Spanning indicators -->
      <line x1="150" y1="85" x2="150" y2="135" stroke="#475569" stroke-dasharray="2,2"/>
      <path d="M 150,85 L 190,115" stroke="#be123c" stroke-width="1.5" marker-end="url(#red-arrow)"/>
      <text x="175" y="100" fill="#be123c" font-weight="bold" font-size="11">r (Radius)</text>
      <text x="150" y="55" fill="#0284c7" font-weight="bold" font-size="11" text-anchor="middle">Partial Flow Area (A)</text>
    </svg>`
  },
  "s10-9": {
    title: "Sludge Volume Index (SVI)",
    formula: "\\text{SVI} = \\frac{V_{30} \\cdot 1000}{\\text{MLSS}}",
    use: "Used for: Settleability diagnostics and solids quality control of activated sludge.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Graduated Cylinder -->
      <rect x="110" y="20" width="50" height="130" fill="none" stroke="#475569" stroke-width="2"/>
      <!-- Liquid and Sludge layer -->
      <rect x="111" y="90" width="48" height="60" fill="#78350f" opacity="0.5"/>
      <rect x="111" y="40" width="48" height="50" fill="#38bdf8" opacity="0.15"/>
      <!-- Graduations -->
      <line x1="150" y1="30" x2="160" y2="30" stroke="#475569"/><line x1="150" y1="50" x2="160" y2="50" stroke="#475569"/>
      <line x1="150" y1="70" x2="160" y2="70" stroke="#475569"/><line x1="150" y1="90" x2="160" y2="90" stroke="#475569"/>
      <line x1="150" y1="110" x2="160" y2="110" stroke="#475569"/><line x1="150" y1="130" x2="160" y2="130" stroke="#475569"/>
      <text x="180" y="94" fill="#78350f" font-weight="bold" font-size="10">V30 (Settled Sludge)</text>
      <text x="180" y="55" fill="#0284c7" font-weight="bold" font-size="10">Clear Effluent</text>
    </svg>`
  },
  "s10-10": {
    title: "Aeration Basin Organic Loading (F/M Ratio)",
    formula: "\\text{F/M} = \\frac{Q \\cdot S_0}{V \\cdot X}",
    use: "Used for: Process balancing of organic sewage food loading and active mixed biomass in bioreactors.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Aeration tank -->
      <rect x="80" y="45" width="140" height="80" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      <!-- Bubble diffusers -->
      <circle cx="100" cy="115" r="3" fill="#38bdf8"/><circle cx="100" cy="100" r="2" fill="#38bdf8"/>
      <circle cx="150" cy="115" r="3" fill="#38bdf8"/><circle cx="150" cy="95" r="2.5" fill="#38bdf8"/>
      <circle cx="200" cy="115" r="3" fill="#38bdf8"/><circle cx="200" cy="100" r="2" fill="#38bdf8"/>
      <!-- Flow arrows -->
      <path d="M 40,75 L 75,75" stroke="#0d9488" stroke-width="2" marker-end="url(#arrow)"/>
      <path d="M 221,75 L 255,75" stroke="#0d9488" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="150" y="80" fill="#0f766e" font-weight="bold" font-size="11" text-anchor="middle">Biomass (MLSS = X)</text>
      <text x="50" y="65" fill="#0d9488" font-size="9" font-weight="bold">Sewage (S0)</text>
    </svg>`
  }
});
