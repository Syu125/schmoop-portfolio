# Case Study Spec: AI Course Assistant for LIGN 167

## Project Snapshot (Hero Section)

- **Title:** AI Course Assistant
- **Subtitle:** Interactive Dashboard for Students & Professors in LIGN 167
- **Role:** Student Developer / Designer (Course Project – LIGN 167)
- **Timeline:** Winter 2025
- **Tools/Skills:** Python, React, GPT-based chat integration, prompt engineering, dashboard UI design
- **Team:** Independent project
- **Visuals:**
  - Sticker icon (open book + dashboard 📚🖥️🤖)
  - Snapshot badges/cards for Role, Tools, Timeline, Team

---

## Context & Problem Section

- **Narrative:**

  - Students in LIGN 167 (Language & Cognition) often struggle to consolidate lecture material and apply it to assignments.
  - Professors have limited time to create individualized study aids or answer repetitive questions.
  - Existing course platforms (Canvas, PDFs) are static and offer little interactive support.
  - Opportunity: create an **AI-powered course assistant** with separate student and professor dashboards.
  - Challenge: aligning GPT-generated responses with course-approved content while providing a seamless UX.

- **Visuals:**
  - Illustration: Student 🤔 “How do I study for the midterm?” → Static PDF 📄 vs. Student → AI Course Assistant 💬 → Personalized Study Guide ✅
  - Optional: split-screen showing student view vs. professor view.

---

## Process Section

- **Narrative:**

  - Defined two user types:
    - **Students**:
      - Receive unique study guides.
      - Chat with lecture transcripts using GPT to clarify concepts.
    - **Professors**:
      - Manage what content students can access.
      - Upload or update lecture materials.
  - Implemented GPT-based chat restricted to course transcripts.
  - Built a dashboard interface (React frontend + Python backend) for both students and professors.
  - Developed content-management controls so instructors can gate or approve materials.
  - Conducted informal testing with sample lecture data to ensure accuracy and usability.

- **Visuals:**
  - System diagram:
    - Student Dashboard → GPT Chat (Course Transcripts)
    - Professor Dashboard → Content Management Module
  - Timeline:
    - Week 1–2 → Requirements Gathering & Wireframes
    - Week 3–4 → Backend & GPT Integration
    - Week 5 → UI Implementation & Testing

---

## Solution & Outcome Section

- **Narrative:**

  - Delivered a working prototype of an AI Course Assistant for LIGN 167.
  - Students could interactively query lecture transcripts and generate tailored study guides.
  - Professors could control content visibility and maintain alignment with the syllabus.
  - Demonstrated the app at the final project showcase, receiving positive feedback for its dual-dashboard design.

- **Visuals:**
  - Placeholder stat callouts (“X study guides generated,” “Y professor-controlled modules”)
  - 📄 Showcase milestone badge

---

## Reflection Section

- **Narrative:**

  - Key learnings:
    - Designing for two distinct user groups (students vs. professors).
    - Prompt engineering to confine GPT responses to approved material.
    - Building dashboards that balance autonomy (student self-study) with oversight (professor control).
  - Future directions:
    - Integrate analytics to track common student questions.
    - Add quiz generation from transcripts.
    - Conduct a formal usability study to measure learning outcomes.

- **Visuals:**
  - Sticky-note takeaway boxes: _Dual-Dashboard Design_, _Course-Specific GPT Integration_, _Educational UX_
  - Transition visual: open book + dashboard 📚🖥️🤖 leading into next case study.
