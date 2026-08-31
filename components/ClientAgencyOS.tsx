"use client";

import { useEffect, useState } from "react";
import {
  Briefcase, Search, Filter, Sparkles, Send, Copy, Check, CheckCircle2,
  DollarSign, Clock, Users, ArrowUpRight, FileText, ChevronRight, X,
  Building, Star, ShieldCheck, Zap, Layers, Plus, TrendingUp, CreditCard, RefreshCw, Mail, AlertTriangle
} from "lucide-react";
import { INITIAL_CLIENT_GIGS, SERVICE_PACKAGES } from "@/lib/agency/clientDiscovery";
import { generateClientProposal } from "@/lib/agency/proposalGenerator";
import { generateOutreachDraft, OutreachDraft } from "@/lib/agency/b2bOutreach";
import { ClientDeal, ClientGig, DealStatus, FreelanceServiceCategory, InvoiceItem, ProposalDraft } from "@/lib/agency/types";

export default function ClientAgencyOS() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"discovery" | "proposals" | "pipeline" | "services" | "invoices">("discovery");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [gigs, setGigs] = useState<ClientGig[]>(INITIAL_CLIENT_GIGS);
  const [selectedGig, setSelectedGig] = useState<ClientGig>(INITIAL_CLIENT_GIGS[0]);
  const [generatedProposal, setGeneratedProposal] = useState<ProposalDraft>(() => generateClientProposal(INITIAL_CLIENT_GIGS[0]));
  const [copiedProposal, setCopiedProposal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Level 6 Human Approval Gate State for Outreach
  const [outreachDraft, setOutreachDraft] = useState<OutreachDraft | null>(null);
  const [gateApproved, setGateApproved] = useState(false);

  // Client Pipeline Deals State
  const [deals, setDeals] = useState<ClientDeal[]>([
    {
      id: "deal_1",
      clientName: "David K.",
      company: "EduSphere Labs",
      projectTitle: "Next.js 15 EdTech Web App",
      category: "website_design",
      dealValueINR: 210000,
      status: "active",
      contractDate: "Aug 24, 2026",
      nextFollowup: "Milestone 2 Demo (Tomorrow)",
    },
    {
      id: "deal_2",
      clientName: "Elena Rostova",
      company: "GlamourTech Mobile",
      projectTitle: "150-Screen Mobile App UI",
      category: "ui_ux",
      dealValueINR: 150000,
      status: "negotiation",
      contractDate: "Aug 28, 2026",
      nextFollowup: "Review Custom 3D Component Scope",
    },
    {
      id: "deal_3",
      clientName: "Pooja Sharma",
      company: "EduCare Foundation",
      projectTitle: "Salesforce Donation Reconciliation",
      category: "salesforce_data",
      dealValueINR: 100000,
      status: "delivered",
      contractDate: "Aug 15, 2026",
      nextFollowup: "Awaiting final invoice signoff",
    },
  ]);

  // Invoices State
  const [invoices, setInvoices] = useState<InvoiceItem[]>([
    {
      id: "INV-2026-01",
      clientName: "EduSphere Labs (David K.)",
      projectTitle: "Milestone 1: Architectural Blueprint",
      amountINR: 84000,
      status: "paid",
      dueDate: "Aug 26, 2026",
      paymentGateway: "Razorpay",
    },
    {
      id: "INV-2026-02",
      clientName: "EduCare Foundation (Pooja S.)",
      projectTitle: "Salesforce 200k Records Batch Reconcile",
      amountINR: 100000,
      status: "paid",
      dueDate: "Aug 29, 2026",
      paymentGateway: "Cashfree",
    },
    {
      id: "INV-2026-03",
      clientName: "GlamourTech (Elena R.)",
      projectTitle: "Mobile App 50-Screen Milestone Deposit",
      amountINR: 60000,
      status: "sent",
      dueDate: "Sep 05, 2026",
      paymentGateway: "Stripe",
    },
  ]);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("OPEN_AGENCY_OS", handleOpen);
    return () => window.removeEventListener("OPEN_AGENCY_OS", handleOpen);
  }, []);

  const handleRefreshScraper = async () => {
    setRefreshing(true);
    try {
      const res = await fetch(`/api/agency/scrape?category=${selectedCategory}&query=${encodeURIComponent(searchQuery)}`);
      const data = await res.json();
      if (data.gigs) setGigs(data.gigs);
    } catch {}
    finally {
      setRefreshing(false);
    }
  };

  const filteredGigs = gigs.filter((gig) => {
    const matchesCat = selectedCategory === "all" || gig.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      gig.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gig.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gig.requiredSkills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleSelectGig = (gig: ClientGig) => {
    setSelectedGig(gig);
    setGeneratedProposal(generateClientProposal(gig));
    setActiveTab("proposals");
  };

  const handleLaunchOutreachGate = (gig: ClientGig) => {
    const draft = generateOutreachDraft(gig);
    setOutreachDraft(draft);
    setGateApproved(false);
  };

  const handleConfirmDispatchEmail = () => {
    setGateApproved(true);
    setTimeout(() => {
      setOutreachDraft(null);
      setGateApproved(false);
    }, 2500);
  };

  const handleCopyProposal = () => {
    navigator.clipboard.writeText(generatedProposal.pitchText);
    setCopiedProposal(true);
    setTimeout(() => setCopiedProposal(false), 2000);
  };

  const totalEarnedRevenue = invoices
    .filter((inv) => inv.status === "paid")
    .reduce((sum, inv) => sum + inv.amountINR, 0);

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(2, 5, 14, 0.92)",
            backdropFilter: "blur(24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            style={{
              width: "min(1120px, 96vw)",
              maxHeight: "90vh",
              background: "#050d1a",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              borderRadius: 24,
              boxShadow: "0 0 70px rgba(16, 185, 129, 0.25), 0 24px 60px rgba(0,0,0,0.95)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "20px 28px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: "linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(5,13,26,0.6) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <img
                  src="/main-logo.png"
                  alt="NEXORA"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)",
                    objectFit: "contain",
                  }}
                />
                <div>
                  <h2 style={{ fontSize: 19, fontWeight: 800, margin: 0, color: "#ffffff", fontFamily: "var(--font-display)" }}>
                    NEXORA Client Finder & Freelance Agency OS
                  </h2>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", margin: 0, marginTop: 2 }}>
                    Live Gig Scraper · AI Proposal Generator · Level 6 Outreach Gate · CRM & Invoices
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div
              style={{
                display: "flex",
                gap: 6,
                padding: "10px 28px",
                background: "rgba(0,0,0,0.4)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                overflowX: "auto",
              }}
            >
              {[
                { id: "discovery", label: "Live Client Discovery Feed", icon: Search },
                { id: "proposals", label: "Proposal Studio", icon: Send },
                { id: "pipeline", label: "Client CRM Pipeline", icon: Layers },
                { id: "services", label: "Services & Rates Catalog", icon: DollarSign },
                { id: "invoices", label: "Invoices & Revenue", icon: CreditCard },
              ].map((t) => {
                const Icon = t.icon;
                const active = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id as any)}
                    style={{
                      background: active ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${active ? "#10b981" : "rgba(255,255,255,0.08)"}`,
                      borderRadius: 12,
                      padding: "8px 16px",
                      color: active ? "#10b981" : "rgba(255,255,255,0.65)",
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Icon size={14} />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB BODY */}
            <div style={{ flex: 1, overflowY: "auto", padding: 24 }}>
              {/* TAB 1: CLIENT DISCOVERY FEED */}
              {activeTab === "discovery" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {/* Filter & Live Refresh Bar */}
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {[
                        { id: "all", label: "All Gigs" },
                        { id: "website_design", label: "Web Design" },
                        { id: "ui_ux", label: "UI/UX Apps" },
                        { id: "ai_agents", label: "AI Agents" },
                        { id: "python_automation", label: "Python ETL" },
                        { id: "salesforce_data", label: "Salesforce CRM" },
                        { id: "content_writing", label: "Content & Blogs" },
                        { id: "video_ads", label: "Video Ads" },
                      ].map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setSelectedCategory(c.id)}
                          style={{
                            background: selectedCategory === c.id ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.04)",
                            border: `1px solid ${selectedCategory === c.id ? "#10b981" : "rgba(255,255,255,0.08)"}`,
                            borderRadius: 10,
                            padding: "6px 12px",
                            fontSize: 11.5,
                            fontWeight: 600,
                            color: selectedCategory === c.id ? "#10b981" : "rgba(255,255,255,0.7)",
                            cursor: "pointer",
                          }}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <button
                        onClick={handleRefreshScraper}
                        disabled={refreshing}
                        style={{
                          background: "rgba(16,185,129,0.15)",
                          border: "1px solid rgba(16,185,129,0.4)",
                          borderRadius: 10,
                          padding: "6px 12px",
                          color: "#10b981",
                          fontSize: 11.5,
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        <RefreshCw size={13} className={refreshing ? "animate-spin" : ""} />
                        <span>{refreshing ? "Scraping Live..." : "Live Refresh Feed"}</span>
                      </button>

                      <div style={{ position: "relative", minWidth: 200 }}>
                        <Search size={14} style={{ position: "absolute", left: 10, top: 9, color: "rgba(255,255,255,0.4)" }} />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search gigs or skills..."
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: 10,
                            padding: "6px 12px 6px 32px",
                            color: "#ffffff",
                            fontSize: 12,
                            outline: "none",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Gigs List */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 14 }}>
                    {filteredGigs.map((gig) => (
                      <div
                        key={gig.id}
                        style={{
                          background: "rgba(6,16,32,0.8)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: 16,
                          padding: 18,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          gap: 14,
                        }}
                      >
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                            <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 6, background: "rgba(16,185,129,0.15)", border: "1px solid #10b981", color: "#10b981", fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                              {gig.platform} · {gig.matchScore}% Match
                            </span>
                            <span style={{ fontSize: 13, fontWeight: 800, color: "#34d399", fontFamily: "var(--font-mono)" }}>
                              ${gig.budget.amount} {gig.budget.type}
                            </span>
                          </div>

                          <h3 style={{ fontSize: 14.5, fontWeight: 700, color: "#ffffff", margin: "10px 0 6px" }}>
                            {gig.title}
                          </h3>

                          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.45, margin: 0 }}>
                            {gig.description}
                          </p>
                        </div>

                        <div>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
                            {gig.requiredSkills.map((s) => (
                              <span key={s} style={{ fontSize: 10, padding: "2px 6px", borderRadius: 6, background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.7)" }}>
                                {s}
                              </span>
                            ))}
                          </div>

                          <div style={{ display: "flex", gap: 8 }}>
                            <button
                              onClick={() => handleSelectGig(gig)}
                              style={{
                                flex: 1,
                                background: "rgba(16,185,129,0.15)",
                                border: "1px solid rgba(16,185,129,0.4)",
                                borderRadius: 10,
                                padding: "8px 12px",
                                color: "#10b981",
                                fontWeight: 700,
                                fontSize: 11.5,
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 6,
                              }}
                            >
                              <Sparkles size={13} />
                              <span>1-Click Proposal</span>
                            </button>

                            <button
                              onClick={() => handleLaunchOutreachGate(gig)}
                              style={{
                                background: "rgba(59,130,246,0.15)",
                                border: "1px solid rgba(59,130,246,0.4)",
                                borderRadius: 10,
                                padding: "8px 12px",
                                color: "#60a5fa",
                                fontWeight: 700,
                                fontSize: 11.5,
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              }}
                              title="Direct B2B Outreach Email (Level 6 Gated)"
                            >
                              <Mail size={13} />
                              <span>Outreach</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: PROPOSAL STUDIO */}
              {activeTab === "proposals" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 16, padding: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: "#ffffff" }}>
                        Proposal for: {generatedProposal.projectTitle}
                      </h3>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>
                        Client: {generatedProposal.clientName} · Budget: ${generatedProposal.proposedBudget} · Timeline: {generatedProposal.estimatedDays} Days
                      </div>
                    </div>

                    <button
                      onClick={handleCopyProposal}
                      style={{
                        background: copiedProposal ? "#10b981" : "rgba(16,185,129,0.2)",
                        border: "1px solid #10b981",
                        borderRadius: 10,
                        padding: "8px 16px",
                        color: copiedProposal ? "#000000" : "#10b981",
                        fontWeight: 800,
                        fontSize: 12,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      {copiedProposal ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedProposal ? "Proposal Copied!" : "Copy Pitch"}</span>
                    </button>
                  </div>

                  <div style={{ background: "rgba(6,16,32,0.85)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 20 }}>
                    <pre style={{ margin: 0, fontSize: 12.5, fontFamily: "var(--font-mono)", color: "#ffffff", whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
                      {generatedProposal.pitchText}
                    </pre>
                  </div>

                  <div>
                    <h4 style={{ margin: "0 0 10px", fontSize: 13, fontWeight: 800, color: "#10b981", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                      Suggested Milestone Breakdown
                    </h4>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10 }}>
                      {generatedProposal.milestones.map((m, i) => (
                        <div key={i} style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: 14 }}>
                          <div style={{ fontSize: 12, fontWeight: 700, color: "#ffffff" }}>{m.name}</div>
                          <div style={{ fontSize: 11, color: "#34d399", fontFamily: "var(--font-mono)", marginTop: 4 }}>
                            ${m.cost} · {m.days} Days Delivery
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: CLIENT CRM PIPELINE */}
              {activeTab === "pipeline" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
                    {(["prospects", "pitched", "negotiation", "active", "delivered", "paid"] as DealStatus[]).map((status) => {
                      const statusDeals = deals.filter((d) => d.status === status);
                      return (
                        <div key={status} style={{ background: "rgba(6,16,32,0.7)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 8 }}>
                            <span style={{ fontSize: 11, fontWeight: 800, color: "#10b981", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                              {status} ({statusDeals.length})
                            </span>
                          </div>

                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {statusDeals.map((deal) => (
                              <div key={deal.id} style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 12 }}>
                                <div style={{ fontSize: 12.5, fontWeight: 700, color: "#ffffff" }}>{deal.projectTitle}</div>
                                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                                  {deal.clientName} ({deal.company})
                                </div>
                                <div style={{ fontSize: 12, fontWeight: 800, color: "#34d399", fontFamily: "var(--font-mono)", marginTop: 6 }}>
                                  ₹{deal.dealValueINR.toLocaleString()}
                                </div>
                              </div>
                            ))}
                            {statusDeals.length === 0 && (
                              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textAlign: "center", padding: "10px 0" }}>
                                No deals in stage
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 4: SERVICES & RATES CATALOG */}
              {activeTab === "services" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
                    {SERVICE_PACKAGES.map((pkg) => (
                      <div key={pkg.id} style={{ background: "rgba(6,16,32,0.8)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 18, display: "flex", flexDirection: "column", gap: 10 }}>
                        <h4 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: "#ffffff" }}>{pkg.name}</h4>
                        <p style={{ margin: 0, fontSize: 11.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>
                          {pkg.description}
                        </p>

                        <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 10, padding: 10, marginTop: 4 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontFamily: "var(--font-mono)" }}>
                            <span style={{ color: "rgba(255,255,255,0.5)" }}>Starter:</span>
                            <span style={{ color: "#34d399", fontWeight: 700 }}>₹{pkg.starterPriceINR.toLocaleString()}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontFamily: "var(--font-mono)", marginTop: 3 }}>
                            <span style={{ color: "rgba(255,255,255,0.5)" }}>Professional:</span>
                            <span style={{ color: "#10b981", fontWeight: 800 }}>₹{pkg.proPriceINR.toLocaleString()}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontFamily: "var(--font-mono)", marginTop: 3 }}>
                            <span style={{ color: "rgba(255,255,255,0.5)" }}>Enterprise:</span>
                            <span style={{ color: "#00e5ff", fontWeight: 800 }}>₹{pkg.enterprisePriceINR.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: INVOICES & REVENUE */}
              {activeTab === "invoices" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
                    <div style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 16, padding: 18 }}>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)" }}>TOTAL PAID REVENUE</div>
                      <div style={{ fontSize: 24, fontWeight: 900, color: "#10b981", marginTop: 4, fontFamily: "var(--font-display)" }}>
                        ₹{totalEarnedRevenue.toLocaleString()}
                      </div>
                    </div>
                    <div style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: 16, padding: 18 }}>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)" }}>ACTIVE INVOICES</div>
                      <div style={{ fontSize: 24, fontWeight: 900, color: "#60a5fa", marginTop: 4, fontFamily: "var(--font-display)" }}>
                        {invoices.length} Invoices
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {invoices.map((inv) => (
                      <div key={inv.id} style={{ background: "rgba(6,16,32,0.8)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "#ffffff" }}>{inv.projectTitle}</div>
                          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)", marginTop: 2 }}>
                            {inv.id} · {inv.clientName} · Gateway: {inv.paymentGateway}
                          </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: 14, fontWeight: 800, color: "#34d399", fontFamily: "var(--font-mono)" }}>
                            ₹{inv.amountINR.toLocaleString()}
                          </div>
                          <span style={{ fontSize: 9.5, padding: "2px 8px", borderRadius: 6, background: inv.status === "paid" ? "rgba(16,185,129,0.15)" : "rgba(59,130,246,0.15)", color: inv.status === "paid" ? "#10b981" : "#60a5fa", fontWeight: 700, textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                            {inv.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* LEVEL 6 HUMAN APPROVAL GATE MODAL FOR OUTREACH DISPATCH */}
            {outreachDraft && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(2, 5, 14, 0.95)",
                  backdropFilter: "blur(20px)",
                  zIndex: 110,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 24,
                }}
              >
                <div
                  style={{
                    width: "min(720px, 94vw)",
                    background: "#081224",
                    border: "1px solid rgba(239, 68, 68, 0.5)",
                    borderRadius: 20,
                    boxShadow: "0 0 60px rgba(239, 68, 68, 0.25)",
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <AlertTriangle size={22} style={{ color: "#ef4444" }} />
                      <span style={{ fontSize: 14, fontWeight: 800, color: "#ef4444", fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
                        🛡️ Level 6 Human Approval Gate Required
                      </span>
                    </div>
                    <button
                      onClick={() => setOutreachDraft(null)}
                      style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer" }}
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                    JARVIS is preparing to dispatch an automated B2B outreach email. Please review the recipient and body below before authorizing dispatch.
                  </p>

                  <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 8, fontSize: 12 }}>
                    <div>
                      <span style={{ color: "rgba(255,255,255,0.4)" }}>To: </span>
                      <span style={{ color: "#38bdf8", fontWeight: 700 }}>{outreachDraft.recipientEmail}</span>
                    </div>
                    <div>
                      <span style={{ color: "rgba(255,255,255,0.4)" }}>Subject: </span>
                      <span style={{ color: "#ffffff", fontWeight: 700 }}>{outreachDraft.subject}</span>
                    </div>
                  </div>

                  <pre style={{ margin: 0, fontSize: 11.5, fontFamily: "var(--font-mono)", color: "#ffffff", background: "rgba(0,0,0,0.5)", padding: 14, borderRadius: 12, maxHeight: 180, overflowY: "auto", whiteSpace: "pre-wrap", lineHeight: 1.5 }}>
                    {outreachDraft.body}
                  </pre>

                  {gateApproved ? (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 12, background: "rgba(16,185,129,0.2)", border: "1px solid #10b981", borderRadius: 12, color: "#10b981", fontWeight: 800 }}>
                      <CheckCircle2 size={18} />
                      <span>Authorized! Outreach Dispatched to Client.</span>
                    </div>
                  ) : (
                    <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
                      <button
                        onClick={() => setOutreachDraft(null)}
                        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: "10px 18px", color: "#ffffff", fontWeight: 700, cursor: "pointer", fontSize: 12 }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleConfirmDispatchEmail}
                        style={{ background: "#ef4444", color: "#ffffff", border: "none", borderRadius: 10, padding: "10px 22px", fontWeight: 800, cursor: "pointer", fontSize: 12 }}
                      >
                        Authorize & Dispatch Email
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
