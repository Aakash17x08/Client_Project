import { useState } from 'react';
import { Home, FolderOpen, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const navigationItems = [
  { title: 'Home', href: '#home', icon: Home },
  { title: 'Projects', href: '#projects', icon: FolderOpen },
  { title: 'Contact', href: '#contact', icon: Mail },
];

export function PortfolioSidebar() {
  const { state } = useSidebar();
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const isCollapsed = state === 'collapsed';

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <Sidebar
      className={`${
        isCollapsed ? 'w-16' : 'w-64'
      } transition-all duration-300 bg-card/50 backdrop-blur-lg border-r border-border/50`}
      collapsible="icon"
    >
      <SidebarContent className="flex flex-col h-full">
        {/* Logo/Brand */}
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center justify-center">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-[var(--shadow-glow)] ${
                theme === 'dark'
                  ? 'bg-[var(--gradient-primary)] text-white'
                  : 'bg-[var(--gradient-primary-light)] text-black'
              }`}
            >
              RC
            </div>
            {!isCollapsed && (
              <div className="ml-4 animate-fade-in">
                <h2 className="font-bold text-lg text-gradient">Raj Choudhary</h2>
                <p className="text-sm text-muted-foreground">Video Editor</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup className="flex-1 p-4">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full rounded-lg transition-all duration-300 ${
                        isActive
                          ? theme === 'dark'
                            ? 'bg-[var(--gradient-primary)] text-white shadow-[var(--shadow-glow)]'
                            : 'bg-muted text-black font-semibold'
                          : 'hover:bg-accent/50'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Theme Toggle */}
        <div className="p-4 border-t border-border/50">
          <button
            onClick={toggleTheme}
            className={`w-full flex items-center ${
              isCollapsed ? 'justify-center' : 'justify-start'
            } p-3 rounded-lg bg-secondary/50 hover:bg-accent/50 transition-all duration-300 hover:scale-105`}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            {!isCollapsed && (
              <span className="ml-3">
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </span>
            )}
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
