import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vconzsfwvvbewkvvhrrg.supabase.co'
const supabaseKey = 'sb_publishable_51aqwwTxb3hMiUWEdAT1vg_ApoNNiYh'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)