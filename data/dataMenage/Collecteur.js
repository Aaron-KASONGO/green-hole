import { Alert } from "react-native";
import { supabase } from "../../lib/supabase";

export default class CollecteurMenage{

    static async getCollecteurs(email) {
        
        let { data, error } = await supabase
            .from('Menage')
            .select('nom, prenom, latitude, longitude, adresse, description, image, email, Souscription(id, created_at,note, Collecteur(id, prenom, nom, image, email, description, Souscription(id, note)), Demande(id))')
            .eq('email', email)
        
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