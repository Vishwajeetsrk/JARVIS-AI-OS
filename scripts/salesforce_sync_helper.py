"""
Salesforce & Razorpay Daily Donation Automation Helper
Assists with:
1. Formatting Razorpay donation payments for Salesforce Data Loader
2. Identifying new donors vs existing accounts by Email / Phone
3. Generating Lead-to-Donor conversion files & PAN update CSVs
4. Structuring Opportunities insert templates
5. Generating standardized status reconciliation update emails
"""

import sys
import os
import json
import datetime
from pathlib import Path

def get_local_recipient_name():
    config_file = Path(__file__).parent.parent / "data" / "assistant_config.json"
    if config_file.exists():
        try:
            with open(config_file, "r", encoding="utf-8") as f:
                data = json.load(f)
                return data.get("salesforce_email_recipient", "Operations Team Lead")
        except Exception:
            pass
    return "Operations Team Lead"

def generate_email_template(update_date=None, total_donations=0, total_amount=0, new_leads_count=0):
    if not update_date:
        update_date = (datetime.datetime.now() - datetime.timedelta(days=1)).strftime("%d-%m-%Y")
    
    recipient = get_local_recipient_name()
    subject = f"Salesforce Update Completed till {update_date} — Razorpay Donations Sync"
    
    body = f"""Dear {recipient},

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

All corresponding donation and tax exemption records have been verified and updated in Salesforce.

Please let me know if you need any additional reports or reconciliation details.

Warm regards,
Operations Team
"""
    return {"subject": subject, "body": body}

def get_salesforce_workflow_steps():
    return [
        {
            "step": 1,
            "title": "Razorpay Export",
            "desc": "Download donation transaction CSV from Razorpay Dashboard (Filter: Captured, Paid)."
        },
        {
            "step": 2,
            "title": "Excel Cleansing",
            "desc": "Clean phone numbers (10 digits), validate email formats, separate First & Last Name, extract PAN."
        },
        {
            "step": 3,
            "title": "Donor Verification",
            "desc": "Verify if donor exists in Salesforce using Phone / Email matching."
        },
        {
            "step": 4,
            "title": "Lead Creation & Conversion",
            "desc": "If donor is new, create Lead in Salesforce and convert to Donor Account / Contact."
        },
        {
            "step": 5,
            "title": "PAN Matching & 80G Updates",
            "desc": "Match Account ID, Contact ID, and update PAN for 80G tax exemption receipts."
        },
        {
            "step": 6,
            "title": "Data Loader Batch Upload",
            "desc": "Prepare Opportunities CSV format and execute batch Insert via Salesforce Data Loader."
        },
        {
            "step": 7,
            "title": "Status Reconciliation Email",
            "desc": "Generate and send final confirmation update email with date range and total reconciled amounts."
        }
    ]

if __name__ == "__main__":
    email = generate_email_template()
    print("=" * 60)
    print(f"SUBJECT: {email['subject']}\n")
    print(email['body'])
    print("=" * 60)
