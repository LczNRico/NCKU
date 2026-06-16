import { useState, useEffect, useRef } from "react";

// ── Constants ─────────────────────────────────────────────────────────────────

const MUSCLE_GROUPS = {
  "胸部": ["胸大肌","胸小肌"],
  "肩部": ["前三角肌","中三角肌","後三角肌"],
  "手臂": ["肱二頭肌","肱三頭肌","肱肌","肱橈肌"],
  "背部": ["背闊肌","菱形肌","斜方肌上束","斜方肌中束","豎脊肌"],
  "核心": ["腹直肌","腹外斜肌","腹內斜肌","腹橫肌"],
  "臀部": ["臀大肌","臀中肌","臀小肌"],
  "大腿": ["股四頭肌","膕旁肌","內收肌群","縫匠肌"],
  "小腿": ["腓腸肌","比目魚肌","脛前肌"],
};

const CATEGORIES = [
  { id: "strength",   label: "重訓",     color: "#c0392b" },
  { id: "functional", label: "功能性訓練", color: "#c0761a" },
  { id: "rehab",      label: "傷病管理",  color: "#1e7a45" },
];
const getCat = (id) => CATEGORIES.find(c => c.id === id) || CATEGORIES[0];
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2);
const newExercise = () => ({ id: uid(), name: "", muscles: [], category: "strength", defaultSets: 3, defaultReps: 10 });
const newDay  = (i)  => ({ id: uid(), label: `Day ${i + 1}`, slots: [] });
const newSlot = (ex) => ({ id: uid(), exerciseId: ex.id, sets: Array.from({ length: ex.defaultSets }, () => ({ reps: ex.defaultReps, weight: "" })) });

// ── Theme System ──────────────────────────────────────────────────────────────

const DARK_PALETTE = {
  text1: "#ffffff", text2: "#94a3b8", text3: "#475569", text4: "#334155",
  border: "#1e293b", border2: "#0f172a",
  inputBg: "#0f172a", tagBg: "#1e293b", tagText: "#475569",
  panelBg: "#111827", panelBorder: "#1e293b",
  btnBg: "#1e293b", btnText: "#94a3b8",
  dropText: "#1e293b", setRowBg: "#111827",
  addSetBg: "#111827", addSetText: "#475569",
};

const LIGHT_PALETTE = {
  text1: "#2c1a0e", text2: "#7a5a45", text3: "#a08878", text4: "#c4b0a0",
  border: "#d4c4b0", border2: "#e8ddd2",
  inputBg: "#fdfaf6", tagBg: "#ede5db", tagText: "#8a6a55",
  panelBg: "#faf5ef", panelBorder: "#d4c4b0",
  btnBg: "#ede5db", btnText: "#7a5a45",
  dropText: "#c4b0a0", setRowBg: "#fdfaf6",
  addSetBg: "#f5ede3", addSetText: "#a08878",
};

const THEME_DEFAULTS = {
  mode: "dark",
  appBg: "#060c18", topBarBg: "#060c18", sidebarBg: "#070d1a",
  columnBg: "#0d1526", libCardBg: "#0f172a", slotBg: "#070d1a",
};

const PRESETS = [
  { name: "深夜黑",   mode: "dark",  bg: "#060c18", theme: { appBg:"#060c18", topBarBg:"#060c18", sidebarBg:"#070d1a", columnBg:"#0d1526", libCardBg:"#0f172a", slotBg:"#070d1a" } },
  { name: "碳黑",     mode: "dark",  bg: "#111111", theme: { appBg:"#111111", topBarBg:"#0a0a0a", sidebarBg:"#161616", columnBg:"#1c1c1c", libCardBg:"#222222", slotBg:"#141414" } },
  { name: "深森林",   mode: "dark",  bg: "#071410", theme: { appBg:"#071410", topBarBg:"#071410", sidebarBg:"#0a1c17", columnBg:"#0d2018", libCardBg:"#0f261e", slotBg:"#091810" } },
  { name: "深酒紅",   mode: "dark",  bg: "#130a0a", theme: { appBg:"#130a0a", topBarBg:"#130a0a", sidebarBg:"#1a0d0d", columnBg:"#1f1010", libCardBg:"#251212", slotBg:"#170b0b" } },
  { name: "石板藍",   mode: "dark",  bg: "#0f172a", theme: { appBg:"#0f172a", topBarBg:"#0c1221", sidebarBg:"#111827", columnBg:"#1e293b", libCardBg:"#243045", slotBg:"#131e30" } },
  { name: "奶油白",   mode: "light", bg: "#fdfbf8", theme: { appBg:"#fdfbf8", topBarBg:"#f5f0e8", sidebarBg:"#f0ebe1", columnBg:"#ebe4d8", libCardBg:"#ffffff",  slotBg:"#f7f3ec" } },
  { name: "拿鐵白",   mode: "light", bg: "#faf7f4", theme: { appBg:"#faf7f4", topBarBg:"#f0ebe3", sidebarBg:"#ede7df", columnBg:"#e8e2d9", libCardBg:"#fdfaf7", slotBg:"#f5efe8" } },
  { name: "美式咖啡", mode: "light", bg: "#f5ede3", theme: { appBg:"#f5ede3", topBarBg:"#ede3d5", sidebarBg:"#e5d9cb", columnBg:"#ddd0c0", libCardBg:"#faf4ed", slotBg:"#f0e7dc" } },
  { name: "牛皮紙",   mode: "light", bg: "#f2e8d8", theme: { appBg:"#f2e8d8", topBarBg:"#e8dcc8", sidebarBg:"#e0d4c0", columnBg:"#d8cab4", libCardBg:"#faf4e8", slotBg:"#ecdfc8" } },
];

