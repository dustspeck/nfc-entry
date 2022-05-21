const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SB_DB_URL;
const supabaseKey = process.env.SB_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
