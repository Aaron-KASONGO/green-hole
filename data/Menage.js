import { Alert } from "react-native";
import { supabase } from "../lib/supabase";

export default class Menage{



    static async getAllMenage(email) {
        
        let { data, error } = await supabase
            .from('Menage')
            .select('nom, prenom, latitude, longitude, adresse, description, image, email, Souscription(id, created_at, Menage(id, nom, prenom, adresse, image, email))')
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

    static async getAbonne(email) {
        
        let { data, error } = await supabase
            .from('Menage')
            .select('id,nom, prenom, latitude, longitude, adresse, description, image, email, Souscription(id, created_at, Collecteur(id,nom_mark, nom, prenom, adresse, image, email))')
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