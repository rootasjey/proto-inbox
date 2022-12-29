type Message = {
  body: string
  contact_id: string
  created_at: Date
  id: string
  type: "email" | "phone" | "sms"
  is_read: boolean
  realtor_id: string,
  subject: string 
  updated_at: Date
}