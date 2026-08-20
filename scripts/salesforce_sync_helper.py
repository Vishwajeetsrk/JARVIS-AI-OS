"""
Salesforce & Razorpay Daily Donation Automation Helper
Assists Vishwajeet in:
1. Formatting yesterday's Razorpay donation payments for Salesforce Data Loader
2. Identifying new donors vs existing accounts by Email / Phone
3. Generating Lead-to-Donor conversion files & PAN update CSVs
4. Structuring Opportunities insert templates
5. Generating standardized status emails for Bharathi Ma'am & Aswath Ma'am
"""

import sys
import os
import json
import datetime
from pathlib import Path

def generate_email_template(update_date=None, total_donations=0, total_amount=0, new_leads_count=0):
    if not update_date:
        update_date = (datetime.datetime.now() - datetime.timedelta(days=1)).strftime("%d-%m-%Y")
    
    today_str = datetime.datetime.now().strftime("%d-%m-%Y")

    subject = f"Salesforce Update Completed till {update_date} — Razorpay Donations Sync"
    
    body = f"""Respected Bharathi Ma'am,

Good day!

This is to confirm that I have successfully completed the Salesforce Data Loader update for all Razorpay donations up to {update_date}.

Summary of Salesforce Updates:
--------------------------------------------------
• Data Date Processed: Up to {update_date}
• Total Donations Processed: {total_donations if total_donations > 0 else '[Total Records]'}
• Total Amount Reconciled: ₹{total_amount if total_amount > 0 else '[Total Amount]'}
• New Donors/Leads Created & Converted: {new_leads_count if new_leads_count > 0 else '[New Leads Count]'}
• PAN Numbers Verified & Updated: Completed
• Opportunities Inserted in Salesforce: Completed via Data Loader
--------------------------------------------------

I have also reviewed pending exception emails and special donation requests from you and Aswath Ma'am, and all corresponding records have been verified and updated in Salesforce.

Please let me know if you need any additional reports or reconciliation details.

Warm regards,
Vishwajeet
"""
    return {"subject": subject, "body": body}

def get_salesforce_workflow_steps():
    return [
        {
            "step": 1,
            "title": "Razorpay Export",
            "desc": "Download yesterday's donation transaction CSV from Razorpay Dashboard (Filter: Captured, Paid)."
        },
        {
            "step": 2,
            "title": "Excel Cleansing",
            "desc": "Clean phone numbers (10 digits), validate email formats, separate First & Last Name, extract PAN."
        },
        {
            "step": 3,
            "title": "Salesforce Donor Verification",
            "desc": "Search Salesforce using Email/Phone. If existing -> fetch Account ID & Donor ID. If new -> Create Lead & convert to Donor."
        },
        {
            "step": 4,
            "title": "PAN Update",
            "desc": "Update Account PAN details using matched Donor ID for 80G tax exemption compliance."
        },
        {
            "step": 5,
            "title": "Opportunities Data Loader Insert",
            "desc": "Map Account ID, Donation Amount, Close Date, Stage='Closed Won', Payment Mode='Razorpay' -> Upload via Data Loader."
        },
        {
            "step": 6,
            "title": "Status Email to Bharathi Ma'am",
            "desc": "Send formal update confirmation email with reconciliation summary."
        },
        {
            "step": 7,
            "title": "Exception Queries & Aswath Ma'am Verification",
            "desc": "Check and resolve any offline/liquor donation queries and reply via email."
        }
    ]

if __name__ == "__main__":
    print("=" * 70)
    print("  SALESFORCE & RAZORPAY DAILY DONATION WORKFLOW HELPER")
    print("=" * 70)
    
    steps = get_salesforce_workflow_steps()
    for s in steps:
        print(f"  [{s['step']}] {s['title']}")
        print(f"      -> {s['desc']}\n")
        
    email = generate_email_template()
    print("=" * 70)
    print("  SAMPLE EMAIL TEMPLATE FOR BHARATHI MA'AM:")
    print("=" * 70)
    print(f"Subject: {email['subject']}\n")
    print(email['body'])
