# Notion Productivity Bundle — 12 Premium Templates
### by PromptForge

---

## How to Use These Templates

1. **Read the template description** to understand its purpose
2. **Create a new Notion page** for each template
3. **Follow the step-by-step setup** instructions provided
4. **Add the database properties** exactly as specified
5. **Create the views** described for each template
6. **Customize** with your own data and preferences

**Pro Tip:** Duplicate this entire system into a single Notion workspace and link databases together for a powerful personal operating system.

---

## Template 1: Project Management Dashboard

### Purpose
Track all your projects from idea to completion with full visibility into status, priority, timeline, and team assignments.

### Database Schema

| Property | Type | Options/Format |
|----------|------|----------------|
| Project Name | Title | — |
| Status | Select | Idea, Planning, In Progress, Review, Done, On Hold |
| Priority | Select | P1-Critical, P2-High, P3-Medium, P4-Low |
| Due Date | Date | Date range (start + end) |
| Assignee | Person | Multi-select people |
| Progress | Number | Percentage (0-100) |
| Category | Select | Marketing, Product, Operations, Sales, Personal |
| Tags | Multi-select | Customize per your needs |
| Estimated Hours | Number | Hours |
| Actual Hours | Number | Hours |
| Client/Stakeholder | Text | Related client name |
| Notes | Text | Rich text field |
| Dependencies | Relation | Link to other projects |
| Created | Created time | Auto |
| Last Edited | Last edited time | Auto |

### Views to Create

1. **Board View (Default)** — Group by Status, show Priority color
2. **Table View** — All projects with sorting by Due Date
3. **Calendar View** — Filter by Due Date, color by Priority
4. **My Tasks** — Filter: Assignee = Me, Status ≠ Done
5. **Overdue** — Filter: Due Date < Today AND Status ≠ Done

### Setup Steps
1. Create a full-page database titled "Projects"
2. Add all properties from the schema above
3. Set Status colors: Idea=Gray, Planning=Blue, In Progress=Yellow, Review=Orange, Done=Green, On Hold=Red
4. Create the 5 views listed above
5. Add your first 3 projects to test the system

### Example Data
| Project | Status | Priority | Due Date | Progress |
|---------|--------|----------|----------|----------|
| Website Redesign | In Progress | P1 | Mar 15 | 65% |
| Q2 Marketing Plan | Planning | P2 | Mar 30 | 20% |
| New Blog Series | Idea | P3 | Apr 15 | 0% |

---

## Template 2: Client CRM System

### Purpose
Manage all client relationships, track deals through your pipeline, log communications, and never miss a follow-up.

### Database Schema

| Property | Type | Options/Format |
|----------|------|----------------|
| Contact Name | Title | — |
| Company | Text | — |
| Email | Email | — |
| Phone | Phone | — |
| Deal Stage | Select | Lead, Qualified, Proposal, Negotiation, Won, Lost |
| Deal Value | Number | Currency ($) |
| Source | Select | Referral, Website, Social Media, Cold Outreach, Event |
| Last Contact | Date | — |
| Next Follow-up | Date | — |
| Notes | Text | Rich text |
| Tags | Multi-select | VIP, Partner, Enterprise, SMB, Startup |
| Assigned To | Person | — |
| Created | Created time | Auto |
| Communication Log | Relation | Link to Communications DB |

### Supporting Database: Communication Log

| Property | Type |
|----------|------|
| Subject | Title |
| Contact | Relation (to CRM) |
| Type | Select: Email, Call, Meeting, Chat |
| Date | Date |
| Summary | Text |
| Follow-up Needed | Checkbox |

### Views
1. **Pipeline Board** — Group by Deal Stage
2. **All Contacts** — Table sorted by Last Contact
3. **Follow-ups Due** — Filter: Next Follow-up ≤ Today + 7 days
4. **High Value Deals** — Filter: Deal Value > $5000, Sort by Stage
5. **By Source** — Table grouped by Source

### Formulas
- **Days Since Contact**: `dateBetween(now(), prop("Last Contact"), "days")`
- **Deal Health**: If Days Since Contact > 14, show "At Risk"

---

## Template 3: Content Calendar & Pipeline

