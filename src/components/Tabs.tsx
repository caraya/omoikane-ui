import React, { createContext, useContext, useId, useState, useMemo } from 'react';

type TabsContextType = {
  selectedIndex: number;
  setSelectedIndex: (i: number) => void;
  idBase: string;
};

const TabsContext = createContext<TabsContextType | null>(null);

export interface TabsProps {
  children: React.ReactNode;
  defaultIndex?: number;
  value?: number;
  onChange?: (index: number) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> & {
  List: React.FC<{ children: React.ReactNode; className?: string }>;
  Tab: React.FC<{ children: React.ReactNode; index?: number; className?: string }>;
  Panels: React.FC<{ children: React.ReactNode; className?: string }>;
  Panel: React.FC<{ children: React.ReactNode; index?: number; className?: string }>;
} = ({ children, defaultIndex = 0, value, onChange, className }) => {
  const isControlled = typeof value === 'number';
  const [internal, setInternal] = useState(defaultIndex);
  const selectedIndex = isControlled ? (value as number) : internal;
  const setSelectedIndex = (i: number) => {
    if (!isControlled) setInternal(i);
    onChange?.(i);
  };

  const idBase = useId();

  const ctx = useMemo(() => ({ selectedIndex, setSelectedIndex, idBase }), [selectedIndex, setSelectedIndex, idBase]);

  return (
    <TabsContext.Provider value={ctx}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabList: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <div role="tablist" aria-orientation="horizontal" className={className}>
      {children}
    </div>
  );
};

export const Tab: React.FC<{ children: React.ReactNode; index?: number; className?: string }> = ({ children, index, className }) => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tab must be used within Tabs');
  const { selectedIndex, setSelectedIndex, idBase } = ctx;
  const idx = typeof index === 'number' ? index : 0;
  const selected = selectedIndex === idx;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!ctx) return;
    const total = (e.currentTarget.parentElement?.querySelectorAll('[role="tab"]') || []).length;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSelectedIndex((selectedIndex + 1) % total);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSelectedIndex((selectedIndex - 1 + total) % total);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSelectedIndex(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSelectedIndex(total - 1);
    }
  };

  return (
    <button
      role="tab"
      aria-selected={selected}
      aria-controls={`${idBase}-panel-${idx}`}
      id={`${idBase}-tab-${idx}`}
      tabIndex={selected ? 0 : -1}
      onKeyDown={handleKeyDown}
      onClick={() => setSelectedIndex(idx)}
      className={className}
    >
      {children}
    </button>
  );
};

export const TabPanels: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const TabPanel: React.FC<{ children: React.ReactNode; index?: number; className?: string }> = ({ children, index, className }) => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('TabPanel must be used within Tabs');
  const { selectedIndex, idBase } = ctx;
  const idx = typeof index === 'number' ? index : 0;
  const hidden = selectedIndex !== idx;
  return (
    <div
      role="tabpanel"
      id={`${idBase}-panel-${idx}`}
      aria-labelledby={`${idBase}-tab-${idx}`}
      hidden={hidden}
      className={className}
    >
      {children}
    </div>
  );
};

// Attach compound components
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;

export default Tabs;
