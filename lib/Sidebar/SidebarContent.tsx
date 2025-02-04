import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IContent } from './interfaces';

const SidebarContent: React.FC<IContent> = ({ children, className }) => {
  return (
    <div
      aria-label="Content"
      className={twMerge('sidebar__content', className)}
    >
      {children}
    </div>
  );
};

export default SidebarContent;