### Purpose
Plan, create, and publish content across all platforms with a clear editorial calendar and status tracking.

### Database Schema

| Property | Type | Options/Format |
|----------|------|----------------|
| Content Title | Title | — |
| Status | Select | Idea, Outlined, Writing, Editing, Scheduled, Published |
| Content Type | Select | Blog Post, Social Media, Newsletter, Video, Podcast |
| Platform | Multi-select | Website, Twitter, LinkedIn, Instagram, YouTube, Newsletter |
| Publish Date | Date | — |
| Author | Person | — |
| Content Pillar | Select | Educational, Entertaining, Promotional, Community |
| Target Keyword | Text | SEO keyword |
| Word Count | Number | — |
| URL | URL | Published link |
| Performance | Select | High, Medium, Low (filled after publishing) |
| Assets Needed | Multi-select | Image, Video, Infographic, Screenshot |
| Notes | Text | Brief, outline, or draft |

### Views
1. **Calendar** — By Publish Date, color by Content Type
2. **Pipeline Board** — Group by Status
3. **By Platform** — Table grouped by Platform
4. **This Week** — Filter: Publish Date = This Week
5. **Content Ideas** — Filter: Status = Idea, sort by created date

### Weekly Workflow
- **Monday**: Review calendar, plan the week's content
- **Tuesday-Thursday**: Create content (move from Outlined → Writing → Editing)
- **Friday**: Schedule content for next week
- **Weekend**: Monitor engagement, save ideas

---

## Template 4: Habit Tracker & Goal Setting

### Purpose
Track daily habits, build streaks, and align habits with quarterly goals for continuous personal growth.

### Habits Database

| Property | Type |
|----------|------|
| Habit Name | Title |
| Category | Select: Health, Productivity, Learning, Wellness, Finance |
| Frequency | Select: Daily, Weekdays, 3x/Week, Weekly |
| Time of Day | Select: Morning, Afternoon, Evening, Anytime |
| Current Streak | Number |
| Best Streak | Number |
| Goal (Related) | Relation |
| Active | Checkbox |

### Daily Log Database

| Property | Type |
|----------|------|
| Date | Title (formatted as date) |
| Habits Completed | Relation (to Habits) |
| Completion Rate | Formula: count completed / total active |
| Energy Level | Select: 1-5 |
| Mood | Select: Great, Good, Okay, Low |
| Journal Entry | Text |
| Sleep Hours | Number |

### Goals Database

| Property | Type |
|----------|------|
| Goal | Title |
| Category | Select |
| Deadline | Date |
| Progress | Number (%) |
| Milestones | Text |
| Why It Matters | Text |
| Status | Select: Active, Completed, Paused |
| Related Habits | Relation (to Habits) |

### Views
1. **Today's Habits** — Checklist view for daily tracking
2. **Streak Board** — Sorted by Current Streak (descending)
3. **Monthly Calendar** — Log entries by date
4. **Goal Progress** — Active goals with progress bars
5. **Analytics** — Weekly completion rates

---

## Template 5: Finance & Budget Tracker

### Purpose
Track income, expenses, budgets, and savings goals with monthly and category-level visibility.

### Transactions Database

| Property | Type |
|----------|------|
| Description | Title |
| Amount | Number (currency) |
| Type | Select: Income, Expense |
| Category | Select: Salary, Freelance, Subscriptions, Food, Transport, Entertainment, Utilities, Shopping, Health, Savings, Other |
| Date | Date |
| Payment Method | Select: Cash, Debit, Credit, Transfer |
| Recurring | Checkbox |
| Notes | Text |

### Budget Database

| Property | Type |
|----------|------|
| Category | Title |
| Monthly Budget | Number |
| Spent (Rollup) | Rollup from Transactions |
| Remaining | Formula: Budget - Spent |
| Status | Formula: If Remaining < 0, "Over Budget", If Remaining < Budget*0.2, "Warning", "On Track" |

### Savings Goals Database

| Property | Type |
|----------|------|
| Goal | Title |
| Target Amount | Number |
| Current Amount | Number |
| Deadline | Date |
| Progress | Formula: Current/Target * 100 |
| Monthly Contribution | Number |

