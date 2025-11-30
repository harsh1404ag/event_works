// WhatsApp Business API integration utilities

export interface WhatsAppMessage {
  to: string;
  message: string;
  type: 'text' | 'template';
}

export const sendWhatsAppMessage = async (message: WhatsAppMessage) => {
  try {
    const response = await fetch('/api/whatsapp/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error('Failed to send WhatsApp message');
    }

    return await response.json();
  } catch (error) {
    console.error('WhatsApp send error:', error);
    throw error;
  }
};

export const sendVendorAvailabilityCheck = async (
  vendorPhone: string,
  weddingDate: Date,
  city: string,
  leadId: string
) => {
  const message = `
🎉 *New Wedding Inquiry - Event Works*

📅 *Wedding Date:* ${weddingDate.toLocaleDateString('en-IN')}
📍 *Location:* ${city}
🆔 *Lead ID:* ${leadId}

Are you available for this date? Please reply with:
✅ AVAILABLE
❌ NOT AVAILABLE

Thank you!
*Event Works Team*
  `.trim();

  return sendWhatsAppMessage({
    to: vendorPhone,
    message,
    type: 'text',
  });
};

export const sendClientConfirmation = async (
  clientPhone: string,
  clientName: string,
  leadId: string
) => {
  const message = `
🎉 *Thank you ${clientName}!*

Your wedding package request has been received.

📋 *Request ID:* ${leadId}
⏰ *Response Time:* Within 2 hours
📞 *Contact:* +91 94656 38069

Our team is checking vendor availability and will contact you soon with your personalized quote.

*Event Works - Making Dreams Come True* ✨
  `.trim();

  return sendWhatsAppMessage({
    to: clientPhone,
    message,
    type: 'text',
  });
};