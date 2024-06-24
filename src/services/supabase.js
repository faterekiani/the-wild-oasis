import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qwkxyhpwscobcfsogwhi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3a3h5aHB3c2NvYmNmc29nd2hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg1MTAxNjQsImV4cCI6MjAzNDA4NjE2NH0.lEX-IiUYUu_sGa_SKT0YUZqYNLbQ4xsEULfJ2Iy-W1Y";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