### Views
1. **Monthly Overview** — Transactions filtered by current month
2. **Budget Dashboard** — Budget vs actual by category
3. **Income vs Expenses** — Table with sums
4. **Savings Progress** — Gallery view of goals with progress
5. **Recurring Payments** — Filter: Recurring = checked

---

## Template 6: Meeting Notes System

### Purpose
Never lose meeting context. Link notes to projects, track action items, and ensure follow-through.

### Database Schema

| Property | Type |
|----------|------|
| Meeting Title | Title |
| Date | Date |
| Attendees | Multi-select (or Person) |
| Meeting Type | Select: 1:1, Team, Client, All-Hands, Interview, Strategy |
| Project | Relation (to Projects DB) |
| Duration | Number (minutes) |
| Status | Select: Scheduled, In Progress, Completed |
| Recording Link | URL |
| Follow-up Date | Date |

### Page Template (Inside Each Meeting)
```
## Agenda
- [ ] Item 1
- [ ] Item 2
- [ ] Item 3

## Notes
[Meeting notes here]

## Decisions Made
1. [Decision 1]
2. [Decision 2]

## Action Items
- [ ] [Action] — Owner: [Name] — Due: [Date]
- [ ] [Action] — Owner: [Name] — Due: [Date]

## Follow-up
Next meeting: [Date]
Topics for next time: [List]
```

### Views
1. **Upcoming** — Filter: Date ≥ Today, sort by Date
2. **Action Items** — All unchecked action items across meetings
3. **By Project** — Grouped by Project relation
4. **Calendar** — Monthly view by meeting date
5. **1:1 Notes** — Filter: Type = 1:1

---

## Template 7: Knowledge Base / Wiki

### Purpose
Build your personal or team wiki with organized, searchable documentation.

### Database Schema

| Property | Type |
|----------|------|
| Page Title | Title |
| Category | Select: Processes, Tools, Guides, Policies, Reference, Templates |
| Tags | Multi-select |
| Author | Person |
| Last Updated | Last edited time |
| Status | Select: Draft, Published, Needs Update, Archived |
| Related Pages | Relation (self-referencing) |

### Page Template
```
## Overview
[Brief description of this topic]

## Details
[Comprehensive documentation]

## Examples
[Real-world examples]

## Resources
- [Link 1]
- [Link 2]

## Changelog
| Date | Change | Author |
|------|--------|--------|
```

### Views
1. **All Pages** — Table sorted by Last Updated
2. **By Category** — Board grouped by Category
3. **Search** — Table with title filter
4. **Recently Updated** — Sort by Last Updated, top 20
5. **Needs Update** — Filter: Status = Needs Update

---

## Template 8: Weekly Review Template

### Purpose
Reflect on your week, celebrate wins, learn from challenges, and plan the next week intentionally.

### Database Schema

| Property | Type |
|----------|------|
| Week | Title (e.g., "Week 9 - Mar 3") |
| Date Range | Date (range) |
| Overall Rating | Select: ★★★★★ to ★ |
| Energy Level | Select: High, Medium, Low |
| Focus Word | Text |

### Page Template (Weekly Entry)
```
## 🏆 Top 3 Wins This Week
1.
2.
3.

## 📚 What I Learned
-

## 🔍 What Didn't Go Well (and Why)
-

## 📊 Key Metrics
- Hours worked:
- Tasks completed:
- Revenue:
- Content published:

## 🙏 Gratitude
-

## 🎯 Next Week's Top 3 Priorities
1.
2.
3.

## 💡 Ideas & Notes
-
```

---

## Template 9: Book & Learning Tracker

### Database Schema

| Property | Type |
|----------|------|
| Title | Title |
| Author | Text |
| Type | Select: Book, Course, Podcast, Article, Video |
| Status | Select: Want to Read, Reading, Completed, Abandoned |
| Rating | Select: ★★★★★ to ★ |
| Start Date | Date |
| Finish Date | Date |
| Category | Select: Business, Self-Help, Technical, Fiction, Science, History |
| Key Takeaways | Text |
| Favorite Quotes | Text |
| Would Recommend | Checkbox |
| Notes URL | URL |

