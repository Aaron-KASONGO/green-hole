import { Alert } from "react-native";
import { supabase } from "../lib/supabase";

export default class Collecteur{

    static getCollecteur() {
        return supabase.from('Collecteur')
    }


    static async getAllCollecteur() {
        
        let { data, error } = await this.getCollecteur()
            .select('nom_mark,description nom, prenom, latitude, longitude, adresse, description, image, email')
        
        if (error) {
            Alert.alert(error.message);
        }
        
        if (data.length !== 0) {
            return data;
        } else {
            return data;
        }

    }

    static async getCollecteurProfile(email) {
        
        let { data, error } = await this.getCollecteur()
            .select('nom_mark, nom, prenom, latitude, longitude, adresse, description, image, email, Souscription(id, created_at, Menage(id), Demande(id))')
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