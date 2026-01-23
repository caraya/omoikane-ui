import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import Toolbar from '../Toolbar';
import CustomGrid, { GridItem } from '../CustomGrid';

export interface SidebarLayoutProps {
  sidebar?: React.ReactNode;
  toolbar?: React.ReactNode;
  tabs?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ sidebar, toolbar, tabs, children, className }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn('w-full h-full flex flex-col overflow-hidden', className)}>
      <div className="flex-shrink-0">
        <Toolbar className="px-4 py-2">
          <Toolbar.Button onClick={() => setCollapsed(!collapsed)} aria-pressed={collapsed}>
            {collapsed ? 'Open' : 'Close'}
          </Toolbar.Button>
          <div className="flex-1" />
          {toolbar}
        </Toolbar>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <aside
          className={cn(
            'bg-white border-r overflow-auto transition-all duration-200 ease-in-out',
            collapsed ? 'w-0 opacity-0' : 'w-64',
            'hidden md:block'
          )}
          aria-hidden={collapsed}
        >
          <div className="p-4">{sidebar}</div>
        </aside>

        <main className="flex-1 overflow-auto p-4">
          {tabs}
          <div className="mt-4">
            <CustomGrid columns={3} gap={12}>
              {children || (
                <>
                  <GridItem col={1}><div className="p-4 border rounded">Main content A</div></GridItem>
                  <GridItem col={2}><div className="p-4 border rounded">Main content B</div></GridItem>
                  <GridItem col={3}><div className="p-4 border rounded">Main content C</div></GridItem>
                </>
              )}
            </CustomGrid>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