### Views
1. **Currently Reading** — Filter: Status = Reading
2. **Reading List** — Filter: Status = Want to Read
3. **Completed** — Sorted by Rating (descending)
4. **By Category** — Gallery grouped by Category
5. **Recommendations** — Filter: Would Recommend = checked

---

## Template 10: Job Application Tracker

### Database Schema

| Property | Type |
|----------|------|
| Company | Title |
| Position | Text |
| Location | Text |
| Salary Range | Text |
| Status | Select: Researching, Applied, Phone Screen, Interview, Offer, Rejected, Accepted |
| Applied Date | Date |
| Job URL | URL |
| Contact Person | Text |
| Contact Email | Email |
| Resume Version | Text |
| Cover Letter | Checkbox |
| Next Step | Text |
| Next Step Date | Date |
| Notes | Text |
| Excitement Level | Select: 🔥🔥🔥, 🔥🔥, 🔥 |

### Views
1. **Pipeline Board** — Group by Status
2. **Active Applications** — Filter: Status not Rejected/Accepted
3. **Follow-ups Needed** — Filter: Next Step Date ≤ Today + 3 days
4. **By Excitement** — Sort by Excitement Level
5. **Calendar** — By Applied Date and Next Step Date

---

## Template 11: Social Media Planner

### Database Schema

| Property | Type |
|----------|------|
| Post Title/Hook | Title |
| Platform | Select: Instagram, Twitter/X, LinkedIn, TikTok, Facebook |
| Content Type | Select: Image, Carousel, Reel/Video, Story, Thread, Article |
| Status | Select: Idea, Drafting, Ready, Scheduled, Published |
| Publish Date | Date |
| Caption | Text |
| Hashtags | Text |
| Media Required | Multi-select: Photo, Graphic, Video, Screenshot |
| Content Pillar | Select: Educational, Entertaining, Promotional, Behind-the-Scenes |
| Engagement | Number (likes + comments, filled post-publish) |
| Link | URL |
| Campaign | Text |

### Views
1. **Calendar** — By Publish Date, color by Platform
2. **This Week** — Filter: Publish Date = This Week
3. **By Platform** — Board grouped by Platform
4. **Content Ideas** — Filter: Status = Idea
5. **Top Performers** — Sort by Engagement (descending)

---

## Template 12: Product Launch Checklist

### Database Schema

| Property | Type |
|----------|------|
| Task | Title |
| Phase | Select: Pre-Launch, Launch Day, Post-Launch |
| Category | Select: Product, Marketing, Sales, Support, Legal, Operations |
| Status | Select: Not Started, In Progress, Done, Blocked |
| Owner | Person |
| Due Date | Date |
| Priority | Select: Critical, Important, Nice-to-Have |
| Dependencies | Relation (self) |
| Notes | Text |

### Pre-populated Tasks

**Pre-Launch (2 weeks before)**
- [ ] Product/feature finalized and tested
- [ ] Pricing confirmed
- [ ] Landing page live
- [ ] Email announcement drafted
- [ ] Social media content created (5 posts)
- [ ] Blog post written
- [ ] Press release drafted
- [ ] Support FAQ updated
- [ ] Analytics tracking set up
- [ ] A/B test plan ready

**Launch Day**
- [ ] Email blast sent
- [ ] Social media posts published
- [ ] Blog post published
- [ ] Team notified
- [ ] Monitor for issues (every 2 hours)
- [ ] Respond to early feedback
- [ ] Share launch on communities (Reddit, HN, etc.)

**Post-Launch (1 week after)**
- [ ] Collect and analyze feedback
- [ ] Review analytics (traffic, conversions, revenue)
- [ ] Send follow-up email to leads
- [ ] Write retrospective
- [ ] Plan iteration based on feedback
- [ ] Thank early customers
- [ ] Create case study from first results

### Views
1. **Board** — Group by Phase
2. **My Tasks** — Filter by Owner
3. **Timeline** — Calendar by Due Date
4. **Critical Path** — Filter: Priority = Critical
5. **Blocked Items** — Filter: Status = Blocked

---

*Thank you for purchasing the Notion Productivity Bundle!*
*For support: promptforge.ai@gmail.com*

© 2026 PromptForge. All rights reserved. Commercial use permitted.