// ── Storage ───────────────────────────────────────────────────────────────────

const STORE_KEY    = "training-kanban-v1";
const THEME_KEY    = "training-theme-v2";
const persist      = async (d) => { try { await window.storage.set(STORE_KEY,  JSON.stringify(d)); } catch {} };
const persistTheme = async (t) => { try { await window.storage.set(THEME_KEY, JSON.stringify(t)); } catch {} };
const hydrate      = async ()  => { try { const r = await window.storage.get(STORE_KEY);  if (r?.value) return JSON.parse(r.value); } catch {} return null; };
const hydrateTheme = async ()  => { try { const r = await window.storage.get(THEME_KEY); if (r?.value) return JSON.parse(r.value); } catch {} return null; };

// ── ColorPanel ────────────────────────────────────────────────────────────────

const THEME_LABELS = {
  appBg:"整體背景", topBarBg:"頂部導覽列", sidebarBg:"動作庫側欄",
  columnBg:"訓練日欄位", libCardBg:"動作庫字卡", slotBg:"訓練日字卡",
};

function ColorPanel({ theme, onChange, onClose, p }) {
  const refs = useRef({});
  const setKey = (k, v) => onChange({ ...theme, [k]: v });

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full z-50 flex flex-col shadow-2xl"
        style={{ width: "272px", backgroundColor: p.panelBg, borderLeft: `1px solid ${p.border}` }}>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 shrink-0"
          style={{ borderBottom: `1px solid ${p.border}` }}>
          <div>
            <div className="text-sm font-black" style={{ color: p.text1 }}>背景顏色設定</div>
            <div className="text-xs mt-0.5" style={{ color: p.text3 }}>自訂各區域背景色彩</div>
          </div>
          <button onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-sm transition-colors"
            style={{ backgroundColor: p.btnBg, color: p.text3 }}>✕</button>
        </div>

        {/* Mode toggle */}
        <div className="px-4 py-3 shrink-0" style={{ borderBottom: `1px solid ${p.border}` }}>
          <div className="text-xs font-bold mb-2" style={{ color: p.text3 }}>深色 / 淺色</div>
          <div className="flex rounded-xl overflow-hidden" style={{ border: `1px solid ${p.border}` }}>
            {["dark","light"].map(m => (
              <button key={m}
                onClick={() => {
                  const preset = m === "light"
                    ? PRESETS.find(pr => pr.mode === "light")
                    : PRESETS.find(pr => pr.mode === "dark");
                  onChange({ ...preset.theme, mode: m });
                }}
                className="flex-1 py-2 text-xs font-bold transition-all"
                style={{
                  backgroundColor: theme.mode === m ? (m === "dark" ? "#1e293b" : "#c9b49a") : "transparent",
                  color: theme.mode === m ? (m === "dark" ? "#fff" : "#fff") : p.text3,
                }}>
                {m === "dark" ? "🌙 深色" : "☀️ 淺色"}
              </button>
            ))}
          </div>
        </div>

        {/* Presets */}
        <div className="px-4 py-3 shrink-0" style={{ borderBottom: `1px solid ${p.border}` }}>
          <div className="text-xs font-bold mb-2" style={{ color: p.text3 }}>快選主題</div>
          <div className="grid grid-cols-3 gap-1.5">
            {PRESETS.filter(pr => pr.mode === theme.mode).map(pr => (
              <button key={pr.name}
                onClick={() => onChange({ ...pr.theme, mode: pr.mode })}
                className="py-2 rounded-lg text-xs font-bold transition-all hover:opacity-80"
                style={{ backgroundColor: pr.bg, color: pr.mode === "dark" ? "#94a3b8" : "#7a5a45", border: `1px solid ${p.border}` }}>
                {pr.name}
              </button>
            ))}
          </div>
        </div>

        {/* Per-key pickers */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          <div className="text-xs font-bold mb-1" style={{ color: p.text3 }}>個別設定</div>
          {Object.keys(THEME_LABELS).map(key => (
            <div key={key} className="flex items-center gap-3">
              <button
                onClick={() => refs.current[key]?.click()}
                className="w-9 h-9 rounded-xl shrink-0 relative overflow-hidden hover:scale-105 transition-transform"
                style={{ backgroundColor: theme[key], border: `2px solid ${p.border}`, boxShadow: `0 0 8px ${theme[key]}88` }}>
                <input type="color" ref={el => refs.current[key] = el}
                  value={theme[key]} onChange={e => setKey(key, e.target.value)}
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer" style={{ padding:0, border:"none" }} />
              </button>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold" style={{ color: p.text1 }}>{THEME_LABELS[key]}</div>
                <input type="text" maxLength={7}
                  value={theme[key]}
                  onChange={e => { const v = e.target.value; if (/^#[0-9a-fA-F]{0,6}$/.test(v)) setKey(key, v); }}
                  className="text-xs font-mono mt-0.5 w-full rounded-md px-2 py-0.5 outline-none"
                  style={{ backgroundColor: p.inputBg, color: p.text3, border: `1px solid ${p.border}` }} />
              </div>
              <button onClick={() => setKey(key, THEME_DEFAULTS[key])}
                className="text-xs shrink-0 px-1.5 py-1 rounded-lg"
                style={{ backgroundColor: p.btnBg, color: p.text3 }} title="重設">↺</button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 shrink-0" style={{ borderTop: `1px solid ${p.border}` }}>
          <button onClick={() => onChange({ ...THEME_DEFAULTS })}
            className="w-full py-2 rounded-xl text-xs font-bold transition-opacity hover:opacity-80"
            style={{ backgroundColor: p.btnBg, color: p.btnText }}>
            全部重設為預設值
          </button>
        </div>
      </div>
    </>
  );
}

// ── ExerciseModal ─────────────────────────────────────────────────────────────

function ExerciseModal({ initial, onSave, onClose, p }) {
  const [form, setForm] = useState(initial || newExercise());
  const set = (patch) => setForm(f => ({ ...f, ...patch }));
  const toggleMuscle = (m) =>
    set({ muscles: form.muscles.includes(m) ? form.muscles.filter(x => x !== m) : [...form.muscles, m] });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
      <div className="w-96 max-h-[92vh] overflow-y-auto rounded-2xl p-6 shadow-2xl"
        style={{ backgroundColor: p.panelBg, border: `1px solid ${p.panelBorder}` }}>
        <h2 className="text-base font-black mb-5 tracking-tight" style={{ color: p.text1 }}>
          {initial ? "編輯動作字卡" : "新增動作字卡"}
        </h2>
        <label className="block mb-3">
          <span className="text-xs block mb-1" style={{ color: p.text3 }}>動作名稱</span>
          <input autoFocus
            className="w-full rounded-xl px-3 py-2 text-sm outline-none"
            style={{ backgroundColor: p.inputBg, border: `1px solid ${p.border}`, color: p.text1 }}
            placeholder="例：臥推、引體向上、側棒式…"
            value={form.name} onChange={e => set({ name: e.target.value })} />
        </label>
        <div className="mb-4">
          <span className="text-xs block mb-2" style={{ color: p.text3 }}>訓練類別</span>
          <div className="flex gap-2">
            {CATEGORIES.map(cat => (
              <button key={cat.id} onClick={() => set({ category: cat.id })}
                className="flex-1 py-2 rounded-xl text-xs font-bold transition-all"
                style={{ backgroundColor: form.category === cat.id ? cat.color : cat.color + "22", color: form.category === cat.id ? "#fff" : cat.color, border: `1px solid ${cat.color}55` }}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <span className="text-xs block mb-2" style={{ color: p.text3 }}>
            訓練部位{form.muscles.length > 0 && <span className="ml-2" style={{ color: p.text2 }}>（已選 {form.muscles.length} 項）</span>}
          </span>
          <div className="space-y-2.5">
            {Object.entries(MUSCLE_GROUPS).map(([grp, muscles]) => (
              <div key={grp}>
                <div className="text-xs mb-1.5" style={{ color: p.text2 }}>{grp}</div>
                <div className="flex flex-wrap gap-1">
                  {muscles.map(m => {
                    const on = form.muscles.includes(m);
                    return (
                      <button key={m} onClick={() => toggleMuscle(m)}
                        className="px-2 py-1 rounded-lg text-xs transition-all"
                        style={{ backgroundColor: on ? "#7a5a45" : p.tagBg, color: on ? "#fff" : p.tagText, border: `1px solid ${on ? "#7a5a45" : p.border}` }}>
                        {m}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-3 mb-6">
          {[["預設組數","defaultSets"],["預設次數","defaultReps"]].map(([lbl, key]) => (
            <label key={key} className="flex-1">
              <span className="text-xs block mb-1" style={{ color: p.text3 }}>{lbl}</span>
              <input type="number" min="1" max="20"
                className="w-full rounded-xl px-3 py-2 text-sm text-center outline-none"
                style={{ backgroundColor: p.inputBg, border: `1px solid ${p.border}`, color: p.text1 }}
                value={form[key]} onChange={e => set({ [key]: Math.max(1, parseInt(e.target.value) || 1) })} />
            </label>
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={onClose} className="flex-1 py-2 rounded-xl text-sm"
            style={{ backgroundColor: p.btnBg, color: p.btnText }}>取消</button>
          <button disabled={!form.name.trim()} onClick={() => { onSave(form); onClose(); }}
            className="flex-1 py-2 rounded-xl text-sm font-bold text-white disabled:opacity-40"
            style={{ backgroundColor: "#7a5a45" }}>
            {initial ? "更新" : "新增"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── LibraryCard ───────────────────────────────────────────────────────────────

function LibraryCard({ ex, onEdit, onDelete, onDragStart, bg, p }) {
  const cat = getCat(ex.category);
  return (
    <div draggable onDragStart={onDragStart}
      className="rounded-xl cursor-grab active:cursor-grabbing select-none group transition-opacity active:opacity-50"
      style={{ backgroundColor: bg, borderTop:`1px solid ${p.border}`, borderRight:`1px solid ${p.border}`, borderBottom:`1px solid ${p.border}`, borderLeft:`3px solid ${cat.color}` }}>
      <div className="px-3 py-2.5">
        <div className="flex items-start justify-between gap-1">
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold leading-tight truncate" style={{ color: p.text1 }}>
              {ex.name || <span style={{ color: p.text4 }}>（未命名）</span>}
            </div>
            <div className="text-xs mt-0.5 font-semibold" style={{ color: cat.color }}>{cat.label}</div>
          </div>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 pt-0.5">
            <button onClick={e => { e.stopPropagation(); onEdit(); }}
              className="text-xs px-1.5 py-0.5 rounded-md" style={{ backgroundColor: p.tagBg, color: p.text2 }}>✎</button>
            <button onClick={e => { e.stopPropagation(); onDelete(); }}
              className="text-xs px-1.5 py-0.5 rounded-md" style={{ backgroundColor: p.tagBg, color: "#c0392b" }}>✕</button>
          </div>
        </div>
        {ex.muscles.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {ex.muscles.slice(0, 4).map(m => (
              <span key={m} className="text-xs px-1.5 py-0.5 rounded-md" style={{ backgroundColor: p.tagBg, color: p.tagText }}>{m}</span>
            ))}
            {ex.muscles.length > 4 && <span className="text-xs px-1.5 py-0.5 rounded-md" style={{ backgroundColor: p.tagBg, color: p.text4 }}>+{ex.muscles.length - 4}</span>}
          </div>
        )}
        <div className="text-xs mt-1.5" style={{ color: p.text4 }}>{ex.defaultSets} 組 × {ex.defaultReps} 次</div>
      </div>
    </div>
  );
}

// ── DaySlot ───────────────────────────────────────────────────────────────────

function DaySlot({ slot, ex, onUpdate, onRemove, dragHandlers, bg, p }) {
  const [open, setOpen] = useState(false);
  if (!ex) return null;
  const cat = getCat(ex.category);
  const updateSet = (i, k, v) => onUpdate({ ...slot, sets: slot.sets.map((s, j) => j === i ? { ...s, [k]: v } : s) });
  const addSet    = () => { const last = slot.sets[slot.sets.length - 1] || { reps: 10, weight: "" }; onUpdate({ ...slot, sets: [...slot.sets, { ...last }] }); };
  const removeSet = (i) => { if (slot.sets.length <= 1) return; onUpdate({ ...slot, sets: slot.sets.filter((_, j) => j !== i) }); };

  return (
    <div className="rounded-xl overflow-hidden"
      style={{ backgroundColor: bg, borderTop:`1px solid ${p.border}`, borderRight:`1px solid ${p.border}`, borderBottom:`1px solid ${p.border}`, borderLeft:`3px solid ${cat.color}` }}
      {...dragHandlers}>
      <div className="flex items-center gap-2 px-3 py-2 cursor-pointer select-none" onClick={() => setOpen(o => !o)}>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold truncate" style={{ color: p.text1 }}>{ex.name}</div>
          <div className="text-xs" style={{ color: cat.color }}>{cat.label} · {slot.sets.length} 組</div>
        </div>
        <button onClick={e => { e.stopPropagation(); onRemove(); }}
          className="transition-opacity hover:opacity-60 text-sm w-5 h-5 flex items-center justify-center shrink-0"
          style={{ color: p.text4 }}>✕</button>
        <span className="text-xs" style={{ color: p.text4 }}>{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <div className="px-3 pb-3" style={{ borderTop: `1px solid ${p.border2}` }}>
          <div className="space-y-1.5 pt-2">
            {slot.sets.map((s, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="text-xs w-4 font-mono text-center" style={{ color: p.text4 }}>{i + 1}</span>
                <input type="number" min="1" value={s.reps} onChange={e => updateSet(i, "reps", e.target.value)}
                  className="w-14 rounded-lg px-2 py-1 text-xs text-center outline-none"
                  style={{ backgroundColor: p.setRowBg, border: `1px solid ${p.border}`, color: p.text1 }} />
                <span className="text-xs" style={{ color: p.text4 }}>次</span>
                <input type="number" min="0" step="2.5" placeholder="—" value={s.weight} onChange={e => updateSet(i, "weight", e.target.value)}
                  className="w-16 rounded-lg px-2 py-1 text-xs text-center outline-none"
                  style={{ backgroundColor: p.setRowBg, border: `1px solid ${p.border}`, color: p.text1 }} />
                <span className="text-xs" style={{ color: p.text4 }}>kg</span>
                {slot.sets.length > 1 && <button onClick={() => removeSet(i)} className="ml-auto text-xs" style={{ color: p.text4 }}>−</button>}
              </div>
            ))}
          </div>
          <button onClick={addSet} className="w-full py-1 rounded-lg text-xs mt-2"
            style={{ backgroundColor: p.addSetBg, color: p.addSetText }}>＋ 新增組</button>
        </div>
      )}
    </div>
  );
}

// ── DayColumn ─────────────────────────────────────────────────────────────────

function DayColumn({ day, exercises, onUpdate, onRemove, totalDays, dragRef, theme, p }) {
  const [over, setOver] = useState(false);
  const [overSlotIdx, setOverSlotIdx] = useState(null);
  const getEx = (id) => exercises.find(e => e.id === id);

  const dropInto = (insertIdx) => {
    const drag = dragRef.current;
    if (!drag) return;
    if (drag.type === "library") {
      const ex = exercises.find(e => e.id === drag.exerciseId);
      if (!ex) return;
      const slots = [...day.slots];
      slots.splice(insertIdx ?? slots.length, 0, newSlot(ex));
      onUpdate({ ...day, slots });
    } else if (drag.type === "slot") {
      const movedSlot = day.slots.find(s => s.id === drag.slotId) || drag.slotSnapshot;
      if (!movedSlot) return;
      const isSame = drag.dayId === day.id;
      if (isSame) {
        const slots = day.slots.filter(s => s.id !== drag.slotId);
        const ai = (insertIdx == null) ? slots.length : (drag.slotIdx < insertIdx ? insertIdx - 1 : insertIdx);
        slots.splice(Math.max(0, ai), 0, movedSlot);
        onUpdate({ ...day, slots });
      } else {
        const slots = [...day.slots];
        slots.splice(insertIdx ?? slots.length, 0, { ...movedSlot, id: uid() });
        onUpdate({ ...day, slots });
        drag.removeFromSource();
      }
    }
    dragRef.current = null;
  };

  const totalSets = day.slots.reduce((s, sl) => s + sl.sets.length, 0);
  const muscles = [...new Set(day.slots.flatMap(s => getEx(s.exerciseId)?.muscles || []))];
  const accentBg = theme.mode === "light" ? "#d4c4b010" : "#3b82f610";

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shrink-0 transition-all"
      style={{ width:"236px", backgroundColor: over ? theme.columnBg : theme.columnBg, border: over ? `1px solid ${theme.mode==="light"?"#a08878":"#3b82f660"}` : `1px solid ${p.border}` }}
      onDragOver={e => { e.preventDefault(); setOver(true); setOverSlotIdx(null); }}
      onDragLeave={() => { setOver(false); setOverSlotIdx(null); }}
      onDrop={e => { e.preventDefault(); setOver(false); setOverSlotIdx(null); dropInto(null); }}>
      <div className="px-4 py-3 shrink-0" style={{ borderBottom: `1px solid ${p.border}` }}>
        <div className="flex items-center justify-between">
          <input className="bg-transparent font-black text-sm outline-none w-28" style={{ color: p.text1 }}
            value={day.label} onChange={e => onUpdate({ ...day, label: e.target.value })} onClick={e => e.stopPropagation()} />
          {totalDays > 1 && <button onClick={onRemove} className="text-xs hover:opacity-60 transition-opacity" style={{ color: p.text4 }}>刪除</button>}
        </div>
        <div className="text-xs mt-0.5" style={{ color: p.text4 }}>{day.slots.length} 個動作 · {totalSets} 組</div>
        {muscles.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1.5">
            {muscles.slice(0, 3).map(m => (
              <span key={m} className="text-xs px-1.5 py-0.5 rounded-md" style={{ backgroundColor: p.tagBg, color: p.tagText }}>{m}</span>
            ))}
            {muscles.length > 3 && <span className="text-xs px-1.5 py-0.5 rounded-md" style={{ backgroundColor: p.tagBg, color: p.text4 }}>+{muscles.length-3}</span>}
          </div>
        )}
      </div>
      <div className="flex-1 overflow-y-auto p-2.5 space-y-2" style={{ minHeight:"160px", maxHeight:"58vh" }}>
        {day.slots.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 rounded-xl"
            style={{ border: `2px dashed ${p.border}`, color: p.dropText }}>
            <span className="text-xl mb-1">↓</span>
            <span className="text-xs">拖曳動作至此</span>
          </div>
        ) : (
          day.slots.map((slot, idx) => (
            <div key={slot.id}>
              <div className="rounded-full mb-1.5 transition-all"
                style={{ backgroundColor: overSlotIdx===idx ? (theme.mode==="light"?"#a08878":"#3b82f6") : "transparent", minHeight: overSlotIdx===idx ? "6px" : "4px" }}
                onDragOver={e => { e.preventDefault(); e.stopPropagation(); setOverSlotIdx(idx); }}
                onDragLeave={() => setOverSlotIdx(null)}
                onDrop={e => { e.preventDefault(); e.stopPropagation(); setOver(false); setOverSlotIdx(null); dropInto(idx); }} />
              <DaySlot slot={slot} ex={getEx(slot.exerciseId)} bg={theme.slotBg} p={p}
                onUpdate={u => onUpdate({ ...day, slots: day.slots.map(s => s.id===u.id ? u : s) })}
                onRemove={() => onUpdate({ ...day, slots: day.slots.filter(s => s.id!==slot.id) })}
                dragHandlers={{ draggable:true, onDragStart:() => {
                  dragRef.current = { type:"slot", dayId:day.id, slotId:slot.id, slotIdx:idx, slotSnapshot:slot,
                    removeFromSource: () => onUpdate({ ...day, slots: day.slots.filter(s => s.id!==slot.id) }) };
                }}} />
            </div>
          ))
        )}
        <div className="h-4 rounded-xl transition-all"
          style={{ backgroundColor: overSlotIdx===day.slots.length ? accentBg : "transparent" }}
          onDragOver={e => { e.preventDefault(); setOverSlotIdx(day.slots.length); }}
          onDragLeave={() => setOverSlotIdx(null)}
          onDrop={e => { e.preventDefault(); e.stopPropagation(); setOver(false); setOverSlotIdx(null); dropInto(null); }} />
      </div>
    </div>
  );
}

// ── Export Summary ────────────────────────────────────────────────────────────

function generateSummary(exercises, days, planName) {
  const getEx = (id) => exercises.find(e => e.id === id);
  const getCatLabel = (id) => CATEGORIES.find(c => c.id === id)?.label || id;
  const now = new Date().toLocaleDateString("zh-TW", { year:"numeric", month:"2-digit", day:"2-digit" });
  const totalSlots = days.reduce((s, d) => s + d.slots.length, 0);

  const lines = [
    `【訓練計畫摘要】`,
    `計畫名稱：${planName}`,
    `匯出日期：${now}`,
    `共 ${days.length} 個訓練日、${exercises.length} 個動作、${totalSlots} 個排程`,
    ``,
    `────────────────────────`,
    `動作庫（共 ${exercises.length} 個）`,
    `────────────────────────`,
  ];

  exercises.forEach((ex, i) => {
    lines.push(`${i + 1}. ${ex.name}（${getCatLabel(ex.category)}）`);
    if (ex.muscles.length) lines.push(`   部位：${ex.muscles.join("、")}`);
    lines.push(`   預設：${ex.defaultSets} 組 × ${ex.defaultReps} 次`);
  });

  days.forEach((day) => {
    lines.push(``);
    lines.push(`────────────────────────`);
    lines.push(`${day.label}（${day.slots.length} 個動作）`);
    lines.push(`────────────────────────`);
    if (day.slots.length === 0) {
      lines.push(`（尚未排入動作）`);
    } else {
      day.slots.forEach((slot, i) => {
        const ex = getEx(slot.exerciseId);
        if (!ex) return;
        lines.push(`${i + 1}. ${ex.name}（${getCatLabel(ex.category)}）`);
        if (ex.muscles.length) lines.push(`   部位：${ex.muscles.join("、")}`);
        slot.sets.forEach((s, si) => {
          const w = s.weight ? `@ ${s.weight} kg` : `（自重）`;
          lines.push(`   第 ${si + 1} 組：${s.reps} 次 ${w}`);
        });
      });
    }
  });

  lines.push(``);
  lines.push(`────────────────────────`);
  lines.push(`以上為目前訓練計畫的完整摘要，可貼至任何聊天室供 AI 參考。`);
  return lines.join("\n");
}

function ExportPanel({ exercises, days, planName, onClose, p }) {
  const [copied, setCopied] = useState(false);
  const text = generateSummary(exercises, days, planName);

  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.65)" }}>
      <div className="flex flex-col rounded-2xl shadow-2xl overflow-hidden"
        style={{ width: "520px", maxHeight: "82vh", backgroundColor: p.panelBg, border: `1px solid ${p.panelBorder}` }}>

        {/* Header */}
        <div className="flex items-start justify-between px-5 py-4 shrink-0" style={{ borderBottom: `1px solid ${p.border}` }}>
          <div>
            <div className="font-black text-base" style={{ color: p.text1 }}>匯出計畫摘要</div>
            <div className="text-xs mt-0.5" style={{ color: p.text3 }}>
              複製以下內容，貼到任一聊天室，AI 即可讀懂你的完整計畫
            </div>
          </div>
          <button onClick={onClose} className="w-7 h-7 flex items-center justify-center rounded-lg text-sm shrink-0 ml-4"
            style={{ backgroundColor: p.btnBg, color: p.text3 }}>✕</button>
        </div>

        {/* How to use hint */}
        <div className="px-5 py-3 shrink-0" style={{ backgroundColor: p.inputBg, borderBottom: `1px solid ${p.border}` }}>
          <div className="text-xs font-bold mb-1" style={{ color: p.text2 }}>使用方式</div>
          <ol className="text-xs space-y-0.5" style={{ color: p.text3 }}>
            <li>1. 點擊「複製摘要」</li>
            <li>2. 前往任何聊天室（重訓、功能性訓練、飲食、睡眠⋯）</li>
            <li>3. 將摘要貼入對話，AI 即可針對你的計畫給出建議或幫你直接修改</li>
          </ol>
        </div>

        {/* Text area */}
        <div className="flex-1 overflow-y-auto p-4">
          <pre className="text-xs whitespace-pre-wrap leading-5 select-all"
            style={{ color: p.text2, fontFamily: "monospace" }}>
            {text}
          </pre>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 flex gap-2 shrink-0" style={{ borderTop: `1px solid ${p.border}` }}>
          <button onClick={onClose} className="flex-1 py-2 rounded-xl text-sm"
            style={{ backgroundColor: p.btnBg, color: p.btnText }}>關閉</button>
          <button onClick={copy}
            className="flex-1 py-2 rounded-xl text-sm font-bold text-white transition-colors"
            style={{ backgroundColor: copied ? "#1e7a45" : "#7a5a45" }}>
            {copied ? "✓ 已複製！" : "📋 複製摘要"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [exercises, setExercises] = useState([]);
  const [days, setDays]           = useState([newDay(0), newDay(1), newDay(2)]);
  const [planName, setPlanName]   = useState("我的訓練計畫");
  const [loaded, setLoaded]       = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing]     = useState(null);
  const [savedFlash, setSaved]    = useState(false);
  const [showPanel, setShowPanel]   = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [theme, setTheme]           = useState({ ...THEME_DEFAULTS });
  const dragRef = useRef(null);

  // Derive text/UI palette from dark/light mode
  const p = theme.mode === "light" ? LIGHT_PALETTE : DARK_PALETTE;

  useEffect(() => {
    (async () => {
      const [d, t] = await Promise.all([hydrate(), hydrateTheme()]);
      if (d) { setExercises(d.exercises||[]); setDays(d.days||[newDay(0)]); setPlanName(d.planName||"我的訓練計畫"); }
      if (t) setTheme({ ...THEME_DEFAULTS, ...t });
      setLoaded(true);
    })();
  }, []);

  useEffect(() => { if (loaded) persist({ exercises, days, planName }); }, [exercises, days, planName, loaded]);
  useEffect(() => { if (loaded) persistTheme(theme); }, [theme, loaded]);

  const saveEx = (ex) => setExercises(prev => prev.some(e => e.id===ex.id) ? prev.map(e => e.id===ex.id ? ex : e) : [...prev, ex]);
  const delEx  = (id) => { setExercises(p => p.filter(e => e.id!==id)); setDays(p => p.map(d => ({ ...d, slots: d.slots.filter(s => s.exerciseId!==id) }))); };
  const updDay = (d)  => setDays(prev => prev.map(x => x.id===d.id ? d : x));
  const addDay = ()   => { if (days.length < 7) setDays(prev => [...prev, newDay(prev.length)]); };
  const delDay = (id) => setDays(prev => prev.filter(d => d.id!==id));

  const totalSlots = days.reduce((s, d) => s + d.slots.length, 0);
  const accentBtn = theme.mode === "light" ? "#7a5a45" : "#3b82f6";

  return (
    <div className="h-screen flex flex-col overflow-hidden transition-colors"
      style={{ backgroundColor: theme.appBg, fontFamily: "'Trebuchet MS', sans-serif" }}>

      {/* Top bar */}
      <div className="shrink-0 flex items-center gap-4 px-4 py-3 z-20"
        style={{ backgroundColor: theme.topBarBg + "ee", borderBottom:`1px solid ${p.border}`, backdropFilter:"blur(8px)" }}>
        <span className="text-xl select-none">💪</span>
        <input value={planName} onChange={e => setPlanName(e.target.value)}
          className="flex-1 bg-transparent font-black text-lg outline-none min-w-0"
          style={{ color: p.text1 }} />
        <div className="flex items-center gap-2 shrink-0">
          <div className="text-xs hidden sm:block" style={{ color: p.text4 }}>{days.length} 天 · {totalSlots} 個動作</div>

          {/* Day adjuster */}
          <div className="flex items-center rounded-xl px-2 py-1 gap-1" style={{ backgroundColor: p.btnBg }}>
            <button onClick={() => days.length > 1 && delDay(days[days.length-1].id)} disabled={days.length<=1}
              className="w-7 h-7 rounded-lg text-sm font-bold disabled:opacity-30"
              style={{ color:"#c0392b", backgroundColor:"#c0392b22" }}>−</button>
            <span className="text-sm font-bold px-2" style={{ color: p.text1 }}>{days.length} 天</span>
            <button onClick={addDay} disabled={days.length>=7}
              className="w-7 h-7 rounded-lg text-sm font-bold disabled:opacity-30"
              style={{ color:"#1e7a45", backgroundColor:"#1e7a4522" }}>＋</button>
          </div>

          {/* Color panel toggle */}
          <button onClick={() => setShowPanel(v => !v)}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-base transition-all hover:scale-105"
            title="背景顏色設定"
            style={{ backgroundColor: showPanel ? (theme.mode==="light"?"#7a5a45":"#6366f1") : p.btnBg, color: showPanel ? "#fff" : p.text3, border:`1px solid ${p.border}` }}>
            🎨
          </button>

          {/* Export summary */}
          <button onClick={() => setShowExport(true)}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-base transition-all hover:scale-105"
            title="匯出計畫摘要（供其他聊天室使用）"
            style={{ backgroundColor: p.btnBg, color: p.text3, border:`1px solid ${p.border}` }}>
            📋
          </button>

          {/* Save */}
          <button onClick={async () => { await persist({ exercises, days, planName }); setSaved(true); setTimeout(() => setSaved(false), 2000); }}
            className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-colors"
            style={{ backgroundColor: savedFlash ? "#1e7a45" : accentBtn }}>
            {savedFlash ? "✓ 已儲存" : "儲存"}
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 flex overflow-hidden">

        {/* Sidebar */}
        <div className="shrink-0 flex flex-col transition-colors" style={{ width:"210px", borderRight:`1px solid ${p.border}`, backgroundColor: theme.sidebarBg }}>
          <div className="px-3 py-3 shrink-0" style={{ borderBottom:`1px solid ${p.border}` }}>
            <div className="text-xs font-bold mb-2" style={{ color: p.text3 }}>動作庫 ({exercises.length})</div>
            <button onClick={() => { setEditing(null); setShowModal(true); }}
              className="w-full py-2 rounded-xl text-xs font-bold text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: accentBtn }}>
              ＋ 新增動作字卡
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2.5 space-y-2">
            {exercises.length === 0 ? (
              <div className="text-center py-10 text-xs" style={{ color: p.text4 }}>
                <div className="text-3xl mb-2">🏋️</div>
                <p>新增動作後</p><p>拖曳到訓練日</p>
              </div>
            ) : exercises.map(ex => (
              <LibraryCard key={ex.id} ex={ex} bg={theme.libCardBg} p={p}
                onEdit={() => { setEditing(ex); setShowModal(true); }}
                onDelete={() => delEx(ex.id)}
                onDragStart={() => { dragRef.current = { type:"library", exerciseId:ex.id }; }} />
            ))}
          </div>
          {exercises.length > 0 && (
            <div className="px-3 py-2 shrink-0 text-center text-xs" style={{ color: p.text4, borderTop:`1px solid ${p.border2}` }}>
              ← 拖曳至訓練日
            </div>
          )}
        </div>

        {/* Kanban */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden">
          <div className="flex gap-3 p-4 h-full" style={{ minWidth:"min-content" }}>
            {days.map(day => (
              <DayColumn key={day.id} day={day} exercises={exercises} theme={theme} p={p}
                onUpdate={updDay} onRemove={() => delDay(day.id)}
                totalDays={days.length} dragRef={dragRef} />
            ))}
            {days.length < 7 && (
              <button onClick={addDay}
                className="shrink-0 self-start flex flex-col items-center justify-center rounded-2xl gap-1 transition-opacity hover:opacity-60"
                style={{ width:"96px", height:"110px", border:`2px dashed ${p.border}`, color:p.text4, backgroundColor:"transparent" }}>
                <span className="text-2xl">＋</span>
                <span className="text-xs">新增訓練日</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {showPanel && <ColorPanel theme={theme} onChange={t => setTheme(t)} onClose={() => setShowPanel(false)} p={p} />}
      {showExport && <ExportPanel exercises={exercises} days={days} planName={planName} p={p} onClose={() => setShowExport(false)} />}
      {showModal && <ExerciseModal initial={editing} onSave={saveEx} p={p}
        onClose={() => { setShowModal(false); setEditing(null); }} />}
    </div>
  );
}
