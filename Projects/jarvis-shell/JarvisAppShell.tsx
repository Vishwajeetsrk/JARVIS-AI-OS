import React, { useState } from 'react';
import './JarvisAppShell.css';

export type ShellState = 'desktop-normal' | 'desktop-needs-input' | 'mobile-phone';

export interface JarvisAppShellProps {
  initialState?: ShellState;
}

export const JarvisAppShell: React.FC<JarvisAppShellProps> = ({ initialState = 'desktop-normal' }) => {
  const [shellState, setShellState] = useState<ShellState>(initialState);
  const [activeTab, setActiveTab] = useState<'chat' | 'code' | 'design' | 'cowork'>('chat');
  const [activeProject, setActiveProject] = useState('AgencyOS');

  const isNeedsInput = shellState === 'desktop-needs-input';
  const isMobile = shellState === 'mobile-phone';

  return (
    <div className={`jarvis-shell-root ${isMobile ? 'is-mobile-frame' : ''}`}>
      {/* State Switcher Controls */}
      <div className="shell-state-switcher">
        <button
          className={shellState === 'desktop-normal' ? 'btn-state active' : 'btn-state'}
          onClick={() => setShellState('desktop-normal')}
        >
          Desktop Normal
        </button>
        <button
          className={shellState === 'desktop-needs-input' ? 'btn-state active-amber' : 'btn-state'}
          onClick={() => setShellState('desktop-needs-input')}
        >
          Needs Input (Amber)
        </button>
        <button
          className={shellState === 'mobile-phone' ? 'btn-state active-mobile' : 'btn-state'}
          onClick={() => setShellState('mobile-phone')}
        >
          Mobile Frame
        </button>
      </div>

      <div className="jarvis-app-shell">
        {/* Top Header */}
        <header className="shell-header">
          <div className="header-left">
            <svg className="claude-star" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"/>
            </svg>
            <span className="app-title">Jarvis Console</span>
            <span className="model-tag">Claude 3.5 Sonnet</span>
          </div>

          <div className="header-right">
            <div className={`status-dot ${isNeedsInput ? 'dot-amber' : 'dot-sage'}`}>
              ● {isNeedsInput ? 'NEEDS INPUT' : 'SYSTEM: READY'}
            </div>
            <div className="status-dot dot-terracotta">◈ MEMORY: SYNCED</div>
          </div>
        </header>

        <div className="shell-body">
          {/* Left Sidebar */}
          {!isMobile && (
            <aside className="shell-sidebar">
              <button className="btn-new-chat">+ New Chat</button>

              <div className="nav-section">
                <div className="section-title">PROJECTS</div>
                {['Learnify AI', 'AgencyOS', 'DreamSync', 'SkillForge', 'Client Work'].map((proj) => (
                  <div
                    key={proj}
                    className={`nav-item ${activeProject === proj ? 'active-item' : ''}`}
                    onClick={() => setActiveProject(proj)}
                  >
                    📁 {proj}
                  </div>
                ))}
              </div>

              <div className="nav-section">
                <div className="section-title">RECENT CHATS</div>
                <div className="nav-item">Subscription Upgrade Flow</div>
                <div className="nav-item">Razorpay Webhook Audit</div>
                <div className="nav-item">Design Tokens Standardization</div>
              </div>
            </aside>
          )}

          {/* Main Surface */}
          <main className="shell-main">
            {/* Mode Tabs */}
            {!isMobile && (
              <div className="mode-tabs">
                {(['chat', 'code', 'design', 'cowork'] as const).map((tab) => (
                  <button
                    key={tab}
                    className={`mode-tab ${activeTab === tab ? 'active-tab' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>
            )}

            {/* Conversation Content */}
            <div className="chat-timeline">
              <div className="chat-card user-card">
                <div className="card-tag">USER</div>
                <div className="card-body">"Add subscription upgrade flow to AgencyOS with Razorpay reconciliation."</div>
              </div>

              {isNeedsInput ? (
                <div className="chat-card amber-input-card">
                  <div className="card-tag tag-amber">test-agent (NEEDS INPUT)</div>
                  <div className="card-body">
                    <strong>Clarification Required:</strong> Should Razorpay payment signatures be verified synchronously during webhook reception or queued via Redis worker?
                  </div>
                </div>
              ) : (
                <div className="chat-card builder-card">
                  <div className="card-tag tag-builder">saas-builder</div>
                  <div className="card-body">
                    PRD & TRD updated. Created webhook schema in <code>src/mastra/tools/agencyos-billing-webhook.ts</code> with Zod payload validation.
                  </div>
                </div>
              )}
            </div>

            {/* Composer Toolbar */}
            {!isMobile && (
              <div className="composer-toolbar">
                <button className="toolbar-btn">⚡ 13 Skills Active</button>
                <button className="toolbar-btn">🔌 MCP Connectors</button>
                <button className="toolbar-btn">🌐 Web Search: ON</button>
                <button className="toolbar-btn">📎 Attach File</button>
              </div>
            )}

            {/* Main Input Composer Bar */}
            <div className="composer-bar">
              <button className="mic-btn">🎙️</button>
              <input
                type="text"
                className="composer-input"
                defaultValue={isNeedsInput ? "Option A: Verify signatures synchronously during webhook reception..." : "Run security audit on agencyos-billing-webhook.ts..."}
              />
              <button className="send-btn">➔</button>
            </div>
          </main>
        </div>

        {/* Mobile Phone Home Indicator Bar */}
        {isMobile && <div className="home-indicator"></div>}
      </div>
    </div>
  );
};
