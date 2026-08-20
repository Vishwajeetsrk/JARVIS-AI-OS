import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { salesforceClient, type DonorRecord } from "./integrations/salesforce-client";

export const reconcileDonationFn = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z.object({
      name: z.string(),
      email: z.string().email(),
      phone: z.string().optional().default(""),
      pan: z.string().optional().default(""),
      amount: z.number().positive(),
      paymentId: z.string(),
      campaign: z.string().optional().default("General Donation"),
    }).parse(data)
  )
  .handler(async ({ data }) => {
    const donor: DonorRecord = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      pan: data.pan,
      amount: data.amount,
      paymentId: data.paymentId,
      donationDate: new Date().toISOString().split("T")[0],
      campaign: data.campaign,
    };

    const res = await salesforceClient.syncRazorpayDonation(donor);
    return res;
  });
