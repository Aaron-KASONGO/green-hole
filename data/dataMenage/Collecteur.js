import { Alert } from "react-native";
import { supabase } from "../../lib/supabase";

export default class CollecteurMenage{

    static getMenage() {
        return supabase.from('Menage')
    }


    static async getCollecteurs(email) {
        
        let { data, error } = await this.getMenage()
            .select('nom, prenom, latitude, longitude, adresse, description, image, email, Souscription(id, created_at, Collecteur(id, mark, nom, prenom, description))')
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