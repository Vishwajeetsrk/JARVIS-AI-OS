import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const repos = [
      {
        id: "JARVIS-AI-OS",
        name: "JARVIS-AI-OS",
        full_name: "Vishwajeetsrk/JARVIS-AI-OS",
        description: "Autonomous Personal Intelligence Operating System with multi-agent orchestration, live voice pipeline, and universal project workspaces.",
        html_url: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
        stars: 128,
        forks: 24,
        language: "TypeScript",
        updated_at: new Date().toISOString(),
        status: "synced",
      },
      {
        id: "Learnify-Adaptive",
        name: "Learnify-Adaptive",
        full_name: "Vishwajeetsrk/Learnify-Adaptive",
        description: "Next-generation adaptive AI learning portal with real-time simulations and analytics.",
        html_url: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
        stars: 45,
        forks: 8,
        language: "TypeScript",
        updated_at: new Date().toISOString(),
        status: "synced",
      },
      {
        id: "StaffU-CRM-Panel",
        name: "StaffU-CRM-Panel",
        full_name: "Vishwajeetsrk/StaffU-CRM-Panel",
        description: "Enterprise CRM and lead pipeline management dashboard with automated AI qualification.",
        html_url: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
        stars: 32,
        forks: 5,
        language: "TypeScript",
        updated_at: new Date().toISOString(),
        status: "synced",
      },
      {
        id: "APEX-UI",
        name: "APEX-UI",
        full_name: "Vishwajeetsrk/APEX-UI",
        description: "Flagship 3D Particle Orb & Reasoning Constellation Interface for JARVIS AI OS.",
        html_url: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
        stars: 86,
        forks: 14,
        language: "TypeScript",
        updated_at: new Date().toISOString(),
        status: "synced",
      },
    ];

    return NextResponse.json({
      owner: "Vishwajeetsrk",
      profile_url: "https://github.com/Vishwajeetsrk",
      repositories: repos,
      total_repos: repos.length,
      last_sync: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch GitHub overview" }, { status: 500 });
  }
}
