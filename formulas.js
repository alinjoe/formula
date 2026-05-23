// Civil & Structural Engineering Calculation Templates & Visual Reference Systems
// This file contains the complete layouts, default cell contents, and gorgeous SVG diagrams for the 5 calculator sheets.

window.SHEETS_CONFIG = [
  {
    id: "sheet-1",
    name: "Concrete Formulas",
    description: "Essential Concrete & Sectional Design Formulas (Part 1)",
    sections: [
      { id: "s1-1", name: "Volume of Concrete", startRow: 4, endRow: 8, formula: "V = L * B * D" },
      { id: "s1-2", name: "Weight of Concrete", startRow: 10, endRow: 13, formula: "W = V * yc" },
      { id: "s1-3", name: "Compressive Stress", startRow: 15, endRow: 18, formula: "oc = P / A" },
      { id: "s1-4", name: "Tensile Stress", startRow: 20, endRow: 23, formula: "ot = P / A" },
      { id: "s1-5", name: "Flexural Stress (Beam)", startRow: 25, endRow: 29, formula: "ob = My / I" },
      { id: "s1-6", name: "Shear Stress", startRow: 31, endRow: 36, formula: "tv = VQ / (I * b)" },
      { id: "s1-7", name: "Modulus of Rupture", startRow: 38, endRow: 40, formula: "fr = 0.7 * sqrt(fck)" },
      { id: "s1-8", name: "Safe Compressive Stress", startRow: 42, endRow: 44, formula: "oc,allow = 0.45 * fck" },
      { id: "s1-9", name: "Reinforcement Ratio", startRow: 46, endRow: 51, formula: "p = As / (bd)" },
      { id: "s1-10", name: "Deflection of Simply Supported Beam (UDL)", startRow: 53, endRow: 58, formula: "dmax = 5wL^4 / 384EI" }
    ],
    defaultCells: {
      "A2": { v: "ESSENTIAL CONCRETE FORMULAS - CALCULATOR", style: { bold: true, fontSize: 16, color: "#1e3a8a" } },
      "A3": { v: "Dynamic Engineering Calculator - Enter Blue Values to Calculate Results", style: { italic: true, fontSize: 11, color: "#475569" } },

      // 1. Volume
      "A4": { v: "1. VOLUME OF CONCRETE", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B4": { v: "", style: { bgColor: "#1e40af" } }, "C4": { v: "", style: { bgColor: "#1e40af" } }, "D4": { v: "", style: { bgColor: "#1e40af" } },
      "A5": { v: "Length (L)" }, "B5": { v: "5", style: { bgColor: "#dbeafe", align: "right" } }, "C5": { v: "m" },
      "A6": { v: "Breadth (B)" }, "B6": { v: "0.3", style: { bgColor: "#dbeafe", align: "right" } }, "C6": { v: "m" },
      "A7": { v: "Depth (D)" }, "B7": { v: "0.4", style: { bgColor: "#dbeafe", align: "right" } }, "C7": { v: "m" },
      "A8": { v: "Volume (V)" }, "B8": { v: "=B5*B6*B7", style: { bold: true, align: "right" } }, "C8": { v: "m³" },

      // 2. Weight
      "A10": { v: "2. WEIGHT OF CONCRETE", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B10": { v: "", style: { bgColor: "#1e40af" } }, "C10": { v: "", style: { bgColor: "#1e40af" } }, "D10": { v: "", style: { bgColor: "#1e40af" } },
      "A11": { v: "Volume (V)" }, "B11": { v: "=B8", style: { align: "right" } }, "C11": { v: "m³" },
      "A12": { v: "Unit Weight (\u03B3c)", style: {} }, "B12": { v: "24", style: { bgColor: "#dbeafe", align: "right" } }, "C12": { v: "kN/m³" }, "D12": { v: "(Normal concrete = 24)", style: { italic: true, color: "#64748b" } },
      "A13": { v: "Weight (W)" }, "B13": { v: "=B11*B12", style: { bold: true, align: "right" } }, "C13": { v: "kN" },

      // 3. Compressive Stress
      "A15": { v: "3. COMPRESSIVE STRESS", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B15": { v: "", style: { bgColor: "#1e40af" } }, "C15": { v: "", style: { bgColor: "#1e40af" } }, "D15": { v: "", style: { bgColor: "#1e40af" } },
      "A16": { v: "Load (P)" }, "B16": { v: "50000", style: { bgColor: "#dbeafe", align: "right" } }, "C16": { v: "N" },
      "A17": { v: "Area (A)" }, "B17": { v: "2500", style: { bgColor: "#dbeafe", align: "right" } }, "C17": { v: "mm²" },
      "A18": { v: "Compressive Stress (\u03C3c)" }, "B18": { v: "=B16/B17", style: { bold: true, align: "right" } }, "C18": { v: "N/mm²" },

      // 4. Tensile Stress
      "A20": { v: "4. TENSILE STRESS", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B20": { v: "", style: { bgColor: "#1e40af" } }, "C20": { v: "", style: { bgColor: "#1e40af" } }, "D20": { v: "", style: { bgColor: "#1e40af" } },
      "A21": { v: "Tensile Load (P)" }, "B21": { v: "35000", style: { bgColor: "#dbeafe", align: "right" } }, "C21": { v: "N" },
      "A22": { v: "Area (A)" }, "B22": { v: "1200", style: { bgColor: "#dbeafe", align: "right" } }, "C22": { v: "mm²" },
      "A23": { v: "Tensile Stress (\u03C3t)" }, "B23": { v: "=B21/B22", style: { bold: true, align: "right" } }, "C23": { v: "N/mm²" },

      // 5. Flexural Stress
      "A25": { v: "5. FLEXURAL STRESS (BEAM)", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B25": { v: "", style: { bgColor: "#1e40af" } }, "C25": { v: "", style: { bgColor: "#1e40af" } }, "D25": { v: "", style: { bgColor: "#1e40af" } },
      "A26": { v: "Bending Moment (M)" }, "B26": { v: "15000000", style: { bgColor: "#dbeafe", align: "right" } }, "C26": { v: "N·mm" },
      "A27": { v: "Distance from N.A. (y)" }, "B27": { v: "150", style: { bgColor: "#dbeafe", align: "right" } }, "C27": { v: "mm" },
      "A28": { v: "Moment of Inertia (I)" }, "B28": { v: "225000000", style: { bgColor: "#dbeafe", align: "right" } }, "C28": { v: "mm⁴" },
      "A29": { v: "Bending Stress (\u03C3b)" }, "B29": { v: "=(B26*B27)/B28", style: { bold: true, align: "right" } }, "C29": { v: "N/mm²" },

      // 6. Shear Stress
      "A31": { v: "6. SHEAR STRESS", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B31": { v: "", style: { bgColor: "#1e40af" } }, "C31": { v: "", style: { bgColor: "#1e40af" } }, "D31": { v: "", style: { bgColor: "#1e40af" } },
      "A32": { v: "Shear Force (V)" }, "B32": { v: "80000", style: { bgColor: "#dbeafe", align: "right" } }, "C32": { v: "N" },
      "A33": { v: "First Moment (Q)" }, "B33": { v: "450000", style: { bgColor: "#dbeafe", align: "right" } }, "C33": { v: "mm³" },
      "A34": { v: "Moment of Inertia (I)" }, "B34": { v: "160000000", style: { bgColor: "#dbeafe", align: "right" } }, "C34": { v: "mm⁴" },
      "A35": { v: "Width (b)" }, "B35": { v: "150", style: { bgColor: "#dbeafe", align: "right" } }, "C35": { v: "mm" },
      "A36": { v: "Shear Stress (\u03C4v)" }, "B36": { v: "=(B32*B33)/(B34*B35)", style: { bold: true, align: "right" } }, "C36": { v: "N/mm²" },

      // 7. Modulus of Rupture
      "A38": { v: "7. MODULUS OF RUPTURE", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B38": { v: "", style: { bgColor: "#1e40af" } }, "C38": { v: "", style: { bgColor: "#1e40af" } }, "D38": { v: "", style: { bgColor: "#1e40af" } },
      "A39": { v: "Characteristic Strength (fck)" }, "B39": { v: "30", style: { bgColor: "#dbeafe", align: "right" } }, "C39": { v: "N/mm²" },
      "A40": { v: "Modulus of Rupture (fr)" }, "B40": { v: "=0.7*SQRT(B39)", style: { bold: true, align: "right" } }, "C40": { v: "N/mm²" },

      // 8. Safe Compressive Stress
      "A42": { v: "8. SAFE COMPRESSIVE STRESS", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B42": { v: "", style: { bgColor: "#1e40af" } }, "C42": { v: "", style: { bgColor: "#1e40af" } }, "D42": { v: "", style: { bgColor: "#1e40af" } },
      "A43": { v: "Characteristic Strength (fck)" }, "B43": { v: "30", style: { bgColor: "#dbeafe", align: "right" } }, "C43": { v: "N/mm²" },
      "A44": { v: "Allowable Stress (\u03C3c,allow)" }, "B44": { v: "=0.45*B43", style: { bold: true, align: "right" } }, "C44": { v: "N/mm²" },

      // 9. Reinforcement Ratio
      "A46": { v: "9. REINFORCEMENT RATIO", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B46": { v: "", style: { bgColor: "#1e40af" } }, "C46": { v: "", style: { bgColor: "#1e40af" } }, "D46": { v: "", style: { bgColor: "#1e40af" } },
      "A47": { v: "Area of Steel (As)" }, "B47": { v: "415", style: { bgColor: "#dbeafe", align: "right" } }, "C47": { v: "mm²" },
      "A48": { v: "Width (b)" }, "B48": { v: "200", style: { bgColor: "#dbeafe", align: "right" } }, "C48": { v: "mm" },
      "A49": { v: "Effective Depth (d)" }, "B49": { v: "300", style: { bgColor: "#dbeafe", align: "right" } }, "C49": { v: "mm" },
      "A50": { v: "Reinforcement Ratio (\u03C1)" }, "B50": { v: "=B47/(B48*B49)", style: { bold: true, align: "right" } }, "C50": { v: "(ratio)" },
      "A51": { v: "Percentage (%)" }, "B51": { v: "=B50*100", style: { bold: true, align: "right" } }, "C51": { v: "%" },

      // 10. Deflection SSM
      "A53": { v: "10. DEFLECTION OF SIMPLY SUPPORTED BEAM (UDL)", style: { bold: true, bgColor: "#1e40af", color: "#ffffff" } },
      "B53": { v: "", style: { bgColor: "#1e40af" } }, "C53": { v: "", style: { bgColor: "#1e40af" } }, "D53": { v: "", style: { bgColor: "#1e40af" } },
      "A54": { v: "Uniformly Distributed Load (w)" }, "B54": { v: "12", style: { bgColor: "#dbeafe", align: "right" } }, "C54": { v: "N/mm" },
      "A55": { v: "Span Length (L)" }, "B55": { v: "4500", style: { bgColor: "#dbeafe", align: "right" } }, "C55": { v: "mm" },
      "A56": { v: "Modulus of Elasticity (E)" }, "B56": { v: "200000", style: { bgColor: "#dbeafe", align: "right" } }, "C56": { v: "N/mm²" }, "D56": { v: "(Steel = 200000)", style: { italic: true, color: "#64748b" } },
      "A57": { v: "Moment of Inertia (I)" }, "B57": { v: "85000000", style: { bgColor: "#dbeafe", align: "right" } }, "C57": { v: "mm⁴" },
      "A58": { v: "Maximum Deflection (\u03B4max)" }, "B58": { v: "=(5*B54*POW(B55,4))/(384*B56*B57)", style: { bold: true, align: "right" } }, "C58": { v: "mm" }
    }
  },
  {
    id: "sheet-2",
    name: "Beam & Slab Design",
    description: "Beam & Slab Sizing and Capacity Formulas (Part 2)",
    sections: [
      { id: "s2-1", name: "Effective Span of Beam", startRow: 4, endRow: 8, formula: "Leff = Lclear + d" },
      { id: "s2-2", name: "Moment of Resistance (Singly)", startRow: 10, endRow: 16, formula: "Mu = 0.36*fck*b*xu*(d - 0.42*xu)" },
      { id: "s2-3", name: "Bending Moment - Simply Supported (UDL)", startRow: 18, endRow: 21, formula: "M = wL^2 / 8" },
      { id: "s2-4", name: "Bending Moment - Cantilever (UDL)", startRow: 23, endRow: 26, formula: "M = wL^2 / 2" },
      { id: "s2-5", name: "Shear Force - Simply Supported (UDL)", startRow: 28, endRow: 31, formula: "V = wL / 2" },
      { id: "s2-6", name: "One-Way Slab Thickness (Min)", startRow: 33, endRow: 36, formula: "Dmin = L / 20" },
      { id: "s2-7", name: "Two-Way Slab - Short Span Moment", startRow: 38, endRow: 42, formula: "Mx = ax * w * Lx^2" },
      { id: "s2-8", name: "Two-Way Slab - Long Span Moment", startRow: 44, endRow: 48, formula: "My = ay * w * Lx^2" },
      { id: "s2-9", name: "Flanged Beam (T-Beam) Effective Width", startRow: 50, endRow: 55, formula: "bf = L0/6 + bw + 6Df" },
      { id: "s2-10", name: "Deflection Check (L/d Ratio)", startRow: 57, endRow: 62, formula: "L/d <= k1*k2*k3*20" }
    ],
    defaultCells: {
      "A2": { v: "BEAM & SLAB DESIGN FORMULAS", style: { bold: true, fontSize: 16, color: "#0d9488" } },
      "A3": { v: "Concrete Structural Design Suite - Beam and Slab Specifications", style: { italic: true, fontSize: 11, color: "#475569" } },

      // 1. Effective Span
      "A4": { v: "1. EFFECTIVE SPAN OF BEAM", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B4": { v: "", style: { bgColor: "#0f766e" } }, "C4": { v: "", style: { bgColor: "#0f766e" } }, "D4": { v: "", style: { bgColor: "#0f766e" } },
      "A5": { v: "Clear Span (Lclear)" }, "B5": { v: "4000", style: { bgColor: "#ccfbf1", align: "right" } }, "C5": { v: "mm" },
      "A6": { v: "Effective Depth (d)" }, "B6": { v: "350", style: { bgColor: "#ccfbf1", align: "right" } }, "C6": { v: "mm" },
      "A7": { v: "Width of Support (tw)" }, "B7": { v: "230", style: { bgColor: "#ccfbf1", align: "right" } }, "C7": { v: "mm" },
      "A8": { v: "Effective Span (Leff)" }, "B8": { v: "=MIN(B5+B6, B5+B7)", style: { bold: true, align: "right" } }, "C8": { v: "mm" },

      // 2. Moment of Resistance
      "A10": { v: "2. MOMENT OF RESISTANCE (SINGLY REINFORCED)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B10": { v: "", style: { bgColor: "#0f766e" } }, "C10": { v: "", style: { bgColor: "#0f766e" } }, "D10": { v: "", style: { bgColor: "#0f766e" } },
      "A11": { v: "Char Comp Strength (fck)" }, "B11": { v: "25", style: { bgColor: "#ccfbf1", align: "right" } }, "C11": { v: "N/mm²" },
      "A12": { v: "Width of Beam (b)" }, "B12": { v: "250", style: { bgColor: "#ccfbf1", align: "right" } }, "C12": { v: "mm" },
      "A13": { v: "Neutral Axis Depth (xu)" }, "B13": { v: "135", style: { bgColor: "#ccfbf1", align: "right" } }, "C13": { v: "mm" },
      "A14": { v: "Effective Depth (d)" }, "B14": { v: "400", style: { bgColor: "#ccfbf1", align: "right" } }, "C14": { v: "mm" },
      "A15": { v: "Moment Capacity (Mu)" }, "B15": { v: "=0.36*B11*B12*B13*(B14-0.42*B13)", style: { bold: true, align: "right" } }, "C15": { v: "N·mm" },
      "A16": { v: "Capacity in kNm", style: { italic: true } }, "B16": { v: "=B15/1000000", style: { bold: true, align: "right" } }, "C16": { v: "kN·m" },

      // 3. BM Simply Supported
      "A18": { v: "3. BENDING MOMENT - SIMPLY SUPPORTED (UDL)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B18": { v: "", style: { bgColor: "#0f766e" } }, "C18": { v: "", style: { bgColor: "#0f766e" } }, "D18": { v: "", style: { bgColor: "#0f766e" } },
      "A19": { v: "UDL Load (w)" }, "B19": { v: "15", style: { bgColor: "#ccfbf1", align: "right" } }, "C19": { v: "kN/m" },
      "A20": { v: "Span of Beam (L)" }, "B20": { v: "6", style: { bgColor: "#ccfbf1", align: "right" } }, "C20": { v: "m" },
      "A21": { v: "Max Bending Moment (M)" }, "B21": { v: "=(B19*POW(B20,2))/8", style: { bold: true, align: "right" } }, "C21": { v: "kN·m" },

      // 4. BM Cantilever
      "A23": { v: "4. BENDING MOMENT - CANTILEVER (UDL)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B23": { v: "", style: { bgColor: "#0f766e" } }, "C23": { v: "", style: { bgColor: "#0f766e" } }, "D23": { v: "", style: { bgColor: "#0f766e" } },
      "A24": { v: "UDL Load (w)" }, "B24": { v: "8", style: { bgColor: "#ccfbf1", align: "right" } }, "C24": { v: "kN/m" },
      "A25": { v: "Length of Cantilever (L)" }, "B25": { v: "2.5", style: { bgColor: "#ccfbf1", align: "right" } }, "C25": { v: "m" },
      "A26": { v: "Max Fixed BM (M)" }, "B26": { v: "=(B24*POW(B25,2))/2", style: { bold: true, align: "right" } }, "C26": { v: "kN·m" },

      // 5. Shear Force SS
      "A28": { v: "5. SHEAR FORCE - SIMPLY SUPPORTED (UDL)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B28": { v: "", style: { bgColor: "#0f766e" } }, "C28": { v: "", style: { bgColor: "#0f766e" } }, "D28": { v: "", style: { bgColor: "#0f766e" } },
      "A29": { v: "UDL Load (w)" }, "B29": { v: "15", style: { bgColor: "#ccfbf1", align: "right" } }, "C29": { v: "kN/m" },
      "A30": { v: "Span of Beam (L)" }, "B30": { v: "6", style: { bgColor: "#ccfbf1", align: "right" } }, "C30": { v: "m" },
      "A31": { v: "Max Shear Force (V)" }, "B31": { v: "=(B29*B30)/2", style: { bold: true, align: "right" } }, "C31": { v: "kN" },

      // 6. One-Way Slab Thickness
      "A33": { v: "6. ONE-WAY SLAB THICKNESS (MINIMUM)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B33": { v: "", style: { bgColor: "#0f766e" } }, "C33": { v: "", style: { bgColor: "#0f766e" } }, "D33": { v: "", style: { bgColor: "#0f766e" } },
      "A34": { v: "Effective Span (L)" }, "B34": { v: "3000", style: { bgColor: "#ccfbf1", align: "right" } }, "C34": { v: "mm" },
      "A35": { v: "Span/Depth Ratio", style: { italic: true } }, "B35": { v: "20", style: { align: "right" } }, "C35": { v: "(for SS Slab)" },
      "A36": { v: "Min Eff Depth (Dmin)" }, "B36": { v: "=B34/B35", style: { bold: true, align: "right" } }, "C36": { v: "mm" },

      // 7. Two-Way Slab Short Span
      "A38": { v: "7. TWO-WAY SLAB - SHORT SPAN MOMENT", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B38": { v: "", style: { bgColor: "#0f766e" } }, "C38": { v: "", style: { bgColor: "#0f766e" } }, "D38": { v: "", style: { bgColor: "#0f766e" } },
      "A39": { v: "BM coeff (ax)" }, "B39": { v: "0.084", style: { bgColor: "#ccfbf1", align: "right" } }, "C39": { v: "(from code table)" },
      "A40": { v: "Total Load (w)" }, "B40": { v: "10", style: { bgColor: "#ccfbf1", align: "right" } }, "C40": { v: "kN/m²" },
      "A41": { v: "Short Span (Lx)" }, "B41": { v: "3.5", style: { bgColor: "#ccfbf1", align: "right" } }, "C41": { v: "m" },
      "A42": { v: "Bending Moment (Mx)" }, "B42": { v: "=B39*B40*POW(B41,2)", style: { bold: true, align: "right" } }, "C42": { v: "kN·m/m" },

      // 8. Two-Way Slab Long Span
      "A44": { v: "8. TWO-WAY SLAB - LONG SPAN MOMENT", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B44": { v: "", style: { bgColor: "#0f766e" } }, "C44": { v: "", style: { bgColor: "#0f766e" } }, "D44": { v: "", style: { bgColor: "#0f766e" } },
      "A45": { v: "BM coeff (ay)" }, "B45": { v: "0.056", style: { bgColor: "#ccfbf1", align: "right" } }, "C45": { v: "(from code table)" },
      "A46": { v: "Total Load (w)" }, "B46": { v: "10", style: { bgColor: "#ccfbf1", align: "right" } }, "C46": { v: "kN/m²" },
      "A47": { v: "Short Span (Lx)" }, "B47": { v: "3.5", style: { bgColor: "#ccfbf1", align: "right" } }, "C47": { v: "m" },
      "A48": { v: "Bending Moment (My)" }, "B48": { v: "=B45*B46*POW(B47,2)", style: { bold: true, align: "right" } }, "C48": { v: "kN·m/m" },

      // 9. T-Beam Effective Width
      "A50": { v: "9. FLANGED BEAM (T-BEAM) EFFECTIVE WIDTH", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B50": { v: "", style: { bgColor: "#0f766e" } }, "C50": { v: "", style: { bgColor: "#0f766e" } }, "D50": { v: "", style: { bgColor: "#0f766e" } },
      "A51": { v: "Zero-Moment Dist (L0)" }, "B51": { v: "4200", style: { bgColor: "#ccfbf1", align: "right" } }, "C51": { v: "mm" },
      "A52": { v: "Web Width (bw)" }, "B52": { v: "250", style: { bgColor: "#ccfbf1", align: "right" } }, "C52": { v: "mm" },
      "A53": { v: "Flange Thickness (Df)" }, "B53": { v: "120", style: { bgColor: "#ccfbf1", align: "right" } }, "C53": { v: "mm" },
      "A54": { v: "Effective Width (bf)" }, "B54": { v: "=B51/6+B52+6*B53", style: { bold: true, align: "right" } }, "C54": { v: "mm" },

      // 10. Deflection Check
      "A57": { v: "10. DEFLECTION CHECK (L/D RATIO)", style: { bold: true, bgColor: "#0f766e", color: "#ffffff" } },
      "B57": { v: "", style: { bgColor: "#0f766e" } }, "C57": { v: "", style: { bgColor: "#0f766e" } }, "D57": { v: "", style: { bgColor: "#0f766e" } },
      "A58": { v: "Span/Depth (L/d)" }, "B58": { v: "18.5", style: { bgColor: "#ccfbf1", align: "right" } }, "C58": { v: "actual" },
      "A59": { v: "Factors (k1, k2, k3)" }, "B59": { v: "1.2", style: { bgColor: "#ccfbf1", align: "right" } }, "C59": { v: "0.95" }, "D59": { v: "1.0", style: { bgColor: "#ccfbf1" } },
      "A60": { v: "Max Allowed L/d" }, "B60": { v: "=B59*C59*D59*20", style: { bold: true, align: "right" } }, "C60": { v: "limit" },
      "A61": { v: "Check Status" }, "B61": { v: "=IF(B58<=B60,\"SAFE\",\"REDESIGN\")", style: { bold: true, align: "center", color: "#047857" } }
    }
  },
  {
    id: "sheet-3",
    name: "Column & Footing",
    description: "Column Sizing & Foundation Footing Formulas (Part 3)",
    sections: [
      { id: "s3-1", name: "Load Carrying Capacity of Column", startRow: 4, endRow: 9, formula: "Pu = 0.4*fck*Ac + 0.67*fy*As" },
      { id: "s3-2", name: "Minimum Eccentricity in Column", startRow: 11, endRow: 15, formula: "emin = L/500 + D/30 >= 20mm" },
      { id: "s3-3", name: "Slenderness Ratio of Column", startRow: 17, endRow: 20, formula: "lambda = Leff / r" },
      { id: "s3-4", name: "Effective Length of Column", startRow: 22, endRow: 25, formula: "Leff = k * L" },
      { id: "s3-5", name: "Lateral Tie Spacing", startRow: 27, endRow: 31, formula: "sv <= min(300, 16*phi, b)" },
      { id: "s3-6", name: "Area of Steel in Column", startRow: 33, endRow: 36, formula: "As = p * Ag" },
      { id: "s3-7", name: "Safe Load on Isolated Footing", startRow: 38, endRow: 42, formula: "qs = P / A <= qallow" },
      { id: "s3-8", name: "Bending Moment in Footing", startRow: 44, endRow: 47, formula: "M = qs * L^2 / 2" },
      { id: "s3-9", name: "Punching Shear Stress in Footing", startRow: 49, endRow: 53, formula: "tp = Vu / (b0 * d)" },
      { id: "s3-10", name: "Depth of Footing (Minimum)", startRow: 55, endRow: 59, formula: "d = sqrt(M / (R * b))" }
    ],
    defaultCells: {
      "A2": { v: "COLUMN & FOOTING DESIGN FORMULAS", style: { bold: true, fontSize: 16, color: "#b45309" } },
      "A3": { v: "Substructure & Column Design Calculator", style: { italic: true, fontSize: 11, color: "#475569" } },

      // 1. Column Capacity
      "A4": { v: "1. LOAD CARRYING CAPACITY OF COLUMN", style: { bold: true, bgColor: "#92400e", color: "#ffffff" } },
      "B4": { v: "", style: { bgColor: "#92400e" } }, "C4": { v: "", style: { bgColor: "#92400e" } }, "D4": { v: "", style: { bgColor: "#92400e" } },
      "A5": { v: "Compressive Strength (fck)" }, "B5": { v: "25", style: { bgColor: "#fef3c7", align: "right" } }, "C5": { v: "N/mm²" },
      "A6": { v: "Yield Strength (fy)" }, "B6": { v: "415", style: { bgColor: "#fef3c7", align: "right" } }, "C6": { v: "N/mm²" },
      "A7": { v: "Concrete Area (Ac)" }, "B7": { v: "88800", style: { bgColor: "#fef3c7", align: "right" } }, "C7": { v: "mm²" },
      "A8": { v: "Steel Area (As)" }, "B8": { v: "1200", style: { bgColor: "#fef3c7", align: "right" } }, "C8": { v: "mm²" },
      "A9": { v: "Axial Load Capacity (Pu)" }, "B9": { v: "=0.4*B5*B7+0.67*B6*B8", style: { bold: true, align: "right" } }, "C9": { v: "N" },

      // 2. Minimum Eccentricity
      "A11": { v: "2. MINIMUM ECCENTRICITY IN COLUMN", style: { bold: true, bgColor: "#92400e", color: "#ffffff" } },
      "B11": { v: "", style: { bgColor: "#92400e" } }, "C11": { v: "", style: { bgColor: "#92400e" } }, "D11": { v: "", style: { bgColor: "#92400e" } },
      "A12": { v: "Unsupported Length (L)" }, "B12": { v: "3000", style: { bgColor: "#fef3c7", align: "right" } }, "C12": { v: "mm" },
      "A13": { v: "Lateral Dimension (D)" }, "B13": { v: "300", style: { bgColor: "#fef3c7", align: "right" } }, "C13": { v: "mm" },
      "A14": { v: "Calculated emin" }, "B14": { v: "=B12/500+B13/30", style: { align: "right" } }, "C14": { v: "mm" },
      "A15": { v: "Design Eccentricity (emin)" }, "B15": { v: "=MAX(B14, 20)", style: { bold: true, align: "right" } }, "C15": { v: "mm" },

      // 3. Slenderness Ratio
      "A17": { v: "3. SLENDERNESS RATIO OF COLUMN", style: { bold: true, bgColor: "#92400e", color: "#ffffff" } },
      "B17": { v: "", style: { bgColor: "#92400e" } }, "C17": { v: "", style: { bgColor: "#92400e" } }, "D17": { v: "", style: { bgColor: "#92400e" } },
      "A18": { v: "Effective Length (Leff)" }, "B18": { v: "1950", style: { bgColor: "#fef3c7", align: "right" } }, "C18": { v: "mm" },
      "A19": { v: "Radius of Gyration (r)" }, "B19": { v: "86.6", style: { bgColor: "#fef3c7", align: "right" } }, "C19": { v: "mm" },
      "A20": { v: "Slenderness (\u03BB)" }, "B20": { v: "=B18/B19", style: { bold: true, align: "right" } }, "C20": { v: "(ratio)" },

      // 4. Effective Length
      "A22": { v: "4. EFFECTIVE LENGTH OF COLUMN", style: { bold: true, bgColor: "#92400e", color: "#ffffff" } },
      "B22": { v: "", style: { bgColor: "#92400e" } }, "C22": { v: "", style: { bgColor: "#92400e" } }, "D22": { v: "", style: { bgColor: "#92400e" } },
      "A23": { v: "Unsupported Length (L)" }, "B23": { v: "3000", style: { bgColor: "#fef3c7", align: "right" } }, "C23": { v: "mm" },
      "A24": { v: "Effective Factor (k)" }, "B24": { v: "0.65", style: { bgColor: "#fef3c7", align: "right" } }, "C24": { v: "(fixed-fixed = 0.65)" },
      "A25": { v: "Effective Length (Leff)" }, "B25": { v: "=B24*B23", style: { bold: true, align: "right" } }, "C25": { v: "mm" },

      // 5. Lateral Tie Spacing
      "A27": { v: "5. LATERAL TIE SPACING", style: { bold: true, bgColor: "#92400e", color: "#ffffff" } },
      "B27": { v: "", style: { bgColor: "#92400e" } }, "C27": { v: "", style: { bgColor: "#92400e" } }, "D27": { v: "", style: { bgColor: "#92400e" } },
      "A28": { v: "Main Bar Diameter (\u03C6)" }, "B28": { v: "20", style: { bgColor: "#fef3c7", align: "right" } }, "C28": { v: "mm" },
      "A29": { v: "Least Lat Dimension (b)" }, "B29": { v: "300", style: { bgColor: "#fef3c7", align: "right" } }, "C29": { v: "mm" },
      "A30": { v: "Spacing Limit (16\u03C6)" }, "B30": { v: "=16*B28", style: { align: "right" } }, "C30": { v: "mm" },
      "A31": { v: "Spacing (sv)" }, "B31": { v: "=MIN(300, B30, B29)", style: { bold: true, align: "right" } }, "C31": { v: "mm" },

      // 6. Area of Steel
      "A33": { v: "6. AREA OF STEEL IN COLUMN", style: { bold: true, bgColor: "#92400e", color: "#ffffff" } },
      "B33": { v: "", style: { bgColor: "#92400e" } }, "C33": { v: "", style: { bgColor: "#92400e" } }, "D33": { v: "", style: { bgColor: "#92400e" } },
      "A34": { v: "Steel Ratio (\u03C1)" }, "B34": { v: "0.015", style: { bgColor: "#fef3c7", align: "right" } }, "C34": { v: "(0.8% to 6%)" },
      "A35": { v: "Gross Area (Ag)" }, "B35": { v: "90000", style: { bgColor: "#fef3c7", align: "right" } }, "C35": { v: "mm²" },
      "A36": { v: "Steel Area Required (As)" }, "B36": { v: "=B34*B35", style: { bold: true, align: "right" } }, "C36": { v: "mm²" },

      // 7. Safe Load on Isolated Footing
      "A38": { v: "7. SAFE LOAD ON ISOLATED FOOTING", style: { bold: true, bgColor: "#92400e", color: "#ffffff" } },
      "B38": { v: "", style: { bgColor: "#92400e" } }, "C38": { v: "", style: { bgColor: "#92400e" } }, "D38": { v: "", style: { bgColor: "#92400e" } },
      "A39": { v: "Column Load (P)" }, "B39": { v: "450", style: { bgColor: "#fef3c7", align: "right" } }, "C39": { v: "kN" },
      "A40": { v: "Area of Footing (A)" }, "B40": { v: "4", style: { bgColor: "#fef3c7", align: "right" } }, "C40": { v: "m²" },
      "A41": { v: "Soil Pressure (qs)" }, "B41": { v: "=B39/B40", style: { bold: true, align: "right" } }, "C41": { v: "kN/m²" },
      "A42": { v: "Bearing Check" }, "B42": { v: "150", style: { bgColor: "#fef3c7", align: "right" } }, "C42": { v: "kN/m² (allow)", style: { italic: true } },

      // 8. Bending Moment in Footing
      "A44": { v: "8. BENDING MOMENT IN FOOTING", style: { bold: true, bgColor: "#92400e", color: "#ffffff" } },
      "B44": { v: "", style: { bgColor: "#92400e" } }, "C44": { v: "", style: { bgColor: "#92400e" } }, "D44": { v: "", style: { bgColor: "#92400e" } },
      "A45": { v: "Soil Pressure (qs)" }, "B45": { v: "=B41", style: { align: "right" } }, "C45": { v: "kN/m²" },
      "A46": { v: "Projection (L)" }, "B46": { v: "0.85", style: { bgColor: "#fef3c7", align: "right" } }, "C46": { v: "m" },
      "A47": { v: "Bending Moment (M)" }, "B47": { v: "=(B45*POW(B46,2))/2", style: { bold: true, align: "right" } }, "C47": { v: "kN·m" },

      // 9. Punching Shear
      "A49": { v: "9. PUNCHING SHEAR STRESS IN FOOTING", style: { bold: true, bgColor: "#92400e", color: "#ffffff" } },
      "B49": { v: "", style: { bgColor: "#92400e" } }, "C49": { v: "", style: { bgColor: "#92400e" } }, "D49": { v: "", style: { bgColor: "#92400e" } },
      "A50": { v: "Punching Shear Force (Vu)" }, "B50": { v: "320000", style: { bgColor: "#fef3c7", align: "right" } }, "C50": { v: "N" },
      "A51": { v: "Critical Perimeter (b0)" }, "B51": { v: "2400", style: { bgColor: "#fef3c7", align: "right" } }, "C51": { v: "mm" },
      "A52": { v: "Effective Depth (d)" }, "B52": { v: "350", style: { bgColor: "#fef3c7", align: "right" } }, "C52": { v: "mm" },
      "A53": { v: "Punching Stress (\u03C4p)" }, "B53": { v: "=B50/(B51*B52)", style: { bold: true, align: "right" } }, "C53": { v: "N/mm²" },

      // 10. Depth of Footing
      "A55": { v: "10. DEPTH OF FOOTING (MINIMUM)", style: { bold: true, bgColor: "#92400e", color: "#ffffff" } },
      "B55": { v: "", style: { bgColor: "#92400e" } }, "C55": { v: "", style: { bgColor: "#92400e" } }, "D55": { v: "", style: { bgColor: "#92400e" } },
      "A56": { v: "Bending Moment (M)" }, "B56": { v: "36000000", style: { bgColor: "#fef3c7", align: "right" } }, "C56": { v: "N·mm" },
      "A57": { v: "Resistance Factor (R)" }, "B57": { v: "3.14", style: { bgColor: "#fef3c7", align: "right" } }, "C57": { v: "N/mm²" },
      "A58": { v: "Width of Footing (b)" }, "B58": { v: "1000", style: { bgColor: "#fef3c7", align: "right" } }, "C58": { v: "mm" },
      "A59": { v: "Min Eff Depth (d)" }, "B59": { v: "=SQRT(B56/(B57*B58))", style: { bold: true, align: "right" } }, "C59": { v: "mm" }
    }
  },
  {
    id: "sheet-4",
    name: "Soil Mechanics",
    description: "Soil Mechanics & Foundation Design (Part 4)",
    sections: [
      { id: "s4-1", name: "Void Ratio", startRow: 4, endRow: 7, formula: "e = Vv / Vs" },
      { id: "s4-2", name: "Porosity", startRow: 9, endRow: 12, formula: "n = Vv / V = e / (1 + e)" },
      { id: "s4-3", name: "Degree of Saturation", startRow: 14, endRow: 17, formula: "S = (Vw / Vv) * 100%" },
      { id: "s4-4", name: "Dry Density", startRow: 19, endRow: 22, formula: "yd = y / (1 + w)" },
      { id: "s4-5", name: "Darcy's Law (Seepage)", startRow: 24, endRow: 28, formula: "q = k * i * A" },
      { id: "s4-6", name: "Terzaghi's Bearing Capacity", startRow: 30, endRow: 37, formula: "qu = c*Nc + q*Nq + 0.5*y*B*Ny" },
      { id: "s4-7", name: "Safe Bearing Capacity", startRow: 39, endRow: 42, formula: "qsafe = qu / FOS" },
      { id: "s4-8", name: "Consolidation Settlement", startRow: 44, endRow: 49, formula: "S = (Cc / (1 + e0)) * H * log((s0 + ds)/s0)" },
      { id: "s4-9", name: "Shear Strength (Mohr-Coulomb)", startRow: 51, endRow: 55, formula: "t = c + o * tan(o)" },
      { id: "s4-10", name: "Active Earth Pressure (Rankine)", startRow: 57, endRow: 61, formula: "Pa = 0.5 * y * H^2 * Ka" }
    ],
    defaultCells: {
      "A2": { v: "SOIL MECHANICS & FOUNDATION FORMULAS", style: { bold: true, fontSize: 16, color: "#16a34a" } },
      "A3": { v: "Geotechnical Engineering Core Calculators", style: { italic: true, fontSize: 11, color: "#475569" } },

      // 1. Void Ratio
      "A4": { v: "1. VOID RATIO", style: { bold: true, bgColor: "#15803d", color: "#ffffff" } },
      "B4": { v: "", style: { bgColor: "#15803d" } }, "C4": { v: "", style: { bgColor: "#15803d" } }, "D4": { v: "", style: { bgColor: "#15803d" } },
      "A5": { v: "Volume of Voids (Vv)" }, "B5": { v: "0.35", style: { bgColor: "#dcfce7", align: "right" } }, "C5": { v: "m³" },
      "A6": { v: "Volume of Solids (Vs)" }, "B6": { v: "0.65", style: { bgColor: "#dcfce7", align: "right" } }, "C6": { v: "m³" },
      "A7": { v: "Void Ratio (e)" }, "B7": { v: "=B5/B6", style: { bold: true, align: "right" } }, "C7": { v: "(ratio)" },

      // 2. Porosity
      "A9": { v: "2. POROSITY", style: { bold: true, bgColor: "#15803d", color: "#ffffff" } },
      "B9": { v: "", style: { bgColor: "#15803d" } }, "C9": { v: "", style: { bgColor: "#15803d" } }, "D9": { v: "", style: { bgColor: "#15803d" } },
      "A10": { v: "Void Ratio (e)" }, "B10": { v: "=B7", style: { align: "right" } }, "C10": { v: "(ratio)" },
      "A11": { v: "Porosity (n)" }, "B11": { v: "=B10/(1+B10)", style: { bold: true, align: "right" } }, "C11": { v: "(ratio)" },
      "A12": { v: "Porosity Percentage" }, "B12": { v: "=B11*100", style: { bold: true, align: "right" } }, "C12": { v: "%" },

      // 3. Degree of Saturation
      "A14": { v: "3. DEGREE OF SATURATION", style: { bold: true, bgColor: "#15803d", color: "#ffffff" } },
      "B14": { v: "", style: { bgColor: "#15803d" } }, "C14": { v: "", style: { bgColor: "#15803d" } }, "D14": { v: "", style: { bgColor: "#15803d" } },
      "A15": { v: "Volume of Water (Vw)" }, "B15": { v: "0.15", style: { bgColor: "#dcfce7", align: "right" } }, "C15": { v: "m³" },
      "A16": { v: "Volume of Voids (Vv)" }, "B16": { v: "=B5", style: { align: "right" } }, "C16": { v: "m³" },
      "A17": { v: "Degree of Saturation (S)" }, "B17": { v: "=(B15/B16)*100", style: { bold: true, align: "right" } }, "C17": { v: "%" },

      // 4. Dry Density
      "A19": { v: "4. DRY DENSITY", style: { bold: true, bgColor: "#15803d", color: "#ffffff" } },
      "B19": { v: "", style: { bgColor: "#15803d" } }, "C19": { v: "", style: { bgColor: "#15803d" } }, "D19": { v: "", style: { bgColor: "#15803d" } },
      "A20": { v: "Bulk Unit Weight (\u03B3)" }, "B20": { v: "18.5", style: { bgColor: "#dcfce7", align: "right" } }, "C20": { v: "kN/m³" },
      "A21": { v: "Water Content (w)" }, "B21": { v: "0.12", style: { bgColor: "#dcfce7", align: "right" } }, "C21": { v: "(decimal ratio)" },
      "A22": { v: "Dry Density (\u03B3d)" }, "B22": { v: "=B20/(1+B21)", style: { bold: true, align: "right" } }, "C22": { v: "kN/m³" },

      // 5. Darcy's Law
      "A24": { v: "5. DARCY'S LAW (SEEPAGE)", style: { bold: true, bgColor: "#15803d", color: "#ffffff" } },
      "B24": { v: "", style: { bgColor: "#15803d" } }, "C24": { v: "", style: { bgColor: "#15803d" } }, "D24": { v: "", style: { bgColor: "#15803d" } },
      "A25": { v: "Coeff of Permeability (k)" }, "B25": { v: "0.00015", style: { bgColor: "#dcfce7", align: "right" } }, "C25": { v: "m/s" },
      "A26": { v: "Hydraulic Gradient (i)" }, "B26": { v: "0.04", style: { bgColor: "#dcfce7", align: "right" } }, "C26": { v: "(ratio)" },
      "A27": { v: "Cross-sectional Area (A)" }, "B27": { v: "2.5", style: { bgColor: "#dcfce7", align: "right" } }, "C27": { v: "m²" },
      "A28": { v: "Seepage Flow Rate (q)" }, "B28": { v: "=B25*B26*B27", style: { bold: true, align: "right" } }, "C28": { v: "m³/s" },

      // 6. Terzaghi's Bearing
      "A30": { v: "6. TERZAGHI'S BEARING CAPACITY", style: { bold: true, bgColor: "#15803d", color: "#ffffff" } },
      "B30": { v: "", style: { bgColor: "#15803d" } }, "C30": { v: "", style: { bgColor: "#15803d" } }, "D30": { v: "", style: { bgColor: "#15803d" } },
      "A31": { v: "Cohesion (c)" }, "B31": { v: "15", style: { bgColor: "#dcfce7", align: "right" } }, "C31": { v: "kN/m²" },
      "A32": { v: "Factors (Nc, Nq, N\u03B3)" }, "B32": { v: "17.7", style: { bgColor: "#dcfce7", align: "right" } }, "C32": { v: "7.4" }, "D32": { v: "5.0", style: { bgColor: "#dcfce7" } },
      "A33": { v: "Surcharge Pressure (q)" }, "B33": { v: "18", style: { bgColor: "#dcfce7", align: "right" } }, "C33": { v: "kN/m²" },
      "A34": { v: "Unit Weight of Soil (\u03B3)" }, "B34": { v: "18", style: { bgColor: "#dcfce7", align: "right" } }, "C34": { v: "kN/m³" },
      "A35": { v: "Width of Footing (B)" }, "B35": { v: "1.5", style: { bgColor: "#dcfce7", align: "right" } }, "C35": { v: "m" },
      "A36": { v: "Ult Bearing Capacity (qu)" }, "B36": { v: "=B31*B32 + B33*C32 + 0.5*B34*B35*D32", style: { bold: true, align: "right" } }, "C36": { v: "kN/m²" },

      // 7. Safe Bearing
      "A39": { v: "7. SAFE BEARING CAPACITY", style: { bold: true, bgColor: "#15803d", color: "#ffffff" } },
      "B39": { v: "", style: { bgColor: "#15803d" } }, "C39": { v: "", style: { bgColor: "#15803d" } }, "D39": { v: "", style: { bgColor: "#15803d" } },
      "A40": { v: "Ult Capacity (qu)" }, "B40": { v: "=B36", style: { align: "right" } }, "C40": { v: "kN/m²" },
      "A41": { v: "Factor of Safety (FOS)" }, "B41": { v: "3", style: { bgColor: "#dcfce7", align: "right" } }, "C41": { v: "(typically 2.5 to 3)" },
      "A42": { v: "Safe Capacity (qsafe)" }, "B42": { v: "=B40/B41", style: { bold: true, align: "right" } }, "C42": { v: "kN/m²" },

      // 8. Settlement
      "A44": { v: "8. CONSOLIDATION SETTLEMENT", style: { bold: true, bgColor: "#15803d", color: "#ffffff" } },
      "B44": { v: "", style: { bgColor: "#15803d" } }, "C44": { v: "", style: { bgColor: "#15803d" } }, "D44": { v: "", style: { bgColor: "#15803d" } },
      "A45": { v: "Compression Index (Cc)" }, "B45": { v: "0.25", style: { bgColor: "#dcfce7", align: "right" } }, "C45": { v: "Initial Void (e0)" }, "D45": { v: "0.85", style: { bgColor: "#dcfce7" } },
      "A46": { v: "Clay Layer Thick (H)" }, "B46": { v: "4000", style: { bgColor: "#dcfce7", align: "right" } }, "C46": { v: "mm" },
      "A47": { v: "Initial Stress (\u03C30)" }, "B47": { v: "100", style: { bgColor: "#dcfce7", align: "right" } }, "C47": { v: "Stress Increase (d\u03C3)" }, "D47": { v: "50", style: { bgColor: "#dcfce7" } },
      "A48": { v: "Settlement (S)" }, "B48": { v: "=(B45/(1+D45))*B46*LOG((B47+D47)/B47)", style: { bold: true, align: "right" } }, "C48": { v: "mm" },

      // 9. Shear Strength
      "A51": { v: "9. SHEAR STRENGTH (MOHR-COULOMB)", style: { bold: true, bgColor: "#15803d", color: "#ffffff" } },
      "B51": { v: "", style: { bgColor: "#15803d" } }, "C51": { v: "", style: { bgColor: "#15803d" } }, "D51": { v: "", style: { bgColor: "#15803d" } },
      "A52": { v: "Cohesion (c)" }, "B52": { v: "10", style: { bgColor: "#dcfce7", align: "right" } }, "C52": { v: "kN/m²" },
      "A53": { v: "Normal Stress (\u03C3)" }, "B53": { v: "120", style: { bgColor: "#dcfce7", align: "right" } }, "C53": { v: "kN/m²" },
      "A54": { v: "Friction Angle (\u03C6)" }, "B54": { v: "28", style: { bgColor: "#dcfce7", align: "right" } }, "C54": { v: "degrees" },
      "A55": { v: "Shear Strength (\u03C4)" }, "B55": { v: "=B52 + B53*TAN(B54*PI()/180)", style: { bold: true, align: "right" } }, "C55": { v: "kN/m²" },

      // 10. Earth Pressure
      "A57": { v: "10. ACTIVE EARTH PRESSURE (RANKINE)", style: { bold: true, bgColor: "#15803d", color: "#ffffff" } },
      "B57": { v: "", style: { bgColor: "#15803d" } }, "C57": { v: "", style: { bgColor: "#15803d" } }, "D57": { v: "", style: { bgColor: "#15803d" } },
      "A58": { v: "Soil Weight (\u03B3)" }, "B58": { v: "18", style: { bgColor: "#dcfce7", align: "right" } }, "C58": { v: "kN/m³" },
      "A59": { v: "Wall Height (H)" }, "B59": { v: "5", style: { bgColor: "#dcfce7", align: "right" } }, "C59": { v: "m" },
      "A60": { v: "Friction Angle (\u03C6)" }, "B60": { v: "30", style: { bgColor: "#dcfce7", align: "right" } }, "C60": { v: "degrees" },
      "A61": { v: "Active Coeff (Ka)" }, "B61": { v: "=POW(TAN((45-B60/2)*PI()/180),2)", style: { bold: true, align: "right" } }, "C61": { v: "(ratio)" },
      "A62": { v: "Total Force (Pa)" }, "B62": { v: "=0.5*B58*POW(B59,2)*B61", style: { bold: true, align: "right" } }, "C62": { v: "kN/m" }
    }
  },
  {
    id: "sheet-5",
    name: "Structural Analysis",
    description: "Structural Analysis & Section Properties (Part 5)",
    sections: [
      { id: "s5-1", name: "Reaction at Support - Simply Supported", startRow: 4, endRow: 8, formula: "RA = W*b/L, RB = W*a/L" },
      { id: "s5-2", name: "Maximum BM - Simply Supported (Point Load)", startRow: 10, endRow: 14, formula: "Mmax = W*a*b / L" },
      { id: "s5-3", name: "Maximum BM - Fixed Beam (UDL)", startRow: 16, endRow: 20, formula: "Mend = wL^2/12, Mmid = wL^2/24" },
      { id: "s5-4", name: "Slope at Free End - Cantilever (Point)", startRow: 22, endRow: 27, formula: "theta = WL^2 / 2EI" },
      { id: "s5-5", name: "Deflection - Cantilever (Point Load)", startRow: 29, endRow: 34, formula: "dmax = WL^3 / 3EI" },
      { id: "s5-6", name: "Deflection - Simply Supported (Point Load)", startRow: 36, endRow: 41, formula: "dmax = WL^3 / 48EI" },
      { id: "s5-7", name: "Moment of Inertia - Rectangular Section", startRow: 43, endRow: 47, formula: "I = bd^3 / 12" },
      { id: "s5-8", name: "Section Modulus", startRow: 49, endRow: 53, formula: "Z = bd^2 / 6" },
      { id: "s5-9", name: "Stiffness of Beam", startRow: 55, endRow: 60, formula: "K = 4EI / L" },
      { id: "s5-10", name: "Carry Over & Distribution Factor", startRow: 62, endRow: 67, formula: "DF = K / sum(K)" }
    ],
    defaultCells: {
      "A2": { v: "STRUCTURAL ANALYSIS FORMULAS", style: { bold: true, fontSize: 16, color: "#6d28d9" } },
      "A3": { v: "Beams Mechanics and Section Properties Calculations", style: { italic: true, fontSize: 11, color: "#475569" } },

      // 1. Support Reactions
      "A4": { v: "1. REACTION AT SUPPORT - SS (POINT LOAD)", style: { bold: true, bgColor: "#5b21b6", color: "#ffffff" } },
      "B4": { v: "", style: { bgColor: "#5b21b6" } }, "C4": { v: "", style: { bgColor: "#5b21b6" } }, "D4": { v: "", style: { bgColor: "#5b21b6" } },
      "A5": { v: "Point Load (W)" }, "B5": { v: "50", style: { bgColor: "#ede9fe", align: "right" } }, "C5": { v: "kN" },
      "A6": { v: "Distances (a, b)" }, "B6": { v: "2", style: { bgColor: "#ede9fe", align: "right" } }, "C6": { v: "4" }, "D6": { v: "m", style: { bgColor: "#ede9fe" } },
      "A7": { v: "Total Span (L)" }, "B7": { v: "=B6+C6", style: { align: "right" } }, "C7": { v: "m" },
      "A8": { v: "Reactions (RA, RB)" }, "B8": { v: "=(B5*C6)/B7", style: { bold: true, align: "right" } }, "C8": { v: "=(B5*B6)/B7" }, "D8": { v: "kN", style: { bold: true } },

      // 2. Max BM SS
      "A10": { v: "2. MAXIMUM BM - SIMPLY SUPPORTED (POINT LOAD)", style: { bold: true, bgColor: "#5b21b6", color: "#ffffff" } },
      "B10": { v: "", style: { bgColor: "#5b21b6" } }, "C10": { v: "", style: { bgColor: "#5b21b6" } }, "D10": { v: "", style: { bgColor: "#5b21b6" } },
      "A11": { v: "Point Load (W)" }, "B11": { v: "=B5", style: { align: "right" } }, "C11": { v: "kN" },
      "A12": { v: "Distances (a, b)" }, "B12": { v: "=B6", style: { align: "right" } }, "C12": { v: "=C6", style: { align: "right" } },
      "A13": { v: "Total Span (L)" }, "B13": { v: "=B7", style: { align: "right" } }, "C13": { v: "m" },
      "A14": { v: "Max Bending Moment (M)" }, "B14": { v: "=(B11*B12*C12)/B13", style: { bold: true, align: "right" } }, "C14": { v: "kN·m" },

      // 3. BM Fixed UDL
      "A16": { v: "3. MAXIMUM BM - FIXED BEAM (UDL)", style: { bold: true, bgColor: "#5b21b6", color: "#ffffff" } },
      "B16": { v: "", style: { bgColor: "#5b21b6" } }, "C16": { v: "", style: { bgColor: "#5b21b6" } }, "D16": { v: "", style: { bgColor: "#5b21b6" } },
      "A17": { v: "UDL Load (w)" }, "B17": { v: "20", style: { bgColor: "#ede9fe", align: "right" } }, "C17": { v: "kN/m" },
      "A18": { v: "Span of Beam (L)" }, "B18": { v: "6", style: { bgColor: "#ede9fe", align: "right" } }, "C18": { v: "m" },
      "A19": { v: "Support Moment (Mend)" }, "B19": { v: "=(B17*POW(B18,2))/12", style: { bold: true, align: "right" } }, "C19": { v: "kN·m" },
      "A20": { v: "Midspan Moment (Mmid)" }, "B20": { v: "=(B17*POW(B18,2))/24", style: { bold: true, align: "right" } }, "C20": { v: "kN·m" },

      // 4. Slope Cantilever
      "A22": { v: "4. SLOPE AT FREE END - CANTILEVER (POINT)", style: { bold: true, bgColor: "#5b21b6", color: "#ffffff" } },
      "B22": { v: "", style: { bgColor: "#5b21b6" } }, "C22": { v: "", style: { bgColor: "#5b21b6" } }, "D22": { v: "", style: { bgColor: "#5b21b6" } },
      "A23": { v: "Point Load (W)" }, "B23": { v: "15000", style: { bgColor: "#ede9fe", align: "right" } }, "C23": { v: "N" },
      "A24": { v: "Length of Beam (L)" }, "B24": { v: "3000", style: { bgColor: "#ede9fe", align: "right" } }, "C24": { v: "mm" },
      "A25": { v: "Modulus (E)" }, "B25": { v: "200000", style: { bgColor: "#ede9fe", align: "right" } }, "C25": { v: "N/mm²" },
      "A26": { v: "Inertia (I)" }, "B26": { v: "45000000", style: { bgColor: "#ede9fe", align: "right" } }, "C26": { v: "mm⁴" },
      "A27": { v: "Slope (\u03B8 in rad)" }, "B27": { v: "=(B23*POW(B24,2))/(2*B25*B26)", style: { bold: true, align: "right" } }, "C27": { v: "radians" },

      // 5. Deflection Cantilever
      "A29": { v: "5. DEFLECTION - CANTILEVER (POINT LOAD)", style: { bold: true, bgColor: "#5b21b6", color: "#ffffff" } },
      "B29": { v: "", style: { bgColor: "#5b21b6" } }, "C29": { v: "", style: { bgColor: "#5b21b6" } }, "D29": { v: "", style: { bgColor: "#5b21b6" } },
      "A30": { v: "Point Load (W)" }, "B30": { v: "=B23", style: { align: "right" } }, "C30": { v: "N" },
      "A31": { v: "Length of Beam (L)" }, "B31": { v: "=B24", style: { align: "right" } }, "C31": { v: "mm" },
      "A32": { v: "Modulus (E)" }, "B32": { v: "=B25", style: { align: "right" } }, "C32": { v: "N/mm²" },
      "A33": { v: "Inertia (I)" }, "B33": { v: "=B26", style: { align: "right" } }, "C33": { v: "mm⁴" },
      "A34": { v: "Max Deflection (\u03B4max)" }, "B34": { v: "=(B30*POW(B31,3))/(3*B32*B33)", style: { bold: true, align: "right" } }, "C34": { v: "mm" },

      // 6. Deflection Simply Supported
      "A36": { v: "6. DEFLECTION - SS (CENTRAL POINT LOAD)", style: { bold: true, bgColor: "#5b21b6", color: "#ffffff" } },
      "B36": { v: "", style: { bgColor: "#5b21b6" } }, "C36": { v: "", style: { bgColor: "#5b21b6" } }, "D36": { v: "", style: { bgColor: "#5b21b6" } },
      "A37": { v: "Point Load (W)" }, "B37": { v: "25000", style: { bgColor: "#ede9fe", align: "right" } }, "C37": { v: "N" },
      "A38": { v: "Length of Beam (L)" }, "B38": { v: "5000", style: { bgColor: "#ede9fe", align: "right" } }, "C38": { v: "mm" },
      "A39": { v: "Modulus (E)" }, "B39": { v: "200000", style: { bgColor: "#ede9fe", align: "right" } }, "C39": { v: "N/mm²" },
      "A40": { v: "Inertia (I)" }, "B40": { v: "120000000", style: { bgColor: "#ede9fe", align: "right" } }, "C40": { v: "mm⁴" },
      "A41": { v: "Max Deflection (\u03B4max)" }, "B41": { v: "=(B37*POW(B38,3))/(48*B39*B40)", style: { bold: true, align: "right" } }, "C41": { v: "mm" },

      // 7. Moment of Inertia Rectangular
      "A43": { v: "7. MOMENT OF INERTIA - RECTANGULAR SECTION", style: { bold: true, bgColor: "#5b21b6", color: "#ffffff" } },
      "B43": { v: "", style: { bgColor: "#5b21b6" } }, "C43": { v: "", style: { bgColor: "#5b21b6" } }, "D43": { v: "", style: { bgColor: "#5b21b6" } },
      "A44": { v: "Width (b)" }, "B44": { v: "200", style: { bgColor: "#ede9fe", align: "right" } }, "C44": { v: "mm" },
      "A45": { v: "Depth (d)" }, "B45": { v: "400", style: { bgColor: "#ede9fe", align: "right" } }, "C45": { v: "mm" },
      "A46": { v: "Moment of Inertia (I)" }, "B46": { v: "=(B44*POW(B45,3))/12", style: { bold: true, align: "right" } }, "C46": { v: "mm⁴" },

      // 8. Section Modulus
      "A49": { v: "8. SECTION MODULUS", style: { bold: true, bgColor: "#5b21b6", color: "#ffffff" } },
      "B49": { v: "", style: { bgColor: "#5b21b6" } }, "C49": { v: "", style: { bgColor: "#5b21b6" } }, "D49": { v: "", style: { bgColor: "#5b21b6" } },
      "A50": { v: "Width (b)" }, "B50": { v: "=B44", style: { align: "right" } }, "C50": { v: "mm" },
      "A51": { v: "Depth (d)" }, "B51": { v: "=B45", style: { align: "right" } }, "C51": { v: "mm" },
      "A52": { v: "Section Modulus (Z)" }, "B52": { v: "=(B50*POW(B51,2))/6", style: { bold: true, align: "right" } }, "C52": { v: "mm³" },

      // 9. Stiffness
      "A55": { v: "9. STIFFNESS OF BEAM", style: { bold: true, bgColor: "#5b21b6", color: "#ffffff" } },
      "B55": { v: "", style: { bgColor: "#5b21b6" } }, "C55": { v: "", style: { bgColor: "#5b21b6" } }, "D55": { v: "", style: { bgColor: "#5b21b6" } },
      "A56": { v: "Modulus (E)" }, "B56": { v: "200000", style: { bgColor: "#ede9fe", align: "right" } }, "C56": { v: "N/mm²" },
      "A57": { v: "Inertia (I)" }, "B57": { v: "80000000", style: { bgColor: "#ede9fe", align: "right" } }, "C57": { v: "mm⁴" },
      "A58": { v: "Length (L)" }, "B58": { v: "4000", style: { bgColor: "#ede9fe", align: "right" } }, "C58": { v: "mm" },
      "A59": { v: "Fixed-Far (K)" }, "B59": { v: "=(4*B56*B57)/B58", style: { bold: true, align: "right" } }, "C59": { v: "N·mm" },
      "A60": { v: "Pinned-Far (K)" }, "B60": { v: "=(3*B56*B57)/B58", style: { bold: true, align: "right" } }, "C60": { v: "N·mm" },

      // 10. Carry Over & DF
      "A62": { v: "10. CARRY OVER FACTOR & DISTRIBUTION FACTOR", style: { bold: true, bgColor: "#5b21b6", color: "#ffffff" } },
      "B62": { v: "", style: { bgColor: "#5b21b6" } }, "C62": { v: "", style: { bgColor: "#5b21b6" } }, "D62": { v: "", style: { bgColor: "#5b21b6" } },
      "A63": { v: "Stiffness 1 (K1)" }, "B63": { v: "4000000", style: { bgColor: "#ede9fe", align: "right" } }, "C63": { v: "N·mm" },
      "A64": { v: "Stiffness 2 (K2)" }, "B64": { v: "6000000", style: { bgColor: "#ede9fe", align: "right" } }, "C64": { v: "N·mm" },
      "A65": { v: "Sum Stiffness" }, "B65": { v: "=B63+B64", style: { align: "right" } }, "C65": { v: "N·mm" },
      "A66": { v: "DF for Member 1" }, "B66": { v: "=B63/B65", style: { bold: true, align: "right" } }, "C66": { v: "(ratio)" },
      "A67": { v: "DF for Member 2" }, "B67": { v: "=B64/B65", style: { bold: true, align: "right" } }, "C67": { v: "(ratio)" }
    }
  }
];

// Vector Illustrations and descriptions for the 50 formulas
window.FORMULA_DIAGRAMS = {
  // Sheet 1
  "s1-1": {
    title: "Volume of Concrete",
    formula: "V = L \\times B \\times D",
    use: "Used for: Calculating total concrete volume in any rectangular member.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <defs>
        <linearGradient id="g-concrete" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94a3b8" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
      </defs>
      <!-- Draw rectangular solid -->
      <polygon points="50,110 180,110 230,70 100,70" fill="url(#g-concrete)" stroke="#334155" stroke-width="2"/>
      <polygon points="180,110 230,70 230,120 180,160" fill="#334155" opacity="0.3" stroke="#334155" stroke-width="2"/>
      <polygon points="50,110 180,110 180,160 50,160" fill="url(#g-concrete)" opacity="0.85" stroke="#334155" stroke-width="2"/>
      <!-- Dimension arrows -->
      <path d="M 50,170 L 180,170" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="115" y="180" fill="#0284c7" font-weight="bold" font-size="12" text-anchor="middle">L (Length)</text>
      
      <path d="M 195,155 L 240,119" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="225" y="145" fill="#0284c7" font-weight="bold" font-size="12" text-anchor="start">B (Breadth)</text>
      
      <path d="M 35,110 L 35,160" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="25" y="140" fill="#0284c7" font-weight="bold" font-size="12" text-anchor="end">D (Depth)</text>
    </svg>`,
    details: "Volume of concrete (V) is measured in cubic meters (m³). It is the base measurement for concrete ordering and construction scheduling."
  },
  "s1-2": {
    title: "Weight of Concrete",
    formula: "W = V \\times \\gamma_c",
    use: "Used for: Estimating dead load of concrete in structural members.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="100" y="80" width="100" height="70" fill="#94a3b8" stroke="#334155" stroke-width="2" rx="3"/>
      <!-- Crane hook and cable -->
      <path d="M 150,10 L 150,80" stroke="#334155" stroke-width="2"/>
      <path d="M 130,80 L 150,55 L 170,80" stroke="#334155" stroke-width="2" fill="none"/>
      <circle cx="150" cy="55" r="4" fill="#0284c7"/>
      <!-- Weight vector arrow -->
      <path d="M 150,115 L 150,165" stroke="#e11d48" stroke-width="3" marker-end="url(#red-arrow)"/>
      <text x="160" y="145" fill="#e11d48" font-weight="bold" font-size="13">W (Weight)</text>
    </svg>`,
    details: "Normal unit weight of reinforced concrete is typically assumed to be 24 kN/m³ or 25 kN/m³. Essential for gravity design load pathways."
  },
  "s1-3": {
    title: "Compressive Stress",
    formula: "\\sigma_c = P / A",
    use: "Used for: Checking compressive stress in columns and struts.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Concrete Cylinder -->
      <ellipse cx="150" cy="50" rx="35" ry="10" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <rect x="115" y="50" width="70" height="70" fill="#64748b" opacity="0.8" stroke="#334155" stroke-width="0"/>
      <path d="M 115,50 L 115,120 A 35,10 0 0 0 185,120 L 185,50" fill="none" stroke="#334155" stroke-width="2"/>
      <ellipse cx="150" cy="120" rx="35" ry="10" fill="#475569" stroke="#334155" stroke-width="2"/>
      <!-- Loading forces -->
      <path d="M 150,10 L 150,40" stroke="#e11d48" stroke-width="3" marker-end="url(#red-arrow)"/>
      <text x="160" y="25" fill="#e11d48" font-weight="bold" font-size="12">P (Load)</text>
      
      <path d="M 150,160 L 150,130" stroke="#e11d48" stroke-width="3" marker-end="url(#red-arrow)"/>
      <text x="160" y="155" fill="#e11d48" font-weight="bold" font-size="12">P</text>
    </svg>`,
    details: "Compression is the capacity of a material to withstand loads tending to reduce size. Concrete has high compressive strength."
  },
  "s1-4": {
    title: "Tensile Stress",
    formula: "\\sigma_t = P / A",
    use: "Used for: Checking tensile stress in tie rods and tension members.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Cylindrical bar under tension -->
      <ellipse cx="150" cy="50" rx="20" ry="6" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <rect x="130" y="50" width="40" height="70" fill="#64748b" opacity="0.8"/>
      <path d="M 130,50 L 130,120 A 20,6 0 0 0 170,120 L 170,50" fill="none" stroke="#334155" stroke-width="2"/>
      <ellipse cx="150" cy="120" rx="20" ry="6" fill="#475569" stroke="#334155" stroke-width="2"/>
      <!-- Pulling forces -->
      <path d="M 150,40 L 150,10" stroke="#e11d48" stroke-width="3" marker-end="url(#red-arrow)"/>
      <text x="165" y="20" fill="#e11d48" font-weight="bold" font-size="12">P (Tension)</text>
      
      <path d="M 150,130 L 150,160" stroke="#e11d48" stroke-width="3" marker-end="url(#red-arrow)"/>
      <text x="165" y="155" fill="#e11d48" font-weight="bold" font-size="12">P</text>
    </svg>`,
    details: "Concrete is extremely weak in tension (typically only 10% of its compressive strength). Rebars carry the tensile stresses."
  },
  "s1-5": {
    title: "Flexural Stress (Beam)",
    formula: "\\sigma_b = M \\times y / I",
    use: "Used for: Finding bending stresses in beams and flexural members.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="60" y="70" width="180" height="40" fill="#94a3b8" stroke="#334155" stroke-width="2" rx="2"/>
      <!-- Neutral axis -->
      <line x1="50" y1="90" x2="250" y2="90" stroke="#e11d48" stroke-dasharray="4,4" stroke-width="1.5"/>
      <text x="255" y="93" fill="#e11d48" font-size="11" font-weight="bold">N.A.</text>
      <!-- Dimension y -->
      <path d="M 150,90 L 150,70" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="155" y="83" fill="#0284c7" font-weight="bold" font-size="12">y</text>
      <!-- Moment arrows -->
      <path d="M 40,80 A 15,15 0 0 1 40,100" fill="none" stroke="#ea580c" stroke-width="2" marker-end="url(#orange-arrow)"/>
      <path d="M 260,100 A 15,15 0 0 1 260,80" fill="none" stroke="#ea580c" stroke-width="2" marker-end="url(#orange-arrow)"/>
      <text x="35" y="75" fill="#ea580c" font-weight="bold" font-size="12">M</text>
    </svg>`,
    details: "Bending stress represents the internal stress induced due to bending moments. Maximized at extreme fibers furthest from the neutral axis."
  },
  "s1-6": {
    title: "Shear Stress",
    formula: "\\tau_v = V \\times Q / (I \\times b)",
    use: "Used for: Checking shear stresses in beam cross sections.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="100" y="40" width="100" height="100" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <!-- Shear forces -->
      <path d="M 80,45 L 80,85" stroke="#e11d48" stroke-width="2.5" marker-end="url(#red-arrow)"/>
      <text x="70" y="65" fill="#e11d48" font-weight="bold" font-size="12">V</text>
      
      <path d="M 220,135 L 220,95" stroke="#e11d48" stroke-width="2.5" marker-end="url(#red-arrow)"/>
      <!-- Shear plane dashed line -->
      <line x1="100" y1="90" x2="200" y2="90" stroke="#334155" stroke-dasharray="3,3" stroke-width="2"/>
    </svg>`,
    details: "Shear stress occurs along horizontal planes of a beam as it bends, keeping the beam from sliding apart in layers."
  },
  "s1-7": {
    title: "Modulus of Rupture",
    formula: "f_r = 0.7 \\sqrt{f_{ck}}",
    use: "Used for: Estimating flexural tensile strength of concrete.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Beam in bending with crack -->
      <path d="M 50,70 L 250,70 L 250,105 L 152,105 L 150,90 L 148,105 L 50,105 Z" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <path d="M 148,105 L 150,90 L 152,105" fill="none" stroke="#e11d48" stroke-width="1.5"/>
      <!-- Supports -->
      <polygon points="65,105 75,120 55,120" fill="#475569" stroke="#334155"/>
      <polygon points="235,105 245,120 225,120" fill="#475569" stroke="#334155"/>
      <!-- Center Point Load -->
      <path d="M 150,40 L 150,65" stroke="#e11d48" stroke-width="2.5" marker-end="url(#red-arrow)"/>
      <text x="156" y="52" fill="#e11d48" font-weight="bold" font-size="12">P</text>
    </svg>`,
    details: "The modulus of rupture represents the flexural tensile strength at which concrete cracks under bending stresses."
  },
  "s1-8": {
    title: "Safe Compressive Stress",
    formula: "\\sigma_{c,allow} = 0.45 \\times f_{ck}",
    use: "Used for: Checking safe compressive stress under working loads.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="100" y="60" width="100" height="90" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <rect x="90" y="150" width="120" height="15" fill="#475569" stroke="#334155" stroke-width="2"/>
      <!-- Compressive load distribution -->
      <path d="M 110,30 L 110,55" stroke="#ea580c" stroke-width="2" marker-end="url(#orange-arrow)"/>
      <path d="M 150,20 L 150,55" stroke="#ea580c" stroke-width="2.5" marker-end="url(#orange-arrow)"/>
      <path d="M 190,30 L 190,55" stroke="#ea580c" stroke-width="2" marker-end="url(#orange-arrow)"/>
      <text x="150" y="15" fill="#ea580c" font-weight="bold" font-size="12" text-anchor="middle">Allowable P</text>
    </svg>`,
    details: "Limits concrete compressive stresses under service loads to 45% of its characteristic cylinder compressive strength."
  },
  "s1-9": {
    title: "Reinforcement Ratio",
    formula: "\\rho = A_s / (b \\times d)",
    use: "Used for: Determining percentage of steel in reinforced concrete sections.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Beam Section cross-section -->
      <rect x="100" y="20" width="100" height="120" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <!-- Reinforcement bars (circles) -->
      <circle cx="120" cy="120" r="8" fill="#1e293b" stroke="#000"/>
      <circle cx="150" cy="120" r="8" fill="#1e293b" stroke="#000"/>
      <circle cx="180" cy="120" r="8" fill="#1e293b" stroke="#000"/>
      <!-- Dimension markers -->
      <path d="M 100,150 L 200,150" stroke="#0284c7" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="150" y="165" fill="#0284c7" font-weight="bold" font-size="12" text-anchor="middle">b (Width)</text>
      
      <path d="M 215,20 L 215,120" stroke="#0284c7" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="225" y="75" fill="#0284c7" font-weight="bold" font-size="12" text-anchor="start">d (Eff Depth)</text>
    </svg>`,
    details: "The ratio of tension steel area to concrete cross sectional area. Code regulations specify minimum and maximum reinforcement percentages."
  },
  "s1-10": {
    title: "Simply Supported Beam Deflection",
    formula: "\\delta_{max} = \\frac{5 w L^4}{384 E I}",
    use: "Used for: Checking serviceability deflection of concrete beams.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Deflected dashed line -->
      <path d="M 50,90 Q 150,135 250,90" fill="none" stroke="#e11d48" stroke-dasharray="4,4" stroke-width="2"/>
      <!-- Straight beam reference -->
      <line x1="50" y1="90" x2="250" y2="90" stroke="#334155" stroke-width="2"/>
      <!-- Supports -->
      <polygon points="50,90 60,105 40,105" fill="#475569" stroke="#334155"/>
      <polygon points="250,90 260,105 240,105" fill="#475569" stroke="#334155"/>
      <!-- UDL indicators -->
      <path d="M 60,65 Q 75,75 90,65 Q 105,75 120,65 Q 135,75 150,65 Q 165,75 180,65 Q 195,75 210,65 Q 225,75 240,65" fill="none" stroke="#ea580c" stroke-width="1.5"/>
      <!-- Deflection distance -->
      <path d="M 150,90 L 150,111" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="158" y="105" fill="#0284c7" font-weight="bold" font-size="11">dmax</text>
    </svg>`,
    details: "Max deflection under uniformly distributed load. Code requires deflection checks to avoid cracks in plaster and masonry finishes."
  },

  // Sheet 2
  "s2-1": {
    title: "Effective Span of Beam",
    formula: "L_{eff} = L_{clear} + d \\quad \\text{or} \\quad L_{clear} + t_w",
    use: "Used for: Calculating design span of simply supported beams.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Support walls -->
      <rect x="30" y="90" width="30" height="50" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
      <rect x="240" y="90" width="30" height="50" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
      <!-- Beam resting on support -->
      <rect x="40" y="70" width="220" height="20" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <!-- Clear Span -->
      <path d="M 60,110 L 240,110" stroke="#0f766e" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="150" y="125" fill="#0f766e" font-weight="bold" font-size="11" text-anchor="middle">Lclear (Clear Span)</text>
      <!-- Effective Span -->
      <path d="M 45,150 L 255,150" stroke="#ea580c" stroke-width="1.5" marker-end="url(#orange-arrow)" marker-start="url(#orange-arrow)"/>
      <text x="150" y="165" fill="#ea580c" font-weight="bold" font-size="12" text-anchor="middle">Leff (Effective Span)</text>
    </svg>`
  },
  "s2-2": {
    title: "Moment of Resistance",
    formula: "M_u = 0.36 f_{ck} b x_u (d - 0.42 x_u)",
    use: "Used for: Calculating ultimate flexural strength capacity of beams.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="80" y="30" width="100" height="120" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <!-- Stress block sketch -->
      <path d="M 190,30 L 240,30 L 240,75 C 240,90 200,90 190,90" fill="#0f766e" opacity="0.3" stroke="#0f766e" stroke-width="1.5"/>
      <line x1="190" y1="90" x2="190" y2="150" stroke="#475569" stroke-width="1.5"/>
      <text x="210" y="60" fill="#0f766e" font-size="10" font-weight="bold">xu</text>
      <!-- Rebars -->
      <circle cx="110" cy="130" r="6" fill="#1e293b"/>
      <circle cx="150" cy="130" r="6" fill="#1e293b"/>
    </svg>`
  },
  "s2-3": {
    title: "Bending Moment - Simply Supported",
    formula: "M = \\frac{w L^2}{8}",
    use: "Used for: Maximum bending moment at midspan under UDL load.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Simply supported beam diagram with UDL and load arrows -->
      <path d="M 50,90 Q 150,140 250,90" fill="none" stroke="#e11d48" stroke-width="2"/>
      <line x1="50" y1="90" x2="250" y2="90" stroke="#334155" stroke-width="1.5"/>
      <polygon points="50,90 60,105 40,105" fill="#475569" stroke="#334155"/>
      <polygon points="250,90 260,105 240,105" fill="#475569" stroke="#334155"/>
      <!-- Loads -->
      <path d="M 55,60 L 55,80 M 100,60 L 100,80 M 150,60 L 150,80 M 200,60 L 200,80 M 245,60 L 245,80" stroke="#ea580c" stroke-width="1.5" marker-end="url(#orange-arrow)"/>
      <text x="150" y="50" fill="#ea580c" font-weight="bold" font-size="11" text-anchor="middle">w (UDL)</text>
    </svg>`
  },
  "s2-4": {
    title: "Bending Moment - Cantilever",
    formula: "M = \\frac{w L^2}{2}",
    use: "Used for: Fixed end moment calculations in cantilever beams.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Fixed support on left -->
      <rect x="30" y="50" width="20" height="80" fill="#475569" stroke="#334155" stroke-width="1.5"/>
      <line x1="50" y1="90" x2="230" y2="90" stroke="#334155" stroke-width="3"/>
      <!-- Deflected shape -->
      <path d="M 50,90 Q 140,90 230,120" fill="none" stroke="#e11d48" stroke-dasharray="3,3" stroke-width="1.5"/>
      <text x="140" y="60" fill="#ea580c" font-weight="bold" font-size="11">w (UDL)</text>
    </svg>`
  },
  "s2-5": {
    title: "Shear Force - Simply Supported",
    formula: "V = \\frac{w L}{2}",
    use: "Used for: Maximum shear force at supports.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Shear force diagram: typical +ve and -ve triangles -->
      <line x1="50" y1="90" x2="250" y2="90" stroke="#334155" stroke-width="1.5"/>
      <polygon points="50,50 150,90 50,90" fill="#0f766e" opacity="0.3"/>
      <polygon points="250,130 150,90 250,90" fill="#0f766e" opacity="0.3"/>
      <line x1="50" y1="50" x2="150" y2="90" stroke="#0f766e" stroke-width="2"/>
      <line x1="150" y1="90" x2="250" y2="130" stroke="#0f766e" stroke-width="2"/>
      <text x="60" y="70" fill="#0f766e" font-weight="bold" font-size="11">V = wL/2</text>
    </svg>`
  },
  "s2-6": {
    title: "One-Way Slab Thickness",
    formula: "D_{min} = \\frac{L}{20}",
    use: "Used for: Preliminary sizing of one-way concrete slabs.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Horizontal slab cross section -->
      <polygon points="40,90 220,60 260,90 80,120" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
      <path d="M 35,93 L 35,115" stroke="#0284c7" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="25" y="108" fill="#0284c7" font-weight="bold" font-size="11">D</text>
    </svg>`
  },
  "s2-7": {
    title: "Two-Way Slab - Short Span",
    formula: "M_x = \\alpha_x \\cdot w \\cdot L_x^2",
    use: "Used for: Reinforcement design along short span of two-way slabs.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="70" y="40" width="160" height="110" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <path d="M 70,165 L 230,165" stroke="#0f766e" stroke-width="1" marker-marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="150" y="178" fill="#0f766e" font-weight="bold" font-size="11" text-anchor="middle">Lx (Short span)</text>
    </svg>`
  },
  "s2-8": {
    title: "Two-Way Slab - Long Span",
    formula: "M_y = \\alpha_y \\cdot w \\cdot L_x^2",
    use: "Used for: Reinforcement design along long span of two-way slabs.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="70" y="40" width="160" height="110" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <path d="M 245,40 L 245,150" stroke="#0f766e" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="255" y="100" fill="#0f766e" font-weight="bold" font-size="11" text-anchor="start">Ly (Long span)</text>
    </svg>`
  },
  "s2-9": {
    title: "T-Beam Effective Width",
    formula: "b_f = \\frac{L_0}{6} + b_w + 6 D_f",
    use: "Used for: Effective flange width in flanged T-beam design.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Draw T-shape cross section -->
      <polygon points="60,40 240,40 240,70 170,70 170,140 130,140 130,70 60,70" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <path d="M 60,25 L 240,25" stroke="#0284c7" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="150" y="18" fill="#0284c7" font-weight="bold" font-size="11" text-anchor="middle">bf (Flange Width)</text>
      
      <path d="M 130,150 L 170,150" stroke="#0284c7" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="150" y="165" fill="#0284c7" font-weight="bold" font-size="11" text-anchor="middle">bw</text>
    </svg>`
  },
  "s2-10": {
    title: "Deflection Check (L/d)",
    formula: "\\frac{L}{d} \\le k_1 \\cdot k_2 \\cdot k_3 \\cdot 20",
    use: "Used for: Serviceability span-to-depth check of beams and slabs.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="50" y="70" width="200" height="25" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
      <path d="M 50,110 L 250,110" stroke="#0f766e" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="150" y="125" fill="#0f766e" font-weight="bold" font-size="11" text-anchor="middle">L (Span)</text>
      <text x="150" y="55" fill="#ea580c" font-weight="bold" font-size="12" text-anchor="middle">Checking: L/d limit</text>
    </svg>`
  },

  // Sheet 3
  "s3-1": {
    title: "Column Load Capacity",
    formula: "P_u = 0.4 f_{ck} A_c + 0.67 f_y A_s",
    use: "Used for: Ultimate limit capacity load of short axially loaded columns.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="110" y="40" width="80" height="110" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <!-- Vertical rebars in column -->
      <line x1="125" y1="40" x2="125" y2="150" stroke="#1e293b" stroke-dasharray="3,2" stroke-width="2.5"/>
      <line x1="175" y1="40" x2="175" y2="150" stroke="#1e293b" stroke-dasharray="3,2" stroke-width="2.5"/>
      <!-- Downward force -->
      <path d="M 150,10 L 150,38" stroke="#e11d48" stroke-width="3.5" marker-end="url(#red-arrow)"/>
      <text x="160" y="25" fill="#e11d48" font-weight="bold" font-size="12">Pu</text>
    </svg>`
  },
  "s3-2": {
    title: "Minimum Eccentricity",
    formula: "e_{min} = \\frac{L}{500} + \\frac{D}{30} \\ge 20 \\text{ mm}",
    use: "Used for: Accounting for accidental loading eccentricity in concrete columns.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Column showing offset line of action -->
      <rect x="120" y="40" width="60" height="110" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <line x1="150" y1="30" x2="150" y2="160" stroke="#475569" stroke-dasharray="4,4"/>
      <!-- Load off center -->
      <line x1="165" y1="10" x2="165" y2="38" stroke="#e11d48" stroke-width="2.5"/>
      <path d="M 165,38 L 165,40" stroke="#e11d48" stroke-width="1" marker-end="url(#red-arrow)"/>
      <text x="172" y="25" fill="#e11d48" font-weight="bold" font-size="11">P</text>
      <!-- Eccentricity marker -->
      <path d="M 150,25 L 165,25" stroke="#ea580c" stroke-width="1.5" marker-end="url(#orange-arrow)" marker-start="url(#orange-arrow)"/>
      <text x="157" y="18" fill="#ea580c" font-size="10" font-weight="bold" text-anchor="middle">e</text>
    </svg>`
  },
  "s3-3": {
    title: "Column Slenderness Ratio",
    formula: "\\lambda = \\frac{L_{eff}}{r}",
    use: "Used for: Classifying column behavior (short vs. slender).",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Buckling slender column -->
      <path d="M 150,30 Q 185,90 150,150" fill="none" stroke="#334155" stroke-width="2"/>
      <path d="M 150,30 Q 185,90 150,150" fill="none" stroke="#e11d48" stroke-dasharray="4,3" stroke-width="2"/>
      <path d="M 130,90 L 167,90" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="180" y="93" fill="#0284c7" font-weight="bold" font-size="12">Leff</text>
    </svg>`
  },
  "s3-4": {
    title: "Effective Length of Column",
    formula: "L_{eff} = k \\cdot L",
    use: "Used for: Determining effective buckling lengths of columns.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Fixed and pinned endpoints -->
      <line x1="150" y1="30" x2="150" y2="150" stroke="#334155" stroke-width="4"/>
      <line x1="130" y1="30" x2="170" y2="30" stroke="#334155" stroke-width="4"/>
      <line x1="130" y1="150" x2="170" y2="150" stroke="#334155" stroke-width="4"/>
      <text x="180" y="95" fill="#475569" font-weight="bold" font-size="12">Leff = k * L</text>
    </svg>`
  },
  "s3-5": {
    title: "Lateral Tie Spacing",
    formula: "s_v \\le \\min(300 \\text{ mm}, 16\\phi, b)",
    use: "Used for: Tie stirrups spacing design in concrete columns.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="110" y="30" width="80" height="120" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <!-- Lateral ties -->
      <line x1="110" y1="50" x2="190" y2="50" stroke="#334155" stroke-width="2"/>
      <line x1="110" y1="75" x2="190" y2="75" stroke="#334155" stroke-width="2"/>
      <line x1="110" y1="100" x2="190" y2="100" stroke="#334155" stroke-width="2"/>
      <line x1="110" y1="125" x2="190" y2="125" stroke="#334155" stroke-width="2"/>
      <!-- Spacing dimension -->
      <path d="M 205,75 L 205,100" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="215" y="92" fill="#0284c7" font-weight="bold" font-size="11">sv</text>
    </svg>`
  },
  "s3-6": {
    title: "Area of Steel in Column",
    formula: "A_s = \\rho \\cdot A_g",
    use: "Used for: Estimating main longitudinal steel in column sections.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="100" y="40" width="100" height="100" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <!-- Rebars in 4 corners -->
      <circle cx="115" cy="55" r="8" fill="#1e293b" stroke="#000"/>
      <circle cx="185" cy="55" r="8" fill="#1e293b" stroke="#000"/>
      <circle cx="115" cy="125" r="8" fill="#1e293b" stroke="#000"/>
      <circle cx="185" cy="125" r="8" fill="#1e293b" stroke="#000"/>
      <text x="150" y="95" fill="#1e293b" font-weight="bold" font-size="12" text-anchor="middle">As (Longitudinal)</text>
    </svg>`
  },
  "s3-7": {
    title: "Safe Load on Isolated Footing",
    formula: "q_s = P / A \\le q_{allow}",
    use: "Used for: Sizing concrete footing area under column load.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <polygon points="120,40 180,40 180,100 240,100 240,120 60,120 60,100 120,100" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
      <!-- Soil reaction arrows -->
      <path d="M 80,150 L 80,125 M 120,150 L 120,125 M 160,150 L 160,125 M 200,150 L 200,125" stroke="#ea580c" stroke-width="1.5" marker-end="url(#orange-arrow)"/>
      <text x="150" y="165" fill="#ea580c" font-weight="bold" font-size="11" text-anchor="middle">qs (Soil Upward Pressure)</text>
    </svg>`
  },
  "s3-8": {
    title: "Bending Moment in Footing",
    formula: "M = \\frac{q_s L^2}{2}",
    use: "Used for: Designing bending reinforcement inside concrete footing slabs.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Cantilever footing bending concept -->
      <polygon points="130,40 170,40 170,100 230,100 230,115 130,115" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
      <path d="M 170,125 L 230,125" stroke="#0284c7" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="200" y="140" fill="#0284c7" font-weight="bold" font-size="11" text-anchor="middle">L (Projection)</text>
    </svg>`
  },
  "s3-9": {
    title: "Punching Shear Stress",
    formula: "\\tau_p = \\frac{V_u}{b_0 \\cdot d}",
    use: "Used for: Checking punching shear limits around footing column base.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Footing and punching shear failures -->
      <polygon points="60,90 240,90 240,115 60,115" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <rect x="130" y="30" width="40" height="60" fill="#64748b" stroke="#334155" stroke-width="2"/>
      <!-- Punching failure lines -->
      <line x1="110" y1="90" x2="130" y2="115" stroke="#e11d48" stroke-dasharray="3,3" stroke-width="2"/>
      <line x1="190" y1="90" x2="170" y2="115" stroke="#e11d48" stroke-dasharray="3,3" stroke-width="2"/>
      <text x="150" y="130" fill="#e11d48" font-size="11" font-weight="bold" text-anchor="middle">bo (Perimeter)</text>
    </svg>`
  },
  "s3-10": {
    title: "Minimum Depth of Footing",
    formula: "d = \\sqrt{\\frac{M}{R \\cdot b}}",
    use: "Used for: Calculating minimum depth for structural resistance to bending.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="50" y="80" width="200" height="35" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <path d="M 35,80 L 35,115" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="25" y="102" fill="#0284c7" font-weight="bold" font-size="12">d</text>
      <text x="150" y="65" fill="#334155" font-weight="bold" font-size="12" text-anchor="middle">Calculated min effective depth</text>
    </svg>`
  },

  // Sheet 4
  "s4-1": {
    title: "Void Ratio",
    formula: "e = \\frac{V_v}{V_s}",
    use: "Used for: Describing packing properties of soils.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Soil particles and voids schematic -->
      <circle cx="90" cy="80" r="30" fill="#92400e" opacity="0.8"/>
      <circle cx="160" cy="70" r="35" fill="#92400e" opacity="0.8"/>
      <circle cx="120" cy="120" r="25" fill="#92400e" opacity="0.8"/>
      <circle cx="200" cy="110" r="30" fill="#92400e" opacity="0.8"/>
      <text x="145" y="100" fill="#ea580c" font-weight="bold" font-size="13">Vv (Voids)</text>
    </svg>`
  },
  "s4-2": {
    title: "Porosity",
    formula: "n = \\frac{V_v}{V} = \\frac{e}{1+e}",
    use: "Used for: Measuring void percentage in total soil volumes.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="90" y="40" width="120" height="100" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <rect x="90" y="90" width="120" height="50" fill="#92400e" opacity="0.7"/>
      <text x="150" y="70" fill="#15803d" font-weight="bold" font-size="12" text-anchor="middle">Voids (Vv)</text>
      <text x="150" y="120" fill="#ffffff" font-weight="bold" font-size="12" text-anchor="middle">Solids (Vs)</text>
    </svg>`
  },
  "s4-3": {
    title: "Degree of Saturation",
    formula: "S = \\frac{V_w}{V_v} \\times 100\\%",
    use: "Used for: Geotechnical classifications of wet and dry soils.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="100" y="30" width="100" height="120" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <!-- Water layer -->
      <rect x="100" y="70" width="100" height="80" fill="#0284c7" opacity="0.7"/>
      <text x="150" y="55" fill="#334155" font-weight="bold" font-size="11" text-anchor="middle">Air</text>
      <text x="150" y="110" fill="#ffffff" font-weight="bold" font-size="12" text-anchor="middle">Water (Vw)</text>
    </svg>`
  },
  "s4-4": {
    title: "Soil Dry Density",
    formula: "\\gamma_d = \\frac{\\gamma}{1+w}",
    use: "Used for: Compaction controls and relative density indicators.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="110" y="40" width="80" height="110" fill="#92400e" opacity="0.7" stroke="#334155" stroke-width="2" rx="4"/>
      <path d="M 150,15 L 150,35" stroke="#ea580c" stroke-width="3" marker-end="url(#orange-arrow)"/>
      <text x="150" y="160" fill="#92400e" font-weight="bold" font-size="12" text-anchor="middle">Dry Soil Mass</text>
    </svg>`
  },
  "s4-5": {
    title: "Darcy's Law (Seepage)",
    formula: "q = k \\cdot i \\cdot A",
    use: "Used for: Calculating seepage rates through soils.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Seepage tank -->
      <rect x="70" y="50" width="160" height="70" fill="#92400e" opacity="0.5" stroke="#334155" stroke-width="2"/>
      <!-- Flow vectors -->
      <path d="M 40,85 L 65,85" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)"/>
      <path d="M 235,85 L 260,85" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="150" y="90" fill="#334155" font-weight="bold" font-size="12" text-anchor="middle">Soil Filter Area (A)</text>
    </svg>`
  },
  "s4-6": {
    title: "Terzaghi's Bearing Capacity",
    formula: "q_u = c N_c + q N_q + 0.5 \\gamma B N_\\gamma",
    use: "Used for: Ultimate bearing capacity computations of foundations.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Footing showing wedge failure shear zones -->
      <rect x="110" y="30" width="80" height="50" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
      <polygon points="110,80 190,80 150,110" fill="#15803d" opacity="0.3" stroke="#15803d" stroke-width="1.5"/>
      <path d="M 110,80 Q 70,100 40,80 L 150,80" fill="none" stroke="#16a34a" stroke-dasharray="3,3"/>
      <path d="M 190,80 Q 230,100 260,80 L 150,80" fill="none" stroke="#16a34a" stroke-dasharray="3,3"/>
      <text x="150" y="60" fill="#475569" font-weight="bold" font-size="12" text-anchor="middle">Footing (B)</text>
    </svg>`
  },
  "s4-7": {
    title: "Safe Bearing Capacity",
    formula: "q_{safe} = \\frac{q_u}{\\text{FOS}}",
    use: "Used for: Geotechnical foundation sizing limits.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Load safe illustration -->
      <rect x="100" y="70" width="100" height="20" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
      <path d="M 150,15 L 150,65" stroke="#16a34a" stroke-width="3" marker-end="url(#arrow)"/>
      <text x="150" y="105" fill="#16a34a" font-weight="bold" font-size="12" text-anchor="middle">Safe load = Ult / FOS</text>
    </svg>`
  },
  "s4-8": {
    title: "Consolidation Settlement",
    formula: "S = \\frac{C_c}{1+e_0} H \\log \\left( \\frac{\\sigma_0 + \\Delta\\sigma}{\\sigma_0} \\right)",
    use: "Used for: Long term settlement forecasting in clay soils.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Soil layer compressing -->
      <rect x="60" y="30" width="180" height="50" fill="#b45309" opacity="0.6" stroke="#334155"/>
      <rect x="60" y="80" width="180" height="30" fill="#78350f" opacity="0.8" stroke="#334155"/>
      <text x="150" y="100" fill="#ffffff" font-weight="bold" font-size="11" text-anchor="middle">Consolidating Clay Layer</text>
      <!-- Settlement indicator -->
      <path d="M 250,30 L 250,80" stroke="#0284c7" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="257" y="60" fill="#0284c7" font-weight="bold" font-size="11">H</text>
    </svg>`
  },
  "s4-9": {
    title: "Mohr-Coulomb Shear Strength",
    formula: "\\tau = c + \\sigma \\tan \\phi",
    use: "Used for: Stability checks of soils under shear forces.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Mohr-coulomb envelope graph -->
      <line x1="50" y1="140" x2="250" y2="140" stroke="#334155" stroke-width="2"/>
      <line x1="50" y1="20" x2="50" y2="140" stroke="#334155" stroke-width="2"/>
      <line x1="50" y1="100" x2="230" y2="40" stroke="#16a34a" stroke-width="2"/>
      <text x="235" y="45" fill="#16a34a" font-weight="bold" font-size="11">Strength Envelope</text>
      <text x="35" y="105" fill="#334155" font-weight="bold" font-size="11">c</text>
    </svg>`
  },
  "s4-10": {
    title: "Active Earth Pressure (Rankine)",
    formula: "P_a = \\frac{1}{2} \\gamma H^2 K_a",
    use: "Used for: Designing concrete retaining walls.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Retaining wall -->
      <polygon points="80,30 95,30 95,140 140,140 140,150 60,150 60,140 80,140" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <rect x="96" y="30" width="130" height="110" fill="#78350f" opacity="0.4"/>
      <!-- Active pressure arrow -->
      <path d="M 140,100 L 100,100" stroke="#e11d48" stroke-width="2" marker-end="url(#red-arrow)"/>
      <text x="150" y="98" fill="#e11d48" font-weight="bold" font-size="11">Pa (Earth thrust)</text>
    </svg>`
  },

  // Sheet 5
  "s5-1": {
    title: "Reactions under Point Load",
    formula: "R_A = \\frac{W \\cdot b}{L}, \\quad R_B = \\frac{W \\cdot a}{L}",
    use: "Used for: Support reactions calculations.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <line x1="50" y1="100" x2="250" y2="100" stroke="#334155" stroke-width="2"/>
      <polygon points="50,100 60,115 40,115" fill="#475569" stroke="#334155"/>
      <polygon points="250,100 260,115 240,115" fill="#475569" stroke="#334155"/>
      <path d="M 130,50 L 130,98" stroke="#e11d48" stroke-width="2.5" marker-end="url(#red-arrow)"/>
      <text x="135" y="45" fill="#e11d48" font-weight="bold" font-size="12">W</text>
      <!-- Reaction vectors -->
      <path d="M 50,140 L 50,120" stroke="#6d28d9" stroke-width="2.5" marker-end="url(#purple-arrow)"/>
      <path d="M 250,140 L 250,120" stroke="#6d28d9" stroke-width="2.5" marker-end="url(#purple-arrow)"/>
      <text x="40" y="150" fill="#6d28d9" font-weight="bold" font-size="11">RA</text>
      <text x="240" y="150" fill="#6d28d9" font-weight="bold" font-size="11">RB</text>
    </svg>`
  },
  "s5-2": {
    title: "Max BM SS - Point Load",
    formula: "M_{max} = \\frac{W \\cdot a \\cdot b}{L}",
    use: "Used for: Designing moment capacity under asymmetric point loading.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Triangle BM diagram -->
      <line x1="50" y1="110" x2="250" y2="110" stroke="#334155" stroke-width="1.5"/>
      <polygon points="50,110 130,50 250,110" fill="#6d28d9" opacity="0.2"/>
      <line x1="50" y1="110" x2="130" y2="50" stroke="#6d28d9" stroke-width="2"/>
      <line x1="130" y1="50" x2="250" y2="110" stroke="#6d28d9" stroke-width="2"/>
      <text x="130" y="42" fill="#6d28d9" font-weight="bold" font-size="11" text-anchor="middle">Mmax = Wab/L</text>
    </svg>`
  },
  "s5-3": {
    title: "Maximum BM - Fixed Beam",
    formula: "M_{end} = \\frac{w L^2}{12}, \\quad M_{mid} = \\frac{w L^2}{24}",
    use: "Used for: Moment designs in continuous or fixed-ended beams.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Fixed beam moment diagram -->
      <line x1="50" y1="90" x2="250" y2="90" stroke="#334155" stroke-width="1.5"/>
      <!-- Moment parabola -->
      <path d="M 50,50 Q 150,150 250,50" fill="none" stroke="#6d28d9" stroke-width="2"/>
      <text x="50" y="40" fill="#6d28d9" font-size="10" font-weight="bold">wL²/12</text>
      <text x="150" y="125" fill="#6d28d9" font-size="10" font-weight="bold" text-anchor="middle">wL²/24</text>
    </svg>`
  },
  "s5-4": {
    title: "Slope at Free End",
    formula: "\\theta = \\frac{W L^2}{2 E I}",
    use: "Used for: Angular rotation analysis in cantilever structures.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Rotation angle at end -->
      <rect x="30" y="70" width="15" height="40" fill="#475569"/>
      <path d="M 45,90 Q 150,90 230,120" fill="none" stroke="#e11d48" stroke-width="1.5"/>
      <line x1="210" y1="112" x2="250" y2="128" stroke="#0284c7" stroke-width="1"/>
      <text x="245" y="115" fill="#0284c7" font-weight="bold" font-size="13">\u03B8</text>
    </svg>`
  },
  "s5-5": {
    title: "Deflection - Cantilever Point Load",
    formula: "\\delta_{max} = \\frac{W L^3}{3 E I}",
    use: "Used for: Deflection checks of structural balconies and cantilevers.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="40" y="70" width="15" height="40" fill="#475569"/>
      <path d="M 55,90 Q 150,90 240,130" fill="none" stroke="#e11d48" stroke-width="2"/>
      <path d="M 240,90 L 240,128" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="250" y="115" fill="#0284c7" font-weight="bold" font-size="12">\u03B4max</text>
    </svg>`
  },
  "s5-6": {
    title: "Deflection - Simply Supported",
    formula: "\\delta_{max} = \\frac{W L^3}{48 E I}",
    use: "Used for: Midspan deflection limits checks under point loading.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <line x1="50" y1="80" x2="250" y2="80" stroke="#334155" stroke-width="1.5"/>
      <path d="M 50,80 Q 150,130 250,80" fill="none" stroke="#e11d48" stroke-width="2"/>
      <path d="M 150,80 L 150,128" stroke="#0284c7" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="160" y="110" fill="#0284c7" font-weight="bold" font-size="12">\u03B4max</text>
    </svg>`
  },
  "s5-7": {
    title: "Moment of Inertia - Rectangle",
    formula: "I = \\frac{b d^3}{12}",
    use: "Used for: Calculating cross-sectional properties for flexural stiffness.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="100" y="40" width="100" height="100" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <path d="M 100,152 L 200,152" stroke="#0284c7" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="150" y="165" fill="#0284c7" font-weight="bold" font-size="11" text-anchor="middle">b (Width)</text>
      <path d="M 215,40 L 215,140" stroke="#0284c7" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="225" y="95" fill="#0284c7" font-weight="bold" font-size="11" text-anchor="start">d (Depth)</text>
    </svg>`
  },
  "s5-8": {
    title: "Section Modulus",
    formula: "Z = \\frac{I}{y} = \\frac{b d^2}{6}",
    use: "Used for: Bending stress limit calculations of standard rectangular elements.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <rect x="100" y="40" width="100" height="100" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <!-- N.A. dashed line -->
      <line x1="90" y1="90" x2="210" y2="90" stroke="#e11d48" stroke-dasharray="3,3"/>
      <path d="M 215,90 L 215,140" stroke="#0284c7" stroke-width="1" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
      <text x="225" y="120" fill="#0284c7" font-weight="bold" font-size="11">y = d/2</text>
    </svg>`
  },
  "s5-9": {
    title: "Stiffness of Beam",
    formula: "K = \\frac{4 E I}{L} \\quad \\text{or} \\quad \\frac{3 E I}{L}",
    use: "Used for: Multi-story moment frame calculations.",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Fixed or Pinned beams showing rotational resistance -->
      <line x1="50" y1="90" x2="250" y2="90" stroke="#334155" stroke-width="3"/>
      <rect x="40" y="70" width="10" height="40" fill="#475569"/>
      <circle cx="250" cy="90" r="4" fill="#6d28d9"/>
      <text x="150" y="65" fill="#334155" font-weight="bold" font-size="12" text-anchor="middle">Flexural Stiffness (K)</text>
    </svg>`
  },
  "s5-10": {
    title: "Carry Over & Distribution",
    formula: "\\text{DF} = \\frac{K}{\\sum K}",
    use: "Used for: Frame structural analysis under Moment Distribution Method (Hardy Cross).",
    svg: `<svg viewBox="0 0 300 180" class="vector-graphic">
      <!-- Joint node where multiple members meet -->
      <line x1="150" y1="90" x2="60" y2="90" stroke="#334155" stroke-width="2"/>
      <line x1="150" y1="90" x2="240" y2="90" stroke="#334155" stroke-width="2"/>
      <line x1="150" y1="90" x2="150" y2="30" stroke="#334155" stroke-width="2"/>
      <line x1="150" y1="90" x2="150" y2="150" stroke="#334155" stroke-width="2"/>
      <circle cx="150" cy="90" r="10" fill="#e11d48"/>
      <text x="165" y="80" fill="#e11d48" font-weight="bold" font-size="12">Node \u03A3K</text>
    </svg>`
  }
};
