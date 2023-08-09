import { Alert } from "react-native";
import { supabase } from "../lib/supabase";

export default class Note{

    static async getNote(email) {
        
        let { data, error } = await supabase
            .from('Note')
            .select('id, note, Souscription(id, created_at, Collecteur(id, email))')
            .eq('Souscription.Collecteur.email', email)
        
        if (error) {
            Alert.alert(error.message);
        }
        
        if (data.length !== 0) {
            return data;
        } else {
            return data;
        }
    }
}