import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL ='https://qbsrrugkphvesxzmsexj.supabase.co';
const SUPABASE_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFic3JydWdrcGh2ZXN4em1zZXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MDkyOTUsImV4cCI6MjA3ODM4NTI5NX0.NfRSeO5t5XpGzAc8ApldBYUZFASGL5HyiMV-4m2x_FU';

export const supabase =createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);