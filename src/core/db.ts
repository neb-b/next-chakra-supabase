import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.DB_URL as string, process.env.DB_ANON_KEY as string)

export default supabase
